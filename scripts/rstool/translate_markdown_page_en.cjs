/**
 * 使用 Google Translate 为手写 Markdown 页面生成英文镜像。
 *
 * 文档内容会发送到外部服务，必须显式确认：
 *   node scripts/rstool/translate_markdown_page_en.cjs <源文件> <目标文件> --confirm-public-docs-upload
 */
const crypto = require('node:crypto')
const fs = require('node:fs')
const path = require('node:path')

if (!process.argv.includes('--confirm-public-docs-upload')) {
  throw new Error(
    '此脚本会把公开文档发送到 Google Translate。获得明确授权后，请添加 --confirm-public-docs-upload。'
  )
}

const positional = process.argv.slice(2).filter((arg) => !arg.startsWith('--'))
if (positional.length !== 2) {
  throw new Error('用法：translate_markdown_page_en.cjs <源文件> <目标文件>')
}

const repoRoot = path.resolve(__dirname, '../..')
const sourcePath = path.resolve(repoRoot, positional[0])
const targetPath = path.resolve(repoRoot, positional[1])
const pageMapPath = path.join(__dirname, 'i18n/pages.en.json')
const cjk = /[\u3400-\u9fff]/
const separator = '\nZXQSEPARATORQXZ\n'
const maxBatchCharacters = 2800

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

function normalizeTerms(text) {
  return text
    .replace(/Rstool/gi, 'RsTool')
    .replace(/Rstool\.Grasshopper/gi, 'RSTool.Grasshopper')
    .replace(/Grass Hopper/gi, 'Grasshopper')
    .replace(/Web View 2/gi, 'WebView2')
    .replace(/Sketch Up/gi, 'SketchUp')
    .replace(/\bsubd\b/gi, 'SubD')
    .replace(/\bnurbs\b/gi, 'NURBS')
    .replace(/\bbrep\b/gi, 'Brep')
}

function protect(text) {
  const tokens = []
  const token = (value) => {
    const marker = `ZXQTK${tokens.length}QXZ`
    tokens.push(value)
    return marker
  }

  let masked = text.replace(/```[\s\S]*?```/g, token)
  masked = masked.replace(/`[^`\r\n]+`/g, token)
  masked = masked.replace(/(?<=\]\()[^)\r\n]+(?=\))/g, token)
  masked = masked.replace(/https?:\/\/[^\s)>]+/g, token)
  masked = masked.replace(/\brs[A-Z][A-Za-z0-9_]*\b/g, token)
  masked = masked.replace(/:::\s*(tip|warning|danger|info|details)\b/g, token)
  return { masked, tokens }
}

function restore(text, tokens) {
  let restored = normalizeTerms(text)
  tokens.forEach((value, index) => {
    const digits = String(index).split('').join('\\s*')
    restored = restored.replace(
      new RegExp(`ZXQTK\\s*${digits}\\s*QXZ`, 'gi'),
      value
    )
  })
  return restored
}

async function requestTranslation(text, attempt = 1) {
  const { masked, tokens } = protect(text)
  const body = new URLSearchParams({
    client: 'gtx',
    sl: 'zh-CN',
    tl: 'en',
    dt: 't',
    q: masked
  })

  try {
    const response = await fetch(
      'https://translate.googleapis.com/translate_a/single',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'user-agent': 'rstool-docs-translation/1.0'
        },
        body
      }
    )
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const payload = await response.json()
    return restore(payload[0].map((part) => part[0]).join(''), tokens)
  } catch (error) {
    if (attempt >= 5) throw error
    await delay(attempt * 2000)
    return requestTranslation(text, attempt + 1)
  }
}

async function translateBatch(blocks) {
  const translated = await requestTranslation(blocks.join(separator))
  const parts = translated.split(/\s*ZXQSEPARATORQXZ\s*/gi)
  if (parts.length === blocks.length) return parts.map((part) => part.trim())
  if (blocks.length === 1)
    throw new Error('Google Translate 未保留批处理分隔符')
  const middle = Math.ceil(blocks.length / 2)
  return [
    ...(await translateBatch(blocks.slice(0, middle))),
    ...(await translateBatch(blocks.slice(middle)))
  ]
}

async function main() {
  const source = fs.readFileSync(sourcePath, 'utf8').replace(/\r\n/g, '\n')
  const blocks = source.trimEnd().split(/\n{2,}/)
  const fixedHeadings = new Map([
    ['# 更新日志', '# Changelog'],
    ['### 新增', '### Added'],
    ['### 优化', '### Improved'],
    ['### 修复', '### Fixed'],
    ['::: tip 版本号说明', '::: tip Version numbering']
  ])
  const output = blocks.map((block) => fixedHeadings.get(block) || block)
  const pendingIndexes = output
    .map((block, index) => (cjk.test(block) ? index : -1))
    .filter((index) => index >= 0)

  let batch = []
  let batchIndexes = []
  let batchCharacters = 0
  const flush = async () => {
    if (!batch.length) return
    const translated = await translateBatch(batch)
    translated.forEach((block, index) => {
      output[batchIndexes[index]] = block
    })
    batch = []
    batchIndexes = []
    batchCharacters = 0
    await delay(1000)
  }

  for (const index of pendingIndexes) {
    const block = output[index]
    const extra = block.length + separator.length
    if (batch.length >= 16 || batchCharacters + extra > maxBatchCharacters) {
      await flush()
    }
    batch.push(block)
    batchIndexes.push(index)
    batchCharacters += extra
  }
  await flush()

  let translated = `${output.join('\n\n')}\n`
  translated = translated
    .replace(/\]\s+\(/g, '](')
    .replace(/\]\(\/commands\//g, '](/en/commands/')
    .replace(/（(\d{4}-\d{2}-\d{2})）/g, '($1)')
    .replace(
      /::: tip version number description/gi,
      '::: tip Version numbering'
    )
  const residual = translated
    .split('\n')
    .map((line, index) => ({ line: index + 1, text: line }))
    .filter(({ text }) => cjk.test(text))
  if (residual.length) {
    throw new Error(
      `英文页面仍含中文：${residual
        .slice(0, 10)
        .map(({ line }) => line)
        .join(', ')}`
    )
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true })
  fs.writeFileSync(targetPath, translated)

  const pages = JSON.parse(fs.readFileSync(pageMapPath, 'utf8'))
  const sourceRelative = path.relative(repoRoot, sourcePath).replace(/\\/g, '/')
  pages[sourceRelative] = crypto
    .createHash('sha256')
    .update(source)
    .digest('hex')
  fs.writeFileSync(pageMapPath, `${JSON.stringify(pages, null, 2)}\n`)
  console.log(
    `Translated ${sourceRelative} -> ${path.relative(repoRoot, targetPath)}`
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

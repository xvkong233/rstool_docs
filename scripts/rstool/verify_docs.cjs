/**
 * RsTool 双语文档发布校验：媒体、参数表、生成页漂移、翻译完整性与源文新鲜度。
 */
const crypto = require('node:crypto')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')
const { normalizeIllustrations, sourceHash } = require('./i18n.cjs')

const repoRoot = path.resolve(__dirname, '../..')
const docsDir = path.join(repoRoot, 'docs')
const source = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'commands.json'), 'utf8')
)
const translationPath = path.join(__dirname, 'i18n/commands.en.json')
let failures = 0
const fail = (message) => {
  failures++
  console.log('FAIL', message)
}

function walkMarkdown(directory) {
  const result = []
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (!['.vitepress', 'node_modules', 'dist'].includes(entry.name)) {
        result.push(...walkMarkdown(absolute))
      }
    } else if (entry.name.endsWith('.md')) {
      result.push(absolute)
    }
  }
  return result
}

const markdownFiles = walkMarkdown(docsDir)

// 1. 本地图片引用完整性。先尝试完整目标，以兼容未用尖括号包裹的空格路径。
{
  let references = 0
  for (const file of markdownFiles) {
    const markdown = fs.readFileSync(file, 'utf8')
    for (const match of markdown.matchAll(/!\[[^\]]*\]\(([^)\r\n]+)\)/g)) {
      let target = match[1].trim()
      if (target.startsWith('<') && target.endsWith('>'))
        target = target.slice(1, -1)
      if (/^(https?:|data:)/.test(target)) continue
      references++
      const resolveTarget = (value) =>
        value.startsWith('/')
          ? path.join(docsDir, 'public', value)
          : path.resolve(path.dirname(file), value)
      let absolute = resolveTarget(target)
      if (!fs.existsSync(absolute)) {
        const withoutTitle = target.replace(/\s+["'][^"']*["']$/, '')
        absolute = resolveTarget(withoutTitle)
      }
      if (!fs.existsSync(absolute)) {
        fail(
          `缺图 ${path.relative(repoRoot, file).split(path.sep).join('/')} -> ${target}`
        )
      }
    }
  }
  console.log(`ok 图片引用 ${references} 处全部存在`)
}

// 2. 中英文参数表列数一致。
{
  const colCount = (line) => {
    let count = 1
    for (let index = 0; index < line.length; index++) {
      if (line[index] === '\\' && line[index + 1] === '|') index++
      else if (line[index] === '|') count++
    }
    return count
  }
  let tables = 0
  for (const directory of [
    path.join(docsDir, 'commands'),
    path.join(docsDir, 'en/commands')
  ]) {
    if (!fs.existsSync(directory)) continue
    for (const file of fs
      .readdirSync(directory)
      .filter((name) => name.endsWith('.md'))) {
      const lines = fs
        .readFileSync(path.join(directory, file), 'utf8')
        .split('\n')
      for (let index = 0; index < lines.length; index++) {
        if (!/^\| (中文名|Display name) \|/.test(lines[index])) continue
        tables++
        const columns = colCount(lines[index])
        for (
          let row = index + 2;
          row < lines.length && lines[row].startsWith('|');
          row++
        ) {
          if (colCount(lines[row]) !== columns)
            fail(`表格错位 ${file}:${row + 1}`)
        }
      }
    }
  }
  console.log(`ok 参数表 ${tables} 张全部对齐`)
}

let translations = null
if (!fs.existsSync(translationPath)) {
  fail('缺少英文翻译数据 scripts/rstool/i18n/commands.en.json')
} else {
  translations = JSON.parse(fs.readFileSync(translationPath, 'utf8'))
}

// 3. 英文翻译集合、数组结构、必填内容及 sourceHash。
if (translations) {
  const categoryNames = new Set(
    source.data.map((item) => item.cat).filter(Boolean)
  )
  const subcategoryNames = new Set(
    source.data.map((item) => item.sub).filter(Boolean)
  )
  for (const name of categoryNames) {
    if (!translations.categories?.[name]) fail(`缺少英文分类翻译: ${name}`)
  }
  for (const name of subcategoryNames) {
    if (!translations.subcategories?.[name]) fail(`缺少英文子分类翻译: ${name}`)
  }

  const sourceNames = new Set(source.data.map((item) => item.name))
  const translatedNames = new Set(Object.keys(translations.commands || {}))
  for (const name of sourceNames) {
    const item = source.data.find((entry) => entry.name === name)
    const detail = source.details[name] || {}
    const translated = translations.commands?.[name]
    if (!translated) {
      fail(`缺少英文命令翻译: ${name}`)
      continue
    }
    if (translated.sourceHash !== sourceHash(item, detail)) {
      fail(`英文翻译已过期: ${name}`)
    }
    if (!translated.title) fail(`英文命令标题为空: ${name}`)
    if (item.desc && !translated.desc) fail(`英文命令简介为空: ${name}`)
    const translatedDetail = translated.detail || {}
    const pairs = [
      ['流程', detail.flow || [], translatedDetail.flow || []],
      ['参数', detail.params || [], translatedDetail.params || []],
      [
        '插图',
        normalizeIllustrations(detail),
        translatedDetail.illustrations || []
      ],
      ['视频', detail.videos || [], translatedDetail.videos || []]
    ]
    for (const [label, original, localized] of pairs) {
      if (original.length !== localized.length) {
        fail(
          `${name} 的${label}数量不一致: ${original.length} / ${localized.length}`
        )
      }
    }
    for (const [index, step] of (detail.flow || []).entries()) {
      if (step && !translatedDetail.flow?.[index])
        fail(`${name} 的流程 ${index + 1} 未翻译`)
    }
    for (const [index, param] of (detail.params || []).entries()) {
      const localized = translatedDetail.params?.[index] || {}
      for (const [sourceKey, targetKey] of [
        ['zh', 'label'],
        ['type', 'type'],
        ['def', 'def'],
        ['range', 'range'],
        ['note', 'note']
      ]) {
        if (param[sourceKey] && !localized[targetKey]) {
          fail(`${name} 的参数 ${index + 1}.${targetKey} 未翻译`)
        }
      }
    }
    for (const field of ['output', 'notes']) {
      if (detail[field] && !translatedDetail[field])
        fail(`${name} 的 ${field} 未翻译`)
    }
    for (const [index, illustration] of normalizeIllustrations(
      detail
    ).entries()) {
      const localized = translatedDetail.illustrations?.[index] || {}
      if (illustration.alt && !localized.alt)
        fail(`${name} 的插图 ${index + 1} alt 未翻译`)
      if (illustration.caption && !localized.caption) {
        fail(`${name} 的插图 ${index + 1} caption 未翻译`)
      }
    }
    for (const [index, video] of (detail.videos || []).entries()) {
      if (video.title && !translatedDetail.videos?.[index]?.title) {
        fail(`${name} 的视频 ${index + 1} title 未翻译`)
      }
    }
  }
  for (const name of translatedNames) {
    if (!sourceNames.has(name)) fail(`英文翻译存在孤儿命令: ${name}`)
  }

  const scanChinese = (value, location) => {
    if (typeof value === 'string' && /[\u3400-\u9fff]/.test(value)) {
      fail(`英文翻译仍含中文: ${location}`)
    } else if (Array.isArray(value)) {
      value.forEach((entry, index) =>
        scanChinese(entry, `${location}[${index}]`)
      )
    } else if (value && typeof value === 'object') {
      for (const [key, entry] of Object.entries(value)) {
        if (key !== 'sourceHash') scanChinese(entry, `${location}.${key}`)
      }
    }
  }
  scanChinese(translations, 'commands.en.json')
  console.log(`ok 英文翻译覆盖 ${translatedNames.size} 条命令，结构与源文一致`)
}

// 4. 手写英文页面必须与对应中文源页面同步更新。
{
  const pageMapPath = path.join(__dirname, 'i18n/pages.en.json')
  const pageMap = JSON.parse(fs.readFileSync(pageMapPath, 'utf8'))
  for (const [relative, expected] of Object.entries(pageMap)) {
    const absolute = path.join(repoRoot, relative)
    const actual = crypto
      .createHash('sha256')
      .update(fs.readFileSync(absolute))
      .digest('hex')
    if (actual !== expected) fail(`手写英文页面需要同步更新: ${relative}`)
  }
  console.log(`ok 手写英文页源摘要 ${Object.keys(pageMap).length} 项`)
}

// 5. 重新生成到临时目录并比较中英文文件集合与内容。
if (translations) {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'rstool-verify-'))
  const zhOutput = path.join(temporary, 'zh')
  const enOutput = path.join(temporary, 'en')
  const generated = spawnSync(
    process.execPath,
    [path.join(__dirname, 'generate_commands_pages.cjs'), 'all'],
    {
      cwd: repoRoot,
      env: {
        ...process.env,
        RSTOOL_ZH_OUT_DIR: zhOutput,
        RSTOOL_EN_OUT_DIR: enOutput
      },
      encoding: 'utf8'
    }
  )
  if (generated.status !== 0) {
    fail(`命令页生成失败: ${generated.stderr || generated.stdout}`)
  } else {
    for (const [locale, expectedDir, actualDir] of [
      ['中文', zhOutput, path.join(docsDir, 'commands')],
      ['英文', enOutput, path.join(docsDir, 'en/commands')]
    ]) {
      const expectedFiles = fs
        .readdirSync(expectedDir)
        .filter((name) => name.endsWith('.md'))
      const actualFiles = fs.existsSync(actualDir)
        ? fs.readdirSync(actualDir).filter((name) => name.endsWith('.md'))
        : []
      for (const file of expectedFiles) {
        if (!actualFiles.includes(file)) {
          fail(`${locale}数据有而页面无: ${file}`)
        } else if (
          fs.readFileSync(path.join(expectedDir, file), 'utf8') !==
          fs.readFileSync(path.join(actualDir, file), 'utf8')
        ) {
          fail(`${locale}页面与生成器输出不一致: ${file}`)
        }
      }
      for (const file of actualFiles) {
        if (!expectedFiles.includes(file)) fail(`${locale}页面孤儿: ${file}`)
      }
      console.log(`ok ${locale}生成页文件集合 ${expectedFiles.length} 页匹配`)
    }
  }
  fs.rmSync(temporary, { recursive: true, force: true })
}

// 6. 首页计数与源数据一致。
{
  const categoryCount = new Set(source.data.map((item) => item.cat || '未分类'))
    .size
  const home = fs.readFileSync(path.join(docsDir, 'index.md'), 'utf8')
  for (const match of home.matchAll(/(\d+)\s*条命令/g)) {
    if (+match[1] !== source.data.length) {
      fail(`首页「${match[1]} 条命令」≠ 数据 ${source.data.length}`)
    }
  }
  for (const match of home.matchAll(/(\d+)\s*大分类/g)) {
    if (+match[1] !== categoryCount) {
      fail(`首页「${match[1]} 大分类」≠ 数据 ${categoryCount}`)
    }
  }
  console.log(
    `ok 首页计数与数据一致（${source.data.length} 条命令 / ${categoryCount} 大分类）`
  )
}

console.log(failures ? `\n${failures} 处问题` : '\nALL PASS')
process.exit(failures ? 1 : 0)

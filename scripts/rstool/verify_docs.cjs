/**
 * 文档内容完整性校验（发布前可跑）：
 *  1. 图片引用：docs 下全部 Markdown 的本地图片路径逐一核对文件存在
 *  2. 参数表格：按未转义管道符拆列，行列数必须与表头一致
 *  3. 生成器漂移：generate_commands_pages.cjs 输出与 docs/commands/ 现状 diff
 *  4. 计数一致：docs/index.md 中「N 条命令 / N 大分类」与 commands.json 实际值比对
 *
 * 用法：node scripts/rstool/verify_docs.cjs   （全部通过退出码 0）
 */
const fs = require('fs')
const path = require('path')
const os = require('os')

const repoRoot = path.resolve(__dirname, '../..')
const docsDir = path.join(repoRoot, 'docs')
const cmdsDir = path.join(docsDir, 'commands')
let failures = 0
const fail = (msg) => {
  failures++
  console.log('FAIL', msg)
}

// === 1. 图片引用完整性 ===
{
  let refs = 0
  const walk = (d) => {
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f)
      if (fs.statSync(p).isDirectory()) {
        if (f !== '.vitepress' && f !== 'node_modules' && f !== 'dist') walk(p)
      } else if (f.endsWith('.md')) {
        const txt = fs.readFileSync(p, 'utf8')
        for (const m of txt.matchAll(/!\[[^\]]*\]\(([^)\s]+)[^)]*\)/g)) {
          const src = m[1]
          if (/^(https?:|data:)/.test(src)) continue
          refs++
          const abs = src.startsWith('/')
            ? path.join(docsDir, 'public', src)
            : path.resolve(path.dirname(p), src)
          if (!fs.existsSync(abs))
            fail(
              `缺图 ${path.relative(repoRoot, p).split(path.sep).join('/')} -> ${src}`
            )
        }
      }
    }
  }
  walk(docsDir)
  console.log(`ok 图片引用 ${refs} 处全部存在`)
}

// === 2. 参数表格列数一致 ===
{
  // 仅按未被反斜杠转义的 | 拆分
  const colCount = (line) => {
    let n = 1
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '\\' && line[i + 1] === '|') i++
      else if (line[i] === '|') n++
    }
    return n
  }
  let tables = 0
  for (const f of fs.readdirSync(cmdsDir).filter((x) => x.endsWith('.md'))) {
    const lines = fs.readFileSync(path.join(cmdsDir, f), 'utf8').split('\n')
    for (let i = 0; i < lines.length; i++) {
      if (!/^\| 中文名 \| 英文名/.test(lines[i])) continue
      tables++
      const cols = colCount(lines[i])
      for (let j = i + 2; j < lines.length && lines[j].startsWith('|'); j++) {
        if (colCount(lines[j]) !== cols) fail(`表格错位 ${f}:${j + 1}`)
      }
    }
  }
  console.log(`ok 参数表 ${tables} 张全部对齐`)
}

// === 3. 生成器漂移 ===
{
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rstool-verify-'))
  const genSrc = fs.readFileSync(
    path.join(__dirname, 'generate_commands_pages.cjs'),
    'utf8'
  )
  const patched = genSrc
    .replace(
      /const SRC = path\.join\(__dirname, 'commands\.json'\)/,
      `const SRC = ${JSON.stringify(path.join(__dirname, 'commands.json'))}`
    )
    .replace(
      /const OUT_DIR = path\.join\(__dirname, '\.\.\/\.\.\/docs\/commands'\)/,
      `const OUT_DIR = ${JSON.stringify(path.join(tmp, 'commands'))}`
    )
  const genFile = path.join(tmp, 'gen.cjs')
  fs.writeFileSync(genFile, patched)
  require(genFile)

  const genFiles = fs
    .readdirSync(path.join(tmp, 'commands'))
    .filter((f) => f.endsWith('.md'))
  const curFiles = fs.readdirSync(cmdsDir).filter((f) => f.endsWith('.md'))
  const onlyGen = genFiles.filter((f) => !curFiles.includes(f))
  const onlyCur = curFiles.filter((f) => !genFiles.includes(f))
  onlyGen.forEach((f) => fail(`数据有而页面无: ${f}`))
  onlyCur.forEach((f) => fail(`页面孤儿(数据无): ${f}`))
  let drifted = 0
  for (const f of genFiles) {
    if (onlyGen.includes(f)) continue
    const a = fs.readFileSync(path.join(tmp, 'commands', f), 'utf8')
    const b = fs.readFileSync(path.join(cmdsDir, f), 'utf8')
    if (a !== b) {
      drifted++
      fail(
        `页面与生成器输出不一致: ${f}（重跑 node scripts/rstool/generate_commands_pages.cjs）`
      )
    }
  }
  fs.rmSync(tmp, { recursive: true, force: true })
  console.log(`ok 生成器漂移 ${drifted} 页；文件集合 ${genFiles.length} 页匹配`)
}

// === 4. 首页计数与数据一致 ===
{
  const { data } = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'commands.json'), 'utf8')
  )
  const cats = new Set(data.map((it) => it.cat || '未分类')).size
  const idx = fs.readFileSync(path.join(docsDir, 'index.md'), 'utf8')
  for (const m of idx.matchAll(/(\d+)\s*条命令/g))
    if (+m[1] !== data.length)
      fail(`首页「${m[1]} 条命令」≠ 数据 ${data.length}`)
  for (const m of idx.matchAll(/(\d+)\s*大分类/g))
    if (+m[1] !== cats) fail(`首页「${m[1]} 大分类」≠ 数据 ${cats}`)
  console.log(`ok 首页计数与数据一致（${data.length} 条命令 / ${cats} 大分类）`)
}

console.log(failures ? `\n${failures} 处问题` : '\nALL PASS')
process.exit(failures ? 1 : 0)

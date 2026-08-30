/**
 * RsTool 命令页面生成器
 * 从 scripts/rstool/commands.json（name / cat / sub + details）生成：
 *  - docs/commands/<slug>.md：每个命令一个独立 VitePress 页面；
 *  - docs/commands/index.md：分类目录页（只放链接与简介，不重复命令内容）。
 *
 * 页面在 docs/commands/ 下，引用的图片相对路径从 assets/ 改写为 ../assets/，
 * 每页顶部带「返回命令目录」链接。
 *
 * 用法：node scripts/rstool/generate_commands_pages.cjs
 */
const fs = require('fs')
const path = require('path')

const SRC = path.join(__dirname, 'commands.json')
const OUT_DIR = path.join(__dirname, '../../docs/commands')
fs.mkdirSync(OUT_DIR, { recursive: true })

// 命令名 → 页面文件名：仅对包含空格/# 等特殊字符的名字做 kebab-case，
// 其余（如 rsAiRender）保持原样，避免变动既有 URL。与
// docs/.vitepress/config.ts 中的 slug 规则保持一致。
const SLUG_SPECIAL = { 'Linked C#': 'linked-csharp' }
const slug = (name) =>
  SLUG_SPECIAL[name] ||
  (/[^A-Za-z0-9_-]/.test(name)
    ? name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    : name)

const { data, details } = JSON.parse(fs.readFileSync(SRC, 'utf8'))

const esc = (v) => {
  let s = v == null ? '' : String(v)
  if (/^\s*\|.*\|\s*$/.test(s) && s.includes('|')) {
    return s.replace(/\n+/g, ' ').trim()
  }
  return s.replace(/\|/g, '\\|').replace(/\n+/g, ' ').trim()
}

// HTML 属性值转义：防数据中的引号/尖括号破坏 iframe 属性结构。
// & 保持原样——HTML5 中未构成字符引用的裸 & 合法，且避免 bilibili 等带参 URL 产生无谓 diff。
const escAttr = (v) =>
  v == null
    ? ''
    : String(v)
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')

// 独立页位于 docs/commands/<name>.md，图片在 docs/assets → 相对 ../assets
const fixAsset = (src) => (src ? src.replace(/^assets\//, '../assets/') : src)

function renderCommand(it, d) {
  const name = it.name
  const zh = it.zh || name
  const cat = it.cat || '未分类'
  const sub = it.sub || ''
  const L = []
  L.push(`# ${name !== zh ? name + ' · ' + zh : name}`)
  L.push('')
  L.push(`> 模块：${cat}${sub ? ' / ' + sub : ''}`)
  L.push('')
  L.push(`[← 返回命令目录](/commands/)`)
  L.push('')

  if (d.icon) {
    L.push(`![图标](${fixAsset(esc(d.icon))})`)
    L.push('')
  }

  const func = d.output || d.help || it.desc || '（暂无说明）'
  L.push(`**功能**：${esc(func)}`)
  L.push('')

  const illusList = Array.isArray(d.illustrations)
    ? d.illustrations
    : d.illustration && d.illustration.src
      ? [d.illustration]
      : []
  for (const il of illusList) {
    if (!il || !il.src) continue
    const alt = esc(il.alt || it.zh || name)
    L.push(`![${alt}](${fixAsset(esc(il.src))})`)
    if (il.caption) L.push(`*${esc(il.caption)}*`)
    L.push('')
  }

  if (d.style !== 'gh') {
    const callType = d.style === 'form' ? '打开设置窗口' : '命令行交互'
    L.push(`**调用**：在 Rhino 命令行输入 \`${name}\`（${callType}）`)
    L.push('')
  }

  const flowLabel = d.style === 'gh' ? '使用步骤' : '交互流程'
  if (Array.isArray(d.flow) && d.flow.length) {
    L.push(`**${flowLabel}**：`)
    L.push('')
    d.flow.forEach((step, idx) => L.push(`${idx + 1}. ${esc(step)}`))
    L.push('')
  }

  L.push('**参数**：')
  L.push('')
  const params = Array.isArray(d.params) ? d.params : []
  if (params.length) {
    L.push('| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |')
    L.push('| --- | --- | --- | --- | --- | --- |')
    params.forEach((p) =>
      L.push(
        `| ${esc(p.zh)} | ${esc(p.en)} | ${esc(p.type)} | ${esc(p.def)} | ${esc(p.range)} | ${esc(p.note)} |`
      )
    )
  } else {
    if (d.style === 'gh') {
      L.push('> 该运算器无参数输入；每次画布求解时自动执行。')
    } else {
      L.push('> 此命令无命令行数值参数，相关设置在窗口中调整。')
    }
  }
  L.push('')

  if (d.output && d.output !== func) {
    L.push(`**输出**：${esc(d.output)}`)
    L.push('')
  }

  // notes 数据可能混入字面量 \n（JSON 双重转义残留），先还原为真实换行再分段
  const rawNotes = d.notes
    ? String(d.notes)
        .replace(/\\r\\n|\\n|\\r/g, '\n')
        .replace(/\s+$/, '')
    : ''
  if (rawNotes) {
    const segs = rawNotes.split(/\n\n+/)
    if (segs.length) {
      L.push(`**备注**：${esc(segs.shift())}`)
      L.push('')
      while (segs.length) {
        const seg = segs.shift()
        for (const ln of seg.split('\n')) L.push(esc(ln))
        L.push('')
      }
    }
  }

  if (Array.isArray(d.videos) && d.videos.length) {
    L.push('**教学视频**：')
    L.push('')
    for (const v of d.videos) {
      if (!v || !v.src) continue
      const titleEsc = v.title ? esc(v.title) : v.provider || '视频'
      L.push(
        `<iframe class="rstool-video" src="${escAttr(v.src)}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="${escAttr(titleEsc)}"></iframe>`
      )
      if (v.title) L.push(`*${esc(v.title)}*`)
      L.push('')
    }
  }

  return L.join('\n')
}

let count = 0
const seen = new Set()
for (const it of data) {
  const d = details[it.name] || {}
  const md = renderCommand(it, d)
  const out = path.join(OUT_DIR, `${slug(it.name)}.md`)
  fs.writeFileSync(out, md, 'utf8')
  count++
  seen.add(it.name)
}
console.log('Generated', count, 'command pages ->', OUT_DIR)

// === 目录页 docs/commands/index.md：按大类/子类列出全部命令链接 ===
const cats = []
const catIdx = {}
for (const it of data) {
  const cat = it.cat || '未分类'
  const sub = it.sub || ''
  if (catIdx[cat] === undefined) {
    catIdx[cat] = cats.length
    cats.push({ cat, subOrder: [], bySub: {}, noSub: [] })
  }
  const c = cats[catIdx[cat]]
  if (sub) {
    if (!c.bySub[sub]) {
      c.bySub[sub] = []
      c.subOrder.push(sub)
    }
    c.bySub[sub].push(it)
  } else {
    c.noSub.push(it)
  }
}

const cmdText = (it) =>
  it.zh && it.zh !== it.name ? `${it.name} · ${it.zh}` : it.name

const dupNames = [...seen].filter(
  (n) => data.filter((it) => it.name === n).length > 1
)
const dupNote = dupNames.length
  ? `（${dupNames.map((n) => `\`${n}\``).join('、')} 在多个分类重复列出）`
  : ''

const I = []
I.push('# RsTool 命令参考')
I.push('')
I.push(
  `> 覆盖 RsTool 插件全部 ${data.length} 条命令${dupNote}，每条命令一个独立页面，含功能、调用方式、交互流程、参数表、输出、备注与教学视频。`
)
I.push('')
for (const c of cats) {
  const uniq = new Set(
    [...c.subOrder.flatMap((s) => c.bySub[s]), ...c.noSub].map((it) => it.name)
  )
  I.push(`## ${c.cat}（${uniq.size} 条）`)
  I.push('')
  const writeItems = (items) => {
    for (const it of items) {
      const desc = it.desc ? ` — ${esc(it.desc)}` : ''
      I.push(`- [${cmdText(it)}](/commands/${slug(it.name)})${desc}`)
    }
    I.push('')
  }
  for (const s of c.subOrder) {
    I.push(`### ${s}`)
    I.push('')
    writeItems(c.bySub[s])
  }
  if (c.noSub.length) {
    I.push('### （通用）')
    I.push('')
    writeItems(c.noSub)
  }
}
const indexPath = path.join(OUT_DIR, 'index.md')
fs.writeFileSync(indexPath, I.join('\n') + '\n', 'utf8')
console.log('Generated index ->', indexPath)

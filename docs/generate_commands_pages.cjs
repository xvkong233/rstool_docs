/**
 * RsTool 每命令独立页生成器
 * 从 docs/commands.json（name / cat / sub + details）生成 docs/commands/<name>.md，
 * 每个命令一个独立 VitePress 页面，供侧栏按类分组导航。
 *
 * 与 generate_commands_md.js 的区别：
 *  - 这里从 commands.json 直接读（不再从 HTML 抽），按命令拆独立页；
 *  - 页面在 docs/commands/ 下，引用的图片相对路径从 assets/ 改写为 ../assets/；
 *  - 每页顶部加「返回命令完全手册」链接。
 *
 * 用法：node docs/generate_commands_pages.cjs
 */
const fs = require('fs')
const path = require('path')

const SRC = path.join(__dirname, 'commands.json')
const OUT_DIR = path.join(__dirname, 'commands')
fs.mkdirSync(OUT_DIR, { recursive: true })

const { data, details } = JSON.parse(fs.readFileSync(SRC, 'utf8'))

const esc = (v) => {
  let s = v == null ? '' : String(v)
  if (/^\s*\|.*\|\s*$/.test(s) && s.includes('|')) {
    return s.replace(/\n+/g, ' ').trim()
  }
  return s.replace(/\|/g, '\\|').replace(/\n+/g, ' ').trim()
}

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
  L.push(`[← 返回命令完全手册](/RsTool命令手册)`)
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
    const callType =
      d.style === 'form' ? '打开设置窗口' : '命令行交互'
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

  const rawNotes = d.notes ? String(d.notes).replace(/\s+$/, '') : ''
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
        `<iframe class="rstool-video" src="${esc(v.src)}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="${titleEsc}"></iframe>`
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
  const out = path.join(OUT_DIR, `${it.name}.md`)
  fs.writeFileSync(out, md, 'utf8')
  count++
  seen.add(it.name)
}
console.log('Generated', count, 'command pages ->', OUT_DIR)

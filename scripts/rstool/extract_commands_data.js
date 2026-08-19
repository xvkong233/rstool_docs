/**
 * RsTool 命令数据提取器
 * 从 scripts/rstool/RsTool_Command_Reference.html 内嵌的 data(命令清单) +
 * details(命令详情) 中提取结构化数据，输出：
 *  - scripts/rstool/commands.json：供 docs/.vitepress/config.ts（侧栏/导航）
 *    与 generate_commands_pages.cjs（命令页面 + 目录页）使用；
 *  - scripts/rstool/commands.data.js：内联数据，供独立 HTML 手册
 *    （RsTool_Command_Reference.html）在 file:// 双击打开时回退使用。
 *
 * 用法：node scripts/rstool/extract_commands_data.js
 */
const fs = require('fs')
const path = require('path')

const SRC = path.join(__dirname, 'RsTool_Command_Reference.html')

const s = fs.readFileSync(SRC, 'utf8')

function extractLiteral(text, marker) {
  const i = text.indexOf(marker)
  if (i < 0) return null
  let j = i + marker.length
  while (j < text.length && /\s/.test(text[j])) j++
  const opener = text[j]
  if (opener !== '[' && opener !== '{') return null
  let depth = 0,
    inStr = false,
    esc = false,
    k = j
  while (k < text.length) {
    const c = text[k]
    if (inStr) {
      if (esc) esc = false
      else if (c === '\\') esc = true
      else if (c === '"') inStr = false
    } else {
      if (c === '"') inStr = true
      else if (c === '[' || c === '{') depth++
      else if (c === ']' || c === '}') {
        depth--
        if (depth === 0) return text.slice(j, k + 1)
      }
    }
    k++
  }
  return null
}

const data = eval('(' + extractLiteral(s, 'const data =') + ')')
const details = eval('(' + extractLiteral(s, 'const details =') + ')')

// 结构化数据输出
const JSON_OUT = path.join(__dirname, 'commands.json')
fs.writeFileSync(
  JSON_OUT,
  JSON.stringify(
    { generated: new Date().toISOString(), data, details },
    null,
    1
  ),
  'utf8'
)
console.log('WROTE', JSON_OUT)
console.log('json bytes:', fs.statSync(JSON_OUT).size)
console.log(
  'data:',
  data.length,
  'unique:',
  new Set(data.map((it) => it.name)).size
)

// 内联数据输出（供独立 HTML 手册使用）
const DATA_OUT = path.join(__dirname, 'commands.data.js')
fs.writeFileSync(
  DATA_OUT,
  'window.__RSTOOL_DB__ = ' +
    JSON.stringify({ generated: new Date().toISOString(), data, details }) +
    ';\n',
  'utf8'
)
console.log('WROTE', DATA_OUT)
console.log('data.js bytes:', fs.statSync(DATA_OUT).size)

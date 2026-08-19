import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

// === 从 commands.json 读出命令分组（cat → sub → name）===
type CmdItem = { name: string; zh: string; cat: string; sub: string; desc?: string }
const here = dirname(fileURLToPath(import.meta.url))
const cmds = JSON.parse(
  readFileSync(resolve(here, '../commands.json'), 'utf8')
) as { data: CmdItem[]; details: Record<string, unknown> }

const nameSet = new Set(cmds.data.map(d => d.name))

// 按数据原始顺序聚合 cat 与 sub
type CatGroup = {
  cat: string
  subOrder: string[]
  bySub: Record<string, CmdItem[]>
  noSub: CmdItem[]
}
const byCat: CatGroup[] = []
const catIndex: Record<string, number> = {}
for (const it of cmds.data) {
  const cat = it.cat || '未分类'
  let i = catIndex[cat]
  if (i === undefined) {
    i = byCat.length
    catIndex[cat] = i
    byCat.push({ cat, subOrder: [], bySub: {}, noSub: [] })
  }
  if (it.sub) {
    if (!byCat[i].bySub[it.sub]) {
      byCat[i].bySub[it.sub] = []
      byCat[i].subOrder.push(it.sub)
    }
    byCat[i].bySub[it.sub].push(it)
  } else {
    byCat[i].noSub.push(it)
  }
}

const cmdText = (it: CmdItem) =>
  it.zh && it.zh !== it.name ? `${it.name} · ${it.zh}` : it.name

const buildCatItems = (c: CatGroup) => {
  const out: any[] = []
  for (const sub of c.subOrder) {
    out.push({
      text: sub,
      collapsed: true,
      items: c.bySub[sub].map(it => ({
        text: cmdText(it),
        link: `/commands/${it.name}`
      }))
    })
  }
  if (c.noSub.length) {
    out.push({
      text: '（通用）',
      collapsed: true,
      items: c.noSub.map(it => ({
        text: cmdText(it),
        link: `/commands/${it.name}`
      }))
    })
  }
  return out
}

// === VitePress 配置 ===
export default defineConfig({
  title: 'RsTool 命令文档',
  description: 'RsTool Rhino 插件命令完全参考手册',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],

  markdown: {
    config(md) {
      // 给命令手册中每个命令的 h3 标题设稳定锚点 id=<commandName>
      // 覆盖默认 slug 锚点，让侧栏链接 /RsTool命令手册#rsAiRender 精准命中
      md.core.ruler.push('rstool_cmd_heading_id', (state) => {
        for (let i = 0; i < state.tokens.length; i++) {
          const t = state.tokens[i]
          if (t.type !== 'heading_open' || t.tag !== 'h3') continue
          const inline = state.tokens[i + 1]
          if (!inline || inline.type !== 'inline') continue
          const m = /^([a-zA-Z][a-zA-Z0-9_]*)/.exec(inline.content)
          if (m && nameSet.has(m[1])) {
            t.attrSet('id', m[1])
          }
        }
      })
    }
  },

  themeConfig: {
    nav: [
      { text: '命令手册', link: '/RsTool命令手册' },
      { text: 'GitHub', link: 'https://github.com/xvkong233/rstool' }
    ],

    search: { provider: 'local' },

    sidebar: [
      {
        text: '命令参考',
        collapsed: false,
        items: [
          ...byCat.map(c => ({
            text: c.cat,
            collapsed: true,
            items: buildCatItems(c)
          }))
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xvkong233/rstool' }
    ]
  }
})

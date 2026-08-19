import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

// === 从 scripts/rstool/commands.json 读出命令分组（cat → sub → name）===
type CmdItem = {
  name: string
  zh: string
  cat: string
  sub: string
  desc?: string
}
const here = dirname(fileURLToPath(import.meta.url))
const cmds = JSON.parse(
  readFileSync(resolve(here, '../../scripts/rstool/commands.json'), 'utf8')
) as { data: CmdItem[]; details: Record<string, unknown> }

// 命令名 → 页面文件名：仅对包含空格/# 等特殊字符的名字做 kebab-case，
// 其余（如 rsAiRender）保持原样，避免变动既有 URL。与
// scripts/rstool/generate_commands_pages.cjs 中的 slug 规则保持一致。
const SLUG_SPECIAL: Record<string, string> = { 'Linked C#': 'linked-csharp' }
const slug = (name: string) =>
  SLUG_SPECIAL[name] ??
  (/[^A-Za-z0-9_-]/.test(name)
    ? name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    : name)

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
      items: c.bySub[sub].map((it) => ({
        text: cmdText(it),
        link: `/commands/${slug(it.name)}`
      }))
    })
  }
  if (c.noSub.length) {
    out.push({
      text: '（通用）',
      collapsed: true,
      items: c.noSub.map((it) => ({
        text: cmdText(it),
        link: `/commands/${slug(it.name)}`
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

  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '命令手册', link: '/commands/' },
      { text: '官网', link: 'https://www.rstoolarchi.com' },
      { text: '犀流堂', link: 'https://www.rhinostudio.cn' },
      { text: 'GitHub', link: 'https://github.com/xvkong233/rstool_docs' }
    ],

    search: { provider: 'local' },

    sidebar: [
      {
        text: '命令参考',
        collapsed: false,
        items: [
          { text: '总目录', link: '/commands/' },
          ...byCat.map((c) => ({
            text: c.cat,
            collapsed: true,
            items: buildCatItems(c)
          }))
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xvkong233/rstool_docs' }
    ]
  }
})

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

// 几何组子类按固定顺序排序：点 → 曲线 → 曲面 → 网格 → 对象变换
const geoPriority = ['点', '曲线', '曲面', '网格', '对象变换']
const geo = byCat.find((c) => c.cat === '几何')
if (geo) {
  geo.subOrder.sort((a, b) => geoPriority.indexOf(a) - geoPriority.indexOf(b))
}

// 趣味分组移到顶层最后（其余分类保持 data 原始顺序）
const funIdx = byCat.findIndex((c) => c.cat === '趣味')
if (funIdx >= 0) {
  byCat.push(byCat.splice(funIdx, 1)[0])
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
    if (c.subOrder.length === 0) {
      // 无子分组的分类（如铺装表皮）直接列出命令，不套「（通用）」分组
      for (const it of c.noSub) {
        out.push({
          text: cmdText(it),
          link: `/commands/${slug(it.name)}`
        })
      }
    } else {
      out.push({
        text: '（通用）',
        collapsed: true,
        items: c.noSub.map((it) => ({
          text: cmdText(it),
          link: `/commands/${slug(it.name)}`
        }))
      })
    }
  }
  return out
}

// === VitePress 配置 ===
export default defineConfig({
  title: 'RsTool 命令文档',
  description: 'RsTool Rhino 插件命令完全参考手册',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '命令手册', link: '/commands/' },
      { text: '更新日志', link: '/changelog' },
      { text: '贡献指南', link: '/contributing/' },
      { text: '官网', link: 'https://www.rstoolarchi.com' },
      { text: '犀流堂', link: 'https://www.rhinostudio.cn' }
    ],

    search: { provider: 'local' },

    sidebar: {
      '/commands/': [
        {
          text: '命令参考',
          collapsed: false,
          items: [
            { text: '安装指南', link: '/commands/installation/' },
            { text: '总目录', link: '/commands/' },
            ...byCat.map((c) => ({
              text: c.cat,
              collapsed: true,
              items: buildCatItems(c)
            }))
          ]
        }
      ],
      '/contributing/': [
        {
          text: '贡献指南',
          collapsed: false,
          items: [
            { text: '贡献方式总览', link: '/contributing/#贡献方式总览' },
            {
              text: '方式一：提交 Issue 反馈问题',
              link: '/contributing/#方式一-提交-issue-反馈问题'
            },
            {
              text: '方式二：网页直接编辑',
              link: '/contributing/#方式二-网页直接编辑'
            },
            {
              text: '命令页面为什么不能直接改',
              link: '/contributing/#命令页面为什么不能直接改'
            },
            { text: '本地开发环境', link: '/contributing/#本地开发环境' },
            { text: '命令数据管线', link: '/contributing/#命令数据管线' },
            {
              text: '提交信息与 Pull Request 规范',
              link: '/contributing/#提交信息与-pull-request-规范'
            },
            { text: '反馈与交流', link: '/contributing/#反馈与交流' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xvkong233/rstool_docs' }
    ],

    outline: { label: '本页目录' },

    docFooter: { prev: '上一页', next: '下一页' },

    returnToTopLabel: '回到顶部',

    lastUpdated: { text: '最后更新于' },

    editLink: {
      pattern: 'https://github.com/xvkong233/rstool_docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message:
        '基于 <a href="https://github.com/xvkong233/rstool_docs/blob/main/LICENSE" target="_blank" rel="noopener">MIT 许可证</a>发布 · <a href="/contributing/">参与贡献</a>',
      copyright: 'Copyright © 2026-present RsTool'
    }
  }
})

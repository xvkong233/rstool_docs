import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

type CmdItem = {
  name: string
  zh: string
  cat: string
  sub: string
  desc?: string
}

type CommandTranslation = {
  title: string
  desc: string
}

type EnglishTranslations = {
  categories: Record<string, string>
  subcategories: Record<string, string>
  commands: Record<string, CommandTranslation>
}

type CatGroup = {
  cat: string
  subOrder: string[]
  bySub: Record<string, CmdItem[]>
  noSub: CmdItem[]
}

const here = dirname(fileURLToPath(import.meta.url))
const commands = JSON.parse(
  readFileSync(resolve(here, '../../scripts/rstool/commands.json'), 'utf8')
) as { data: CmdItem[] }
const english = JSON.parse(
  readFileSync(
    resolve(here, '../../scripts/rstool/i18n/commands.en.json'),
    'utf8'
  )
) as EnglishTranslations
const englishReady =
  Object.keys(english.commands).length === commands.data.length

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

function groupCommands(items: CmdItem[], geometry: string, fun: string) {
  const groups: CatGroup[] = []
  const indexes: Record<string, number> = {}
  for (const item of items) {
    const category = item.cat
    let index = indexes[category]
    if (index === undefined) {
      index = groups.length
      indexes[category] = index
      groups.push({ cat: category, subOrder: [], bySub: {}, noSub: [] })
    }
    if (item.sub) {
      if (!groups[index].bySub[item.sub]) {
        groups[index].bySub[item.sub] = []
        groups[index].subOrder.push(item.sub)
      }
      groups[index].bySub[item.sub].push(item)
    } else {
      groups[index].noSub.push(item)
    }
  }

  const geometryGroup = groups.find((group) => group.cat === geometry)
  if (geometryGroup) {
    const sourcePriority = ['点', '曲线', '曲面', '网格', '对象变换']
    const translatedPriority = sourcePriority.map(
      (name) => english.subcategories[name] || name
    )
    const priority = geometry === '几何' ? sourcePriority : translatedPriority
    geometryGroup.subOrder.sort(
      (a, b) => priority.indexOf(a) - priority.indexOf(b)
    )
  }

  const funIndex = groups.findIndex((group) => group.cat === fun)
  if (funIndex >= 0) groups.push(groups.splice(funIndex, 1)[0])
  return groups
}

const zhItems = commands.data
const enItems = commands.data.map((item) => ({
  ...item,
  cat: english.categories[item.cat] || item.cat,
  sub: item.sub ? english.subcategories[item.sub] || item.sub : '',
  zh: english.commands[item.name]?.title || item.zh,
  desc: english.commands[item.name]?.desc || item.desc
}))
const zhGroups = groupCommands(zhItems, '几何', '趣味')
const enGroups = groupCommands(
  enItems,
  english.categories['几何'] || 'Geometry',
  english.categories['趣味'] || 'Fun'
)

const commandText = (item: CmdItem) =>
  item.zh && item.zh !== item.name ? `${item.name} · ${item.zh}` : item.name

function buildCatItems(group: CatGroup, prefix: string, common: string) {
  const output: any[] = []
  for (const subcategory of group.subOrder) {
    output.push({
      text: subcategory,
      collapsed: true,
      items: group.bySub[subcategory].map((item) => ({
        text: commandText(item),
        link: `${prefix}${slug(item.name)}`
      }))
    })
  }
  if (group.noSub.length) {
    if (group.subOrder.length === 0) {
      output.push(
        ...group.noSub.map((item) => ({
          text: commandText(item),
          link: `${prefix}${slug(item.name)}`
        }))
      )
    } else {
      output.push({
        text: common,
        collapsed: true,
        items: group.noSub.map((item) => ({
          text: commandText(item),
          link: `${prefix}${slug(item.name)}`
        }))
      })
    }
  }
  return output
}

const zhCommandSidebar = [
  {
    text: '命令参考',
    collapsed: false,
    items: [
      { text: '安装指南', link: '/commands/installation/' },
      { text: '总目录', link: '/commands/' },
      ...zhGroups.map((group) => ({
        text: group.cat,
        collapsed: true,
        items: buildCatItems(group, '/commands/', '（通用）')
      }))
    ]
  }
]

const enCommandSidebar = [
  {
    text: 'Command Reference',
    collapsed: false,
    items: [
      { text: 'Installation', link: '/en/commands/installation/' },
      { text: 'All Commands', link: '/en/commands/' },
      ...enGroups.map((group) => ({
        text: group.cat,
        collapsed: true,
        items: buildCatItems(group, '/en/commands/', 'General')
      }))
    ]
  }
]

const languageToggle = { component: 'LanguageToggle' }

export default defineConfig({
  lastUpdated: true,
  cleanUrls: true,
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      title: 'RsTool 命令文档',
      description: 'RsTool Rhino 插件命令完全参考手册',
      markdown: {
        container: {
          infoLabel: '信息',
          tipLabel: '提示',
          warningLabel: '警告',
          dangerLabel: '危险',
          detailsLabel: '详细信息'
        },
        codeCopyButton: { tooltipText: '复制代码', copiedText: '已复制' }
      },
      themeConfig: {
        nav: [
          { text: '命令手册', link: '/commands/' },
          { text: '贡献指南', link: '/contributing/' },
          { text: '官网', link: 'https://www.rstoolarchi.com' },
          { text: '犀流堂', link: 'https://www.rhinostudio.cn' },
          ...(englishReady ? [languageToggle] : [])
        ],
        sidebar: {
          '/commands/': zhCommandSidebar,
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
        outline: { label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '回到顶部',
        skipToContentLabel: '跳到正文',
        lastUpdated: { text: '最后更新于' },
        editLink: {
          pattern:
            'https://github.com/xvkong233/rstool_docs/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页面'
        },
        notFound: {
          title: '页面未找到',
          quote: '你访问的页面不存在或已被移动。',
          linkLabel: '返回首页',
          linkText: '返回首页'
        },
        footer: {
          message:
            '基于 <a href="https://github.com/xvkong233/rstool_docs/blob/main/LICENSE" target="_blank" rel="noopener">MIT 许可证</a>发布 · <a href="/contributing/">参与贡献</a>',
          copyright: 'Copyright © 2026-present RsTool'
        }
      }
    },
    ...(englishReady
      ? {
          en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            title: 'RsTool Command Documentation',
            description:
              'Complete command reference for the RsTool Rhino plugin',
            themeConfig: {
              nav: [
                { text: 'Commands', link: '/en/commands/' },
                { text: 'Contributing', link: '/en/contributing/' },
                { text: 'Website', link: 'https://www.rstoolarchi.com' },
                { text: 'Rhino Studio', link: 'https://www.rhinostudio.cn' },
                languageToggle
              ],
              sidebar: {
                '/en/commands/': enCommandSidebar,
                '/en/contributing/': [
                  {
                    text: 'Contributing',
                    collapsed: false,
                    items: [
                      {
                        text: 'Ways to contribute',
                        link: '/en/contributing/#ways-to-contribute'
                      },
                      {
                        text: 'Report an issue',
                        link: '/en/contributing/#option-1-report-an-issue'
                      },
                      {
                        text: 'Edit on GitHub',
                        link: '/en/contributing/#option-2-edit-on-github'
                      },
                      {
                        text: 'Generated command pages',
                        link: '/en/contributing/#why-command-pages-cannot-be-edited-directly'
                      },
                      {
                        text: 'Local development',
                        link: '/en/contributing/#local-development'
                      },
                      {
                        text: 'Command data pipeline',
                        link: '/en/contributing/#command-data-pipeline'
                      },
                      {
                        text: 'Commits and pull requests',
                        link: '/en/contributing/#commit-and-pull-request-guidelines'
                      },
                      {
                        text: 'Feedback and community',
                        link: '/en/contributing/#feedback-and-community'
                      }
                    ]
                  }
                ]
              },
              outline: { label: 'On this page' },
              docFooter: { prev: 'Previous page', next: 'Next page' },
              sidebarMenuLabel: 'Menu',
              darkModeSwitchLabel: 'Appearance',
              returnToTopLabel: 'Return to top',
              skipToContentLabel: 'Skip to content',
              lastUpdated: { text: 'Last updated' },
              editLink: {
                pattern:
                  'https://github.com/xvkong233/rstool_docs/edit/main/docs/:path',
                text: 'Edit this page on GitHub'
              },
              notFound: {
                title: 'PAGE NOT FOUND',
                quote: 'The page you requested does not exist or has moved.',
                linkLabel: 'go to the English home page',
                linkText: 'Take me home'
              },
              footer: {
                message:
                  'Released under the <a href="https://github.com/xvkong233/rstool_docs/blob/main/LICENSE" target="_blank" rel="noopener">MIT License</a> · <a href="/en/contributing/">Contribute</a>',
                copyright: 'Copyright © 2026-present RsTool'
              }
            }
          }
        }
      : {})
  },

  themeConfig: {
    logo: '/logo.png',
    i18nRouting: true,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详细结果',
            resetButtonTitle: '清除查询',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关结果'
          }
        },
        locales: {
          en: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search docs' },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results found'
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xvkong233/rstool_docs' }
    ]
  }
})

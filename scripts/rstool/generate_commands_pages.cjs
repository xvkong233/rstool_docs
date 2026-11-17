/**
 * RsTool 中英文命令页面生成器。
 *
 * 中文内容来自 commands.json，英文内容来自 i18n/commands.en.json；一次运行
 * 同时生成 docs/commands 与 docs/en/commands，并保持两种语言的 slug 一致。
 */
const fs = require('node:fs')
const path = require('node:path')
const { localizeCommand } = require('./i18n.cjs')
const { renderCommandIcon, commandIconNote } = require('./command_icons.cjs')
const {
  versions,
  isLegacyCommand,
  versionNotice
} = require('./command_versions.cjs')

const SRC = path.join(__dirname, 'commands.json')
const EN_SRC = path.join(__dirname, 'i18n/commands.en.json')
const ZH_OUT_DIR =
  process.env.RSTOOL_ZH_OUT_DIR || path.join(__dirname, '../../docs/commands')
const EN_OUT_DIR =
  process.env.RSTOOL_EN_OUT_DIR ||
  path.join(__dirname, '../../docs/en/commands')

const requestedLocale = process.argv[2] || 'all'
if (!['all', 'zh', 'en'].includes(requestedLocale)) {
  throw new Error('用法：node generate_commands_pages.cjs [all|zh|en]')
}

const source = JSON.parse(fs.readFileSync(SRC, 'utf8'))
const translations =
  requestedLocale === 'zh' ? null : JSON.parse(fs.readFileSync(EN_SRC, 'utf8'))

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

const labels = {
  zh: {
    separator: '：',
    uncategorized: '未分类',
    module: '模块',
    back: '← 返回命令目录',
    icon: '图标',
    unavailable: '（暂无说明）',
    function: '功能',
    call: '调用',
    formCall: '打开设置窗口',
    propertiesCall: '进入对象属性编辑',
    cliCall: '命令行交互',
    callText: (name, type) => `在 Rhino 命令行输入 \`${name}\`（${type}）`,
    ghFlow: '使用步骤',
    cliFlow: '交互流程',
    parameters: '参数',
    parameterHeaders: ['中文名', '英文名', '类型', '默认值', '范围', '说明'],
    noGhParams: '该运算器无参数输入；每次画布求解时自动执行。',
    noCliParams: '此命令无命令行数值参数，相关设置在窗口中调整。',
    noWindowParams:
      '此命令无需设置数值参数，按上方流程操作即可；没有独立设置窗口。',
    output: '输出',
    notes: '备注',
    videos: '教学视频',
    video: '视频',
    videoLink: '观看原视频及补充内容',
    indexTitle: 'RsTool 命令参考',
    iconGuide:
      '图标与工具栏按钮对应；共用按钮的命令可查看页面内的右键说明。「—」表示当前工具栏没有对应图标。',
    indexIntro: (count, duplicates) =>
      `这里按 RSTool 2.0 当前入口整理命令，并保留 Grasshopper 组件参考${duplicates}。已合并或暂未保留的旧入口收在「2.0 命令变化与对照」中，不计入下方目录。`,
    duplicateNote: (names) =>
      `（${names.map((name) => `\`${name}\``).join('、')} 在多个分类重复列出）`,
    categoryHeading: (category, count) => `## ${category}（${count} 条）`,
    common: '（通用）',
    mediaNotice:
      '截图和视频可能显示中文界面；控件文字及位置可能随 Rhino 或 RSTool 版本变化。'
  },
  en: {
    separator: ': ',
    uncategorized: 'Uncategorized',
    module: 'Module',
    back: '← Back to command index',
    icon: 'Icon',
    unavailable: '(Description unavailable)',
    function: 'Function',
    call: 'Run',
    formCall: 'opens a settings window',
    propertiesCall: 'opens object properties for editing',
    cliCall: 'command-line interaction',
    callText: (name, type) =>
      `Enter \`${name}\` in the Rhino command line (${type}).`,
    ghFlow: 'Usage',
    cliFlow: 'Workflow',
    parameters: 'Parameters',
    parameterHeaders: [
      'Display name',
      'Parameter',
      'Type',
      'Default',
      'Range',
      'Description'
    ],
    noGhParams:
      'This component has no input parameters and runs automatically whenever the Grasshopper solution is evaluated.',
    noCliParams:
      'This command has no numeric command-line parameters. Adjust its options in the settings window.',
    noWindowParams:
      'No numeric settings or separate settings window are required. Follow the workflow above.',
    output: 'Output',
    notes: 'Notes',
    videos: 'Tutorial videos',
    video: 'Video',
    videoLink: 'Watch the original video and supplementary content',
    indexTitle: 'RsTool Command Reference',
    iconGuide:
      'Icons match toolbar buttons; shared-button commands include right-click instructions on their pages. A dash means no icon exists in the current toolbar.',
    indexIntro: (count, duplicates) =>
      `Browse documented RSTool 2.0 command entries and Grasshopper component references${duplicates}. Merged and unavailable legacy entries are listed separately in the 2.0 command changes guide.`,
    duplicateNote: (names) =>
      ` (${names.map((name) => `\`${name}\``).join(', ')} appear in more than one category)`,
    categoryHeading: (category, count) => `## ${category} (${count})`,
    common: 'General',
    mediaNotice:
      'Screenshots and videos may show a Chinese-language interface. Labels and control positions can vary by Rhino or RSTool version.'
  }
}

const escapePlaceholder = (text) => text.replace(/<([^>\r\n]+)>/g, '&lt;$1&gt;')

const esc = (value) => {
  const text = value == null ? '' : String(value)
  if (/^\s*\|.*\|\s*$/.test(text) && text.includes('|')) {
    return escapePlaceholder(text).replace(/\n+/g, ' ').trim()
  }
  return escapePlaceholder(text)
    .replace(/\|/g, '\\|')
    .replace(/\n+/g, ' ')
    .trim()
}

const escAttr = (value) =>
  value == null
    ? ''
    : String(value)
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')

const fixAsset = (src, locale) =>
  src
    ? src.replace(/^assets\//, locale === 'en' ? '../../assets/' : '../assets/')
    : src

function renderCommand(item, detail, locale) {
  const text = labels[locale]
  const name = item.name
  const displayName = item.zh || name
  const category = item.cat || text.uncategorized
  const subcategory = item.sub || ''
  const lines = []
  const legacy = isLegacyCommand(name)
  lines.push(
    `# ${renderCommandIcon(name, { locale, context: 'heading' })} ${name !== displayName ? `${name} · ${displayName}` : name}${legacy ? (locale === 'en' ? ' (legacy entry)' : '（旧版入口）') : ''}`
  )
  lines.push('')
  lines.push(
    `> ${text.module}${text.separator}${category}${subcategory ? ` / ${subcategory}` : ''}`
  )
  lines.push('')
  lines.push(
    `[${text.back}](${locale === 'en' ? '/en/commands/' : '/commands/'})`
  )
  lines.push('')

  const notice = versionNotice(name, locale)
  if (notice) lines.push(notice)
  if (legacy) {
    lines.push(
      locale === 'en'
        ? '::: details View the 1.x historical reference'
        : '::: details 查看 1.x 历史说明',
      ''
    )
    lines.push(
      locale === 'en'
        ? '> Icons, screenshots, parameters, and workflows in this section describe the old version.'
        : '> 本节的图标、截图、参数与操作流程均为旧版资料。',
      ''
    )
  }
  const iconNote = legacy ? '' : commandIconNote(name, locale)
  if (iconNote) {
    lines.push(`> ${iconNote}`)
    lines.push('')
  }

  const func =
    (detail.descriptionFirst && item.desc) ||
    detail.output ||
    detail.help ||
    item.desc ||
    text.unavailable
  lines.push(`**${text.function}**${text.separator}${esc(func)}`)
  lines.push('')

  const illustrations = Array.isArray(detail.illustrations)
    ? detail.illustrations
    : detail.illustration?.src
      ? [detail.illustration]
      : []
  for (const illustration of illustrations) {
    if (!illustration?.src) continue
    const alt = esc(illustration.alt || displayName || name)
    lines.push(`![${alt}](${fixAsset(esc(illustration.src), locale)})`)
    if (illustration.caption) lines.push(`*${esc(illustration.caption)}*`)
    lines.push('')
  }

  if (locale === 'en' && (illustrations.length || detail.videos?.length)) {
    lines.push(`> ${text.mediaNotice}`)
    lines.push('')
  }

  if (detail.style !== 'gh' && !legacy) {
    const callType =
      detail.style === 'form'
        ? text.formCall
        : detail.style === 'properties'
          ? text.propertiesCall
          : text.cliCall
    lines.push(
      `**${text.call}**${text.separator}${text.callText(name, callType)}`
    )
    lines.push('')
  }

  const flowLabel = detail.style === 'gh' ? text.ghFlow : text.cliFlow
  if (Array.isArray(detail.flow) && detail.flow.length) {
    lines.push(`**${flowLabel}**${text.separator.trimEnd()}`)
    lines.push('')
    detail.flow.forEach((step, index) =>
      lines.push(`${index + 1}. ${esc(step)}`)
    )
    lines.push('')
  }

  const parametersStart = lines.length
  lines.push(`**${text.parameters}**${text.separator.trimEnd()}`)
  lines.push('')
  const params = Array.isArray(detail.params) ? detail.params : []
  if (params.length) {
    const renderParameterTable = (entries) => {
      lines.push(`| ${text.parameterHeaders.join(' | ')} |`)
      lines.push('| --- | --- | --- | --- | --- | --- |')
      entries.forEach((param) =>
        lines.push(
          `| ${esc(param.zh)} | ${esc(param.en)} | ${esc(param.type)} | ${esc(param.def)} | ${esc(param.range)} | ${esc(param.note)} |`
        )
      )
      lines.push('')
    }
    const sections = Array.isArray(detail.paramSections)
      ? detail.paramSections
      : []
    if (sections.length) {
      const rendered = new Set()
      for (const section of sections) {
        const names = new Set(section.params || [])
        const entries = params.filter((param) => names.has(param.en))
        if (!entries.length && !section.intro) continue
        lines.push(`### ${esc(section.title)}`)
        lines.push('')
        if (section.intro) {
          lines.push(esc(section.intro))
          lines.push('')
        }
        entries.forEach((param) => rendered.add(param.en))
        if (entries.length) renderParameterTable(entries)
      }
      const remaining = params.filter((param) => !rendered.has(param.en))
      if (remaining.length) renderParameterTable(remaining)
    } else {
      renderParameterTable(params)
    }
  } else {
    lines.push(
      `> ${detail.style === 'gh' ? text.noGhParams : detail.noSettingsWindow ? text.noWindowParams : text.noCliParams}`
    )
    lines.push('')
  }

  // Layout-only metadata is shared by both locales; other commands keep their order.
  const deferredParameters = detail.parametersLast
    ? lines.splice(parametersStart)
    : []

  if (detail.output && detail.output !== func) {
    lines.push(`**${text.output}**${text.separator}${esc(detail.output)}`)
    lines.push('')
  }

  const rawNotes = detail.notes
    ? String(detail.notes)
        .replace(/\\r\\n|\\n|\\r/g, '\n')
        .replace(/\s+$/, '')
    : ''
  if (rawNotes) {
    const segments = rawNotes.split(/\n\n+/)
    const firstSegment = segments.shift()
    if (/^#{1,6}\s/.test(firstSegment)) {
      lines.push(`**${text.notes}**${text.separator.trimEnd()}`)
      lines.push('')
      lines.push(esc(firstSegment))
    } else {
      lines.push(`**${text.notes}**${text.separator}${esc(firstSegment)}`)
    }
    lines.push('')
    while (segments.length) {
      for (const line of segments.shift().split('\n')) lines.push(esc(line))
      lines.push('')
    }
  }

  if (Array.isArray(detail.videos) && detail.videos.length) {
    lines.push(`**${text.videos}**${text.separator.trimEnd()}`)
    lines.push('')
    for (const video of detail.videos) {
      if (!video?.src) continue
      const title = video.title
        ? esc(video.title)
        : video.provider || text.video
      lines.push(
        `<iframe class="rstool-video" src="${escAttr(video.src)}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="${escAttr(title)}"></iframe>`
      )
      if (video.title) lines.push(`*${esc(video.title)}*`)
      if (video.url) {
        lines.push('')
        lines.push(
          `<a href="${escAttr(video.url)}" target="_blank" rel="noopener noreferrer">${text.videoLink}</a>`
        )
      }
      lines.push('')
    }
  }

  lines.push(...deferredParameters)
  if (legacy) lines.push('', ':::', '')
  return lines.join('\n')
}

function groupByCategory(data) {
  const categories = []
  const indexes = {}
  for (const item of data) {
    const category = item.cat || 'Uncategorized'
    const subcategory = item.sub || ''
    if (indexes[category] === undefined) {
      indexes[category] = categories.length
      categories.push({ category, subOrder: [], bySub: {}, noSub: [] })
    }
    const group = categories[indexes[category]]
    if (subcategory) {
      if (!group.bySub[subcategory]) {
        group.bySub[subcategory] = []
        group.subOrder.push(subcategory)
      }
      group.bySub[subcategory].push(item)
    } else {
      group.noSub.push(item)
    }
  }
  return categories
}

const commandText = (item) =>
  item.zh && item.zh !== item.name ? `${item.name} · ${item.zh}` : item.name

function renderIndex(data, locale) {
  data = data.filter((item) => !isLegacyCommand(item.name))
  const text = labels[locale]
  const categories = groupByCategory(data)
  const names = new Set(data.map((item) => item.name))
  const duplicates = [...names].filter(
    (name) => data.filter((item) => item.name === name).length > 1
  )
  const duplicateNote = duplicates.length ? text.duplicateNote(duplicates) : ''
  const prefix = locale === 'en' ? '/en/commands/' : '/commands/'
  const lines = [
    `# ${text.indexTitle}`,
    '',
    `> ${text.indexIntro(data.length, duplicateNote)}`,
    '',
    text.iconGuide,
    '',
    `[${locale === 'en' ? '2.0 command changes and legacy entry mapping' : '2.0 命令变化与旧入口对照'}](${prefix}v2)`,
    ''
  ]

  for (const group of categories) {
    const unique = new Set(
      [
        ...group.subOrder.flatMap((subcategory) => group.bySub[subcategory]),
        ...group.noSub
      ].map((item) => item.name)
    )
    lines.push(text.categoryHeading(group.category, unique.size))
    lines.push('')
    const writeItems = (items) => {
      for (const item of items) {
        const desc = item.desc ? ` — ${esc(item.desc)}` : ''
        lines.push(
          `- [${renderCommandIcon(item.name, { locale })} ${commandText(item)}](${prefix}${slug(item.name)})${desc}`
        )
      }
      lines.push('')
    }
    for (const subcategory of group.subOrder) {
      lines.push(`### ${subcategory}`)
      lines.push('')
      writeItems(group.bySub[subcategory])
    }
    if (group.noSub.length) {
      lines.push(`### ${text.common}`)
      lines.push('')
      writeItems(group.noSub)
    }
  }
  return lines.join('\n') + '\n'
}

function renderVersionGuide(data, locale) {
  const en = locale === 'en'
  const prefix = en ? '/en/commands/' : '/commands/'
  const link = (name) => `[\`${name}\`](${prefix}${slug(name)})`
  const lines = [
    en ? '# RSTool 2.0: command changes' : '# RSTool 2.0：命令变化与对照',
    '',
    en
      ? `Reviewed against the 2.0 source on ${versions.reviewedAt}. Use this page to find where an old command has moved; availability depends on the version you have installed.`
      : `根据 ${versions.reviewedAt} 的 2.0 源码核对。升级后找不到原来的命令，可以先在这里看它现在从哪里进入；实际可用功能以所装版本为准。`,
    '',
    en ? '## What changed' : '## 先看这几个变化',
    '',
    en
      ? '- Walls, doors, windows, curtain walls, and elevators share 2D/3D panels. The double-flight and multi-flight stair panels also include their former 2D commands.\n- Select a parametric object and edit it in Properties. Some old editing commands have become Rhino actions or panel controls.\n- Libraries, studios, and several utility panels run in the RSTool client. Keep it running and signed in.\n- Old command names are not automatically aliases. Update custom toolbar macros and shortcuts to the current entry.'
      : '- 墙体、门窗、幕墙和电梯用同一套面板选择二维或三维；双跑、多跑楼梯也整合了原来的二维命令。\n- 参数对象选中后到属性面板继续修改，部分旧编辑命令改成了 Rhino 原生操作或面板按钮。\n- 资源库、工作室和部分工具面板放到了 RSTool 客户端里，使用时保持客户端运行并登录。\n- 旧命令名不会自动变成兼容别名。自己设置的工具栏宏和快捷键，需要改成现在的入口。',
    '',
    en ? '## Unified panels and current entries' : '## 统一面板与现用入口',
    '',
    en ? '| Entry | What to use in 2.0 |' : '| 入口 | 2.0 怎么用 |',
    '| --- | --- |'
  ]
  for (const item of data) {
    const info = versions.commands[item.name]
    if (!info || isLegacyCommand(item.name)) continue
    lines.push(`| ${link(item.name)} | ${esc(info[locale])} |`)
  }
  for (const [status, zh, english] of [
    ['merged', '旧命令现在用哪个', 'Replacement commands'],
    ['workflow', '改成原生操作或面板设置', 'Rhino actions and panel settings'],
    [
      'unavailable',
      '当前未保留的旧入口',
      'Legacy entries not currently registered'
    ]
  ]) {
    lines.push(
      '',
      `## ${en ? english : zh}`,
      '',
      en
        ? '| Old entry (historical page) | Current entry / action |'
        : '| 旧入口（点击查看历史页） | 现用入口 / 操作 |',
      '| --- | --- |'
    )
    for (const item of data) {
      const info = versions.commands[item.name]
      if (info?.status !== status) continue
      const target = info.replacements.map(link).join(en ? ', ' : '、')
      lines.push(
        `| ${link(item.name)} | ${target ? target + ' — ' : ''}${esc(info[locale])} |`
      )
    }
  }
  lines.push(
    '',
    en ? '## Screenshots, videos, and older files' : '## 截图、视频与旧文件',
    '',
    en
      ? 'Some screenshots and tutorials show 1.x panels. Follow the 2.0 entry and text on the page when labels differ. Merged command names do not mean that every old document object is converted automatically.'
      : '部分截图和视频仍来自 1.x，按钮文字和界面可能不同；遇到差异，先按页面中的 2.0 入口和文字说明操作。命令入口合并，也不代表旧文件中的所有对象都会自动变成新的参数对象。',
    '',
    `[${en ? 'Installation and startup' : '安装与启动说明'}](${prefix}installation/) · [${en ? 'Command index' : '返回命令总目录'}](${prefix})`,
    ''
  )
  return lines.join('\n')
}

function generate(locale) {
  const outputDir = locale === 'en' ? EN_OUT_DIR : ZH_OUT_DIR
  fs.mkdirSync(outputDir, { recursive: true })
  const localized = source.data.map((item) => {
    const detail = source.details[item.name] || {}
    return locale === 'en'
      ? localizeCommand(item, detail, translations)
      : { item, detail }
  })

  for (const { item, detail } of localized) {
    fs.writeFileSync(
      path.join(outputDir, `${slug(item.name)}.md`),
      renderCommand(item, detail, locale),
      'utf8'
    )
  }
  fs.writeFileSync(
    path.join(outputDir, 'index.md'),
    renderIndex(
      localized.map(({ item }) => item),
      locale
    ),
    'utf8'
  )
  fs.writeFileSync(
    path.join(outputDir, 'v2.md'),
    renderVersionGuide(
      localized.map(({ item }) => item),
      locale
    ),
    'utf8'
  )
  console.log(
    `Generated ${localized.length} ${locale} command pages -> ${outputDir}`
  )
}

if (requestedLocale === 'all' || requestedLocale === 'zh') generate('zh')
if (requestedLocale === 'all' || requestedLocale === 'en') generate('en')

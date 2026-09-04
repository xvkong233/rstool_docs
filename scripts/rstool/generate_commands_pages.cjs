/**
 * RsTool 中英文命令页面生成器。
 *
 * 中文内容来自 commands.json，英文内容来自 i18n/commands.en.json；一次运行
 * 同时生成 docs/commands 与 docs/en/commands，并保持两种语言的 slug 一致。
 */
const fs = require('node:fs')
const path = require('node:path')
const { localizeCommand } = require('./i18n.cjs')

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
    cliCall: '命令行交互',
    callText: (name, type) => `在 Rhino 命令行输入 \`${name}\`（${type}）`,
    ghFlow: '使用步骤',
    cliFlow: '交互流程',
    parameters: '参数',
    parameterHeaders: ['中文名', '英文名', '类型', '默认值', '范围', '说明'],
    noGhParams: '该运算器无参数输入；每次画布求解时自动执行。',
    noCliParams: '此命令无命令行数值参数，相关设置在窗口中调整。',
    output: '输出',
    notes: '备注',
    videos: '教学视频',
    video: '视频',
    indexTitle: 'RsTool 命令参考',
    indexIntro: (count, duplicates) =>
      `覆盖 RsTool 插件全部 ${count} 条命令${duplicates}，每条命令一个独立页面，含功能、调用方式、交互流程、参数表、输出、备注与教学视频。`,
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
    output: 'Output',
    notes: 'Notes',
    videos: 'Tutorial videos',
    video: 'Video',
    indexTitle: 'RsTool Command Reference',
    indexIntro: (count, duplicates) =>
      `Complete reference for all ${count} RsTool commands${duplicates}. Each command has a dedicated page covering its purpose, invocation, workflow, parameters, output, notes, and tutorials.`,
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
  lines.push(`# ${name !== displayName ? `${name} · ${displayName}` : name}`)
  lines.push('')
  lines.push(
    `> ${text.module}${text.separator}${category}${subcategory ? ` / ${subcategory}` : ''}`
  )
  lines.push('')
  lines.push(
    `[${text.back}](${locale === 'en' ? '/en/commands/' : '/commands/'})`
  )
  lines.push('')

  if (detail.icon) {
    lines.push(`![${text.icon}](${fixAsset(esc(detail.icon), locale)})`)
    lines.push('')
  }

  const func = detail.output || detail.help || item.desc || text.unavailable
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

  if (detail.style !== 'gh') {
    const callType = detail.style === 'form' ? text.formCall : text.cliCall
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

  lines.push(`**${text.parameters}**${text.separator.trimEnd()}`)
  lines.push('')
  const params = Array.isArray(detail.params) ? detail.params : []
  if (params.length) {
    lines.push(`| ${text.parameterHeaders.join(' | ')} |`)
    lines.push('| --- | --- | --- | --- | --- | --- |')
    params.forEach((param) =>
      lines.push(
        `| ${esc(param.zh)} | ${esc(param.en)} | ${esc(param.type)} | ${esc(param.def)} | ${esc(param.range)} | ${esc(param.note)} |`
      )
    )
  } else {
    lines.push(
      `> ${detail.style === 'gh' ? text.noGhParams : text.noCliParams}`
    )
  }
  lines.push('')

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
    lines.push(`**${text.notes}**${text.separator}${esc(segments.shift())}`)
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
      lines.push('')
    }
  }

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
          `- [${commandText(item)}](${prefix}${slug(item.name)})${desc}`
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
  console.log(
    `Generated ${localized.length} ${locale} command pages -> ${outputDir}`
  )
}

if (requestedLocale === 'all' || requestedLocale === 'zh') generate('zh')
if (requestedLocale === 'all' || requestedLocale === 'en') generate('en')

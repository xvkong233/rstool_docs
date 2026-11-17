// The snapshot describes Rhino command entries, not Grasshopper components or
// a guarantee that every registered internal callback is a public tool.
const versions = require('./command-versions.json')
const retiredStatuses = new Set(['merged', 'workflow', 'unavailable'])
const versionInfo = (name) => versions.commands[name]
const isLegacyCommand = (name) => retiredStatuses.has(versionInfo(name)?.status)
const registeredNames = new Set(
  versions.registeredCommands.map((name) => name.toLowerCase())
)
const isRegisteredCommand = (name) => registeredNames.has(name.toLowerCase())

function versionNotice(name, locale) {
  const info = versionInfo(name)
  if (!info) return ''
  const en = locale === 'en'
  const prefix = en ? '/en/commands/' : '/commands/'
  const old = isLegacyCommand(name)
  const title = old
    ? en
      ? 'Version 2.0: legacy entry'
      : '2.0：旧版入口已调整'
    : en
      ? 'Version 2.0'
      : '2.0 说明'
  const lines = [
    `::: ${old ? 'warning' : 'info'} ${title}`,
    '',
    info[locale],
    ''
  ]
  if (info.replacements?.length) {
    lines.push(
      `${en ? 'Use' : '现在使用'} ${info.replacements.map((target) => `[\`${target}\`](${prefix}${target})`).join(en ? ', ' : '、')}。`.replace(
        /。$/,
        en ? '.' : '。'
      ),
      ''
    )
  }
  if (old)
    lines.push(
      en
        ? 'The old name is not a callable alias in the reviewed 2.0 source. The historical reference below is for 1.x.'
        : '这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。',
      ''
    )
  lines.push(
    `[${en ? 'View the 2.0 command changes' : '查看 2.0 命令变化与对照'}](${prefix}v2)`,
    '',
    ':::',
    ''
  )
  return lines.join('\n')
}

module.exports = {
  versions,
  versionInfo,
  isLegacyCommand,
  isRegisteredCommand,
  versionNotice
}

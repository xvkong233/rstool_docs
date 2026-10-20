const icons = require('./command-icons.json').commands

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

function getCommandIcon(name) {
  const icon = icons[name]
  if (!icon) throw new Error(`Missing command icon mapping: ${name}`)
  return icon
}

function buttonCommand(icon) {
  return (
    Object.keys(icons).find(
      (name) => name.toLowerCase() === icon.buttonCommand?.toLowerCase()
    ) || icon.buttonCommand
  )
}

function iconTitle(name, locale) {
  const icon = getCommandIcon(name)
  const en = locale === 'en'
  if (icon.kind === 'unavailable')
    return en ? 'No icon in the current toolbar' : '当前工具栏中无对应图标'
  if (icon.kind === 'grasshopper')
    return en ? `${name}: Grasshopper component icon` : `${name}：GH 组件图标`
  if (icon.kind === 'toolbar-right')
    return en
      ? `${name}: right-click the ${buttonCommand(icon)} button`
      : `${name}：右键点击 ${buttonCommand(icon)} 按钮`
  return en ? `${name}: toolbar icon` : `${name}：工具栏图标`
}

function renderCommandIcon(
  name,
  { locale = 'zh', context = 'index', base = '/' } = {}
) {
  const icon = getCommandIcon(name)
  const title = escapeAttr(iconTitle(name, locale))
  const classes = ['rstool-command-icon', `rstool-command-icon--${context}`]
  if (icon.kind === 'unavailable') {
    classes.push('rstool-command-icon--missing')
    return `<span class="${classes.join(' ')}" title="${title}" aria-hidden="true"></span>`
  }
  if (icon.kind === 'grasshopper') classes.push('rstool-command-icon--gh')
  if (!icon.dark) classes.push('rstool-command-icon--single')
  const src = (path) => escapeAttr(`${base.replace(/\/$/, '')}${path}`)
  const image = (mode, path) =>
    `<img class="rstool-command-icon__${mode}" src="${src(path)}" alt="" width="48" height="48" loading="${context === 'heading' ? 'eager' : 'lazy'}" decoding="async">`
  return `<span class="${classes.join(' ')}" title="${title}" aria-hidden="true">${image('light', icon.light)}${icon.dark ? image('dark', icon.dark) : ''}</span>`
}

function commandIconNote(name, locale) {
  const icon = getCommandIcon(name)
  if (icon.kind === 'unavailable')
    return locale === 'en'
      ? 'The current toolbar has no icon for this command. The dash is a placeholder, not a toolbar icon; run the command by name.'
      : '当前工具栏中没有此命令的对应图标。横线仅表示暂无图标，不是实际按钮；请通过命令行调用。'
  if (icon.kind === 'toolbar-right') {
    const button = buttonCommand(icon)
    return locale === 'en'
      ? `Right-click the [${button}](./${button}) toolbar button to run this command. The two commands share the visible button icon.`
      : `右键点击工具栏中的 [${button}](./${button}) 按钮可运行本命令；这里显示的是它们共用的按钮图标。`
  }
  return ''
}

module.exports = { getCommandIcon, renderCommandIcon, commandIconNote }

/// <reference types="vitepress/client" />

import Theme from 'vitepress/theme'
import './style.css'
import LanguageToggle from './LanguageToggle.vue'

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp?.(ctx)
    ctx.app.component('LanguageToggle', LanguageToggle)
  }
}

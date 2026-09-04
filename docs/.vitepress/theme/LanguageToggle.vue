<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

defineProps<{ screenMenu?: boolean }>()

const { localeIndex } = useData()
const route = useRoute()

const isEnglish = computed(() => localeIndex.value === 'en')
const label = computed(() => (isEnglish.value ? '中文' : 'EN'))
const ariaLabel = computed(() =>
  isEnglish.value ? '切换到简体中文' : 'Switch to English'
)

const target = computed(() => {
  let relativePath = route.data.relativePath
  relativePath = isEnglish.value
    ? relativePath.replace(/^en\//, '')
    : `en/${relativePath}`
  relativePath = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')
  return `${withBase(`/${relativePath}`)}${route.query}`
})
</script>

<template>
  <a
    class="language-toggle"
    :class="{ 'screen-menu': screenMenu }"
    :href="target"
    :aria-label="ariaLabel"
    :lang="isEnglish ? 'zh-CN' : 'en-US'"
    :hreflang="isEnglish ? 'zh-CN' : 'en-US'"
    rel="alternate"
  >
    {{ label }}
  </a>
</template>

<style scoped>
.language-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2rem;
  margin-block: calc((var(--vp-nav-height) - 2rem) / 2);
  padding: 0 0.625rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
  color: var(--vp-c-text-1);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1;
  transition:
    color 0.2s,
    border-color 0.2s,
    background-color 0.2s;
}

.language-toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.language-toggle.screen-menu {
  width: fit-content;
  margin-bottom: 0;
  margin-top: 0.75rem;
}
</style>

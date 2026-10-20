export function renderCommandIcon(
  name: string,
  options?: {
    locale?: 'zh' | 'en'
    context?: 'heading' | 'index' | 'sidebar'
    base?: string
  }
): string

export function commandIconNote(name: string, locale: 'zh' | 'en'): string

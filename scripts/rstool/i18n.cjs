const crypto = require('node:crypto')

function normalizeIllustrations(detail) {
  if (Array.isArray(detail.illustrations)) return detail.illustrations
  return detail.illustration?.src ? [detail.illustration] : []
}

function translatableSource(item, detail) {
  return {
    item: {
      cat: item.cat || '',
      sub: item.sub || '',
      zh: item.zh || '',
      desc: item.desc || ''
    },
    detail: {
      flow: Array.isArray(detail.flow) ? detail.flow : [],
      params: Array.isArray(detail.params)
        ? detail.params.map((param) => ({
            zh: param.zh || '',
            type: param.type || '',
            def: param.def || '',
            range: param.range || '',
            note: param.note || ''
          }))
        : [],
      output: detail.output || '',
      notes: detail.notes || '',
      illustrations: normalizeIllustrations(detail).map((illustration) => ({
        alt: illustration.alt || '',
        caption: illustration.caption || ''
      })),
      videos: Array.isArray(detail.videos)
        ? detail.videos.map((video) => ({ title: video.title || '' }))
        : []
    }
  }
}

function sourceHash(item, detail) {
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(translatableSource(item, detail)))
    .digest('hex')
}

function localizeCommand(item, detail, translations) {
  const translated = translations.commands?.[item.name]
  if (!translated) throw new Error(`Missing English translation: ${item.name}`)

  const expectedHash = sourceHash(item, detail)
  if (translated.sourceHash !== expectedHash) {
    throw new Error(`Stale English translation: ${item.name}`)
  }

  const translatedDetail = translated.detail || {}
  const sourceIllustrations = normalizeIllustrations(detail)
  const localizedIllustrations = sourceIllustrations.map(
    (illustration, index) => ({
      ...illustration,
      ...(translatedDetail.illustrations?.[index] || {})
    })
  )
  const localizedVideos = (detail.videos || []).map((video, index) => ({
    ...video,
    title: translatedDetail.videos?.[index]?.title || video.title || ''
  }))
  const localizedParams = (detail.params || []).map((param, index) => ({
    ...param,
    ...(translatedDetail.params?.[index] || {}),
    zh: translatedDetail.params?.[index]?.label || param.zh
  }))

  return {
    item: {
      ...item,
      cat: translations.categories?.[item.cat] || item.cat,
      sub: item.sub ? translations.subcategories?.[item.sub] || item.sub : '',
      zh: translated.title,
      desc: translated.desc
    },
    detail: {
      ...detail,
      flow: translatedDetail.flow || [],
      params: localizedParams,
      output: translatedDetail.output || '',
      notes: translatedDetail.notes || '',
      illustrations: localizedIllustrations,
      videos: localizedVideos
    }
  }
}

module.exports = {
  localizeCommand,
  normalizeIllustrations,
  sourceHash,
  translatableSource
}

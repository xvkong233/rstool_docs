/**
 * 使用 Google Translate 的公开接口生成英文命令覆盖数据。
 *
 * 文档内容会发送到外部服务。只有在内容所有者明确同意后才可运行，并且必须显式
 * 传入确认参数：
 *   node scripts/rstool/translate_commands_en.cjs --confirm-public-docs-upload
 *
 * 翻译缓存支持中断后续跑；已通过 sourceHash 验证的命令不会重复翻译。
 */
const fs = require('node:fs')
const path = require('node:path')
const { sourceHash, translatableSource } = require('./i18n.cjs')

if (!process.argv.includes('--confirm-public-docs-upload')) {
  throw new Error(
    '此脚本会把公开文档发送到 Google Translate。获得明确授权后，请添加 --confirm-public-docs-upload。'
  )
}

const sourcePath = path.join(__dirname, 'commands.json')
const outputPath = path.join(__dirname, 'i18n/commands.en.json')
const cachePath = path.join(__dirname, 'i18n/translation-cache.en.json')
const source = JSON.parse(fs.readFileSync(sourcePath, 'utf8'))
const existing = fs.existsSync(outputPath)
  ? JSON.parse(fs.readFileSync(outputPath, 'utf8'))
  : { categories: {}, subcategories: {}, commands: {} }
const cache = fs.existsSync(cachePath)
  ? JSON.parse(fs.readFileSync(cachePath, 'utf8'))
  : {}

const categoryTranslations = {
  AI: 'AI',
  资源库: 'Libraries',
  效率工具: 'Productivity',
  趣味: 'Fun',
  建筑: 'Architecture',
  二维建筑: '2D Architecture',
  地形: 'Terrain',
  几何: 'Geometry',
  铺装表皮: 'Paneling & Facades',
  组织与选择: 'Organization & Selection',
  视图出图: 'Views & Documentation',
  分析: 'Analysis',
  物理模拟: 'Physics Simulation',
  SubD辅助: 'SubD Tools',
  截面管理: 'Section Management',
  辅助工具: 'Utilities',
  动态组件: 'Dynamic Components',
  GH组件: 'Grasshopper Components'
}

const subcategoryTranslations = {
  渲染与建模: 'Rendering & Modeling',
  视频生成: 'Video Generation',
  模型库: 'Model Library',
  材质库: 'Material Library',
  生产力: 'Productivity',
  屏幕工具: 'Screen Tools',
  互动娱乐: 'Interactive Entertainment',
  道路: 'Roads',
  楼梯与坡道: 'Stairs & Ramps',
  建筑构件: 'Building Elements',
  三维墙体: '3D Walls',
  轴网与墙体: 'Grids & Walls',
  门窗与电梯: 'Doors, Windows & Elevators',
  其他二维: 'Other 2D Tools',
  获取与编辑: 'Acquisition & Editing',
  分析与模拟: 'Analysis & Simulation',
  曲线: 'Curves',
  曲面: 'Surfaces',
  网格: 'Meshes',
  对象变换: 'Object Transforms',
  点: 'Points',
  选择: 'Selection',
  图层: 'Layers',
  材质辅助: 'Material Tools',
  标注出图: 'Annotation & Documentation',
  视图相机: 'Views & Cameras',
  建筑物理分析: 'Building Performance Analysis',
  找形与松弛: 'Form Finding & Relaxation',
  动力学: 'Dynamics',
  编辑工具: 'Editing Tools',
  剪贴板: 'Clipboard',
  块操作: 'Block Operations',
  系统工具: 'System Tools',
  导入导出: 'Import & Export',
  创建: 'Creation',
  面板: 'Panels',
  入门: 'Getting Started',
  交互: 'Interaction',
  维护: 'Maintenance',
  装配: 'Assembly'
}

const titleOverrides = {
  rsMindMap: 'Mind Map',
  rsVectorStudio: 'Vector Studio',
  rsImageStudio: 'Image Studio',
  rsWhiteboard: 'Whiteboard',
  rsModelingCompanion: 'Modeling Companion',
  rsKeyCast: 'Keystroke Display',
  rsKeyCastSettings: 'Keystroke Display Settings',
  rsBrowser: 'Break-Time Browser',
  rsRoadLine: 'Road Centerline',
  rsRoadGenerator: 'Road Generator',
  rsAutoParking: 'Automatic Parking Layout',
  rsStairBySteps: 'Staircase by Step Count',
  rsDoubleFlightStairs: 'Double-Flight Staircase',
  rsMultiFlightStairs: 'Multi-Flight Staircase',
  rsSpiralStair: 'Spiral Staircase',
  rsFadingStair: 'Tapered Staircase',
  rsFadingStairVertical: 'Vertical Tapered Staircase',
  rsSpaceTruss: 'Double-Layer Space Frame',
  rsCurtainPlus: 'Enhanced Curtain Wall',
  rsOldTownRoof: 'Traditional Roof',
  rsWallJoin: 'Join Walls',
  rsFilletWall: 'Fillet Wall Corners',
  rsWallExtend: 'Extend Wall',
  rsArchiGrid: 'Smart Architectural Grid',
  rsWall2DAutoJoin: 'Auto-Join 2D Walls',
  rsFilletWall2D: 'Fillet 2D Wall Corners',
  rsDoor2D: '2D Door',
  rsMoveOpening2D: 'Move 2D Opening',
  rsCopyOpening2D: 'Copy 2D Opening',
  rsEditOpening2D: 'Edit 2D Opening',
  rsDeleteOpening2D: 'Delete 2D Opening',
  rsPolylineStair2D: 'Polyline 2D Staircase',
  rsCurtainWall2D: '2D Curtain Wall',
  rsConvertA2DToNormalCurves: 'Convert 2D Architecture to Curves',
  rsEarth: 'Terrain Downloader',
  rsEarthOld: 'Legacy Terrain Downloader',
  rsTerrain: 'Terrain Mesh',
  rsRainFlowSimulation: 'Rainwater Flow Analysis',
  rsFilletNonPlanar: 'Fillet Non-Planar Curves',
  rsFindCurveGaps: 'Find Curve Gaps',
  rsUnrollCrv: 'Straighten Curve',
  rsLoftCurvesPairs: 'Loft Curve Pairs',
  rsMeshWindow: 'Mesh Toolkit',
  rsTriRemesh: 'Triangle Remesh',
  rsDualMesh: 'Dual Mesh',
  rsDiamondMesh: 'Diamond Mesh',
  rsSubdivideMesh: 'Subdivide Mesh',
  rsFlipClosedMeshOutward: 'Flip Closed Mesh Outward',
  rsReduceMeshByCurvature: 'Reduce Mesh by Curvature',
  rsMeshFrame: 'Mesh Frame',
  rsSimpleSculptor: 'Quick Mesh Sculptor',
  rsTesselateNurbs: 'Panelize NURBS',
  rsTileQuadNurbsBlend: 'Blend Panels on Quad NURBS',
  rsTileMeshBlend: 'Blend Panels on Mesh',
  rsTileMeshBlendByColor: 'Blend Mesh Panels by Color',
  rsTileMeshBlendByBitmap: 'Blend Mesh Panels by Bitmap',
  rsMeshColorPaint: 'Mesh Color Brush',
  rsSprinkerOne: 'Single-Point Scatter',
  rsSprinkerMutiple: 'Multi-Point Scatter',
  rsRandomChange: 'Random Transform',
  rsMoveProject: 'Move Project',
  rsDivideCrvByRoundedCount: 'Divide Curve by Rounded Count',
  rsGradientSelcectByCrv: 'Gradient Selection by Curve',
  rsSelectHathByName: 'Select Hatches by Name',
  rsRandomSelection: 'Random Selection',
  rsAssignRandomColorToLayer: 'Assign Random Layer Colors',
  rsAutoSegColorToLayer: 'Assign Segmented Colors to Layers',
  rsBlockObjectsToLayer: 'Move Block Hierarchy to Layers',
  rsPickMaterial: 'Pick Material',
  rsHatchPlanarSurfaces: 'Hatch Planar Surfaces',
  rsSectionBox: 'Section Box',
  rsSectionBoxToggle: 'Toggle Section Box',
  rsDiagramArrow: 'Diagram Arrow',
  rsDiagramArrowEdit: 'Edit Diagram Arrow',
  rsHeightDot: 'Elevation Marker',
  rsSetCamera: 'Set Camera',
  rsFaceCamera: 'Orient Toward Camera',
  rsCameraPath: 'Camera Path',
  rsShadow: 'Shadow Analysis',
  rsSunlightAnalysisByGrid: 'Planar Sunlight Analysis',
  rsSunlightAnalysisByMesh: '3D Mesh Sunlight Analysis',
  rsSolarFocusRiskSimulation: 'Solar Glare Risk Analysis',
  rsVisibilityAnalysis: 'Visibility Analysis',
  rsViewshedAnalysis: 'Viewshed Analysis',
  rsMeshRelax: 'Uniform Mesh Relaxation',
  rsCirclePacking: 'Circle Packing',
  rsClothFluttering: 'Cloth Wind Simulation',
  rsBoids: 'Boids Simulation',
  rsMoveAlongNormal: 'Move Along Normal',
  rsSelectSubDEdgeDirection: 'Select Co-Directional SubD Edges',
  rsProfileDirectorAddProfile: 'Add Profile',
  rsGroupToBlock: 'Convert Group to Block',
  rsMenu: 'RsTool Menu',
  rsHotbox: 'Hotbox',
  rsHotboxSettings: 'Hotbox Settings',
  RsAutoEnglish: 'Automatic English Commands',
  rsToolStart: 'Start RsTool',
  rsClean: 'Deep Clean',
  rsFilterHeavyObjects: 'Filter Heavy Objects',
  rsWalker: 'Walkthrough Mode',
  rsCreateDynamicComponent: 'Create Dynamic Component',
  rsDynamicComponent: 'Dynamic Components Panel',
  rsPurgeDynamicComponentCache: 'Purge Dynamic Component Cache',
  rsTxtReader: 'Command-Line Text Reader'
}

const parameterLabelOverrides = {
  层高: 'Floor-to-floor height',
  楼层高度: 'Floor-to-floor height',
  扶手高度: 'Handrail height',
  踏板厚度: 'Tread thickness',
  底部高度: 'Bottom height',
  翻转参考线: 'Flip guide curve',
  步高: 'Riser height',
  步深: 'Tread depth',
  梯段宽度: 'Flight width',
  休息平台深度: 'Landing depth',
  梯井宽度: 'Stairwell gap',
  梯板底厚: 'Stair slab thickness',
  梯板厚度: 'Stair slab thickness',
  圈数: 'Number of turns',
  内圈半径: 'Inner radius',
  踏板宽度: 'Tread width',
  踏步宽度: 'Tread depth',
  踏步高度: 'Riser height',
  梯间宽度: 'Stairwell width',
  平台深度: 'Landing depth',
  上楼侧: 'Upward side',
  下一段类型: 'Next segment type',
  上行方向: 'Upward direction'
}

const cjk = /[\u3400-\u9fff]/
const technicalTokens =
  /`[^`\r\n]+`|https?:\/\/[^\s)]+|\brs[A-Z][A-Za-z0-9_]*\b/g

function normalizeTerms(text) {
  return text
    .replace(/Rstool/gi, 'RsTool')
    .replace(/Grass Hopper/gi, 'Grasshopper')
    .replace(/Package Manager/g, 'PackageManager')
    .replace(/\bbrep\b/gi, 'Brep')
    .replace(/\bnurbs\b/gi, 'NURBS')
    .replace(/\bsubd\b/gi, 'SubD')
    .replace(/\bBackgammon\b/g, 'Step height')
    .replace(/\barmrest height\b/gi, 'handrail height')
    .replace(/\bpedal(s)?\b/gi, (_, plural) => `tread${plural || ''}`)
    .replace(/\bStation B\b/g, 'Bilibili')
    .replace(/\bform command\b/gi, 'dialog-based command')
    .replace(/\banti-shake\b/gi, 'debounce')
    .replace(/\bladder section\b/gi, 'stair flight')
    .replace(/\brest platform\b/gi, 'landing')
}

function normalizeTree(value) {
  if (typeof value === 'string') return normalizeTerms(value)
  if (Array.isArray(value)) return value.map(normalizeTree)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, normalizeTree(entry)])
    )
  }
  return value
}

function mapStrings(value, transform) {
  if (typeof value === 'string') return transform(value)
  if (Array.isArray(value))
    return value.map((entry) => mapStrings(entry, transform))
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [
        key,
        mapStrings(entry, transform)
      ])
    )
  }
  return value
}

function normalizeCommand(command, item, detail) {
  let normalized = normalizeTree(command)
  normalized.title = titleOverrides[item.name] || normalized.title
  normalized.title = normalized.title
    ? normalized.title[0].toUpperCase() + normalized.title.slice(1)
    : normalized.title

  const isMeshCommand =
    item.sub === '网格' || item.sub === 'Mesh' || /Mesh/.test(item.name)
  if (isMeshCommand) {
    normalized = mapStrings(normalized, (text) =>
      text.replace(/\bgrids\b/gi, 'meshes').replace(/\bgrid\b/gi, 'mesh')
    )
  }
  if (item.name === 'rsWhiteboard') {
    normalized = mapStrings(normalized, (text) =>
      text
        .replace(/\bmaterial libraries\b/gi, 'asset libraries')
        .replace(/\bmaterial library\b/gi, 'asset library')
        .replace(/\bartboards\b/gi, 'canvases')
        .replace(/\bartboard\b/gi, 'canvas')
    )
  }
  for (const [index, param] of (detail.params || []).entries()) {
    const label = parameterLabelOverrides[param.zh]
    if (label && normalized.detail?.params?.[index]) {
      normalized.detail.params[index].label = label
    }
  }
  return normalized
}

function protect(text) {
  const tokens = []
  const masked = text.replace(technicalTokens, (token) => {
    if (cjk.test(token)) return token
    const marker = `ZXQTK${tokens.length}QXZ`
    tokens.push(token)
    return marker
  })
  return { masked, tokens }
}

function restore(text, tokens) {
  let result = text
  tokens.forEach((token, index) => {
    const digits = String(index).split('').join('\\s*')
    result = result.replace(
      new RegExp(`ZXQTK\\s*${digits}\\s*QXZ`, 'gi'),
      token
    )
  })
  return normalizeTerms(result)
}

async function requestTranslation(text, attempt = 1) {
  const { masked, tokens } = protect(text)
  const url = new URL('https://translate.googleapis.com/translate_a/single')
  const body = new URLSearchParams({
    client: 'gtx',
    sl: 'zh-CN',
    tl: 'en',
    dt: 't',
    q: masked
  })
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'user-agent': 'rstool-docs-translation/1.0'
      },
      body
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const payload = await response.json()
    return restore(payload[0].map((part) => part[0]).join(''), tokens)
  } catch (error) {
    if (attempt >= 5) throw error
    const wait = String(error.message).includes('429')
      ? attempt * 15000
      : attempt * 2000
    console.log(`Translation request retry ${attempt}/5 in ${wait / 1000}s`)
    await new Promise((resolve) => setTimeout(resolve, wait))
    return requestTranslation(text, attempt + 1)
  }
}

const batchSeparator = '\nZXQSEPARATORQXZ\n'
const maxBatchCharacters = 2800
const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

function saveCache() {
  fs.writeFileSync(cachePath, `${JSON.stringify(cache, null, 2)}\n`)
}

function splitLongText(text) {
  const chunks = []
  let remaining = text
  while (remaining.length > maxBatchCharacters) {
    let end = remaining.lastIndexOf('\n\n', maxBatchCharacters)
    if (end > maxBatchCharacters / 3) end += 2
    else {
      end = remaining.lastIndexOf('\n', maxBatchCharacters)
      if (end > maxBatchCharacters / 3) end += 1
      else {
        end = Math.max(
          remaining.lastIndexOf('。', maxBatchCharacters) + 1,
          remaining.lastIndexOf('. ', maxBatchCharacters) + 2
        )
        if (end <= maxBatchCharacters / 3) end = maxBatchCharacters
      }
    }
    chunks.push(remaining.slice(0, end))
    remaining = remaining.slice(end)
  }
  if (remaining) chunks.push(remaining)
  return chunks
}

async function translateBatch(values) {
  if (values.length === 1 && values[0].length > maxBatchCharacters) {
    const chunks = splitLongText(values[0])
    const translated = []
    for (const chunk of chunks) {
      translated.push(await requestTranslation(chunk))
      await delay(1200)
    }
    return [translated.join('')]
  }

  const result = await requestTranslation(values.join(batchSeparator))
  const parts = result.split(/\s*ZXQSEPARATORQXZ\s*/gi)
  if (parts.length === values.length) return parts.map((part) => part.trim())

  if (values.length === 1) {
    throw new Error('Google Translate 未保留批处理分隔符')
  }
  const middle = Math.ceil(values.length / 2)
  return [
    ...(await translateBatch(values.slice(0, middle))),
    ...(await translateBatch(values.slice(middle)))
  ]
}

function collectStrings(value, output) {
  if (typeof value === 'string') {
    if (cjk.test(value)) output.add(value)
  } else if (Array.isArray(value)) {
    value.forEach((entry) => collectStrings(entry, output))
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach((entry) => collectStrings(entry, output))
  }
}

async function warmCache() {
  const strings = new Set()
  for (const item of source.data) {
    collectStrings(
      translatableSource(item, source.details[item.name] || {}),
      strings
    )
  }
  const missing = [...strings].filter(
    (text) =>
      !cache[text] || cjk.test(cache[text]) || /ZXQTK\s*\d/i.test(cache[text])
  )
  console.log(
    `Translation cache: ${strings.size - missing.length}/${strings.size}; ${missing.length} strings remaining`
  )

  let translatedCount = 0
  let batch = []
  let batchCharacters = 0
  const flush = async () => {
    if (!batch.length) return
    const translated = await translateBatch(batch)
    batch.forEach((text, index) => {
      cache[text] = translated[index]
    })
    translatedCount += batch.length
    saveCache()
    console.log(`Cached ${translatedCount}/${missing.length} remaining strings`)
    batch = []
    batchCharacters = 0
    await delay(1200)
  }

  for (const text of missing) {
    const addedCharacters = text.length + batchSeparator.length
    if (
      text.length > maxBatchCharacters ||
      batch.length >= 20 ||
      batchCharacters + addedCharacters > maxBatchCharacters
    ) {
      await flush()
    }
    if (text.length > maxBatchCharacters) {
      const [translated] = await translateBatch([text])
      cache[text] = translated
      translatedCount++
      saveCache()
      console.log(
        `Cached ${translatedCount}/${missing.length} remaining strings`
      )
      continue
    }
    batch.push(text)
    batchCharacters += addedCharacters
  }
  await flush()
}

async function translate(value) {
  if (value == null || value === '') return ''
  const text = String(value)
  if (!cjk.test(text)) return text
  if (cache[text]) return normalizeTerms(cache[text])
  throw new Error(`Translation cache was not warmed for: ${text.slice(0, 80)}`)
}

async function translateCommand(item, detail) {
  const illustrations = Array.isArray(detail.illustrations)
    ? detail.illustrations
    : detail.illustration?.src
      ? [detail.illustration]
      : []
  return {
    sourceHash: sourceHash(item, detail),
    title: await translate(item.zh || item.name),
    desc: await translate(item.desc),
    detail: {
      flow: await Promise.all((detail.flow || []).map(translate)),
      params: await Promise.all(
        (detail.params || []).map(async (param) => ({
          label: await translate(param.zh),
          type: await translate(param.type),
          def: await translate(param.def),
          range: await translate(param.range),
          note: await translate(param.note)
        }))
      ),
      output: await translate(detail.output),
      notes: await translate(detail.notes),
      illustrations: await Promise.all(
        illustrations.map(async (illustration) => ({
          alt: await translate(illustration.alt),
          caption: await translate(illustration.caption)
        }))
      ),
      videos: await Promise.all(
        (detail.videos || []).map(async (video) => ({
          title: await translate(video.title)
        }))
      )
    }
  }
}

async function main() {
  await warmCache()
  const result = {
    categories: categoryTranslations,
    subcategories: {
      ...Object.fromEntries(
        [...new Set(source.data.map((item) => item.sub).filter(Boolean))]
          .filter((name) => !subcategoryTranslations[name])
          .map((name) => [name, name])
      ),
      ...subcategoryTranslations
    },
    commands: {}
  }

  for (const item of source.data) {
    const detail = source.details[item.name] || {}
    const previous = existing.commands?.[item.name]
    const previousText = previous ? JSON.stringify(previous) : ''
    if (
      previous?.sourceHash === sourceHash(item, detail) &&
      !cjk.test(previousText) &&
      !/ZXQTK\s*\d/i.test(previousText)
    ) {
      result.commands[item.name] = previous
      continue
    }
    console.log(`Translating ${item.name}`)
    result.commands[item.name] = await translateCommand(item, detail)
  }

  const normalizedResult = normalizeTree(result)
  for (const item of source.data) {
    normalizedResult.commands[item.name] = normalizeCommand(
      normalizedResult.commands[item.name],
      item,
      source.details[item.name] || {}
    )
  }
  fs.writeFileSync(outputPath, `${JSON.stringify(normalizedResult, null, 2)}\n`)
  console.log(
    `Wrote ${Object.keys(result.commands).length} commands to ${outputPath}`
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

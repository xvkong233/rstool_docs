# 更新日志

本页按版本倒序记录 RsTool 每次发布的新增功能、体验优化与问题修复。RsTool（Rhino 插件）与 RSTool.Grasshopper（GH 组件）同步发版，版本号两者通用。条目中的命令名可点击跳转到对应命令文档。

当前最新版本为 **1.2.4**。安装与升级方式见[安装指南](/commands/installation/)。

## 1.2.4（2026-09-02）

### 新增

- [建模陪伴](/commands/rsModelingCompanion)新增多种房屋类型模型，陪伴内容库继续扩充。

### 优化

- RSTool 工具列持续完善；[rsModel](/commands/rsModel) 与 [rsMaterial](/commands/rsMaterial) 的文件树显示顺序调整。
- [rsWhiteboard](/commands/rsWhiteboard) 白板使用体验优化。

## 1.2.3（2026-09-01）

### 新增

- [rsWhiteboard](/commands/rsWhiteboard) 白板新增分镜功能。

### 优化

- RSTool 工具列改为自动生成，新命令会自动同步到工具列，无需手动维护。
- 全部 ETO 窗口改为置顶显示，不再被 Rhino 视窗遮挡。

### 修复

- 处理新功能引入的界面卡顿问题。

## 1.2.2（2026-08-31）

### 优化

- 工具列文件夹树取消混淆，目录结构直接可见。

### 修复

- [rsHotbox](/commands/rsHotbox) 设置窗口首次打开时未居中的问题。
- 放置点之后全局轴锁定状态未自动复位的问题。

## 1.2.1（2026-08-30）

### 新增

- **建模陪伴宠物**：新增[建模陪伴](/commands/rsModelingCompanion) AI 宠物与模型轻量化显示切换工具，持续扩充新宠物、新功能与互动引导。
- **热盒**：[rsHotbox](/commands/rsHotbox) 新增快捷键唤出与手势交互。
- **快速测量**：新增快速测量命令。
- **Rhino → Maya**：新增一键发送模型到 Maya（[rsSendToMaya](/commands/rsSendToMaya)、[rsMayaTransferSettings](/commands/rsMayaTransferSettings)）。
- **GH 组件**：新增 Alembic 网格动画导出（[Export Mesh Alembic](/commands/export-mesh-alembic)）与循环（Loop）组件。
- **SubD 圆量化**：新增 SubD 圆量化命令。
- **一键平放**：新增 [rsLayFlat](/commands/rsLayFlat)，物体一键放平到地面。
- **剖切工具**：新增多段线 / 曲线剖面工具（[rsPolylineSection](/commands/rsPolylineSection)）。
- **交互式扶梯**：[rsEscalator](/commands/rsEscalator) 支持交互式生成扶梯与自动步道。
- **标高面板**：新增 [rsElevationPanel](/commands/rsElevationPanel)，由标高对象生成标高面板。
- 新增若干二维绘图工具与 RsTool 文档查看命令。

### 优化

- [rsFadingStair](/commands/rsFadingStair) 渐变楼梯、[rsZigZagRamp](/commands/rsZigZagRamp) 坡道等命令增加实时交互预览。
- [rsSimpleSculptor](/commands/rsSimpleSculptor) 雕刻笔刷支持半径变化。
- [rsDisplacementToMesh](/commands/rsDisplacementToMesh) 置换生成优化，支持纹理自适应细分。
- 风环境分析优化；[rsShadowRender](/commands/rsShadowRender) 渲染阴影支持 worksession 参考。
- 地形分析新增图例控制。
- [rsPdfTools](/commands/rsPdfTools) PDF 工具预览与转换增强。
- [rsAiAnimation](/commands/rsAiAnimation) 支持一次返回多张出图结果。
- [rsImageStudio](/commands/rsImageStudio) / [rsVectorStudio](/commands/rsVectorStudio) 工具列紧凑化、手绘平滑优化，并支持锁定画板。
- [rsShadowRender](/commands/rsShadowRender) 阴影边缘新增柔化处理。
- Hotbox 界面与设置逻辑优化，操作更流畅。

### 修复

- [rsCopy](/commands/rsCopy) / [rsPaste](/commands/rsPaste) 粘贴参考点不刷新的问题。
- Hotbox 默认按钮消失的问题。
- [rsQuickColor](/commands/rsQuickColor) 的显示问题。
- [rsShadowRender](/commands/rsShadowRender) 静默输出白帧的问题。
- 视图截取时 [rsMenu](/commands/rsMenu) 会一并入镜的问题。
- 多显示器环境下 [rsScreenPin](/commands/rsScreenPin) 截取位置偏移的问题。
- [CanvasTransparent](/commands/CanvasTransparent) 退出后视口状态未恢复的问题。
- AI 渲染图片保存卡顿的问题。
- 网格操作中纹理与边界角点丢失的问题。

## 1.1.8（2026-08-19）

### 新增

- **AI 动画**：新增 [rsAiAnimation](/commands/rsAiAnimation)，可通过 Seedence 生成 AI 视频，支持中英双语界面。
- **动态组件**：新增参数化动态组件体系（[rsDynamicComponent](/commands/rsDynamicComponent)、[rsCreateDynamicComponent](/commands/rsCreateDynamicComponent) 等），支持参数、绑定与交互动作。
- **TXT 阅读器**：新增 [rsTxtReader](/commands/rsTxtReader)，可在 Rhino 命令行按页阅读文本文件。
- **Rhino ↔ SketchUp 互传**：新增一键互传（[rsSendToSU](/commands/rsSendToSU)）与剪贴板同步，支持 SketchUp 2022。
- 渲染阴影新增 AO 渲染模式与边线叠加。
- 新增室内照度分析与交互式日照分析预览。

### 优化

- 选择过滤器支持在框选结果内继续筛选。
- 渐变表皮生成结果可分组分别赋予材质（[rsGradientChangeByCrv](/commands/rsGradientChangeByCrv)）。
- [rsImageStudio](/commands/rsImageStudio) / [rsVectorStudio](/commands/rsVectorStudio) 新增实际尺寸画板。
- [rsWhiteboard](/commands/rsWhiteboard) 白板与 [rsMindMap](/commands/rsMindMap) 思维导图新增最近打开记录。
- [RsAutoEnglish](/commands/RsAutoEnglish) 操作逻辑优化。
- [rsAIModeler](/commands/rsAIModeler) 建筑智能体增强。
- [rsBuildingArea2D](/commands/rsBuildingArea2D) 新增容积率计算。
- [rsQuickColor](/commands/rsQuickColor) 色板优化。
- 密集网格雕刻性能优化。

### 修复

- [rsEarth](/commands/rsEarth) 分区拼接与材质生成错误。
- 高分屏不同缩放比下界面显示不全的问题。
- mm 模板下插入门窗丢失墙体的问题。
- Studio 工作台在 Rhino 导入模型时视口被重置的问题。
- [rsPaste](/commands/rsPaste) 参考点不更新的问题。

## 1.1.7（2026-08-03）

### 新增

- **AI 建模智能体**：[rsAIModeler](/commands/rsAIModeler) 引入建筑智能体与 MCP 桥接。
- **Vector Studio**：全新矢量工作室 [rsVectorStudio](/commands/rsVectorStudio)，支持手绘平滑、透明度与路径圆角控制。
- **Image Studio**：图片工作室（原 rsPS）更名为 [rsImageStudio](/commands/rsImageStudio)，新增魔棒选择、图片编辑等能力。
- **3ds Max 导出**：新增授权版 3ds Max FBX 导出器。
- **白板图库**：[rsWhiteboard](/commands/rsWhiteboard) 新增持久化图库。
- **截图浮窗**：新增 [rsScreenPin](/commands/rsScreenPin) 截图贴屏。
- **自定义材质 PBR**：新增 [rsPBRToCustomMaterial](/commands/rsPBRToCustomMaterial)。
- **分组排料**：[rsQuickNest](/commands/rsQuickNest) 支持成组排料与独立 OpenNest 工作进程。
- **白模 / 阴影通道导出**：建模输出新增白模与阴影通道。
- **GH 组件**：组件库与连线编辑扩展。
- 剖面轮廓与部件锚点选项扩展（[rsProfileDirector](/commands/rsProfileDirector)）。

### 优化

- WebView2 界面改为自适应加载。
- [rsElevation2D](/commands/rsElevation2D) 窗口不再锁定 Rhino 视窗。
- [rsAutoParking](/commands/rsAutoParking) 支持更多排除项。

### 修复

- GH 插件加载冲突会给出明确报告。
- 共享白板在 Rhino 侧 Newtonsoft 依赖冲突。
- [Linked C#](/commands/linked-csharp) 连接保持修复。

## 1.1.6（2026-07-26）

### 新增

- **按键浮窗**：新增 [rsKeyCast](/commands/rsKeyCast) 可配置按键浮层与 [rsKeyCastSettings](/commands/rsKeyCastSettings) 显示控制。

### 修复

- [rsHeightDot](/commands/rsHeightDot) 若干问题修复。

## 1.1.5（2026-07-26）

### 新增

- **白板**：全新 [rsWhiteboard](/commands/rsWhiteboard) 白板功能，支持本地绘制与局域网共享协作。
- **思维导图**：新增 [rsMindMap](/commands/rsMindMap)。
- **PDF 工具**：新增离线 [rsPdfTools](/commands/rsPdfTools)。
- **毛发系统**：新增可预览的 [rsHairSystem](/commands/rsHairSystem)。
- **建筑面积**：新增 [rsBuildingArea2D](/commands/rsBuildingArea2D) 建筑面积计算（含精细模式与扣减体）。
- **建筑标高**：新增 [rsElevation2D](/commands/rsElevation2D) 二维立面标高。
- **幕墙**：新增 [rsCurtainPlus](/commands/rsCurtainPlus)，支持多曲面与 G0 折边。
- **曲线断点查找**：新增 [rsFindCurveGaps](/commands/rsFindCurveGaps)。
- **多跑楼梯**：新增 [rsMultiFlightStairs](/commands/rsMultiFlightStairs)。
- **膜结构**：膜结构找形流程与点锚固（[rsMembrane](/commands/rsMembrane)）。
- **GH 组件**：新增 [Linked C#](/commands/linked-csharp) 组件、[Tessellate NURBS](/commands/tessellate-nurbs) 运算器，并集成授权版 RSTool.Grasshopper 插件。
- **二维洞口编辑**：新增二维洞口移动 / 复制 / 编辑命令（[rsMoveOpening2D](/commands/rsMoveOpening2D)、[rsCopyOpening2D](/commands/rsCopyOpening2D)、[rsEditOpening2D](/commands/rsEditOpening2D)）。
- **圆弧拟合**：新增 [rsFitArcChain](/commands/rsFitArcChain) 相切圆弧拟合。
- **地形下载**：支持地形连续拼接下载（[rsTerrain](/commands/rsTerrain)）。
- 授权体系重构：移除插件内授权，统一通过 App 认证。
- 材质图库新增收藏功能。

### 优化

- [rsMenu](/commands/rsMenu) 新增搜索、圆角 UI、缩放与明暗主题布局。
- [rsProfileDirector](/commands/rsProfileDirector) 图库与面板工作流大幅改进。
- AI 渲染图片工作流与本地重渲染（[rsAiRender](/commands/rsAiRender)）。
- [rsHeightDot](/commands/rsHeightDot) 支持回车 / 空格 / 右键结束命令。

### 修复

- 英文界面若干显示问题。
- [rsSuExport](/commands/rsSuExport) 导出保留图块实例，SubD 导出质量提升。
- 授权自动复核 HTTP 500、激活服务 5xx 提示。
- [rsWall](/commands/rsWall) / [rsWall2D](/commands/rsWall2D) 墙体与洞口连接多处修复。
- [rsCurtainWall2D](/commands/rsCurtainWall2D) 预览与输出对齐。
- 重叠曲线清理（[rsCleanUpOverlappingCurves](/commands/rsCleanUpOverlappingCurves)）。

## 1.1.4（2026-07-12）

### 新增

- **二维建筑平面绘制**：新增二维墙体绘制命令组（[rsWall2D](/commands/rsWall2D)、[rsFilletWall2D](/commands/rsFilletWall2D)、[rsBreakWall2D](/commands/rsBreakWall2D) 等），含二维倒墙角与转普通线稿（[rsConvertA2DToNormalCurves](/commands/rsConvertA2DToNormalCurves)）。
- **自由二维楼梯**：新增 [rsPolylineStair2D](/commands/rsPolylineStair2D)。
- **快速排料**：新增 [rsQuickNest](/commands/rsQuickNest)。
- **黏菌模拟**：新增 [rsPhysarum](/commands/rsPhysarum)。
- [rsEarthOld](/commands/rsEarthOld) 旧版地球命令回归。

### 优化

- 二维绘图性能优化，新增快速索引。
- [rsProfileDirector](/commands/rsProfileDirector) 生成逻辑优化并支持中文界面。
- AI 渲染适配 GPT Image 2 局部重绘（[rsAiRender](/commands/rsAiRender)）。
- [rsThreeBody](/commands/rsThreeBody) 三体运动界面与渲染阴影优化。
- 幕墙生成与结构线提取新增 UI 交互界面。

### 修复

- 直跑楼梯箭头位置错误并补充折断线。
- [rsWall](/commands/rsWall) 多墙体交汇问题。
- [rsWall2D](/commands/rsWall2D) 洞口与墙体连接多处修复。
- 动画导出时残留轨迹预览的问题。
- [rsMenu](/commands/rsMenu) 不显示新命令的问题。
- rsEarth、AI 渲染、图库窗口按 Rhino 语言本地化，高分屏适配。
- [rsQuickColor](/commands/rsQuickColor)、[rsHeightDot](/commands/rsHeightDot) 窗口布局与位置修复。
- [rsAutoBoxMapping](/commands/rsAutoBoxMapping) 重几何保护。
- WebView 命令加载失败时自动切换旧版实现。

## 1.1.3（2026-06-19）

### 新增

- **图片转线稿**：新增 [rsImageToCurve](/commands/rsImageToCurve) 并引入 Vtrace 矢量化。
- **快速上色**：新增 [rsQuickColor](/commands/rsQuickColor)，支持撤销与透明度。
- **轴网**：新增 [rsArchiGrid](/commands/rsArchiGrid)。
- **网格减面**：新增 [rsReduceMeshByCurvature](/commands/rsReduceMeshByCurvature)。
- **集群模拟**：新增 [rsBoids](/commands/rsBoids)（支持吸引源）。
- **布料模拟**：新增 [rsClothFluttering](/commands/rsClothFluttering) 布料吹动。
- **钢结构网架**：新增 [rsSpaceTruss](/commands/rsSpaceTruss)，支持单层网架。
- **曲线展开**：新增 [rsUnrollCrv](/commands/rsUnrollCrv)。
- **可视度分析**：新增 [rsVisibilityAnalysis](/commands/rsVisibilityAnalysis)。
- 贴图干扰网格渐变（[rsTileMeshBlendByBitmap](/commands/rsTileMeshBlendByBitmap)）。
- [rsTesselateNurbs](/commands/rsTesselateNurbs) 新增随机矩形等曲面划分方式。
- [rsSetCamera](/commands/rsSetCamera) 新增两点透视。
- [rsHeightDot](/commands/rsHeightDot) 新增英尺 / 英寸单位。
- [rsToolLocation](/commands/rsToolLocation) 打开插件目录；[rsToolStart](/commands/rsToolStart) 支持自动弹出分组工具列。
- 雕刻工具支持灰度图干扰（[rsSimpleSculptor](/commands/rsSimpleSculptor)）。
- 结构力学分析增强（[rsStructuralAnalysis](/commands/rsStructuralAnalysis)）。
- 渐变选择新增 ETO 界面（[rsGradientSelcectByCrv](/commands/rsGradientSelcectByCrv)）。

### 优化

- [rsMenu](/commands/rsMenu) 分组与图标更新，中英文适配。
- [rsProfileDirector](/commands/rsProfileDirector) 中文界面、图块支持与跨件面板。
- 道路生成新增预览（[rsRoadGenerator](/commands/rsRoadGenerator)）；[rsRoadLine](/commands/rsRoadLine) 新增左舵选项。
- 可视化分析多线程加速；rsWind CFD 运行提速。
- 放置摄像机支持 Brep / Mesh / SubD。
- [rsShadowRender](/commands/rsShadowRender) 支持剖切渲染，渲染提速。

### 修复

- mm 模板下窗户生成、[rsBubble](/commands/rsBubble) 起泡泡、网格渐变表皮报错的问题。
- T 型墙体倒角错乱（[rsFilletWall](/commands/rsFilletWall)）。
- [rsDoor](/commands/rsDoor) 生成失败的问题。
- [rsQuickColor](/commands/rsQuickColor) 英文界面显示不全。
- [rsRoofTile](/commands/rsRoofTile) 屋顶瓦缺失。
- [rsSuExport](/commands/rsSuExport) 导出丢失物体。
- 授权验证代理连通性与版本上报 DLL 加载失败处理。
- 弹窗按钮显示不全的问题。

## 1.1.1（2026-05-31）

### 新增

- **行走模拟**：新增 [rsWalker](/commands/rsWalker)，支持 HUD 右键操作。
- **泛光聚光分析**：新增 [rsSolarFocusRiskSimulation](/commands/rsSolarFocusRiskSimulation)。
- 墙体倒角（[rsFilletWall](/commands/rsFilletWall)）。

### 优化

- [rsRoofTile](/commands/rsRoofTile) 支持自定义瓦间距。
- [rsRailing](/commands/rsRailing) 竖向支撑改为生成 Mesh，并支持与曲线实时联动。
- 新增 [MeshPipe](/commands/MeshPipe)、[MeshLoft](/commands/MeshLoft) 方法。
- [rsTileQuadNurbsBlend](/commands/rsTileQuadNurbsBlend) 支持流动网格与 SubD 单元。
- [rsShadowRender](/commands/rsShadowRender) 新增 medium 画质、外轮廓粗细与阴影程度控制。
- [rsWindow](/commands/rsWindow) 生成窗户支持实时联动 Rhino 物体。

### 修复

- [rsRailing](/commands/rsRailing)、[rsDoor](/commands/rsDoor) 生成失败导致 Rhino 崩溃的问题。
- [rsWindow](/commands/rsWindow) 只能选择单个墙体的问题。
- 坡屋顶破洞的问题。
- [rsRoadLine](/commands/rsRoadLine) 英文版标线类型不显示。
- [rsSuExport](/commands/rsSuExport) 导出丢失图块。

## 1.1.0（2026-05-19）

### 新增

- **顶部主菜单**：新增 Rhino 顶端主菜单 [rsMenu](/commands/rsMenu)。
- **双跑楼梯**：新增 [rsDoubleFlightStairs](/commands/rsDoubleFlightStairs)；[rsSpiralStair](/commands/rsSpiralStair) 旋转楼梯新增 ETO 界面。
- **风环境 CFD**：[rsWindAnalysis](/commands/rsWindAnalysis) 新增真实 CFD 模拟。
- **日照分析**：新增基于网格的 [rsSunlightAnalysisByMesh](/commands/rsSunlightAnalysisByMesh) 与 [rsSunlightAnalysisByGrid](/commands/rsSunlightAnalysisByGrid)。
- **Maya → Rhino**：新增 [rsCopyMayaToRhino](/commands/rsCopyMayaToRhino) 复制 Maya 模型到 Rhino。
- **网格笔刷上色**：新增 [rsMeshColorPaint](/commands/rsMeshColorPaint) 与按颜色渐变网格。
- **微信通知**：新增 [rsWeChatSend](/commands/rsWeChatSend) 定时发送微信消息。
- **屋顶瓦**：新增 [rsRoofTile](/commands/rsRoofTile)。
- **参数建筑工作流**：门、窗、楼梯、栏杆共享 ETO 参数与预览流程。
- **开放曲线修复**：新增 [rsRepairOpenCurves](/commands/rsRepairOpenCurves)。
- 图层命令 [rsNewLayer](/commands/rsNewLayer)；NURBS 单元转网格单元（[rsConvertToMeshPanel](/commands/rsConvertToMeshPanel)）。
- [rsShadow](/commands/rsShadow) 阴影范围支持生成透明填充。

### 优化

- [rsSuExport](/commands/rsSuExport) 导出流程改为先抽离渲染网格，解决直接导出卡顿。
- [rsAutoParking](/commands/rsAutoParking) 停车位生成优化，新增绿化带。
- TileNurbs 铺装支持调 UV 选项与多重曲面连续划分。
- 网格渐变与 NURBS 渐变表皮流程优化。
- [rsBubble](/commands/rsBubble) 改为按高度生成。
- 渲染阴影大幅更新（完美阴影初版）。
- [rsTesselateNurbs](/commands/rsTesselateNurbs) 支持实时预览。

### 修复

- 离线状态误判的问题。
- 关闭激活窗口后插件仍被占用的问题。
- 激活窗口默认置顶。
- [rsCurtain](/commands/rsCurtain) 含柔滑角点转 NURBS 后报错。
- 命令注册被授权验证阻塞导致「未知命令」的问题。
- 轮廓线颜色错误。
- 交换 UV 对矩形 / 菱形划分不生效。
- [rsGroupToBlock](/commands/rsGroupToBlock) 保留原始对象属性、失败时返回真实结果。
- 图层合并取消与批量导出误报成功。
- [rsAiRender](/commands/rsAiRender) 模板窗与历史窗重复创建。

## 1.0.9（2026-03-29）

### 新增

- **模型清理**：新增 [rsClean](/commands/rsClean)，支持图层与块定义清理、材质合并与未使用材质清理。
- [rsTileMeshBlend](/commands/rsTileMeshBlend) 支持 SubD 流动。

### 优化

- 旧版材质库（[rsMaterialLibraryOld](/commands/rsMaterialLibraryOld)）同步图层材质赋予能力，新增物体与图层选项。

### 修复

- 材质库扫描遗漏与列表加载体验。
- [rsClean](/commands/rsClean) 弹窗阻塞与重复材质误判。
- 材质库复用文档已有材质，避免重复创建。

## 1.0.8（2026-03-26）

### 新增

- **表格粘贴**：新增 [rsPasteExcel](/commands/rsPasteExcel)。
- 找回 [rsExplodeNestedBlocks](/commands/rsExplodeNestedBlocks) 嵌套图块炸开命令。

## 1.0.7（2026-03-26）

### 优化

- [rsMaterial](/commands/rsMaterial) 材质功能更新。
- 插件载入默认执行 [rsToolStart](/commands/rsToolStart)。

### 修复

- 材质库附材质阻塞，支持 rmtl 赋材。
- 模型库目录扫描结果不显示。

## 1.0.6（2026-03-24）

首个公开发布版本，包含：

- 命令框架与 View 视图命令组。
- WebView2 界面重写与 Eto 实时预览。
- 材质库体系（含目录图标、撤销支持）。
- AI 渲染与建筑灵感提示词工具。
- 授权输入、缓存与安全机制。

---

::: tip 版本号说明
1.1.2 与 1.2.0 两个版本号在发布过程中被跳过，未对外发布，特此说明。
:::

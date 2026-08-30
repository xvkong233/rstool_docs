# RsTool 命令参考

> 覆盖 RsTool 插件全部 276 条命令，每条命令一个独立页面，含功能、调用方式、交互流程、参数表、输出、备注与教学视频。

## AI（4 条）

### 渲染与建模

- [rsAiRender · AI 渲染](/commands/rsAiRender) — 打开 AI 渲染窗口，提供 AI 辅助渲染功能。选择视角后可生成多种风格的渲染效果图。
- [rsAIModeler · AI 建模](/commands/rsAIModeler) — 打开 AI 建模窗口，通过文本描述或参考图生成 3D 模型。
- [rsAiRenderOld · 旧版 AI 渲染](/commands/rsAiRenderOld) — 旧版 AI 渲染窗口，保留兼容。建议使用新版 rsAiRender。

### 视频生成

- [rsAiAnimation · AI 动画](/commands/rsAiAnimation) — 打开 AI 动画窗口，通过参考图片（可选参考视频/音频）与提示词生成 Seedance 视频。

## 资源库（6 条）

### 模型库

- [rsModel · 模型库](/commands/rsModel) — 打开模型库窗口，浏览和管理内置 3D 模型资产。支持分类筛选和搜索。
- [rsModelOld · 旧版模型库](/commands/rsModelOld) — 旧版模型库窗口，保留兼容。
- [InsertAssetOld · 旧版插入模型](/commands/InsertAssetOld) — 旧版模型插入命令，从旧版模型库中选择模型插入。
- [InsertAsset · 插入模型](/commands/InsertAsset) — 从模型库中选择模型并插入到当前文档，插入时可旋转角度。

### 材质库

- [rsMaterial · 材质库](/commands/rsMaterial) — 打开材质库窗口，浏览和管理内置材质资源。支持 PBR 材质预览。
- [rsMaterialLibraryOld · 旧版材质库](/commands/rsMaterialLibraryOld) — 旧版材质库窗口，保留兼容。

## 效率工具（10 条）

### 生产力

- [rsMindMap · 思维导图](/commands/rsMindMap) — 打开思维导图工具，可在 Rhino 中创建和编辑思维导图。
- [rsVectorStudio · 矢量工作室](/commands/rsVectorStudio) — 打开矢量工作室，在 Rhino 内进行矢量图形编辑。
- [rsImageStudio · 图像工作室](/commands/rsImageStudio) — 打开图像工作室编辑器，在 Rhino 内进行图像编辑和处理。
- [rsPdfTools · PDF 工具](/commands/rsPdfTools) — 打开 PDF 工具，支持 PDF 的导入、导出和处理。
- [rsWhiteboard · 白板](/commands/rsWhiteboard) — 打开白板工具，可在 Rhino 中进行自由绘制和标注。
- [rsModelingCompanion · 建模陪伴](/commands/rsModelingCompanion) — 在 Rhino 界面中唤出建模陪伴助手，可随时隐藏或恢复。
- [rsModelingCompanionSettings · 建模陪伴设置](/commands/rsModelingCompanionSettings) — 打开建模陪伴助手的设置窗口，配置助手形象与行为。

### 屏幕工具

- [rsScreenPin · 截图浮窗](/commands/rsScreenPin) — 截取屏幕区域并将其作为浮窗固定在屏幕上，方便参考对照。
- [rsKeyCast · 按键显示](/commands/rsKeyCast) — 在屏幕上实时显示当前按下的快捷键，适合教学演示和录屏。
- [rsKeyCastSettings · 按键显示设置](/commands/rsKeyCastSettings) — 打开按键显示的设置面板，可调整位置、大小、样式等。

## 趣味（5 条）

### 互动娱乐

- [rsBrowser · 摸鱼浏览器](/commands/rsBrowser) — 打开内置浏览器窗口，支持在 Rhino 内浏览网页。
- [rsThreeBody · 三体运动模拟](/commands/rsThreeBody) — 三体运动模拟器，可视化三个天体的引力运动轨迹。
- [rsWalker · 漫游模式](/commands/rsWalker) — 在 Rhino 模型中进行第一人称漫游，类似游戏式的场景探索。
- [rsFpsGame · FPS 反应测试](/commands/rsFpsGame) — 在 Rhino 中玩 FPS 反应测试小游戏，测试你的反应速度。
- [rsTxtReader · 命令行 TXT 阅读器](/commands/rsTxtReader) — 在 Rhino 命令行按页阅读 .txt 文本文件，支持翻页、跳行、调整每行字数、正倒序显示，自动识别 UTF-8 / GBK 编码。

## 建筑（25 条）

### 道路

- [rsRoadLine · 道路线](/commands/rsRoadLine) — 根据参数生成道路中心线，支持车道宽度、人行道等参数设置。
- [rsRoadGenerator · 道路生成](/commands/rsRoadGenerator) — 根据中心线自动生成完整道路模型，含车道、人行道、绿化带等。
- [rsAutoParking · 自动停车](/commands/rsAutoParking) — 根据场地轮廓自动生成停车位布局，支持平行/斜列/垂直停车。

### 楼梯与坡道

- [rsStairBySteps · 按步数生成楼梯](/commands/rsStairBySteps) — 指定踏步数量生成参数化楼梯，可调整踏步宽高比、楼梯宽度等。
- [rsDoubleFlightStairs · 双跑楼梯](/commands/rsDoubleFlightStairs) — 生成双跑楼梯，含休息平台。支持调整楼梯宽度、层高、踏步数。
- [rsMultiFlightStairs · 多跑楼梯](/commands/rsMultiFlightStairs) — 生成多跑楼梯，可自定义跑数、休息平台位置等参数。
- [rsSpiralStair · 旋转楼梯](/commands/rsSpiralStair) — 生成旋转楼梯，可调整内径、外径、踏步数和旋转角度。
- [rsEscalator · 自动扶梯](/commands/rsEscalator) — 生成自动扶梯模型，含扶手、踏步等构件。
- [rsZigZagRamp · 折线坡道](/commands/rsZigZagRamp) — 生成折线形坡道，符合无障碍设计规范。可调整坡度和平台宽度。
- [rsFadingStair · 渐变楼梯](/commands/rsFadingStair) — 生成踏步尺寸渐变的楼梯，用于造型特殊的异形楼梯。
- [rsFadingStairVertical · 竖向渐变楼梯](/commands/rsFadingStairVertical) — 生成竖向渐变的楼梯，踏步高度沿竖向渐变。

### 建筑构件

- [rsDoor · 门](/commands/rsDoor) — 在墙体上创建参数化门，支持单开门、双开门、推拉门等类型。
- [rsWindow · 窗](/commands/rsWindow) — 在墙体上创建参数化窗，支持平开窗、推拉窗、固定窗等类型。
- [rsRailing · 栏杆](/commands/rsRailing) — 沿路径生成参数化栏杆，含扶手、立柱等构件。可调整间距和高度。
- [rsSpaceTruss · 双层网架](/commands/rsSpaceTruss) — 生成双层空间网架结构，支持多种网格类型和参数配置。
- [rsCurtain · 幕墙](/commands/rsCurtain) — 在曲面上生成幕墙系统，含竖框、横梁和面板。
- [rsCurtainPlus · 增强版幕墙](/commands/rsCurtainPlus) — 增强版幕墙创建工具，提供更多参数和定制选项。
- [rsOldTownRoof · 老镇屋顶](/commands/rsOldTownRoof) — 生成老镇风格的传统坡屋顶，含屋脊、檐口等构件。
- [rsRoofTile · 屋顶瓦生成](/commands/rsRoofTile) — 在屋顶曲面上生成瓦片铺装，支持不同瓦片类型和排列方式。

### 三维墙体

- [rsWall · 智能墙体](/commands/rsWall) — 创建参数化智能墙体，沿路径生成。支持墙厚、高度、材质等参数。可自动处理门窗洞口。
- [rsWallRemoveHole · 墙体去洞](/commands/rsWallRemoveHole) — 移除智能墙体上的门窗洞口，恢复墙体为完整状态。
- [rsWallJoin · 墙体连接](/commands/rsWallJoin) — 将两段或多段智能墙体进行连接和交接处理。
- [rsFilletWall · 倒墙角](/commands/rsFilletWall) — 对墙体转角进行倒圆角处理，可调整圆角半径。
- [rsWallExtend · 墙体延伸](/commands/rsWallExtend) — 将智能墙体延伸至指定边界或另一段墙体。
- [rsConvertWallToNormalBrep · 转换墙体为普通Brep](/commands/rsConvertWallToNormalBrep) — 将智能墙体转换为标准 Brep 曲面，取消参数化关联。

## 二维建筑（21 条）

### 轴网与墙体

- [rsArchiGrid · 智能轴网](/commands/rsArchiGrid) — 创建建筑轴网，支持自定义轴线间距、编号方式和标注样式。
- [rsWall2D · 二维墙体](/commands/rsWall2D) — 创建二维平面墙体，支持自动交接和厚度参数。适合平面图绘制。
- [rsDeleteWall2D · 删除二维墙体](/commands/rsDeleteWall2D) — 删除二维墙体并自动处理相邻墙体的端点。
- [rsWall2DReconnect · 二维墙体重连](/commands/rsWall2DReconnect) — 重新连接二维墙体，修复因移动或删除导致的断开。
- [rsWall2DAutoJoin · 二维墙体自动交接](/commands/rsWall2DAutoJoin) — 自动处理多段二维墙体的交接关系，生成正确的平面图节点。
- [rsFilletWall2D · 二维墙体倒角](/commands/rsFilletWall2D) — 对二维墙体转角进行倒角处理。
- [rsBreakWall2D · 打断二维墙体](/commands/rsBreakWall2D) — 在指定位置将一面二维墙体打断成两段。

### 门窗与电梯

- [rsDoor2D · 二维门](/commands/rsDoor2D) — 在二维墙体上插入门，含门扇开启弧线。支持单开门、双开门等。
- [rsWindow2D · 二维窗](/commands/rsWindow2D) — 在二维墙体上插入窗，含窗框和玻璃表示线。
- [rsElevator2D · 二维电梯](/commands/rsElevator2D) — 在平面图中插入二维电梯图块，含轿厢和门。
- [rsMoveOpening2D · 移动二维门窗/电梯](/commands/rsMoveOpening2D) — 沿墙体移动二维门窗或电梯的位置，自动更新墙体开口。
- [rsCopyOpening2D · 复制二维门窗/电梯](/commands/rsCopyOpening2D) — 沿墙体复制二维门窗或电梯，自动在墙体上创建新开口。
- [rsEditOpening2D · 编辑二维门窗/电梯](/commands/rsEditOpening2D) — 编辑二维门窗/电梯的参数，如宽度、开启方向等。
- [rsDeleteOpening2D · 删除二维门窗](/commands/rsDeleteOpening2D) — 删除二维门窗并自动修复墙体。

### 其他二维

- [rsStair2D · 二维楼梯](/commands/rsStair2D) — 创建二维平面楼梯图示，含踏步线和方向箭头。
- [rsPolylineStair2D · 自由二维楼梯](/commands/rsPolylineStair2D) — 沿自定义多段线创建二维楼梯，适合异形楼梯平面。
- [rsCurtainWall2D · 二维幕墙](/commands/rsCurtainWall2D) — 在平面图中创建二维幕墙表示线。
- [rsElevation2D · 建筑标高](/commands/rsElevation2D) — 创建建筑标高标注，用于立面图和剖面图。
- [rsBuildingArea2D · 建筑面积](/commands/rsBuildingArea2D) — 计算并标注建筑面积，支持按楼层统计。
- [rsConvertA2DToNormalCurves · 二维转普通线条](/commands/rsConvertA2DToNormalCurves) — 将二维建筑对象（墙、门、窗等）转换为普通曲线，取消参数化关联。
- [rsElevationPanel · 标高面板](/commands/rsElevationPanel) — 由 rsElevation2D 生成的标高对象或群组生成标高面板。

## 地形（6 条）

### 获取与编辑

- [rsEarth · 下载地形](/commands/rsEarth) — 从在线地图服务下载指定区域的地形高程数据并生成网格。
- [rsEarthOld · 旧版下载地形](/commands/rsEarthOld) — 旧版地形下载功能，保留兼容。
- [rsTerrainEdit · 编辑地形](/commands/rsTerrainEdit) — 对地形网格进行编辑，如局部抬升、降低、平整等操作。

### 分析与模拟

- [rsTerrain · 地形网格](/commands/rsTerrain) — 从高程点或等高线生成地形网格曲面。
- [rsTerrainAnalysis · 地形分析](/commands/rsTerrainAnalysis) — 对地形进行多维度分析：高程、坡度、坡向、凹凸性、粗糙度等，以彩色映射可视化。
- [rsRainFlowSimulation · 雨流分析](/commands/rsRainFlowSimulation) — 模拟雨水在地形表面的流动路径，用于排水分析。

## 几何（38 条）

### 曲线

- [rsImageToCurve · 图片转曲线](/commands/rsImageToCurve) — 将位图图像矢量化为 Rhino 曲线，支持调整精度和阈值。
- [rsFilletNonPlanar · 非共面倒角](/commands/rsFilletNonPlanar) — 对非共面曲线进行倒圆角处理，支持三维空间的曲线倒角。
- [rsFitArcChain · 相切圆弧拟合](/commands/rsFitArcChain) — 用相切圆弧链拟合曲线，常用于将自由曲线转为圆弧段组合。
- [rsExtractIsoCrvByNum · 按数量提取等参线](/commands/rsExtractIsoCrvByNum) — 按指定数量在曲面上均匀提取等参线（U/V 方向）。
- [rsRandomTrimCurve · 随机修剪曲线](/commands/rsRandomTrimCurve) — 按随机参数对曲线进行修剪，生成不规则片段。
- [rsSplitCrvAtIntersection · 交点处分割曲线](/commands/rsSplitCrvAtIntersection) — 在曲线交点处自动分割曲线，生成多段独立曲线。
- [rsRepairOpenCurves · 修复开放曲线](/commands/rsRepairOpenCurves) — 自动修复开放的曲线，将间隙处闭合或延伸连接。
- [rsFindCurveGaps · 查找线头](/commands/rsFindCurveGaps) — 查找并标记曲线中的间隙和断点，辅助修复未闭合的曲线。
- [rsCleanUpOverlappingCurves · 清理重叠曲线](/commands/rsCleanUpOverlappingCurves) — 检测并删除重叠的曲线段，保留唯一曲线。
- [rsUnrollCrv · 曲线展直](/commands/rsUnrollCrv) — 将曲线展直为直线段，保持长度不变。适合展开计算。

### 曲面

- [rsLoftCurvesPairs · 成对放样](/commands/rsLoftCurvesPairs) — 将多组曲线成对放样生成曲面，批量处理多组截面。
- [rsSectionSweep · 剖面扫掠](/commands/rsSectionSweep) — 沿路径曲线扫掠截面生成曲面，支持变截面。

### 网格

- [rsMeshWindow · 网格工具](/commands/rsMeshWindow) — 打开网格工具窗口，集成多种网格编辑和处理功能。
- [rsTriRemesh · 三角重构](/commands/rsTriRemesh) — 对网格进行三角面重新划分，生成均匀的三角网格。支持按边长控制。
- [rsDualMesh · 对偶网格](/commands/rsDualMesh) — 生成网格的对偶网格，将面中心转为顶点。
- [rsDiamondMesh · 菱形网格](/commands/rsDiamondMesh) — 将网格转换为菱形网格表示。
- [rsSubdivideMesh · 细分网格](/commands/rsSubdivideMesh) — 对网格进行细分，增加网格密度。支持 Catmull-Clark 等细分模式。
- [rsUnifyQuadMesh · 统一四边面网格](/commands/rsUnifyQuadMesh) — 统一四边面网格的法线方向和拓扑结构。
- [rsFlipClosedMeshOutward · 闭合网格外翻](/commands/rsFlipClosedMeshOutward) — 将闭合网格的法线翻转为朝外，确保法线方向一致。
- [rsJoinMeshesByMaterials · 按材质合并网格](/commands/rsJoinMeshesByMaterials) — 将具有相同材质的网格合并为一个网格，减少 Draw Call。
- [rsReduceMeshByCurvature · 按曲率减网格面](/commands/rsReduceMeshByCurvature) — 根据曲面曲率智能减少网格面数，曲率低的区域面数减少更多。
- [rsDisplacementToMesh · 置换贴图转真实网格](/commands/rsDisplacementToMesh) — 将 Rhino 对象的置换 / 凹凸贴图烘焙为真正的网格几何，支持质量预设、实时预览与生产风险检查。
- [rsMeshFrame · 网格框架](/commands/rsMeshFrame) — 在原网格每个面内生成内缩的边框(Picture Frame)拓扑，与 rsMeshWindow 互补，适合制作格栅/框架效果。
- [rsHairSystem · 毛发系统](/commands/rsHairSystem) — 在网格曲面上创建毛发系统，可控制密度、长度、方向等参数。
- [rsConvertToMeshPanel · Nurbs单元转Mesh单元](/commands/rsConvertToMeshPanel) — 将 NURBS 面板转换为网格面板，便于后续铺装和渐变操作。
- [rsSimpleSculptor · 快速雕刻工具](/commands/rsSimpleSculptor) — 网格快速雕刻工具，支持推拉、平滑等交互式网格编辑。

### 对象变换

- [rsArrayBetween · 两对象间阵列](/commands/rsArrayBetween) — 在两个对象之间进行均匀阵列，自动计算间距和数量。
- [rsSprinkerOne · 单点散布](/commands/rsSprinkerOne) — 以单点为中心散布对象，控制散布范围和数量。
- [rsSprinkerMutiple · 多点散布](/commands/rsSprinkerMutiple) — 以多个点为中心散布对象，适合大面积植被布置。
- [rsPlaceObjsOnCrv · 沿曲线摆放对象](/commands/rsPlaceObjsOnCrv) — 沿曲线路径放置对象，可控制间距、旋转和对齐方式。
- [rsGradientChangeByCrv · 沿曲线渐变变换](/commands/rsGradientChangeByCrv) — 沿参考曲线对对象进行渐变缩放或旋转变换。
- [rsRandomChange · 随机变换](/commands/rsRandomChange) — 对选中的对象进行随机缩放、旋转、移动等变换。
- [rsMoveToOrigin · 移动到原点](/commands/rsMoveToOrigin) — 将选中对象移动到世界坐标系原点。
- [rsMoveProject · 工程移动](/commands/rsMoveProject) — 按工程精度移动对象，支持输入精确坐标值。
- [rsLayFlat · 一键放平](/commands/rsLayFlat) — 拾取对象上的一个面，将整个对象旋转放平到该面所在的平面。

### 点

- [rsRandomPtsOnCrv · 曲线上随机点](/commands/rsRandomPtsOnCrv) — 在曲线上生成随机分布的点，可控制数量和随机种子。
- [rsRandomPtsOnObj · 物体上随机生成点](/commands/rsRandomPtsOnObj) — 在物体表面生成随机分布的点，支持网格和曲面。
- [rsDivideCrvByRoundedCount · 按圆整数量分割曲线](/commands/rsDivideCrvByRoundedCount) — 按圆整后的数量分割曲线，确保等分段数取整。

## 铺装表皮（6 条）

### （通用）

- [rsTesselateNurbs · NURBS 细分铺装](/commands/rsTesselateNurbs) — 对 NURBS 曲面进行细分铺装，生成面板化结构。
- [rsTileQuadNurbsBlend · 四边 NURBS 铺装混接](/commands/rsTileQuadNurbsBlend) — 在 NURBS 曲面上生成渐变表皮图案。
- [rsTileMeshBlend · 网格铺装混接](/commands/rsTileMeshBlend) — 在网格曲面上生成铺装图案，支持不同图案之间的混接过渡。
- [rsTileMeshBlendByColor · 按颜色生成渐变表皮](/commands/rsTileMeshBlendByColor) — 根据网格顶点颜色生成渐变铺装表皮，颜色驱动图案密度或类型。
- [rsTileMeshBlendByBitmap · 按贴图生成渐变表皮](/commands/rsTileMeshBlendByBitmap) — 根据贴图图像生成渐变铺装表皮，图像灰度或颜色驱动图案变化。
- [rsMeshColorPaint · 网格笔刷](/commands/rsMeshColorPaint) — 用笔刷在网格上绘制颜色，支持实时交互式涂抹。

## 组织与选择（20 条）

### 选择

- [rsSelectSimilar · 相似对象选择](/commands/rsSelectSimilar) — 选中与当前对象相似的物体（同类型、同图层、同材质等）。
- [rsGradientSelcectByCrv · 按曲线渐变选择](/commands/rsGradientSelcectByCrv) — 根据距离参考曲线的远近进行渐变选择。
- [rsSelectByPrintWidth · 按打印宽度选择](/commands/rsSelectByPrintWidth) — 按对象的打印线宽属性筛选选择。
- [rsSelectBySrfEdgeCount · 按曲面边数选择](/commands/rsSelectBySrfEdgeCount) — 按曲面的边数（trimmed face 边数）筛选选择曲面。
- [rsSelectHathByName · 按名称选择填充](/commands/rsSelectHathByName) — 按填充图案的名称选择对应的填充对象。
- [rsRandomSelection · 随机选择](/commands/rsRandomSelection) — 从当前对象中随机选取一定比例或数量的对象。

### 图层

- [rsNewLayer · 新建图层](/commands/rsNewLayer) — 快速新建图层，支持自定义名称和颜色。
- [rsCloseObjLayer · 关闭对象所在图层](/commands/rsCloseObjLayer) — 关闭选中对象所在的图层，快速隐藏不需要的对象。
- [rsMoveLayerObjs · 移动图层对象](/commands/rsMoveLayerObjs) — 将一个图层的所有对象移动到另一个目标图层。
- [rsMergeLayers · 合并图层](/commands/rsMergeLayers) — 将多个图层合并为一个图层。
- [rsAssignLayerMaterialToObj · 图层材质赋给对象](/commands/rsAssignLayerMaterialToObj) — 将图层材质直接赋予该图层上的所有对象。
- [rsAssignRandomMaterialToLayers · 按图层随机赋材质](/commands/rsAssignRandomMaterialToLayers) — 为不同图层随机分配材质，便于区分。
- [rsAssignRandomColorToLayer · 图层随机着色](/commands/rsAssignRandomColorToLayer) — 为图层随机分配显示颜色，便于视觉区分。
- [rsAutoSegColorToLayer · 自动分段着色到图层](/commands/rsAutoSegColorToLayer) — 自动按对象属性分段，分配到不同图层并着色。
- [rsBlockObjectsToLayer · 块对象归层](/commands/rsBlockObjectsToLayer) — 将块定义中的对象按规则归类到指定图层。
- [rsDeleteLayer · 删除图层](/commands/rsDeleteLayer) — 通过图层选择对话框勾选一个或多个图层并删除。

### 材质辅助

- [rsPickMaterial · 拾取材质](/commands/rsPickMaterial) — 从场景中的对象上拾取材质，变为当前材质。
- [rsQuickColor · 快速着色](/commands/rsQuickColor) — 快速为选中对象分配指定颜色，无需打开材质编辑器。
- [rsAutoBoxMapping · 自动盒映射](/commands/rsAutoBoxMapping) — 自动为对象设置盒映射贴图坐标，适合建筑模型快速贴图。
- [rsPBRToCustomMaterial · PBR转自定义材质](/commands/rsPBRToCustomMaterial) — 将 PBR 材质转换为 Rhino 自定义材质，便于在低版本 Rhino 中使用。

## 视图出图（16 条）

### 标注出图

- [rsHatchPlanarSurfaces · 平面填充](/commands/rsHatchPlanarSurfaces) — 自动为平面曲面添加填充图案，适合平面图材料表示。
- [rsSectionBox · 剖切框](/commands/rsSectionBox) — 创建三维剖切框，交互式调整剖切范围，用于查看模型内部。
- [rsSectionBoxToggle · 开关剖切框](/commands/rsSectionBoxToggle) — 临时关闭或恢复 Section Box 剖切显示，主控盒保留，可再次切换恢复。
- [rsDiagramArrow · 示意箭头](/commands/rsDiagramArrow) — 创建分析示意箭头，可调整箭头样式、大小和颜色。
- [rsDiagramArrowEdit · 编辑示意箭头](/commands/rsDiagramArrowEdit) — 编辑已创建的示意箭头的参数和样式。
- [rsHeightDot · 高程点](/commands/rsHeightDot) — 创建高程标注点，标注点的高度或 XYZ 坐标，支持基于自定义工作平面计算。
- [rsQuickNest · 快速排料](/commands/rsQuickNest) — 将多个平面图形进行排版嵌套，优化材料利用率。
- [rsShadowRender · 建筑渲染窗口](/commands/rsShadowRender) — 打开建筑渲染窗口，含阴影渲染功能，快速生成建筑表现图。
- [rsPolylineSection · 折线剖切](/commands/rsPolylineSection) — 沿折线或曲线生成剖切，可在观察者一侧指定剖切深度，并增删折点。

### 视图相机

- [rsSetCamera · 设置相机](/commands/rsSetCamera) — 通过指定相机位置和目标点来设置视图相机。
- [rsFaceCamera · 面向相机](/commands/rsFaceCamera) — 使选中对象自动面向当前视图相机，类似广告牌效果。
- [rsBatchSnapshotCapture · 批量截图](/commands/rsBatchSnapshotCapture) — 批量对多个命名视图进行截图，输出图片文件。
- [rsBatchViewCapture · 批量视图捕捉](/commands/rsBatchViewCapture) — 批量捕捉当前视图为图片，支持多种分辨率和格式。
- [rsImportCamFromSU · 从 SketchUp 导入相机](/commands/rsImportCamFromSU) — 从 SketchUp 文件中导入相机视角，在 Rhino 中还原 SU 的视图。
- [rsExportCamToSU · 导出相机到 SketchUp](/commands/rsExportCamToSU) — 将 Rhino 当前视图的相机导出到 SketchUp 文件。
- [rsCameraPath · 相机路径](/commands/rsCameraPath) — 创建相机动画路径，用于生成漫游动画。

## 分析（8 条）

### 建筑物理分析

- [rsShadow · 阴影分析](/commands/rsShadow) — 根据地理位置和日期时间进行阴影分析，可视化建筑阴影范围。
- [rsSunlightAnalysisByGrid · 日照平面分析](/commands/rsSunlightAnalysisByGrid) — 在平面上进行日照分析，计算各点的日照时数，以彩色映射可视化。
- [rsSunlightAnalysisByMesh · 三维网格日照分析](/commands/rsSunlightAnalysisByMesh) — 在三维网格上进行日照分析，可视化建筑表面的日照分布。
- [rsSolarFocusRiskSimulation · 泛光聚光分析](/commands/rsSolarFocusRiskSimulation) — 模拟反射面造成的聚光风险，分析光斑分布和强度。
- [rsVisibilityAnalysis · 可见性分析](/commands/rsVisibilityAnalysis) — 从指定视点分析场景中各区域的可见性，以颜色映射可视化。
- [rsViewshedAnalysis · 视野分析](/commands/rsViewshedAnalysis) — 计算指定观察点的视域范围，分析视野开阔度。
- [rsWindAnalysis · 风环境分析](/commands/rsWindAnalysis) — 对建筑周围的风环境进行 CFD 分析，可视化风速和风压分布。
- [rsStructuralAnalysis · 结构力学分析](/commands/rsStructuralAnalysis) — 对结构进行力学分析，可视化和计算受力情况。

## 物理模拟（7 条）

### 找形与松弛

- [rsBubble · 起泡泡](/commands/rsBubble) — 模拟肥皂泡的表面张力找形，生成极小曲面。
- [rsMembrane · 膜结构找形](/commands/rsMembrane) — 对膜结构进行找形分析，生成张力膜曲面。
- [rsMeshRelax · 网格均匀松弛](/commands/rsMeshRelax) — 对网格进行松弛平滑处理，使网格顶点分布更加均匀。
- [rsCirclePacking · 圆形填充](/commands/rsCirclePacking) — 在曲面上进行圆形填充模拟，生成相切圆阵列。

### 动力学

- [rsClothFluttering · 布料风动分析](/commands/rsClothFluttering) — 模拟布料在风中的飘动效果，生成动态布料形态。
- [rsBoids · 类群体运动分析](/commands/rsBoids) — Boids 群体运动模拟，生成鸟群/鱼群式的集体运动轨迹。
- [rsPhysarum · 黏菌模拟](/commands/rsPhysarum) — Physarum 黏菌生长模拟，生成有机的生长路径图案。

## SubD辅助（3 条）

### 编辑工具

- [rsMoveAlongNormal · 沿法线移动](/commands/rsMoveAlongNormal) — 沿法线方向移动 SubD 顶点，适合快速调整曲面形态。
- [rsCopyMayaToRhino · Maya文件复制到Rhino](/commands/rsCopyMayaToRhino) — 从 Maya 文件中复制几何体到 Rhino，支持格式转换。
- [rsSelectSubDEdgeDirection · 选择 SubD 同向边](/commands/rsSelectSubDEdgeDirection) — 点选一条 SubD 控制网边，自动选中同一四边形区域内全部同方向（U 或 V）的边。

## 截面管理（2 条）

### Profile Director

- [rsProfileDirector · Profile Director](/commands/rsProfileDirector) — 打开截面管理器，管理截面轮廓库并沿路径挤出。
- [rsProfileDirectorAddProfile · 添加截面](/commands/rsProfileDirectorAddProfile) — 向 Profile Director 添加新的截面轮廓。

## 辅助工具（20 条）

### 剪贴板

- [rsCopy · 带原点Copy](/commands/rsCopy) — 复制对象时记录原始坐标，跨文件粘贴时保持位置一致。
- [rsPaste · 带原点Paste](/commands/rsPaste) — 粘贴对象时使用原始坐标，与 rsCopy 配合使用。
- [rsPasteExcel · 粘贴 Excel](/commands/rsPasteExcel) — 将 Excel 中的表格数据粘贴到 Rhino，生成文本表格或曲线。

### 块操作

- [rsGroupToBlock · 组转块](/commands/rsGroupToBlock) — 将选中的组转换为块定义，减少文件体积。
- [rsExplodeNestedBlocks · 炸开嵌套块](/commands/rsExplodeNestedBlocks) — 递归炸开所有嵌套的块实例，直至最底层图元。

### 系统工具

- [rsMenu · RSTool菜单](/commands/rsMenu) — 打开 RSTool 悬浮覆盖菜单，提供命令搜索和快速启动面板。
- [rsHotbox · Hotbox 热盒](/commands/rsHotbox) — 呼出径向命令菜单，围绕鼠标位置快速启动常用命令。
- [rsHotboxSettings · Hotbox 热盒设置](/commands/rsHotboxSettings) — 打开热盒设置窗口，配置触发方式、方案与命令布局。
- [RsAutoEnglish · 自动英文命令](/commands/RsAutoEnglish) — 在命令行输入时自动切换为英文输入法，文本输入时恢复原输入法。
- [rsEngCommandSearch · 英文命令搜索](/commands/rsEngCommandSearch) — 搜索 Rhino 英文命令名，快速定位和执行命令。
- [rsToolStart · 工具启动](/commands/rsToolStart) — 启动/初始化 RSTool 工具集。
- [rsToolLocation · 打开插件目录](/commands/rsToolLocation) — 在文件管理器中打开 RSTool 插件安装目录。
- [rsClean · 深度清理](/commands/rsClean) — 打开深度清理对话框，清理文档中的冗余数据（未使用的图层、材质、块定义等）。
- [rsFilterHeavyObjects · 筛选重量级对象](/commands/rsFilterHeavyObjects) — 分析文档中对象复杂度，按权重排序找出最重对象。
- [rsWeChatSend · 自动发送微信消息](/commands/rsWeChatSend) — 定时自动发送微信消息，适合自动化通知场景。
- [RSToolActivateLicense · 激活许可证](/commands/RSToolActivateLicense) — 检查许可证状态，若未激活则打开激活对话框。

### 导入导出

- [rsSuExport · 导出SketchUp](/commands/rsSuExport) — 将选中的 Rhino 对象导出为 SketchUp（.skp）格式文件。
- [rsSendToSU · 发送模型到SketchUp](/commands/rsSendToSU) — 将选中的 Rhino 对象一键发送到正在运行的 SketchUp（实时联动推送），无需导出文件。
- [rsMayaTransferSettings · Rhino-Maya 传输设置](/commands/rsMayaTransferSettings) — 打开 Rhino 与 Maya 之间模型传输的设置窗口。
- [rsSendToMaya · 发送模型到 Maya](/commands/rsSendToMaya) — 将 Rhino 中选定的对象发送到 Maya。

## 动态组件（7 条）

### 创建

- [rsCreateDynamicComponent · 创建动态组件](/commands/rsCreateDynamicComponent) — 将选中的普通几何或已有动态组件创建为参数化动态组件，支持用参数与单向关系驱动节点。

### 面板

- [rsDynamicComponent · 动态组件面板](/commands/rsDynamicComponent) — 打开“动态组件”面板（组件选项 / 组件编辑器），编辑模板、参数、绑定与交互动作。

### 入门

- [rsDynamicComponentGuide · 动态组件入门指南](/commands/rsDynamicComponentGuide) — 打开动态组件入门指南对话框，含快速入门、面板操作、几何工具、公式基础等 8 个标签页。

### 交互

- [rsDynamicComponentInteract · 动态组件交互](/commands/rsDynamicComponentInteract) — 对已选动态组件实例执行定义好的交互动作（如开门/关门、切换款式）。

### 维护

- [rsDynamicComponentSelfTest · 动态组件自检](/commands/rsDynamicComponentSelfTest) — 运行动态组件 Rhino 块结构自检，只读校验运行时结构，不修改文档。
- [rsPurgeDynamicComponentCache · 清理动态组件缓存](/commands/rsPurgeDynamicComponentCache) — 清理未被任何实例引用的动态组件派生块，回收冗余块定义。

### 装配

- [rsDetachDynamicComponent · 分离动态组件](/commands/rsDetachDynamicComponent) — 将选中的动态组件实例分离为普通几何，解除与动态模板的关联。

## GH组件（72 条）

### Animation

- [Counter](/commands/Counter) — 在 Grasshopper 求解或动画过程中生成计数值。
- [EventOperation](/commands/EventOperation) — 处理 Grasshopper 时间轴中的事件与时间区间。
- [GetCamera](/commands/GetCamera) — 读取当前 Rhino 视口的摄像机信息。
- [GetGraphMapperDomain](/commands/GetGraphMapperDomain) — 读取 Graph Mapper 组件的定义域。
- [LockGroupByName](/commands/LockGroupByName) — 根据名称锁定或解锁 Grasshopper 分组中的对象。
- [RandomFlash](/commands/RandomFlash) — 为对象生成随机闪现动画效果。
- [SetCamera](/commands/SetCamera) — 设置当前 Rhino 视口的摄像机位置与方向。

### Architecture

- [ZigzagRamp](/commands/ZigzagRamp) — 根据多重直线或折线路径创建折返坡道。

### Color

- [TweenColor](/commands/TweenColor) — 在两种颜色之间进行线性插值。

### Curve

- [ArcBlend](/commands/ArcBlend) — 使用圆弧在曲线之间创建过渡连接。
- [BrepSmoothEdge](/commands/BrepSmoothEdge) — 筛选 Brep 中平滑连接的边。
- [CurveBooleanRegions](/commands/CurveBooleanRegions) — 根据闭合平面曲线创建布尔区域。
- [CurveRegion](/commands/CurveRegion) — 分析平面曲线并生成封闭区域。
- [CurvesSplitAtIntersections](/commands/CurvesSplitAtIntersections) — 在曲线相交位置拆分多条曲线。
- [DivideCrvByDistanceList](/commands/DivideCrvByDistanceList) — 按照给定的距离列表依次获取曲线上的分点。
- [ExtendCrvOnSrf](/commands/ExtendCrvOnSrf) — 沿曲面将曲线端部延伸至曲面边界。
- [FilletMultipleRadii](/commands/FilletMultipleRadii) — 使用多个半径依次对曲线转角进行圆角处理。
- [FitPolyline](/commands/FitPolyline) — 将多段线中近似平滑的部分拟合为曲线。
- [Helix](/commands/Helix) — 创建螺旋线或弹簧状曲线。
- [Loop Offset Curve On Surface](/commands/loop-offset-curve-on-surface) — 在曲面上连续偏移曲线，每次拟合并延伸至边界后继续下一轮偏移。
- [MinBoundingRec](/commands/MinBoundingRec) — 计算几何对象的最小包围矩形。
- [OffsetCrv](/commands/OffsetCrv) — 在指定平面上偏移曲线。
- [OffsetCrvOnSrfThroughPt](/commands/OffsetCrvOnSrfThroughPt) — 在曲面上偏移曲线，并使结果经过指定点。
- [PolyCrv to Arc](/commands/polycrv-to-arc) — 将多重曲线转换为圆弧或直线段。
- [PolylineMaxDistance](/commands/PolylineMaxDistance) — 查找多段线中距离最远的两个顶点并创建连线。
- [Text curve](/commands/text-curve) — 根据文字内容与字体创建文字轮廓曲线。

### Developer

- [Linked C#](/commands/linked-csharp) — 运行可信的本地 C# 源码，并在文件保存后同步 Grasshopper 输入与输出端。

### Display

- [2dTextToScreen](/commands/2dTextToScreen) — 在 Rhino 视口的屏幕坐标中显示二维文字，适合辅助标注与预览。
- [MaterialPlus](/commands/MaterialPlus) — 创建包含基础颜色与贴图设置的 Rhino 材质。
- [Preview Materials](/commands/preview-materials) — 在 Grasshopper 预览中显示输入材质。
- [TextDisplay](/commands/TextDisplay) — 在 Rhino 视口中显示文字标注。

### Light

- [AddPointLights](/commands/AddPointLights) — 根据输入点批量向 Rhino 文档添加点光源。
- [AddRectangularLights](/commands/AddRectangularLights) — 根据输入几何批量向 Rhino 文档添加矩形灯光。
- [AddSpotLight](/commands/AddSpotLight) — 根据输入位置与方向批量向 Rhino 文档添加聚光灯。

### Math

- [ClosestOddEvenNumber](/commands/ClosestOddEvenNumber) — 查找最接近目标数值的奇数与偶数。
- [Value Quantization](/commands/value-quantization) — 将指定区间内的数值替换为自定义目标列表中的最近值，区间外保持不变。

### Mesh

- [CurveProjectToMesh](/commands/CurveProjectToMesh) — 沿指定方向将曲线投影到网格。
- [MeshEdgeSelect](/commands/MeshEdgeSelect) — 根据相邻网格面的夹角筛选网格边。
- [MeshExplode](/commands/MeshExplode) — 根据角度公差将网格拆分成独立部分。
- [MeshLoft](/commands/MeshLoft) — 通过一组多段线放样生成网格。
- [MeshPipe](/commands/MeshPipe) — 沿曲线生成网格圆管。
- [OffsetMesh](/commands/OffsetMesh) — 沿顶点法线方向偏移网格。
- [SplitMeshWithProjectedPolylines](/commands/SplitMeshWithProjectedPolylines) — 使用投影到网格上的多段线拆分网格。
- [Tween Mesh](/commands/tween-mesh) — 在拓扑兼容的两张网格之间插值对应顶点，生成过渡网格。

### Points

- [PointGroup](/commands/PointGroup) — 根据点之间的距离将点划分为多个组。
- [Sequential Closest Projection](/commands/sequential-closest-projection) — 将起始点依次投影到曲线列表的最近点，并可按固定间隔沿当前曲线切向移动后继续投影。

### SubD

- [CreaseVertex](/commands/CreaseVertex) — 将指定的 SubD 顶点设置为锐角顶点。
- [SubDToBrep](/commands/SubDToBrep) — 将 SubD 对象转换为 NURBS Brep。

### Surface

- [ExtendSrf](/commands/ExtendSrf) — 沿指定方向延伸曲面。
- [OffsetBrep](/commands/OffsetBrep) — 偏移 Brep 或多重曲面并生成实体结果。
- [ShrinkTrimmedSrf](/commands/ShrinkTrimmedSrf) — 将修剪曲面的底层曲面收缩到修剪边界。
- [SplitBrepByCrvs](/commands/SplitBrepByCrvs) — 使用位于表面上的曲线拆分 Brep。
- [Tessellate NURBS](/commands/tessellate-nurbs) — 在 NURBS 单曲面或多重曲面上生成参数化铺装面板。
- [Tween Surface](/commands/tween-surface) — 通过对应采样点插值，在两张曲面之间重建 NURBS 过渡曲面。
- [Unroller](/commands/Unroller) — 展开单曲面或多重曲面，并输出对应的展开几何。

### Text

- [FilterTextAndNumbers](/commands/FilterTextAndNumbers) — 筛选并分离文字内容与数字内容。
- [FontTable](/commands/FontTable) — 读取可用字体列表并区分中文与西文字体。

### TextureMapping

- [ApplyBoxMapping](/commands/ApplyBoxMapping) — 为对象应用盒式纹理映射。
- [ApplyPlanarMapping](/commands/ApplyPlanarMapping) — 为对象应用平面纹理映射。
- [SurfaceMapping](/commands/SurfaceMapping) — 为对象应用曲面纹理映射。

### Util

- [CanvasTransparent](/commands/CanvasTransparent) — 调整 Grasshopper 画布背景的透明显示效果。
- [ChangeGui](/commands/ChangeGui) — 修改 Grasshopper 界面的显示设置。
- [CloseAllGHDocuments](/commands/CloseAllGHDocuments) — 关闭当前 Grasshopper 会话中打开的全部文档。
- [CloseGH](/commands/CloseGH) — 关闭 Grasshopper 窗口。
- [Component Labels](/commands/component-labels) — 在 Grasshopper 组件旁显示浮动名称标签，并支持例外配置。
- [DeletePlaceholder](/commands/DeletePlaceholder) — 删除 Grasshopper 文档中的占位组件。
- [NamedView](/commands/NamedView) — 读取当前 Rhino 文档中的已命名视图。
- [ObjectsExport](/commands/ObjectsExport) — 将指定对象导出为选定的文件格式。
- [RhinoRandomSelect](/commands/RhinoRandomSelect) — 按指定比例随机选择 Rhino 文档对象。
- [RhinoViewCaptureToFile](/commands/RhinoViewCaptureToFile) — 批量捕捉 Rhino 已命名视图并保存到文件。
- [Rich Graph Mapper](/commands/rich-graph-mapper) — 提供可编辑的增强型数值映射曲线。
- [ViewCaptureToFile](/commands/ViewCaptureToFile) — 从 Grasshopper 捕捉当前 Rhino 视口并保存到指定路径。


# rsPlaceObjsOnCrv · 沿曲线摆放对象

> 模块：几何 / 对象变换

[← 返回命令目录](/commands/)

**功能**：将所选物体依据参照点与目标曲线（及可选参照面）的几何关系，放置/对齐到曲线上

**调用**：在 Rhino 命令行输入 `rsPlaceObjsOnCrv`（命令行交互）

**交互流程**：

1. 命令行输入 rsPlaceObjsOnCrv
2. 选择待放置物体（GetMultiple，自动取 boundingbox 下部中心为定位点）
3. 选择目标曲线（Curve，可多选）
4. 选择参照点（Point，可多选）
5. 选择参照面（Brep，可跳过 AcceptNothing）
6. 系统将临近曲线与点的物体按曲线切线平面放置

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：无数值参数，全部为对象选择交互；未选参照面时按曲线切线在 XY 平面投影构造工作平面，选了参照面则用法线与切线叉乘构造平面。

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=114750738471373&bvid=BV1NYKZzBEi1&cid=30714561625&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool一键按曲线放置模型"></iframe>
*RsTool一键按曲线放置模型*

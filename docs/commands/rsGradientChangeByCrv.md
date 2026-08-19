# rsGradientChangeByCrv · 沿曲线渐变变换

> 模块：几何 / 对象变换

[← 返回命令目录](/commands/)

**功能**：以物体包围盒中心到干扰曲线的最近距离为梯度，对物体做由近到远的渐变缩放

**调用**：在 Rhino 命令行输入 `rsGradientChangeByCrv`（命令行交互）

**交互流程**：

1. 命令行输入 rsGradientChangeByCrv
2. 选择待干扰（变动）的物体（GetMultiple）
3. 选择干扰用曲线（Curve，GetObject，可多选）
4. 选取期间用选项设置最小缩放/最大缩放
5. 回车后按物体到曲线的最近距离做线性重映射缩放

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 最小缩放值 | MinimumScale | double | 0.8 | >= 文档绝对公差 | 最近物体对应的缩放比例（lastMinScaleNum 记忆，默认0.8） |
| 最大缩放值 | MaximumScale | double | 1.2 | >= 文档绝对公差 | 最远物体对应的缩放比例（lastMaxScaleNum 记忆，默认1.2） |

**备注**：缩放值通过 Remap(距离, 最小距离, 最大距离, minScale, maxScale) 计算，并按各自包围盒中心缩放。

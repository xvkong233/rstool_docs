# rsSplitCrvAtIntersection · 交点处分割曲线

> 模块：几何 / 曲线

[← 返回命令目录](/commands/)

**功能**：在所选曲线两两交点(及重叠端点)处切分后的多段曲线，替换原曲线；极短段被过滤

**调用**：在 Rhino 命令行输入 `rsSplitCrvAtIntersection`（命令行交互）

**交互流程**：

1. 命令行输入 rsSplitCrvAtIntersection
2. 选择要分割的曲线(可多选)
3. 自动在曲线两两交点处切分并替换原曲线

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：无可调参数；使用 CurveCurve 求交，重叠段以端点作为切点；成功后才删除原曲线。

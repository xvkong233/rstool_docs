# rsLoftCurvesPairs · 成对放样

> 模块：几何 / 曲面

[← 返回命令完全手册](/RsTool命令手册)

**功能**：相邻曲线两两放样生成的曲面(Brep)，每条相邻曲线对生成一个放样

**调用**：在 Rhino 命令行输入 `rsLoftCurvesPairs`（命令行交互）

**交互流程**：

1. 命令行输入 rsLoftCurvesPairs
2. 选择至少两条曲线(按选择顺序)
3. 自动对相邻曲线两两 Loft 放样
4. 生成放样曲面

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：按选择顺序两两 Loft(LoftType.Normal, closed=false)；最少需 2 条曲线；无可调参数。

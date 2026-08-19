# rsFilletNonPlanar · 非共面倒角

> 模块：几何 / 曲线

[← 返回命令目录](/commands/)

**功能**：替换原曲线为末端截断段，并在两曲线末端间生成 G1 连续的非共面圆角曲线(NurbsCurve)，并自动选中

**调用**：在 Rhino 命令行输入 `rsFilletNonPlanar`（命令行交互）

**交互流程**：

1. 命令行输入 rsFilletNonPlanar
2. 输入圆角半径
3. 选择第一条曲线靠近末端的位置
4. 选择第二条曲线靠近末端的位置
5. 自动拟合投影平面并生成非共面 G1 圆角

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 圆角半径 | radius (m_radius) | double | 1.0 | ≥ 模型绝对公差, 最大 double.MaxValue | 静态变量记忆上一次值；GetNumber 下限为 doc.ModelAbsoluteTolerance |

**备注**：自动按拾取点靠近起点/终点翻转曲线；在拟合平面(向该平面做 PlanarProjection)上做圆角后再拉回三维空间并保持 G1 连续。

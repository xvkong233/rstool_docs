# rsFilletNonPlanar · 非共面倒角

> 模块：几何 / 曲线

[← 返回命令目录](/commands/)

**功能**：替换原曲线为末端截断段，并在两曲线末端间生成 G1 连续的非共面圆角曲线(NurbsCurve)，并自动选中

![Rhino Perspective 视口：一条 3D 曲线（U 形/碗状，黑色）在底部带一个尖锐折角，尚未做非平面圆角](../assets/rsFilletNonPlanar/image1.png)
*图 1：倒角前。Rhino Perspective 视口（左上角 Perspective 标签，红绿坐标轴在底部左右）里是一条 3D 空间曲线，整体呈 U 形/碗状下凹，曲线在底部中央有一个尖锐折角（两条线段直接相交），倒角前状态*

![Rhino Perspective 视口：同一条 3D 曲线，但底部尖锐折角已被一段红色圆弧替换为非平面圆角](../assets/rsFilletNonPlanar/image2.png)
*图 2：倒角后。同一条 3D 曲线，底部的尖锐折角已被一段红色 NurbsCurve 圆弧替代（命令执行结果），圆角半径由 rsFilletNonPlanar 半径参数控制；命令的 G1 连续实现是把曲线投影到拟合平面后做圆角、再把圆角段拉回原 3D 空间。倒角段与原曲线两端的连接保持 G1 连续*

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

# rsStructuralAnalysis · 结构力学分析

> 模块：地形 / 分析与模拟

[← 返回命令完全手册](/RsTool命令手册)

**功能**：结构分析结果（变形形状 / 轴力 / 支座反力）网格与曲线，可 Bake 到文档

**调用**：在 Rhino 命令行输入 `rsStructuralAnalysis`（打开设置窗口）

**交互流程**：

1. 弹出结构分析窗体（Eto Forms）
2. 拾取杆件（曲线/直线）
3. 拾取支座（点）
4. 添加荷载（节点力/分布力）
5. 设置材料弹性模量、截面面积与各方向荷载等参数
6. 点击分析，实时显示变形/轴力，最后将结果 Bake 到文档

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 弹性模量 | ElasticModulus | double | 200 | 1 – 1000 (GPa)，增量 1，1 位小数 | 材料刚度 |
| 截面面积 | Area | double | 1000 | 1 – 1000000 (mm²)，增量 50，0 位小数 | 杆件截面面积 |
| X 方向力 | Fx | double | 0 | -1000000 – 1000000 (kN)，2 位小数 | 节点荷载 X 分量 |
| Y 方向力 | Fy | double | 0 | -1000000 – 1000000 (kN)，2 位小数 | 节点荷载 Y 分量 |
| Z 方向力 | Fz | double | -10 | -1000000 – 1000000 (kN)，2 位小数 | 节点荷载 Z 分量（默认向下 -10） |
| 变形放大系数 | DeformationScale | double | 50 | 1 – 100000，增量 10，0 位小数 | 结果变形显示放大倍数 |
| 结果显示模式 | ResultMode | list | Original | Original / DeformedShape / Deformation+AxialForce / AxialForce / Reaction | 原始形状 / 变形形状 / 变形+轴力 / 仅轴力 / 支座反力 |
| 色带方案 | ColorScheme | list |  | StructuralColorSchemes | 由 StructuralColorSchemes 提供的配色方案列表 |

**备注**：采用线弹性小变形梁模型；结果以放大后的几何与顶点色呈现。

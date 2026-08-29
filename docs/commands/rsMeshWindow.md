# rsMeshWindow · 网格工具

> 模块：几何 / 网格

[← 返回命令目录](/commands/)

**功能**：在原网格每个面内生成缩小/内缩的“窗玻璃”拓扑网格，并隐藏原网格

![rsMeshWindow 窗玻璃拓扑示例（窗格线较疏）](../assets/rsMeshWindow/image1.png)
*Rhino 视口：在原网格每个面内生成的“窗玻璃”拓扑网格；每个面内可见内缩/缩放的细窗格结构（内层线框），窗格线细而疏*

![rsMeshWindow 窗玻璃拓扑示例（窗格更密）](../assets/rsMeshWindow/image2.png)
*同一构图的对比示例（窗格明显更密）：在原网格每个面内生成的“窗玻璃”拓扑网格更细密，物体区域每行可见的窗格线数量显著增加，对应 Scale/Distance 参数取更小缩放/内缩值时的效果*

**调用**：在 Rhino 命令行输入 `rsMeshWindow`（命令行交互）

**交互流程**：

1. 选择要生成窗玻璃(Window)的网格
2. 选择生成方式：Scale(按比例缩放) 或 Distance(按距离内缩)
3. 输入参数（缩放比例 或 向内收缩距离）
4. 生成 Window 拓扑网格并隐藏原网格

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 生成方式 | Mode | list | Scale | Scale / Distance | GetOption 选项；Scale=边长按比例缩放，Distance=按绝对距离内缩 |
| 缩放比例 | Scale ratio | double | 0.8 | 0.01–1.0 | 仅 Scale 模式；默认 0.8 表示边长缩为原来的 80% |
| 向内距离 | Inward distance | double | 1 | >=0.001 | 仅 Distance 模式；默认 1.0（模型单位） |

# rsMeshFrame · 网格框架

> 模块：几何 / 网格

[← 返回命令目录](/commands/)

**功能**：在原网格面内生成的图片边框(Picture Frame)拓扑

**调用**：在 Rhino 命令行输入 `rsMeshFrame`（命令行交互）

**交互流程**：

1. 选择网格
2. 选择生成方式：Scale / Distance
3. 输入参数
4. 生成 Picture Frame 边框网格

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 生成方式 | Mode | list | Scale | Scale / Distance |  |
| 缩放比例 | Scale ratio | double | 0.8 | 0.01–0.99 | 仅 Scale 模式 |
| 向内距离 | Inward distance | double | 1 | >=0.001 | 仅 Distance 模式 |

**备注**：与 rsMeshWindow 类似但生成边框而非窗玻璃

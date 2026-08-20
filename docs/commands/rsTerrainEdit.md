# rsTerrainEdit · 编辑地形

> 模块：地形 / 获取与编辑

[← 返回命令目录](/commands/)

**功能**：修改后的地形网格（已挖洞或已挖填整平）

![rsTerrainEdit · CutAndFill 模式挖填整平效果](../assets/rsTerrainEdit/image1.png)
*CutAndFill 模式：椭圆区域按指定角度挖填平整为水平面*

**调用**：在 Rhino 命令行输入 `rsTerrainEdit`（命令行交互）

**交互流程**：

1. 选择要编辑的地形网格（Mesh）
2. 选择一条或多条闭合边界曲线（用于挖洞或挖填）
3. 在命令行选项中切换模式并调整参数，确认后生成新的地形网格

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 处理方式 | Mode | list | Hole | Hole / CutAndFill | Hole=在地形上挖洞；CutAndFill=按角度挖填（场地平整） |
| 挖洞深度 | HoleDepth | double | 0.0 |  | 仅 Hole 模式有效，洞底相对原始地形的下沉深度 |
| 挖填角度 | CutAndFillAngle | double | 45.0 |  | 仅 CutAndFill 模式有效，边坡角度（度） |

**备注**：边界曲线必须为闭合曲线，否则无法正确计算裁剪区域。

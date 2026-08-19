# rsDiagramArrowEdit · 编辑示意箭头

> 模块：视图出图 / 标注出图

[← 返回命令完全手册](/RsTool命令手册)

**功能**：更新后的箭头几何 (重新生成 Brep)，成组

**调用**：在 Rhino 命令行输入 `rsDiagramArrowEdit`（命令行交互）

**交互流程**：

1. 命令行运行 rsDiagramArrowEdit
2. 选择要编辑的箭头对象 (整组)
3. 弹出编辑窗口 (Eto Dialog)
4. 调整参数并点击应用
5. 删除旧对象并按新参数生成箭头

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 宽度 | Width | double | 取自所选对象 UserString (默认 1.0) | 0.001 – 100000 | 窗口 NumericStepper 增量 0.1 |
| 箭头大小乘数 | ArrowScale | double | 取自所选对象 UserString (默认 3.0) | 0.01 – 100.0 | 窗口 NumericStepper 增量 0.5 |
| 线型比例 | LineScale | double | 取自所选对象 UserString (默认 1.0) | 0.01 – 100.0 | 窗口 NumericStepper 增量 0.1 |
| 箭头位置 | Location | list | 取自所选对象 UserString (默认 End) | None/Start/End/Both (无/起点/终点/两端) |  |
| 路径类型 | CurveType | list | 取自所选对象 UserString (默认 Polyline) | Polyline/Smooth (折线/平滑) |  |
| 箭头样式 | ArrowheadStyle | list | 取自所选对象 UserString (默认 Triangle) | Triangle/OpenV (三角形/开放V型) |  |
| 线型 | LineStyle | list | 取自所选对象 UserString (默认 Continue) | Continue/Dash/DashDot/Center (实线/虚线/点划线/中心线) |  |
| 锥状化 | Taper | toggle | 取自所选对象 UserString (默认 false) |  | 仅对平滑路径 (Smooth) 生效 |

**备注**：从所选对象 UserString 读取参数；自动同步移动/缩放变换；应用后替换原对象并保留图层/颜色

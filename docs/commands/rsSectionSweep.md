# rsSectionSweep · 剖面扫掠

> 模块：几何 / 曲面

[← 返回命令目录](/commands/)

**功能**：沿轨迹对断面扫掠生成的曲面(Brep)，带实时橙色线框预览

**调用**：在 Rhino 命令行输入 `rsSectionSweep`（命令行交互）

**交互流程**：

1. 命令行输入 rsSectionSweep
2. 选择轨迹线(可多选)
3. 选择断面线(可多选)
4. 选择断面线参考点
5. 选择扫掠类型(自由扭转 / Top走向 / 对齐曲面)
6. 若对齐曲面则额外选择参考 Brep
7. 在预览中切换镜像 / 旋转90度选项
8. 回车生成曲面

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 扫掠类型 | SweepType | list |  | 0=自由扭转(FreeForm)/1=Top走向(RoadLike)/2=对齐曲面(AlignToBrep) | 由 GetString 选项选择，必须选择其一；类型为 AlignToBrep 时需再选参考 Brep |
| 镜像 | Mirror | toggle | false |  | 镜像断面(确认阶段的 OptionToggle) |
| 旋转90度 | Rotate90 | toggle | false |  | 确认阶段点击选项，每次 +90° 循环(0/90/180/270)，通过 RotationCount 控制 |

**备注**：扫掠类型必须选择；旋转为每次点击累加 90° 的循环选项；对齐曲面模式需要额外选择参考 Brep。

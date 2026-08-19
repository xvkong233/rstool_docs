# rsQuickNest · 快速排料

> 模块：视图出图 / 标注出图

[← 返回命令完全手册](/RsTool命令手册)

**功能**：排料结果：零件 Brep/曲线置于板材、板材边框曲线、编号标签曲线 (图层 rsQuickNest_Sheets / rsQuickNest_Labels)

**调用**：在 Rhino 命令行输入 `rsQuickNest`（命令行交互）

**交互流程**：

1. 命令行运行 rsQuickNest
2. 弹窗后点击“选择物体”拾取平面对象/群组
3. 设置板材尺寸/间距/排序等参数
4. 点击“计算/更新预览”
5. 点击“确认生成”烘焙排料结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 板材宽度 | Width | double | 2440 (毫米换算到模型单位) | min=单位换算值, max=100000 | 默认 2440mm；按文档单位缩放 |
| 板材高度 | Height | double | 1220 (毫米换算到模型单位) | min=单位换算值, max=100000 | 默认 1220mm；按文档单位缩放 |
| 零件间距 | Gap | double | 10 (毫米换算到模型单位) | 0 – 100000 | 默认 10mm |
| 板材间距 | SheetGap | double | 100 (毫米换算到模型单位) | 0 – 100000 | 默认 100mm |
| 编号最大高度 | LabelHeight | double | 50 (毫米换算到模型单位) | min=单位换算值, max=100000 | 默认 50mm |
| 排序依据 | SortMode | list | Area (面积) | Area/X/Y/Z/PickOrder (面积/X/Y/Z/选择顺序) |  |
| 降序排序 | SortDescending | toggle | true |  |  |
| 允许旋转 | AllowRotate | toggle | true |  |  |
| 旋转角度步长 | RotationStepDegrees | double | 15.0 | 1.0 – 90.0 | NumericStepper 整数增量 1 |
| 绘制板材边框 | DrawSheet | toggle | true |  |  |

**备注**：基于 OpenNest (Clipper2)；输入需为闭合平面曲线/平面 Brep/Surface/平面 Mesh 或共面群组；输出估算利用率

# rsRepairOpenCurves · 修复开放曲线

> 模块：几何 / 曲线

[← 返回命令完全手册](/RsTool命令手册)

**功能**：修复(闭合或连接)后的曲线，保留首个所选对象的图层与颜色；统计选中/生成/闭合数量

**调用**：在 Rhino 命令行输入 `rsRepairOpenCurves`（命令行交互）

**交互流程**：

1. 命令行输入 rsRepairOpenCurves
2. 选择需要修复/闭合的开放曲线
3. 设置修复阈值(或回车使用默认)
4. 生成修复/闭合后的曲线并删除原曲线

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 修复阈值 | Threshold | double | 模型绝对公差(>=ZeroTolerance) | >0 (下限 ZeroTolerance, 上限 double.MaxValue) | 连接/闭合开放曲线的距离容差；默认 max(ModelAbsoluteTolerance, ZeroTolerance) |

**备注**：先删除原曲线再写入修复结果；闭合曲线计为 closed。

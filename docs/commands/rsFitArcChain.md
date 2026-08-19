# rsFitArcChain · 相切圆弧拟合

> 模块：几何 / 曲线

[← 返回命令目录](/commands/)

**功能**：用相切(同向 G1 连续)圆弧/直线链拟合出的曲线，原曲线保留，新增拟合曲线

**调用**：在 Rhino 命令行输入 `rsFitArcChain`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsFitArcChain
2. 选择要拟合的曲线(可多选)
3. 在 Eto 窗口选择拟合模式
4. 设置段数 / 段长范围 / 最大偏差参数
5. 点击"更新预览"查看实时预览(误差绿-黄-红着色)
6. 点击"生成"写出相切圆弧链

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 拟合模式 | Mode | list | 指定段数(By segment count) | 指定段数/指定段长范围/指定最大偏差 | 0=BySegmentCount,1=ByLengthRange,2=ByMaximumDeviation |
| 每条曲线段数 | SegmentCount | integer | 6 | 2-64 (闭合曲线下界为 3) | 仅"指定段数"模式生效；常量 DefaultSegmentCount=6 |
| 最短段长 | MinimumSegmentLength | double | max(模型绝对公差*10, 平均长度/20) | 0.000001-1000000000.0 | 仅"指定段长范围"模式生效；默认由所选曲线平均长度估算 |
| 最长段长 | MaximumSegmentLength | double | max(最短段长, 平均长度/6) | 0.000001-1000000000.0 | 仅"指定段长范围"模式生效；默认由平均长度估算 |
| 目标最大偏差 | TargetMaximumDeviation | double | max(模型绝对公差*5, 平均长度/100) | 0.000001-1000000000.0 | 仅"指定最大偏差"模式生效；默认由平均长度估算 |

**备注**：段长相关默认值随所选曲线平均长度动态计算并受文档绝对公差约束；长度相关 NumericStepper 精度 4 位小数。

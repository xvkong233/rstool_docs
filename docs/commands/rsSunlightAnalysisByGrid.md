# rsSunlightAnalysisByGrid · 日照平面分析

> 模块：分析 / 建筑物理分析

[← 返回命令目录](/commands/)

**功能**：各网格点的日照时数（文字标注或顶点着色网格 + 图例）

**调用**：在 Rhino 命令行输入 `rsSunlightAnalysisByGrid`（打开设置窗口）

**交互流程**：

1. 确保文档 Sun 已启用（未启用则自动启用）
2. 选择遮挡物/建筑（Brep / Mesh，可多选）
3. 选择分析范围（一条闭合矩形曲线/多段线）
4. 在 Eto 对话框中设置网格尺寸、起止小时、步长、输出方式与配色
5. 确认后按网格逐点计算日照时数，输出文字标注或着色网格

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 网格尺寸 | gridSize | double | min(范围宽,范围高)/20 | >0（按模型单位） | 分析网格单元边长；首次默认取范围短边的 1/20，之后沿用上次值 _lastGridSize |
| 起始小时 | startHour | integer | 8 | 0 – 23 | 日照分析开始时刻 |
| 结束小时 | endHour | integer | 16 | 0 – 23，且 ≥ 起始小时 | 日照分析结束时刻 |
| 时间步长 | stepMinutes | integer | 30 | 1 – 120 | 采样间隔（分钟）；静态默认 _lastStepMinutes=30 |
| 输出方式 | output | list | Text | Text / Mesh | Text=在各网格点输出日照时数文字标注；Mesh=输出着色网格 |
| 结果平滑 | smoothingIterations | list | Light | NoSmooth=0 / Light=1 / Medium=3 | 仅 Mesh 输出时生效 |
| 渐变颜色 | colorScheme | list | 0 | SunlightColorSchemes 方案列表 | 共享日照配色方案，默认取索引 0 |

**备注**：依赖文档 Sun 的纬度/经度/日期；分析范围必须是闭合矩形曲线。

# rsSunlightAnalysisByMesh · 三维网格日照分析

> 模块：分析 / 建筑物理分析

[← 返回命令完全手册](/RsTool命令手册)

**功能**：带有日照时数顶点色与分析网格 + 图例

**调用**：在 Rhino 命令行输入 `rsSunlightAnalysisByMesh`（命令行交互）

**交互流程**：

1. 确保文档 Sun 已启用
2. 选择分析网格（Mesh，命令行拾取）
3. 选择遮挡物（可选，Mesh / Brep，命令行拾取）
4. 弹出 Eto 对话框设置起止小时、步长、平滑与配色
5. 确认后逐面/逐顶点计算日照时数并写入顶点色，附图例

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 起始小时 | StartHour | integer | 8 | 0 – 23 | 日照分析开始时刻 |
| 结束小时 | EndHour | integer | 16 | 0 – 23，且 ≥ 起始小时 | 日照分析结束时刻 |
| 时间步长 | StepMinutes | integer | 30 | 1 – 120 | 采样间隔（分钟）；静态默认 _lastStepMinutes=30 |
| 结果平滑 | SmoothingIterations | list | Light | NoSmooth=0 / Light=1 / Medium=3 | 网格顶点色平滑强度 |
| 渐变颜色 | ColorSchemeIndex | list | 0 | SunlightColorSchemes 方案列表 | 共享日照配色方案，默认取索引 0 |

**备注**：依赖文档 Sun 的日期与经纬度；遮挡物可选。

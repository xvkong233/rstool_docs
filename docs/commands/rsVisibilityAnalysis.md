# rsVisibilityAnalysis · 可见性分析

> 模块：分析 / 建筑物理分析

[← 返回命令目录](/commands/)

**功能**：可见性百分比顶点着色网格 + 图例

**调用**：在 Rhino 命令行输入 `rsVisibilityAnalysis`（打开设置窗口）

**交互流程**：

1. 弹出 Eto 对话框（VisibilityAnalysisSettingsDialog）
2. 选择分析模式（观察面 / 被观察建筑）
3. 根据模式分别拾取观察面网格与被观察目标网格
4. 设置最大距离、平滑、配色与背向过滤选项
5. 确认后计算可见性百分比并写入顶点色，附图例

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 分析模式 | Mode | list | ObserverSurface | ObserverSurface / TargetBuilding | 观察面模式=分析哪些观察点能看到目标；被观察建筑模式=分析建筑哪些点被看到 |
| 最大距离 | MaxDistance | double | 0 | 0 – 100000000（模型单位），0 表示不限 | 超过该距离的视线被忽略；0=无限制 |
| 结果平滑 | SmoothingIterations | list | Light | NoSmooth=0 / Light=1 / Medium=3 | 可见性结果平滑强度；默认 1 |
| 结果色带 | ColorSchemeIndex | list | 5 | SunlightColorSchemes 方案列表 | 默认取索引 5 |
| 忽略观察面背向点 | FilterObserverBackfaces | toggle | true |  | 观察面模式下是否跳过背向点 |
| 只统计朝向观察面的目标点 | FilterTargetBackfaces | toggle | true |  | 被观察建筑模式下是否仅统计法线朝向观察者的点 |

**备注**：通过射线-网格遮挡判定可见性；最大距离 0 表示不限制。

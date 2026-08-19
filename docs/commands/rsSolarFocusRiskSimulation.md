# rsSolarFocusRiskSimulation · 泛光聚光分析

> 模块：分析 / 建筑物理分析

[← 返回命令目录](/commands/)

**功能**：反映聚光热风险或炫光时间的顶点着色网格 + 图例

**调用**：在 Rhino 命令行输入 `rsSolarFocusRiskSimulation`（打开设置窗口）

**交互流程**：

1. 选择分析对象（建筑/曲面 Mesh 或 Brep）
2. 在 Eto 对话框中设置输出类型、步长、站点海拔、大气清晰度与平滑
3. 确认后按一天内太阳轨迹逐时刻追踪反射，累积热量密度或炫光时间
4. 生成着色网格与图例

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 输出类型 | OutputMode | list | HeatDensity | HeatDensity / ReflectionTime | 累计热量密度 / 炫光（反射）时间 |
| 时间步长 | StepMinutes | integer | 10 | 1 – 120 | 太阳轨迹采样间隔（分钟）；静态默认 _lastStepMinutes=10 |
| 站点海拔 | SiteAltitudeMeters | double | 0 | -500 – 9000 (米)，增量 10 | 用于大气衰减计算 |
| 大气清晰度 | AtmosphericClearness | double | 1.0 | 0.5 – 1.5，增量 0.05 | 预设：普通城市 0.90 / 晴朗郊野 1.05 / 高原晴空 1.20；可自定义 |
| 结果平滑 | SmoothingIterations | list | Light | NoSmooth=0 / Light=1 / Medium=3 | 网格结果平滑强度 |
| 渐变颜色 | ColorSchemeIndex | list | 5 | SunlightColorSchemes 方案列表 | 共享日照配色方案，默认取索引 5 |

**备注**：依赖文档 Sun 与日期；逐时刻追踪镜面反射累积结果。

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116673625529139&bvid=BV1FwVd64Err&cid=38766511757&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 泛光聚光分析（Solar Focus Risk Simulation）演示教学（B 站）"></iframe>
*RsTool · 泛光聚光分析（Solar Focus Risk Simulation）演示教学（B 站）*

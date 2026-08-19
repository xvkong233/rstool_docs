# rsWindAnalysis · 风环境分析

> 模块：分析 / 建筑物理分析

[← 返回命令完全手册](/RsTool命令手册)

**功能**：风速大小顶点着色网格 + 图例（概念二维）；或后台 CFD 计算结果（工程模式）

**调用**：在 Rhino 命令行输入 `rsWindAnalysis`（命令行交互）

**交互流程**：

1. 选择模拟模式（概念二维 / 工程 CFD）
2. 概念二维：选择障碍网格 → 输入风向（度） → 输入入口风速(m/s) → 选择矩形边界（闭合曲线） → 输入分析网格尺寸 → 选择平滑 → 选择尾流响应 → 运行 LBM（固定 600 步）
3. 工程 CFD：选择障碍网格 → 选择 CFD 边界 → 设置风向/参考风速/地表粗糙度/质量/网格尺寸/体素尺寸/迭代次数 → 后台计算
4. 生成风速着色网格与图例（或后台 CFD 任务结果）

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 模拟模式 | simulationMode | list | Concept2D | Concept2D / EngineeringCFD | 概念二维为快速 LBM 近似；工程 CFD 为后台高质量求解 |
| 风向角度 | windDirectionDegrees | double | _lastWindDirectionDegrees | 角度（度） | 来流方向，沿用上次值 |
| 入口风速 | inletWindSpeed | double | _lastWindSpeedMetersPerSecond | >0 (m/s) | 概念二维入口风速 |
| 分析网格尺寸 | targetGridSize | double | min(边界宽,边界高)/50 | >0（模型单位） | 概念二维网格单元尺寸 |
| 结果平滑 | smoothingIterations | list | Light | NoSmooth=0 / Light=1 / Medium=3 | 风速场平滑强度 |
| 尾流响应 | wakeResponseMode | list | Balanced | Stable / Balanced / TurbulentVisual | 尾流可视化风格 |
| 参考风速 | referenceSpeed | double |  | >0 (m/s) | 工程 CFD 模式使用的参考风速 |
| 地表粗糙度 | roughnessPreset | list |  | Open / Suburban / Urban / DenseUrban | 工程 CFD 地表粗糙度预设 |
| 质量模式 | qualityMode | list |  | Preview / Balanced / Fine | 工程 CFD 网格质量，决定默认网格尺寸与迭代次数 |
| CFD 网格尺寸 | analysisGridSize | double | 按质量模式默认 | >0 | 工程 CFD 平面网格尺寸 |
| 体素尺寸 | targetVoxelSize | double |  | >0 | 工程 CFD 体素（三维）尺寸 |
| 迭代次数 | iterations | integer | 按质量模式默认 | ≥1 | 工程 CFD 求解迭代步数 |

**备注**：概念二维模式 LBM 固定迭代 600 步；工程 CFD 在后台运行。

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=115973713567504&bvid=BV1mHzXBxEE6&cid=35672950510&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 风环境分析（Wind Analysis）演示教学（B 站）"></iframe>
*RsTool · 风环境分析（Wind Analysis）演示教学（B 站）*

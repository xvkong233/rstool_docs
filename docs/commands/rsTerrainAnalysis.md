# rsTerrainAnalysis · 地形分析

> 模块：地形 / 分析与模拟

[← 返回命令目录](/commands/)

**功能**：按所选分析类型着色并附带数值图例的地形网格

**调用**：在 Rhino 命令行输入 `rsTerrainAnalysis`（打开设置窗口）

**交互流程**：

1. 选择要分析的地形对象（网格或曲面 Brep）
2. 若选择的是曲面，输入 Brep 转网格的精度参考值
3. 在 Eto 对话框中选择分析类型、渐变颜色与半球朝向，实时预览
4. 确认后生成着色网格并附带图例

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 转网格精度 | meshPrecision | double | 1.0 | >0（按模型单位缩放） | 仅当输入为 Brep/曲面时提示输入；静态默认 _lastMeshPrecision=1.0 |
| 分析类型 | AnalysisType | list | Elevation | Elevation / Aspect / Slope / Concavity / Roughness / PondingRisk / Buildability / TerrainCurvature / FlowAccumulation / ErosionRisk / BuildingOrientation | 中文标签：高程/坡向/坡度/凹凸/粗糙度/积水风险/适建性/地形曲率/汇流量/侵蚀风险/建筑朝向适宜性 |
| 渐变颜色 | ColorScheme | list | RedYellowGreen | RedYellowGreen / GreenGradient / OrangeYellowBlue / Grayscale / CustomGradient | 自定义渐变可设置起止颜色 |
| 半球朝向 | Hemisphere | list | 0 | 0 / 1 / 2 | 用于坡向/日照相关分析时指定参考半球（北/南/东等） |

**备注**：分析结果以顶点色形式写入新网格，并自动生成图例。

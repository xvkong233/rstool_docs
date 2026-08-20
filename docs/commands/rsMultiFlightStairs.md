# rsMultiFlightStairs · 多跑楼梯

> 模块：建筑 / 楼梯与坡道

[← 返回命令目录](/commands/)

**功能**：沿路径生成多跑楼梯（含休息平台、梯板与扶手，支持翻转）

![多跑楼梯示意图](../assets/rsMultiFlightStairs/image1.png)
*沿转折路径点拾取后生成多跑楼梯，自动设置休息平台与梯板，支持整体翻转与左右翻转*

**调用**：在 Rhino 命令行输入 `rsMultiFlightStairs`（打开设置窗口）

**交互流程**：

1. 拾取路径点（定义多跑楼梯走向）
2. 在对话框中设置层高 / 步高 / 梯段宽度 / 梯板厚度 / 扶手高度 / 翻转
3. 实时预览并生成多跑楼梯（含休息平台与扶手）

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 层高 | FloorHeight | double | 3.0 | 0.01~10000 | 步进 0.1，单位：米 |
| 步高 | StepHeight | double | 0.15 | 0.01~1000 | 步进 0.01，单位：米 |
| 梯段宽度 | FlightWidth | double | 1.2 | 0.01~10000 | 步进 0.1，单位：米 |
| 梯板厚度 | SlabThickness | double | 0.15 | 0.001~1000 | 步进 0.01，单位：米 |
| 扶手高度 | HandrailHeight | double | 0.9 | 0~1000 | 步进 0.1，单位：米 |
| 翻转 | IsFlip | bool | false | true\|false | 整体翻转 |
| 侧翻转 | IsSideFlip | bool | false | true\|false | 侧向翻转 |

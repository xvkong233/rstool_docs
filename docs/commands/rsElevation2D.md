# rsElevation2D · 建筑标高

> 模块：二维建筑 / 其他二维

[← 返回命令目录](/commands/)

**功能**：建筑立面标高详图（楼层标高线、室外地坪线、标高文字、层高/总高尺寸标注）

**调用**：在 Rhino 命令行输入 `rsElevation2D`（命令行交互）

**交互流程**：

1. 命令行输入 rsElevation2D
2. 弹出建筑立面标高窗口
3. 设置室外地坪标高、楼层分组（各层高度 HeightMeters 与层数 Count，可含地下室分组）
4. 点击生成后在视口指定基点
5. 生成楼层标高线、标高文字与层高/总高标注

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 室外地坪标高 | OutdoorGroundElevationMeters | double | -0.15 |  | 单位：米，默认 -0.15m |
| 楼层分组（层高） | FloorGroups.HeightMeters | double |  | >0 | 每组楼层高度，默认由默认设置决定（BuildingElevationSettings 默认一组） |
| 楼层分组（层数） | FloorGroups.Count | integer |  | ≥1 | 该组楼层重复层数 |
| 地下室分组（层高） | BasementGroups.HeightMeters | double |  | >0 | 地下室每层高度 |
| 地下室分组（层数） | BasementGroups.Count | integer |  | ≥1 | 地下室层数 |

**备注**：主交互为窗口；生成后需在视口点取基点放置；层级与功能可分组配置

# rsRandomChange · 随机变换

> 模块：几何 / 对象变换

[← 返回命令目录](/commands/)

**功能**：对所选每个物体施加随机旋转角度与随机缩放比例（就地修改，保留历史）

**调用**：在 Rhino 命令行输入 `rsRandomChange`（命令行交互）

**交互流程**：

1. 命令行输入 rsRandomChange
2. 选择待随机修改的物体（GetMultiple，可多选）
3. 选取期间用选项设置角度范围、最小缩放、最大缩放
4. 回车后对每个物体施加随机旋转与随机缩放

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 角度范围 | AngleRange | double | 180 | >=0 | 随机旋转角度上限（度），实际旋转 = PI*(angle/180)*rand（lastAngleRangeNum 记忆，默认180） |
| 最小缩放值 | MinimumScale | double | 0.8 | >=0.01 | 随机缩放比例下限（lastMinScaleNum 记忆） |
| 最大缩放值 | MaximumScale | double | 1.2 | >=0.01 | 随机缩放比例上限（lastMaxScaleNum 记忆） |

**备注**：随机旋转基于各物体包围盒下部中心；缩放保留两位小数。

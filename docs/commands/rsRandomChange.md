# rsRandomChange · 随机变换

> 模块：几何 / 对象变换

[← 返回命令目录](/commands/)

**功能**：对所选每个物体施加随机旋转角度与随机缩放比例（就地修改，保留历史）

![Rhino Perspective 视口：一整片规则立方体方块阵列（约 13×10 个白色小方块等距排列、大小一致），rsRandomChange 操作前的原始状态](../assets/rsRandomChange/image1.png)
*图 1：rsRandomChange 操作前。Rhino Perspective 视口（左上角 Perspective 标签，左下/右下角红绿坐标轴）中是一整片排列整齐的立方体方块阵列：约 13 列 ×10 行共 130 个白色小方块，沿地面网格等距排列，每块大小一致、姿态统一（棱线对齐 XYZ 轴），无任何随机扰动——这是 rsRandomChange 命令的输入参照状态*

![Rhino Perspective 视口：同一方块阵列，每个方块大小不一、姿态各异、位置略有错动，rsRandomChange 操作后的随机旋转+随机缩放效果](../assets/rsRandomChange/image2.png)
*图 2：rsRandomChange 操作后。同一片约 130 个立方体方块阵列，每个方块都被施加了独立的随机旋转角度（基于各物体包围盒下部中心，原地转动）与随机缩放比例（默认 0.8-1.2 之间，保留两位小数）：方块整体大小不一、姿态各异、顶面朝向也各方向不同，部分方块互相错位显得更紧密、部分更稀疏，原本规则呆板的方块阵列被打破，呈现出有机的随机感；就地对每个物体修改并保留历史记录*

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

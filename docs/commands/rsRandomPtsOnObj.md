# rsRandomPtsOnObj · 物体上随机生成点

> 模块：几何 / 点

[← 返回命令目录](/commands/)

**功能**：在所选物体（曲线按长度、面/网格按面积加权）上生成指定数量的随机点

**调用**：在 Rhino 命令行输入 `rsRandomPtsOnObj`（命令行交互）

**交互流程**：

1. 命令行输入 rsRandomPtsOnObj
2. 选择目标物体（Curve/Surface/Brep/Mesh/SubD，可多选）
3. 选取期间用选项切换分布模式（完全随机 / 尽量均匀）
4. 输入随机点数量（GetInteger，下限1，默认100）
5. 按曲线长度/网格面积加权在物体表面生成随机点并写入文档

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 分布模式 | DistributionMode | toggle | 尽量均匀(EvenRandom) | 完全随机(TrueRandom) / 尽量均匀(EvenRandom) | 切换随机采样策略；尽量均匀采用候选点法拉开间距 |
| 随机点数量 | Count | integer | 100 | >=1 | 生成随机点数量（lastRandomPtNum 记忆，默认100，SetLowerLimit(1)） |

**备注**：该命令未重写 OnHelp，无帮助文档链接；曲线与网格混合时按长度/面积比例分配点数。

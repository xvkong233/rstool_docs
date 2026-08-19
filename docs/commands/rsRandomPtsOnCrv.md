# rsRandomPtsOnCrv · 曲线上随机点

> 模块：几何 / 点

[← 返回命令目录](/commands/)

**功能**：在所选曲线上生成指定数量、按指定分布模式的随机点（去除过近点）

**调用**：在 Rhino 命令行输入 `rsRandomPtsOnCrv`（命令行交互）

**交互流程**：

1. 命令行输入 rsRandomPtsOnCrv
2. 选择目标曲线（Curve，GetObject，可多选）
3. 选取期间用选项切换分布模式（完全随机 / 尽量均匀）
4. 输入随机点数量（GetInteger，默认100）
5. 设置删除接近点的公差（GetNumber，默认0.5）
6. 在曲线上生成随机点并去除过近点后写入文档

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 分布模式 | DistributionMode | toggle | 尽量均匀(EvenRandom) | 完全随机(TrueRandom) / 尽量均匀(EvenRandom) | 切换随机采样策略；尽量均匀采用候选点法（Poisson 式）拉开间距 |
| 随机点数量 | Count | integer | 100 | >=1 | 生成随机点数量（lastRandomPtNum 记忆，默认100） |
| 接近点公差 | RemoveTolerance | double | 0.5 |  | 去除距离小于该值重复点的公差（lastDelTolNum 记忆，默认0.5） |

**备注**：无显式下限约束；多曲线按长度加权分配采样。

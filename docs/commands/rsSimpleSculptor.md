# rsSimpleSculptor · 快速雕刻工具

> 模块：几何 / 网格

[← 返回命令目录](/commands/)

**功能**：原地雕刻后的网格（顶点位移）；取消则恢复原网格

**调用**：在 Rhino 命令行输入 `rsSimpleSculptor`（命令行交互）

**交互流程**：

1. 选择要雕刻的网格
2. 打开雕刻面板并激活 GetPoint
3. 按住左键在网格上拖动雕刻（隆起/下降/整平）
4. 在面板调整笔刷半径/强度/硬度/曲线/镜像等
5. 回车或“完成”结束写入，或“取消”恢复原网格

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 笔刷模式 | Mode | list | 隆起 (Raise) | 隆起(Raise) / 下降(Lower) / 整平(Flatten) | 面板按钮切换 |
| 笔刷半径 | Brush radius | double | 1 | 0.001–100000.0 | 实际值按米→模型单位缩放 (_lastBrushRadius*unitScale) |
| 位移量 | Amount | double | 0.1 | 0.0–100000.0 | 整平(Flatten)模式下禁用；按单位缩放 |
| 强度 | Strength | double | 0.55 | 0.0–1.0 |  |
| 硬度 | Hardness | double | 0.35 | 0.0–1.0 |  |
| 曲线形式 | Profile | list | 圆润 (Smooth) | 圆润(Smooth) / 线性(Linear) / 尖峰(Sharp) / 宽缓(Broad) / 拱形(Dome) / 阶梯(Terrace) | 枚举值 1–6 |
| 固定边界 | Preserve boundary | toggle | true |  |  |
| 镜像笔刷 | Mirror brush | toggle | false |  |  |
| 镜像轴 | Mirror axis | list | X | X / Y / Z | 面板按钮切换 |
| 镜像平面位置 | Mirror plane offset | double | 0 | -100000.0–100000.0 | 按单位缩放 |
| 黑白贴图 | Alpha map | text |  | png/jpg/jpeg/bmp/tif/tiff | 可选载入黑白笔刷贴图 |

**备注**：Ctrl+Z 撤销上一笔；支持镜像对称雕刻；整平模式移除曲率不漂移顶点

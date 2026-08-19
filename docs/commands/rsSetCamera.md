# rsSetCamera · 设置相机

> 模块：视图出图 / 视图相机

[← 返回命令完全手册](/RsTool命令手册)

**功能**：设置当前视图的摄像机 (透视或两点透视投影)

**调用**：在 Rhino 命令行输入 `rsSetCamera`（命令行交互）

**交互流程**：

1. 命令行运行 rsSetCamera
2. 选择投影类型 (Perspective / TwoPointPerspective)
3. 选取相机位置所在曲面/Brep/网格/SubD
4. 在其上拾取相机位置点
5. 拾取目标点并生成摄像机视图

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 投影类型 | ProjectionMode | list | Perspective (透视) | Perspective/TwoPointPerspective (透视/两点透视) | 通过 AddOption 切换；记忆上次 (_lastProjectionMode) |

**备注**：相机位置点沿法线自动抬高 1.7 米(模型单位)；镜头焦距固定 30mm；两点透视要求相机与目标在水平面上有距离

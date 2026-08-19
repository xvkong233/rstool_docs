# rsMoveAlongNormal · SubD沿法线移动

> 模块：SubD辅助 / 编辑工具

[← 返回命令完全手册](/RsTool命令手册)

**功能**：沿各自法线方向移动指定距离后的 SubD / Mesh 控制点(原地 GripUpdate 更新)

**调用**：在 Rhino 命令行输入 `rsMoveAlongNormal`（命令行交互）

**交互流程**：

1. 命令行输入 rsMoveAlongNormal
2. 选取 SubD 或 Mesh 的控制点(Grips)
3. 自动计算各控制点法线方向
4. 拖动鼠标或输入数值设置沿法线移动距离
5. 提交更新控制点

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 移动距离 | Distance (finalDist) | double | 0.0 (交互输入) | 模型单位(可拖动或输入数值) | 沿各自控制点法线方向移动的距离；GetPoint 约束在法线直线上并 AcceptNumber |

**备注**：法线由控制网网格计算；SubD 通过控制网等价 Mesh 求最接近顶点法线(容差 0.01 匹配)，兼容角点与硬边 Crease。

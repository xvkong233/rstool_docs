# rsAutoBoxMapping · 自动盒映射

> 模块：组织与选择 / 材质辅助

[← 返回命令目录](/commands/)

**功能**：为所选物体（曲面/多重曲面/挤出体/网格）生成并应用 Box 贴图映射（含本地 XYZ 预览轴）

**调用**：在 Rhino 命令行输入 `rsAutoBoxMapping`（命令行交互）

**交互流程**：

1. 命令行输入 rsAutoBoxMapping
2. 选择要赋予 Box 贴图轴的物体
3. 在命令行设置尺寸/旋转X,Y,Z/随机位移（带实时预览）
4. 回车确认应用 Box 贴图

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 尺寸 | Size | double | 1.0×单位换算(米) 或上次值 | >0（实际取 \|size\|，最小约 0.001） | OptionDouble；AcceptNumber 可直接输入；记忆 _lastInputSize |
| 旋转X | RotateX | double | 0 | 角度（度） |  |
| 旋转Y | RotateY | double | 0 | 角度（度） |  |
| 旋转Z | RotateZ | double | 0 | 角度（度） |  |
| 随机位移 | RandomOffset | double | 0 | >=0 | 每个轴按 0~1 随机系数×该范围偏移贴图原点 |

**备注**：贴图平面由几何智能对齐；参数带实时预览；取消时还原初始贴图

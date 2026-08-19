# ApplyPlanarMapping

> 模块：GH组件 / TextureMapping

[← 返回命令完全手册](/RsTool命令手册)

![图标](../assets/gh-icons/PlanarMapping_24.png)

**功能**：为对象应用平面纹理映射。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「TextureMapping」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 待赋予贴图的Mesh物件 | Mesh | 网格 |  | 单值 |  |
| 贴图用平面矩形 | Rec | 矩形 |  | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

输出参数：
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| MappedMesh | 网格 | 赋予平面贴图轴后的mesh |

所属 GH 分组：RSTool / TextureMapping

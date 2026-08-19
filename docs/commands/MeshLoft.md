# MeshLoft

> 模块：GH组件 / Mesh

[← 返回命令目录](/commands/)

![图标](../assets/gh-icons/MeshLoft_24.png)

**功能**：通过一组多段线放样生成网格。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Mesh」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| Polyline sections to loft | Polylines | 曲线 |  | 列表 |  |
| Connect the last section back to the first | Close | 布尔 | 否 | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

输出参数：
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| Mesh | 网格 | Lofted mesh |

所属 GH 分组：RSTool / Mesh

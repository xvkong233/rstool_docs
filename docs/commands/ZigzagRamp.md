# ZigzagRamp

> 模块：GH组件 / Architecture

[← 返回命令目录](/commands/)

![图标](../assets/gh-icons/ZigzagRamp_24.png)

**功能**：根据多重直线或折线路径创建折返坡道。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Architecture」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| Polyline | Polyline | 曲线 |  | 单值 |  |
| RampWidth | RampWidth | 数值 | 2.0 | 单值 |  |
| RailHeight | RailHeight | 数值 | 1.1 | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

输出参数：
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| Ramp | 多重曲面 | Ramp |
| Rail | 多重曲面 | Rail |

所属 GH 分组：RSTool / Architecture

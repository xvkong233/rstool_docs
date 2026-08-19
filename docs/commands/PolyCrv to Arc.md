# PolyCrv to Arc

> 模块：GH组件 / Curve

[← 返回命令完全手册](/RsTool命令手册)

![图标](../assets/gh-icons/PolyCrvtoArc_24.png)

**功能**：将多重曲线转换为圆弧或直线段。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Curve」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 多重曲线 | PolyCrv | 曲线 |  | 单值 |  |
| 公差 | Tolerance | 数值 |  | 单值 |  |
| 角度公差 | AngleTolerance | 数值 | 1 | 单值 |  |
| 最小长度 | MinimumLength | 数值 | 0 | 单值 |  |
| 最大长度 | MaximumLength | 数值 | 0 | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

输出参数：
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| PolyCrv | 曲线 | 圆弧拟合后曲线 |

所属 GH 分组：RSTool / Curve

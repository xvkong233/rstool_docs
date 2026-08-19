# CurveBooleanRegions

> 模块：GH组件 / Curve

[← 返回命令完全手册](/RsTool命令手册)

![图标](../assets/gh-icons/CurveBooleanRegion_24.png)

**功能**：根据闭合平面曲线创建布尔区域。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Curve」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| Closed planar curves to compute regions from | Curves | 曲线 |  | 列表 |  |
| Origin of the projection plane | Reference Point | 点 |  | 单值 |  |
| Combine overlapping regions if true | Combine | 布尔 |  | 单值 |  |
| Tolerance for region calculation | Tolerance | 数值 | 0.001 | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

所属 GH 分组：RSTool / Curve

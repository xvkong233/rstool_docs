# TextDisplay

> 模块：GH组件 / Display

[← 返回命令完全手册](/RsTool命令手册)

![图标](../assets/gh-icons/TextDisplay_24.png)

**功能**：在 Rhino 视口中显示文字标注。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Display」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 文字平面 | Plane | 平面 |  | 列表 |  |
| 待创建文字 | Text | 文字 |  | 列表 |  |
| 文字大小 | Size | 数值 |  | 列表 |  |
| 默认颜色 | Color | 颜色 |  | 列表 |  |
| 字体 | Font | 文字 |  | 列表 |  |
| Text justification | Justification | 整数 | 7 | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

所属 GH 分组：RSTool / Display

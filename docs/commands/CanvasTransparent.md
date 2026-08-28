# CanvasTransparent

> 模块：GH组件 / Util

[← 返回命令目录](/commands/)

![图标](../assets/gh-icons/CanvasTrasnprant_24.png)

**功能**：调整 Grasshopper 画布背景的透明显示效果。

![CanvasTransparent · Grasshopper 画布背景透明化，透出后方 Rhino 视口](../assets/CanvasTransparent/image1.png)
*CanvasTransparent 将 Grasshopper 画布背景设为透明，使后方 Rhino 视口中的模型直接可见，方便在 GH 编辑组件时实时对照 Rhino 几何*

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Util」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 是否激活背景透明显示 | Active | 布尔 | 否 | 单值 |  |
| 透明区域宽度百分比 | Width | 数值 | 0.4 | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

所属 GH 分组：RSTool / Util

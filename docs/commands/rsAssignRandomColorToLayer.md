# rsAssignRandomColorToLayer · 图层随机着色

> 模块：组织与选择 / 图层

[← 返回命令目录](/commands/)

**功能**：为所有仍为默认黑色(0,0,0)的图层随机分配颜色，保留已设颜色的图层

**调用**：在 Rhino 命令行输入 `rsAssignRandomColorToLayer`（命令行交互）

**交互流程**：

1. 命令行输入 rsAssignRandomColorToLayer
2. 程序遍历默认黑色(0,0,0)图层并随机赋色

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：仅修改 R=G=B=0 的图层颜色；无交互参数，为批量命令

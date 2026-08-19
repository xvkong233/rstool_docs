# rsAssignRandomMaterialToLayers · 按图层随机赋材质

> 模块：组织与选择 / 图层

[← 返回命令完全手册](/RsTool命令手册)

**功能**：为所有尚未分配渲染材质的图层随机创建并指派一个材质（名称 RM-<图层路径>）

**调用**：在 Rhino 命令行输入 `rsAssignRandomMaterialToLayers`（命令行交互）

**交互流程**：

1. 命令行输入 rsAssignRandomMaterialToLayers
2. 程序遍历所有未设置材质的图层并随机分配一种材质

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：仅处理 RenderMaterialIndex == -1 的图层；无交互参数，为批量命令

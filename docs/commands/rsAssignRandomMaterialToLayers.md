# <span class="rstool-command-icon rstool-command-icon--heading" title="rsAssignRandomMaterialToLayers：右键点击 rsAssignRandomColorToLayer 按钮" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/45264b3e-3ce6-501d-825b-b1e13e190fce.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/45264b3e-3ce6-501d-825b-b1e13e190fce.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsAssignRandomMaterialToLayers · 按图层随机赋材质

> 模块：组织与选择 / 图层

[← 返回命令目录](/commands/)

> 右键点击工具栏中的 [rsAssignRandomColorToLayer](./rsAssignRandomColorToLayer) 按钮可运行本命令；这里显示的是它们共用的按钮图标。

**功能**：为所有尚未分配渲染材质的图层随机创建并指派一个材质（名称 RM-&lt;图层路径&gt;）

**调用**：在 Rhino 命令行输入 `rsAssignRandomMaterialToLayers`（命令行交互）

**交互流程**：

1. 命令行输入 rsAssignRandomMaterialToLayers
2. 程序遍历所有未设置材质的图层并随机分配一种材质

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：仅处理 RenderMaterialIndex == -1 的图层；无交互参数，为批量命令

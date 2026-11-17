# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallAutoJoin：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/c724088b-7f74-5c21-bfdd-4fea7857c5d0.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/c724088b-7f74-5c21-bfdd-4fea7857c5d0.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallAutoJoin · 墙体自动交接

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

**功能**：根据同维度墙网重新计算自动交接；二维或三维由所选墙自动决定。

**调用**：在 Rhino 命令行输入 `rsWallAutoJoin`（命令行交互）

**交互流程**：

1. 选择需要自动交接的同维度智能墙。
2. 回车执行并查看交接结果。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**输出**：更新后的智能墙与原有关联对象。

**备注**：旧 rsWall2DAutoJoin 已合并。二维与三维不混合交接。

统一入口按所选墙真实二维／三维身份工作，混选不同维度会拒绝。

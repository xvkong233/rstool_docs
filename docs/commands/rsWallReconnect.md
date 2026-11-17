# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallReconnect：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0c941e31-6c47-56e0-8918-6da111c14cb3.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/0c941e31-6c47-56e0-8918-6da111c14cb3.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallReconnect · 修复墙体连接

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

**功能**：重新计算所选同维度墙体的连接，修复编辑后的墙网。

**调用**：在 Rhino 命令行输入 `rsWallReconnect`（命令行交互）

**交互流程**：

1. 选择需要修复的同维度智能墙。
2. 回车重建连接，检查结果。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**输出**：更新后的智能墙与原有关联对象。

**备注**：旧 rsWall2DReconnect 已合并为此入口。

统一入口按所选墙真实二维／三维身份工作，混选不同维度会拒绝。

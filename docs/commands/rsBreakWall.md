# <span class="rstool-command-icon rstool-command-icon--heading" title="rsBreakWall：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/ef98a9e2-5588-5b18-99a8-4914e65532c5.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/ef98a9e2-5588-5b18-99a8-4914e65532c5.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsBreakWall · 打断墙体

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

**功能**：在轴线指定位置打断二维或三维智能墙，保留合法门窗宿主关系。

**调用**：在 Rhino 命令行输入 `rsBreakWall`（命令行交互）

**交互流程**：

1. 选择一堵智能墙。
2. 在其轴线上指定打断位置。
3. 确认结果。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**输出**：更新后的智能墙与原有关联对象。

**备注**：打断点不能穿过门窗或电梯完整占宽。旧 rsBreakWall2D 已合并。

统一入口按所选墙真实二维／三维身份工作，混选不同维度会拒绝。

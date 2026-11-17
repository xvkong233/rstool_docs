# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallRemoveHole：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/2872ff54-efe1-54ca-a913-24676dd290c9.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/2872ff54-efe1-54ca-a913-24676dd290c9.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallRemoveHole · 取消墙体自由开洞

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

**功能**：移除三维墙体的自由布尔洞口并重建墙身，保留门窗与电梯的正常开口。

**调用**：在 Rhino 命令行输入 `rsWallRemoveHole`（命令行交互）

**交互流程**：

1. 输入 rsWallRemoveHole，选择需要恢复的三维智能墙。
2. 确认取消自由开洞，检查恢复后的墙身。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**输出**：移除自由布尔洞口后的三维智能墙。

**备注**：该命令不是删除门窗。需要取消门窗或电梯洞口，应移动或删除对应门窗／电梯对象。也可在 rsWall 三维面板点击“取消开洞”。

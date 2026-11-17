# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallConnect：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/30a507e6-1a76-5519-bcf5-ba291eb8c4d9.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/30a507e6-1a76-5519-bcf5-ba291eb8c4d9.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallConnect · 墙体连接

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

**功能**：点选两堵直墙需要保留的一侧，将其轴线调整到共同交点，保留两堵独立墙。

**调用**：在 Rhino 命令行输入 `rsWallConnect`（命令行交互）

**交互流程**：

1. 依次点击两堵同维度直墙需要保留的一侧。
2. 确认连接结果；平行、重合或无法形成有效交接时会提示。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**输出**：更新后的智能墙与原有关联对象。

**备注**：这不是把两堵墙合并成一个对象。三维墙需要有实际竖向重叠。

统一入口按所选墙真实二维／三维身份工作，混选不同维度会拒绝。

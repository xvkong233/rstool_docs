# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallExtend：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/f932fdaf-631b-543f-a6df-30a5680999b6.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/f932fdaf-631b-543f-a6df-30a5680999b6.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallExtend · 墙体延伸

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

**功能**：将同维度智能墙延伸到指定目标墙，可一次处理多堵墙。

**调用**：在 Rhino 命令行输入 `rsWallExtend`（命令行交互）

**交互流程**：

1. 先选择目标墙，再选择需要延伸的同维度墙。
2. 点选可指定靠近的延伸端，框选由系统判断可延伸端。
3. 回车执行，查看无法处理墙体的跳过提示。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**输出**：更新后的智能墙与原有关联对象。

**备注**：旧 rsWall2dExtend 已合并。目标墙不作为待延伸墙重复处理。

统一入口按所选墙真实二维／三维身份工作，混选不同维度会拒绝。

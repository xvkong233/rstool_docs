# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsDeleteWall2D：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/63a0ee4a-feef-5027-bb07-6fb1e917adf4.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsDeleteWall2D · 删除二维墙体（旧版入口）

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

选择墙体后使用 Rhino 的 Delete，关联交接会随删除更新。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：删除所选 2D 墙及其相关门窗符号，并尝试重连相邻墙体

**交互流程**：

1. 命令行输入 rsDeleteWall2D
2. 选择要删除的二维墙体（曲线/填充，可框选多选）
3. 自动删除墙及其挂载的门窗，并重建/重连相邻墙段

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：无可调参数，仅做选择；会一并删除宿主墙上的门窗并修复邻接接头


:::

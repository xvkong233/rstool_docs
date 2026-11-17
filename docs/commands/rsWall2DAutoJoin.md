# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsWall2DAutoJoin：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/506768ca-cb9f-5ef9-bfa1-91308a94118f.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWall2DAutoJoin · 二维墙体自动交接（旧版入口）

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

二维墙体自动交接已归入统一的墙体自动交接命令。

现在使用 [`rsWallAutoJoin`](/commands/rsWallAutoJoin)。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：自动在交叉/端点处打断并接合所选 2D 墙体，生成连续墙段（含门窗处智能接合）

**交互流程**：

1. 命令行输入 rsWall2DAutoJoin
2. 选择至少两面二维墙体（曲线/填充，可框选多选）
3. 自动在交叉点/端点处将墙体打断并重新接合（含门窗感知接合）

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：需至少选择两面墙；无数值参数


:::

# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsFilletWall2D：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/8e572021-753f-4e5d-9a70-15347ba223a5.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsFilletWall2D · 二维墙体倒角（旧版入口）

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

二维墙体圆角改用统一的墙体圆角命令。

现在使用 [`rsFilletWall`](/commands/rsFilletWall)。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：在两面等宽、同类型、同填充设置的 2D 墙体间生成圆角连接墙体

**交互流程**：

1. 命令行输入 rsFilletWall2D
2. 输入圆角半径
3. 选择第一面墙体并点选保留侧
4. 选择第二面墙体并点选保留侧
5. 生成两面墙之间的圆角连接

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 圆角半径 | FilletRadius | double | 1.0 | ≥0 | 默认 1.0m；不合理时自动取合理默认值（按墙宽推算） |

**备注**：仅支持相同墙宽、相同类型与填充设置的墙体


:::

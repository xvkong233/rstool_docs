# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsDeleteOpening2D：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/6de44462-26d9-4dfc-9ff6-01416f964458.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsDeleteOpening2D · 删除二维门窗（旧版入口）

> 模块：建筑 / 建筑构件

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

选中门窗后使用 Rhino 的 Delete，宿主墙体的开口会同步更新。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：被删除的门窗/电梯图块，以及恢复（填补洞口）后的二维墙体

**交互流程**：

1. 命令行输入 rsDeleteOpening2D
2. 选择要删除的二维门/窗/电梯图块（支持整组选择，GroupSelect）
3. 回车确认
4. 命令自动移除对应洞口图块并恢复（填补）所在二维墙体

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：自动识别门/窗/电梯类型的 A2D 图块（依据 A2DMetadata 的 Kind 标记或 Is*2DSymbol 用户字符串）；按组选择时整组一并删除；若找不到对应墙体洞口则提示失败。依赖二维建筑元数据（A2DMetadata / Wall2DInfo）。


:::

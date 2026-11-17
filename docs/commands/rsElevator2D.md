# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsElevator2D：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/390742bf-dcad-51a1-9473-0b74e2edb9dd.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsElevator2D · 二维电梯（旧版入口）

> 模块：建筑 / 建筑构件

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

电梯改用统一入口，在面板中选择二维或三维。

现在使用 [`rsElevator`](/commands/rsElevator)。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：在所选 2D 墙体上插入电梯符号（轿厢+门）并开洞

**交互流程**：

1. 命令行输入 rsElevator2D
2. 选择要插入电梯的二维墙体
3. 设置电梯宽、深、门宽、翻转轿厢方向
4. 在墙上指定电梯位置点击插入

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 电梯宽 | ElevatorWidth | double | 1.6 | >模型公差 | 默认 1.6m（按 1600mm 适配单位） |
| 电梯深 | ElevatorDepth | double | 1.6 | >模型公差 | 默认 1.6m（按 1600mm 适配单位） |
| 门宽 | DoorWidth | double | 0.9 | ≤电梯宽 | 默认 0.9m，会被钳制不超过电梯宽 |
| 翻转轿厢方向 | FlipSide | toggle | false |  |  |

**备注**：门宽会被钳制不超过电梯宽；默认按 1600/1600/900mm 适配单位


:::

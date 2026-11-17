# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsDoor2D：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/b891cbb7-0f98-4abb-805a-c8fdda2a69fa.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsDoor2D · 二维门（旧版入口）

> 模块：建筑 / 建筑构件

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

门的二维和三维绘制合并到同一个窗口，在面板中选择模式。

现在使用 [`rsDoor`](/commands/rsDoor)。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：在所选 2D 墙体上插入门符号（含门洞与开启弧线），并相应在墙上开洞

**交互流程**：

1. 命令行输入 rsDoor2D
2. 选择要插入门的二维墙体（可多选）
3. 设置门宽、类型（单开/双开/门洞）、开启角度、翻转开启方向与铰链
4. 在墙上移动光标指定门的位置，点击插入

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 门宽 | DoorWidth | double | 0.9 | >模型公差 | 默认 0.9m（按 900mm 适配单位） |
| 门类型 | DoorType | list | 单开 | 单开/双开/门洞 |  |
| 开启角度 | SwingAngle | double | 90 |  | 单位：度，默认 90° |
| 翻转开启方向 | FlipSwing | toggle | false |  |  |
| 翻转铰链 | FlipHinge | toggle | false |  |  |

**备注**：需场景中已有 rsWall2D 墙体；门宽默认值按 900mm 适配模型单位


:::

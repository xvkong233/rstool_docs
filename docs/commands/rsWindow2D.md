# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsWindow2D：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/d31aa9a2-cdd9-46e4-aa67-79cc70a158e6.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWindow2D · 二维窗（旧版入口）

> 模块：建筑 / 建筑构件

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

窗的二维和三维绘制合并到同一个窗口，在面板中选择模式。

现在使用 [`rsWindow`](/commands/rsWindow)。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：在所选 2D 墙体上插入窗符号并开洞

**交互流程**：

1. 命令行输入 rsWindow2D
2. 选择要插入窗的二维墙体
3. 设置窗宽、翻转方向
4. 在墙上指定窗的位置点击插入

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 窗宽 | WindowWidth | double | 1.2 | >模型公差 | 默认 1.2m（按 1200mm 适配单位） |
| 翻转方向 | FlipSide | toggle | false |  | 翻转窗在墙厚方向的位置 |

**备注**：默认窗宽按 1200mm 适配模型单位


:::

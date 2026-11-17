# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsMaterialLibraryOld：右键点击 rsMaterial 按钮" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/1d9adb07-8e80-483d-b6eb-9b288bf76f5a.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsMaterialLibraryOld · 旧版材质库（旧版入口）

> 模块：资源库 / 材质库

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

旧材质库入口不再保留，改用客户端材质库。

现在使用 [`rsMaterial`](/commands/rsMaterial)。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：打开旧版材质库，选择材质后拾取对象或图层进行赋予

**交互流程**：

1. 命令行输入 rsMaterialLibraryOld
2. 创建并显示 rsMaterialDialogOld (WinForms) 窗口
3. 选择材质后进入拾取循环
4. 点击物体/按选项切换赋予模式（物体/图层）

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 赋予模式 | Mode | list | 物体(Object) | 物体(Object) / 图层(Layer) | 命令行选项 Mode，默认 物体 (index 0) |

**备注**：旧版命令；赋予材质时使用 GetObject + 选项列表 Mode


:::

# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="当前工具栏中无对应图标" aria-hidden="true"></span> rsAIModelerLog · AI 建模执行日志（旧版入口）

> 模块：AI / 渲染与建模

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

当前 2.0 未注册这个旧日志入口。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：打开 AI 建模执行日志，方便排查生成脚本失败、取消或回滚的原因。

**交互流程**：

1. 运行命令，在默认文本查看程序中打开 AIModeler_Execution.log。
2. 查看 Rhino 命令行输出的日志路径和 AIModeler_LastFailed.py 路径，需要反馈问题时一并提供相关报错。

**参数**：

> 此命令无需设置数值参数，按上方流程操作即可；没有独立设置窗口。

**备注**：它只是查看日志，不会重新执行失败的脚本，也不修改模型。日志超过约 2 MB 时会轮转为 .old，较早记录可在其中查找。分享日志或失败脚本前，先检查是否包含项目敏感信息。无需设置窗口。


:::

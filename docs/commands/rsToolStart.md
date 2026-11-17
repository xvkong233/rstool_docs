# <span class="rstool-command-icon rstool-command-icon--heading" title="rsToolStart：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/2831bea5-0f16-5a82-a57d-276aa8945f27.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/2831bea5-0f16-5a82-a57d-276aa8945f27.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsToolStart · 恢复工具列

> 模块：辅助工具 / 系统工具

[← 返回命令目录](/commands/)

**功能**：恢复显示 RSTool 2.0 工具列，优先使用已记住的语言，首次按 Rhino 界面语言选择。

**调用**：在 Rhino 命令行输入 `rsToolStart`（命令行交互）

**交互流程**：

1. 输入 `rsToolStart`。
2. 工具列关闭或隐藏时，会重新打开对应的 RSTool 工具列组。
3. 需要明确切换语言时，运行 `rsToolCN`（中文）或 `rsToolEN`（英文）。

**参数**：

> 此命令无需设置数值参数，按上方流程操作即可；没有独立设置窗口。

**备注**：这是恢复 Rhino 工具列的命令。2.0 使用随当前插件附带的工具列资源，不再按旧版 Package 目录寻找 RSTool_CN/EN.rui。打开工具列不要求先登录，运行具体工具时仍需对应的账号权限。

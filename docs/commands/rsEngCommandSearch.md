# <span class="rstool-command-icon rstool-command-icon--heading" title="rsEngCommandSearch：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/94337e39-e62c-58c6-8ac4-81fe5579984d.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/94337e39-e62c-58c6-8ac4-81fe5579984d.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsEngCommandSearch · 中英文命令搜索

> 模块：辅助工具 / 系统工具

[← 返回命令目录](/commands/)

**功能**：按中文名称或英文命令搜索已适配 2.0 的工具列命令，再按序号运行。

**调用**：在 Rhino 命令行输入 `rsEngCommandSearch`（命令行交互）

**交互流程**：

1. 输入 `rsEngCommandSearch`。
2. 输入中文名称或英文命令关键词。
3. 查看结果中的中文名、英文名和命令名，输入对应序号（从 0 开始）。
4. 搜索结束后，Rhino 运行所选工具；按它自己的提示继续操作。

**参数**：

> 此命令无需设置数值参数，按上方流程操作即可；没有独立设置窗口。

**备注**：结果会核对当前插件实际注册的命令，旧工具列中已失效的入口不会作为可执行结果。搜索本身不代替具体工具的授权。

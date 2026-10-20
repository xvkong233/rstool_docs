# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="当前工具栏中无对应图标" aria-hidden="true"></span> rsDynamicComponentSelfTest · 动态组件自检

> 模块：动态组件 / 维护

[← 返回命令目录](/commands/)

> 当前工具栏中没有此命令的对应图标。横线仅表示暂无图标，不是实际按钮；请通过命令行调用。

**功能**：命令行逐条输出自检结果，并给出“动态组件 Rhino 自检：N/M passed”；全通过返回 Success，否则 Failure。

**调用**：在 Rhino 命令行输入 `rsDynamicComponentSelfTest`（命令行交互）

**交互流程**：

1. 命令行输入 rsDynamicComponentSelfTest，运行动态组件运行时自检（只读，不修改任何对象）。
2. 逐行输出自检项，最后汇总 PASS 数量（如 12/12 passed）。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：只读、不改文档。若某一项失败，输出会指出具体检查项，便于定位动态组件运行时问题。自动 Headless 测试环境本身不支持 Redo，发布前仍需在 Rhino 桌面执行一次 Undo/Redo 手工验收。

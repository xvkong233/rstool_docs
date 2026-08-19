# rsToolStart · 工具启动

> 模块：辅助工具 / 系统工具

[← 返回命令完全手册](/RsTool命令手册)

**功能**：重新加载 RSTool 工具栏并弹出对应语言面板

**调用**：在 Rhino 命令行输入 `rsToolStart`（命令行交互）

**交互流程**：

1. 命令行输入 rsToolStart，自动加载并弹出 RSTool 工具栏（依界面语言匹配中文 / 英文配置）

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：依赖 Package 目录 %APPDATA%\McNeel\Rhinoceros\packages\8.0\RSTool 下的版本文件夹与 RSTool_CN/EN.rui；需要 Rhino 8

执行 rsToolStart 后，RSTool 会自动弹出工具列（工具面板），无需在 Rhino 中手动调出；若工具栏此前被关闭、隐藏或版本更新后未加载，重新运行该命令即可恢复显示。

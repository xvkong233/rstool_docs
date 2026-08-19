# rsSelectByPrintWidth · 按打印宽度选择

> 模块：组织与选择 / 选择

[← 返回命令完全手册](/RsTool命令手册)

**功能**：选中具有指定有效打印线宽（含 ByLayer 解析）的所有对象

**调用**：在 Rhino 命令行输入 `rsSelectByPrintWidth`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsSelectByPrintWidth
2. 程序按有效线宽（含随图层）分组
3. 在弹出的列表框中选择一个线宽
4. 确认后选中该线宽的所有对象

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：使用 Rhino 原生 Dialogs.ShowListBox；线宽分组由场景中实际存在的线宽决定，无数值参数

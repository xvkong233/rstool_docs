# rsSelectHathByName · 按名称选择填充

> 模块：组织与选择 / 选择

[← 返回命令目录](/commands/)

**功能**：选中使用指定填充图案（Hatch Pattern）的所有填充对象

**调用**：在 Rhino 命令行输入 `rsSelectHathByName`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsSelectHathByName
2. 程序收集文档中现有填充图案名
3. 在列表框中选择一个图案
4. 确认后选中该图案的所有填充对象

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：使用 Dialogs.ShowListBox；仅含文档中实际存在的图案，无数值参数

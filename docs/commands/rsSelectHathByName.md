# <span class="rstool-command-icon rstool-command-icon--heading" title="rsSelectHathByName：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/00dff0ce-63b4-5b9f-b950-1b5256bd019e.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/00dff0ce-63b4-5b9f-b950-1b5256bd019e.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsSelectHathByName · 按名称选择填充

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

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 填充图案 | HatchPattern | list | 无 | 文档中实际存在的图案名称 | 对话框选项：程序收集文档中现有填充图案名后弹出列表选择 |

**备注**：使用 Dialogs.ShowListBox；仅含文档中实际存在的图案，无数值参数

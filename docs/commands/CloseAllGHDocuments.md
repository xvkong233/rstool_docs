# CloseAllGHDocuments

> 模块：GH组件 / Util

[← 返回命令完全手册](/RsTool命令手册)

![图标](../assets/gh-icons/CloseAllGhFile_24.png)

**功能**：关闭当前 Grasshopper 会话中打开的全部文档。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Util」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 是否关闭所有 Grasshopper 文档 | CloseAllGHDocuments | 布尔 | 否 | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

所属 GH 分组：RSTool / Util

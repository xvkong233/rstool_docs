# rsMaterialLibraryOld · 旧版材质库

> 模块：资源库 / 材质库

[← 返回命令完全手册](/RsTool命令手册)

**功能**：打开旧版材质库，选择材质后拾取对象或图层进行赋予

**调用**：在 Rhino 命令行输入 `rsMaterialLibraryOld`（命令行交互）

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

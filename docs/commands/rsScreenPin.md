# <span class="rstool-command-icon rstool-command-icon--heading" title="rsScreenPin：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/7da7e174-817f-5316-a770-013fe66adbfe.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/7da7e174-817f-5316-a770-013fe66adbfe.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsScreenPin · 截图浮窗

> 模块：效率工具 / 屏幕工具

[← 返回命令目录](/commands/)

**功能**：截取屏幕并生成可拖动/缩放的置顶悬浮图片

**调用**：在 Rhino 命令行输入 `rsScreenPin`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsScreenPin
2. 显示 ScreenPinControlForm 控制面板
3. 点击“截屏”捕获屏幕区域并置顶悬浮
4. 可滚轮缩放、拖动、右键更多操作；“关闭全部”清除

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 交互 | Interaction | text | — | 截屏 / 关闭全部悬浮图片 | 控制面板为按钮操作，无数值参数；浮窗支持拖动、滚轮缩放、右键更多操作 |

**备注**：Eto 控制面板 + 屏幕区域选择器；无数值参数（缩放为交互操作）

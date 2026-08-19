# rsKeyCastSettings · 按键显示设置

> 模块：效率工具 / 屏幕工具

[← 返回命令目录](/commands/)

**功能**：配置并保存按键显示的外观设置

**调用**：在 Rhino 命令行输入 `rsKeyCastSettings`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsKeyCastSettings
2. 创建并显示 KeyCastSettingsForm (Eto) 窗口
3. 调整颜色/透明度/停留时间/位置
4. 点击 应用/确定 保存到 KeyCastSettingsStore 并生效

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 背景颜色 | BackgroundColor | color | #1C1C1E |  | 浮层背景色 |
| 文字颜色 | TextColor | color | #FFFFFF |  | 按键文字颜色 |
| 修饰键颜色 | ModifierColor | color | #5DBCFF |  | 修饰键（Ctrl/Shift 等）颜色 |
| 背景透明度 | BackgroundOpacity | integer | 86 | 20-100 | 背景不透明度百分比，默认 86 (0.86) |
| 屏幕停留时间 | DisplayDurationSeconds | integer | 6 | 1-30 | 按键提示停留秒数，默认 6 秒 |
| 屏幕位置 | Position | list | 底部居中(BottomCenter) | 左上 / 顶部居中 / 右上 / 左侧居中 / 屏幕居中 / 右侧居中 / 左下 / 底部居中 / 右下 | 浮层位置，默认 底部居中 (index 7) |

**备注**：Eto 对话框；仅保存外观与停留时间，不记录按键内容

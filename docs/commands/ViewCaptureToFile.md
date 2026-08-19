# ViewCaptureToFile

> 模块：GH组件 / Util

[← 返回命令完全手册](/RsTool命令手册)

![图标](../assets/gh-icons/ViewCaptrueToFile_24.png)

**功能**：从 Grasshopper 捕捉当前 Rhino 视口并保存到指定路径。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Util」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 是否截图 | On | 布尔 | 否 | 单值 |  |
| 截图路径 请将显示面板中的背景改为使用程序设置 | FilePath | 文字 |  | 单值 |  |
| Rhino 视窗背景颜色 | ViewportBackgroundColor | 颜色 |  | 单值 |  |
| 文件格式 0 = jpg 1 = png | ImageFormat | 整数 | 0 | 单值 |  |
| 宽度分辨率 | width | 整数 | 1920 | 单值 |  |
| 高度分辨率 | height | 整数 | 1080 | 单值 |  |
| png格式透明背景 | PngTrans | 布尔 | 否 | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

所属 GH 分组：RSTool / Util

# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsExportCamToSU：右键点击 rsImportCamFromSU 按钮" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/e98fe49c-34c1-43b2-87f5-bbf99c6b96e3.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsExportCamToSU · 导出相机到 SketchUp

> 模块：视图出图 / 视图相机

[← 返回命令目录](/commands/)

> 右键点击工具栏中的 [rsImportCamFromSU](./rsImportCamFromSU) 按钮可运行本命令；这里显示的是它们共用的按钮图标。

**功能**：复制当前相机参数 JSON 到剪贴板 (mode/eye/target/up/fov/viewHeight)

**调用**：在 Rhino 命令行输入 `rsExportCamToSU`（命令行交互）

**交互流程**：

1. 命令行运行 rsExportCamToSU
2. 读取当前视图相机参数
3. 将 JSON 复制到剪贴板 (供 SketchUp 粘贴)

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：单位转为毫米；两点透视计算视中心偏移；普通透视用 35mm 镜头算 FOV 最准

# rsImportCamFromSU · 从SketchUp导入相机

> 模块：视图出图 / 视图相机

[← 返回命令目录](/commands/)

**功能**：设置当前视图相机 (同步 SketchUp 相机参数)

**调用**：在 Rhino 命令行输入 `rsImportCamFromSU`（命令行交互）

**交互流程**：

1. 命令行运行 rsImportCamFromSU
2. 从剪贴板读取 SketchUp 相机 JSON
3. 解析 eye/target/up/fov/viewHeight 并设置当前视图

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：从剪贴板读取 JSON；支持 Perspective/Parallel/TwoPoint；坐标按 毫米→文档单位 缩放；视图高度同步缩放

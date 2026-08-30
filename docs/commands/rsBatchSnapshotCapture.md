# rsBatchSnapshotCapture · 批量截图

> 模块：视图出图 / 视图相机

[← 返回命令目录](/commands/)

**功能**：批量导出所有快照为 PNG 图片到指定文件夹

**调用**：在 Rhino 命令行输入 `rsBatchSnapshotCapture`（打开设置窗口）

**交互流程**：

1. 命令行运行 rsBatchSnapshotCapture
2. 选择导出文件夹 (WinForms 文件夹对话框)
3. 遍历文档所有 Snapshots
4. 逐个恢复快照并截图保存为 PNG

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 导出文件夹 | ExportFolder | folder | 无 | 任意本地路径 | 对话框选项：文件夹选择器指定全部快照 PNG 的输出目录 |
| 渲染缓冲 | RenderDelay | int | 500 | 固定 500ms | 每次切换快照后截图前的等待毫秒数（源码硬编码） |

**备注**：使用 ScriptRunner 同步恢复快照；每帧等待 500ms 缓冲；文件名取快照名(非法字符替换为下划线)；无快照时提示返回。窗口仅为文件夹选择器，无可调数值参数

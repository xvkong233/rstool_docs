# rsCameraPath · 相机路径

> 模块：视图出图 / 视图相机

[← 返回命令完全手册](/RsTool命令手册)

**功能**：相机路径曲线与目标路径曲线、关键帧点；或导出动画帧 PNG 序列

**调用**：在 Rhino 命令行输入 `rsCameraPath`（打开设置窗口）

**交互流程**：

1. 命令行运行 rsCameraPath
2. 打开摄像机路径动画记录器窗口 (Eto 非模态 Form)
3. 调整视角后点击“记录当前视角”
4. 管理关键帧/片段，设置时长/循环/帧率
5. 播放预览，或生成路径曲线/关键帧点，或导出动画帧

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 时长(秒) | Duration | double | 5.0 | 0.5 – 600 | NumericStepper 增量 0.5；CameraClip.Duration 默认 5.0 |
| 循环 | Loop | toggle | false |  |  |
| 导出帧率 | ExportFps | integer | 30 | 1 – 120 | NumericStepper 整数，增量 1 |

**备注**：片段与关键帧随 .3dm UserString 持久化；窗口非模态且置顶；导出帧使用 EaseInOut 缓动；至少 2 个关键帧才能播放/生成路径

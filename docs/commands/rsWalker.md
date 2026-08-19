# rsWalker · 漫游模式

> 模块：趣味 / 互动娱乐

[← 返回命令目录](/commands/)

**功能**：进入 FPS 式漫游模式，在视口中用 WASD/QE 移动相机（不修改几何）

**调用**：在 Rhino 命令行输入 `rsWalker`（命令行交互）

**交互流程**：

1. 命令行输入 rsWalker
2. 首次：设置速度/帧率/移动触发/输入锁定并启动
3. 之后：可停止/调参/查看状态
4. 在视口中按住触发键 + WASD/QE 漫游移动相机

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 速度 | Speed | double | 3.0 | 0.1~1000 | 移动速度 m/s |
| 帧率 | FPS | integer | 120 | 15~240 | 目标刷新帧率 |
| 移动触发 | MoveTrigger | toggle | Shift | Shift/RightMouse | 按住此键配合 WASD/QE 移动 |
| 输入锁定 | InputLock | toggle | false | 关闭/开启 | 锁定输入以捕获命令相关按键 |

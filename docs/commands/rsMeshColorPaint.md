# rsMeshColorPaint · 网格笔刷

> 模块：几何 / 铺装表皮

[← 返回命令目录](/commands/)

**功能**：带有顶点颜色的网格（供按颜色混合等命令复用）

**调用**：在 Rhino 命令行输入 `rsMeshColorPaint`（命令行交互）

**交互流程**：

1. 选择要绘制的网格
2. 打开“网格颜色绘制”面板
3. 在网格上拖动绘制顶点色（Ctrl 切换黑/白笔刷）
4. 点击“完成”/“取消”

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 笔刷半径 | Radius | double | 2 | 0.001–100000 |  |
| 硬度 | Hardness | double | 0.5 | 0.0–1.0 |  |
| 强度 | Strength | double | 0.5 | 0.0–1.0 |  |
| 使用后平滑 | Use post smooth | toggle | true |  |  |
| 平滑次数 | Smooth passes | integer | 3 | 1–100 |  |
| 平滑强度 | Smooth strength | double | 0.65 | 0.0–1.0 |  |

**备注**：采用 GetPoint 实时绘制；Ctrl 键切换黑/白笔刷

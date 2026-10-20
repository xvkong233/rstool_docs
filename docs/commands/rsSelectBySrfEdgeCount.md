# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsSelectBySrfEdgeCount：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/7470097d-5d9e-4602-b033-aec551a48a90.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsSelectBySrfEdgeCount · 按曲面边数选择

> 模块：组织与选择 / 选择

[← 返回命令目录](/commands/)

**功能**：选中边界曲线段数等于指定值的曲面/多重曲面

**调用**：在 Rhino 命令行输入 `rsSelectBySrfEdgeCount`（命令行交互）

**交互流程**：

1. 命令行输入 rsSelectBySrfEdgeCount
2. 输入要筛选的边数
3. 框选/选择要筛选的面
4. 自动选中边界段数等于该值的曲面

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 面边数 | edgeCount | integer | 3 | >=1 | RhinoGet.GetInteger 输入；少于 1 会提示但仍继续 |

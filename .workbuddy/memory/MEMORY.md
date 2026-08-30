# rstool_docs 项目长期记忆

## 🔑 权威数据源：RsTool 插件源码库（只读！）

**`D:\GitHub\rstool\rstool`** —— RsTool 插件 C# 源码库，是命令命名/参数的**权威真相源**。

> ⛔ **堂主明令：只读，绝不允许修改这个库。**
> 所有改动只落在 `D:\GitHub\rstool_docs`。

### 最有用的文件

| 文件 | 内容 | 用途 |
|---|---|---|
| `Shared/Runtime/RSToolMainMenuCatalog.cs` | ~180 条 `Command(中文, English, rsName)` | **命令中英文命名的权威来源**，可与 `commands.json` 的 `data[].zh` 对账 |
| `MenuOverlay/MenuOverlayConfiguration.cs` | 菜单 overlay 配置 | 辅助 |
| `MenuOverlay/MenuOverlayDisplayNameCatalog.cs` | 菜单显示名 | 辅助 |
| `<模块目录>/rsXxx.cs` | 各命令实现 | 看有没有命令行参数、调哪个 Manager |

### 源码目录 → 命令的对应（部分）

| 命令 | 目录 |
|---|---|
| rsScreenPin | `ScreenPin/` |
| rsSelectByPrintWidth / rsSelectHathByName | `Select/` |
| rsBatchSnapshotCapture / rsBatchViewCapture | `View/` |
| rsMindMap | `MindMap/` |
| rsDeleteLayer | `rsLayer/` |
| rsLayFlat | `ObjChange/` |
| rsBreakWall2D | `Architecture2D/` |
| rsPolylineSection | `Drafting/PolylineSection/` |
| rsSelectSubDEdgeDirection | `SubDAssist/` |
| rsModelingCompanion | `ModelingCompanion/` |

### 一个重要认知：**"面板型命令"没有命令行参数，但 params 仍要填面板设置项**

很多 `form` 风格的命令（rsScreenPin / rsMindMap / rsWhiteboard / rsEarth / rsVectorStudio 等），
源码里 `RunCommand` 就一行 `XxxManager.ShowPanel()`，**没有任何 `GetString/AddOption/OptionDouble`**。
它们的设置全在 WPF/Web 面板里，散落在对应的 `XxxManager` / `XxxSettings` / `XxxWebForm` 类中。

→ **但是 params 不能只写 `[]`**：堂主要求把面板/对话框里的**真实设置项**写进 params 参数表。
`params[].type` 是宽松展示标签（list/password/radio/bool/toggle/int/double/text/folder 等），
`note` 里注明"面板设置"/"对话框选项"即可。去读 `Manager`/`Settings`/`WebForm` 类的字段提取，不是读 `RunCommand`。

## 已修的数据问题（2026-08-30）

- 11 个命令的 `data[].zh` 与源码命名不一致 → 已全部对齐源码
- **`rsRandomTrimCurve` 的 `zh` 与 `desc` 字段对调了**（zh 存了整句描述、desc 存了命令名）→ 已交换

## 已知缺口（待堂主决策）

**12 个命令源码有、文档站完全没有**（2026-08-30 对账发现）：

`InsertAsset` / `InsertAssetOld` / `rsModelingCompanion` / `rsModelingCompanionSettings` /
`rsBreakWall2D` / `rsElevationPanel` / `rsSelectSubDEdgeDirection` / `rsSendToMaya` /
`rsMayaTransferSettings` / `rsLayFlat` / `rsDeleteLayer` / `rsPolylineSection`

其中 6 个有明确 `.cs` 实现文件，另外 6 个待确认是否仍在维护。

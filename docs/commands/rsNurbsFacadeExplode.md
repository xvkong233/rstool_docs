# <span class="rstool-command-icon rstool-command-icon--heading" title="rsNurbsFacadeExplode：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsNurbsFacadeExplode · 分解 NURBS 参数表皮

> 模块：铺装表皮

[← 返回命令目录](/commands/)

**功能**：将 rsNurbsFacade 参数对象转为完整普通几何，删除源对象，可一次撤销恢复。

**调用**：在 Rhino 命令行输入 `rsNurbsFacadeExplode`（命令行交互）

**交互流程**：

1. 选择一个已有 rsNurbsFacade；也可先运行命令再按提示选择。
2. 执行分解，输出每个完整普通单元并删除源表皮。
3. 需要恢复参数对象时，执行一次 Undo。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 输入对象 | Source | object | 已有参数对象 | rsNurbsFacade | 读取已经应用并保存的造型，不会把未应用的预览当作输出。 |
| 源对象处理 | Source handling | action | 删除源参数对象 | 一次 Undo / Redo | 输出完整普通构件，并删除参数源；转换后不再通过原参数页修改。 |

**输出**：普通 Brep、Mesh、SubD 完整单元；删除源参数表皮。

**备注**：这就是参数表皮属性页的“分解”操作。不会把 Brep 单元拆成一堆单面。只想另出一份普通几何、还要保留参数时，请改用属性页 Bake。Rhino 自带 Explode 不支持直接替代本命令。

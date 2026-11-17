# <span class="rstool-command-icon rstool-command-icon--heading" title="rsMeshFacadeExplode：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsMeshFacadeExplode · 分解网格参数表皮

> 模块：铺装表皮

[← 返回命令目录](/commands/)

**功能**：将 rsMeshFacade 参数对象转为完整普通几何，删除源对象，可一次撤销恢复。

**调用**：在 Rhino 命令行输入 `rsMeshFacadeExplode`（命令行交互）

**交互流程**：

1. 选择一个已有 rsMeshFacade，运行本命令；未预选时按 Rhino 命令行提示选择一个表皮。
2. 输出完整 Mesh/SubD 单元，并删除源参数表皮。
3. 需要恢复参数对象时，执行一次 Undo。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 输入对象 | Source | object | 已有参数对象 | rsMeshFacade | 读取已经应用并保存的造型，不会把未应用的预览当作输出。 |
| 源对象处理 | Source handling | action | 删除源参数对象 | 一次 Undo / Redo | 输出完整普通构件，并删除参数源；转换后不再通过原参数页修改。 |

**输出**：保留原类型的普通 Mesh/SubD 完整单元；删除源表皮。

**备注**：距离驱动和颜色驱动的 rsMeshFacade 均使用此入口。分解保留完整单元，不套用 Bake 的合并网格或同序号面分组。若要保留参数源，请用 Bake。请用本命令或属性页“分解”，不要直接输入 Rhino 的 Explode。

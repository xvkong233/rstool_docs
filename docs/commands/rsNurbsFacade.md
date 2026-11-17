# <span class="rstool-command-icon rstool-command-icon--heading" title="rsNurbsFacade：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsNurbsFacade · 编辑 NURBS 参数表皮

> 模块：铺装表皮

[← 返回命令目录](/commands/)

::: info 2.0 说明

支持参数对象持续编辑，选中后在对应属性页修改；需要普通几何时使用页面中的专用转换或分解入口。

[查看 2.0 命令变化与对照](/commands/v2)

:::

**功能**：继续编辑 NURBS 铺装表皮的单元、渐变与输入，也可局部替换、Bake 或分解。

**调用**：在 Rhino 命令行输入 `rsNurbsFacade`（打开设置窗口）

**交互流程**：

1. 先用 rsTileQuadNurbsBlend 创建，并保持“生成 rsNurbsFacade 物体”勾选。
2. 选择已有表皮，在对象属性的“参数化表皮”页直接修改；运行 rsNurbsFacade 也可打开完整编辑窗口。
3. 在“生成参数”和“过渡映射”中调方向、采样和渐变，预览后点“应用修改”；不满意可点“取消修改”。
4. 需要改原型或输入时，在“输入和原型”中替换，或先提取编辑再“拾取并更新”。局部单元另在“局部单元”里处理。
5. 需要出图或交付时，使用几何读取、Bake 或专用分解，按是否要保留参数选择。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 单元模式 | Unit mode | list | 沿用表皮已保存设置 | 单单元 / A/B 渐变混合 | 单单元只使用 A；启用 A/B 混合前需先备好 B 和干扰曲线。 |
| 渐变采样 | Blend sampling | list | 沿用表皮已保存设置 | 流动后 A 单元采样 / 嵌板中心采样 | 控制渐变值按单元采样点计算，还是每个嵌板使用中心位置的权重。 |
| 旋转 90° / 反转 Z | Rotate 90° / Reverse Z | toggle | 沿用表皮已保存设置 | 开 / 关 | 调整单元铺设方向与正反朝向。 |
| 过渡映射 | GraphMapper / mapping curve | editor | 沿用表皮已保存设置 | 面板内编辑 / 拾取映射曲线 | 拖动 GraphMapper 控制点调整渐变，也可替换干扰曲线与映射曲线。 |
| 输入和原型 | Inputs and prototypes | action | 内部保存的输入 | 替换 / 提取编辑 / 拾取并更新 | 分别管理 A/B、流动基面、嵌板和曲线。编辑提取物件后必须明确回写。 |
| 局部单元 | Local units | action | 无额外覆盖或沿用已有覆盖 | 局部替换 / 恢复默认 | 只调整指定位置的单元，不改变其他位置的整体渐变分布。 |
| 普通几何输出 | Bake / Explode | action | 保留参数表皮 | Bake / 分解 | Bake 保留源表皮；分解删除源表皮，并保留每个完整单元。 |

**输出**：原位更新可持续编辑的 rsNurbsFacade；可另行输出普通几何。

**备注**：这类表皮把单元、基面、嵌板和映射设置一起保存在对象里，原始输入删掉以后也能继续改。编辑内部单元时，先提取，修改后重新选中表皮，再点“拾取并更新”；提取出来的物件不会自动带动表皮。局部替换需要选表皮上的位置，再选未变形的单元。重新拾取嵌板后如果旧的局部替换无法对应，要先处理或明确清除，不能按顺序随意套用。

Bake 会保留参数表皮，再输出一份普通几何；“分解”或 rsNurbsFacadeExplode 会删除参数表皮，输出完整的 Brep、Mesh 或 SubD 单元，一次 Undo 可以恢复。请使用这里的专用分解入口，Rhino 自带 Explode 不能直接处理这种参数对象。

需要 Make2D、复制边缘或复制边界时，可用属性页“读取几何（保留表皮）”，不用先 Bake；这些入口会读取当前已保存的结果。复制边缘不支持 Mesh 混合输入。当前版 3dm 会保存参数与精确结果；跨文件复制、放进图块、导入插入、旧版保存或交给其他软件前，先 Bake 成普通几何。模型单位改变后仍可显示、Bake 和分解，重新改参前请恢复一致单位。旧版的一次性铺装没有完整配方，需要重新指定输入创建。

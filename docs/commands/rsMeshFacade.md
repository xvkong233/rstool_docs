# <span class="rstool-command-icon rstool-command-icon--heading" title="rsMeshFacade：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/0990a32c-00d2-528d-9505-31928da21d44.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsMeshFacade · 编辑网格参数表皮

> 模块：铺装表皮

[← 返回命令目录](/commands/)

::: info 2.0 说明

支持参数对象持续编辑，选中后在对应属性页修改；需要普通几何时使用页面中的专用转换或分解入口。

[查看 2.0 命令变化与对照](/commands/v2)

:::

**功能**：在对象属性里继续编辑距离或顶点颜色驱动的网格表皮，支持内部单元和颜色网格回写。

**调用**：在 Rhino 命令行输入 `rsMeshFacade`（进入对象属性编辑）

**交互流程**：

1. 先用 rsTileMeshBlend 或 rsTileMeshBlendByColor 创建，并保持“生成可编辑 rsMeshFacade 表皮”勾选。
2. 选择表皮运行 rsMeshFacade，进入 Rhino 对象属性中的“参数化网格表皮”页；此命令不再弹独立编辑窗。
3. 按来源分别调整距离渐变或颜色采样、黑白反转，预览后点“应用修改”。
4. 修改内部单元时先提取，改完再“拾取并更新”；颜色表皮可用“编辑颜色网格”提取后绘制并回写。
5. 局部替换、读取几何和普通输出集中在同一属性页，Bake 保留参数，分解则转成普通单元。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 单元模式 | Unit mode | list | 沿用表皮已保存设置 | 单单元 / A/B 渐变混合 | 混合需要单元 B；距离驱动还需要干扰曲线。 |
| 渐变采样 | Blend sampling | list | 沿用表皮已保存设置 | 流动后 A 单元采样 / 目标面中心采样 | 选择按单元采样点渐变，或每个目标面使用一个中心权重。 |
| 旋转 90° / 统一 UV | Rotate 90° / Unify UV | toggle | 沿用表皮已保存设置 | 开 / 关 | 调整参考多边形方向，并统一目标网格面方向。 |
| 距离驱动与颜色驱动 | Distance / vertex-color controls | conditional | 随创建来源 | 距离：干扰与映射曲线；颜色：采样与黑白反转 | 距离表皮显示过渡映射与曲线工具；颜色表皮显示“黑白反转”和“编辑颜色网格”，隐藏距离曲线工具。 |
| 输入和原型 | Inputs and prototypes | action | 内部保存的输入 | 替换 / 提取编辑 / 拾取并更新 | 管理 A/B、参考多边形、目标网格与曲线；提取物件改好后需明确回写。 |
| 局部单元 | Local units | action | 无额外覆盖或沿用已有覆盖 | 局部替换 / 恢复默认 | 以未变形的 Mesh/SubD 单元替换指定位置；目标网格变化时留意局部覆盖提示。 |
| Bake 输出设置 | Bake output options | toggle | 沿用表皮已保存设置 | 合并网格 / 同序号面分组（二选一） | 两项互斥；只影响普通几何输出，专用分解始终保留完整单元。 |

**输出**：原位更新 rsMeshFacade，保留 Mesh/SubD 单元和颜色驱动设置；也可输出普通几何。

**备注**：rsTileMeshBlend 和 rsTileMeshBlendByColor 负责创建，rsMeshFacade 负责后续编辑；按贴图生成的 rsTileMeshBlendByBitmap 仍走原有流程，不要把它当作同一种参数对象。网格表皮内部保存目标网格、顶点颜色、参考多边形、单元及映射设置，原始输入删除后仍能编辑。

“编辑单元 A/B”会提取内部原型；颜色表皮还可点“编辑颜色网格”，提取内部目标网格，用 rsMeshColorPaint 或 Rhino 修改。改好以后重新选择表皮，点“拾取并更新”，不会自动关联。局部替换支持未变形的 Mesh/SubD 单元；换目标网格造成拓扑或位置身份不对应时，需要明确确认清除旧覆盖，取消则保留原表皮。

Bake 保留表皮，另外输出普通几何；“分解”或 rsMeshFacadeExplode 删除表皮，输出完整 Mesh/SubD 单元，可一次 Undo 恢复。请使用专用分解入口，不要直接输入 Rhino 的 Explode。Bake 的“合并网格”和“同序号面分组”不能同时开启；不适合分组的混合类型会保留完整单元并提示。

属性页“读取几何（保留表皮）”可运行 Make2D、复制全部边缘、复制边界等操作，不必先 Bake，也不会移除参数；Mesh 的复制边缘会输出拓扑边线，SubD 输出极限边曲线。当前版 3dm 保存参数与精确结果；跨文件复制、放入图块、导入插入、旧版或第三方交换前先 Bake。单位变化后仍能输出已有结果，重新改参前须恢复一致单位。

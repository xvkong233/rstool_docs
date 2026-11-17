# <span class="rstool-command-icon rstool-command-icon--heading" title="rsTileMeshBlend：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/462c3c2a-68f2-5b33-9dac-ecc23935be39.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/462c3c2a-68f2-5b33-9dac-ecc23935be39.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsTileMeshBlend · 网格铺装混接

> 模块：铺装表皮

[← 返回命令目录](/commands/)

**功能**：在目标网格上流动单元，用曲线和 GraphMapper 控制渐变，默认输出可编辑网格表皮。

**调用**：在 Rhino 命令行输入 `rsTileMeshBlend`（打开设置窗口）

**交互流程**：

1. 打开“网格单元混合”窗口，选目标网格、参照多边形和单元 A。
2. B 可以与 A 相同；做 A/B 渐变时补充 B 和干扰曲线，再在面板中编辑过渡映射，或拾取映射曲线。
3. 调整采样、旋转和统一 UV，查看实时预览。
4. 保持“生成可编辑 rsMeshFacade 表皮”勾选后点“应用”；取消勾选可按旧方式输出普通 Mesh/SubD。
5. 后续选择表皮，通过属性页或 rsMeshFacade 继续改参数、单元和目标网格。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 生成可编辑 rsMeshFacade 表皮 | Create editable rsMeshFacade | toggle | true | true / false | 默认开启，生成后可在属性页持续修改；关闭输出普通 Mesh/SubD。 |
| 采样方式 | Sample mode | list | 流动后 A 单元采样 | 流动后 A 单元采样 / 目标网格面中心 | 决定按单元上的采样点还是目标面中心计算混合权重。 |
| 旋转参照多边形 90° | Rotate reference polygon 90° | toggle | false | true / false | 调整单元铺设朝向。 |
| 统一网格 UV 方向 | Unify mesh UV direction | toggle | false | true / false | 统一网格面的方向，减少不同面之间的方向跳变。 |
| 隐藏目标网格 | Hide target mesh | toggle | false | true / false | 控制创建时原始目标网格的可见性。 |
| 合并网格 / 同序号面分组 | Merge meshes / Group faces by index | toggle | false | 二选一或均关闭 | 用于普通几何输出或后续 Bake，两项不能同时开启。 |

**输出**：默认生成一个包含各目标单元的 rsMeshFacade；取消参数化输出后生成普通 Mesh/SubD，可按选项合并或分组。

**备注**：rsTileMeshBlend 和 rsTileMeshBlendByColor 负责创建，rsMeshFacade 负责后续编辑；按贴图生成的 rsTileMeshBlendByBitmap 仍走原有流程，不要把它当作同一种参数对象。网格表皮内部保存目标网格、顶点颜色、参考多边形、单元及映射设置，原始输入删除后仍能编辑。

“编辑单元 A/B”会提取内部原型；颜色表皮还可点“编辑颜色网格”，提取内部目标网格，用 rsMeshColorPaint 或 Rhino 修改。改好以后重新选择表皮，点“拾取并更新”，不会自动关联。局部替换支持未变形的 Mesh/SubD 单元；换目标网格造成拓扑或位置身份不对应时，需要明确确认清除旧覆盖，取消则保留原表皮。

Bake 保留表皮，另外输出普通几何；“分解”或 rsMeshFacadeExplode 删除表皮，输出完整 Mesh/SubD 单元，可一次 Undo 恢复。请使用专用分解入口，不要直接输入 Rhino 的 Explode。Bake 的“合并网格”和“同序号面分组”不能同时开启；不适合分组的混合类型会保留完整单元并提示。

属性页“读取几何（保留表皮）”可运行 Make2D、复制全部边缘、复制边界等操作，不必先 Bake，也不会移除参数；Mesh 的复制边缘会输出拓扑边线，SubD 输出极限边曲线。当前版 3dm 保存参数与精确结果；跨文件复制、放入图块、导入插入、旧版或第三方交换前先 Bake。单位变化后仍能输出已有结果，重新改参前须恢复一致单位。

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116675823277532&bvid=BV1gTVf6SEWx&cid=38781780987&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="rsTileMeshBlend 网格铺装混接教学视频"></iframe>
*rsTileMeshBlend 网格铺装混接教学视频*

# <span class="rstool-command-icon rstool-command-icon--heading" title="rsTileQuadNurbsBlend：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/6eb9fb02-4dd4-5f7c-a0e4-a52310b67e97.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsTileQuadNurbsBlend · 四边 NURBS 铺装混接

> 模块：铺装表皮

[← 返回命令目录](/commands/)

**功能**：在 NURBS 嵌板上流动或混合单元，默认生成可继续编辑的 rsNurbsFacade。

**调用**：在 Rhino 命令行输入 `rsTileQuadNurbsBlend`（打开设置窗口）

**交互流程**：

1. 打开“曲面单元混合”窗口，选嵌板曲面、流动基面和单元 A。
2. 单元 B 可以与 A 相同；需要渐变时再提供 B 和干扰曲线，并用内嵌 GraphMapper 或拾取映射曲线调整过渡。
3. 按效果选择采样方式、旋转 90°、反转 Z 和是否隐藏原始嵌板，查看实时预览。
4. 默认保持“生成 rsNurbsFacade 物体”勾选，点“应用”生成参数表皮；只要普通几何时可取消勾选。
5. 生成后选中表皮，在属性页继续改，或运行 rsNurbsFacade 打开完整编辑窗口。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 生成 rsNurbsFacade 物体 | Generate rsNurbsFacade object | toggle | true | true / false | 默认开启。保存完整输入和配方，后续可以继续修改；关闭则输出普通几何。 |
| 渐变采样 | Blend sampling | list | 流动后 A 单元采样 | 流动后 A 单元采样 / 目标嵌板面中心 | 渐变模式下决定每个位置如何取得 A/B 混合权重。 |
| 旋转 90° / 反转 Z | Rotate 90° / Reverse Z | toggle | false | true / false | 调整基面方向和单元朝向。 |
| 过渡映射 | GraphMapper / mapping curve | editor | 按面板当前设置 | 内嵌编辑器 / 拾取曲线 | 可直接编辑渐变曲线，不必每次单独画一条映射曲线。 |
| 隐藏嵌板曲面 | Hide panels | toggle | false | true / false | 控制创建时原始嵌板的可见性。 |
| 同序号面分组 | Group faces by index | toggle | false | true / false | 用于普通几何输出或后续 Bake；专用分解仍输出完整单元。 |

**输出**：默认一个可编辑的 rsNurbsFacade，内部保留各个完整单元；关闭参数对象选项后直接输出普通几何。

**备注**：创建与后续编辑是两个入口：rsTileQuadNurbsBlend 建表皮，rsNurbsFacade 改表皮，旧创建命令仍可使用。单元 A/B 需要兼容的类型与结构，支持 Brep、Mesh、SubD。

这类表皮把单元、基面、嵌板和映射设置一起保存在对象里，原始输入删掉以后也能继续改。编辑内部单元时，先提取，修改后重新选中表皮，再点“拾取并更新”；提取出来的物件不会自动带动表皮。局部替换需要选表皮上的位置，再选未变形的单元。重新拾取嵌板后如果旧的局部替换无法对应，要先处理或明确清除，不能按顺序随意套用。

Bake 会保留参数表皮，再输出一份普通几何；“分解”或 rsNurbsFacadeExplode 会删除参数表皮，输出完整的 Brep、Mesh 或 SubD 单元，一次 Undo 可以恢复。请使用这里的专用分解入口，Rhino 自带 Explode 不能直接处理这种参数对象。

需要 Make2D、复制边缘或复制边界时，可用属性页“读取几何（保留表皮）”，不用先 Bake；这些入口会读取当前已保存的结果。复制边缘不支持 Mesh 混合输入。当前版 3dm 会保存参数与精确结果；跨文件复制、放进图块、导入插入、旧版保存或交给其他软件前，先 Bake 成普通几何。模型单位改变后仍可显示、Bake 和分解，重新改参前请恢复一致单位。旧版的一次性铺装没有完整配方，需要重新指定输入创建。

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116084611026973&bvid=BV16aZCBYETP&cid=36119186485&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · NURBS 渐变表皮生成（Tile Quad Nurbs Blend）演示教学（B 站）"></iframe>
*RsTool · NURBS 渐变表皮生成（Tile Quad Nurbs Blend）演示教学（B 站）*

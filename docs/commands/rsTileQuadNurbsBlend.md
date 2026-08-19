# rsTileQuadNurbsBlend · NURBS渐变表皮生成

> 模块：几何 / 铺装表皮

[← 返回命令目录](/commands/)

**功能**：通过 Sporph 空间变形把单元物件流动/混合到每个嵌板曲面的 Brep/Surface（应用后成组）

**调用**：在 Rhino 命令行输入 `rsTileQuadNurbsBlend`（打开设置窗口）

**交互流程**：

1. 打开“曲面单元混合”窗口
2. 选取嵌板曲面（Brep，单面）
3. 选取流动基面（Origin）
4. 选取单元A
5. 选取单元B（可与A相同）
6. 若 A≠B：选取干扰曲线 + 映射曲线
7. 实时橙色预览
8. 应用（分组）/ 取消

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 是否旋转90° | Rotate 90° | toggle | false |  | 旋转基面 UV |
| 是否反转Z轴 | Reverse Z axis | toggle | false |  |  |
| 是否隐藏嵌板曲面 | Hide panels | toggle | false |  |  |

**备注**：UnitA 与 UnitB 必须同为 Brep、Mesh 或 SubD；无数值步进器

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116084611026973&bvid=BV16aZCBYETP&cid=36119186485&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · NURBS 渐变表皮生成（Tile Quad Nurbs Blend）演示教学（B 站）"></iframe>
*RsTool · NURBS 渐变表皮生成（Tile Quad Nurbs Blend）演示教学（B 站）*

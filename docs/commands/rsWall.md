# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWall：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/5bdc5dd8-c655-5558-81ce-4212e1c6f673.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/5bdc5dd8-c655-5558-81ce-4212e1c6f673.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWall · 墙体（二维／三维）

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

::: info 2.0 说明

统一墙体窗口可选择二维或三维；rsWall2D 以二维模式打开同一面板。

[查看 2.0 命令变化与对照](/commands/v2)

:::

**功能**：在一个常驻窗口里画二维墙或三维墙，可设置厚度、基线、填充、高度与底标高，并持续自动处理同类墙体交接。

**调用**：在 Rhino 命令行输入 `rsWall`（打开设置窗口）

**交互流程**：

1. 输入 rsWall，在窗口顶部选择“二维绘图”或“三维建模”。
2. 先设置墙厚、基线与偏移，再选直线、圆弧或自由曲线。
3. 在视口连续拾点绘墙；靠近同类墙体可捕捉中心线。
4. 回车结束当前链并重新拾起点；自由曲线回车先生成。Esc 或关闭窗口结束，已完成墙体保留。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 绘制用途 | OutputMode | enum | 首次二维；之后记住上次成功模式 | 二维 / 三维 | 切换只影响后续绘制；修改已有对象请使用属性面板。 |
| 绘制方式 | DrawingMode | enum | 直线 | 直线 / 圆弧 / 自由曲线 | 圆弧按三点画，自由曲线逐点拾取经过点。 |
| 墙体厚度 | Width | double | 200 mm | > 模型容差 | 可直接输入，或点常用墙厚按钮。 |
| 绘制基线与偏移 | Baseline | group | 中心 / 0 | 中心 / 左边 / 右边；偏移可正可负 | 左右按绘制方向判断，正偏移向左。改厚度时保持所选基线。 |
| 二维填充 | Fill | group | 无填充 | 无填充 / Solid / 文档填充图案 | 二维模式可调填充缩放与旋转。 |
| 三维高度与底标高 | HeightElevation | group | 3000 mm / 0 | 高度 > 模型容差；底标高可正可负 | 只在三维建模时显示。 |

**输出**：独立的参数二维墙或三维墙。

**备注**：尺寸按当前 Rhino 文档单位显示；下列 mm、m 是等效物理尺寸示例。

`rsWall` 是二维／三维统一入口，`rsWall2D` 仍可直接打开同一窗口的二维模式。已完成的墙会保留；切换维度放弃当前未完成段，不自动转换现有墙。二维与三维墙不会互相交接。

窗口内还能“曲线转墙”“编辑已有”。三维页的“布尔开洞”需要闭合切割体，切割体保留；“取消开洞”仅恢复自由布尔洞口，不删除门窗或电梯洞口。

需要改变已有墙的二维／三维表示，请选墙，在属性面板选择“墙体表示”，再点“转换所选墙体”。可转换的附属门窗与电梯会随墙保留关联；二维双开门和门洞不能直接升为当前三维门。

配图或视频可能来自旧版界面，2.0 请以本文的入口、模式和参数说明为准。

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=115871892641774&bvid=BV1nw6QB5EBX&cid=35308962903&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 智能墙体（Wall）演示教学（B 站）"></iframe>
*RsTool · 智能墙体（Wall）演示教学（B 站）*

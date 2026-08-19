# rsQuickColor · 快速着色

> 模块：组织与选择 / 材质辅助

[← 返回命令完全手册](/RsTool命令手册)

**功能**：把所选颜色（含透明度）应用到选中对象的物体颜色/材质或所在图层的颜色/材质

**调用**：在 Rhino 命令行输入 `rsQuickColor`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsQuickColor
2. 在快速着色窗口选择颜色（调色板/配色模板）
3. 勾选应用目标（物体颜色/物体材质/图层颜色/图层材质）
4. 调整透明度后点击颜色即可应用到已选/待选对象

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 应用到物体颜色 | ApplyObjectColor | toggle | true |  | 默认勾选 |
| 应用到物体材质 | ApplyObjectMaterial | toggle | false |  |  |
| 应用到图层颜色 | ApplyLayerColor | toggle | false |  |  |
| 应用到图层材质 | ApplyLayerMaterial | toggle | false |  |  |
| 透明度 | Transparency | integer | 0 | 0 ~ 100 | TrackBar/NumericUpDown，0=不透明，100=全透明；内部存储为 0.0~1.0 |
| 配色模板 | ColorTemplate | list | architectural-neutral | 20 个内置模板 | 下拉选择调色板模板 |

**备注**：WinForms 窗口；若未预选对象会提示选择；设置持久化到 RSTool_QuickColor.json

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116754642639698&bvid=BV1U6jN6MELo&cid=39143082515&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 快速着色（Quick Color）演示教学（B 站）"></iframe>
*RsTool · 快速着色（Quick Color）演示教学（B 站）*

# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsPolylineStair2D：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/0be5eb04-840c-557a-8921-9dc350c217bd.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsPolylineStair2D · 自由二维楼梯（旧版入口）

> 模块：建筑 / 楼梯与坡道

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

自由二维楼梯已合并到多跑楼梯窗口，共用路径和尺寸设置。

现在使用 [`rsMultiFlightStairs`](/commands/rsMultiFlightStairs)。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：沿折线生成的 2D 楼梯平面（含踏步线与上下行标注），按分段类型区分梯段/平台

**交互流程**：

1. 命令行输入 rsPolylineStair2D
2. 设置踏步宽度、梯段宽度、下一段类型、上行方向
3. 依次点取折线各顶点（每段实时预览），回车结束生成

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 踏步宽度 | TreadWidth | double | 0.28 | >0 | 默认 0.28m（280mm） |
| 梯段宽度 | FlightWidth | double | 1.2 | >0 | 默认 1.2m（1200mm） |
| 下一段类型 | SegmentKind | list | 梯段 | 梯段/平台 | 绘制中可逐段切换 |
| 上行方向 | UpDirection | list | 反向 | 沿绘制顺序/反向 | 由 _upFollowsDrawOrder 决定，默认 false→列表第二项“反向” |

**备注**：点取折线顶点逐段生成；每段类型可在绘制中切换


:::

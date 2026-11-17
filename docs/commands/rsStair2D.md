# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsStair2D：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/d50f511b-bafd-4929-985b-c72f8c177ed4.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsStair2D · 二维楼梯（旧版入口）

> 模块：建筑 / 楼梯与坡道

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

二维双跑楼梯已合并到双跑楼梯窗口，可切换二维和三维。

现在使用 [`rsDoubleFlightStairs`](/commands/rsDoubleFlightStairs)。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：双跑楼梯 2D 平面符号（梯段、平台、上下行箭头与踏步线、尺寸标注）

**交互流程**：

1. 命令行输入 rsStair2D
2. 设置楼层高度、踏步宽/高、梯段宽、梯间宽、平台深、上楼侧
3. 指定梯段起点，移动光标确定走向与长度，点击生成

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 楼层高度 | FloorHeight | double | 3.0 | >0 | 默认 3.0m（按 3000mm 适配单位） |
| 踏步宽度 | TreadWidth | double | 0.28 | >0 | 默认 0.28m（280mm） |
| 踏步高度 | RiserHeight | double | 0.15 | >0 | 默认 0.15m（150mm） |
| 梯段宽度 | FlightWidth | double | 1.2 | >0 | 默认 1.2m（1200mm） |
| 梯间宽度 | StairwellWidth | double | 2.7 | ≥2×梯段宽 | 默认 2.7m（2700mm），自动不低于 2×FlightWidth |
| 平台深度 | LandingDepth | double | 1.2 | >0 | 默认 1.2m（1200mm） |
| 上楼侧 | UpSide | list | 左 | 左/右 |  |

**备注**：两跑楼梯；梯间宽自动不低于 2×梯段宽


:::

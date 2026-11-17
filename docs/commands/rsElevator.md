# <span class="rstool-command-icon rstool-command-icon--heading" title="rsElevator：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/4dec889c-c7c5-57e6-bb0c-bff0dc6044c3.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/4dec889c-c7c5-57e6-bb0c-bff0dc6044c3.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsElevator · 电梯（二维／三维）

> 模块：建筑 / 建筑构件

[← 返回命令目录](/commands/)

::: info 2.0 说明

二维和三维电梯统一在此绘制，原 rsElevator2D 不再独立调用。

[查看 2.0 命令变化与对照](/commands/v2)

:::

**功能**：在二维／三维墙上连续插入有宿主关联的电梯。二维输出平面符号，三维输出带空心轿厢、顶底板、门框及双扇门的独立参数对象。

**调用**：在 Rhino 命令行输入 `rsElevator`（打开设置窗口）

**交互流程**：

1. 输入 rsElevator，在窗口选择“自动”或固定二维／三维。
2. 选择轿厢尺寸预设，或输入轿厢宽深及门洞净宽；三维再设轿厢高和门洞高。
3. 把鼠标移到墙体附近，检查尺寸、位置和方向预览后点击，继续插入下一处。
4. 需要精确定位时使用距起点、距终点或垛宽；Esc 或关闭面板结束。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 绘制用途 | OutputMode | enum | 自动 | 自动 / 二维 / 三维 | 自动识别鼠标附近的墙体；也可固定维度。 |
| 沿墙定位 | PositionMode | enum | 鼠标 | 鼠标 / 距起点 / 距终点 / 垛宽 | 距起终点按墙轴线量取，可将中心、近边或远边对齐。垛宽量到洞口近边。 |
| 定位距离／墙垛宽 | PositionDistance | group | 1000 mm / 100 mm | 按墙长和洞口净空校验 | 垛宽从鼠标所在外露墙侧最近墙端或净转角量取；曲墙沿墙侧弧长。 |
| 轿厢宽／深／高 | Cabin | group | 1600 / 1600 / 2500 mm | 须满足完整轿厢占宽和净空 | 宽深在二维与三维共用；高度用于三维。 |
| 门洞宽／高 | DoorOpening | group | 900 / 2100 mm | 须与轿厢和宿主墙相容 | 实际墙洞按门洞净尺寸切割。 |
| 轿厢侧向 | CabinSide | bool | 按鼠标墙侧 | 可反转 | 交互底标高采用鼠标所在视口的当前工作平面。 |

**输出**：独立参数二维／三维电梯及宿主开口。

**备注**：尺寸按当前 Rhino 文档单位显示；下列 mm、m 是等效物理尺寸示例。

无需先选墙：把鼠标移到墙附近，看到预览后点击即可连续插入。自动模式会识别二维／三维墙，也可以手动锁定用途。插入结果是有宿主关联的独立参数对象；移动、删除或在属性面板改尺寸时，墙上的洞口会一起更新。

旧的二维独立输入命令已合并到统一入口，旧授权键继续兼容。尺寸仍要满足墙端、相邻洞口和净空要求，不能只按输入框可填范围判断是否能生成。

`rsElevator2D` 已合并到 `rsElevator`，不再是独立 Rhino 命令。三维电梯移动会重新寻找宿主并更新旧墙、新墙开口，删除后宿主恢复。电梯可随宿主墙在二维／三维间转换，保留关联和主要尺寸。

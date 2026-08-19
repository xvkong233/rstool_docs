# rsWall · 智能墙体

> 模块：建筑 / 三维墙体

[← 返回命令目录](/commands/)

**功能**：由曲线生成直线 / 弧线 / 样条智能墙体（可开洞 / 转曲线）

**调用**：在 Rhino 命令行输入 `rsWall`（命令行交互）

**交互流程**：

1. 选择曲线（一条或多条）
2. 按模式（直线 / 弧线 / 样条）依次拾点绘制墙体
3. 设置墙宽 / 墙高 / 偏移
4. 可转换为曲线或添加开洞
5. 生成智能墙体

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 墙宽 | Width | double | 0.2 | >0 | 单位：米 |
| 墙高 | Height | double | 3 | >0 | 单位：米 |
| 偏移 | Offset | double | 0.0 | 任意 | 单位：米 |
| 模式 | Mode | list | 0 | 直线\|弧线\|样条 | 0=Line, 1=Arc, 2=Spline |

**备注**：另含“转换为曲线”“添加开洞”命令行选项

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=115871892641774&bvid=BV1nw6QB5EBX&cid=35308962903&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 智能墙体（Wall）演示教学（B 站）"></iframe>
*RsTool · 智能墙体（Wall）演示教学（B 站）*

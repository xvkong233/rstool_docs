# rsTileMeshBlendByColor · 按颜色生成渐变表皮

> 模块：铺装表皮

[← 返回命令目录](/commands/)

**功能**：按顶点颜色权重在单元A/B之间混合铺设的网格

**调用**：在 Rhino 命令行输入 `rsTileMeshBlendByColor`（打开设置窗口）

**交互流程**：

1. 打开“网格单元混合(按颜色)”窗口
2. 选取目标网格、参照多边形、单元A、单元B
3. 点击“启动网格颜色绘制”后在目标网格上按颜色绘制混合权重
4. 应用 / 取消

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 隐藏目标网格 | Hide target mesh | toggle | false |  |  |
| 旋转参照多边形90° | Rotate ref polyline 90° | toggle | false |  |  |
| 采样方式 | Sample mode | list | 流动后UnitA顶点 | 流动后UnitA顶点 / 目标网格面中心 |  |
| 反转颜色映射 | Invert color mapping | toggle | false |  |  |
| 组合结果网格 | Join result meshes | toggle | false |  |  |
| 统一网格UV方向 | Unify mesh UV direction | toggle | false |  |  |

**备注**：默认白色接近 TypeA、黑色接近 TypeB；未绘制默认为白色。基于顶点色作为混合权重

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116675823277532&bvid=BV1gTVf6SEWx&cid=38781780987&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 按颜色生成渐变表皮（Tile Mesh Blend By Color）演示教学（B 站）"></iframe>
*RsTool · 按颜色生成渐变表皮（Tile Mesh Blend By Color）演示教学（B 站）*

# rsBoids · 类群体运动分析

> 模块：物理模拟 / 动力学

[← 返回命令完全手册](/RsTool命令手册)

**功能**：群体运动粒子（轨迹曲线，可 Bake 为 NURBS 曲线；或按位置批量放置实例对象）

**调用**：在 Rhino 命令行输入 `rsBoids`（打开设置窗口）

**交互流程**：

1. 弹出群体运动模拟窗体（Eto Forms）
2. 绘制模拟边界 Box
3. （可选）从面/网格发射粒子、拾取避障物体、吸引源与实例对象
4. 设置分离/对齐/聚集等群体参数与预设
5. 启动模拟实时预览，可 Bake 轨迹曲线或按粒子位置批量放置实例

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 粒子数量 | boidCount | integer | 50 | 1 – 10000 | 模拟中的 boid 数量 |
| 分离权重 | separationWeight | double | 1.5 | 0 – 10，增量 0.1，2 位小数 | 避免彼此靠太近的强度 |
| 对齐权重 | alignmentWeight | double | 1.0 | 0 – 10，增量 0.1，2 位小数 | 跟随邻居方向的强度 |
| 聚集权重 | cohesionWeight | double | 1.0 | 0 – 10，增量 0.1，2 位小数 | 向群体中心聚拢的强度 |
| 感知半径 | perceptionRadius | double | 50.0 | 0.1 – 10000（按模型单位） | 感知邻居的距离范围 |
| 最大速度 | maxSpeed | double | 10.0 | 0.1 – 1000（按模型单位） | 每个粒子最大移动速度 |
| 最大力 | maxForce | double | 0.3 | 0.01 – 10，增量 0.05，2 位小数 | 最大转向力度 |
| 避障权重 | avoidanceWeight | double | 2.0 | 0 – 10，增量 0.1，2 位小数 | 避开障碍物的力度 |
| 吸引力 | attractionWeight | double | 0.0 | 0 – 10，增量 0.1，2 位小数 | 围绕吸引源（点/线）飞行的强度 |
| 每帧步数 | stepsPerFrame | integer | 1 | 1 – 10 | 每次界面刷新推进的模拟步数 |
| 轨迹长度 | trailLength | integer | 500 | 2 – 5000 | 每个粒子保留的轨迹点数量 |
| 参数预设 | preset | list | Balanced | Balanced / TightFlock / LooseWander / FastSchool | 一键套用一组群体运动参数 |

**备注**：边界 Box 为必选项；支持从曲面发射、避障、吸引源与图块/SubD 实例。

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116749424924802&bvid=BV1gpJK6nEg2&cid=39120932166&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 类群体运动分析（Boids）演示教学（B 站）"></iframe>
*RsTool · 类群体运动分析（Boids）演示教学（B 站）*

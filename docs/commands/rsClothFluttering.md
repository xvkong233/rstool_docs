# rsClothFluttering · 布料风动分析

> 模块：物理模拟 / 动力学

[← 返回命令目录](/commands/)

**功能**：受风与重力作用飘动的布料网格（橙色透明预览，可 Bake）

**调用**：在 Rhino 命令行输入 `rsClothFluttering`（打开设置窗口）

**交互流程**：

1. 弹出布料风动模拟窗体（Eto Forms）
2. 拾取一块或多块布料网格（Mesh）
3. 拾取锚固点（Point 对象）锁定顶点
4. 设置风向/风力、重力、弹力、阻尼与碰撞参数
5. 启动模拟实时预览，最后 Bake 为网格

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 风向 X | windX | double | 1 | -1 – 1（自动归一化） | 风向向量分量 |
| 风向 Y | windY | double | 0 | -1 – 1（自动归一化） | 风向向量分量 |
| 风向 Z | windZ | double | 0.2 | -1 – 1（自动归一化） | 风向向量分量 |
| 风力 | windStrength | double | 4.0 | 0 – 10000，增量 0.5，2 位小数 | 风压与飘动扰动强度 |
| 重力方向 X | gravityX | double | 0 | -1 – 1（自动归一化） | 重力方向向量分量 |
| 重力方向 Y | gravityY | double | 0 | -1 – 1（自动归一化） | 重力方向向量分量 |
| 重力方向 Z | gravityZ | double | -1 | -1 – 1（自动归一化） | 默认 -1 表示向世界 Z 负方向下落 |
| 重力大小 | gravityStrength | double | 9.8 | 0 – 10000，增量 0.5，2 位小数 | 重力加速度大小 |
| 弹力 | stiffness | double | 180.0 | 1 – 5000，增量 10，1 位小数 | 边弹簧约束强度 |
| 阻尼 | damping | double | 0.985 | 0.80 – 0.999，增量 0.005，3 位小数 | 速度阻尼，越接近 1 惯性越强 |
| 碰撞厚度 | collisionThickness | double | 0.03 | 0 – 100000（按模型单位） | 多块布料间最小分离距离 |
| 避让距离 | collisionAvoidance | double | 0.09 | 0 – 100000（按模型单位） | 进入该范围提前柔和推开 |
| 碰撞力度 | collisionStrength | double | 0.45 | 0 – 1，增量 0.05，2 位小数 | 碰撞/避让推开力度 |
| 碰撞范围 | collisionSpan | integer | 1 | 0 – 50 | 按拾取顺序限制碰撞检测范围；0=所有布料互检，1=相邻一片 |
| 每帧步数 | stepsPerFrame | integer | 3 | 1 – 30 | 每次界面刷新推进的物理步数 |

**备注**：支持多块布料相互碰撞；启动模拟后自动隐藏原始网格。

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116749827577150&bvid=BV16HJN6wEJt&cid=39121259158&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 布料风动分析（Cloth Fluttering）演示教学（B 站）"></iframe>
*RsTool · 布料风动分析（Cloth Fluttering）演示教学（B 站）*

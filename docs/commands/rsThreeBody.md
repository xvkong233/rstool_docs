# rsThreeBody · 三体运动模拟

> 模块：趣味 / 互动娱乐

[← 返回命令完全手册](/RsTool命令手册)

**功能**：实时预览三体引力运动（球体+轨迹+速度向量），可 Bake 轨迹为 NURBS 曲线

**调用**：在 Rhino 命令行输入 `rsThreeBody`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsThreeBody
2. 打开三体模拟 Eto 窗口
3. 选择初始预设（8字形/等边三角形/随机）
4. 调整物理与显示参数
5. 点击 启动/暂停 实时预览
6. （可选）点击 Bake 轨迹 生成为 NURBS 曲线

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 质量 m1 | Mass1 | double | 1.0 | 0.01~10000 | 体1质量 |
| 质量 m2 | Mass2 | double | 1.0 | 0.01~10000 | 体2质量 |
| 质量 m3 | Mass3 | double | 1.0 | 0.01~10000 | 体3质量 |
| 引力常数 G | Gravity | double | 1.0 | 0.0~1000 | 引力常数 |
| 时间步 dt | TimeStep | double | 0.005 | 0.0001~0.5 | 积分步长，越小越稳定 |
| 初速度倍率 | VelocityScale | double | 1.0 | 0.0~5.0 | 初速度缩放，1.0=经典解 |
| Z 轴扰动 | ZPerturbation | double | 0.0 | 0.0~2.0 | >0 进入三维混沌 |
| 显示缩放 | DisplayScale | double | 30.0 | 0.1~10000 | 纯显示倍率，不影响物理 |
| 球体半径 | BodyRadius | double | 1.0（按模型单位缩放） | 0.01~1000 | 预览球体显示半径 |
| 每帧步数 | StepsPerFrame | integer | 4 | 1~50 | 每帧推进的物理步数 |
| 轨迹长度 | TrailLength | integer | 2000 | 10~50000 | 每体保留轨迹点数 |
| 记录轨迹 | RecordTrails | toggle | true | 开/关 | 是否记录并可 Bake 轨迹 |
| 显示速度向量 | ShowVelocity | toggle | true | 开/关 | 是否绘制速度方向箭头 |
| 初始预设 | Preset | list | Figure8 | Figure8/Lagrange/Random | 初始条件预设 |

**备注**：采用 RK4 积分；经典预设（8字形/等边三角形）为稳定解

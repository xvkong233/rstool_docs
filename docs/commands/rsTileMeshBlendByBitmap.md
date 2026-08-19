# rsTileMeshBlendByBitmap · 按贴图生成渐变表皮

> 模块：几何 / 铺装表皮

[← 返回命令目录](/commands/)

**功能**：按参考物体灰度在单元A/B之间混合铺设的网格

**调用**：在 Rhino 命令行输入 `rsTileMeshBlendByBitmap`（打开设置窗口）

**交互流程**：

1. 打开“网格单元混合(按贴图)”窗口
2. 选取目标网格、参照多边形、单元A、单元B
3. 选取参考物体（带颜色贴图的 Mesh 或 Brep）
4. 按参考物体灰度混合
5. 应用 / 取消

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 隐藏目标网格 | Hide target mesh | toggle | false |  |  |
| 旋转参照多边形90° | Rotate ref polyline 90° | toggle | false |  |  |
| 采样方式 | Sample mode | list | 流动后UnitA顶点 | 流动后UnitA顶点 / 目标网格面中心 |  |
| 反转灰度映射 | Invert grayscale mapping | toggle | false |  |  |
| 组合结果网格 | Join result meshes | toggle | false |  |  |
| 统一网格UV方向 | Unify mesh UV direction | toggle | false |  |  |

**备注**：默认白色接近 TypeA、黑色接近 TypeB；参考物体需为带颜色贴图的 Mesh 或 Brep

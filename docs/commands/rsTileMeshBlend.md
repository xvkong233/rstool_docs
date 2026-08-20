# rsTileMeshBlend · 网格铺装混接

> 模块：铺装表皮

[← 返回命令目录](/commands/)

**功能**：按 PolyPrism 空间变形将单元网格铺设到目标面（每面一个），可合并为单一网格

**调用**：在 Rhino 命令行输入 `rsTileMeshBlend`（打开设置窗口）

**交互流程**：

1. 打开“网格单元混合”窗口
2. 选取目标网格（可多个）
3. 选取参照多边形（polyline）
4. 选取单元A
5. 选取单元B（可与A相同）
6. 若 A≠B：选取干扰曲线 + 映射曲线
7. 实时橙色预览
8. 应用 / 取消

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 隐藏目标网格 | Hide target mesh | toggle | false |  |  |
| 旋转参照多边形90° | Rotate ref polyline 90° | toggle | false |  |  |
| 采样方式 | Sample mode | list | 流动后UnitA顶点 | 流动后UnitA顶点 / 目标网格面中心 |  |
| 组合结果网格 | Join result meshes | toggle | false |  |  |
| 统一网格UV方向 | Unify mesh UV direction | toggle | false |  |  |

**备注**：无数值步进器；A=B 时为单一单元流动，A≠B 时按曲线映射混合

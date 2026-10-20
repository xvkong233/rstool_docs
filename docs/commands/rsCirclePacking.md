# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsCirclePacking：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/7f4264d5-a6d6-4ae9-8ea6-751be5131c02.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsCirclePacking · 圆形填充

> 模块：物理模拟 / 找形与松弛

[← 返回命令目录](/commands/)

**功能**：贴合网格表面、互不重叠的圆曲线集合

**调用**：在 Rhino 命令行输入 `rsCirclePacking`（命令行交互）

**交互流程**：

1. 选择目标网格（Mesh）
2. 框选若干点（≥2）作为圆打包起点
3. 输入最小半径
4. 输入最大半径
5. 运行排斥-投影求解（固定 1500 步），将圆曲线 Bake 到文档

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 最小半径 | minRadius | double | 1.0 | >0（按模型单位缩放） | 每个圆随机半径下限；静态默认 lastMinR=1 |
| 最大半径 | maxRadius | double | 3.0 | >0（按模型单位缩放） | 每个圆随机半径上限；静态默认 lastMaxR=3 |

**备注**：圆自动投影并贴合网格法线；固定迭代 1500 步。

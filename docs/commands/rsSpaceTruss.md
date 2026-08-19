# rsSpaceTruss · 双层网架

> 模块：建筑 / 建筑构件

[← 返回命令目录](/commands/)

**功能**：基于基础 Mesh 生成单层 / 双层空间网架（杆件与节点）

**调用**：在 Rhino 命令行输入 `rsSpaceTruss`（打开设置窗口）

**交互流程**：

1. 打开参数化网架表单
2. 选择基础 Mesh
3. 设置结构类型 / 模式 / 杆件 / 节点及尺寸
4. 实时预览并生成网架（单层或双层）

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 结构类型 | StructureType | list | 1 | 单层网架\|双层网架 | 0=单层(Single Layer), 1=双层(Double Layer) |
| 双层模式 | Mode | list | 0 | 对应节点连接\|面斜杆+Dual上弦 | 仅双层时可用；0=Corresponding Nodes, 1=Face Diagonals+Dual Top |
| 单层杆件 | MemberType | list | 0 | 圆管\|方管 | 仅单层时可用；0=Round Pipe, 1=Square Tube |
| 方管节点 | NodeType | list | 0 | 球形节点\|圆柱节点 | 仅单层方管时可用；0=Sphere, 1=Cylinder |
| 间隙距离 | GapDistance | double | 0 | 任意(含负值) | 单位：米 |
| 偏移距离 | OffsetDistance | double | 1.0 | 任意(含负值) | 单位：米 |
| 管半径 | PipeRadius | double | 0.03 | >0 (min 0.001) | 单位：米 |
| 方管宽度 | SquareTubeWidth | double | 0.06 | >0 (min 0.001) | 单位：米 |
| 方管高度 | SquareTubeHeight | double | 0.08 | >0 (min 0.001) | 单位：米 |
| 节点半径 | NodeRadius | double | 0.08 | >0 (min 0.001) | 单位：米 |
| 合并为单个Mesh | JoinResult | bool | false | true\|false | 将结果合并为单一 Mesh |

**备注**：参数可见性随结构类型与杆件类型联动

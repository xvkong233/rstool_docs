# rsBlockObjectsToLayer · 块对象归层

> 模块：组织与选择 / 图层

[← 返回命令目录](/commands/)

**功能**：将指定范围的图块实例（含图块定义内部及嵌套子块）移动到目标图层，并把随层材质固化到物体

**调用**：在 Rhino 命令行输入 `rsBlockObjectsToLayer`（命令行交互）

**交互流程**：

1. 命令行输入 rsBlockObjectsToLayer
2. 在命令行选择处理范围（全部图块/仅选中实例/同定义全部实例/所选图层全部图块）
3. 按需选择图块实例
4. 在弹出的图层选择对话框中选择目标图层
5. 程序将匹配图块（含嵌套）移入目标图层并固化材质

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 处理范围 | ProcessingScope | list | AllBlocks | AllBlocks / SelectedInstances / SameDefinition / SameLayer | 命令行 GetOption 选项；非 AllBlocks 时需后续选择图块实例 |

**备注**：目标图层选择使用 ShowSelectLayerDialog；固化材质逻辑同 rsMoveLayerObjs

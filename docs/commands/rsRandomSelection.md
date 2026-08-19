# rsRandomSelection · 随机选择

> 模块：组织与选择 / 选择

[← 返回命令目录](/commands/)

**功能**：按给定百分比随机选中所选对象中的一部分

**调用**：在 Rhino 命令行输入 `rsRandomSelection`（命令行交互）

**交互流程**：

1. 命令行输入 rsRandomSelection
2. 选择要进行随机选择的物体
3. 输入随机选择百分比
4. 回车后按百分比随机选中物体

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 随机选择百分比 | per | double | 50 | 0 ~ 100 | GetNumber 输入，SetLowerLimit(0) SetUpperLimit(100)；记忆上次值 lastPerNum |

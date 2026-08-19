# rsCurtain · 幕墙

> 模块：建筑 / 建筑构件

[← 返回命令目录](/commands/)

**功能**：基于基础曲面与竖挺参考线生成幕墙（外框 / 竖挺 / 扣盖）

**调用**：在 Rhino 命令行输入 `rsCurtain`（打开设置窗口）

**交互流程**：

1. 选择基础曲面（Brep）
2. （可选）选择一级 / 二级竖挺参考线
3. 在对话框中设置外框 / 竖挺 / 扣盖尺寸与幕墙模式
4. 生成幕墙

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 外框宽度 | BoderWidth | double | 0.04 | >0 | 单位：米 |
| 外框厚度 | BoderThick | double | 0.3 | >0 | 单位：米 |
| 扣盖宽度 | CapWidth | double | 0.04 | >0 | 单位：米 |
| 扣盖厚度 | CapThick | double | 0.04 | >0 | 单位：米 |
| 一级竖挺宽度 | FirstMullionWidth | double | 0.04 | >0 | 单位：米 |
| 一级竖挺厚度 | FirstMullionThick | double | 0.3 | >0 | 单位：米 |
| 一级扣盖宽度 | FirstCapWidth | double | 0.04 | >0 | 单位：米 |
| 一级扣盖厚度 | FirstCapThick | double | 0.04 | >0 | 单位：米 |
| 二级竖挺宽度 | SecondMullionWidth | double | 0.04 | >0 | 单位：米 |
| 二级竖挺厚度 | SecondMullionThick | double | 0.3 | >0 | 单位：米 |
| 二级扣盖宽度 | SecondCapWidth | double | 0.04 | >0 | 单位：米 |
| 二级扣盖厚度 | SecondCapThick | double | 0.04 | >0 | 单位：米 |
| 幕墙模式 | CurtainMode | int | 0 | 枚举索引 | 幕墙模式枚举（见源码） |

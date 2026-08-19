# AddSpotLight

> 模块：GH组件 / Light

[← 返回命令目录](/commands/)

![图标](../assets/gh-icons/AddSpotLights_24.png)

**功能**：根据输入位置与方向批量向 Rhino 文档添加聚光灯。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Light」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 是否生成聚光灯 | Run | 布尔 |  | 单值 |  |
| 聚光灯位置点 | LocationPt | 点 |  | 列表 |  |
| 聚光灯目标点 | TargetPt | 点 |  | 列表 |  |
| 聚光灯半径 | LightRadius | 数值 |  | 列表 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

所属 GH 分组：RSTool / Light

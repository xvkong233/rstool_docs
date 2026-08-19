# Preview Materials

> 模块：GH组件 / Display

[← 返回命令目录](/commands/)

![图标](../assets/gh-icons/PreviewMaterials_24.png)

**功能**：在 Grasshopper 预览中显示输入材质。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Display」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 待显示材质用的Mesh物件 | Mesh | 网格 |  | 列表 |  |
| 默认颜色 | Color | 颜色 |  | 列表（可选） |  |
| 透明度 0-1 | Transparency | 数值 |  | 列表 |  |
| 漫反射贴图文件 | Diffuse | 文字 |  | 列表（可选） |  |
| 透明通道贴图文件 | Transparency Map | 文字 |  | 列表（可选） |  |
| HDR 贴图文件 | HDR Map | 文字 |  | 列表（可选） |  |
| 凹凸贴图文件 | Bump Map | 文字 |  | 列表（可选） |  |
| 高光强度 0-1 | Shininess | 数值 |  | 列表（可选） |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

所属 GH 分组：RSTool / Display

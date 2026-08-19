# MaterialPlus

> 模块：GH组件 / Display

[← 返回命令完全手册](/RsTool命令手册)

![图标](../assets/gh-icons/MaterialPlus_24.png)

**功能**：创建包含基础颜色与贴图设置的 Rhino 材质。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Display」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 漫反射颜色 | DiffuseColour | 颜色 | Color.White | 单值 |  |
| 漫反射贴图 | DiffuseTex | 文字 |  | 单值（可选） |  |
| AmbientColour | AmbientColour | 颜色 | Color.Black | 单值（可选） |  |
| 发光颜色 | EmissionColour | 颜色 | Color.Black | 单值（可选） |  |
| 反射度 | Reflection | 数值 | 0 | 单值 |  |
| 光滑度 | Smoothness | 数值 | 0 | 单值 |  |
| 透明度 | Transparency | 数值 | 0.0 | 单值 |  |
| 透明通道贴图 | TransparencyTex | 文字 |  | 单值（可选） |  |
| 凹凸贴图，请确保显示模式中开启了使用高级GPU照明选项 | BumpTex | 文字 |  | 单值（可选） |  |
| 菲涅尔反射是否开启 | FresnelReflections | 布尔 | 否 | 单值 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

输出参数：
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| Material | 通用 | 材质 |

所属 GH 分组：RSTool / Display

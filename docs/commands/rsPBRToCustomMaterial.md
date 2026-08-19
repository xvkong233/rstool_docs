# rsPBRToCustomMaterial · PBR转自定义材质

> 模块：组织与选择 / 材质辅助

[← 返回命令目录](/commands/)

**功能**：把所选对象使用的 PBR 材质转换为 Rhino 自定义（旧式）材质，保留基础色、基础贴图与透明度，反射设为 0

**调用**：在 Rhino 命令行输入 `rsPBRToCustomMaterial`（命令行交互）

**交互流程**：

1. 命令行输入 rsPBRToCustomMaterial
2. 选择要将 PBR 材质转为自定义材质的物体
3. 程序把其 PBR 材质转换为 Rhino 自定义材质（反射清零、保留基色/基色贴图/透明度）

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：仅处理 IsPhysicallyBased 的材质；非 PBR 物体被跳过

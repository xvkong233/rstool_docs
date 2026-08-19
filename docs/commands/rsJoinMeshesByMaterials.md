# rsJoinMeshesByMaterials · 按材质合并网格

> 模块：几何 / 网格

[← 返回命令完全手册](/RsTool命令手册)

**功能**：按材质合并后的网格组

**调用**：在 Rhino 命令行输入 `rsJoinMeshesByMaterials`（命令行交互）

**交互流程**：

1. 自动枚举文档中所有网格（ObjectEnumeratorSettings）
2. 按材质哈希分组
3. 每组合并为一个网格

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：无需手动选择，自动处理文档内全部网格

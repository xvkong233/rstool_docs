# rsPurgeDynamicComponentCache · 清理动态组件缓存

> 模块：动态组件 / 维护

[← 返回命令目录](/commands/)

**功能**：命令行报告清理的派生块数量。

**调用**：在 Rhino 命令行输入 `rsPurgeDynamicComponentCache`（命令行交互）

**交互流程**：

1. 命令行输入 rsPurgeDynamicComponentCache，清理动态组件中未被引用的派生块。
2. 回显“已清理 N 个无引用动态组件派生块”。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：仅删除无引用派生块，不影响仍在使用中的组件实例。适合在大量增删组件尺寸/变体后瘦身文档。

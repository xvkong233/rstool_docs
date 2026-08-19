# rsClean · 深度清理

> 模块：辅助工具 / 系统工具

[← 返回命令目录](/commands/)

**功能**：清理/合并文档中的未使用材质、空图层、未使用块定义以及同名重复项

**调用**：在 Rhino 命令行输入 `rsClean`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsClean
2. 打开 rsClean 对话框
3. 勾选要执行的清理/合并项
4. （可选）点击 分析 查看统计摘要
5. 点击 执行清理

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 清理未使用材质 | RemoveUnusedMaterials | toggle | true | 开/关 | 删除文档中未被引用的材质 |
| 清理空图层 | RemoveEmptyLayers | toggle | true | 开/关 | 删除空图层 |
| 清理未使用块定义 | RemoveUnusedBlockDefinitions | toggle | true | 开/关 | 删除未被引用的块定义 |
| 合并同名材质 | MergeDuplicateMaterials | toggle | true | 开/关 | 按名称合并重复材质 |
| 合并同名图层 | MergeDuplicateLayers | toggle | true | 开/关 | 按名称合并重复图层 |
| 合并同名块定义 | MergeDuplicateBlockDefinitions | toggle | true | 开/关 | 按名称合并重复块定义 |

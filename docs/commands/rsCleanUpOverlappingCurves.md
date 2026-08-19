# rsCleanUpOverlappingCurves · 清理重叠曲线

> 模块：几何 / 曲线

[← 返回命令目录](/commands/)

**功能**：删除重复/重叠曲线并生成的合并曲线(统计删除/生成/跳过组数)

**调用**：在 Rhino 命令行输入 `rsCleanUpOverlappingCurves`（命令行交互）

**交互流程**：

1. 命令行输入 rsCleanUpOverlappingCurves
2. 自动分析文档中所有可编辑曲线
3. 按 Esc 可取消
4. 自动删除重复/重叠曲线并合并，输出结果

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：无交互参数，处理全部曲线；分析阶段支持 Esc 取消，取消时文档不发生更改。

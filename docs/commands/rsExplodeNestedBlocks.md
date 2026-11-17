# <span class="rstool-command-icon rstool-command-icon--heading" title="rsExplodeNestedBlocks：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/dd89ce33-660e-5e57-9cf4-a6d0ba4186b8.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/dd89ce33-660e-5e57-9cf4-a6d0ba4186b8.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsExplodeNestedBlocks · 炸开嵌套块

> 模块：辅助工具 / 块操作

[← 返回命令目录](/commands/)

**功能**：递归炸开所有嵌套图块引例，使其还原为最底层的几何/非嵌套引用

**调用**：在 Rhino 命令行输入 `rsExplodeNestedBlocks`（命令行交互）

**交互流程**：

1. 命令行输入 rsExplodeNestedBlocks
2. 查找文档中所有图块引例
3. 逐层递归炸开嵌套图块
4. 重绘视图

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

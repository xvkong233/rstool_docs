# <span class="rstool-command-icon rstool-command-icon--heading" title="rsGroupToBlock：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/4cd43346-0c7e-5fc2-8947-8fc359ab6542.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/4cd43346-0c7e-5fc2-8947-8fc359ab6542.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsGroupToBlock · 组转块

> 模块：辅助工具 / 块操作

[← 返回命令目录](/commands/)

**功能**：将文档中所有组由内而外递归转换为嵌套块定义（与 SketchUp 组件兼容）

**调用**：在 Rhino 命令行输入 `rsGroupToBlock`（命令行交互）

**交互流程**：

1. 命令行输入 rsGroupToBlock
2. 将组内裸物体逐一转为独立块（原子化）
3. 递归把组容器化为嵌套大块（由内而外）
4. 继承父组关系并删除原物体/空组

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

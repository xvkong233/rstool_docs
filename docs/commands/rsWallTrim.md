# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallTrim：右键点击 rsWallExtend 按钮" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/f932fdaf-631b-543f-a6df-30a5680999b6.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/f932fdaf-631b-543f-a6df-30a5680999b6.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallTrim · 修剪墙体

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

> 右键点击工具栏中的 [rsWallExtend](./rsWallExtend) 按钮可运行本命令；这里显示的是它们共用的按钮图标。

**功能**：以一堵有限边界墙为界，逐点选择其他墙要删除的部分，统一修剪并保留门窗关联。

**调用**：在 Rhino 命令行输入 `rsWallTrim`（命令行交互）

**交互流程**：

1. 先选择一堵边界墙。
2. 逐一点击其他同维度墙需要删除的部分。
3. 回车一次提交本批修剪。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**输出**：更新后的智能墙与原有关联对象。

**备注**：不能删除或切穿门窗、电梯完整占宽。无实际相交或重合无法判断时会拒绝。

统一入口按所选墙真实二维／三维身份工作，混选不同维度会拒绝。

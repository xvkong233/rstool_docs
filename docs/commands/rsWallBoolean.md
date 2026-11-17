# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallBoolean：右键点击 rsWallRemoveHole 按钮" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/2872ff54-efe1-54ca-a913-24676dd290c9.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/2872ff54-efe1-54ca-a913-24676dd290c9.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallBoolean · 墙体布尔开洞

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

> 右键点击工具栏中的 [rsWallRemoveHole](./rsWallRemoveHole) 按钮可运行本命令；这里显示的是它们共用的按钮图标。

**功能**：用闭合实体在三维智能墙上制作自由洞口，保持墙体参数对象和门窗关联。

**调用**：在 Rhino 命令行输入 `rsWallBoolean`（命令行交互）

**交互流程**：

1. 输入 rsWallBoolean，选择三维智能墙。
2. 选择与墙实际相交的闭合切割实体。
3. 确认生成；切割实体保留。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**输出**：带自由洞口的三维智能墙。

**备注**：也可在 rsWall 三维面板点“布尔开洞”。需要恢复自由洞口时使用 rsWallRemoveHole 或“取消开洞”。门窗、电梯开口由各自宿主对象管理。

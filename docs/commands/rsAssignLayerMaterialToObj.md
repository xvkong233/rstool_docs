# <span class="rstool-command-icon rstool-command-icon--heading" title="rsAssignLayerMaterialToObj：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/156d11bf-f2ff-517c-907e-11cc75903b06.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/156d11bf-f2ff-517c-907e-11cc75903b06.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsAssignLayerMaterialToObj · 图层材质赋给对象

> 模块：组织与选择 / 图层

[← 返回命令目录](/commands/)

**功能**：把目标图层（含图块内部）中材质来源为“随层”的对象改为使用图层材质（随物体）

**调用**：在 Rhino 命令行输入 `rsAssignLayerMaterialToObj`（命令行交互）

**交互流程**：

1. 命令行输入 rsAssignLayerMaterialToObj
2. 选择物体以指定要更新的图层（支持图块）
3. 程序将所选及图块内部图层中“随层”材质的对象改为“随物体”并赋该图层材质

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：支持递归处理图块定义内对象

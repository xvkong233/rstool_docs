# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="当前工具栏中无对应图标" aria-hidden="true"></span> rsStairToGeometry · 楼梯转普通物体

> 模块：建筑 / 楼梯与坡道

[← 返回命令目录](/commands/)

> 当前工具栏中没有此命令的对应图标。横线仅表示暂无图标，不是实际按钮；请通过命令行调用。

**功能**：把参数三维楼梯转成普通 Brep 构件，便于接入只支持普通几何的后续流程。

**调用**：在 Rhino 命令行输入 `rsStairToGeometry`（命令行交互）

**交互流程**：

1. 输入 rsStairToGeometry，选择一座或多座参数三维楼梯。
2. 确认转换；必要时 Undo 恢复参数对象。

**参数**：

> 此命令无需设置数值参数，按上方流程操作即可；没有独立设置窗口。

**输出**：普通楼梯 Brep 构件。

**备注**：保留整体位置、图层、分组、用户属性和构件外观。扶手原本可能是开放 Brep，转换不会强制封闭。转成普通几何后不再用楼梯属性页改尺寸。

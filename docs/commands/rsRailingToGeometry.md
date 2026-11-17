# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--missing" title="当前工具栏中无对应图标" aria-hidden="true"></span> rsRailingToGeometry · 参数栏杆转普通物体

> 模块：建筑 / 建筑构件

[← 返回命令目录](/commands/)

> 当前工具栏中没有此命令的对应图标。横线仅表示暂无图标，不是实际按钮；请通过命令行调用。

**功能**：将 rsRailing 参数对象转为完整普通几何，删除源对象，可一次撤销恢复。

**调用**：在 Rhino 命令行输入 `rsRailingToGeometry`（命令行交互）

**交互流程**：

1. 选择一个或多个 rsRailing 参数栏杆，运行 rsRailingToGeometry。
2. 按当前已应用造型输出全部普通封闭 Brep 构件，并删除源参数栏杆。
3. 转换后可使用 Rhino 的普通实体编辑；一次 Undo 恢复参数栏杆。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 输入对象 | Source | object | 已有参数对象 | rsRailing | 读取已经应用并保存的造型，不会把未应用的预览当作输出。 |
| 源对象处理 | Source handling | action | 删除源参数对象 | 一次 Undo / Redo | 输出完整普通构件，并删除参数源；转换后不再通过原参数页修改。 |

**输出**：完整普通封闭 Brep 构件，保留位置、图层、分组、业务用户属性、构件颜色与透明度。

**备注**：属性页“转为普通物体”和此命令作用相同，本命令支持多选。转换后不再保留可编辑的栏杆配方，建议先保存一份参数模型。只需要出二维图或取边线时，使用属性页的几何读取即可，不必提前转换。关闭创建窗口中的“生成 rsRailing 参数对象”只影响新生成结果，不会转换已有栏杆。

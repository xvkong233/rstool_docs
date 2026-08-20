# Component Labels

> 模块：GH组件 / Util

[← 返回命令目录](/commands/)

![图标](../assets/gh-icons/ComponentLabels_24.png)

**功能**：在 Grasshopper 组件旁显示浮动名称标签，并支持例外配置。

![Component Labels 实际显示效果：在 CanvasTransparent 透明化后的 Grasshopper 画布上，每个运算器上方都浮着一行描述该运算器用途的灰色英文/中文标签——从左到右、自上而下可以看到 Define 5 points / Range / Interpolate points / Display coloured points / Define 3 colours / Colour Swatch / Colour / Interpolate colours，这些标签分两行排布，刚好覆盖运算器的描述文字其位置可在 hover 菜单或 Grasshopper 内 Display → Draw Icons 调整](../assets/ComponentLabels/image1.png)
*Component Labels 开启后：画布上每个运算器顶部出现一行灰色注释用于说明其作用*

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Util」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| List of component names to exclude | Exceptions | 文字 |  | 列表（可选） |  |

**备注**：Component Labels 是个非常实用的小工具——一句话定位：让 Grasshopper 画布上每个运算器顶部都自动浮现一行英文/中文标签，标注该运算器的用途（类似编程 IDE 的 inline document / tooltip 永久显示版）。

## 一、典型使用流程
1. 在 Grasshopper 画布里，从 RSTool 标签的「Util」分组下找到该组件，拖入画布。
2. 默认激活状态下，不需要接任何端口——每个运算器顶部都会自动浮现对应标签。
3. 想关掉某一类标签（比如看到 Prefix / Suffix / Panel 一类内置运算器本身就懂的不需要标注），向 `Exceptions` 输入端口接入要排除的运算器名称（文字列表），画布上即隐藏对应标签。
4. 不再需要看标签时，把运算器右键 → Disable 或直接从画布上删掉即可，画布恢复默认外观。

## 二、参数详解
| 输入端口 | 含义 | 默认 | 取值 |
| --- | --- | --- | --- |
| Exceptions | 要排除的运算器名称列表（不显示标签） | 空 | 文字列表（可选），例：`["Panel","Number Slider"]` |
该运算器无输出端口（属于显示型开关，结果就是画布视觉变化）。

## 三、典型场景
1. **教学 / 出教程录屏**：录 GH 建模教程时要让观众一眼看清每个运算器的作用，Component Labels 配合 CanvasTransparent 一开，所有运算器的功能一目了然，观众不用猜节点是干嘛的。
2. **新人接手旧文件**：接手别人写的复杂 GH 文件，新人一脸懵不知道哪个运算器干嘛。Component Labels 一开，每个节点的功能都顶上注释，省去一个个右键看 Help / 进 Help 文档的麻烦。
3. **Code Review / 评审会**：把 GH 文件丢给别人评审时，对方一眼看不懂运算器用途，标签让评审效率提升一大截。
4. **临时调试 / 大文件重读**：隔一段时间回头看自己写的 GH 文件（长时间没看），标签能快速想起来每个运算器的用途，避免从头读逻辑。

## 四、注意事项
1. Component Labels 只会让运算器顶部出现说明文字，不会改变运算器本身的运行逻辑；任何连线、求解、运算结果都与原始一致。
2. 标签字体大小、透明度、字色等外观由 Grasshopper 全局设置控制（Display → Canvas → Font Size 等），本运算器本身不提供样式端口。
3. `Exceptions` 端口接受的是运算器的「类名 / 内部名」（如 `Panel`），不一定是画布上显示的中文标签。拿不准时先留空让全显示，再用 Display → Draw Full Names 校对内部名。

所属 GH 分组：RSTool / Util

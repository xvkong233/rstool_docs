# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallToCurtain：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/dc86e86b-995d-5486-ad5d-25089e7afabe.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/dc86e86b-995d-5486-ad5d-25089e7afabe.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallToCurtain · 墙体转幕墙

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

**功能**：将同维度智能墙批量转换为参数幕墙，保留基线、对象身份与用户属性，三维各墙保留原高度和底标高。

**调用**：在 Rhino 命令行输入 `rsWallToCurtain`（打开设置窗口）

**交互流程**：

1. 输入 rsWallToCurtain，多选同维度墙体并回车。
2. 在幕墙窗口调整对应二维／三维的分格与截面；三维高度和底标高沿用每堵原墙。
3. 点击“转换为幕墙”，之后可在属性面板继续修改。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 二维竖梃间距 | Spacing | double | 1200 mm | 正值 | 控制平面竖梃沿路径的间隔。 |
| 二维竖梃／玻璃夹 | Mullions2D | group | 宽40 / 深200 / 玻璃夹30 mm | 须能容纳当前路径与间距 | 玻璃位置可选外侧、居中或内侧，默认外侧。 |
| 内部竖挺／横挺数量 | Counts | group | 3 / 2 | 各 0–64；总格数 ≤1024 | 不含四周外框；3根内部竖挺形成4列玻璃。 |
| 三维截面／外框／玻璃 | Sections3D | group | 横竖挺与外框50×100 mm；玻璃12 mm | 截面须大于容差且能容纳净格 | 分别控制正面宽度或高度与进深。 |

**输出**：与源维度相同的参数幕墙。

**备注**：尺寸按当前 Rhino 文档单位显示；下列 mm、m 是等效物理尺寸示例。

带门窗、电梯或自由洞口的墙会拒绝转换，需要先处理这些关联；不会静默删除原墙或洞口。转换保留 GUID，可一次撤销。此入口不提供幕墙反转墙体。

# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="SplitBrepByCrvs：GH 组件图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/SpitBrepByCrvs_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> SplitBrepByCrvs

> 模块：GH组件 / Surface

[← 返回命令目录](/commands/)

**功能**：使用位于表面上的曲线拆分 Brep。

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Surface」分组下找到该组件并拖入
2. 按参数表连接各输入端口（标注「可选」的为可空端口）
3. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| Brep to split | Brep | 多重曲面 |  | 单值 |  |
| Splitting curves | SplitCrvs | 曲线 |  | 列表 |  |

**备注**：该运算器在 Grasshopper 画布中运行，输入与输出通过组件端口连接；每次画布求解时执行一次。

输出参数：
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| SplitBreps | 多重曲面 | Split Breps |

所属 GH 分组：RSTool / Surface

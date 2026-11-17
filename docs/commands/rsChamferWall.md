# <span class="rstool-command-icon rstool-command-icon--heading" title="rsChamferWall：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/736c0996-df5f-510a-a1d2-11c540df02ff.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/736c0996-df5f-510a-a1d2-11c540df02ff.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsChamferWall · 墙体倒斜角

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

**功能**：为两堵同维度直墙设置两侧退距，连接成斜角；非零退距会增加一个独立斜墙段。

**调用**：在 Rhino 命令行输入 `rsChamferWall`（命令行交互）

**交互流程**：

1. 依次点选两堵直墙需要保留的一侧。
2. 输入第一侧退距，再输入第二侧退距，第二侧默认沿用第一侧。
3. 确认预览和结果；两侧都为0时直接连接。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 两侧退距 | Setbacks | group | 首侧500 mm；第二侧跟随首侧 | ≥0 | 沿墙中心轴线从交点量取，按文档单位输入。 |

**输出**：保留原两堵墙，并按退距新增斜墙段。

**备注**：非零倒角要求同墙宽，三维还需同高度、同底标高。不能切入门窗或电梯占宽；曲墙、平行墙、混维、冲突交接规则或带不兼容自由洞口时会拒绝，原墙保留。

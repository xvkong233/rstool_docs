# <span class="rstool-command-icon rstool-command-icon--heading" title="rsWallJoint：右键点击 rsWallConnect 按钮" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/30a507e6-1a76-5519-bcf5-ba291eb8c4d9.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/30a507e6-1a76-5519-bcf5-ba291eb8c4d9.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWallJoint · 墙体节点接法

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

> 右键点击工具栏中的 [rsWallConnect](./rsWallConnect) 按钮可运行本命令；这里显示的是它们共用的按钮图标。

**功能**：直接选择墙体交接节点，指定自动、斜接、平接或不交接；平接可指定贯通主墙。

**调用**：在 Rhino 命令行输入 `rsWallJoint`（打开设置窗口）

**交互流程**：

1. 选择要处理的同维度墙体，点击视口中的蓝色节点。
2. 在面板点选接法；选择平接时再指定主墙。
3. 查看编号与颜色预览，确认应用。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 节点接法 | JunctionMode | enum | 当前节点规则 | 自动 / 斜接 / 平接 / 不交接 | 选自动会删除该节点的人工覆盖；平接主墙在预览中显示金色。 |

**输出**：保存到墙体的节点接法规则与更新后的墙网。

**备注**：规则用于真实存在的节点，不会把分离的墙拉到一起。节点消失后规则休眠。二维与三维不互接；三维只在墙高实际重叠区间交接。

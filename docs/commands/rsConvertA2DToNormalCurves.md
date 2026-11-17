# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsConvertA2DToNormalCurves：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/f3ccbe37-19c8-46e6-bfa3-77790be5a036.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsConvertA2DToNormalCurves · 二维转普通线条（旧版入口）

> 模块：建筑 / 墙体与编辑

[← 返回命令目录](/commands/)

::: warning 2.0：旧版入口已调整

当前 2.0 未注册这个通用二维转换命令，暂保留旧版参考。

这个旧名称在本次核对的 2.0 中不是可直接输入的兼容别名；下方保留的是 1.x 历史说明。

[查看 2.0 命令变化与对照](/commands/v2)

:::

::: details 查看 1.x 历史说明

> 本节的图标、截图、参数与操作流程均为旧版资料。

**功能**：将所选 A2D 墙体/门窗对象转为普通 Rhino 曲线（清除 RSTool 元数据，删除墙体 hatch）

**交互流程**：

1. 命令行输入 rsConvertA2DToNormalCurves
2. 选择要转换的二维墙体/门窗（曲线/填充，可框选多选）
3. 自动将其转为普通 Rhino 曲线并移除 A2D 元数据（删除墙体填充）

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：无参数；转换后失去 A2D 智能关联


:::

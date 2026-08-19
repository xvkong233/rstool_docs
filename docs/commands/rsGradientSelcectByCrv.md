# rsGradientSelcectByCrv · 按曲线渐变选择

> 模块：组织与选择 / 选择

[← 返回命令目录](/commands/)

**功能**：根据候选物体到干扰曲线的距离渐变随机生成所选对象集合（带实时预览）

**调用**：在 Rhino 命令行输入 `rsGradientSelcectByCrv`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsGradientSelcectByCrv
2. 在弹窗点击“选择候选物体”拾取对象
3. 点击“选择干扰曲线”拾取曲线
4. 调整选择偏移/随机种子/靠近曲线优先参数并实时预览
5. 点击“确认选择”完成

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 选择偏移 | SelectionBias | integer | 0 | -50 ~ 50 | 负值增加选择数量，正值减少；默认优先远离曲线的物体 |
| 随机种子 | RandomSeed | integer | 1 | 1 ~ 999999 | 稳定随机，可用“重新随机”按钮自增 |
| 靠近曲线的物体优先 | PreferNearCurve | toggle | false |  | 勾选后优先选择靠近曲线的物体 |

**备注**：需同时选择候选物体和干扰曲线方可确认；使用 Eto 对话框 GradientSelectionDialog

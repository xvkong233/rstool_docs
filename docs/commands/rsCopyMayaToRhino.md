# rsCopyMayaToRhino · Maya文件复制到Rhino

> 模块：SubD辅助 / 编辑工具

[← 返回命令目录](/commands/)

**功能**：从 Maya 剪贴板导入的 SubD 或 Mesh 对象(SoftCrease=SmoothX 时为软折边生成权重百分比 TextDots 标注)，整体编组

**调用**：在 Rhino 命令行输入 `rsCopyMayaToRhino`（命令行交互）

**交互流程**：

1. 命令行输入 rsCopyMayaToRhino
2. 从剪贴板读取 Maya ASCII 或自定义 JSON 数据
3. 在选项中设置导入参数(Y轴转Z轴/优先SubD/使用源单位/硬折边阈值/SoftCrease模式)
4. 回车执行导入
5. 生成 SubD 或 Mesh(带软折边 TextDots 标注)

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| Y轴转Z轴 | YUpToZUp | toggle | true |  | 将 Maya Y-up 坐标转换为 Rhino Z-up(静态 _lastConvertYUpToZUp) |
| 优先 SubD | PreferSubD | toggle | true |  | 优先生成为 SubD，否则 Mesh(静态 _lastPreferSubD) |
| 使用源单位 | UseSourceUnits | toggle | true |  | 按源单位换算到当前文档单位(静态 _lastUseSourceUnits) |
| 硬折边阈值 | HardCreaseThreshold | double | 9.5 | 0.01-100.0 | sharpness≥此值视为硬折边(Crease)，否则按 SoftCrease 模式处理 |
| 软折边模式 | SoftCrease | list | 柔和(SmoothX) | 忽略/柔和/锐边 | 0=Ignore,1=SmoothX,2=Crease；默认 SmoothX(静态 _lastSoftCreaseModeIndex=1) |

**备注**：数据来源为系统剪贴板(Maya ASCII 文本片段或 RSTool.MayaClipboard.v1 JSON)；无外部帮助 URL。

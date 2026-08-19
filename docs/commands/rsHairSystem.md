# rsHairSystem · 毛发系统

> 模块：几何 / 网格

[← 返回命令完全手册](/RsTool命令手册)

**功能**：沿表面生成的毛发系统（可渲染网格 或 中心曲线）

**调用**：在 Rhino 命令行输入 `rsHairSystem`（打开设置窗口）

**交互流程**：

1. 选择曲面 / 裁剪面 / 网格 / SubD 作为载体
2. 弹出毛发系统对话框
3. 调整参数并实时预览
4. 点击“生成”写入 / “取消”

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 预设 | Preset | list | 自定义 | 自定义 / 地毯短绒 / 物体短毛 / 柔软长毛 |  |
| 毛发长度 | Length | double | 0.025 | min≈0.001 (模型单位), max 极大 | 默认按米换算为模型单位 0.025 |
| 毛根间距/密度 | Root spacing | double | 0.008 | min≈0.001 (模型单位) | 默认按米换算 0.008 |
| 根部直径 | Root diameter | double | 0.0008 | min≈0.0001 (模型单位) | 默认按米换算 0.0008 |
| 尖端粗细 | Tip scale | double | 12 | 1–100 | 界面显示值 = 内部值×100；内部默认 0.12 |
| 长度随机 | Length variation | double | 15 | 0–95 | 界面显示值 = 内部值×100；内部默认 0.15 |
| 最大倾斜角度 | Lean angle | double | 12 | 0–89 | 单位：度 |
| 重力效果 | Gravity | double | 25 | 0–300 | 界面显示值 = 内部值×100；内部默认 0.25 |
| 自然弯曲/扰动 | Bend | double | 12 | 0–200 | 界面显示值 = 内部值×100；内部默认 0.12 |
| 长度分段 | Length segments | integer | 4 | 1–24 | 弯曲精度 |
| 截面边数 | Section sides | integer | 4 | 3–12 | 网格精度 |
| 毛发数量上限 | Max hair count | integer | 50000 | 1–200000 |  |
| 预览比例 | Preview percentage | integer | 10 | 1–100 | 单位：% |
| 随机种子 | Random seed | integer | 2026 | 0 – int.MaxValue |  |
| 输出类型 | Output type | list | 可渲染毛发网格 | 可渲染毛发网格 / 毛发中心曲线（轻量） |  |

**备注**：界面中 TipScale/LengthVariation/Gravity/Bend 显示为百分比（内部值除以 100）

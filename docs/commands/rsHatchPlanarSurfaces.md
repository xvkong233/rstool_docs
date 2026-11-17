# <span class="rstool-command-icon rstool-command-icon--heading" title="rsHatchPlanarSurfaces：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/c78eca67-6b48-51fe-992a-f0154e9d56a8.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/c78eca67-6b48-51fe-992a-f0154e9d56a8.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsHatchPlanarSurfaces · 平面填充

> 模块：视图出图 / 标注出图

[← 返回命令目录](/commands/)

**功能**：由平面边界曲线生成的填充 (Hatch) 对象

**调用**：在 Rhino 命令行输入 `rsHatchPlanarSurfaces`（命令行交互）

**交互流程**：

1. 命令行运行 rsHatchPlanarSurfaces
2. 选择要转换成填充的平面 (Brep)
3. 切换“删除原始面”开关 (是/否)
4. 确认后由平面边界曲线生成填充 (Hatch)

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 删除原始面 | DeleteInputSrf (ifDelSrf) | toggle | true |  | 记忆上次选择 (lastIfDelSrf)；选项标签中文 是/否，英文 Yes/No |

**备注**：仅处理平面 Brep 的 Faces[0]；开启则删除原始面；填充创建于当前图层

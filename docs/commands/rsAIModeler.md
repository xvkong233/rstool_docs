# rsAIModeler · AI 建模

> 模块：AI / 渲染与建模

[← 返回命令完全手册](/RsTool命令手册)

**功能**：本命令可以调用 AI 大模型快速生成脚本，用来对 Rhino 进行编辑操作；也可以选择 Agent 模式，使用大模型直接修改和编辑 Rhino。生成脚本模式下，AI 输出 Python/RhinoScript 代码，需手动在 Rhino 中执行；Agent 模式下，AI 通过工具调用直接操控 Rhino 几何体（删/替换/布尔等会弹 Approve/Deny 确认）

![RSTool AI Modeler 窗口：左侧为脚本展示区（默认空「暂无脚本」），右侧「AI 建模助手」从上到下依次为状态、设置入口、工作模式下拉（生成脚本 / Agent 建模）、需求描述、参考图片（上传图片 / 截取 Rhino 视口 / 粘贴剪切板图片）、连续对话开关、模型下拉与底部绿色「生成脚本」按钮](../assets/rsAIModeler/image1.png)

**调用**：在 Rhino 命令行输入 `rsAIModeler`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsAIModeler，打开 AI 建模窗口
2. 首次使用点「Settings」填写 API Key 并选择 API Endpoint（悠洛仁 / 官方 / 自定义）
3. 选择工作模式：Generate Script（先出可审阅脚本）或 Agent Modeling（自主连续建模）
4. 在提示词框描述需求，可上传 / 截取视窗 / 粘贴参考图
5. Generate Script 模式：点 Generate Script 生成 Python 脚本 → 审阅后点 Run in Rhino 在 Rhino 执行
6. Agent 模式：AI 自主建模，删除对象 / 布尔替换等高风险操作会在弹窗中要求 Approve / Deny 确认
7. 结果进入 Rhino；可用 New Conversation 重开对话，Undo Agent Run 回退上一步

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 工作模式 | operationMode | select | Generate Script | Generate Script / Agent Modeling | Generate Script 先产出 Python 脚本供审阅再运行；Agent Modeling 让 AI 连续自主建模（受下方权限约束） |
| 提示词 | prompt | textarea | — | 任意文本 | 描述要生成或修改的几何体；可结合参考图 |
| 参考图 | referenceImages | file[] | — | image/* 多张（上传 / 截取视窗 / 粘贴） | 作为建模参考；Agent 模式与脚本模式均可使用 |
| 连续对话 | toggleContinuous | bool | 关 | 开 / 关 | 开启后基于上一次对话继续修改代码，而非从零生成 |
| 视觉校验 | toggleVisualValidation | bool | 关 | 开 / 关 | 建模后自动截取视窗交给 AI 检查一次结果是否符合预期 |
| Agent-允许创建对象 | toggleAgentCreate | bool | 开 | 开 / 关 | 仅 Agent 模式：允许 AI 新建几何体（默认开） |
| Agent-允许修改对象 | toggleAgentModify | bool | 开 | 开 / 关 | 仅 Agent 模式：允许 AI 修改已授权对象（默认开） |
| Agent-允许删除对象 | toggleAgentDelete | bool | 开 | 开 / 关 | 仅 Agent 模式：允许 AI 删除对象（默认开，删除会触发确认弹窗） |
| Agent-确认高风险 | toggleAgentConfirmRisk | bool | 开 | 开 / 关 | 仅 Agent 模式：删除与布尔替换前弹出确认，需手动 Approve（默认开） |
| 模型 | modelSelect | select | Gemini 预设（Nano Banana 2） | 预设模型 / 自定义模型名 | 出图与理解所用的多模态模型；可在下拉选择或输入自定义模型名 |

**备注**：需要联网；所有参数在窗口内设置。Generate Script 模式先出脚本供审阅再运行，相对安全；Agent Modeling 具备创建/修改/删除权限，删除与布尔替换会触发确认弹窗

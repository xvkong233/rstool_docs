# rsAiRender · AI 渲染

> 模块：AI / 渲染与建模

[← 返回命令完全手册](/RsTool命令手册)

**功能**：可以截取 Rhino 当中的模型截图，或者上传特定图片，发送给 Gemini 或 ChatGPT 进行 AI 渲染。渲染完成后可以进行局部重绘或者局部替换。推荐直接截取 Rhino 当中的模型进行 AI 渲染——本命令会自动截取深度图和 AO 图等信息进行补充，确保渲染效果更真实。本命令既可以直接使用个人注册的 API，也可以使用由悠洛仁提供的中转站服务 API。

![RSTool AI Render 控制面板：左侧预览/历史记录，右侧模式/比例/画质/提示词/模型等参数](../assets/rsAiRender/image1.png)
*图 1：控制面板总览。左侧预览区+历史记录，右侧从上到下依次为比例 1:1/16:9/4:3/3:4/9:16 与「获取高清截图 / 上传图片」按钮、画质 1K/2K/4K、渲染张数、提示词（支持模板库）、模型下拉、提示词模板、参考图上传*

![参考图驱动的渲染案例：Rhino 站点模型为参考，AI 生成未来主义双塔建筑效果图（3:4 / 2K / Nano Banana Pro）](../assets/rsAiRender/image1_render_result.jpg)
*图 2：参考图渲染案例。上传 Rhino 导出的站点模型截图作为参考图，提示词描述未来主义超高层玻璃幕墙、AI 渲染参数 3:4 比例 + 2K 分辨率 + Nano Banana Pro 模型，AI 在保持建筑体量、轮廓与城市环境氛围的同时，将参考图的形态转译为夜景雨中写实材质，下方历史记录可见 3 张不同结果可逐张对比*

![Rhino 工作区中需要做参考图渲染的源模型：两栋曲线塔楼 + Site model · small.bim](../assets/rsAiRender/image2_rhino_viewport.jpg)
*图 3：案例中的 Rhino 工作区。左侧 Perspective 视口显示两栋曲线造型超高层建筑，右侧 Top 视口是平面定位，背景为 Site model · small.bim；用此视图的「获取高清截图」一键带入 RSTool AI Render 作为参考图（也可在「上传图片」中替换为其他视角/材质）*

![局部重绘工作台：在已渲染成图上框选矩形区域，提示词描述该区域的重绘目标](../assets/rsAiRender/image3_inpaint_workspace.jpg)
*图 4：局部重绘工作台。模式切到「基础渲染/局部重绘」后，预览区顶部出现「隐藏选区」按钮，鼠标可在画面上拖出矩形选区（此处为建筑底部裙房），右侧提示词输入「把画面中央的裙房铺满流光注入屏幕，增添艺术亮光」针对框选范围重绘，模型 Nano Banana Pro、2K、3:4，点击「开始 AI 局部重渲染」即可保留其他区域不动*

![局部重绘过程中失败可重试：历史记录里失败的条目以红色标记，并保留成图供再次局部重绘](../assets/rsAiRender/image4_inpaint_error_retry.jpg)
*图 5：失败可重试。模型切到 Nano Banana 2 后第一次重绘失败，历史记录第 2 条以红色「An error occurred while executing the...」标注，但第 1 条原图仍可继续作为工作底图——直接调整提示词或换回 Nano Banana Pro 即可重提，不必从头来过*

![局部重绘成功：状态栏显示「已完成 · 渲染成功」，新结果进入历史记录第 3 条，原区域被替换为重绘内容](../assets/rsAiRender/image5_inpaint_success.jpg)
*图 6：局部重绘成功。状态栏「已完成 · 渲染成功」+ 顶部 渲染成功 提示，历史记录第 3 条以绿色「已完成」徽章显示本次结果（Nano Banana 2），其他区域（天空、塔楼、街道）保持上一版不动，仅框选范围的裙房被重绘——这正是「局部重绘」相对「整图重渲染」的核心优势：迭代只影响你想改的那一块*

**调用**：在 Rhino 命令行输入 `rsAiRender`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsAiRender，打开 AI 渲染窗口（已打开则置前）
2. 在「设置」页选择 API 接入点（悠洛仁 / 官方 / 自定义）并填写 API Key
3. 切换「渲染模式 / 灵感模式」工作区
4. 渲染模式下选 模式（基础渲染/参考图/局部重绘/局部重渲染），按需截取视窗或上传图片作为底图
5. 设置 比例、画质、渲染张数，在「提示词」中描述材质/风格/光线/视角/镜头细节（可点「打开模板库」套用预设）
6. 选择 模型（Nano Banana 2 / Nano Banana Pro / GPT Image 2），点击「AI Render」
7. 结果自动出现在预览区与下方历史记录条，可用「对比原图」「设为底图」「保存图片」
8. 灵感模式支持「想象 / 混图 / 图生提示词」三种工作流，可调用「建筑灵感提示词工具」拼装提示词

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 工作区 | workspace | chip | render | render / inspiration | 渲染模式 与 灵感模式 之间的切换；前者面向建筑表现出图，后者面向前期意象探索 |
| 模式 | mode | chip | base | base / reference / inpaint / localRerender | 渲染模式下的子模式：基础渲染（纯文生图）、参考图（叠加多张参考）、局部重绘（框选区域 + 批注）、局部重渲染（按当前比例固定矩形重绘） |
| 比例 | aspectRatio | chip | 16:9 | 16:9 / 4:3 / 1:1 / 3:4 / 9:16 | 出图画幅比例；GPT Image 2 模型下切换比例会同步重置画质对应的输出分辨率 |
| 画质 | resolutionIndex | chip | 1 | 1K / 2K / 4K（或模型对应的高/中/低） | 输出分辨率档位；GPT Image 2 按当前比例映射 1280x720 → 3840x2160 三个尺寸，其他模型按高/中/低三档 |
| 渲染张数 | renderCount | number | 1 | 1–20 | 一次提交的并行出图数；超过 20 自动夹到 20；多张结果会在提交时逐张进入历史记录 |
| 提示词 | prompt | textarea | Photorealistic architectural rendering, sunny day, high detail, 8k resolution | 任意文本 | 渲染/局部重绘/局部重渲染的提示词，按模式分别保存（base/reference/inpaint/localRerender 各一份）；可点击「打开模板库」调用预设 |
| 参考图 | referenceImages | file[] | — | image/png, jpeg, webp, bmp，单文件 ≤30MB | 「参考图」与「局部重绘」模式可用，多张同时上传影响生成；灵感模式下也支持「灵感素材图」 |
| 灵感工作流 | inspirationMode | chip | imagine | imagine / blend / describe | 仅灵感工作区可见：想象（纯文字灵感）、混图（结合当前视窗 + 素材图）、图生提示词（将当前视图反推为提示词） |
| 灵感提示词 | inspirationPrompt | textarea | — | 任意文本 | 灵感工作区主输入；可点「提示词工具」调起「建筑灵感提示词工具」按建筑类型/设计风格/体量策略/立面材料/场地/光线/镜头/场景/可持续/出图表达 10 个维度拼装 |
| 模型 | selectedModel | select | gemini-3.1-flash-image-preview | gemini-3.1-flash-image-preview (Nano Banana 2) / gemini-3-pro-image-preview (Nano Banana Pro) / gpt-image-2 | 出图模型；Nano Banana 2 速度快、Nano Banana Pro 质量更佳、GPT Image 2 在分辨率映射上更细 |
| API 接入点 | endpointType | radio | yoro | yoro / official / custom | 在「设置」中切换：悠洛仁 API（推荐）/ 官方 API / 自定义 API；选择 custom 时需填完整端点 URL，并指定协议（auto/gemini/generic） |
| 主题 | theme | radio | System | System / Light / Dark | UI 主题，跟随系统/浅色/深色；切换立即生效 |

**备注**：需要联网；所有参数在窗口内设置并加密保存到本机配置，提示词模板、灵感工具预设、参考图与历史记录均存本机

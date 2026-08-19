# rsAiRenderOld · 旧版 AI 渲染

> 模块：AI / 渲染与建模

[← 返回命令完全手册](/RsTool命令手册)

**功能**：旧版：基于视口/参考图生成 AI 渲染图（WinForms 实现），可保存到本地

**调用**：在 Rhino 命令行输入 `rsAiRenderOld`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsAiRenderOld
2. 创建并显示 AiRenderForm (WinForms) 窗口（已打开则置前聚焦）
3. 在「API 设置」中选择接入点（悠洛仁 / 官方）并填入对应 API Key（可选记住配置）
4. 在窗口中点「获取视窗截图」或「上传图片」作为底图，可选「上传参考图」
5. 选择 模型、分辨率/质量、宽高比，在提示词框描述渲染要求
6. 点「开始 AI 渲染」；成功后预览结果，可「对比原图」「设为底图」「保存图片」

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| API 接入点 | EndpointType | radio | 悠洛仁 API (yoro) | 悠洛仁 API / 官方 Google / 官方 OpenAI | 选择 API 提供方；选官方且模型为 GPT Image 2 时自动切到 OpenAI 端点 |
| API Key | ApiKey | password | — | 字符串（按接入点分别保存） | 悠洛仁 / 官方 Key 分别保存；勾选「记住配置」写入 RhinoAiRenderOld_Config.json |
| 模型 | Model | list | Nano Banana Pro | Nano Banana 2 / Nano Banana Pro / GPT Image 2 | AI 图像模型；窗体默认选中 Nano Banana Pro（gemini-3-pro-image-preview） |
| 分辨率/质量 | Resolution | list | 高清 (1920x1080) - 1K | 标准(1280x720)-1K / 高清(1920x1080)-1K / 超清(2560x1440)-2K / 电影级(3840x2160)-4K | 输出分辨率，默认 SelectedIndex=1；传给 API 的 size 映射为 1K/2K/4K |
| 宽高比 | AspectRatio | list | 16:9 | 16:9 / 4:3 / 3:2 / 1:1 / 2:3 / 3:4 / 9:16 | 画面比例，默认 16:9；截图/输出均按此裁剪或校正 |
| 提示词 | Prompt | textarea | Photorealistic architectural rendering, sunny day, high detail, 8k resolution | 任意文本 | 渲染要求；按基础渲染 / 局部重渲染分别记忆 |
| 参考图 | ReferenceImage | file | — | png/jpg/jpeg/bmp/webp | 可选；上传后仅用于整体风格 / 光照 / 材质色调参考，不复制物体或构图 |

**备注**：旧版命令，WinForms 实现，保留用于兼容；需自行配置 API Key。与新版 rsAiRender 相比不区分渲染/灵感工作区，功能较简单

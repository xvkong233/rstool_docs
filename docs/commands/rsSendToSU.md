# rsSendToSU · 发送模型到SketchUp

> 模块：辅助工具 / 导入导出

[← 返回命令目录](/commands/)

**功能**：将所选对象导出并推送到 SketchUp：在线时即时定向发送，离线时写入传输槽排队等待接收；命令行回显发送对象数与路由消息。

**调用**：在 Rhino 命令行输入 `rsSendToSU`（命令行交互）

**交互流程**：

1. 命令行输入 rsSendToSU
2. 若已有预选对象则直接使用，否则按命令行提示选择要发送的对象
3. 命令将选中对象整理为 SketchUp 兼容数据并发送
4. 若检测到正在运行的 SketchUp 则即时推送；否则排队等待 SketchUp 接收
5. 命令行回显发送的对象数量与状态

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**备注**：rsSendToSU 与 rsSuExport 的区别：前者是一键将模型推送到正在运行的 SketchUp（实时联动，无需落地文件），后者是把模型导出为 .skp 文件。

选择行为：执行前若已在 Rhino 中预选对象则直接发送这些对象；若没有任何预选，命令行会提示你选择要发送的对象。

接收端：需要 SketchUp 一侧的 RSTool 处于可接收状态。检测到在线的 SketchUp 时会即时定向推送；若 SketchUp 未在线，则写入传输槽排队，待 SketchUp 下次打开时自动接收。

传输机制：基于中转清单（manifest）与推送请求；若导出或推送失败，命令行会回显失败原因，便于排查。

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=117049552608868&bvid=BV1EMuH6SEdt&cid=40663515751&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 发送模型到SketchUp（Send to SketchUp）演示教学（B 站）"></iframe>
*RsTool · 发送模型到SketchUp（Send to SketchUp）演示教学（B 站）*

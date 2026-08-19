# RsAutoEnglish · 自动英文命令

> 模块：辅助工具 / 系统工具

[← 返回命令完全手册](/RsTool命令手册)

**功能**：后台接管系统输入法：启用后命令行保持英文，文本输入框聚焦时恢复中文（或其他原输入法）；不生成几何

**调用**：在 Rhino 命令行输入 `RsAutoEnglish`（命令行交互）

**交互流程**：

1. 命令行输入 RsAutoEnglish
2. 显示当前状态与二级选项菜单
3. 选择 启用/切出恢复/输入框切换/退出
4. 子菜单中 开/关/切换 设置
5. 退出后后台接管输入法

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 智能英文锁定（启用） | Enable | toggle | false | 开/关 | 总开关：命令行保持英文输入 |
| 切出恢复 | RestoreOnDeactivate | toggle | true | 开/关 | 切出 Rhino 时恢复原输入法 |
| 输入框切换 | TextInputFocus | toggle | true | 开/关 | 文本输入框聚焦时恢复原输入法 |

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116018777167422&bvid=BV1epFezvE4V&cid=35845966752&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 自动英文命令（Auto English）演示教学（B 站）"></iframe>
*RsTool · 自动英文命令（Auto English）演示教学（B 站）*

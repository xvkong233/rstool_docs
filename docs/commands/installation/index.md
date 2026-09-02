# RSTool 安装指南

RSTool 可以直接通过 Rhino 自带的软件包管理器安装。

## 通过 PackageManager 安装

1. 打开 Rhino，在命令行输入 `PackageManager` 并按 Enter。
2. 在“软件包管理”的“线上”选项卡中搜索 `rstool`。
3. 选择 **RSTool**，确认需要安装的版本后单击“安装”。安装完成后，如 Rhino 提示需要重启，请保存当前文件并重新启动 Rhino。

![在 Rhino 软件包管理器中搜索并安装 RSTool](../../assets/installation/rstool-package-manager.png)

## 搜索不到 RSTool

先确认 Rhino 能正常访问网络，并且软件包管理器处于“线上”选项卡。如果搜索仍无结果，可以检查 Windows 防火墙中是否存在阻止 Rhino 联网的出站规则：

1. 打开“设置 → 隐私和安全性 → Windows 安全中心 → 防火墙和网络保护 → 高级设置”。
2. 在“高级安全 Windows Defender 防火墙”中选择“出站规则”。
3. 查找名称中包含 Rhino、且操作明确为“阻止连接”的规则。先记录或导出原规则，再禁用或删除对应的阻止规则，然后重新打开 `PackageManager` 搜索。

![Windows 11 中检查 Rhino 防火墙出站规则的操作路径](../../assets/installation/windows-firewall-outbound-rules.png)

::: warning 网络与授权提示

- 只处理明确阻止 Rhino 联网的规则，不要直接关闭整个 Windows 防火墙。
- 防火墙和代理设置都可能影响软件包下载及 Rhino 授权校验；修改前请记录原设置，以便出现问题时恢复。
- 如果使用代理或 VPN，建议将 Rhino / McNeel 的官网、授权及软件包服务域名加入代理工具的**直连或排除列表**（不走代理），不要直接阻断授权服务器。具体设置可参考[这篇知乎文章](https://zhuanlan.zhihu.com/p/595993046)。

:::

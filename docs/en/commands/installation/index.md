# RSTool Installation Guide

There are two ways to install RSTool: download a `.yak` file from Baidu Netdisk and drag it into Rhino, or search for RSTool in Rhino's built-in package manager. Choose either method.

## Method 1: Install from a YAK file

1. Open the [RSTool download link on Baidu Netdisk](https://pan.baidu.com/s/5c6yJvAa5wCCh81eEZRsGRg) and download the RSTool `.yak` installation file.
2. Open Rhino, drag the downloaded `.yak` file into the Rhino window, and follow the prompts to install it.
3. Save your work and restart Rhino if prompted after installation.

## Method 2: Search and install with PackageManager

1. Open Rhino, enter `PackageManager` on the command line, and press Enter.
2. Search for `rstool` on the **Online** tab of the Package Manager.
3. Select **RSTool**, choose the version you want, and click **Install**. Save your work and restart Rhino if prompted.

![Search for and install RSTool in Rhino Package Manager](../../../assets/installation/rstool-package-manager.png)

## If RSTool does not appear in search

First confirm that Rhino can access the internet and that Package Manager is on the **Online** tab. If no result appears, check whether a Windows Firewall outbound rule is blocking Rhino:

1. Open **Settings → Privacy & security → Windows Security → Firewall & network protection → Advanced settings**.
2. Select **Outbound Rules** in Windows Defender Firewall with Advanced Security.
3. Look for a rule whose name contains Rhino and whose action is explicitly **Block the connection**. Record or export the rule first, then disable or remove only that blocking rule and search again in `PackageManager`.

![Check Rhino outbound rules in Windows 11 Firewall](../../../assets/installation/windows-firewall-outbound-rules.png)

::: warning Network and licensing

- Change only rules that explicitly block Rhino; do not disable Windows Firewall as a whole.
- Firewall and proxy settings may affect both package downloads and Rhino license validation. Record the original settings so you can restore them if necessary.
- If you use a proxy or VPN, add Rhino and McNeel website, licensing, and package-service domains to your proxy tool's **direct-connect or exclusion list** so they do not use the proxy. Do not block licensing servers. See [this Zhihu article](https://zhuanlan.zhihu.com/p/595993046) for a configuration example.

:::

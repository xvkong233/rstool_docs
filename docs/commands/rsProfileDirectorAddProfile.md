# <span class="rstool-command-icon rstool-command-icon--heading" title="rsProfileDirectorAddProfile：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/1d4f3e3c-0e6d-5151-ad9a-dad4070cbc1f.png" alt="" width="48" height="48" loading="eager" decoding="async"><img class="rstool-command-icon__dark" src="/command-icons/dark/1d4f3e3c-0e6d-5151-ad9a-dad4070cbc1f.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsProfileDirectorAddProfile · 添加截面

> 模块：截面管理 / Profile Director

[← 返回命令目录](/commands/)

**功能**：把封闭平面曲线存入截面库，保存后在客户端的 ProfileDirector 截面库中继续查看和使用。

**调用**：在 Rhino 命令行输入 `rsProfileDirectorAddProfile`（命令行交互）

**交互流程**：

1. 输入 rsProfileDirectorAddProfile，选择封闭平面轮廓曲线。
2. 指定截面参考点并输入名称。
3. 保存到当前 ProfileDirector 截面库，完成后打开客户端对应的截面库。

**参数**：

> 此命令无命令行数值参数，相关设置在窗口中调整。

**输出**：将所选封闭平面曲线作为截面保存到 ProfileDirector 用户截面库

**备注**：仅接受封闭且平面的曲线，参考点用于后续路径定位。2.0 将保存后的截面库浏览并入客户端；该添加截面命令仍单独保留。

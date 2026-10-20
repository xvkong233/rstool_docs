# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--single" title="rsWindow2D：工具栏图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/light/d31aa9a2-cdd9-46e4-aa67-79cc70a158e6.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> rsWindow2D · 二维窗

> 模块：二维建筑 / 门窗与电梯

[← 返回命令目录](/commands/)

**功能**：在所选 2D 墙体上插入窗符号并开洞

**调用**：在 Rhino 命令行输入 `rsWindow2D`（命令行交互）

**交互流程**：

1. 命令行输入 rsWindow2D
2. 选择要插入窗的二维墙体
3. 设置窗宽、翻转方向
4. 在墙上指定窗的位置点击插入

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 窗宽 | WindowWidth | double | 1.2 | >模型公差 | 默认 1.2m（按 1200mm 适配单位） |
| 翻转方向 | FlipSide | toggle | false |  | 翻转窗在墙厚方向的位置 |

**备注**：默认窗宽按 1200mm 适配模型单位

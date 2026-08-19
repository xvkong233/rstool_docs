# rsFindCurveGaps · 查找线头

> 模块：几何 / 曲线

[← 返回命令目录](/commands/)

**功能**：在容差内修复的曲线(延长/修剪/连接线头)，可删除短曲线；支持 UndoLast 撤销单笔修复

**调用**：在 Rhino 命令行输入 `rsFindCurveGaps`（命令行交互）

**交互流程**：

1. 命令行输入 rsFindCurveGaps
2. 命令自动分析预选或全部可编辑曲线
3. 悬停线头查看修复方案(NextSolution 切换方案)
4. 单击线头执行修复
5. 用 Tolerance / DeleteShortCurves 选项调整，回车完成或 Esc 退出

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 容差 | Tolerance | double | 10.0 (毫米，按模型单位换算；无单位时为 10.0) | 下限 max(模型绝对公差, ZeroTolerance), 上限 double.MaxValue | 线头间距容差，设置键为 FindCurveGaps.Tolerance* 持久化 |
| 删除短线 | DeleteShortCurves | toggle | false |  | 开启后单击长度小于容差的短曲线将其删除(设置键 FindCurveGaps.DeleteShortCurves) |

**备注**：非平面曲线仅标记不自动修复；通过 GetPoint 悬停/点击交互，并带有 AddOptionDouble/AddOptionToggle 命令行选项。

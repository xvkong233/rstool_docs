# rsTesselateNurbs · NURBS表皮细分

> 模块：几何 / 铺装表皮

[← 返回命令目录](/commands/)

**功能**：划分生成的嵌板 Brep 集合（按输出组分组写入文档），支持单面与多重曲面连续划分

**调用**：在 Rhino 命令行输入 `rsTesselateNurbs`（打开设置窗口）

**交互流程**：

1. 打开“Nurbs曲面划分”窗口
2. 选取基础面（Brep/Extrusion）
3. 选择划分方式（Pattern）
4. 设置 U / V 方向等分数，可选交换 UV
5. 实时橙色预览
6. 应用（按组写入）/ 取消

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 划分方式 | Pattern | list | 矩形 (QuadPanels) | 矩形 / 菱形 / 三角形 / 随机矩形 / 随机四边面板 / 斜矩形 / 六边形 / 错缝砖 / 人字纹 / 八边形方格 / 三角六边形 / Cairo五边形 | 12 种图案；默认索引 0 (QuadPanels) |
| U方向等分数 | UDivideNum | integer | 10 | 1–999 | 记忆上次值 lastUDivNum |
| V方向等分数 | VDivideNum | integer | 10 | 1–999 | 记忆上次值 lastVDivNum |
| 交换UV | Swap U/V | toggle | false |  | 记忆上次值 lastSwapUV |
| 隐藏基础面 | Hide base surface | toggle | false |  |  |

**备注**：多重曲面连续划分支持全部 12 种图案

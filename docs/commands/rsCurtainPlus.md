# rsCurtainPlus · 增强版幕墙

> 模块：建筑 / 建筑构件

[← 返回命令目录](/commands/)

**功能**：基于基础 Brep 与竖挺线生成幕墙（支持简易 / 精细模式与折角构件）

![rsCurtainPlus 简易模式对话框](../assets/rsCurtainPlus/image1.png)
*Eto「幕墙 Plus」简易模式窗口：选择基础 Brep 与一级/二级竖挺线后即可生成幕墙；相比 rsCurtain 升级点是支持多重曲面（一次拾取多个曲面合并生成），并自动处理 G0 折边*

![rsCurtainPlus 精细模式对话框](../assets/rsCurtainPlus/image2.png)
*Eto「幕墙 Plus」精细模式窗口：在简易模式之上，外框/一级/二级竖挺的宽度、厚度、扣盖宽度与扣盖厚度各自独立可调；G0 折边处自动生成折角构件，可应对多重曲面带折边的复杂场景*

**调用**：在 Rhino 命令行输入 `rsCurtainPlus`（打开设置窗口）

**交互流程**：

1. 打开幕墙 Plus 对话框
2. 选择基础多重曲面（Brep）
3. （可选）选择一级 / 二级竖挺线
4. 选择模式（简易 / 精细）与是否生成外边框
5. 设置各构件尺寸
6. 生成幕墙（含 G0 折角自动处理）

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 模式 | Mode | list | 0 | 简易\|精细 | 0=Simple, 1=Detailed |
| 生成外边框 | GenerateBorder | bool | false | true\|false | 精细模式下可用 |
| 宽度 | Width | double | 0.04 | >0 (min max(tol,0.001m)) | 简易/外框/一级/二级共用的宽度默认值，单位：米 |
| 厚度 | Depth | double | 0.3 | >0 (min max(tol,0.001m)) | 单位：米 |
| 扣盖宽 | CapW | double | 0.04 | >0 (min max(tol,0.001m)) | 精细模式外框/一级/二级，单位：米 |
| 扣盖厚 | CapD | double | 0.04 | >0 (min max(tol,0.001m)) | 精细模式外框/一级/二级，单位：米 |

**备注**：G0 折边自动生成折角构件；精细模式下外框/一级/二级各有独立宽、厚、扣盖宽、扣盖厚

# rsEscalator · 自动扶梯

> 模块：建筑 / 楼梯与坡道

[← 返回命令完全手册](/RsTool命令手册)

**功能**：沿基础线生成自动扶梯：以 Brep 列表加入 Rhino 文档，包含踏步（step join）、左右扶手（fillet）、左右手带皮带、以及名为『EscalatorGlass』的玻璃栏板

![rsEscalator 命令界面：右侧 Eto 对话框『自动扶梯』含 5 个参数，Rhino 视口显示沿基础线生成的扶梯模型与黄色方向引导线](../assets/rsEscalator/image1.png)
*rsEscalator 弹出『自动扶梯』Eto 对话框（5 个参数 + 生成/取消两按钮），同时 Rhino 视口已根据基础线（黄色引导线）生成踏步 + 扶手 + 玻璃栏板等构件*

**调用**：在 Rhino 命令行输入 `rsEscalator`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsEscalator，提示选择自动扶梯基础线（必须是 Rhino 直线）
2. 基础线决定扶梯走向与位置；终点侧会抬升至『层高』标高
3. 弹出『自动扶梯』Eto 对话框（标题与字段标签跟随 Rhino 语言设置）
4. 在对话框中调整 5 个参数：扶梯角度 / 层高 / 坑深 / 平台长度 / 扶梯宽度
5. 点击『生成』沿基础线构建扶梯构件（踏步 / 左右扶手 / 玻璃栏板），『取消』放弃

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 层高 | FloorHeight | double | 4 | 0.1~20000 | 扶梯顶/底两端总高差，决定扶梯顶端所在标高；步进 0.1，3 位小数，单位：米 |
| 坑深 | PitDepth | double | 1.1 | 0.1~10000 | 扶梯底端下凹深度（楼板凹陷形成的空间），决定起始端下嵌位置；步进 0.1，3 位小数，单位：米 |
| 平台长度 | PlatformLength | double | 2 | 0.1~10000 | 扶梯两端水平接入平台长度，决定上下过渡平台大小；步进 0.1，3 位小数，单位：米 |
| 扶梯宽度 | EscalatorWidth | double | 1.2 | 0.5~10000 | 扶梯踏步横向净宽，决定可通行宽度；步进 0.1，3 位小数，单位：米 |
| 扶梯角度 | EscalatorAngle | double | 30.0 | 5~60 | 扶梯倾斜角；步进 1，1 位小数，单位：度。NumericStepper 限定 5~60；IsValid 额外判定 0<角<90 |

**备注**：rsEscalator 是 Eto 表单命令，弹窗内仅 5 个数值参数；本次输入会写入 RsEscalator.EscalatorWidth / EscalatorAngle 静态字段，下次打开自动带入。

对话框标题与字段标签跟随 Rhino 语言设置：中文环境为『自动扶梯 / 层高(m) / 坑深(m) / 平台长度(m) / 扶梯宽度(m) / 扶梯角度(°)』，英文环境为『Escalator / FloorHeight(m) / Depth(m) / PlatformLength(m) / Width(m) / EscalateAngle(°)』。窗口默认定位在屏幕 1/3 处；按钮中英对照『生成 / Generate』与『取消 / Cancel』。

验证逻辑：扶梯角度由 NumericStepper 限定 5~60，IsValid 额外判定 0<角<90；其它四个尺寸要求大于 0。校验失败则不生成。

材质与基础线：渲染材质 EscalatorGlass 不存在时会自动创建基本材质并赋予玻璃栏板；基础线必须为 Rhino 直线（Line），命令行 GetObject 选择后沿该方向构建扶梯。

⚠️ 源码细节：rsEscalatorArgs 字段名为 FloorHeigt（少一个 ‘t’，源码拼写 bug），文档 en 用 FloorHeight 是规范化写法，避免给 GH/外部调用方暴露笔误。

# rsImageToCurve · 图片转曲线

> 模块：几何 / 曲线

[← 返回命令目录](/commands/)

**功能**：由位图按所选追踪模式生成的矢量曲线(PolylineCurve)，写入图层 RSTool_ImageToCurve

**调用**：在 Rhino 命令行输入 `rsImageToCurve`（打开设置窗口）

**交互流程**：

1. 命令行输入 rsImageToCurve
2. 点击"选择图片"选择位图(PNG/JPG/JPEG/BMP)
3. 调整追踪模式/阈值/杂点/平滑/优化等参数(视口实时黄色预览)
4. 设置目标宽度与是否包含边缘
5. 点击"生成"并指定左下角插入点(回车使用世界原点)

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 追踪模式 | TraceMode | list | 阈值掩膜(Threshold mask) | 阈值掩膜/颜色边界/VTracer轮廓 | 0=Threshold mask,1=Color edges,2=VTracer contours |
| 阈值/灵敏度 | Threshold | double | 19 | 0-100 (%) | 灰度/VTracer 模式下的前景灰度阈值；颜色边界模式下的颜色差异灵敏度 |
| 杂点过滤 | Speckles | double | 2 | 0-100 | 过滤小面积噪点(0-100)，数值越大忽略的细碎区域越多 |
| 平滑角点 | SmoothCorners | double | 1.0 | 0.00-1.34 | 角点平滑强度，数值越大转角越圆滑 |
| 优化 | Optimize | double | 0.20 | 0.00-1.00 | 曲线简化程度，数值越大控制点越少 |
| 反色 | Invert | toggle | false |  | 反转前景/背景选择 |
| 包含边缘 | IncludeBorder | toggle | true |  | 是否保留贴着图像边缘的轮廓 |
| 目标宽度 | TargetWidth | double | 100.0 | 0.001-1000000.0 | 生成曲线在 Rhino 中的目标宽度(模型单位) |

**备注**：窗口内"帮助"按钮仅弹出版权说明，无外部帮助 URL；黄色曲线仅为视口预览，点击OK并指定插入点后才写入文档。

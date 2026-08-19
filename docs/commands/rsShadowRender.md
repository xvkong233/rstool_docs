# rsShadowRender · 建筑渲染窗口

> 模块：视图出图 / 标注出图

[← 返回命令完全手册](/RsTool命令手册)

**功能**：建筑阴影/白模渲染结果 (在 ArchiRenderWindow 中渲染当前视口场景)

**调用**：在 Rhino 命令行输入 `rsShadowRender`（打开设置窗口）

**交互流程**：

1. 命令行运行 rsShadowRender
2. 打开建筑渲染窗口 (捕获当前视口)
3. 自动开启文档太阳
4. 在窗口设置质量/输出/白模/阴影等
5. 点击“渲染”开始

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 渲染质量 | QualityPreset | list | High | Preview/Medium/High/Ultra | 影响内部分辨率倍率与抗锯齿 (Preview0.5/Medium1/High2/Ultra3) |
| 输出尺寸 | OutputPreset | list | Output2K (2560px) | 1K(1920)/2K(2560)/4K(3840)/6K(6144) | 长边像素 |
| 宽高比 | AspectRatioPreset | list | MatchViewport (跟随视口) | MatchViewport/Square1x1/4x3/16x9/9x16 |  |
| 继承Rhino材质颜色 | InheritRhinoMaterialColor | toggle | true |  | 代码中固定为 true |
| 边线模式 | EdgeRenderMode | list | ViewportOverlay | Off/ViewportOverlay/NativeFramebuffer |  |
| 物体边线宽度 | ObjectEdgeLineWidth | integer | 1 | 1 – 16 | ClampObjectEdgeLineWidth 限制 |
| 使用高级Rhino材质 | UseAdvancedRhinoMaterial | toggle | true |  | 代码中固定为 true |
| 白模模式 | UseWhiteModel | toggle | false |  |  |
| 阴影强度 | ShadowIntensity | double | 1.0 | 0.0 – 1.0 | ClampShadowIntensity 限制 |
| 主轮廓线宽比 | PrimaryOutlineWidthRatio | double | 1.5 | 0.0 – 2.0 | ClampPrimaryOutlineWidthRatio 限制 |

**备注**：自动开启文档太阳 (渲染→太阳面板可调)；设置持久化到命令 PersistentSettings；同一文档复用窗口实例

**教学视频**：

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116754558752387&bvid=BV1ymjN6YE9P&cid=39142556947&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 建筑渲染窗口（Shadow Render）演示教学（B 站）"></iframe>
*RsTool · 建筑渲染窗口（Shadow Render）演示教学（B 站）*

<iframe class="rstool-video" src="https://player.bilibili.com/player.html?isOutside=true&aid=116607640670567&bvid=BV1jjLS6zENC&cid=38483397032&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" loading="lazy" title="RsTool · 建筑渲染窗口（Shadow Render）补充演示（B 站）"></iframe>
*RsTool · 建筑渲染窗口（Shadow Render）补充演示（B 站）*

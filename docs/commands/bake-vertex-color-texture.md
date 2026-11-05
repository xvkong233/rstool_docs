# <span class="rstool-command-icon rstool-command-icon--heading rstool-command-icon--gh rstool-command-icon--single" title="Bake Vertex Color Texture：GH 组件图标" aria-hidden="true"><img class="rstool-command-icon__light" src="/command-icons/gh/BakeVertexColorTexture_24.png" alt="" width="48" height="48" loading="eager" decoding="async"></span> Bake Vertex Color Texture · 顶点色烘焙贴图

> 模块：GH组件 / Mesh

[← 返回命令目录](/commands/)

**功能**：将三角/四边网格的顶点色烘焙为 PNG 贴图，并输出带匹配 UV 的网格副本。适合把彩色分析网格或渐变网格的颜色带到材质渲染、模型导出等流程中。

**使用步骤**：

1. 在 Grasshopper 中，从 RSTool → Mesh 找到 Bake Vertex Color Texture（昵称 ColorTexture），拖入画布。它是 GH 运算器，不是在 Rhino 命令行输入的命令。
2. 把已有完整顶点色的网格接入 Mesh（M）。三角面、四边面或两者混合都可以；每个顶点都必须有颜色。
3. 先保持 Save=False，检查输出网格和 Size。设置 File Path（P）为 PNG 路径，并确认目标文件夹已经存在。GH 文件尚未保存时请使用绝对路径。
4. 将 Grasshopper Button 接到 Save（S），按一下保存贴图。默认 Overwrite=False，已有同名文件时换一个路径，或确认需要覆盖后开启 Overwrite。
5. 查看 Saved（S）和 Message（I）：只有 Saved=True 才表示本次成功写盘，输出了 File Path 并不等于保存成功。
6. 将输出端的 Mesh 烘焙到 Rhino 或导出，给它指定使用该 PNG 的基础色/漫反射材质，并使用网格现有 UV。不要改用输入网格，也不要重新做盒式或平面映射。

**参数**：

| 中文名 | 英文名 | 类型 | 默认值 | 范围 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 带顶点色的网格 | Mesh (M) | 网格 | 必填 | 单值；有效三角/四边网格，1–1000000 个面 | 顶点色数量必须等于顶点数量。输入网格保持不变，输出为独立副本。 |
| PNG 文件路径 | File Path (P) | 文字 | 空 | 单值；.png 路径 | 未写扩展名时自动补 .png；其他扩展名会报错。相对路径以已保存的 GH 文件目录为基准，目标文件夹须已存在。Save=False 时可留空；一旦填写路径，即使不保存也会校验路径。 |
| 保存贴图 | Save (S) | 布尔 | False | 单值；False / True | False 时输出 UV 网格但不写 PNG。True 时每次求解都会尝试保存，建议接 Button，不要长期保持 True。 |
| 允许覆盖 | Overwrite (O) | 布尔 | False | 单值；False / True | 只有开启才允许覆盖已有同名 PNG；关闭时会保留原文件并报告保存失败。 |

**备注**：

## 输出端口

| 名称 | 简写 | 类型 | 说明 |
| --- | --- | --- | --- |
| Mesh | M | 网格 | 按面拆分顶点并重建 UV 的网格副本，保留 RGB 顶点色和原平滑法线；原网格缺少法线时会先计算。后续贴材质、烘焙和导出请用这一份。 |
| File Path | P | 文字 | 本次目标的绝对路径；未填写路径且 Save=False 时不输出路径。它不是保存成功凭证。 |
| Size | R | 整数 | 正方形 PNG 的边长，单位为像素，由面数自动计算。 |
| Saved | S | 布尔 | 本次求解是否成功写入 PNG；成功为 True，未保存或保存失败为 False。 |
| Message | I | 文字 | 状态或错误说明，包含未保存、已保存、路径错误及覆盖受阻等情况。 |

## 为什么一定要用输出网格

它不是把视口截成一张图片，而是把每个面的顶点色整理到一张紧凑图集中。每个面占 2×2 像素，并分配独立 UV 小块。为了让这些 UV 正确对应贴图，输出网格会按面拆开共享顶点，原来的 UV 和 Ngon 分组不会保留，顶点数也会增加；原始输入不受影响。

贴图边长为 2 × ceil(sqrt(面数))，例如 10000 个面生成 200×200 像素的 PNG。没有单独的分辨率输入，尺寸不是按模型长宽或截图大小计算。小图集需要通过配套 UV 才能还原面上的颜色，不能直接套到原网格上。

## 保存和材质怎么接

推荐用 Button 触发 Save。若用 Boolean Toggle 一直保持 True，任何重新求解都可能再次写文件；Overwrite=False 时，第二次写同名文件会被拦住。保存失败请先看 Message，检查文件夹、扩展名、写入权限和是否允许覆盖。

预览时，可把 PNG 路径接到 [MaterialPlus](./MaterialPlus) 的 DiffuseTex（DT），配合 Grasshopper Custom Preview；也可以接到 [Preview Materials](./preview-materials) 的 Diffuse，颜色设白色、透明度设 0，避免额外着色或透明影响效果。两种方法都要预览输出网格。

这里的“烘焙”指顶点色转贴图，不会自动把模型添加到 Rhino 文档，也不会自动创建或绑定 Rhino 材质。需要落地模型时，自己 Bake/导出输出网格，并把 PNG 和模型一起管理。

## 使用限制

最多支持 1000000 个面，不依赖第三方插件。保留的是不透明 RGB 颜色，不保留顶点 Alpha。四边面的贴图双线性插值可能与某些渲染器内部三角化后的顶点色略有差别。

图集没有额外的 mipmap 边距，远距离或低分辨率采样时可能出现相邻面串色；优先使用双线性采样，避免把图集当作普通平铺贴图重新映射。

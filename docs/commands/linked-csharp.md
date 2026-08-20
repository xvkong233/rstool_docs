# Linked C#

> 模块：GH组件 / Developer

[← 返回命令目录](/commands/)

![图标](../assets/gh-icons/LinkedCSharp_24.png)

**功能**：在画布中执行外部 .cs 脚本求解；输入/输出端由 .cs 内 RegisterInputParams/RegisterOutputParams 注册定义，画布会自动同步显示

![Linked C# 组件右键菜单：顶部 Linked C# 标题与折叠图标；选项依次为 Enabled、Bake...、Runtime warnings（子菜单）；Source: not selected；Select Source File...、Create Source Template...、Open Source File、Reload Now；勾选中的 Watch Source File；下方 Use Embedded Source、Detach Source File、Export Embedded Source...、Copy Embedded Source；底部 Help...。](../assets/linked-csharp/image1.png)
*Linked C# 组件右键菜单：从 Source File 一组把本地 .cs 文件挂到组件上，Watch Source File 启用后保存即自动热重载。*

**使用步骤**：

1. 在 Grasshopper 画布中，从 RSTool 标签的「Developer」分组下找到该组件并拖入画布
2. 右键菜单选「Create Source Template…」一键生成只含 Input/Output/SolveInstance 骨架的本地 .cs 源码文件（也可以用「Select Source File…」挂上你已有的 .cs）
3. 用任意编辑器或 AI 工具（WorkBuddy、ChatGPT、Gemini、Claude 等）按自己的需求改这个 .cs 文件，组件会自动按你 Register 的输入输出端刷新画布端口
4. 勾选「Watch Source File」后，保存 .cs 即可自动热重载；或在右键菜单里 Reload Now 手动重载
5. 每次画布求解时执行一次，从输出端口读取结果

**参数**：

> 该运算器无参数输入；每次画布求解时自动执行。

**备注**：Grasshopper 原生"容器"型 C# 组件，把 C# 脚本以独立的本地 .cs 文件存放执行，而不是写在组件本体里。本身没有固定端口——所有输入输出都在 .cs 内部用 AddGenericParameter/AddNumberParameter 等注册，组件会按你注册的名称、类型、数目实时同步画布端口。

## 一、AI 辅助建模工作流

这是这个组件最大的杀手锏。Grasshopper 原生组件解决不了的逻辑（自定义递推、复杂几何运算、特殊数据结构、特定算法）、RhinoCommon 调用密集的部分，可以让 AI 来写：

1. **Create Source Template** → 拿到一份空骨架 .cs（输入输出 + SolveInstance 占位）
2. **拷给 WorkBuddy / ChatGPT / Gemini / Claude 等任意 AI**，把 GH 场景说清楚（例如"我有一个 NurbsSurface 列表，要算出每个曲面最陡坡向、步长 s、最大步数 n；输出每条流线的 Curve 列表与终点坐标列表"）
3. **AI 生成完整 C# 代码**——它知道 Grasshopper API（GH_ParamAccess.item/list/tree、DataTree、Pivot、IKernel 等）、RhinoCommon（Brep、NurbsSurface、Mesh、Line、Point3d 等）、常见算法（SDF、Delaunay、MarchingCubes、ClosestPoint 等）的写法，会直接帮你写完整的 Register + SolveInstance
4. **.cs 保存** → 画布上的 Linked C# 自动按新代码的 Register 同步出对应端口；连线运行即可
5. **再调整、再询问、再保存**——这就是一个本地 IDE 化的 GH 运算器开发循环

相比在 GH 自带 C# 编辑器里手写代码（每改一行都要等编译、不能 diff、不能版本管理、不能复用到其他 .gh）：Linked C# 的源代码是**纯本地普通文件**，可以用任何编辑器（VS Code / Cursor / Zed），可以用 AI 工具迭代，可以塞进 git / SVN 进行版本控制，也可以同时给团队其他 .gh 文件复用同一个 .cs。

## 二、菜单选项详解

右键菜单里 Source 与自动重载相关的条目（按常见使用顺序）：

- **Source: not selected** — 状态行；挂了文件会变成文件路径
- **Select Source File...** — 把一个已经写好的本地 .cs 绑到该组件上
- **Create Source Template...** — 一键生成只含 RegisterInputParams/RegisterOutputParams/RegisterNamedInputs/RegisterNamedOutputs/SolveInstance 骨架的 .cs（首次使用必选）
- **Open Source File** — 用系统关联的程序（VS/Rider/VSCode）打开你的 .cs 进行编辑
- **Reload Now** — 重新加载 .cs 并同步端口；Watch 关闭时唯一刷新方式
- **Watch Source File** — 勾上后保存 .cs 自动重载（推荐开发期勾上）
- **Use Embedded Source** — 把外挂 .cs 的源码写回到组件内（关闭外联，整个组件可移植）
- **Detach Source File** — 解除与本地 .cs 的链接，回到无源码状态
- **Export Embedded Source...** / **Copy Embedded Source** — 把组件内嵌的代码导出或拷贝到剪切板
- **Bake...** / **Enabled** — 同原生组件的烘焙与禁用
- **Runtime warnings** 子菜单 — 看求解时的告警与异常堆栈

## 三、与"C# Script"的区别

Grasshopper 还自带一个"C# Script"组件（图标相似）。区别是：

- **C# Script**：代码存放在组件内部 DrawTree/Undo 工作里——调试不友好、无法用外部 IDE 改、无法跨文件复用、不能 git
- **Linked C#**：代码外联到独立 .cs 文件——可用任何编辑器、可用 AI 改、可 git、可复用

对 AI 辅助建模来说，Linked C# 几乎是必备：AI 写出的长文件不能塞进组件内部 GUI 编辑器，必须是独立文件。

## 四、AI 提示词样板

通常发给 AI 的提示词结构（堂主可直接复用）：

```
我在用 Grasshopper 1.x + Linked C# 组件。请帮我写一个 .cs 文件，目标：
- 输入：[NurbsSurface 列表 srfList, double 步长 step, double 最大步数 maxSteps]
- 输出：[List<Curve> 流线, List<Point3d> 终点]
- 算法说明：[从 srfList 各面重心出发，每步沿最陡下降方向迭代 step，迭代超过 maxSteps 停止；输出每条流线与对应终点]
- 要求：所有 Register 调用写清名称/简称/说明/访问方式；SolveInstance 内对空输入做容错；注释用中文
```

AI 会返回完整 Register + SolveInstance，把内容整段贴回 .cs → Save → Watch 自动重载 → 端口出现在画布即可。

## 五、注意事项

- **Watch Source File 建议始终勾选**，开发周期省事；结束发布 .gh 前再 Detach 让组件自包含
- **.cs 文件名可以改**，组件看的是内部 GUID 的关联，不是文件名
- **跨机器共享 .gh**：要么走 Embedded Source 模式（拷过去就行），要么同事之间同步 .cs 文件
- **找不到 Source 重载**：如果菜单显示 Source: not selected，多半是 .cs 文件被删了或路径变了，重新 Select Source File 即可
- **GH 版本差异**：GH 1 顶部菜单写法是 `GH_Component.SolveInstance` 子类；GH 2 / Rhino 8 上同样兼容

所属 GH 分组：RSTool / Developer

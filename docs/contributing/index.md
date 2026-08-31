---
title: 贡献指南
description: 参与 RsTool 命令文档建设：反馈问题、修正内容、补充配图或改进站点。零 GitHub 使用经验也能轻松上手。
---

# 贡献指南

RsTool 命令文档是一个开放的开源项目（MIT 许可证），所有内容托管在
[GitHub](https://github.com/xvkong233/rstool_docs) 上。无论是修正一个错别字，
还是补充一整段命令说明，都欢迎参与。

**即使你从未使用过 GitHub，也能轻松贡献力量**——下面提供了从零开始的完整步骤。

## 贡献方式总览

| 你想做的事 | 推荐方式 | 上手难度 |
| --- | --- | --- |
| 发现内容错误（参数写错、描述过时、步骤缺失） | [方式一：提交 Issue](#方式一-提交-issue-反馈问题) | ⭐ 零门槛 |
| 修正错别字、润色文字 | [方式二：网页直接编辑](#方式二网页直接编辑) | ⭐ 零门槛 |
| 补充命令配图、批量修订内容 | [命令数据管线](#命令数据管线)（需本地开发） | ⭐⭐ |
| 改进站点功能、样式、构建流程 | [本地开发环境](#本地开发环境) | ⭐⭐⭐ |

::: tip 一句话选择
只想「告诉你们哪里不对」→ 方式一；想「亲手把错误改掉」→ 方式二；想「深度参与建设」→ 本地开发。
:::

## 方式一：提交 Issue 反馈问题

Issue 是 GitHub 上的「公共留言板」：你描述问题，项目维护者会看到并处理。
**这种方式不需要你会改任何代码或文档**，是新手最推荐的参与方式。

### 第 1 步：注册 GitHub 账号

1. 打开 [github.com](https://github.com/signup)，用邮箱注册一个账号（免费）；
2. 按提示设置用户名和密码，完成邮箱验证即可。

### 第 2 步：打开反馈入口

以下任意一个入口都可以：

- **直达链接**：<https://github.com/xvkong233/rstool_docs/issues/new/choose>
- **从文档站进入**：页面右上角点击 GitHub 图标 → 进入仓库后点击 **Issues** →
  **New issue**；
- **从命令页进入**：命令详情页底部点击「在 GitHub 上编辑此页面」，登录后同样
  可以找到 Issues 入口。

### 第 3 步：选择模板并填写

仓库内置了两个模板，照着提示填写即可：

- **Bug 报告**（文档内容有误）；
- **功能建议**（希望增加或改进什么）。

为了让问题更快被解决，建议写清楚：

- **具体命令名**，例如 `rsAiRender`（注意大小写）；
- **问题描述**：哪里不对？期望是什么？实际看到了什么？
- **截图**：直接把图片粘贴进输入框即可上传；
- **你的环境**：Rhino 版本、RsTool 版本（如适用）。

::: tip 提交后会发生什么
点击 **Submit new issue** 后，维护者会收到通知并在此讨论中回复。
Issue 不是「投诉信箱」，而是协作的起点——你提供的信息越具体，问题解决得越快。
:::

## 方式二：网页直接编辑

适合修正错别字、润色措辞等**小改动**。全程在浏览器里完成，**不需要安装任何软件**。

每个文档页底部都有「**在 GitHub 上编辑此页面**」链接，点击后会打开 GitHub 的
网页编辑器，像编辑聊天消息一样直接修改文字。

### 操作步骤（以修正一个错别字为例）

1. 点击页面底部的「在 GitHub 上编辑此页面」。如果未登录，GitHub 会先引导你登录
   （或注册）账号；
2. 在打开的编辑器中直接修改文字。上方是 Markdown 源码编辑区，可切换
   **Preview** 标签页预览渲染效果；
3. 修改完成后，点击右上角绿色的 **Commit changes...**（提交更改）按钮；
4. 首次贡献时，GitHub 会自动把仓库复制一份到你的账号下（称为 fork），改动会
   先提交到你的副本中——**这一步全部自动完成，按默认选项继续即可**；
5. 填写一句修改说明（例如「修正 rsAiRender 参数表的错别字」），然后点击
   **Propose changes**（提议更改）；
6. 最后点击 **Create pull request**（创建拉取请求），向维护者发出合并申请；
7. 等待维护者审核。合并后站点会自动更新（部署需要几分钟）。

::: details 这些 GitHub 名词是什么意思？

- **Repository（仓库）**：存放本项目全部文件的地方；
- **Fork（复刻）**：把仓库复制一份到你自己的账号下，让你可以随意修改；
- **Branch（分支）**：平行的「草稿版本」，你的改动先落在草稿里，不影响正式内容；
- **Commit（提交）**：一次改动及其说明，相当于带备注的存档；
- **Pull Request（PR，拉取请求）**：「我改好了，请把我的改动合并进正式版本」的申请；
- **Merge（合并）**：维护者审核通过后，把你的改动并入正式版本。

:::

## 命令页面为什么不能直接改

::: danger 每条命令的详情页都是自动生成的，请勿直接编辑
`docs/commands/` 下的**命令详情页和总目录页**，全部由数据源
`scripts/rstool/commands.json` 经生成脚本自动产出。在 GitHub 网页上手动修改这些
页面：改动不会被采纳进数据源，下次自动生成时会被**覆盖丢失**，对应的 PR 也无法
被合并。
:::

因此：

- 如果你想修改的是**命令内容**（功能描述、参数表、交互流程、教学视频等），
  请改用[方式一（Issue）](#方式一-提交-issue-反馈问题)，由维护者把修改落入数据源；
  有开发经验的朋友可以参考下文[命令数据管线](#命令数据管线)自行完成；
- **可以直接编辑**的页面包括：本页（贡献指南）、[站点首页](/)，以及配置与主题
  代码（需要本地开发）。

## 本地开发环境

适合补充配图、批量修订、改进站点。需要基本的命令行与 Git 使用经验。

### 环境要求

- [Node.js](https://nodejs.org) 20+
- [pnpm](https://pnpm.io) 11+
- [Git](https://git-scm.com)（新手也可以用图形界面的
  [GitHub Desktop](https://desktop.github.com)）

### 获取代码并启动

```sh
git clone https://github.com/xvkong233/rstool_docs.git
cd rstool_docs
pnpm install
pnpm docs
```

访问 `http://localhost:5173` 即可看到站点，修改内容后热更新。构建与预览生产
版本：

```sh
pnpm docs:build
pnpm docs:preview
```

### 项目结构

- `docs/index.md`：站点首页（手写）；
- `docs/commands/`：命令页面与总目录（**自动生成**，见下节）；
- `docs/assets/`：页面配图，按命令名分目录；
- `docs/contributing/`：本页；
- `docs/.vitepress/`：站点配置（`config.ts`）、自定义主题与样式（`theme/`）；
- `scripts/rstool/`：命令数据管线（数据源、提取与生成脚本、校验脚本）。

更完整的工程说明见仓库根目录的
[README](https://github.com/xvkong233/rstool_docs#readme)。

## 命令数据管线

命令页面的内容流向是：**数据源 → 生成器 → 页面 → 校验**。修改命令内容请从这里
入手，而不是直接改页面：

```sh
# 1. 修改数据源 scripts/rstool/commands.json（命令的功能、参数、流程等内容）
#    如需从上游 HTML 重新提取全部数据：
node scripts/rstool/extract_commands_data.js

# 2. 重新生成 docs/commands/ 下的所有页面
node scripts/rstool/generate_commands_pages.cjs

# 3. 校验完整性：图片引用、参数表格、生成器漂移、首页计数
pnpm rstool:verify
```

补充或替换配图：

- 图片放入 `docs/assets/<命令名>/` 目录；
- 在 `commands.json` 中以 `assets/<命令名>/文件名` 引用，生成器会自动改写为页面
  相对路径；
- 文件名建议带有语义（如 `image3_inpaint_workspace.jpg`），便于后续维护。

::: warning 校验脚本会拦截「漂移」
`pnpm rstool:verify` 会把生成器输出与 `docs/commands/` 现状做 diff。任何绕过
数据管线的手改都会在这里现形，提交前请确保校验通过。
:::

## 提交信息与 Pull Request 规范

提交信息（commit message）遵循 [Angular 风格约定](
https://github.com/xvkong233/rstool_docs/blob/main/.github/commit-convention.md)，
格式为 `类型(范围): 描述`，描述可使用中文：

```sh
docs(commands): 修正 rsAiRender 参数表默认值
fix(theme): 修复首页深色模式下 logo 看不清
```

Pull Request 建议：

1. 从 `main` 检出主题分支，一个 PR 聚焦一件事；
2. 提交前完成下面的自检清单；
3. 按模板填写 PR 描述并关联 Issue（如 `fixes #123`）。

### 提交前自检清单

- [ ] `pnpm format:fail` —— Prettier 格式检查通过
- [ ] `pnpm docs:build` —— 文档站可正常构建
- [ ] `pnpm rstool:verify` —— 改动涉及命令内容或图片时必须通过
- [ ] CI 全绿（仓库会自动运行格式、文档构建与内容校验）

::: tip 审核与部署
维护者审核通过后会合并你的 PR。站点托管在 Vercel 上，合并后自动部署，几分钟后
即可在 [docs.rstoolarchi.com](https://docs.rstoolarchi.com) 看到你的贡献。
:::

## 反馈与交流

- **问题反馈**：
  [GitHub Issues](https://github.com/xvkong233/rstool_docs/issues)（推荐，方便跟踪）；
- **RsTool 官网**：<https://www.rstoolarchi.com>；
- **犀流堂**：<https://www.rhinostudio.cn>。

## 许可证

本项目采用
[MIT 许可证](https://github.com/xvkong233/rstool_docs/blob/main/LICENSE)发布。
提交贡献即表示你同意将贡献内容以上述许可证发布。

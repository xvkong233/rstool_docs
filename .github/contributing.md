# RsTool Docs 贡献指南

你好！很高兴你有兴趣为 RsTool Docs 做贡献。在提交贡献之前，请先花几分钟阅读以下指南。

> [!TIP]
> **没有 GitHub 使用经验？** 请先阅读文档站中的
> [图文版贡献指南](https://docs.rstoolarchi.com/contributing/)：从注册账号、提交
> Issue 到网页直接编辑，全程手把手。本页是面向开发者的技术版指南。

你可以通过以下方式参与贡献：

- **修正文档内容**：命令描述、参数表、交互流程中的错误或过时信息；
- **补充配图**：为缺少配图的命令添加界面截图或案例图；
- **改进站点**：导航、搜索、主题样式、构建脚本等工程改进；
- **反馈问题**：通过 [Issue](https://github.com/xvkong233/rstool_docs/issues) 报告文档错误或提出建议（见下文[反馈问题](#反馈问题issue)一节）。

## 反馈问题（Issue）

仓库内置了两个 Issue 模板，新建 Issue 时请选择对应模板填写：

- 🐛 **[Bug 报告](https://github.com/xvkong233/rstool_docs/issues/new?template=bug_report.yml)**：文档内容错误（命令描述、参数表、交互流程、配图）或站点功能异常（导航、搜索、样式等）；
- 🚀 **[功能建议](https://github.com/xvkong233/rstool_docs/issues/new?template=feature_request.yml)**：希望新增或改进的内容与站点功能。

提交时建议写清楚：具体命令名（如 `rsAiRender`，注意大小写）、所在页面链接、
问题描述与期望表现，并附上截图（Issue 编辑框支持直接粘贴图片）。
`docs/commands/` 下的命令页面由数据管线自动生成，内容纠错请通过 Issue 反馈，
或按下文「命令页面是自动生成的」一节的流程修改数据源，不要直接改这些页面。

## 环境要求

- [Node.js](https://nodejs.org) 20+（CI 在 22 / 24 / 26 上运行）
- [pnpm](https://pnpm.io) 11+

## 本地开发

克隆仓库并安装依赖：

```sh
git clone https://github.com/xvkong233/rstool_docs.git
cd rstool_docs
pnpm install
```

启动文档站开发服务（首次会先构建 VitePress 产物，请耐心等待）：

```sh
pnpm docs
```

访问 <http://localhost:5173>，修改内容后会热更新。

构建与本地预览生产站点：

```sh
pnpm docs:build
pnpm docs:preview
```

## 项目结构

- `docs/index.md`：站点首页（手写内容）
- `docs/commands/`：命令页面与分类总目录（**自动生成**，见下节）
- `docs/assets/`：页面配图，按命令名分目录存放
- `docs/public/`：站点级静态文件（logo 等）
- `docs/.vitepress/config.ts`：站点配置（标题、导航、侧栏、主题）
- `docs/.vitepress/theme/`：自定义主题与全局样式
- `scripts/rstool/`：命令数据管线（数据源、提取与生成脚本、校验脚本）

## ⚠️ 命令页面是自动生成的，不要直接修改

`docs/commands/` 下的所有页面（包括 `index.md` 总目录）由生成器从数据源
`scripts/rstool/commands.json` 自动生成。**直接手改这些 Markdown 会在下次生成时被
覆盖**，校验脚本也会报告「生成器漂移」。

修改命令内容的正确流程：

1. 修改数据源 `scripts/rstool/commands.json`（命令的 `name` / `zh` / `cat` /
   `sub` / `desc` 与 `details` 内容）；如需从上游 HTML 重新提取全部数据，运行
   `node scripts/rstool/extract_commands_data.js`；
2. 重新生成页面：

   ```sh
   node scripts/rstool/generate_commands_pages.cjs
   ```

3. 运行完整性校验（图片引用、参数表格、生成器漂移、首页计数）：

   ```sh
   pnpm rstool:verify
   ```

4. 将更新后的数据源与重新生成的页面一并提交。

如需调整页面模板或版式（而不是数据内容），请修改生成器脚本
`scripts/rstool/generate_commands_pages.cjs`，然后同样执行步骤 2–4。

### 添加或替换配图

- 配图放入 `docs/assets/<命令名>/` 目录；
- 在 `commands.json` 中以 `assets/<命令名>/文件名` 引用（生成器会自动改写为页面的
  相对路径）；
- 文件名建议带有语义（如 `image3_inpaint_workspace.jpg`），便于后续维护；
- 校验脚本会逐一核对图片引用对应的文件是否存在。

## 手写内容的修改范围

以下内容可以直接编辑，不受生成器影响：

- `docs/index.md`（首页 hero / features / 计数信息——注意首页中的命令数与分类数
  需与 `commands.json` 一致，`pnpm rstool:verify` 会检查）；
- `docs/.vitepress/config.ts`（导航、侧栏、编辑链接等站点配置）；
- `docs/.vitepress/theme/`（自定义主题与样式）；
- `docs/public/`（站点级静态资源）。

## 提交规范

提交信息需遵循 [commit-convention.md](./commit-convention.md)（Angular 风格），
以便自动生成变更日志。描述可使用中文，例如：

```
docs(commands): 修正 rsAiRender 参数表默认值
fix(theme): 修复首页深色模式下 logo 看不清
```

允许在 PR 期间保留多个小提交，GitHub 会在合并时自动压缩（squash）。

## Pull Request 指南

1. 从 `main` 检出主题分支，PR 目标分支同样为 `main`；
2. 一个 PR 聚焦一件事，便于评审；
3. 提交前请在本地完成自检：

   ```sh
   pnpm format:fail           # Prettier 格式检查
   pnpm docs:build            # 文档站可正常构建
   pnpm rstool:verify         # 文档完整性校验
   ```

4. CI 会自动运行上述必要检查（格式 + 文档构建 + 内容校验 + 站点配置类型检查），
   请保持其通过；
5. 创建 PR 时请按模板填写描述与关联 Issue。

修复文档错误的 PR 无需提前开 Issue，直接提交即可；新增功能建议先开 Issue 讨论。

## 许可证

提交贡献即表示你同意将贡献内容以本仓库的
[MIT 许可证](https://github.com/xvkong233/rstool_docs/blob/main/LICENSE)发布。

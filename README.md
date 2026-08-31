<div align="center">

<img src="docs/public/logo.png" width="128" alt="RsTool Logo" />

# RsTool Docs

**RsTool Rhino 插件命令完全参考手册**

基于 [VitePress](https://vitepress.dev) 构建，276 条命令逐条独立成页，
功能、参数、交互流程与配图一站速查。

[![CI](https://github.com/xvkong233/rstool_docs/actions/workflows/test.yml/badge.svg)](https://github.com/xvkong233/rstool_docs/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%E2%89%A520-brightgreen.svg)](./.github/contributing.md#环境要求)
[![pnpm](https://img.shields.io/badge/pnpm-11-orange.svg)](https://pnpm.io)
[![VitePress](https://img.shields.io/badge/VitePress-2.0%20alpha-646CFF.svg)](https://vitepress.dev)

**[📖 在线阅读](https://docs.rstoolarchi.com)** ·
**[🗂️ 命令手册](https://docs.rstoolarchi.com/commands/)** ·
**[🤝 参与贡献](https://docs.rstoolarchi.com/contributing/)** ·
**[🐛 反馈问题](https://github.com/xvkong233/rstool_docs/issues)**

</div>

## ✨ 特性

- **📖 命令完全手册**——276 条命令逐条独立成页，含功能说明、参数表与操作流程；
- **🗂️ 分类导航**——建筑、几何、地形、视图出图、GH 组件等 18 大分类侧栏导航，按需速查；
- **🔍 全文搜索**——本地搜索引擎毫秒级响应，按命令名、中文名或功能描述直达；
- **⚙️ 参数与交互详解**——每个参数给出类型、默认值、取值范围与说明，交互流程逐步拆解；
- **🖼️ 界面配图**——关键操作配以界面截图与案例图，照着做即可上手。

## 🚀 快速开始

环境要求：**Node.js 20+**、**pnpm 11+**。

```bash
pnpm install
pnpm docs            # 启动开发服务 → http://localhost:5173
```

```bash
pnpm docs:build      # 构建生产站点
pnpm docs:preview    # 本地预览构建产物
```

## 📁 项目结构

文档存储形式与 [vuejs/vitepress](https://github.com/vuejs/vitepress) 官方仓库一致，
`docs/` 只包含站点内容：

| 路径 | 说明 |
| --- | --- |
| `docs/index.md` | 站点首页 |
| `docs/commands/` | 命令页面（每条命令一个 Markdown 文件）与分类总目录 |
| `docs/contributing/` | 贡献指南（面向新手的详细图文版） |
| `docs/assets/` | 页面配图；`docs/public/` 为站点级静态文件 |
| `docs/.vitepress/` | 站点配置（`config.ts`）与自定义主题（`theme/`） |
| `scripts/rstool/` | 命令数据管线（`commands.json` 数据源、生成与校验脚本） |

## 🔄 命令数据管线

命令页面由数据源自动生成，源资料与生成脚本位于 `scripts/rstool/`：

```bash
# 从 RsTool_Command_Reference.html 提取数据，
# 生成 commands.json 与 commands.data.js
node scripts/rstool/extract_commands_data.js

# 从 commands.json 生成 docs/commands/<slug>.md 每命令独立页，
# 以及分类总目录页 docs/commands/index.md
node scripts/rstool/generate_commands_pages.cjs

# 校验文档完整性：图片引用、参数表格、生成器漂移、首页计数
pnpm rstool:verify
```

> [!IMPORTANT]
> `docs/commands/` 下的页面均为自动生成，**请勿直接修改**；修改命令内容请走
> 上述数据管线（详见[贡献指南](https://docs.rstoolarchi.com/contributing/)）。

## 🤝 参与贡献

欢迎修正文档错误、补充配图或改进站点！

- **没有 GitHub 使用经验？** 请阅读文档站中的
  **[贡献指南](https://docs.rstoolarchi.com/contributing/)**——从注册账号、提交
  Issue 到网页直接编辑，全程手把手；
- **开发者**请参阅 [`CONTRIBUTING.md`](./.github/contributing.md) 与
  [提交信息约定](./.github/commit-convention.md)。

## 📄 许可证

本项目采用 [MIT](./LICENSE) 许可证。

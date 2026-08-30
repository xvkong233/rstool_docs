# RsTool Docs

RsTool Docs 是基于 VitePress 的 RsTool 命令文档站点，包含命令说明、参数信息、配图与使用示例。

## 项目结构

文档存储形式与 [vuejs/vitepress](https://github.com/vuejs/vitepress) 官方仓库一致，`docs/` 只包含站点内容：

- `docs/`：文档站点源码（Markdown 页面 + 静态资源）
- `docs/.vitepress/`：站点配置与自定义主题（`config.ts`、`theme/`）
- `docs/commands/`：命令页面（每条命令一个 Markdown 文件，URL 安全的 kebab-case 命名）与分类总目录页 `index.md`
- `docs/assets/`：页面配图；`docs/public/`：站点级静态文件（logo 等）
- `scripts/rstool/`：命令数据管线（`commands.json` 数据源、生成脚本、docx/xlsx/html 原始资料）

## 环境要求

- Node.js 18+
- pnpm 11+

## 本地开发

```bash
pnpm install
pnpm docs
```

## 构建与预览

```bash
pnpm docs:build
pnpm docs:preview
```

## 命令数据管线

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

## 常用脚本

- `pnpm docs`：启动文档开发服务
- `pnpm docs:build`：构建文档站点
- `pnpm docs:preview`：预览构建产物

## 许可证

本项目采用 [MIT](./LICENSE) 许可证。

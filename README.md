# RsTool Docs

RsTool Docs 是基于 VitePress 的 RsTool 命令文档站点，包含命令说明、参数信息、配图与使用示例。

## 项目结构

- `/home/runner/work/rstool_docs/rstool_docs/docs`：文档站点源码
- `/home/runner/work/rstool_docs/rstool_docs/docs/.vitepress`：站点配置
- `/home/runner/work/rstool_docs/rstool_docs/docs/commands`：命令页面

## 环境要求

- Node.js 18+
- pnpm 11+

## 本地开发

```bash
cd /home/runner/work/rstool_docs/rstool_docs
pnpm install
pnpm docs
```

## 构建与预览

```bash
cd /home/runner/work/rstool_docs/rstool_docs
pnpm docs:build
pnpm docs:preview
```

## 常用脚本

- `pnpm docs`：启动文档开发服务
- `pnpm docs:build`：构建文档站点
- `pnpm docs:preview`：预览构建产物

## 许可证

本项目采用 [MIT](./LICENSE) 许可证。

---
title: Contributing
description: Help improve the RsTool command documentation by reporting errors, refining content, adding illustrations, or improving the site.
---

# Contributing

The RsTool command documentation is an open-source project released under the MIT License. All content is hosted on [GitHub](https://github.com/xvkong233/rstool_docs). Contributions are welcome, whether you are fixing one typo or adding a complete command description.

**You can contribute even if you have never used GitHub.** The instructions below start from the basics.

## Ways to contribute

| What you want to do | Recommended method | Difficulty |
| --- | --- | --- |
| Report incorrect or outdated content | [Option 1: Report an issue](#option-1-report-an-issue) | ⭐ Beginner |
| Fix a typo or improve wording | [Option 2: Edit on GitHub](#option-2-edit-on-github) | ⭐ Beginner |
| Add command images or make bulk changes | [Command data pipeline](#command-data-pipeline) | ⭐⭐ |
| Improve the site, styles, or build process | [Local development](#local-development) | ⭐⭐⭐ |

::: tip Quick choice
Want to tell us what is wrong? Use an issue. Want to fix a small error yourself? Edit on GitHub. Want to make substantial changes? Set up the project locally.
:::

## Option 1: Report an issue

An issue is a public message to the project maintainers. It requires no coding or document-editing experience and is the easiest way to report a problem.

### Step 1: Create a GitHub account

Open [github.com](https://github.com/signup), register for a free account, and complete email verification.

### Step 2: Open the issue form

Use any of these routes:

- Open the [new issue page](https://github.com/xvkong233/rstool_docs/issues/new/choose) directly.
- Select the GitHub icon in the documentation header, then choose **Issues → New issue**.
- From a command page, use **Edit this page on GitHub**, then navigate to the repository's Issues section.

### Step 3: Choose a template and describe the problem

The repository provides templates for bug reports and feature requests. Include:

- The exact command name, including capitalization, such as `rsAiRender`.
- What is wrong, what you expected, and what you observed.
- A screenshot, if useful.
- Your Rhino and RsTool versions, when relevant.

::: tip What happens next?
After you select **Submit new issue**, maintainers can discuss and track the report publicly. Clear, specific details help resolve it faster.
:::

## Option 2: Edit on GitHub

This method is ideal for small changes such as fixing typos. It runs entirely in your browser and requires no local software.

1. Select **Edit this page on GitHub** at the bottom of an editable page and sign in when prompted.
2. Edit the Markdown source and use the **Preview** tab to check the result.
3. Select **Commit changes...**.
4. For a first contribution, GitHub creates a fork under your account automatically; keep the default options.
5. Enter a short summary and select **Propose changes**.
6. Select **Create pull request** to submit the change for review.
7. Once the pull request is merged, the site updates automatically after deployment.

::: details Common GitHub terms

- **Repository:** the project and all of its files.
- **Fork:** a copy of the repository under your account.
- **Branch:** an isolated line of work that does not change the published content yet.
- **Commit:** a saved set of changes with a description.
- **Pull request (PR):** a request to merge your changes into the project.
- **Merge:** accepting reviewed changes into the main project.

:::

## Why command pages cannot be edited directly

::: danger Command detail pages are generated files
All command detail pages and both command indexes under `docs/commands/` and `docs/en/commands/` are generated from `scripts/rstool/commands.json` and the English translation data. A manual edit will be overwritten the next time the generator runs and cannot be accepted as the source of truth.
:::

To change command content, report an issue or follow the [command data pipeline](#command-data-pipeline). Hand-written pages such as the home page and this guide can be edited directly.

## Local development

You need basic Git and command-line experience plus:

- [Node.js](https://nodejs.org) 20 or later
- [pnpm](https://pnpm.io) 11 or later
- [Git](https://git-scm.com), or a graphical client such as [GitHub Desktop](https://desktop.github.com)

Clone and start the site:

```sh
git clone https://github.com/xvkong233/rstool_docs.git
cd rstool_docs
pnpm install
pnpm docs
```

Open `http://localhost:5173`. Changes appear through hot reload. To build and preview the production site:

```sh
pnpm docs:build
pnpm docs:preview
```

The main project directories are:

- `docs/index.md` and `docs/en/index.md`: hand-written home pages.
- `docs/commands/` and `docs/en/commands/`: generated command pages and indexes.
- `docs/assets/`: shared illustrations.
- `docs/contributing/` and `docs/en/contributing/`: contribution guides.
- `docs/.vitepress/`: site configuration and custom theme.
- `scripts/rstool/`: command data, generators, and verification scripts.

See the repository [README](https://github.com/xvkong233/rstool_docs#readme) for more engineering details.

## Command data pipeline

Command content flows from **source data → generator → pages → verification**. Edit the source rather than a generated page:

```sh
# 1. Update scripts/rstool/commands.json.
#    To extract all data again from the upstream HTML:
node scripts/rstool/extract_commands_data.js

# 2. Update scripts/rstool/i18n/commands.en.json when Chinese source text changes.

# 3. Regenerate both language versions.
node scripts/rstool/generate_commands_pages.cjs

# 4. Verify media, tables, generated-page drift, and translation freshness.
pnpm rstool:verify
```

For illustrations:

- Place files in `docs/assets/<command-name>/`.
- Reference them as `assets/<command-name>/<file-name>` in `commands.json`; the generator rewrites the relative path for each locale.
- Use descriptive file names, such as `image3_inpaint_workspace.jpg`.

::: warning Verification catches drift
`pnpm rstool:verify` compares both sets of generated pages with fresh generator output. It also rejects missing or stale English translations, so source and translation changes must be committed together.
:::

## Commit and pull request guidelines

Commit messages follow the [Angular convention](https://github.com/xvkong233/rstool_docs/blob/main/.github/commit-convention.md) using `type(scope): description`, for example:

```sh
docs(commands): correct the default value for rsAiRender
fix(theme): improve logo contrast in dark mode
```

Keep each pull request focused. Before submitting it, run:

- [ ] `pnpm format:fail`
- [ ] `pnpm docs:build`
- [ ] `pnpm rstool:verify` when command content or media changes
- [ ] Confirm that CI passes

## Feedback and community

- [GitHub Issues](https://github.com/xvkong233/rstool_docs/issues)
- [RsTool website](https://www.rstoolarchi.com)
- [Rhino Studio](https://www.rhinostudio.cn)

## License

This project is released under the [MIT License](https://github.com/xvkong233/rstool_docs/blob/main/LICENSE). By contributing, you agree to publish your contribution under that license.

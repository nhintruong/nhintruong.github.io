# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> `@AGENTS.md` (imported above) holds the essential commands, pre-commit checklist, and config rules.
> It _links_ to `.github/copilot-instructions.md` but does not auto-load it — read that file for the full
> build/CI/CD reference and the "Common Pitfalls & Workarounds" list before debugging build or deploy failures.

## What this repo actually is

This is **Nhi N. Truong's personal academic website** (https://nhintruong.github.io) — a customized fork of the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, not a clean template. Most work here is **content
editing** (the author's bio, CV, publications, projects), not theme development. Before changing shared theme files
(`_layouts/`, `_includes/`, `_sass/`), prefer the content/data layer below — theme edits are harder to reconcile with
upstream and are rarely what's wanted.

It is a **personal (user) site**, so `url: https://nhintruong.github.io` with an **empty `baseurl`**. Never set a
`baseurl` here — doing so breaks every asset and link.

## Content architecture (the big picture)

al-folio is **data-driven**: pages are thin and pull from collections and `_data/` YAML. To change what appears on the
site, you almost always edit data/content, not templates.

- **Collections** (declared in `_config.yml` under `collections:`, all rendered as pages):
  `_news/` (announcements on the homepage), `_projects/` (project cards), `_teachings/` (courses), `_books/` (bookshelf).
  Each entry is a Markdown file with frontmatter; ordering uses an `importance:` field.
- **`_pages/`** — the top-level pages (`about.md` is the homepage, plus `cv.md`, `publications.md`, `projects.md`,
  `teaching.md`, `news.md`, `books.md`, `repositories.md`, `blog.md`). `dropdown.md` builds nav dropdowns.
- **`_data/`** — structured site data: `cv.yml` (the CV — also can be sourced from RenderCV, see `render-cv.yml` workflow),
  `socials.yml` (contact/social links), `coauthors.yml`, `venues.yml`, `citations.yml`, `repositories.yml`.
- **`_bibliography/papers.bib`** — publications. Rendered by `jekyll-scholar` via the `bib.liquid` layout. Supports
  al-folio custom BibTeX fields (`abbr`, `pdf`, `code`, `preview`, `selected`, `doi`, …).
- **`_layouts/`** — `.liquid` page templates (`about`, `cv`, `bib`, `distill`, `post`, `book-review`, `course`, …).
  `default.liquid` is the shell; `distill.liquid` is for rich academic blog posts.

## Custom plugins

`_plugins/*.rb` are local Ruby plugins beyond the gem dependencies — relevant when citations or bibliography behave
unexpectedly: `google-scholar-citations.rb` and `inspirehep-citations.rb` (auto-fetch citation counts),
`hide-custom-bibtex.rb`, `details.rb`, `external-posts.rb`, `remove-accents.rb`, `file-exists.rb`. The
`update-citations.yml` workflow runs the citation plugins on a schedule and commits results.

## File-type rules (read the matching one before editing)

The `.github/instructions/` directory has per-filetype guides referenced from AGENTS.md — consult the relevant one:
`markdown-content`, `yaml-configuration`, `bibtex-bibliography`, `liquid-templates`, `javascript-scripts`.

## Conventions specific to this site

- **No decorative icons.** The author prefers plain text over decorative icons across the site — do not add emoji/icon
  ornaments to content.
- **Commit messages** follow `.github/GIT_WORKFLOW.md`: `<type>: <subject>` with types `feat|fix|docs|style|config|chore`.
  Stage files explicitly (`git add <file>`), not `git add .`.
- **Prettier is enforced in CI** (`prettier.yml`) with `@shopify/prettier-plugin-liquid`. Run `npx prettier . --write`
  before committing or the PR check fails.

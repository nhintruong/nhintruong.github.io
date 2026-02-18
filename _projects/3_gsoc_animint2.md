---
layout: page
title: animint2 (GSoC)
description: Migrating the animint2 R package from PhantomJS to Chrome for Google Summer of Code.
importance: 3
category: software
---

As a **Google Summer of Code 2024** contributor for [The R Project for Statistical Computing](https://www.r-project.org/), I modernized the `animint2` R package's testing and screenshot infrastructure.

**Key contributions:**

- Migrated the package from PhantomJS to Chrome, refactoring the visualization pipeline in R to enable headless browser testing and automated screenshot capture
- Implemented automated testing with `testthat` across Windows, Ubuntu, and macOS environments
- Developed a new HTML table layout system for multi-plot arrangements
- Built automated screenshot export using `webshot2` and ported 50+ interactive visualizations to a GitHub Pages gallery with expanded documentation

# AIU News & Agent Reports

Markdown here feeds the homepage **AIU / News & Agent Reports** panel only
(not Student B News & Announcements).

Put files in `en/` or `ko/`:

```md
---
title: Short headline
description: One or two sentences shown in the AIU news panel.
date: 2026-09-12
link: https://example.com/optional-external-url
image: /images/aiu-news/optional-cover.jpg
publish_social: true
---

Optional longer body. When `publish_social` is true, a newly added file
pushed to `main` is posted to X, Facebook, and LinkedIn.

The Student B Publisher desktop app writes only the title, reviewed short
description, date, and optional image. It deliberately does not copy the full
social post into this repository.
```

- Student B left-column news stays in `public/data/newsupdate.json` (manual JSON)
- Run `npm run build:news` to regenerate `public/data/aiu-news.json`

# nhintruong.github.io

Source for my personal academic website, **[nhintruong.github.io](https://nhintruong.github.io)**.

I'm Nhi N. Truong, a CS & Economics student at DePauw University and a machine learning researcher at Stanford. The site collects my bio, CV, publications, and projects.

## Local development

The site is built with [Jekyll](https://jekyllrb.com/) and served via GitHub Pages. To run it locally with Docker:

```bash
docker compose up
# then open http://localhost:8080
```

Before committing, format files with Prettier:

```bash
npx prettier . --write
```

## Credits

Built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, released under the MIT License (see [LICENSE](LICENSE)).

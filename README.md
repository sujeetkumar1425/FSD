# FSD

A small frontend project / collection of HTML exercises and assignments.

Contents

- `ASSINGMENT 1/` — Assignment HTML files (cart, civil, cse, ece, eee, login, registration, etc.)
- `bootstrap/` — Bootstrap example pages (index.html, style.css)
- `flexbox/` — Flexbox examples and styles
- `form/` — Form examples and related assets
- `tcs_codevita/` — Example pages for practice
- `web/` and other root HTML files — individual page demos and assets

Quick start

This repository is a static collection of HTML/CSS files. To view the pages locally:

1. Open any `.html` file in your browser directly (double-click) OR
2. Serve the folder with a simple HTTP server (recommended) and open http://localhost:8000

On Windows (PowerShell):

```powershell
# from the repo root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Contributing

- Use branches for feature changes.
- Keep large binary files (zips, images) out of the repo where possible. A `.gitignore` is already present to exclude common binaries and IDE files.

Notes

- The `form` directory was converted from a submodule to a normal directory; if you need it restored as a submodule, provide the submodule URL.
- I renamed `Boot Strap/` to `bootstrap/` to avoid spaces in the path.

License

This repository does not include a license file. Add a `LICENSE` file if you want to set reuse terms (e.g., MIT).

---

If you'd like, I can:
- Add a short project description per-assignment, or
- Add an automatic preview (GitHub Pages) configuration and a basic `index.html` landing page.


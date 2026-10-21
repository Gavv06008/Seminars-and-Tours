# Seminars & Tours

Static website — no build step. Upload this whole folder to Vercel, Netlify or GitHub Pages.

```
index.html        page structure (Home, About, Coordination, Outputs)
css/styles.css    all styling
js/main.js        navigation + the SEMINAR DATA list (edit your 5 seminars here)
images/           background photos — put your own photos and certificates here too
```

## Common edits
- **Seminars / narratives:** open `js/main.js`, edit the `SEMINARS` list at the top.
- **Add a photo:** save it in `images/`, then replace a `<div class="doc-photo">…</div>` with `<img src="images/your-photo.jpg" alt="Description">`.
- **Profile photo:** in `index.html`, find the `portrait` block and add `<img src="images/me.jpg" alt="George A. Villareal">`.
- **Google Form link:** in `index.html`, replace `href="#"` on the "Open Google Form" button.

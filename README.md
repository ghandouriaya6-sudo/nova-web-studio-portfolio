# Nova Web Studio: portfolio site

Plain HTML, CSS and JavaScript. No build step. Google Fonts (Inter, Sora) load from the web with system fallbacks.

## Test locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` here and visit http://localhost:8000.

## Publish with GitHub Pages
1. Create a GitHub repository (for example `nova-web-studio`) and upload these files to the root.
2. Go to Settings > Pages. Under "Build and deployment", choose "Deploy from a branch", select `main` and `/ (root)`, then Save.
3. After a minute, the site appears at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Personalize before launching
- [ ] Replace `your-email@example.com` (the mailto link and the visible text in the contact section)
- [ ] Rewrite the About placeholder copy in your own words; add your name only if you want it shown
- [ ] Update the page title and meta description if your positioning changes
- [ ] Confirm the Brightwell live demo and GitHub links still open
- [ ] Add more projects as you finish them (copy the `.project` block); only list real work
- [ ] Add a location, phone or social links if you want them
- [ ] Consider a privacy note if you add analytics later
- [ ] Add a favicon file or Open Graph image if you want link previews
- [ ] Test at 360px, 768px and desktop widths; Tab through with a keyboard; run Lighthouse

The site has no contact form on purpose, since there is no backend to receive messages.

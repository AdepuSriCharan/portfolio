# Portfolio — Adepu Sri Charan

Personal portfolio site. React + Vite, deployed to GitHub Pages at
[adepusricharan.github.io/portfolio](https://adepusricharan.github.io/portfolio/).

## Running it

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
npm run deploy   # build, then publish dist/ to the gh-pages branch
```

## Where the content lives

**All site content is in `src/data/constants.js`.** Components only render it —
to update the site, edit that file, not the JSX.

| Export | Renders in |
| --- | --- |
| `personalInfo`, `heroStats` | Hero |
| `aboutMe`, `education` | About |
| `experience` | Experience |
| `projects` | Projects |
| `openSource` | Open Source |
| `skills` | Skills |
| `certifications` | Certifications |
| `navLinks` | Navbar + footer |

Adding a nav entry means adding to `navLinks` **and** giving the section a
matching `id` — the navbar derives its scroll-spy targets from `navLinks`.

## Layout

```
src/
  data/constants.js      all content
  utils/motion.js        shared framer-motion variants + viewport config
  components/<Name>/     one folder per section: <Name>.jsx + <Name>.module.css
  index.css              theme tokens, base styles, utility classes
public/
  Profile_1.png                  hero/about photo
  Adepu_Sri_Charan_Resume.pdf    reference copy (site links to Drive, not this)
  resume.tex                     LaTeX source for the PDF above
```

## Themes

Three themes (dark, light, midnight) defined as CSS custom properties on
`:root[data-theme='...']` in `src/index.css`. The choice persists in
`localStorage` under `portfolio-theme`. Any new colour must be defined in all
three blocks.

## Resume

The site's Resume button points at a **Google Drive link**, set as
`personalInfo.resumeLink` in `src/data/constants.js`. This is deliberate:
replacing the file in Drive updates the resume everywhere without rebuilding or
redeploying the site. Small resume edits need no code change at all.

Update the Drive file in place (keep the same file ID) so the link stays valid.
Only change `resumeLink` if the Drive file ID itself changes.

`public/resume.tex` is the LaTeX source, and
`public/Adepu_Sri_Charan_Resume.pdf` is a compiled copy kept alongside it for
reference — the site does **not** link to that PDF. To rebuild it:

```bash
pdflatex resume.tex   # needs titlesec, marvosym, enumitem, fancyhdr, preprint
```

The layout is tuned to fit on exactly one page; adding lines will overflow onto
a second.

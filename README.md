# Aikagra Gupta · एकाग्र

A static portfolio at https://aikagra.vercel.app/, built with HTML, CSS, and JavaScript. No package dependencies or build step.

## Local preview

Serve this directory over HTTP so the video archive can load `media.json`:

```powershell
python -m http.server 4187
```

Open http://localhost:4187.

## Deployment

The Vercel project is `portfolio`, under `aikagras-projects`. From this folder:

```powershell
vercel --prod --yes
```

Keep the complete assets directory in each deployment. Ten optimized H.264/AAC films are hosted directly from `assets/films/`; Google Drive originals remain linked in the viewer. Videos load only when opened. The film section features Dreamcatcher, Herald, and Digex 2024. Its expandable archive excludes featured IDs and duplicate sources, and displays the remaining seven videos.

## Content

- `index.html`: biography, projects, experience, and contact details
- `styles.css`: base responsive layouts and accessibility preferences
- `cinematic.css`: film grain, halation, portrait duotone, poster typography, and scene entrances
- `script.js`: navigation and native video/photography dialogs
- `media.json`: ten films, titles, durations, aspect ratios, and original-file links
- `assets/films/`: web video exports and real frame posters
- `assets/vsco/` and `photos.json`: fourteen VSCO photographs, six selected and eight additional; no location-specific labels
- `assets/film-grain.svg`: lightweight procedural film texture
- `assets/gallery/`: previous gallery assets, retained for the studio project preview
- `assets/novo-website.jpg`: actual heynovo.ai website capture
- `assets/aikagra-childhood-restored.png`: restored monochrome childhood portrait
- `assets/Aikagra_Gupta_CV.pdf`: résumé

The user selected Khaled Mehran's Portfolio 2026 as the visual reference and confirmed the name spelling **एकाग्र**. See `DESIGN.md` for the design decisions.

## Design guidance

`.design-rules` is the requested apple-design-skill Git submodule. Clone with `git clone --recurse-submodules`, or run `git submodule update --init` in an existing checkout. Follow `AGENTS.md` for reviews. Design guidance is excluded from deployment with `.vercelignore`.

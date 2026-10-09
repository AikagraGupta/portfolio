const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const closeMenu = () => { menuButton?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('is-open'); };
menuButton?.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); nav?.classList.toggle('is-open', !open); });
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelector('[data-year]').textContent = new Date().getFullYear();
const dialog = document.querySelector('#media-dialog');
const title = document.querySelector('#media-title');
const category = document.querySelector('#media-category');
const body = document.querySelector('#media-body');
const description = document.querySelector('#media-description');
const original = document.querySelector('#media-original');
let previousFocus, currentVideo;
const formatDuration = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
const openViewer = () => { previousFocus = document.activeElement; if (typeof dialog.showModal !== 'function') return false; dialog.showModal(); document.body.classList.add('viewer-open'); return true; };
const clearViewer = () => { currentVideo?.pause(); currentVideo?.removeAttribute('src'); currentVideo?.load(); currentVideo = null; body.replaceChildren(); document.body.classList.remove('viewer-open'); previousFocus?.focus({ preventScroll: true }); };
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', clearViewer);
dialog.addEventListener('click', event => { if (event.target !== dialog) return; const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); });
const mediaPromise = fetch('media.json').then(r => { if (!r.ok) throw new Error('Archive unavailable'); return r.json(); });
async function openVideo(id) {
  try {
    const films = await mediaPromise;
    const film = films.find(item => item.id === id);
    if (!film) throw new Error('Video unavailable');
    title.textContent = film.title;
    category.textContent = film.category + ' · ' + formatDuration(film.duration);
    description.textContent = 'Video by Aikagra Gupta';
    original.href = film.original;
    body.replaceChildren();
    const video = document.createElement('video');
    video.src = film.src; video.poster = film.poster; video.controls = true; video.playsInline = true; video.preload = 'metadata';
    video.setAttribute('aria-label', film.title);
    video.style.aspectRatio = film.width + ' / ' + film.height;
    currentVideo = video; body.append(video);
    video.addEventListener('error', () => { description.textContent = 'This video could not load. Watch the original on Google Drive.'; });
    if (!openViewer()) { window.open(film.original, '_blank', 'noopener'); return; }
    // Media starts only after an explicit viewing action, never when the page loads.
    video.play().catch(() => {});
  } catch {
    title.textContent = 'Video unavailable'; category.textContent = '';
    description.textContent = 'Watch this video in the original archive.';
    original.href = 'https://drive.google.com/drive/folders/1Dq7Fz7RGveXl16O7vFfZGQ5mPBtPK1gh';
    body.replaceChildren(); openViewer();
  }
}
document.addEventListener('click', event => {
  const film = event.target.closest('[data-video]');
  if (film) openVideo(film.dataset.video);
  const photo = event.target.closest('[data-photo]');
  if (photo) {
    title.textContent = photo.dataset.caption; category.textContent = 'Photography'; description.textContent = 'Photograph by Aikagra Gupta'; original.href = photo.dataset.photo;
    const img = document.createElement('img'); img.src = photo.dataset.photo; img.alt = photo.querySelector('img').alt; body.replaceChildren(img);
    if (!openViewer()) window.open(img.src, '_blank', 'noopener');
  }
});
mediaPromise.then(films => {
  const grid = document.querySelector('#film-archive-grid'); grid.replaceChildren();
  films.forEach(film => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'film-card'; button.dataset.video = film.id; button.setAttribute('aria-label', 'Watch ' + film.title + ', ' + formatDuration(film.duration));
    const thumb = document.createElement('div'); thumb.className = 'film-thumbnail';
    const img = document.createElement('img'); img.src = film.poster; img.alt = 'A frame from ' + film.title; img.loading = 'lazy'; img.width = film.width; img.height = film.height;
    const play = document.createElement('span'); play.className = 'play-circle'; play.setAttribute('aria-hidden', 'true'); play.textContent = '▶'; thumb.append(img, play);
    const caption = document.createElement('span'); caption.className = 'film-caption';
    const name = document.createElement('strong'); name.textContent = film.title;
    const meta = document.createElement('span'); meta.textContent = film.category + ' · ' + formatDuration(film.duration); caption.append(name, meta); button.append(thumb, caption); grid.append(button);
  });
}).catch(() => { const link = document.createElement('a'); link.href = 'https://drive.google.com/drive/folders/1Dq7Fz7RGveXl16O7vFfZGQ5mPBtPK1gh'; link.textContent = 'Open the complete video archive on Google Drive'; link.target = '_blank'; link.rel = 'noopener'; document.querySelector('#film-archive-grid').replaceChildren(link); });
const featuredPhotos = new Set([...document.querySelectorAll('[data-photo]')].map(b => b.dataset.photo));
const extraPhotos = document.querySelector('#photo-extra');
for (const place of ['shanghai', 'malaysia']) {
  for (let i = 1; i <= 8; i++) {
    const number = String(i).padStart(2, '0'); const path = 'assets/gallery/' + place + '-' + number + '.jpg'; if (featuredPhotos.has(path)) continue;
    const label = (place === 'shanghai' ? 'Shanghai' : 'Malaysia') + ' · Frame ' + number;
    const b = document.createElement('button'); b.type = 'button'; b.className = 'photo'; b.dataset.photo = path; b.dataset.caption = label; b.setAttribute('aria-label', 'View ' + label);
    const img = document.createElement('img'); img.src = path; img.alt = 'Aikagra’s photograph, ' + label; img.loading = 'lazy'; b.append(img); extraPhotos.append(b);
  }
}

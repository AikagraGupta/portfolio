(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;
  const arrivals = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const arrival = arrivals.get(entry.target);
      if (arrival) { arrival.visible = true; arrival.begin(); }
    });
  }, { threshold: .12 });

  document.querySelectorAll('.portrait, #photo-grid .photo, .photo-extra .photo').forEach(host => {
    const image = host.querySelector(':scope > img');
    if (!image) return;
    const layer = document.createElement('span');
    layer.className = 'flock-layer';
    layer.setAttribute('aria-hidden', 'true');
    const source = image.currentSrc || image.src;
    host.style.setProperty('--flight-time', host.classList.contains('portrait') ? '1.45s' : '.85s');
    // Deterministic flight paths keep repeat visits quiet and avoid random jitter.
    const flights = [[-90,-60,-14],[50,-110,10],[85,-45,-9],[-80,15,12],[10,-80,-8],[65,5,14],[-65,35,-10],[20,75,8],[70,30,-12]];
    flights.forEach(([x,y,turn], index) => {
      const bird = document.createElement('span');
      bird.className = 'flock-fragment';
      const column = index % 3, row = Math.floor(index / 3);
      bird.style.setProperty('--tile-left', column * 100 / 3 + '%');
      bird.style.setProperty('--tile-top', row * 100 / 3 + '%');
      bird.style.setProperty('--tile-position', column * 50 + '% ' + row * 50 + '%');
      bird.style.setProperty('--flight-x', x + '%');
      bird.style.setProperty('--flight-y', y + '%');
      bird.style.setProperty('--flight-turn', turn + 'deg');
      bird.style.setProperty('--flight-delay', (index % 4) * 35 + 'ms');
      layer.append(bird);
    });
    host.append(layer);
    host.classList.add('flock-waiting');
    host.setAttribute('aria-busy', 'true');
    let done = false, ready = false, watchdog;
    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(watchdog);
      observer.unobserve(host);
      arrivals.delete(host);
      image.removeEventListener('load', loaded);
      image.removeEventListener('error', finish);
      host.removeEventListener('animationend', animationFinished);
      host.classList.remove('flock-waiting', 'flock-arriving');
      host.removeAttribute('aria-busy');
      layer.remove();
    };
    const arrival = {
      visible: false,
      begin() {
        if (done || !arrival.visible || host.classList.contains('flock-arriving')) return;
        if (!ready) { watchdog ||= setTimeout(finish, 12000); return; }
        if (preference.matches) { finish(); return; }
        clearTimeout(watchdog);
        host.classList.add('flock-arriving');
        // Reveal the real image even if animationend is lost during navigation.
        watchdog = setTimeout(finish, host.classList.contains('portrait') ? 2000 : 1400);
      },
      finish,
    };
    const loaded = () => {
      if (!image.naturalWidth) { finish(); return; }
      const decoded = typeof image.decode === 'function' ? image.decode() : Promise.resolve();
      decoded.catch(() => {}).then(() => {
        if (done) return;
        layer.style.setProperty('--photo-source', `url(${JSON.stringify(source)})`);
        ready = true;
        arrival.begin();
      });
    };
    arrivals.set(host, arrival);
    const animationFinished = event => {
      if (event.animationName === 'finished-print') finish();
    };
    host.addEventListener('animationend', animationFinished);
    observer.observe(host);
    image.addEventListener('load', loaded, { once: true });
    image.addEventListener('error', finish, { once: true });
    // A slow or failed asset never leaves the image permanently hidden.
    if (image.complete) loaded();
  });
  preference.addEventListener('change', () => {
    if (preference.matches) [...arrivals.values()].forEach(arrival => arrival.finish());
  });
})();

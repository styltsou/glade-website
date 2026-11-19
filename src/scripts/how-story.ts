const story = document.querySelector<HTMLElement>('[data-how-story]');

if (story) setupStory(story);

function setupStory(story: HTMLElement) {
  const scenes = [...story.querySelectorAll<HTMLElement>('[data-how-scene]')];
  const shots = scenes.map((scene) => scene.querySelector<HTMLElement>('.how-shot')!);
  const desktop = window.matchMedia('(min-width: 901px) and (min-height: 650px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = false;
  let start = 0;
  let distance = 1;
  let shotHeight = 0;
  let active = -1;
  let frame = 0;

  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

  function render() {
    frame = 0;
    if (!enabled) return;
    const progress = clamp((window.scrollY - start) / distance, 0, scenes.length - 1);
    const arrivals = shots.map((_, index) => index === 0 ? 1 : clamp((progress - index + 1 - .08) / .92, 0, 1));
    let next = 0;

    // Each sheet follows the scroll directly, so reversing never queues animations.
    shots.forEach((shot, index) => {
      const entered = arrivals[index];
      const y = (1 - entered) * (shotHeight + 96);
      shot.style.visibility = entered > 0 ? 'visible' : 'hidden';
      if (entered >= .65) next = index;
      const pixelY = Math.round(y * window.devicePixelRatio) / window.devicePixelRatio;
      shot.style.transform = `translateY(${pixelY}px)`;
    });

    if (active !== next) {
      scenes.forEach((scene, index) => {
        const current = index === next;
        scene.toggleAttribute('data-active', current);
        scene.setAttribute('aria-hidden', String(!current));
        scene.inert = !current;
      });
      active = next;
    }
  }

  function schedule() {
    if (enabled && !frame) frame = requestAnimationFrame(render);
  }

  function measure() {
    enabled = desktop.matches && !reducedMotion.matches;
    story.classList.toggle('is-scroll-story', enabled);
    active = -1;
    if (!enabled) {
      story.style.removeProperty('height');
      story.style.removeProperty('--story-height');
      story.style.removeProperty('--story-top');
      scenes.forEach((scene, index) => {
        scene.toggleAttribute('data-active', index === 0);
        scene.removeAttribute('aria-hidden');
        scene.inert = false;
      });
      shots.forEach((shot) => {
        shot.style.removeProperty('transform');
        shot.style.removeProperty('visibility');
      });
      return;
    }
    const viewport = document.documentElement.clientHeight;
    const headerHeight = document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0;
    const height = Math.min(shots[0].offsetWidth * 560 / 760 + 64, viewport - headerHeight - 40);
    const top = Math.max(headerHeight + 16, (viewport - height) / 2);
    distance = viewport * .85;
    story.style.setProperty('--story-height', `${height}px`);
    story.style.setProperty('--story-top', `${top}px`);
    story.style.height = `${height + distance * (scenes.length - 1) + viewport * .05}px`;
    shotHeight = shots[0].offsetHeight;
    start = story.getBoundingClientRect().top + window.scrollY - top - viewport * .3;
    render();
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', measure);
  desktop.addEventListener('change', measure);
  reducedMotion.addEventListener('change', measure);
  measure();
  document.fonts.ready.then(measure);
}

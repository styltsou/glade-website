import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let lenis: Lenis | undefined;

function syncMotion() {
  lenis?.destroy();
  lenis = reducedMotion.matches ? undefined : new Lenis({ autoRaf: true });
}

syncMotion();
reducedMotion.addEventListener('change', syncMotion);

document.addEventListener('click', (event) => {
  if (!lenis || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
  const hash = anchor?.getAttribute('href');
  if (!hash || hash === '#') return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;
  event.preventDefault();
  if (location.hash !== hash) history.pushState(null, '', hash);
  const offset = -(parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
  lenis.scrollTo(target, {
    offset,
    onComplete: () => {
      const hadTabIndex = target.hasAttribute('tabindex');
      if (!hadTabIndex) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      if (!hadTabIndex) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    },
  });
});

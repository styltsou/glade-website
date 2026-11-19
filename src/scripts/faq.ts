// Keep native details semantics while animating both directions.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll<HTMLDetailsElement>('.faq-list details').forEach((details) => {
  const summary = details.querySelector('summary');
  const content = details.querySelector<HTMLElement>('.faq-answer');
  if (!summary || !content) return;
  let animation: Animation | undefined;
  let expanded = details.open;

  summary.addEventListener('click', (event) => {
    event.preventDefault();
    const from = details.open ? content.getBoundingClientRect().height : 0;
    const opacity = details.open ? getComputedStyle(content).opacity : '0';
    animation?.cancel();
    expanded = !expanded;
    details.dataset.expanded = String(expanded);
    summary.setAttribute('aria-expanded', String(expanded));
    if (reducedMotion.matches) {
      details.open = expanded;
      return;
    }
    details.open = true;
    animation = content.animate([
      { height: `${from}px`, opacity: from ? opacity : 0 },
      { height: `${expanded ? content.scrollHeight : 0}px`, opacity: expanded ? 1 : 0 },
    ], {
      duration: 140,
      easing: getComputedStyle(document.documentElement).getPropertyValue('--ease-out').trim(),
    });
    animation.onfinish = () => {
      details.open = expanded;
      animation = undefined;
    };
  });
});

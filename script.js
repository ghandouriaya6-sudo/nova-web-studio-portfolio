(() => {
  const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  const setMenu = (open, refocus) => {
    nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'Close' : 'Menu'; if (!open && refocus) btn.focus();
  };
  btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) setMenu(false, true);
  });
  window.matchMedia('(min-width:800px)').addEventListener('change', e => { if (e.matches) setMenu(false); });
  document.getElementById('year').textContent = new Date().getFullYear();
})();

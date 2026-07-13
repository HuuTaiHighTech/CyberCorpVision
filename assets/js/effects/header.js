export function initHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const navItems = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'home.html';

  navItems.forEach((item) => {
    const href = (item.getAttribute('href') || '').replace('./', '');
    item.classList.toggle('active', href === currentPath);
  });

  window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 50;
    header.classList.toggle('header-scrolled', isScrolled);
    document.body.classList.toggle('header-scrolled', isScrolled);
  });
}

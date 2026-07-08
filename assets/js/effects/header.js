export function initHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const navItems = document.querySelectorAll('.nav-item');
  const currentPath = window.location.pathname.split('/').pop() || 'home.html';

  navItems.forEach((item) => {
    const href = (item.getAttribute('href') || '').replace('./', '');
    item.classList.toggle('active', href === currentPath);
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('nav-fixed');
    } else {
      header.classList.remove('nav-fixed');
    }
  });
}

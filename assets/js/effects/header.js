export function initHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const navItems = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'home.html';

  navItems.forEach((item) => {
    const href = (item.getAttribute('href') || '').replace('./', '');
    item.classList.toggle('active', href === currentPath);
  });

  const updateHeaderScroll = () => {
    const isScrolled = window.scrollY > 50;
    header.classList.toggle('header-scrolled', isScrolled);
    document.body.classList.toggle('header-scrolled', isScrolled);
  };

  const navbarCollapse = document.getElementById('navbarSupportedContent');
  const headerSearch = document.querySelector('.header-search');

  if (navbarCollapse && headerSearch) {
    navbarCollapse.addEventListener('shown.bs.collapse', () => {
      headerSearch.classList.add('is-show');
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
      headerSearch.classList.remove('is-show');
    });
  }

  window.addEventListener('scroll', updateHeaderScroll);
  updateHeaderScroll();
}
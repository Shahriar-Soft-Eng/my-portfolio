/**
 * Navigation Menu Responsiveness Controller
 */
export function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('mobile-nav-menu');
  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
  });

  const mobileLinks = navMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.add('hidden');
      navMenu.classList.remove('flex');
    });
  });
}

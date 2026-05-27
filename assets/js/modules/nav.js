/**
 * Navigation Menu Responsiveness Controller
 */
export function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('mobile-nav-menu');
  
  if (menuBtn && navMenu) {
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

  // Circular Floating Back to Top Button Logic
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    function evalScrollTopBtn() {
      const isAts = document.body.classList.contains('ats-mode');
      if (!isAts && window.scrollY > 300) {
        backToTopBtn.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      }
    }

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', evalScrollTopBtn);
    // Initial evaluation on load
    evalScrollTopBtn();
  }
}


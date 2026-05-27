/**
 * Day/Night Theme Toggler Module
 * Stores user preferences dynamically using localStorage and syncs light/dark modes.
 */
export function initThemeToggler() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  if (!themeToggleBtns.length) return;

  // Path SVG definitions to switch between Moon and Sun
  const sunPath = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />`;
  const moonPath = `<path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;

  // Apply theme dynamically
  function setTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      localStorage.setItem('portfolio-theme', 'light');
      // Update icons of all toggles to moon icon (to suggest dark mode)
      themeToggleBtns.forEach(btn => {
        const svg = btn.querySelector('svg');
        if (svg) svg.innerHTML = moonPath;
      });
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('portfolio-theme', 'dark');
      // Update icons of all toggles to sun icon (to suggest light mode)
      themeToggleBtns.forEach(btn => {
        const svg = btn.querySelector('svg');
        if (svg) svg.innerHTML = sunPath;
      });
    }
  }

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  setTheme(savedTheme);

  // Bind click listener on all toggles
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-theme');
      setTheme(isLight ? 'dark' : 'light');
    });
  });
}

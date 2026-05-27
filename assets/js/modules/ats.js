/**
 * ATS Printable CV Toggler Module
 */
export function initAtsToggler() {
  const toggleBtns = document.querySelectorAll('.print-toggle-btn');
  if (!toggleBtns.length) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isAts = document.body.classList.toggle('ats-mode');
      
      // Update UI button visuals globally
      toggleBtns.forEach(b => {
        if (isAts) {
          b.innerHTML = `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <span>Return to Web Mode</span>
          `;
          // Prompt direct print window
          setTimeout(() => {
            window.print();
          }, 400);
        } else {
          b.innerHTML = `
            <svg class="w-4 h-4 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
            <span>ATS Resume Mode (Print)</span>
          `;
        }
      });
    });
  });
}

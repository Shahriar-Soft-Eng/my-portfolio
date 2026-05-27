/**
 * ATS Printable CV Toggler Module
 */
export function initAtsToggler() {
  const toggleBtns = document.querySelectorAll('.print-toggle-btn');
  const scrollPrintBtn = document.getElementById('ats-scroll-print-btn');
  
  if (!toggleBtns.length) return;

  function evalScrollBtn() {
    if (!scrollPrintBtn) return;
    const isAts = document.body.classList.contains('ats-mode');
    if (isAts && window.scrollY > 300) {
      scrollPrintBtn.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
      scrollPrintBtn.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
    } else {
      scrollPrintBtn.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
      scrollPrintBtn.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
    }
  }

  function setAtsState(isAts) {
    if (isAts) {
      document.body.classList.add('ats-mode');
    } else {
      document.body.classList.remove('ats-mode');
    }

    // Toggle scroll button dynamically
    evalScrollBtn();

    // Update navbar buttons text & icons globally
    toggleBtns.forEach(b => {
      if (isAts) {
        b.innerHTML = `
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          <span>Return to Web Mode</span>
        `;
      } else {
        b.innerHTML = `
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <span>ATS Resume View</span>
        `;
      }
    });
  }

  // Toggles on click of upper navbar buttons
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isAts = !document.body.classList.contains('ats-mode');
      setAtsState(isAts);
    });
  });

  // Action: Scroll Quick-Print Button
  if (scrollPrintBtn) {
    scrollPrintBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Listen to scrolls to dynamically reveal the quick print button
  window.addEventListener('scroll', evalScrollBtn);
}



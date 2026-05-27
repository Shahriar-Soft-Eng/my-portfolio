/**
 * Projects Showcase Grid Loader & Filter Tab Manager
 */
export function loadProjects() {
  const container = document.getElementById('projects-grid');
  const filters = document.querySelectorAll('.project-filter-btn');
  if (!container) return;

  let allProjectsData = [];

  // Render cards
  function renderCards(projects) {
    container.innerHTML = '';
    if (projects.length === 0) {
      container.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500 font-mono">No matching project nodes found in database.</div>`;
      return;
    }

    projects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'glass-panel rounded-2xl p-6 flex flex-col justify-between hover-scale-effect group opacity-0 translate-y-4 transition-all duration-500';
      card.setAttribute('data-id', proj.id);
      
      // Calculate delay based on card index for cascading entrance
      card.style.animationDelay = `${idx * 80}ms`;

      // Technology badges mapping
      const badgesHtml = proj.stack.map(tech => 
        `<span class="text-xs px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 font-mono">${tech}</span>`
      ).join('');

      // Features mapping
      const featuresHtml = proj.features.map(feat =>
        `<li class="flex items-start text-sm text-slate-400 mb-1.5">
          <span class="text-cyan-400 mr-2 mt-0.5">•</span>
          <span>${feat}</span>
        </li>`
      ).join('');

      // Unique badge coloring
      let badgeColor = "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";
      if (proj.category === 'ai-tools') badgeColor = "bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20";
      if (proj.category === 'desktop-apps') badgeColor = "bg-amber-500/10 text-amber-400 border border-amber-500/20";

      // Render custom detailed C# AST shield link as secondary landing page
      let targetLink = proj.link;
      let targetLabel = proj.linkLabel;
      if (proj.id === 'serialized-shield') {
        targetLink = './projects/unity-serialized-shield.html';
        targetLabel = 'Review Architecture';
      }

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${badgeColor}">${proj.badge}</span>
            <span class="text-xs text-slate-500 font-mono">${proj.engine}</span>
          </div>
          
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">${proj.title}</h3>
          <p class="text-xs font-mono text-cyan-400/80 mb-3">${proj.platform}</p>
          <p class="text-sm text-slate-300 font-medium mb-4 italic">"${proj.tagline}"</p>
          
          <p class="text-sm text-slate-400 mb-4 leading-relaxed">${proj.description}</p>
          
          <div class="border-t border-slate-800/60 pt-4 mb-4">
            <h4 class="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">Key Implementations</h4>
            <ul class="list-none pl-0 mb-2 text-left">
              ${featuresHtml}
            </ul>
          </div>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${badgesHtml}
          </div>
          
          <a href="${targetLink}" target="${proj.id === 'serialized-shield' ? '_self' : '_blank'}" 
             class="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-cyan-900/40 hover:to-cyan-800/40 border border-slate-700/80 hover:border-cyan-500/50 text-slate-300 hover:text-white font-bold text-sm transition-all duration-300 shadow-md">
            <span>${targetLabel}</span>
            <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      `;

      container.appendChild(card);
      
      setTimeout(() => {
        card.classList.remove('opacity-0', 'translate-y-4');
      }, 50);
    });
  }

  // Load from local storage or mock fetch JSON
  fetch('./data/projects.json')
    .then(res => res.json())
    .then(data => {
      allProjectsData = data;
      renderCards(allProjectsData);
    })
    .catch(err => {
      console.error("Local JSON database load failed:", err);
    });

  // Attach filter event actions
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('bg-cyan-500', 'text-slate-950', 'border-cyan-400'));
      filters.forEach(b => b.classList.add('bg-slate-900', 'text-slate-400', 'border-slate-800'));
      
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'border-cyan-400');
      btn.classList.remove('bg-slate-900', 'text-slate-400', 'border-slate-800');

      const filterCat = btn.getAttribute('data-filter');
      if (filterCat === 'all') {
        renderCards(allProjectsData);
      } else {
        const filtered = allProjectsData.filter(p => p.category === filterCat);
        renderCards(filtered);
      }
    });
  });
}

/**
 * HTML Dynamic Template Loader Compiler - MD Shahriar Islam Portfolio
 * Mounts decoupled component layouts into placeholders instantly.
 * Completely immune to browser CORS fetch blocks offline.
 */
import * as templates from './templates-data.js';

export async function initTemplates() {
  const componentSlots = [
    { id: 'slot-about', content: templates.aboutTemplate },
    { id: 'slot-tictac', content: templates.tictacTemplate },
    { id: 'slot-skills', content: templates.skillsTemplate },
    { id: 'slot-projects', content: templates.projectsTemplate },
    { id: 'slot-experience', content: templates.experienceTemplate },
    { id: 'slot-credentials', content: templates.credentialsTemplate },
    { id: 'slot-ats-resume', content: templates.atsResumeTemplate }
  ];

  // Mount each slot instantly in memory
  componentSlots.forEach((slot) => {
    const el = document.getElementById(slot.id);
    if (el) {
      el.innerHTML = slot.content;
    } else {
      console.warn(`[Template Engine] Target placeholder slot not found in DOM: #${slot.id}`);
    }
  });
}

/**
 * Orchestrator Main Bootstrapper - MD Shahriar Islam Portfolio
 * ES Module Imports mapping single-responsibility modules cleanly.
 */
import { initTemplates } from './modules/templates.js';
import { initThemeToggler } from './modules/theme.js';
import { initExperienceStats } from './modules/stats.js';
import { initParticleBackground } from './modules/particles.js';
import { initAiConsole } from './modules/terminal.js';
import { initTicTacGlow } from './modules/tictac.js';
import { loadProjects } from './modules/projects.js';
import { initAtsToggler } from './modules/ats.js';
import { initNavigation } from './modules/nav.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log("[Bootstrapper] Initializing dynamic template compiler...");
    // 1. Fetch and compile all decoupled HTML component templates
    await initTemplates();
    console.log("[Bootstrapper] Templates successfully mounted to slots. Bootstrapping features...");
  
    // 2. Bootstrap all operational components once DOM slots are populated
    initThemeToggler();
    initExperienceStats();

    initParticleBackground();
    initAiConsole();
    initTicTacGlow();
    loadProjects();
    initAtsToggler();
    initNavigation();
    console.log("[Bootstrapper] All portfolio modules booted successfully!");
  } catch (err) {
    console.error("[Bootstrapper] Critical initialization error:", err);
  }
});

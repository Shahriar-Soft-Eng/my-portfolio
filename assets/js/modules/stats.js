/**
 * Dynamic Spec Highlights Experience Calculator
 */
export function initExperienceStats() {
  const container = document.getElementById('experience-stats-dashboard');
  if (!container) return;

  // Calculate experience dynamically based on current time
  const pastMonths = 48; // FPG: 19, Softech: 6, AppCake: 5, BFP: 12, PixelLab: 6
  const startDate = new Date(2025, 3); // April 2025 (months are 0-indexed, so 3 = April)
  const currentDate = new Date();
  
  const diffYears = currentDate.getFullYear() - startDate.getFullYear();
  const diffMonths = currentDate.getMonth() - startDate.getMonth();
  
  const arcliteMonths = diffYears * 12 + diffMonths + 1; // Inclusive of current month
  const totalMonths = pastMonths + arcliteMonths;
  const totalYears = (totalMonths / 12).toFixed(1);

  container.innerHTML = `
    <!-- Card 1: Experience -->
    <div class="glass-panel rounded-2xl p-5 border border-slate-800 text-center flex flex-col justify-center items-center neon-border-cyan animate-pulse-glow">
      <span class="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-mono">${totalYears}</span>
      <span class="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mt-2">Years Dynamic Experience</span>
    </div>
    
    <!-- Card 2: Downloads -->
    <div class="glass-panel rounded-2xl p-5 border border-slate-800 text-center flex flex-col justify-center items-center hover-scale-effect">
      <span class="text-3xl font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-mono">100M+</span>
      <span class="text-[10px] font-mono font-bold text-violet-400 uppercase tracking-widest mt-2">Shipped Game DLs</span>
    </div>
    
    <!-- Card 3: Released Titles -->
    <div class="glass-panel rounded-2xl p-5 border border-slate-800 text-center flex flex-col justify-center items-center hover-scale-effect">
      <span class="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-mono">7+</span>
      <span class="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest mt-2">Production Released</span>
    </div>
    
    <!-- Card 4: AI Systems -->
    <div class="glass-panel rounded-2xl p-5 border border-slate-800 text-center flex flex-col justify-center items-center hover-scale-effect">
      <span class="text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-mono">100%</span>
      <span class="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest mt-2">Autonomous Shipped AI</span>
    </div>
  `;
}

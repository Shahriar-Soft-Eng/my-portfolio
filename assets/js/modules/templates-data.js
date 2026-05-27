/**
 * Modular Component Templates Database - MD Shahriar Islam Portfolio
 * Bundles HTML layout modules as static ES6 template literals to eliminate CORS fetch locks offline.
 */

export const aboutTemplate = `
<!-- HERO SECTION & INTERACTIVE AI TERMINAL -->
<header id="about" class="grid lg:grid-cols-12 gap-12 items-center py-8">
  <div class="lg:col-span-7 space-y-6">
    <div
      class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
      <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
      <span class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Active System
        Developer</span>
    </div>

    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
      MD Shahriar Islam
    </h1>
    <h2
      class="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
      Software Engineer (Unity3D & AI-Driven Development)
    </h2>

    <p class="text-base text-slate-300 leading-relaxed max-w-2xl">
      Innovative engineer with over 5 years of professional architecture experience in high-performance games,
      virtual realities (WebXR), and multiplayer SDKs.
      Expert in designing highly scalable systems utilizing clean C# code paradigms, SOLID, and DI matrices.
      Pioneer in autonomous agent engineering, deploying shippable software products developed via autonomous
      workspace loops.
    </p>

    <!-- Social Portals Links -->
    <div class="flex flex-wrap gap-4 pt-4">
      <a href="https://github.com/Shahriar-Soft-Eng" target="_blank"
        class="glass-panel px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white flex items-center text-sm font-semibold">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <span>GitHub</span>
      </a>
      <a href="https://linkedin.com/in/shahriar-softwareengineer/" target="_blank"
        class="glass-panel px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white flex items-center text-sm font-semibold">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        <span>LinkedIn</span>
      </a>
      <a href="mailto:shahriar.islam.dev@gmail.com"
        class="glass-panel px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 hover:text-white flex items-center text-sm font-semibold">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Email Me</span>
      </a>
    </div>
  </div>

  <!-- AI CLI Terminal View -->
  <div class="lg:col-span-5">
    <div class="console-container border border-slate-800">
      <div class="console-header">
        <div class="console-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="text-xs text-slate-500 font-mono select-none">Guest AI shell (zsh)</div>
      </div>
      <div class="console-body flex flex-col space-y-1.5" id="console-body">
        <!-- Programmatically typed inputs will go here -->
      </div>

      <!-- Shortcut Chips Section -->
      <div class="border-t border-slate-900 bg-slate-950/60 p-3 flex flex-wrap gap-1.5 items-center">
        <span class="text-[10px] uppercase font-bold text-slate-500 mr-1 select-none">Quick Prompts:</span>
        <button onclick="runConsoleCommand('about')"
          class="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-violet-400 hover:bg-violet-900/30 hover:border-violet-500/40 font-mono">about</button>
        <button onclick="runConsoleCommand('skills')"
          class="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-cyan-900/30 hover:border-cyan-500/40 font-mono">skills</button>
        <button onclick="runConsoleCommand('experience')"
          class="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 hover:bg-emerald-900/30 hover:border-emerald-500/40 font-mono">experience</button>
        <button onclick="runConsoleCommand('serialized-shield')"
          class="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-fuchsia-400 hover:bg-fuchsia-900/30 hover:border-fuchsia-500/40 font-mono">shield</button>
        <button onclick="runConsoleCommand('contact')"
          class="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-400 hover:bg-amber-900/30 hover:border-amber-500/40 font-mono">contact</button>
      </div>

      <div class="console-input-row px-4 pb-4 bg-slate-950/60">
        <span class="text-slate-500 font-mono select-none">guest@shahriar-dev:~$</span>
        <input type="text" id="console-input"
          class="ml-2 bg-transparent text-slate-200 border-none outline-none font-mono flex-grow focus:ring-0 focus:outline-none"
          autocomplete="off" placeholder="type 'help'...">
        <span class="console-caret"></span>
      </div>
    </div>
  </div>
</header>
`;

export const tictacTemplate = `
<!-- PLAYABLE TIC-TAC-GLOW GAME -->
<section id="tictac" class="grid lg:grid-cols-12 gap-12 items-center">
  <div class="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
    <div class="glass-panel rounded-3xl p-8 max-w-sm mx-auto w-full neon-border-cyan">
      <div class="flex items-center justify-between mb-6">
        <span class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Interactive
          Minigame</span>
        <span
          class="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">Web
          Audio Synth</span>
      </div>

      <h3 class="text-2xl font-bold text-white text-center mb-1">Tic-Tac-Glow</h3>
      <p class="text-xs text-slate-400 text-center mb-6">Play against our Minimax Artificial Intelligence!</p>

      <!-- Board grid -->
      <div class="ttt-grid">
        <div class="ttt-cell" data-index="0"></div>
        <div class="ttt-cell" data-index="1"></div>
        <div class="ttt-cell" data-index="2"></div>
        <div class="ttt-cell" data-index="3"></div>
        <div class="ttt-cell" data-index="4"></div>
        <div class="ttt-cell" data-index="5"></div>
        <div class="ttt-cell" data-index="6"></div>
        <div class="ttt-cell" data-index="7"></div>
        <div class="ttt-cell" data-index="8"></div>
      </div>

      <p id="ttt-status" class="text-cyan-400 text-sm font-semibold tracking-wider text-center mt-6 text-glow-cyan">
        Deploy mark. Click a cell to play!</p>

      <button id="ttt-reset"
        class="w-full mt-6 py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-bold font-mono text-slate-300 hover:text-white transition-all duration-200">
        Re-Initialize Grid
      </button>
    </div>
  </div>

  <div class="lg:col-span-7 order-1 lg:order-2 space-y-6">
    <div
      class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
      <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
      <span class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Industry Contribution
        Showcase</span>
    </div>

    <h2 class="text-3xl md:text-4xl font-extrabold text-white">
      Tic Tac Glow: 2 Player Games
    </h2>
    <h3 class="text-lg font-semibold text-cyan-400">
      Global Title Hit with 100,000,000+ Downloads on Google Play Store
    </h3>

    <div class="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
      <p>
        At <span class="text-white font-semibold">Arclite Systems Ltd.</span>, my primary responsibility has been
        contributing to the structural game architectures, optimizing high-performance asset updates, and resolving
        rendering constraints of this hyper-successful mobile title.
      </p>
      <p>
        Utilizing Unity3D, C#, and custom URP rendering layers, I crafted responsive UI systems and custom shaders
        to deliver glowing neon shapes seamlessly. I engineered modular runtime systems using ScriptableObjects and
        Addressables for seamless background assets streaming.
      </p>
      <p>
        I integrated monetizing ad suites and remote dashboards (Firebase, Unity Ads, Remote Config) while profiling
        constraints on low-end hardware, maintaining a consistent 60 FPS profile across iOS and Android deployments.
      </p>
    </div>

    <div class="flex flex-wrap gap-3 pt-2">
      <span
        class="text-xs px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-semibold flex items-center">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>Custom URP Shaders
      </span>
      <span
        class="text-xs px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-semibold flex items-center">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>Addressables System
      </span>
      <span
        class="text-xs px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-semibold flex items-center">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>Unity Profiler
      </span>
      <span
        class="text-xs px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-semibold flex items-center">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>Frame Debugger
      </span>
    </div>

    <div class="pt-4">
      <a href="https://play.google.com/store/apps/details?id=com.arcsys.tictactoe" target="_blank"
        class="inline-flex items-center px-5 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-extrabold text-sm hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/25">
        <span>Inspect Google Play Store Page</span>
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
</section>
`;

export const skillsTemplate = `
<!-- SKILLS MATRIX (RPG SKILL TREE STYLE) -->
<section id="skills" class="space-y-12">
  <div class="text-center space-y-4">
    <h2 class="text-3xl md:text-4xl font-extrabold text-white">Technical Skill Tree</h2>
    <p class="text-sm text-slate-400 max-w-2xl mx-auto">Categorized layout of technical systems, code architectures,
      engines, and automated workflows.</p>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    <!-- 1. Advanced Unity Architecture -->
    <div class="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-white mb-4">Advanced Unity Architecture</h3>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Unity Pro</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">DOTS & ECS</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">C# Jobs System</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Burst Compiler</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Unreal Engine 5</span>
        </div>
      </div>
      <div class="mt-6 border-t border-slate-800/60 pt-4">
        <span class="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">Unity State</span>
        <span class="text-xs text-slate-400">Specializing in high-framerate, scalable game systems using Unity's Data-Oriented Technology Stack (DOTS), ECS, and Burst Compiler.</span>
      </div>
    </div>

    <!-- 2. Low-Level C# & Memory -->
    <div class="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-white mb-4">Low-Level C# & Memory</h3>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Span&lt;T&gt; & Memory&lt;T&gt;</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">IL2CPP Compilation</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Multithreading</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">GC & Alloc Tune</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Cocos2d-x (C++)</span>
        </div>
      </div>
      <div class="mt-6 border-t border-slate-800/60 pt-4">
        <span class="text-[10px] font-mono font-bold text-violet-400 uppercase tracking-widest block mb-1">Systems State</span>
        <span class="text-xs text-slate-400">Expert in memory-efficient execution using Span&lt;T&gt;, Memory&lt;T&gt;, IL2CPP backends, and robust multithreading.</span>
      </div>
    </div>

    <!-- 3. Multiplayer & Networking -->
    <div class="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-white mb-4">Multiplayer & Networking</h3>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Photon Fusion</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Netcode (NGO)</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Colyseus Framework</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Node.js Signals</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">AWS Cloud Server</span>
        </div>
      </div>
      <div class="mt-6 border-t border-slate-800/60 pt-4">
        <span class="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">Multiplayer State</span>
        <span class="text-xs text-slate-400">Architecting robust, real-time multiplayer systems utilizing Photon Fusion, Netcode for GameObjects (NGO), and Colyseus frameworks.</span>
      </div>
    </div>

    <!-- 4. Graphics & Rendering -->
    <div class="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 .364l-.707 .707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548 .547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-white mb-4">Graphics & Rendering</h3>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">URP & HDRP</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Custom HLSL</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">VFX Graph</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Shader Graph</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">GPU Profiling</span>
        </div>
      </div>
      <div class="mt-6 border-t border-slate-800/60 pt-4">
        <span class="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">Graphics State</span>
        <span class="text-xs text-slate-400">Crafting highly optimized visuals through URP/HDRP ecosystems, custom HLSL shaders, and VFX Graph.</span>
      </div>
    </div>

    <!-- 5. External SDKs & Platforms -->
    <div class="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-white mb-4">External SDKs & Platforms</h3>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">XR OpenXR (Quest 3)</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Web3 Thirdweb</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Luna Playables</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">WebGL & WebGPU</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Addressables</span>
        </div>
      </div>
      <div class="mt-6 border-t border-slate-800/60 pt-4">
        <span class="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest block mb-1">Platform State</span>
        <span class="text-xs text-slate-400">Extensive experience deploying across XR (OpenXR/Quest 3), Web3 networks (Thirdweb SDK), and lightweight ad-tech.</span>
      </div>
    </div>

    <!-- 6. AI R&D & Custom Tooling -->
    <div class="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-4">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-white mb-4">AI R&D & Custom Tooling</h3>
        <div class="flex flex-wrap gap-2">
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Custom Pipeline Tools</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Odin Inspector</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Serialization AST</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">SOLID & DI Core</span>
          <span class="skill-badge text-xs px-3 py-1.5 rounded-lg text-slate-300 font-mono">Model Context Protocol</span>
        </div>
      </div>
      <div class="mt-6 border-t border-slate-800/60 pt-4">
        <span class="text-[10px] font-mono font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">Automation State</span>
        <span class="text-xs text-slate-400">Building specialized pipeline tools, serialization automations (e.g. Serialized Shield), and utilizing MCP servers.</span>
      </div>
    </div>

  </div>
</section>
`;;

export const projectsTemplate = `
<!-- FEATURED PROJECTS VIEW -->
<section id="projects" class="space-y-12">
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div class="space-y-4">
      <h2 class="text-3xl md:text-4xl font-extrabold text-white">Shipped Projects</h2>
      <p class="text-sm text-slate-400 max-w-xl">Explore our game development releases, custom AI engineering
        platforms, and utility engines.</p>
    </div>

    <!-- Filter Tab Buttons -->
    <div class="flex flex-wrap gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-850 self-start">
      <button data-filter="all"
        class="project-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 bg-cyan-500 text-slate-950 border border-cyan-400">All
        Nodes</button>
      <button data-filter="game-dev"
        class="project-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">Game
        Development</button>
      <button data-filter="ai-tools"
        class="project-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">AI
        Tools & Open Source</button>
      <button data-filter="desktop-apps"
        class="project-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">Desktop
        Applications</button>
    </div>
  </div>

  <!-- Dynamically filled by main.js -->
  <div id="projects-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="col-span-full text-center py-12 font-mono text-slate-500">Querying project directories...</div>
  </div>
</section>
`;

export const experienceTemplate = `
<!-- PROFESSIONAL TIMELINE -->
<section id="experience" class="space-y-12">
  <div class="text-center space-y-4">
    <h2 class="text-3xl md:text-4xl font-extrabold text-white">Professional Experience</h2>
    <p class="text-sm text-slate-400 max-w-2xl mx-auto">Timeline review of shippable career progression across
      standard institutions.</p>
  </div>

  <!-- Dynamic Spec Highlights Dashboard -->
  <div id="experience-stats-dashboard" class="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto my-12">
    <!-- populated at runtime by main.js -->
  </div>

  <div class="max-w-4xl mx-auto space-y-12">

    <!-- Arclite Systems -->
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-white flex items-center">
              <span>Software Engineer</span>
              <span
                class="text-xs px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono ml-3 font-semibold">Active</span>
            </h3>
            <h4 class="text-sm font-semibold text-cyan-400/90 mt-1">Arclite Systems Ltd.</h4>
          </div>
          <div class="text-left md:text-right">
            <span class="text-xs font-mono font-bold text-slate-400">Apr 2025 – Present • On-site</span>
            <p class="text-[11px] font-mono text-slate-500 mt-1">Dhaka, Bangladesh</p>
          </div>
        </div>

        <ul class="list-disc pl-5 text-left text-sm text-slate-300 space-y-2 leading-relaxed">
          <li>Spearheading the system modernization and UI revamp of <span class="text-cyan-300">Tic Tac Toe Glow</span> (Space Odyssey themed) on Android & iOS.</li>
          <li><span class="text-cyan-300 font-semibold">Architectural Refactoring:</span> Resolving legacy architecture bottlenecks by enforcing SOLID design principles, significantly improving code maintainability and execution speed.</li>
          <li><span class="text-cyan-300 font-semibold">Tooling & Scalability:</span> Building advanced Odin Custom Editors to streamline internal development workflows and maximize project accessibility.</li>
          <li><span class="text-cyan-300 font-semibold">Core Systems Engineering:</span> End-to-end implementation of essential gameplay and meta systems: Quest Systems, Daily Rewards, Inventory, Shop Systems, and secure IAP integration.</li>
          <li><span class="text-cyan-300 font-semibold">Responsive UI Layouts:</span> Engineering a fully adaptive, responsive UI framework to support a seamless, polished visual experience across all target devices.</li>
        </ul>
      </div>
    </div>

    <!-- PixelLab -->
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-white">Unity 3D Developer</h3>
            <h4 class="text-sm font-semibold text-violet-400 mt-1">PixelLab Ltd.</h4>
          </div>
          <div class="text-left md:text-right">
            <span class="text-xs font-mono font-bold text-slate-400">Sep 2024 – Feb 2025 • Remote</span>
            <p class="text-[11px] font-mono text-slate-500 mt-1">Dhaka, Bangladesh</p>
          </div>
        </div>

        <ul class="list-disc pl-5 text-left text-sm text-slate-300 space-y-2 leading-relaxed">
          <li>Key developer for <span class="text-cyan-300 font-semibold">29 Classic: Offline Card Games</span> (10K+ downloads, 4.6 Stars), focusing on scaling the product and elevating player experience.</li>
          <li><span class="text-cyan-300 font-semibold">Core Architecture Scaling:</span> Built upon the game's core architecture, successfully implementing advanced card matchmaking AI heuristics and local game state calculators.</li>
          <li><span class="text-cyan-300 font-semibold">Highly Responsive UI/UX:</span> Led the development of a highly responsive, tactile, and polished visual card gaming interface.</li>
          <li><span class="text-cyan-300 font-semibold">Mobile Profiling & Optimization:</span> Continuously optimized gameplay pipelines and serialization structures, shipping modern features to ensure a seamless experience across all target devices.</li>
        </ul>
      </div>
    </div>

    <!-- BFP Engineers -->
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-white">Software Engineer (Unity3D)</h3>
            <h4 class="text-sm font-semibold text-emerald-400 mt-1">Bangladesh France Peru (BFP) Engineers</h4>
          </div>
          <div class="text-left md:text-right">
            <span class="text-xs font-mono font-bold text-slate-400">Apr 2023 – Mar 2024 • Remote</span>
            <p class="text-[11px] font-mono text-slate-500 mt-1">Dhaka, Bangladesh</p>
          </div>
        </div>

        <ul class="list-disc pl-5 text-left text-sm text-slate-300 space-y-2 leading-relaxed">
          <li>Acted as the engineering research and development backbone of high-risk WebXR simulation suites.</li>
          <li>Engineered interactive VR spatial simulators styled as digital-twins systems integrated within industrial metaverse pipelines (<span class="text-emerald-300">Cameleon 3D ERP</span>).</li>
          <li>Deployed high-speed real-time communication modules utilizing WebRTC render streaming protocols and Node.js WebSockets.</li>
          <li>Maintained robust server infrastructures and databases hosted on Amazon Web Services EC2 targets.</li>
        </ul>
      </div>
    </div>

    <!-- AppCake -->
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-white">Software Engineer</h3>
            <h4 class="text-sm font-semibold text-fuchsia-400 mt-1">AppCake Ltd.</h4>
          </div>
          <div class="text-left md:text-right">
            <span class="text-xs font-mono font-bold text-slate-400">Nov 2022 – Mar 2023 • Remote</span>
            <p class="text-[11px] font-mono text-slate-500 mt-1">Hong Kong SAR</p>
          </div>
        </div>

        <ul class="list-disc pl-5 text-left text-sm text-slate-300 space-y-2 leading-relaxed">
          <li>Pioneered the first software development hire representation from Bangladesh for AppCake's global
            teams.</li>
          <li>Programmed custom game modifications (mods) and utilities inside Unity3D leveraging JSON integrations
            and cloud storage systems (Dropbox API).</li>
          <li>Aligned with international agile engineering units to ship daily incremental releases under strict
            sprints.</li>
        </ul>
      </div>
    </div>

    <!-- SofTech Engineering -->
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-white">Unity Developer</h3>
            <h4 class="text-sm font-semibold text-amber-400 mt-1">SofTech Engineering</h4>
          </div>
          <div class="text-left md:text-right">
            <span class="text-xs font-mono font-bold text-slate-400">May 2022 – Oct 2022 • Remote</span>
            <p class="text-[11px] font-mono text-slate-500 mt-1">Dhaka, Bangladesh</p>
          </div>
        </div>

        <ul class="list-disc pl-5 text-left text-sm text-slate-300 space-y-2 leading-relaxed">
          <li>Built functional multiplayer 3D prototypes utilizing Photon Fusion SDK for rapid game design testing.
          </li>
          <li>Developed lightweight, modular gameplay state managers to rapidly test new structural mechanics.</li>
        </ul>
      </div>
    </div>

    <!-- Free Pixel Games -->
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-white">Unity Developer</h3>
            <h4 class="text-sm font-semibold text-cyan-400 mt-1">Free Pixel Games Ltd.</h4>
          </div>
          <div class="text-left md:text-right">
            <span class="text-xs font-mono font-bold text-slate-400">Oct 2020 – Apr 2022 • Remote</span>
            <p class="text-[11px] font-mono text-slate-500 mt-1">Dhaka, Bangladesh</p>
          </div>
        </div>

        <ul class="list-disc pl-5 text-left text-sm text-slate-300 space-y-2 leading-relaxed">
          <li>Contributed as a Core Gameplay & Playable Ads Developer for high-traffic mobile titles: Dragon Village (5M+ downloads), Jurassic Sniper 3D (iOS App Store hit), and Jurassic Sea Attack (1M+ downloads).</li>
          <li><span class="text-cyan-300 font-semibold">Gameplay & UI Enhancements:</span> Worked on core game frameworks to introduce exciting new physics mechanics and ensure highly responsive, seamless user interfaces in fast-paced 3D shooter and aquatic simulation environments.</li>
          <li><span class="text-cyan-300 font-semibold">User Acquisition Marketing:</span> Developed high-performance interactive playable ads using the Luna SDK, translating core 3D gameplay mechanics into engaging mobile web ad experiences to drive new organic downloads.</li>
        </ul>
      </div>
    </div>

  </div>
</section>
`;

export const credentialsTemplate = `
<!-- EDUCATION & CERTIFICATIONS CAROUSEL -->
<section id="education" class="space-y-12">
  <div class="text-center space-y-4">
    <h2 class="text-3xl md:text-4xl font-extrabold text-white">Credentials & Academics</h2>
    <p class="text-sm text-slate-400 max-w-2xl mx-auto">Education records, competitive programming background, and
      verified professional certificates.</p>
  </div>

  <div class="grid lg:grid-cols-12 gap-8 items-start">

    <!-- Education column -->
    <div class="lg:col-span-5 space-y-6">
      <h3 class="text-xl font-bold text-white uppercase tracking-wider flex items-center">
        <svg class="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-3-3h6" />
        </svg>
        <span>Academic Background</span>
      </h3>

      <div class="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div>
          <span class="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">Bachelor
            of Science Degree</span>
          <h4 class="text-lg font-bold text-white">Computer Science and Engineering</h4>
          <p class="text-sm text-slate-300 font-semibold mt-1">University of Development Alternative</p>
          <p class="text-xs text-slate-500 font-mono mt-1">Jan 2017 – Dec 2020 • CGPA: 3.26/4.00</p>
        </div>
        <div class="border-t border-slate-850 pt-4 space-y-2">
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest">Activities & Leadership</p>
          <ul class="list-disc pl-5 text-xs text-slate-400 space-y-1.5">
            <li>Class Representative organizing developer bootcamps.</li>
            <li>Computer Club Executive leading technical symposiums.</li>
            <li>Competitive Programmer, solving structures under pressure.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Certifications column -->
    <div class="lg:col-span-7 space-y-6">
      <h3 class="text-xl font-bold text-white uppercase tracking-wider flex items-center">
        <svg class="w-5 h-5 mr-2 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Professional Certifications</span>
      </h3>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

        <div class="glass-panel rounded-xl p-5 border border-slate-800 flex flex-col justify-between h-40">
          <div>
            <h4 class="text-sm font-bold text-white">Machine Learning A-Z</h4>
            <p class="text-xs text-slate-400 mt-1">Udemy Platform</p>
          </div>
          <div>
            <span class="text-[10px] font-mono text-fuchsia-400 uppercase tracking-wider block">Issued Aug 2024</span>
            <span class="text-[10px] text-slate-500 font-semibold block mt-1">Skills: Python, ML models, R</span>
          </div>
        </div>

        <div class="glass-panel rounded-xl p-5 border border-slate-800 flex flex-col justify-between h-40">
          <div>
            <h4 class="text-sm font-bold text-white">Unity Games Engine & C# VR</h4>
            <p class="text-xs text-slate-400 mt-1">Udemy Platform</p>
          </div>
          <div>
            <span class="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">Issued May 2024</span>
            <span class="text-[10px] text-slate-500 font-semibold block mt-1">Skills: Unity3D, C#, VR Space Shooter</span>
          </div>
        </div>

        <div class="glass-panel rounded-xl p-5 border border-slate-800 flex flex-col justify-between h-40">
          <div>
            <h4 class="text-sm font-bold text-white">Ultimate Hyper-Casual Guide</h4>
            <p class="text-xs text-slate-400 mt-1">Udemy Platform</p>
          </div>
          <div>
            <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">Issued May 2024</span>
            <span class="text-[10px] text-slate-500 font-semibold block mt-1">Skills: C#, Game feel mechanics</span>
          </div>
        </div>

        <div class="glass-panel rounded-xl p-5 border border-slate-800 flex flex-col justify-between h-40">
          <div>
            <h4 class="text-sm font-bold text-white">AR/VR Government Training</h4>
            <p class="text-xs text-slate-400 mt-1">FLFT of LICT, Govt. of Bangladesh</p>
          </div>
          <div>
            <span class="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">Issued Feb 2019</span>
            <span class="text-[10px] text-slate-500 font-semibold block mt-1">Skills: Virtual/Augmented Reality</span>
          </div>
        </div>

        <div class="glass-panel rounded-xl p-5 border border-slate-800 flex flex-col justify-between h-40 md:col-span-2 lg:col-span-1">
          <div>
            <h4 class="text-sm font-bold text-white">Skill Development Project</h4>
            <p class="text-xs text-slate-400 mt-1">Mobile Game & App, ICT Division</p>
          </div>
          <div>
            <span class="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">Issued May 2018</span>
            <span class="text-[10px] text-slate-500 font-semibold block mt-1">Skills: Mobile Game Architectures</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
`;

export const atsResumeTemplate = `
<!-- ATS COMPLIANT RESUME RENDER TARGET -->
<div id="ats-resume-container">

  <!-- Printable Resume Header -->
  <div class="ats-header">
    <h1 class="ats-name">MD Shahriar Islam</h1>
    <div class="ats-title">Software Engineer (Unity3D & AI-Driven Development)</div>
    <div class="ats-meta">
      <span>Dhaka, Bangladesh</span>
      <span>•</span>
      <span>+8801644854401</span>
      <span>•</span>
      <span>shahriar.islam.dev@gmail.com</span>
      <span>•</span>
      <span><a
          href="https://linkedin.com/in/shahriar-softwareengineer/">linkedin.com/in/shahriar-softwareengineer/</a></span>
      <span>•</span>
      <span><a href="https://github.com/Shahriar-Soft-Eng">github.com/Shahriar-Soft-Eng</a></span>
    </div>
  </div>

  <!-- Executive Summary -->
  <div class="ats-section-title">Professional Summary</div>
  <p class="ats-summary">
    Innovative and performance-driven Software Engineer with over 5 years of professional experience specializing in
    Unity3D, mobile game development, and advanced code architecture. Expert in building highly scalable systems using
    C#, SOLID principles, Dependency Injection (DI), and Context-Based Service Locators. Pioneer in AI-assisted
    autonomous programming, leveraging Model Context Protocol (MCP) servers and LLMs to accelerate R&D and deliver
    production-ready software. Proven track record of developing global titles with 100M+ downloads, real-time
    multiplayer architectures, and high-performance cross-platform experiences.
  </p>

  <!-- Tech skills matrices -->
  <div class="ats-section-title">Technical Skills Matrix</div>
  <div class="ats-skill-grid">
    <div class="ats-skill-cat">
      <span class="ats-skill-label">Advanced Unity Architecture:</span> Unity's Data-Oriented Technology Stack (DOTS), ECS, Jobs System, Burst Compiler, and Unreal Engine 5 (Nanite/Lumen).
    </div>
    <div class="ats-skill-cat">
      <span class="ats-skill-label">Low-Level C# & Memory:</span> Span&lt;T&gt;, Memory&lt;T&gt;, IL2CPP compilation backends, robust multithreading, GC/allocation tuning, and Cocos2d-x (C++ Core).
    </div>
    <div class="ats-skill-cat">
      <span class="ats-skill-label">Multiplayer & Networking:</span> Real-time systems using Photon Fusion, Netcode for GameObjects (NGO), Colyseus, Node.js signals backend, and AWS EC2.
    </div>
    <div class="ats-skill-cat">
      <span class="ats-skill-label">Graphics & Rendering:</span> High-fidelity URP/HDRP ecosystems, custom HLSL shaders, VFX Graph, Shader Graph, and GPU profiling.
    </div>
    <div class="ats-skill-cat">
      <span class="ats-skill-label">External SDKs & Platforms:</span> XR Spatial Computing (OpenXR/Quest 3), Web3 (Thirdweb SDK), Luna Playables (HTML5 WebGL), and WebGPU.
    </div>
    <div class="ats-skill-cat">
      <span class="ats-skill-label">Architecture & Custom Tooling:</span> SOLID Principles, Dependency Injection, Context Service Locators, custom Editor tool pipelines, Odin Inspector, and AST serialization automations.
    </div>
    <div class="ats-skill-cat">
      <span class="ats-skill-label">AI R&D & Workflows:</span> AI-Assisted Programming, Model Context Protocol (MCP) servers, and autonomous coding agents.
    </div>
  </div>

  <!-- Professional timelines -->
  <div class="ats-section-title">Professional Experience</div>

  <!-- Arclite -->
  <div class="ats-xp-item">
    <div class="ats-xp-header">
      <span>Software Engineer</span>
      <span>Apr 2025 – Present</span>
    </div>
    <div class="ats-xp-sub">
      <span>Arclite Systems Ltd.</span>
      <span>Dhaka, Bangladesh (On-site)</span>
    </div>
    <ul class="ats-bullet-list">
      <li>Spearhead the system modernization and UI revamp of "Tic Tac Toe Glow" (Space Odyssey themed) on Android & iOS.</li>
      <li>Architectural Refactoring: Resolve legacy bottlenecks by enforcing SOLID principles, improving maintainability and speed by migrating spaghetti modules to clean decoupled architectures.</li>
      <li>Tooling & Scalability: Construct advanced Odin Custom Inspector editors to streamline internal design workflows and maximize project accessibility.</li>
      <li>Core Systems Engineering: Implement end-to-end features including Quest Systems, Daily Rewards, Inventory architectures, Shop configurations, and secure IAP integrations.</li>
      <li>Responsive UI Layouts: Engineer a fully adaptive and hardware-responsive layout framework to support polished visual scales across all target screen aspect ratios.</li>
    </ul>
  </div>

  <!-- PixelLab -->
  <div class="ats-xp-item">
    <div class="ats-xp-header">
      <span>Software Engineer (Unity3D)</span>
      <span>Sep 2024 – Feb 2025</span>
    </div>
    <div class="ats-xp-sub">
      <span>PixelLab Ltd.</span>
      <span>Dhaka, Bangladesh (Remote)</span>
    </div>
    <ul class="ats-bullet-list">
      <li>Key developer for "29 Classic: Offline Card Games" (10K+ downloads, 4.6 Stars), scaling the core gameplay architectures and elevating player experience.</li>
      <li>Core Architecture Scaling: Built upon the core gameplay systems, successfully implementing advanced card matchmaking AI heuristics and local game state calculators.</li>
      <li>Highly Responsive UI/UX: Led the development of a highly tactile, responsive, and polished visual card gaming interface.</li>
      <li>Mobile Profiling & Optimization: Continuously optimized gameplay pipelines and serialization structures, shipping modern features to ensure a seamless experience across all target devices.</li>
    </ul>
  </div>

  <!-- BFPE -->
  <div class="ats-xp-item">
    <div class="ats-xp-header">
      <span>Software Engineer (Unity3D)</span>
      <span>Apr 2023 – Mar 2024</span>
    </div>
    <div class="ats-xp-sub">
      <span>Bangladesh France Peru Engineers (BFPE) Ltd.</span>
      <span>Dhaka, Bangladesh (Remote)</span>
    </div>
    <ul class="ats-bullet-list">
      <li>Acted as the engineering research and development backbone of high-risk WebXR simulation suites.</li>
      <li>Engineered interactive VR spatial simulators styled as digital-twins systems integrated within industrial metaverse pipelines (Cameleon 3D ERP).</li>
      <li>Deployed high-speed real-time communication modules utilizing WebRTC render streaming protocols and Node.js WebSockets.</li>
      <li>Maintained robust server infrastructures and databases hosted on Amazon Web Services EC2 targets.</li>
    </ul>
  </div>

  <!-- AppCake -->
  <div class="ats-xp-item">
    <div class="ats-xp-header">
      <span>Software Engineer</span>
      <span>Nov 2022 – Mar 2023</span>
    </div>
    <div class="ats-xp-sub">
      <span>AppCake Ltd.</span>
      <span>Hong Kong SAR (Remote)</span>
    </div>
    <ul class="ats-bullet-list">
      <li>Programmed game modifications (Mods) and interactive utility applications inside Unity3D leveraging secure
        JSON parsing and Dropbox cloud storage.</li>
      <li>Collaborated closely with international engineering teams to deliver daily operational features under agile
        development constraints.</li>
    </ul>
  </div>

  <!-- Softech -->
  <div class="ats-xp-item">
    <div class="ats-xp-header">
      <span>Unity Developer</span>
      <span>May 2022 – Oct 2022</span>
    </div>
    <div class="ats-xp-sub">
      <span>SofTech Engineering</span>
      <span>Dhaka, Bangladesh (Remote)</span>
    </div>
    <ul class="ats-bullet-list">
      <li>Built high-performance multiplayer 3D game prototypes utilizing Photon Fusion SDK, leading rapid mechanics
        verification cycles.</li>
    </ul>
  </div>

  <!-- Free Pixel Games -->
  <div class="ats-xp-item">
    <div class="ats-xp-header">
      <span>Unity Developer</span>
      <span>Oct 2020 – Apr 2022</span>
    </div>
    <div class="ats-xp-sub">
      <span>Free Pixel Games Ltd.</span>
      <span>Dhaka, Bangladesh (Remote)</span>
    </div>
    <ul class="ats-bullet-list">
      <li>Contributed as a Core Gameplay & Playable Ads Developer for high-traffic mobile titles: Dragon Village (5M+ downloads), Jurassic Sniper 3D (iOS App Store hit), and Jurassic Sea Attack (1M+ downloads).</li>
      <li>Gameplay & UI Enhancements: Worked on core game frameworks to introduce exciting new physics mechanics and ensure highly responsive, seamless user interfaces in fast-paced 3D shooter and aquatic simulation environments.</li>
      <li>User Acquisition Marketing: Developed high-performance interactive playable ads using the Luna SDK, translating core 3D gameplay mechanics into engaging mobile web ad experiences to drive new organic downloads.</li>
    </ul>
  </div>

  <!-- Key Projects -->
  <div class="ats-section-title">Projects & Open-Source Contributions</div>

  <div class="ats-xp-item">
    <div class="ats-xp-header">
      <span>Unity Serialized Shield (Creator & Lead Developer)</span>
      <span><a
          href="https://github.com/AlphaBoysLab/unity-serialized-shield">github.com/AlphaBoysLab/unity-serialized-shield</a></span>
    </div>
    <ul class="ats-bullet-list">
      <li>Architected and delivered a complete developer-tooling solution for Unity serialization integrity
        management, published and active on the official VS Code Extension Marketplace and Visual Studio Marketplace.</li>
      <li>Fully executed via 100% Autonomous AI-driven development workflows, demonstrating high proficiency in
        prompting, prompt engineering, and autonomous software compilation.</li>
      <li>Designed custom IDE extensions that apply the [FormerlySerializedAs] attribute dynamically to renamed C# variables,
        reducing refactoring-induced asset breaks by 100%.</li>
    </ul>
  </div>

  <!-- Academics -->
  <div class="ats-section-title">Education & Degrees</div>
  <div class="ats-edu-item">
    <div>
      <span class="ats-skill-label">B.Sc. in Computer Science and Engineering</span> – University of Development
      Alternative (UODA)
    </div>
    <div>Jan 2017 – Dec 2020</div>
  </div>
  <div class="ats-edu-item" style="font-style: italic; font-size: 9pt; margin-top: -2px;">
    <span>Grade: CGPA 3.26/4.00 | Activities: Class Representative, Computer Club Executive, Competitive
      Programmer</span>
  </div>

  <!-- Certs -->
  <div class="ats-section-title">Professional Certifications</div>
  <div class="ats-cert-item">
    <span>• Machine Learning A-Z – Udemy (Issued Aug 2024)</span>
    <span>• C# VR Games Engine Guide – Udemy (Issued May 2024)</span>
  </div>
  <div class="ats-cert-item">
    <span>• The Ultimate Hyper-Casual Guide with Unity – Udemy (Issued May 2024)</span>
    <span>• AR/VR government training under FLFT of LICT (Issued Feb 2019)</span>
  </div>
  <div class="ats-cert-item">
    <span>• Skill Development for Mobile Game & Application Project (Issued May 2018)</span>
  </div>

</div>
`;

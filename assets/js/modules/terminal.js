/**
 * Retro Typewriter AI Command Console
 */
export function initAiConsole() {
  const body = document.getElementById('console-body');
  const input = document.getElementById('console-input');
  if (!body || !input) return;

  // Predefined terminal dialogue database
  const responses = {
    help: `Available commands:<br>
      - <span class="text-cyan-400 font-bold">about</span>: Philosophy, Clean Code, and SOLID principles.<br>
      - <span class="text-emerald-400 font-bold">skills</span>: Game architecture, engines, and AI tooling capabilities.<br>
      - <span class="text-violet-400 font-bold">experience</span>: Career summary & highlight structures.<br>
      - <span class="text-fuchsia-400 font-bold">serialized-shield</span>: Deep technical look at the 100% AI-generated Unity tool.<br>
      - <span class="text-amber-400 font-bold">contact</span>: Access email, phone numbers, and LinkedIn references.<br>
      - <span class="text-cyan-400 font-bold">clear</span>: Clear terminal console history.`,
    about: `System Core: <span class="text-cyan-400">MD Shahriar Islam</span><br>
      Role: <span class="text-violet-400">Software Engineer (Unity3D & AI-Driven Development)</span><br>
      Location: Dhaka, Bangladesh<br><br>
      "I believe in writing clean, self-documenting code structured on SOLID principles. My development architecture utilizes modern Dependency Injection patterns, loose coupling, and Context-Based Service Locators to build high-performance mobile systems."<br><br>
      Lately, I have mastered incorporating advanced AI prompting models, MCP servers, and autonomous agents into my IDE workspace to deliver production-ready software packages with unprecedented efficiency.`,
    skills: `TECHNICAL MATRICES:<br>
      [<span class="text-cyan-400">Languages</span>] C#, C++, C, Java, JavaScript, Python, Node.js<br>
      [<span class="text-emerald-400">Game Engines</span>] Unity3D (Core), Cocos2dX, ImpactJS, URP pipelines<br>
      [<span class="text-violet-400">Systems & DI</span>] SOLID Core, Clean Architecture, Dependency Injection, Service Locators<br>
      [<span class="text-fuchsia-400">Networking</span>] Photon Fusion, WebRTC, Node.js Signalers, WebSockets, AWS EC2<br>
      [<span class="text-amber-400">AI Automation</span>] Model Context Protocol, LLM autonomous codebases, R&D prompt pipelines`,
    experience: `CAREER TIERS:<br>
      1. <span class="text-cyan-400">Arclite Systems Ltd.</span> (Apr 2025 - Present) | Software Engineer<br>
         - System modernization and UI revamp of Tic Tac Toe Glow (100M+ downloads) using SOLID refactoring and custom Odin tooling.<br>
      2. <span class="text-emerald-400">PixelLab Ltd.</span> (Sep 2024 - Feb 2025) | Unity 3D Developer<br>
         - Scaled '29 Classic: Offline Card Games' (10K+ DLs, 4.6 Stars) core gameplay AI and responsive visual card interfaces.<br>
      3. <span class="text-violet-400">Bangladesh France Peru (BFP) Engineers</span> (Apr 2023 - Mar 2024) | Software Engineer (Unity3D)<br>
         - Core backbone of metaverse simulators (Cameleon 3D ERP), engineering WebRTC VR render-streaming and NodeJS WebSocket signalers.<br>
      4. <span class="text-fuchsia-400">Free Pixel Games Ltd.</span> (Oct 2020 - Apr 2022) | Unity Developer<br>
         - Built gameplay features and high-performance interactive marketing playable ads (Luna SDK) for Dragon Village (5M+ downloads) and Jurassic Sniper 3D (iOS App Store).`,
    "serialized-shield": `<span class="text-fuchsia-400 font-bold">UNITY SERIALIZED SHIELD</span><br>
      Repo: <span class="underline">github.com/AlphaBoysLab/unity-serialized-shield</span><br>
      Status: SHIPPED & PRODUCTION-READY (100% Autonomous AI-written)<br><br>
      This developer asset solves a classic Unity refactoring bug. When renaming variables, Unity's built-in serialization links break, corrupting levels and Prefabs. Serialized Shield automatically inserts the [FormerlySerializedAs] attribute on renames by checking active AST changes under VS Code and Visual Studio APIs.<br><br>
      A monument to high-fidelity AI-assisted engineering and autonomous product release.`,
    contact: `CONNECT PORTALS:<br>
      - Email: <span class="text-cyan-400">shahriar.islam.dev@gmail.com</span><br>
      - Phone: <span class="text-emerald-400">+8801644854401</span><br>
      - LinkedIn: <span class="underline">linkedin.com/in/shahriar-softwareengineer/</span><br>
      - GitHub: <span class="underline">github.com/Shahriar-Soft-Eng</span>`
  };

  // Helper typing animation
  function typeMessage(htmlText, delay = 10, callback) {
    const div = document.createElement('div');
    div.className = 'mb-2 text-slate-300 font-mono text-sm leading-relaxed';
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;

    let i = 0;
    // Strip HTML for parsing char length safely
    let temp = document.createElement('div');
    temp.innerHTML = htmlText;
    let text = temp.innerHTML; // Keeps HTML tags intact

    // We inject HTML directly but can simulate progress
    div.innerHTML = text;
    if (callback) callback();
  }

  // Handle command execution
  window.runConsoleCommand = function(cmd) {
    cmd = cmd.trim().toLowerCase();
    
    // Echo command
    const echo = document.createElement('div');
    echo.className = 'mb-2 text-cyan-400 font-mono text-sm';
    echo.innerHTML = `<span class="text-slate-500">guest@shahriar-dev:~$</span> ${cmd}`;
    body.appendChild(echo);

    if (cmd === 'clear') {
      body.innerHTML = '';
      return;
    }

    if (responses[cmd]) {
      typeMessage(responses[cmd]);
    } else if (cmd === '') {
      // Empty input
    } else {
      typeMessage(`<span class="text-red-400">Command not found: "${cmd}". Type 'help' to review directory list.</span>`);
    }
    
    body.scrollTop = body.scrollHeight;
  };

  // Listen to keyboard
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const commandValue = input.value;
      runConsoleCommand(commandValue);
      input.value = '';
    }
  });

  // Welcome sequence
  typeMessage(`<span class="text-violet-400">System Initializing... OK</span><br>
    <span class="text-cyan-400">MD SHAHRIAR ISLAM • AUTONOMOUS INTELLIGENCE CORE v1.0.5</span><br>
    Type '<span class="text-emerald-400 font-bold underline cursor-pointer" onclick="runConsoleCommand('help')">help</span>' to list active command scripts.`, 15);
}

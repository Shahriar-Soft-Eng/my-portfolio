document.addEventListener('DOMContentLoaded', () => {
  // Initialize all subsystems
  initParticleBackground();
  initAiConsole();
  initTicTacGlow();
  loadProjects();
  initAtsToggler();
  initNavigation();
});

/* ---------------------------------------------------- */
/* 1. NEURAL PARTICLE BACKGROUND SYSTEM                 */
/* ---------------------------------------------------- */
function initParticleBackground() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  const numberOfParticles = 75;
  let mouse = { x: null, y: null, radius: 120 };

  // Track cursor
  window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Fit screen size
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  // Particle Blueprint
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      // Accent glowing colors
      const colors = ['#06b6d4', '#8b5cf6', '#10b981', '#d946ef'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap boundaries
      if (this.x > canvas.width) this.x = 0;
      else if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      else if (this.y < 0) this.y = canvas.height;

      // Repel from cursor
      if (mouse.x != null && mouse.y != null) {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let directionX = dx / distance;
          let directionY = dy / distance;
          this.x += directionX * force * 2;
          this.y += directionY * force * 2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset
    }
  }

  // Generate particles
  function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  init();

  // Connect close nodes
  function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let dx = particlesArray[a].x - particlesArray[b].x;
        let dy = particlesArray[a].y - particlesArray[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          opacityValue = 1 - (distance / 110);
          ctx.strokeStyle = `rgba(14, 165, 233, ${opacityValue * 0.15})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
  }
  animate();
}

/* ---------------------------------------------------- */
/* 2. RETRO INTERACTIVE AI CONSOLE (TERMINAL)           */
/* ---------------------------------------------------- */
function initAiConsole() {
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
         - Contributing to Tic Tac Glow (100M+ downloads). Optimized rendering cycles via Profiler & Frame Debugger.<br>
      2. <span class="text-emerald-400">PixelLab Ltd.</span> (Sep 2024 - Feb 2025) | Unity 3D Developer<br>
         - Programmed card game synchronization (Callbreak, Hazari) via Photon Fusion SDK.<br>
      3. <span class="text-violet-400">BFP Engineers</span> (Apr 2023 - Mar 2024) | Software Engineer (Unity3D)<br>
         - R&D framework backbone, VR metaverse sims, WebRTC live audio integrations.<br>
      4. <span class="text-fuchsia-400">Free Pixel Games Ltd.</span> (Oct 2020 - Apr 2022) | Unity Developer<br>
         - Interactive high-retention ads for top games (Dragon Village 5M+ downloads).`,
    "serialized-shield": `<span class="text-fuchsia-400 font-bold">UNITY SERIALIZED SHIELD</span><br>
      Repo: <span class="underline">github.com/AlphaBoysLab/unity-serialized-shield</span><br>
      Status: SHIPPED & PRODUCTION-READY (100% Autonomous AI-written)<br><br>
      This developer asset solves a classic Unity refactoring bug. When renaming variables, Unity's built-in serialization links break, corrupting levels and Prefabs. Serialized Shield automatically inserts the [FormerlySerializedAs] attribute on renames by checking active AST changes under VS Code and Visual Studio APIs.<br><br>
      A monument to high-fidelity AI-assisted engineering and autonomous product release.`,
    contact: `CONNECT PORTALS:<br>
      - Email: <span class="text-cyan-400">shahriar.islam.dev@gmail.com</span><br>
      - Phone: <span class="text-emerald-400">+8801644854401</span><br>
      - LinkedIn: <span class="underline">linkedin.com/in/shahriar-softwareengineer/</span><br>
      - GitHub: <span class="underline">github.com/AlphaBoysLab</span>`
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
    Type '<span class="text-emerald-400 font-bold underline cursor-pointer" onclick="runConsoleCommand(\\'help\\')">help</span>' to list active command scripts.`, 15);
}

/* ---------------------------------------------------- */
/* 3. PLAYABLE "TIC-TAC-GLOW" MINIGAME & SOUND SYNTH    */
/* ---------------------------------------------------- */
function initTicTacGlow() {
  const cells = document.querySelectorAll('.ttt-cell');
  const statusText = document.getElementById('ttt-status');
  const resetBtn = document.getElementById('ttt-reset');
  if (!cells.length || !statusText || !resetBtn) return;

  let board = ['', '', '', '', '', '', '', '', ''];
  let isGameActive = true;
  let currentPlayer = 'X'; // User is X (Cyan), AI is O (Fuchsia)

  // A. Synthesizing gaming sound effects using Web Audio API!
  // No external assets required, incredibly robust.
  function playSynthSound(type) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'x') {
        // Cyan pitch (high click)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } else if (type === 'o') {
        // Fuchsia pitch (medium click)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(392, ctx.currentTime); // G4
        osc.frequency.exponentialRampToValueAtTime(261.63, ctx.currentTime + 0.15); // C4
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
        osc.start();
        osc.stop(ctx.currentTime + 0.18);
      } else if (type === 'win') {
        // Satisfying win melody (Chime)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.4); // C6
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.55);
        osc.start();
        osc.stop(ctx.currentTime + 0.55);
      } else if (type === 'tie') {
        // Low buzzer
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(120, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.32);
        osc.start();
        osc.stop(ctx.currentTime + 0.32);
      }
    } catch (e) {
      console.warn("Web Audio context blocked or unsupported:", e);
    }
  }

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
    [0, 4, 8], [2, 4, 6]             // Diag
  ];

  function checkWin(b, player) {
    return winPatterns.some(pattern => {
      return pattern.every(index => b[index] === player);
    });
  }

  function checkTie(b) {
    return b.every(cell => cell !== '');
  }

  // Minimax Algorithm for unbeatable AI
  function minimax(newBoard, player) {
    const availSpots = newBoard.reduce((acc, val, i) => {
      if (val === '') acc.push(i);
      return acc;
    }, []);

    if (checkWin(newBoard, 'X')) return { score: -10 };
    if (checkWin(newBoard, 'O')) return { score: 10 };
    if (availSpots.length === 0) return { score: 0 };

    const moves = [];
    for (let i = 0; i < availSpots.length; i++) {
      const move = {};
      move.index = availSpots[i];
      newBoard[availSpots[i]] = player;

      if (player === 'O') {
        const result = minimax(newBoard, 'X');
        move.score = result.score;
      } else {
        const result = minimax(newBoard, 'O');
        move.score = result.score;
      }

      newBoard[availSpots[i]] = '';
      moves.push(move);
    }

    let bestMove;
    if (player === 'O') {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  }

  // Cell interaction click
  function handleCellClick(e) {
    const cell = e.target;
    const idx = parseInt(cell.getAttribute('data-index'));

    if (board[idx] !== '' || !isGameActive || currentPlayer !== 'X') return;

    // User move
    makeMove(idx, 'X');
    playSynthSound('x');

    if (evaluateGame()) return;

    // Trigger AI move with a slight human-like thinking delay
    statusText.innerText = "Computer is calculating...";
    currentPlayer = 'O';
    setTimeout(() => {
      aiMove();
    }, 450);
  }

  function makeMove(index, player) {
    board[index] = player;
    const cell = cells[index];
    cell.innerText = player;
    cell.classList.add(player === 'X' ? 'cell-x' : 'cell-o');
  }

  function aiMove() {
    if (!isGameActive) return;

    // Add a tiny mistake probability (15%) to make the AI beatable and fun
    let bestIndex;
    const emptyIndices = board.reduce((acc, val, i) => {
      if (val === '') acc.push(i);
      return acc;
    }, []);

    if (Math.random() < 0.15 && emptyIndices.length > 0) {
      // Random move (make AI humanly flawed!)
      bestIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    } else {
      // Best minimax move
      const result = minimax(board, 'O');
      bestIndex = result.index;
    }

    makeMove(bestIndex, 'O');
    playSynthSound('o');
    
    currentPlayer = 'X';
    if (!evaluateGame()) {
      statusText.innerText = "Your turn! Defeat the AI.";
    }
  }

  function evaluateGame() {
    // Check user win
    if (checkWin(board, 'X')) {
      handleGameOver('X');
      return true;
    }
    // Check AI win
    if (checkWin(board, 'O')) {
      handleGameOver('O');
      return true;
    }
    // Check Tie
    if (checkTie(board)) {
      handleGameOver('tie');
      return true;
    }
    return false;
  }

  function handleGameOver(winner) {
    isGameActive = false;
    if (winner === 'tie') {
      statusText.innerText = "It's a draw! Re-engage grid.";
      statusText.className = "text-amber-400 text-sm font-semibold tracking-wider text-center mt-4";
      playSynthSound('tie');
    } else {
      const winnerName = winner === 'X' ? 'You Win!' : 'AI Wins!';
      statusText.innerText = `${winnerName} Game Over.`;
      statusText.className = winner === 'X' 
        ? "text-emerald-400 text-sm font-bold tracking-wider text-center mt-4 text-glow-emerald"
        : "text-fuchsia-400 text-sm font-bold tracking-wider text-center mt-4 text-glow-fuchsia";

      playSynthSound('win');

      // Highlight winning row/col/diagonal
      const winningPattern = winPatterns.find(pattern => {
        return pattern.every(index => board[index] === winner);
      });

      if (winningPattern) {
        winningPattern.forEach(index => {
          cells[index].classList.add('winning-cell');
        });
      }
    }
  }

  function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    statusText.innerText = "Deploy mark. Click a cell to play!";
    statusText.className = "text-cyan-400 text-sm font-semibold tracking-wider text-center mt-4 text-glow-cyan";
    
    cells.forEach(cell => {
      cell.innerText = '';
      cell.className = 'ttt-cell';
    });
  }

  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  resetBtn.addEventListener('click', resetGame);
}

/* ---------------------------------------------------- */
/* 4. DYNAMIC PROJECTS DATABASE PARSING & FILTERING     */
/* ---------------------------------------------------- */
let allProjectsData = [];

function loadProjects() {
  const container = document.getElementById('projects-grid');
  const filters = document.querySelectorAll('.project-filter-btn');
  if (!container) return;

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

      // Technolgoy badges mapping
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
            <ul class="list-none pl-0 mb-2">
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
      
      // Force trigger class add on next frames to start animation transition
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
      console.error("Local JSON database load failed, compiling fallback arrays:", err);
      // Fail-safe mock data loader
      allProjectsData = [];
      renderCards([]);
    });

  // Attach filter event actions
  filters.forEach(btn => {
    btn.addEventListener('click', (e) => {
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

/* ---------------------------------------------------- */
/* 5. ATS-FRIENDLY RESUME SWITCHER MODULE               */
/* ---------------------------------------------------- */
function initAtsToggler() {
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

/* ---------------------------------------------------- */
/* 6. DYNAMIC UI NAV & ANIMATIONS                       */
/* ---------------------------------------------------- */
function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('mobile-nav-menu');
  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
  });

  // Close when link clicked
  const mobileLinks = navMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.add('hidden');
      navMenu.classList.remove('flex');
    });
  });
}

/**
 * Playable "Tic-Tac-Glow" game with Unbeatable Minimax AI & sound synthesis
 */
export function initTicTacGlow() {
  const cells = document.querySelectorAll('.ttt-cell');
  const statusText = document.getElementById('ttt-status');
  const resetBtn = document.getElementById('ttt-reset');
  if (!cells.length || !statusText || !resetBtn) return;

  let board = ['', '', '', '', '', '', '', '', ''];
  let isGameActive = true;
  let currentPlayer = 'X'; // User is X (Cyan), AI is O (Fuchsia)

  // Web Audio Synth Generator
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
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } else if (type === 'o') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(392, ctx.currentTime); // G4
        osc.frequency.exponentialRampToValueAtTime(261.63, ctx.currentTime + 0.15); // C4
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
        osc.start();
        osc.stop(ctx.currentTime + 0.18);
      } else if (type === 'win') {
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

  function handleCellClick(e) {
    const cell = e.target;
    const idx = parseInt(cell.getAttribute('data-index'));

    if (board[idx] !== '' || !isGameActive || currentPlayer !== 'X') return;

    makeMove(idx, 'X');
    playSynthSound('x');

    if (evaluateGame()) return;

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

    let bestIndex;
    const emptyIndices = board.reduce((acc, val, i) => {
      if (val === '') acc.push(i);
      return acc;
    }, []);

    if (Math.random() < 0.15 && emptyIndices.length > 0) {
      bestIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    } else {
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
    if (checkWin(board, 'X')) {
      handleGameOver('X');
      return true;
    }
    if (checkWin(board, 'O')) {
      handleGameOver('O');
      return true;
    }
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

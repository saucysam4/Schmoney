const ROWS = 6;
const COLS = 7;
let currentPlayer = 1; // Player 1: Red, Player 2: Yellow
let board = [];

// Game Board
function createBoard() {
  const boardElement = document.getElementById('board');
  for (let row = 0; row < ROWS; row++) {
    board[row] = Array(COLS).fill(0);
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    for (let col = 0; col < COLS; col++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.setAttribute('data-row', row);
      cellElement.setAttribute('data-col', col);
      cellElement.addEventListener('click', () => dropPiece(col));
      rowElement.appendChild(cellElement);
    }
    boardElement.appendChild(rowElement);
  }
}

// Drop a piece into the column
function dropPiece(col) {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row][col] === 0) {
      board[row][col] = currentPlayer;
      renderBoard();
      if (checkWin(row, col)) {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
      } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
      }
      return;
    }
  }
}


function renderBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    const row = parseInt(cell.getAttribute('data-row'));
    const col = parseInt(cell.getAttribute('data-col'));
    if (board[row][col] === 0) {
      cell.style.backgroundColor = 'white';
    } else if (board[row][col] === 1) {
      cell.style.backgroundColor = 'red';
    } else {
      cell.style.backgroundColor = 'yellow';
    }
  });
}


function checkWin(row, col) {
  const directions = [[1, 0], [0, 1], [1, 1], [1, -1]];
  for (const [dx, dy] of directions) {
    let count = 1;
    for (const sign of [-1, 1]) {
      let r = row + sign * dx;
      let c = col + sign * dy;
      while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === currentPlayer) {
        count++;
        r += sign * dx;
        c += sign * dy;
      }
    }
    if (count >= 4) {
      return true;
    }
  }
  return false;
}


function resetGame() {
  board = [];
  currentPlayer = 1;
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';
  createBoard();
}


createBoard();
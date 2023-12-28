
const board = document.getElementById('board');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let nextplayer="o"
const status = document.getElementById('status');
let scores = {
  X: 0,
  O: 0
};

function createBoard() {
    for (let i= 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${i}`;
        cell.addEventListener('click', () => Click(i));
        board.appendChild(cell);
    }
}
createBoard();
function checkWinner() {
  const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (const pattern of winPatterns) {//index thouth check win pattern
      const [a, b, c] = pattern;
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return gameBoard[a];
      }
  }

  return null;
} 
function checkDraw() {
return !gameBoard.includes('');//all cell are include the cells its shoud be game is draw
}   

function Click(index) {
if (!gameActive || gameBoard[index] !== '') return;

gameBoard[index] = currentPlayer;//only one time click one letter show
document.getElementById(`cell-${index}`).innerText = currentPlayer;//inside the cells print a X OR O

const winner = checkWinner();
if (winner) {
  document.getElementById('gameResultMessage').innerText = `${winner} "Player wins!"`;
  scores[winner]++;
  updateScores();
  const gameResultModal = new bootstrap.Modal(document.getElementById('gameResultModal'));
  gameResultModal.show();
 
  gameActive = false;//after over the game you click a any cells not inside the text
} else if (checkDraw()) {
  document.getElementById('gameResultMessage').innerText = "It's a draw!";
  const gameResultModal = new bootstrap.Modal(document.getElementById('gameResultModal'));
  gameResultModal.show();//recall the chack draw function
} else {
      
    currentPlayer =currentPlayer=== 'X' ? 'O' : 'X';//change current player name
    status.innerText = `Player ${currentPlayer}'s turn`;//

}
}
function updateScores(currentPlayer) {
  document.querySelector("#scoreboard #player1").innerHTML = scores.X;
  document.querySelector("#scoreboard #player2").innerHTML = scores.O;
 
  
}

function reset() {
gameBoard = ['', '', '', '', '', '', '', '', ''];
gameActive = true;
currentPlayer = 'X';
updateScores();
document.getElementById('status').innerText = "Player X's turn";

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.innerText = '';
});
}




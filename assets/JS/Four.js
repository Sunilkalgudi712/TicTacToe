const board = document.getElementById('board');
let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', '', '', '', '', '', '','', '','', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    
    function createBoard() {
        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${i}`;
            cell.addEventListener('click', () => handleClick(i));
            board.appendChild(cell);
        }
    }

    createBoard();

    function checkWinner() {
        const winPatterns = [
            [0,1,2,3], [4,5,6,7],[8,9,10,11],[12,13,14,15], // rows
            [0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15], // columns
            [0,5,10,15],[3,6,9,12]// diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c,d] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]&& gameBoard[a] === gameBoard[d]) {
                return gameBoard[a];
            }
        }

        return null;
    }

    function checkDraw() {
        return !gameBoard.includes('');
    }

    function handleClick(index) {
        if (!gameActive || gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        document.getElementById(`cell-${index}`).innerText = currentPlayer;

        const winner = checkWinner();
        if (winner) {
              document.getElementById('gameResultMessage').innerText = `${winner} "Player wins!"`;
              scores[winner]++;
              updateScores();
             const gameResultModal = new bootstrap.Modal(document.getElementById('gameResultModal'));
             gameResultModal.show();
             gameActive = false;
        } else if (checkDraw()) {
            document.getElementById('gameResultMessage').innerText = "It's a draw!";
            const gameResultModal = new bootstrap.Modal(document.getElementById('gameResultModal'));
            gameResultModal.show();//recall the chack draw function
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.innerText = `Player ${currentPlayer}'s turn`;
        }
    }

   

let scores = {
    X: 0,
    O: 0
};
function updateScores(currentPlayer) {
	document.querySelector("#scoreboard #player1").innerHTML = scores.X;
    document.querySelector("#scoreboard #player2").innerHTML = scores.O;
   
	
}

function reset() {
    gameBoard = ['', '', '', '', '', '', '', '', '', '', '', '', '', '','', '','', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  updateScores();
  document.getElementById('status').innerText = "Player X's turn";

  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
      cell.innerText = '';
  });
}
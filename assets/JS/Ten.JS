const board = document.getElementById('board');
let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', '', '', '', '', '', '','', '','', '', 
    '', '', '',  '', '', '', '','','','','','','','','','','','','', '', '', '', '', '', '', '', '', '', '', '', '', '','', '','', '', 
    '', '', '',  '', '', '', '','','','','','','','','','','','','', '', '', '', '', '', '', '', '', '', '', '', '', '','', '','', '', 
    '', '', '',  '', '', '', '','','',''];
    let gameActive = true;
    
    function createBoard() {
        for (let i = 0; i < 100; i++) {
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
            [0, 1,2,3,4,5,6,7,8,9], [10,11,12,13,14,15,16,17,18,19], [20,21,22,23,24,25,26,27,28,29],[30,31,32,33,34,35,36,37,38,39],[40,41,42,43,44,45,46,47,48,49],[50,51,52,53,54,,55,56,57,58,59],[60,61,62,63,64,65,66,67,68,69],[70,71,72,73,74,75,76,77,78,79] ,[80,81,82,83,84,85,86,87,88,89],[90,91,92,93,94,95,96,97,98,99],// rows
            [0,10,20,30,40,50,60,70,80,90], [1,11,21,31,41,51,61,71,81,91], [2,12,22,32,42,52,62,72,82,92],[3,13,23,33,43,53,63,73,83,93],[4,14,24,34,44,54,64,74,84,94],[5,15,25,35,45,55,65,75,85,95],[6,16,26,36,46,56,66,76,86,96],[7,17,27,37,47,57,67,77,87,97] ,[8,18,28,38,48,58,68,78,88,98],[9,19,29,39,49,59,69,79,89,99],// columns
            [0,11,22,33,44,55,66,77,88,99], [9,18,27,36,45,54,63,72,81,90]             // diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c,d,e,f,g,h,i,j] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]&& gameBoard[a] === gameBoard[d]&& gameBoard[a] === gameBoard[e]&& gameBoard[a] === gameBoard[f]&& gameBoard[a] === gameBoard[g]&& gameBoard[a] === gameBoard[h] && gameBoard[a] === gameBoard[i]){
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
            status.innerText = `Player ${winner} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            status.innerText = 'It\'s a draw!';
            gameActive = false;
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
        gameBoard = ['', '', '', '', '', '', '', '', '', '', '', '', '', '','', '','', '', 
        '', '', '',  '', '', '', '','','','','','','','','','','','','', '', '', '', '', '', '', '', '', '', '', '', '', '','', '','', '', 
        '', '', '',  '', '', '', '','','','','','','','','','','','','', '', '', '', '', '', '', '', '', '', '', '', '', '','', '','', '', 
        '', '', '',  '', '', '', '','','',''];
      gameActive = true;
      currentPlayer = 'X';
      updateScores();
      document.getElementById('status').innerText = "Player X's turn";
    
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
          cell.innerText = '';
      });
    }

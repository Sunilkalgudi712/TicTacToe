document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
	const btn = document.getElementById('switch');
	
    function createBoard() {
        for (let i= 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';                   
            cell.id = `cell-${i}`;
            board.appendChild(cell);
        }
    }

    createBoard();
});
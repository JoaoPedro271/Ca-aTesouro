document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.querySelector('.game-board');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restartButton');
    let treasureIndex;
    const grideSize = 25;

    function initializeGame() {
        gameBoard.innerHTML = '';
        treasureIndex = Math.floor(Math.random() * grideSize);
        message.textContent = '';
        createBoard();
    }

    function createBoard() {

        for (let i = 0; i < grideSize; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', handleCellClick);
            gameBoard.appendChild(cell);
        }
    }

    function handleCellClick(event){
        const cell = event.target;
        const cellIndex = parseInt(cell.dataset.index);

        if (cell.classList.contains('clicked')) return;

        cell.classList.add('clicked');

        if (cellIndex === treasureIndex){

            message.textContent = 'Parabens! Você encontrou o tesuro!';
            message.style.color = 'green';
            revealTreasure();
        }else {
            message.textContent = 'Continue procurando...';
            message.style.color = 'blue';
        }
    }

    function revealTreasure(){
        const cells = document.querySelectorAll('.cell');
        cells[treasureIndex].textContent = '💰';
        cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
    }
    restartButton.addEventListener('click', initializeGame);
    initializeGame();
});
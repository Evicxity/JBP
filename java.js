document.addEventListener('DOMContentLoaded', () => {
    const grid = createGrid();
    renderGrid(grid);
    
    function createGrid() {
        const grid = [];
        for (let i = 0; i < 20; i++) {
            grid.push(Array.from(Array(10), () => 0));
        }
        return grid;
    }
    
    function renderGrid(grid) {
        const gameContainer = document.getElementById('game-container');
        gameContainer.innerHTML = '';
        
        grid.forEach(row => {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');
            row.forEach(cell => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.style.backgroundColor = cell ? 'blue' : '';
                rowElement.appendChild(cellElement);
            });
            gameContainer.appendChild(rowElement);
        });
    }
});

export const SHIP_LENGTHS = [5, 4, 3, 3, 2];

export const SHIP_NAMES = {
    5: 'Carrier',
    4: 'Battleship',
    3: 'Submarine',
    2: 'Destroyer',
};

export function computeCells(board, length, row, col, orientation) {
    const cells = [];
    for (let i = 0; i < length; i++) {
        const r = orientation === 'vertical' ? row + i : row;
        const c = orientation === 'horizontal' ? col + i : col;
        if (r < 0 || r >= board.size || c < 0 || c >= board.size) return null;
        cells.push([r, c]);
    }
    return cells;
}

export function canPlaceAt(board, length, row, col, orientation) {
    const cells = computeCells(board, length, row, col, orientation);
    if (!cells) return false;
    return cells.every(([r, c]) => board.grid[r][c] === null);
}

export function tryPlace(board, length, row, col, orientation) {
    if (!canPlaceAt(board, length, row, col, orientation)) return null;
    return board.placeShip(length, row, col, orientation);
}

export function randomPlacement(board) {
    for (const length of SHIP_LENGTHS) {
        let placed = false;
        let guard = 0;
        while (!placed && guard < 1000) {
            guard += 1;
            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            const maxRow = orientation === 'vertical' ? board.size - length : board.size - 1;
            const maxCol = orientation === 'horizontal' ? board.size - length : board.size - 1;
            const row = Math.floor(Math.random() * (maxRow + 1));
            const col = Math.floor(Math.random() * (maxCol + 1));
            if (tryPlace(board, length, row, col, orientation)) placed = true;
        }
        if (!placed) throw new Error(`Could not place ship of length ${length}`);
    }
}

export function resetBoard(board) {
    board.ships = [];
    board.missedAttacks = [];
    board.attacked = new Set();
    board.grid = Array.from({ length: board.size }, () => Array(board.size).fill(null));
}
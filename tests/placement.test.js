import { computeCells, canPlaceAt, tryPlace, randomPlacement, resetBoard } from '../src/game/placement.js';
import Gameboard from '../src/game/Gameboard.js';

describe('placement helpers', () => {
    let board;
    beforeEach(() => { board = new Gameboard(); });

    test('computeCells returns null when off-board', () => {
        expect(computeCells(board, 4, 8, 8, 'horizontal')).toBeNull();
        expect(computeCells(board, 4, 8, 0, 'vertical')).toBeNull();
    });

    test('computeCells returns correct cells for horizontal placement', () => {
        expect(computeCells(board, 3, 2, 4, 'horizontal'))
            .toEqual([[2, 4], [2, 5], [2, 6]]);
    });

    test('canPlaceAt is false when overlapping', () => {
        board.placeShip(3, 0, 0, 'horizontal');
        expect(canPlaceAt(board, 3, 0, 2, 'horizontal')).toBe(false);
    });

    test('tryPlace returns null instead of throwing on conflict', () => {
        board.placeShip(3, 0, 0, 'horizontal');
        expect(tryPlace(board, 3, 0, 0, 'horizontal')).toBeNull();
    });

    test('randomPlacement fills the board with 5 ships totaling 17 cells', () => {
        randomPlacement(board);
        expect(board.ships.length).toBe(5);
        const totalCells = board.ships.reduce((sum, s) => sum + s.length, 0);
        expect(totalCells).toBe(17);
    });

    test('resetBoard clears everything', () => {
        randomPlacement(board);
        resetBoard(board);
        expect(board.ships).toEqual([]);
        expect(board.missedAttacks).toEqual([]);
        expect(board.attacked.size).toBe(0);
        expect(board.grid.every(row => row.every(cell => cell === null))).toBe(true);
    });
});
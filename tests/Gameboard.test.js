import Gameboard from '../src/game/Gameboard.js';
import Ship from '../src/game/Ship.js';

describe('Gameboard', () => {
    let board;

    beforeEach(() => {
        board = new Gameboard();
    });

    test('starts empty', () => {
        expect(board.ships).toEqual([]);
        expect(board.missedAttacks).toEqual([]);
    });

    describe('placeShip', () => {
        test('places a horizontal ship at given coordinates', () => {
            const ship = board.placeShip(3, 0, 0, 'horizontal');
            expect(ship).toBeInstanceOf(Ship);
            expect(board.ships.length).toBe(1);
            expect(board.grid[0][0]).toBe(ship);
            expect(board.grid[0][1]).toBe(ship);
            expect(board.grid[0][2]).toBe(ship);
        });

        test('places a vertical ship at given coordinates', () => {
            const ship = board.placeShip(3, 2, 4, 'vertical');
            expect(board.grid[2][4]).toBe(ship);
            expect(board.grid[3][4]).toBe(ship);
            expect(board.grid[4][4]).toBe(ship);
        });

        test('rejects ship that would go off the board', () => {
            expect(() => board.placeShip(4, 8, 8, 'horizontal')).toThrow();
            expect(() => board.placeShip(4, 8, 0, 'vertical')).toThrow();
        });

        test('rejects overlapping ships', () => {
            board.placeShip(3, 0, 0, 'horizontal');
            expect(() => board.placeShip(3, 0, 1, 'horizontal')).toThrow();
        });
    });

    describe('receiveAttack', () => {
        test('records a miss', () => {
            board.receiveAttack(0, 0);
            expect(board.missedAttacks).toContainEqual([0, 0]);
        });

        test('hits a ship at that coordinate', () => {
            const ship = board.placeShip(3, 0, 0, 'horizontal');
            board.receiveAttack(0, 1);
            expect(ship.hits).toBe(1);
        });

        test('returns "hit" or "miss"', () => {
            board.placeShip(3, 0, 0, 'horizontal');
            expect(board.receiveAttack(0, 0)).toBe('hit');
            expect(board.receiveAttack(5, 5)).toBe('miss');
        });

        test('prevents attacking the same coordinate twice', () => {
            board.receiveAttack(0, 0);
            expect(() => board.receiveAttack(0, 0)).toThrow();
        });
    });

    describe('allSunk', () => {
        test('is false while ships remain afloat', () => {
            board.placeShip(2, 0, 0, 'horizontal');
            board.receiveAttack(0, 0);
            expect(board.allSunk()).toBe(false);
        });

        test('is true when all ships are sunk', () => {
            board.placeShip(2, 0, 0, 'horizontal');
            board.receiveAttack(0, 0);
            board.receiveAttack(0, 1);
            expect(board.allSunk()).toBe(true);
        });

        test('is false when no ships placed (edge case)', () => {
            expect(board.allSunk()).toBe(false);
        });
    });
});
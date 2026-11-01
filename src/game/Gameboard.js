import Ship from './Ship.js';

const SIZE = 10;

export default class Gameboard {
    constructor() {
        this.size = SIZE;
        this.ships = [];
        this.missedAttacks = [];
        this.attacked = new Set();
        this.grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
    }

    placeShip(length, row, col, orientation = 'horizontal') {
        const coords = [];
        for (let i = 0; i < length; i++) {
            const r = orientation === 'vertical' ? row + i : row;
            const c = orientation === 'horizontal' ? col + i : col;
            if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) {
                throw new Error('Ship placement out of bounds');
            }
            if (this.grid[r][c]) {
                throw new Error('Ship placement overlaps another ship');
            }
            coords.push([r, c]);
        }

        const ship = new Ship(length);
        this.ships.push(ship);
        coords.forEach(([r, c]) => {
            this.grid[r][c] = ship;
        });
        return ship;
    }

    receiveAttack(row, col) {
        const key = `${row},${col}`;
        if (this.attacked.has(key)) {
            throw new Error('Coordinate already attacked');
        }
        this.attacked.add(key);

        const ship = this.grid[row][col];
        if (ship) {
            ship.hit();
            return 'hit';
        }
        this.missedAttacks.push([row, col]);
        return 'miss';
    }

    hasAttacked(row, col) {
        return this.attacked.has(`${row},${col}`);
    }

    allSunk() {
        if (this.ships.length === 0) return false;
        return this.ships.every((ship) => ship.isSunk());
    }
}
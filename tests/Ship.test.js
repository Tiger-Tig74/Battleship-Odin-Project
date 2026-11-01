import Ship from '../src/game/Ship.js';

describe('Ship', () => {
    test('has a length', () => {
        const ship = new Ship(3);
        expect(ship.length).toBe(3);
    });

    test('starts with zero hits', () => {
        const ship = new Ship(3);
        expect(ship.hits).toBe(0);
    });

    test('hit() increments hits', () => {
        const ship = new Ship(3);
        ship.hit();
        expect(ship.hits).toBe(1);
        ship.hit();
        expect(ship.hits).toBe(2);
    });

    test('is not sunk before enough hits', () => {
        const ship = new Ship(3);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });

    test('is sunk when hits equal length', () => {
        const ship = new Ship(3);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    test('extra hits beyond length do not break isSunk', () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});
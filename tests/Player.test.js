import Player from '../src/game/Player.js';
import Gameboard from '../src/game/Gameboard.js';

describe('Player', () => {
    test('has its own gameboard', () => {
        const p = new Player('real');
        expect(p.board).toBeInstanceOf(Gameboard);
    });

    test('real and computer players can be distinguished', () => {
        expect(new Player('real').type).toBe('real');
        expect(new Player('computer').type).toBe('computer');
    });

    describe('computer random move', () => {
        test('returns a valid unattacked coordinate', () => {
            const cpu = new Player('computer');
            const [r, c] = cpu.getRandomMove();
            expect(r).toBeGreaterThanOrEqual(0);
            expect(r).toBeLessThan(10);
            expect(c).toBeGreaterThanOrEqual(0);
            expect(c).toBeLessThan(10);
        });

        test('never returns an already-attacked coordinate', () => {
            const cpu = new Player('computer');
            for (let r = 0; r < 10; r++) {
                for (let c = 0; c < 10; c++) {
                    if (r === 9 && c === 9) continue;
                    cpu.board.attacked.add(`${r},${c}`);
                }
            }
            const [r, c] = cpu.getRandomMove();
            expect([r, c]).toEqual([9, 9]);
        });
    });
});
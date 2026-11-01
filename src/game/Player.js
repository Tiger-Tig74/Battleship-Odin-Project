import Gameboard from './Gameboard.js';

export default class Player {
    constructor(type = 'real') {
        this.type = type;
        this.board = new Gameboard();
        this.targetQueue = [];
        this.lastHits = [];
    }

    getRandomMove(enemyBoard) {
        const board = enemyBoard || this.board;
        const candidates = [];
        for (let r = 0; r < board.size; r++) {
            for (let c = 0; c < board.size; c++) {
                if (!board.attacked.has(`${r},${c}`)) candidates.push([r, c]);
            }
        }
        if (candidates.length === 0) return null;
        return candidates[Math.floor(Math.random() * candidates.length)];
    }

    getSmartMove(enemyBoard) {
        while (this.targetQueue.length > 0) {
            const [r, c] = this.targetQueue.shift();
            if (r >= 0 && r < enemyBoard.size && c >= 0 && c < enemyBoard.size
                && !enemyBoard.attacked.has(`${r},${c}`)) {
                return [r, c];
            }
        }
        return this.getRandomMove(enemyBoard);
    }
}
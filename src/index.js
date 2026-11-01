import './styles.css';
import Player from './game/Player.js';
import {
    SHIP_LENGTHS,
    randomPlacement,
    resetBoard,
    computeCells,
    canPlaceAt,
    tryPlace,
} from './game/placement.js';
import {
    renderBoard,
    setPreview,
    renderDock,
    setStatus,
    showRestart,
    showPassScreen,
    hidePassScreen,
} from './ui/render.js';

const els = {
    playerBoard: document.getElementById('player-board'),
    enemyBoard: document.getElementById('enemy-board'),
    playerLabel: document.getElementById('player-label'),
    enemyLabel: document.getElementById('enemy-label'),
    dock: document.getElementById('dock'),
    status: document.getElementById('status'),
    rotateBtn: document.getElementById('rotate-btn'),
    randomizeBtn: document.getElementById('randomize-btn'),
    resetPlacementBtn: document.getElementById('reset-placement-btn'),
    startBtn: document.getElementById('start-btn'),
    restartBtn: document.getElementById('restart-btn'),
    mode1p: document.getElementById('mode-1p'),
    mode2p: document.getElementById('mode-2p'),
};

let mode = '1p';
let player1;
let player2;
let phase = 'placing';
let currentTurn = 1;
let placingPlayerIndex = 1;
let pendingShips = [];
let draggingShipId = null;

function currentPlayer() {
    return currentTurn === 1 ? player1 : player2;
}

function opponentOf(p) {
    return p === player1 ? player2 : player1;
}

function isCurrentPlayerHuman() {
    return mode === '2p' || currentTurn === 1;
}

function humanPlacingPlayer() {
    return placingPlayerIndex === 1 ? player1 : player2;
}

function hideDock() {
    els.dock.classList.add('hidden');
    els.dock.textContent = '';
}

function showPlacementControls(show) {
    els.rotateBtn.classList.toggle('hidden', !show);
    els.resetPlacementBtn.classList.toggle('hidden', !show);
}

function nextShipId() {
    return `ship-${Math.random().toString(36).slice(2, 9)}`;
}

function beginPlacement(index) {
    placingPlayerIndex = index;
    const target = index === 1 ? player1 : player2;
    resetBoard(target.board);

    pendingShips = SHIP_LENGTHS.map((length) => ({
        length,
        id: nextShipId(),
        orientation: 'horizontal',
    }));

    phase = 'placing';
    hidePassScreen();
    showPlacementControls(true);
    els.startBtn.classList.remove('hidden');
    els.randomizeBtn.classList.remove('hidden');

    els.playerLabel.textContent = mode === '2p'
        ? `Player ${index} — place your ships`
        : 'Your Board';

    setStatus('Drag ships onto your board. Press R or click Rotate to change orientation.');
    drawPlacement();
}

function drawPlacement() {
    const target = humanPlacingPlayer();
    renderBoard(els.playerBoard, target.board, { showShips: true });
    renderBoard(els.enemyBoard, target.board === player1 ? player2.board : player1.board, {
        showShips: false,
    });

    renderDock(els.dock, pendingShips, {
        onDragStart: (id) => { draggingShipId = id; },
        onDragEnd: () => {
            draggingShipId = null;
            clearPreview();
        },
    });
}

function getDraggingShip() {
    return pendingShips.find((s) => s.id === draggingShipId);
}

function clearPreview() {
    setPreview(els.playerBoard, []);
}

function attachDragHandlers() {
    els.playerBoard.addEventListener('dragover', (e) => {
        if (phase !== 'placing') return;

        const ship = getDraggingShip();
        if (!ship) return;

        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';

        const cell = e.target.closest('.cell');
        if (!cell) {
            clearPreview();
            return;
        }

        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
        const target = humanPlacingPlayer();
        const cells = computeCells(target.board, ship.length, row, col, ship.orientation);
        const valid = !!cells && canPlaceAt(target.board, ship.length, row, col, ship.orientation);

        setPreview(els.playerBoard, cells || [], valid);
    });

    els.playerBoard.addEventListener('dragleave', (e) => {
        if (phase !== 'placing') return;
        if (!els.playerBoard.contains(e.relatedTarget)) clearPreview();
    });

    els.playerBoard.addEventListener('drop', (e) => {
        if (phase !== 'placing') return;
        e.preventDefault();

        const cell = e.target.closest('.cell');
        if (!cell) return;

        const ship = getDraggingShip();
        if (!ship) return;

        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
        const target = humanPlacingPlayer();
        const placed = tryPlace(target.board, ship.length, row, col, ship.orientation);

        if (!placed) {
            clearPreview();
            setStatus('Invalid placement — try another spot.');
            return;
        }

        pendingShips = pendingShips.filter((s) => s.id !== ship.id);
        draggingShipId = null;
        drawPlacement();

        if (pendingShips.length === 0) {
            setStatus('All ships placed. Click "Start Game" or pass the device.');
            els.startBtn.classList.remove('hidden');
        } else {
            setStatus(`Placed! ${pendingShips.length} ship(s) remaining.`);
        }
    });
}

function rotateDraggingOrFirst() {
    if (phase !== 'placing') return;

    const ship = getDraggingShip() || pendingShips[0];
    if (!ship) return;
    ship.orientation = ship.orientation === 'horizontal' ? 'vertical' : 'horizontal';
    drawPlacement();
}

els.rotateBtn.addEventListener('click', rotateDraggingOrFirst);
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r' && phase === 'placing') rotateDraggingOrFirst();
});

els.randomizeBtn.addEventListener('click', () => {
    if (phase !== 'placing') return;
    const target = humanPlacingPlayer();
    resetBoard(target.board);
    randomPlacement(target.board);
    pendingShips = [];
    drawPlacement();
    els.startBtn.classList.remove('hidden');
    setStatus('Ships randomized. Click "Start Game".');
});

els.resetPlacementBtn.addEventListener('click', () => {
    if (phase !== 'placing') return;
    beginPlacement(placingPlayerIndex);
});

els.startBtn.addEventListener('click', () => {
    if (phase !== 'placing') return;
    if (pendingShips.length > 0) {
        setStatus('Place all your ships first (drag them onto your board).');
        return;
    }

    if (mode === '1p') {
        resetBoard(player2.board);
        randomPlacement(player2.board);
    }

    if (mode === '2p' && placingPlayerIndex === 1) {
        hideDock();
        showPlacementControls(false);
        els.startBtn.classList.add('hidden');
        els.randomizeBtn.classList.add('hidden');
        setStatus('Pass the device to Player 2…');

        showPassScreen(
            'Pass to Player 2',
            'Hand the device to Player 2 so they can place their ships. Player 1, look away!',
            () => beginPlacement(2)
        );
        return;
    }

    beginBattle();
});

function beginBattle() {
    phase = 'battle';
    currentTurn = 1;
    hideDock();
    showPlacementControls(false);
    els.startBtn.classList.add('hidden');
    els.randomizeBtn.classList.add('hidden');

    if (mode === '2p') {
        els.enemyLabel.textContent = "Player 2's Board";
        els.playerLabel.textContent = "Player 1's Board";

        showPassScreen('Pass to Player 1', 'Player 1, take your turn.', () => {
            setStatus("Player 1: click a cell on Player 2's board.");
            drawBattle();
        });
    } else {
        els.playerLabel.textContent = 'Your Board';
        els.enemyLabel.textContent = 'Enemy Board';
        setStatus('Your turn: click a cell on the enemy board.');
        drawBattle();
    }
}

function drawBattle() {
    if (phase !== 'battle') return;

    const human = mode === '2p' ? currentPlayer() : player1;
    const opponent = mode === '2p' ? opponentOf(human) : player2;

    renderBoard(els.playerBoard, human.board, { showShips: true });

    const canClickEnemy =
        (mode === '1p' && currentTurn === 1) ||
        (mode === '2p');

    renderBoard(els.enemyBoard, opponent.board, {
        showShips: false,
        onCellClick: canClickEnemy ? handleHumanAttack : null,
    });
}

function handleHumanAttack(row, col) {
    if (phase !== 'battle') return;
    if (!isCurrentPlayerHuman()) return;

    const attacker = currentPlayer();
    const defender = opponentOf(attacker);

    if (defender.board.hasAttacked(row, col)) return;

    const result = defender.board.receiveAttack(row, col);
    drawBattle();

    if (defender.board.allSunk()) {
        endGame(`${mode === '2p' ? 'Player ' + currentTurn : 'You'} win!`);
        return;
    }

    if (result === 'miss') {
        passTurn();
    } else {
        setStatus(mode === '2p'
            ? `Player ${currentTurn} hit! Take another shot.`
            : 'Hit! Take another shot.');
    }
}

function passTurn() {
    if (mode === '1p') {
        currentTurn = 2;
        setStatus('Enemy is thinking…');
        setTimeout(enemyTurn, 800);
    } else {
        currentTurn = currentTurn === 1 ? 2 : 1;

        els.enemyBoard.classList.add('board-hidden');
        els.playerBoard.classList.add('board-hidden');
        showPassScreen(
            `Pass to Player ${currentTurn}`,
            `Player ${currentTurn}, it's your turn. Click ready when the other player is looking away.`,
            () => {
                els.enemyBoard.classList.remove('board-hidden');
                els.playerBoard.classList.remove('board-hidden');
                els.playerLabel.textContent = `Player ${currentTurn}'s Board`;
                els.enemyLabel.textContent = `Player ${currentTurn === 1 ? 2 : 1}'s Board`;
                setStatus(`Player ${currentTurn}: click a cell on the enemy board.`);
                drawBattle();
            }
        );
    }
}

function enemyTurn() {
    if (phase !== 'battle' || mode !== '1p' || currentTurn !== 2) return;

    const move = player2.getSmartMove(player1.board);
    if (!move) return;

    const [r, c] = move;
    const result = player1.board.receiveAttack(r, c);

    if (player1.board.allSunk()) {
        drawBattle();
        endGame('Enemy wins.');
        return;
    }

    if (result === 'miss') {
        currentTurn = 1;
        drawBattle();
        setStatus('Your turn: click a cell on the enemy board.');
    } else {
        const neighbors = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];
        player2.targetQueue.push(...neighbors);
        drawBattle();
        setStatus('Enemy hit! Enemy shoots again…');
        setTimeout(enemyTurn, 800);
    }
}

function endGame(message) {
    phase = 'over';
    setStatus(message);
    showRestart(true);
    hideDock();
    showPlacementControls(false);
}

function setMode(newMode) {
    mode = newMode;
    els.mode1p.classList.toggle('active', mode === '1p');
    els.mode2p.classList.toggle('active', mode === '2p');
    startNewGame();
}

els.mode1p.addEventListener('click', () => setMode('1p'));
els.mode2p.addEventListener('click', () => setMode('2p'));

function startNewGame() {
    player1 = new Player('real');
    player2 = new Player(mode === '2p' ? 'real' : 'computer');

    currentTurn = 1;
    phase = 'placing';
    pendingShips = [];
    draggingShipId = null;

    showRestart(false);
    hidePassScreen();
    attachDragHandlersOnce();

    beginPlacement(1);
}

let dragHandlersAttached = false;
function attachDragHandlersOnce() {
    if (dragHandlersAttached) return;
    dragHandlersAttached = true;
    attachDragHandlers();
}

els.restartBtn.addEventListener('click', startNewGame);

startNewGame();
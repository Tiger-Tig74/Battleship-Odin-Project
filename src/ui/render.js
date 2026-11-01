import { SHIP_NAMES } from '../game/placement.js';

export function renderBoard(container, board, {
    showShips = false,
    onCellClick = null,
} = {}) {
    container.textContent = '';

    for (let r = 0; r < board.size; r++) {
        for (let c = 0; c < board.size; c++) {
            const cell = document.createElement('button');
            cell.className = 'cell';
            cell.dataset.row = r;
            cell.dataset.col = c;

            const ship = board.grid[r][c];
            const attacked = board.attacked.has(`${r},${c}`);

            if (showShips && ship) cell.classList.add('ship');

            if (attacked) {
                if (ship) { cell.classList.add('hit'); cell.textContent = '💥'; }
                else { cell.classList.add('miss'); cell.textContent = '•'; }
            }

            if (onCellClick) {
                if (attacked) {
                    cell.disabled = true;
                } else {
                    cell.addEventListener('click', () => onCellClick(r, c));
                }
            }

            container.appendChild(cell);
        }
    }
}

export function setPreview(container, cells, valid = true) {
    container
        .querySelectorAll('.cell.preview-ok, .cell.preview-bad')
        .forEach((el) => el.classList.remove('preview-ok', 'preview-bad'));

    const className = valid ? 'preview-ok' : 'preview-bad';
    (cells || []).forEach(([r, c]) => {
        const el = container.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`);
        if (el) el.classList.add(className);
    });
}

export function setStatus(text) {
    document.getElementById('status').textContent = text;
}

export function showRestart(show) {
    document.getElementById('restart-btn').classList.toggle('hidden', !show);
    document.getElementById('start-btn').classList.toggle('hidden', show);
    document.getElementById('randomize-btn').classList.toggle('hidden', show);
    document.getElementById('reset-placement-btn').classList.add('hidden');
}

export function renderDock(container, shipsToPlace, handlers) {
    container.textContent = '';
    if (shipsToPlace.length === 0) {
        container.classList.add('hidden');
        return;
    }
    container.classList.remove('hidden');

    shipsToPlace.forEach((ship) => {
        const card = document.createElement('div');
        card.className = 'ship-card';
        card.draggable = true;
        card.dataset.shipId = ship.id;
        card.dataset.length = ship.length;

        const label = document.createElement('span');
        label.className = 'ship-label';
        label.textContent = `${SHIP_NAMES[ship.length] || 'Ship'} (${ship.length})`;

        const silhouette = document.createElement('div');
        silhouette.className = 'ship-silhouette ' + ship.orientation;
        for (let i = 0; i < ship.length; i++) {
            const seg = document.createElement('div');
            seg.className = 'ship-seg';
            silhouette.appendChild(seg);
        }

        card.append(label, silhouette);

        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', ship.id);
            e.dataTransfer.effectAllowed = 'move';
            handlers.onDragStart(ship.id);
        });

        card.addEventListener('dragend', () => {
            if (handlers.onDragEnd) handlers.onDragEnd();
        });

        container.appendChild(card);
    });
}

export function showPassScreen(title, message, onContinue) {
    const overlay = document.getElementById('pass-screen');
    document.getElementById('pass-title').textContent = title;
    document.getElementById('pass-message').textContent = message;

    const btn = document.getElementById('pass-continue');
    const fresh = btn.cloneNode(true);
    btn.replaceWith(fresh);

    fresh.addEventListener('click', () => {
        overlay.classList.add('hidden');
        onContinue();
    });

    overlay.classList.remove('hidden');
}

export function hidePassScreen() {
    document.getElementById('pass-screen').classList.add('hidden');
}
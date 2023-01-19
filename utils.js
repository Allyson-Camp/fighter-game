export function renderGhost(ghostList) {
    const newGhostEl = document.createElement('li');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const livesEl = document.createElement('p');

    nameEl.textContent = ghostList.name;
    livesEl.textContent = ghostList.lives;

    if (ghostList.lives > 0) {
        emojiEl.textContent = '👻';
    } else {
        emojiEl.textContent = '🪦';
    }

    newGhostEl.classList.add('ghost');

    newGhostEl.append(nameEl, livesEl, emojiEl);

    return newGhostEl;
}

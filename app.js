/* Imports */
import { renderGhost } from './utils.js';
/* Get DOM Elements */
const ghostListEl = document.getElementById('ghost-list');
const ghostInputEl = document.getElementById('ghost-input');
const ghostBttnEl = document.getElementById('ghost-bttn');
const playerLivesEl = document.getElementById('player-lives');
const caughtCountEl = document.getElementById('caught-count');
const vampireImgEl = document.getElementById('vampire-img');

/* State */
let ghostsCaught = 0;
let playerLives = 10;

const ghosts = [
    {
        name: 'Lock',
        lives: 3,
    },
    {
        name: 'Shock',
        lives: 2,
    },
    {
        name: 'Barrel',
        lives: 4,
    },
];
/* Events */


ghostBttnEl.addEventListener('click', () => {
    const ghostName = ghostInputEl.value;
    const newGhostEl = {
        name: ghostName || `Dearly Departed ${Math.floor(Math.random() * 50)}`,
        lives: 5, 
    };
    ghosts.push(newGhostEl);
    ghostInputEl.value = '';
    
    if (playerLives === 0) {
        vampireImgEl.classList.add('rip');
        alert('R.I.P 🥀');
        return;
    } 
    
    displayGhosts();
});

/* Display Functions */
function displayGhosts() {
    ghostListEl.textContent = '';

    for (let ghost of ghosts) {
        const newGhostEl = renderGhost(ghost);

        newGhostEl.addEventListener('click', () => {
            if (playerLives === 0) {
                vampireImgEl.classList.add('rip');
                alert('R.I.P 🥀');
                return;
            }
           
            if (Math.random() > 0.9) {
                alert('You scared ' + ghost.name);
                ghost.lives--;

                if (ghost.lives === 0) {
                    ghostsCaught++;
                    caughtCountEl.textContent = ghostsCaught;
                }
            } else {
                alert('You missed ' + ghost.name);
            }

            if (Math.random() > 0.1) {
                alert(ghost.name + ' swooped in and scared you');
                playerLives--;

            } else {
                alert(ghost.name + ' swooped in but missed you');
            }

            playerLivesEl.textContent = playerLives;

            displayGhosts();
        });

        ghostListEl.append(newGhostEl);
    }
}

// function disable() {
//     if (playerLives === 0) {
//         vampireImgEl.classList.add('hide');
//         ghostBttnEl.classList.add('hide');
//         ghostListEl.classList.add('hide');
//         ghostInputEl.classList.add('hide');
//     }
// }
// (don't forget to call any display functions you want to run on page load!)
displayGhosts();
// disable();

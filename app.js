/* Imports */

/* Get DOM Elements */
const ghostsEl = document.querySelector('.ghosts');
const ghostInputEl = document.getElementById('ghost-input');
const ghostButtonEl = document.getElementById('ghost-button');
const playerLivesEl = document.getElementById('player-lives');
const ghostCountEl = document.getElementById('ghost-count');

/* State */
let livesCount = 3;
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
        lives: 1,
    },
];
/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

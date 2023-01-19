/* Imports */

/* Get DOM Elements */
const ghostsEl = document.getElementById('ghosts');
const ghostInputEl = document.getElementById('ghost-input');
const ghostBttnEl = document.getElementById('ghost-bttn');
const playerLivesEl = document.getElementById('player-lives');
const caughtCountEl = document.getElementById('caught-count');

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
        lives: 1,
    },
];
/* Events */

//ghost bttn 'click'
ghostBttnEl.addEventListener('click', () => {
    console.log('addign name');
    const ghostName = ghostInputEl.value; 
    const newGhostEl = {
        name: ghostName || `Dearly Departed ${Math.floor(Math.random() * 100)}`,
        lives: 3, //ask about lives
    };
//push to array
    ghostsEl.push(newGhostEl);
    ghostInputEl.value = '';
//call function to display, do next!
    displayGhosts();
});

// newGhostEl 'click' -- inside display function??
// newGhostEl.addEventListener('click', () => {

// });

/* Display Functions */
function displayGhosts(){
ghostsEl.textContent = '';

for (let ghost of ghosts)

};
// (don't forget to call any display functions you want to run on page load!)

// newFriendEl.addEventListener('click', () => {
//     if (friend.satisfaction < 3 && mushroomCount > 0) {
//         //and if the friend's satisfaction level is below 3 and you have mushrooms left DONE
//         friend.satisfaction++;
//         mushroomCount--;
//         //increment the friends satisfaction and decrement your mushrooms DONE
//         //clear out and display the updated friends and mushrooms (hint: displayFriends, displayMushrooms)
//         displayFriends();
//         displayMushrooms();

//         //alerts to go forage for more or person is full
//     } else if (friend.satisfaction === 3) {
//         alert('All full! Give mushrooms to someone else!');
//         return;
//     } else if (mushroomCount === 0) {
//         alert('Go forage for another mushroom!');
//         return;
//     }
// });
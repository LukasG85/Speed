// window.addEventListener('load', init);
// Globals

// Available Levels
const levels = {
    easy: 8,
    medium: 5,
    hard: 3
}

// To change level
// const currentLevel = levels.easy;
let currentLevel;
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
// Buttons
const btnLevels = document.querySelectorAll('button');

const words = ['audi', 'planeta', 'polska', 'kraków', 'warszawa', 'metallica', 'tatry', 'himalaje', 'zakopane', 'katowice', "plaża", "trzy", "sługa", "mama", "nóż", "panika", "trzysta", "dobry", "nóż", "samolot",
    "restauracja", "obsługa", "kalosze", "wrzątek", "klapki", "woda", "trawa", "czterysta", "jabłko",
    "smutny", "skarpa", "jezioro", "pościel", "dziewięćset", "sześć", "pogoda", "strach", "huśtawka",
    "komputer", "sto", "powietrze", "adres", "pożar", "sługa", "siedemset", "deszcz", "pakuły", "sześćset",
    "wiązanka", "czterysta", "monotonny", "zeszyt", "marynarka", "rododendron", "deska", "wiązanka",
    "zeszyt", "pokój", "lód", "mieszkanie", "dwieście", "dobry", "miecz", "siedemset", "namiastka",
    "nogawka", "pościel", "łyżka", "kalosze", "rododendron", "koszula", "talerz", "kosmos", "więzadło",
    "balkon", "glebogryzarka", "sok", "helikopter", "kot", "drzewo", "cztery", "obsługa", "obsługa",
    "poduszka", "wiązanka", "pilot", "nogawka", "dwieście", "skarpa", "wiosło", "koszula", "samochód",
    "kurtka", "koszula", "salon", "karton", "książka", "cztery", "smutny", "deska", "nożyczki", "igła",
    "skarpa", "samolot", "nić", "ciotka", "restauracja", "ambona", "grabie", "drzewo"
];

btnLevels.forEach(function (btnLevel) {
    btnLevel.addEventListener('click', difficultyLevel);
});

// Initialize game
function init() {

    // Show number of seconds in UI
    // seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word input
    // wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    // setInterval(countdown, 1000);
    // setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}



// Start match
function startMatch() {

    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        setInterval(countdown, 1000);
        score++;

    }

    // If score is -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }



}

// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    //Make sure time is not run out
    if (time > 0) {
        // Decrement
        time--;
    } else if (time === 0) {
        // Game over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}

function difficultyLevel() {
    if (this.classList.contains("easy")) {
        currentLevel = levels.easy;
        console.log("easy");
    } else if (this.classList.contains("medium")) {
        currentLevel = levels.medium;
        console.log("medium");
    } else if (this.classList.contains("hard")) {
        currentLevel = levels.hard;
        console.log("hard");
    }

    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    timeDisplay.innerHTML = currentLevel;

    wordInput.addEventListener('input', startMatch);
    init();

}
// List of words
const words = ['javascript', 'programming', 'developer', 'function', 'variable'];

// Function to select a random word from the list
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Function to scramble the letters of a word
function scrambleWord(word) {
    let scrambled = word.split('');
    for (let i = scrambled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]]; // Swap letters
    }
    return scrambled.join('');
}

// Initialize game
let originalWord = getRandomWord();
let scrambledWord = scrambleWord(originalWord);

document.getElementById('scrambled-word').textContent = scrambledWord;

// Handle guess
document.getElementById('guess-button').addEventListener('click', () => {
    const guess = document.getElementById('guess-input').value.trim().toLowerCase();
    if (guess === originalWord) {
        document.getElementById('message').textContent = 'Correct! You guessed the word!';
    } else {
        document.getElementById('message').textContent = 'Wrong guess. Try again!';
    }
});

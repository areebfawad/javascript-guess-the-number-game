document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startGame);
});

function startGame() {
    const rounds = 10;
    const minNumber = 1;
    const maxNumber = 3;
    let roundsWon = 0;

    for (let i = 0; i < rounds; i++) {
        const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        const guess = parseInt(prompt(`Round ${i + 1}/${rounds}\nEnter a number between ${minNumber} and ${maxNumber}:`));

        if (guess === secretNumber) {
            alert(`Congratulations! You guessed the correct number (${secretNumber})!`);
            roundsWon++;
        } else {
            alert(`Sorry, the correct number was ${secretNumber}.`);
        }
    }

    if (roundsWon >= 3) {
        alert(`Congratulations! You won ${roundsWon} rounds and claimed victory!`);
    } else {
        alert(`You won only ${roundsWon} rounds. Better luck next time!`);
    }
}

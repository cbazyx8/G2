function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
    document.getElementById('outcome').textContent = result;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

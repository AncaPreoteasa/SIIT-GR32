const ROCK_PAPER_SCISSORS_OPTIONS = ['rock', 'paper', 'scissors'];

function play() {

    const computerChoice = generateGameOption();
    const userChoice = generateGameOption();

    const hasComputerWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[0] && userChoice === ROCK_PAPER_SCISSORS_OPTIONS[2] ||
        computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[1] && userChoice === ROCK_PAPER_SCISSORS_OPTIONS[0] ||
        computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[2] && userChoice === ROCK_PAPER_SCISSORS_OPTIONS[1];

    const hasUserWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[0] && userChoice === ROCK_PAPER_SCISSORS_OPTIONS[1] ||
        computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[1] && userChoice === ROCK_PAPER_SCISSORS_OPTIONS[2] ||
        computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[2] && userChoice === ROCK_PAPER_SCISSORS_OPTIONS[0];

    var gameResultMessage;

    if (hasComputerWon) {
        gameResultMessage = 'Computer wins!';
    } else if (hasUserWon) {
        gameResultMessage = 'User wins!';
    } else {
        gameResultMessage = "It's a draw!";
    }

    displayWinner(computerChoice, userChoice, gameResultMessage);
}

function generateGameOption() {
    const randomNumber = Math.floor(Math.random() * ROCK_PAPER_SCISSORS_OPTIONS.length);

    return ROCK_PAPER_SCISSORS_OPTIONS[randomNumber];
}

function displayWinner(computerChoice, userChoice, gameResultMessage) {
    const computerChoiceMessage = 'Computer choice: "' + firstLetterToUpperCase(computerChoice) + '"';
    const userChoiceMessage = 'User choice: "' + firstLetterToUpperCase(userChoice) + '"';

    console.log(computerChoiceMessage + '\n' + userChoiceMessage + '\n\n' + gameResultMessage);
}

function firstLetterToUpperCase(choice) {
    var uppercased = choice.charAt(0).toUpperCase() + choice.slice(1);
    return uppercased;
}

play();
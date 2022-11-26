function play() {
    const ROCK_PAPER_SCISSORS_OPTIONS = ['rock', 'paper', 'scissors'];

    var computerRandomOptionNb = Math.floor(Math.random() * ROCK_PAPER_SCISSORS_OPTIONS.length);
    var computerChoice = ROCK_PAPER_SCISSORS_OPTIONS[computerRandomOptionNb];

    var userRandomOptionNb = Math.floor(Math.random() * ROCK_PAPER_SCISSORS_OPTIONS.length);
    var userChoice = ROCK_PAPER_SCISSORS_OPTIONS[userRandomOptionNb];

    var gameResultMessage;
    if (computerRandomOptionNb === 0 && userRandomOptionNb === 2) {
        gameResultMessage = 'User loses!';
    } else if (computerRandomOptionNb === 1 && userRandomOptionNb === 0) {
        gameResultMessage = 'User loses!';
    } else if (computerRandomOptionNb === 2 && userRandomOptionNb === 1) {
        gameResultMessage = 'User loses!';
    } else if (computerRandomOptionNb === 0 && userRandomOptionNb === 1) {
        gameResultMessage = 'User wins!';
    } else if (computerRandomOptionNb === 1 && userRandomOptionNb === 2) {
        gameResultMessage = 'User wins!';
    } else if (computerRandomOptionNb === 2 && userRandomOptionNb === 0) {
        gameResultMessage = 'User wins!';
    } else {
        gameResultMessage = "It's a draw!";
    }

    var computerChoiceMessage = 'Computer choice: "' + firstLetterToUpperCase(computerChoice) + '"';
    var userChoiceMessage = 'User choice: "' + firstLetterToUpperCase(userChoice) + '"';
    console.log(computerChoiceMessage + '\n' + userChoiceMessage + '\n\n' + gameResultMessage);
}

function firstLetterToUpperCase(choice) {
    var uppercased = choice.charAt(0).toUpperCase() + choice.slice(1);
    return uppercased;
}

play();
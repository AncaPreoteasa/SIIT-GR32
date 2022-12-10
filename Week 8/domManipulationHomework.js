
const ROCK_PAPER_SCISSORS_OPTIONS = ['rock', 'paper', 'scissors'];
let computerCounterWins = 0;
let playerCounterWins = 0;

function showGame() {
    const introGameDiv = document.getElementById("intro-game");
    introGameDiv.classList.add("hidden");
    
    const gameDiv = document.getElementById("game");
    gameDiv.classList.remove("hidden");
}

function calculateAndDisplayWinnerforRock() {
    const computerChoice = generateGameOption();
    const hasComputerWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[1];
    const hasUserWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[2];
    const userChoice = "Rock";

    displayWinner(computerChoice, userChoice, hasComputerWon, hasUserWon);
}

function calculateAndDisplayWinnerforPaper() {
    const computerChoice = generateGameOption();
    const hasComputerWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[2];
    const hasUserWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[0];
    const userChoice = "Paper";
    displayWinner(computerChoice, userChoice,  hasComputerWon, hasUserWon);
}

function calculateAndDisplayWinnerforScissors() {
    const computerChoice = generateGameOption();
    const hasComputerWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[0];
    const hasUserWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[1];
    const userChoice = "Scissors";
    displayWinner(computerChoice, userChoice, hasComputerWon, hasUserWon);
}

function generateGameOption() {
    const randomNumber = Math.floor(Math.random() * ROCK_PAPER_SCISSORS_OPTIONS.length);
    return ROCK_PAPER_SCISSORS_OPTIONS[randomNumber];
}

function displayWinner(computerChoice, userChoice, hasComputerWon, hasUserWon) {
    let gameResultMessage;
        
    if (hasComputerWon) {
        computerUpdateScore();
        gameResultMessage = 'Computer wins!';
    } else if (hasUserWon) {
        playerUpdateScore();
        gameResultMessage = 'User wins!';
    } else {
        gameResultMessage = "It's a draw!";
        const drawSound = document.getElementById("draw-sound");
        drawSound.play();
    }

    const winnerAnnouncementElem = document.getElementById("winner-announcement");
    if (winnerAnnouncementElem.firstChild) {
        winnerAnnouncementElem.removeChild(winnerAnnouncementElem.firstChild);
    }
    const textWinnerAnnouncement = document.createTextNode(gameResultMessage);
    winnerAnnouncementElem.appendChild(textWinnerAnnouncement);

}

function computerUpdateScore() {
    computerCounterWins++;
    const computerWinsParagraph = document.getElementById("counter-computer-winner");
    const computeWinsTextNode = computerWinsParagraph.firstChild;
    computerWinsParagraph.removeChild(computeWinsTextNode);

    const newTextNode = document.createTextNode(computerCounterWins);
    computerWinsParagraph.appendChild(newTextNode);

    const userLosesSound = document.getElementById("lose-sound");
    userLosesSound.play();
}

function playerUpdateScore() {
    playerCounterWins++;
    const playerWinsCounterParagraph = document.getElementById("counter-player-winner");
    const playerWinsParagraphTextNode = playerWinsCounterParagraph.firstChild;
    playerWinsCounterParagraph.removeChild(playerWinsParagraphTextNode);

    const newTextNode = document.createTextNode(playerCounterWins);
    playerWinsCounterParagraph.appendChild(newTextNode);

    const userWinsSound = document.getElementById("win-sound");
    userWinsSound.play();
}


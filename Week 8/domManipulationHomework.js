(function() {
    const ROCK_PAPER_SCISSORS_OPTIONS = ['Rock', 'Paper', 'Scissors'];
    let computerCounterWins = 0;
    let playerCounterWins = 0;

    document.getElementById("play-btn").addEventListener("click", showGame);
    document.getElementsByClassName("rock-image")[0].addEventListener("click", calculateAndDisplayWinnerforRock);
    document.getElementsByClassName("paper-image")[0].addEventListener("click", calculateAndDisplayWinnerforPaper);
    document.getElementsByClassName("scissors-image")[0].addEventListener("click", calculateAndDisplayWinnerforScissors);

    function showGame() {
        document.getElementById("intro-sound").play();

        const introGameDiv = document.getElementById("intro-game");
        introGameDiv.classList.add("hidden");
        
        const gameDiv = document.getElementById("game");
        gameDiv.classList.remove("hidden");
    }

    function calculateAndDisplayWinnerforRock() {
        const computerChoice = generateGameOption();
        const hasComputerWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[1];
        const hasUserWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[2];
        const userChoice = ROCK_PAPER_SCISSORS_OPTIONS[0];

        displayWinner(computerChoice, userChoice, hasComputerWon, hasUserWon);
    }

    function calculateAndDisplayWinnerforPaper() {
        const computerChoice = generateGameOption();
        const hasComputerWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[2];
        const hasUserWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[0];
        const userChoice = ROCK_PAPER_SCISSORS_OPTIONS[1];
        displayWinner(computerChoice, userChoice,  hasComputerWon, hasUserWon);
    }

    function calculateAndDisplayWinnerforScissors() {
        const computerChoice = generateGameOption();
        const hasComputerWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[0];
        const hasUserWon = computerChoice === ROCK_PAPER_SCISSORS_OPTIONS[1];
        const userChoice = ROCK_PAPER_SCISSORS_OPTIONS[2];
        displayWinner(computerChoice, userChoice, hasComputerWon, hasUserWon);
    }

    function generateGameOption() {
        const randomNumber = Math.floor(Math.random() * ROCK_PAPER_SCISSORS_OPTIONS.length);
        return ROCK_PAPER_SCISSORS_OPTIONS[randomNumber];
    }

    function displayWinner(computerChoice, userChoice, hasComputerWon, hasUserWon) {
        document.getElementById("intro-sound").pause();

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
            winnerAnnouncementElem.firstChild.remove();
        }
        const textWinnerAnnouncement = document.createTextNode(gameResultMessage);
        winnerAnnouncementElem.appendChild(textWinnerAnnouncement);



        let explanationMessage;
        if (hasComputerWon) {
            explanationMessage = computerChoice + " beats " + userChoice + "!";
        } else if (hasUserWon) {
            explanationMessage = userChoice + " beats " + computerChoice + "!";
        } else {
            explanationMessage = userChoice + " matches " + computerChoice + "!";
        }
        const winnerExplanationElement = document.getElementById("winner-explanation");
        if (winnerExplanationElement.firstChild) {
            winnerExplanationElement.firstChild.remove();
        }
        winnerExplanationElement.appendChild(document.createTextNode(explanationMessage));

    }

    function computerUpdateScore() {
        computerCounterWins++;
        const computerWinsParagraph = document.getElementById("counter-computer-winner");
        const computerWinsTextNode = computerWinsParagraph.firstChild;
        computerWinsTextNode.remove();

        const newTextNode = document.createTextNode(computerCounterWins);
        computerWinsParagraph.appendChild(newTextNode);

        const userLosesSound = document.getElementById("lose-sound");
        userLosesSound.play();
    }

    function playerUpdateScore() {
        playerCounterWins++;
        const playerWinsCounterParagraph = document.getElementById("counter-player-winner");
        playerWinsCounterParagraph.firstChild.remove();

        const newTextNode = document.createTextNode(playerCounterWins);
        playerWinsCounterParagraph.appendChild(newTextNode);

        const userWinsSound = document.getElementById("win-sound");
        userWinsSound.play();
    }
})();
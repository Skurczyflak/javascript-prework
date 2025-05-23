//Functions
{
    const playGame = function (playerInput){

        clearMessages();

        const getMoveName = function (argMoveId){
                if(argMoveId == 1){
                    return 'kamień';
                } else if (argMoveId == 2){
                    return 'papier';
                } else if (argMoveId == 3){
                    return 'nożyce';
                } else {
                    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                    return 'nieznany ruch';
                }
            }

        const displayResult = function (argComputerMove, argPlayerMove){
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                    printMessage('Ty wygrywasz!');
                return 1;
                } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                    printMessage('Ty wygrywasz!');
                return 1;
                } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                    printMessage('Ty wygrywasz!');
                return 1;
                } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                    printMessage('Komputer wygrywa!');
                return 2;
                } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                    printMessage('Komputer wygrywa!');
                return 2;
                } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                    printMessage('Komputer wygrywa!');
                return 2;
                } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
                    printMessage('Remis');
                return 0;
                } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
                    printMessage('Remis');
                return 0;
                } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
                    printMessage('Remis');
                return 0;
                } else if (argPlayerMove == 'nieznany ruch'){
                    printMessage('Niepoprawny ruch wybierz pomiędzy 1: kamień, 2: papier, 3: nożyce.');
                return 0;
                }
        }

        //Computer Move

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);

        //Player Move
        const playerMove = getMoveName(playerInput);

        //Result
        const winner = displayResult(computerMove, playerMove);

        return winner;

    }

    const scoreResult = function (argResult) {
        if (argResult == 1){
            playerScore += 1;
            playerPath.innerText = playerScore;
        } else if (argResult == 2){
            computerScore += 1;
            computerPath.innerText = computerScore;
        }
    }

    //Global Variables

    let playerScore = 0;
    let computerScore = 0;
    const playerPath = document.getElementById("player-score");
    const computerPath = document.getElementById("computer-score");

    //Listeners

    document.getElementById('play-rock').addEventListener('click', function(){
    scoreResult(playGame(1));
    });

    document.getElementById('play-paper').addEventListener('click', function(){
    scoreResult(playGame(2));
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
    scoreResult(playGame(3));
    });
}
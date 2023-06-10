function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);

if (
  (computerMove == 'kamień' && playerMove == 'papier') ||
  (computerMove == 'nożyce' && playerMove == 'kamień') ||
  (computerMove == 'papier' && playerMove == 'nożyce')
) {
  printMessage('Ty wygrywasz!');
} else if (
  (computerMove == 'kamień' && playerMove == 'nożyce') ||
  (computerMove == 'papier' && playerMove == 'kamień') ||
  (computerMove == 'nożyce' && playerMove == 'papier')
) {
  printMessage('Tym razem przegrywasz :(');
} else if (computerMove === playerMove) {
  printMessage('Remis');
}

function displayResult(argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
 
displayResult(computerMove, playerMove);
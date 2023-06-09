function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }if(argMoveId == 2){
    return 'papier';
  }if(argMoveId == 3){
    return 'nożyce';
  } else {
  
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
  }
}

function getMoveName(argplayerMove){
  if(argplayerMove == 1){
    return 'kamień';
  }else if(argplayerMove == 2){
    return 'papier';
  }else if(argplayerMove == 3){
    return 'nożyce';
  } else {
  
  printMessage('Nie znam ruchu o id ' + argplayerMove + '.');
  return 'nieznany ruch';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

if (randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
  computerMove = 'nożyce';
} else 

function getMoveName(argcomputerMove){
  if(argcomputerMove == 1){
    return 'kamień';
  } if(argcomputerMove == 2){
    return 'papier';
  } if(argcomputerMove == 3){
    return 'nożyce';
  }
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

if (playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else if (playerInput == '3'){
  playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){ 
  printMessage('Tym razem przegrywasz :(');
} else if (computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Tym razem przegrywasz :(');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Tym razem przegrywasz :(');
} else if (computerMove == 'kamień' && playerMove == 'papier')
  printMessage('Ty wygrywasz!');

 if (computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis');
} else if (computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis');
}

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
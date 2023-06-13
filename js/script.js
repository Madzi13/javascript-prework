{
  const playGame = function (playerMove) {
  clearMessages();
  const getMoveName = function(argMoveId) { 
    if (argMoveId == 1) { 
      return 'kamień';
    } else if (argMoveId == 2) {
       return 'papier';
    } else if (argMoveId == 3) {
       return 'nożyce';
    } else { 
      printMessage('Nie znam ruchu o id ' + argMoveId + '.'); return 'nieznany ruch'; 
    } 
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);

  let playerMoveName = getMoveName(playerMove);

  if (
    (computerMove === 'kamień' && playerMoveName === 'papier') ||
    (computerMove === 'nożyce' && playerMoveName === 'kamień') ||
    (computerMove === 'papier' && playerMoveName === 'nożyce')
  ) {
    printMessage('Ty wygrywasz!');
  } else if (
    (computerMove === 'kamień' && playerMoveName === 'nożyce') ||
    (computerMove === 'papier' && playerMoveName === 'kamień') ||
    (computerMove === 'nożyce' && playerMoveName === 'papier')
  ) {
    printMessage('Tym razem przegrywasz :(');
  } else if (computerMove === playerMoveName) {
    printMessage('Remis');
  }

  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMoveName);
}
const handleClickBtn1 = function () {
  playGame(1);
};
document.getElementById('btn1').addEventListener('click', handleClickBtn1);

const handleClickBtn2 = function () {
  playGame(2);
};
document.getElementById('btn2').addEventListener('click', handleClickBtn2);

const handleClickBtn3 = function () {
  playGame(3);
};
document.getElementById('btn3').addEventListener('click', handleClickBtn3);
};
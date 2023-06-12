function playGame(playerMove) {
  clearMessages();
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

document.getElementById('btn1').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('btn2').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('btn3').addEventListener('click', function () {
  playGame(3);
});
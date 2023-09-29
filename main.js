function generateRandomNumber() {
  let num = Math.floor(Math.random() * 6) + 1;
  return num;
}

const playerOne = generateRandomNumber();
const playerTwo = generateRandomNumber();
console.log(`Player One = ${playerOne}, Player Two = ${playerTwo}`);

playGame(playerOne, playerTwo);

function playGame(playerOne, playerTwo) {
  if (playerOne > playerTwo) {
    document.querySelector("h1").innerText = "🚩 Player 1 wins! ";
  } else if (playerOne < playerTwo) {
    document.querySelector("h1").innerText = `Player 2 wins 🚩`;
  } else {
    document.querySelector("h1").innerText = " It's a tie! ";
  }

  document.querySelector(
    ".js-img-1").innerHTML = `<img class="dice-img " src="images/dice-0${playerOne}.png">`;
  
  
  document.querySelector(
    ".js-img-2"
  ).innerHTML = `<img class="dice-img " src="images/dice-0${playerTwo}.png">`;
  
}

//Another way to change the image via the setAttribute property; 

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

//also can use this one
// let playerName = "Ken";
// let playerChips = 145;
// let playerEl = document.getElementById("player-el");
// playerEl.textContent = playerName + ": $" + playerChips;

let player = {
  name: "Ken",
  chips: 145,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(i) {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Card: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    console.log(cards);
    renderGame();
  }
}

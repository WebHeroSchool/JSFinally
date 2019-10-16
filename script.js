console.log('hello');
const startWrapper = document.getElementById('container')
const playWrapper = document.getElementById('divGame');
const card = document.createElement('div');
const menuLevel = document.getElementById('containerFromLevel');
const buttonLevel = document.querySelectorAll('.main_menu__item');
const buttonStart = document.getElementById('button__startTheGame');
const buttonSimple = document.getElementById('item__simple');
const buttonMiddle = document.getElementById('item__medium');
const buttonHard = document.getElementById('item__hard');

const config = {
  classForThreeCards: 'container__three-card',
  classForSixCards: 'container__six-card',
  classForTenCards: 'container__ten-card',
  classNameForAllCards: 'card__backside',
  classNameForWinnerCard: 'winner__card',
  classNameForLoserCard: 'loser__card',
  fieldForCard: 'card__container',
}

for (let i = 0; i < buttonLevel.length; i++) {
  buttonLevel[i].addEventListener("click", function() {
    let flow = document.getElementsByClassName("checked");
    flow[0].className = flow[0].className.replace("checked", "");
    this.classList.add("checked");

  });
}

function getNumberOfCard() {
  if (buttonSimple.classList.contains("checked")) {
    playWrapper.className = config.classForThreeCards;
    return 3;
  }
  else if (buttonMiddle.classList.contains("checked")) {
    playWrapper.className = config.classForSixCards;
    return 6;
  }
  else if (buttonHard.classList.contains("checked")) {
    playWrapper.className = config.classForTenCards;
    return 10;
  };
}
getNumberOfCard();
const numberOfCard = getNumberOfCard();

function processOnGame() {
getNumberOfCard();

function creatureCards(number) {
let randomCard = Math.floor(Math.random() * number);
for (let i = 0; i < number; i++ ) {
card.className = config.classNameForAllCards;
document.body.append(playWrapper);
playWrapper.append(card);
  };
};

creatureCards(numberOfCard);
};

function startGame() {
  processOnGame();
  startWrapper.style.display = 'none';
}
buttonStart.addEventListener('click', startGame);




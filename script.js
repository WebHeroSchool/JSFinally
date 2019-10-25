console.log('hello');
const startWrapper = document.getElementById('container')
const playWrapper = document.getElementById('divGame');

const menuLevel = document.getElementById('containerFromLevel');
const buttonLevel = document.querySelectorAll('.main_menu__item');
const buttonStart = document.getElementById('button__startTheGame');
const buttonSimple = document.getElementById('item__simple');
const buttonMiddle = document.getElementById('item__medium');
const buttonHard = document.getElementById('item__hard');
let clickOnCard = false;
let numberOfCard;

const difficultyLabels = [
  document.getElementById('item__simple'),
  document.getElementById('item__medium'),
  document.getElementById('item__hard'),
];

const config = {
  classForThreeCards: 'container__three-card',
  classForSixCards: 'container__six-card',
  classForTenCards: 'container__ten-card',
  classNameForAllCards: 'card__container',
  classNameForAllCardsHover: 'card__container-hover',
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
    return numberOfCard = 3;
  }
  else if (buttonMiddle.classList.contains("checked")) {
    playWrapper.className = config.classForSixCards;
    return numberOfCard = 6;
  }
  else {
    playWrapper.className = config.classForTenCards;
    return numberOfCard = 10;
  };
};


function processOnGame() {
getNumberOfCard();
function creatureCards(number) {
let randomCard = Math.floor(Math.random() * number);
for (let i = 0; i < number; i++ ) {
let winnerCard = document.createElement('div');
let loserCard = document.createElement('div');
let card = document.createElement('div');
card.className = config.classNameForAllCards;

let cardHover = document.querySelectorAll('.card__container');
for (let i = 0; i < cardHover.length; i++) {
  cardHover[i].addEventListener("mouseover", function() {
    this.classList.add("card__container-hover"); 
      });
      cardHover[i].addEventListener("mouseout", function() {
       this.classList.remove("card__container-hover"); 
      });
}

  if (i === randomCard) {
    document.body.append(playWrapper);
    playWrapper.append(card);
    winnerCard.className = 'winner__card';
    card.append(winnerCard);
  }
  else {
    document.body.append(playWrapper);
    playWrapper.append(card);
    loserCard.className = 'loser__card';
    card.append(loserCard);
  }
}
};
creatureCards(numberOfCard);

document.querySelectorAll('.card__container').forEach(card => {
  card.addEventListener('click', () => {
    if (clickOnCard) {
      playWrapper.style.display = 'none';
      startWrapper.style.display = '';
      clickOnCard = false;
    } else {
      card.classList.add('card__click');
      card.classList.remove('hover');
      clickOnCard = true;
    };
  });
});

};

function startGame() {
  processOnGame();
  startWrapper.style.display = 'none';
}
buttonStart.addEventListener('click', startGame);






console.log('hello');
const startWrapper = document.getElementById('container')
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
    return 3;
  }
  else if (buttonMiddle.classList.contains("checked")) {
    return 6;
  }
  else if (buttonHard.classList.contains("checked")) {
    return 10;
  }
}
getNumberOfCard();

const numberOfCard = getNumberOfCard();
const createCardsOnNumber = () => {
  getNumberOfCard();
  createPlayWrapper();
  const playWrapper = document.getElementById('main');

  const addClassesOnCard = {
    3: config.classForThreeCards,
    6: config.classForSixCards,
    10: config.classForTenCards,
  };
  playWrapper.className = addClassesOnCard[numberOfCard];
};
const createCardsAndWrapper = (number) => {
  for (let i = 0; i < number; i++) {
    const card = document.createElement('div');
    card.className = config.classNameForAllCards;
    document.body.append(card);
  };
  const card = document.createElement('div');
  const playWrapper = document.createElement('main');
  playWrapper.setAttribute('id', 'main');
  document.body.append(playWrapper);
  playWrapper.append(card);
};

// const createPlayWrapper = () => {
//   const card = document.createElement('div');
//   const playWrapper = document.createElement('main');
//   playWrapper.setAttribute('id', 'main');
//   document.body.append(playWrapper);
//   document.body>playWrapper.append(card);
// };

function startGame() {
  createCardsAndWrapper(numberOfCard);
  // createPlayWrapper();
  startWrapper.style.display = 'none';
}


buttonStart.addEventListener('click', startGame);
// const creatureCards = (background) => {
//   let clickRandomCard = Math.floor(Math.random() * numberOfCard);
//   for (let i = 0; i < numberOfCard; i++ ) {
//   const playWrapper = document. createElement('div');
//   const cardContainer = document.createElement('div');
//   const backsideOfCard = document.createElement('div');
//   const winnerCard = document.createElement('div');
//   const loserCard = document.createElement('div');

//   if (i ===  clickRandomCard) {
//     cardContainer.className = "card__container";
//     cardContainer.className.add = "card__container_hover";
//     background.append(cardContainer);
//     backsideOfCard.className = ("card__backside");
//     cardContainer.append(backsideOfCard);
//     winnerCard.className = 'winner__card';
//     cardContainer.append(winnerCard);
//   }
//   else {
//     cardContainer.className = "card__container";
//     cardContainer.className.add = "card__container_hover";
//     background.append(cardContainer);
//     backsideOfCard.className = ("card__backside");
//     cardContainer.append(backsideOfCard);
//     loserCard.className = 'loser_card';
//     cardContainer.append(loserCard);
//   }
//   }
//   }
   


  // if (buttonHard.classList.contains("checked"))



//при нажатии кнопки 'старт' происходят дальнейшие действия


//Сделать условие, при котором будет рандомно вычисляться карта с багом.

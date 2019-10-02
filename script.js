console.log('hello');
const buttonSimple = document.getElementById('item__simple');
const buttonMiddle = document.getElementById('item__medium');
const buttonHard = document.getElementById('item__hard');
const menuLevel = document.getElementById('containerFromLevel');
const buttonLevel = document.querySelectorAll('.main_menu__item');

//Стартовая страница. Добавляем элементу стили при наведении.


  for (let i = 0; i < buttonLevel.length; i++) {
    buttonLevel[i].addEventListener("click", function() {
      let flow = document.getElementsByClassName("checked");
      flow[0].className = flow[0].className.replace("checked", "");
      this.className += " checked";
    });
  }

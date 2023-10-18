/*Функция для очистки полей формы*/

let buttons = document.querySelectorAll(".clear-button");
for (let i in buttons) {
  if (buttons[i].addEventListener) {
    buttons[i].addEventListener('click', function(e){
      this.previousElementSibling.value = "";
    });
  }
}

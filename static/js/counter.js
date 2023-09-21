const textarea = document.querySelector(".know");
const counter = document.querySelector(".current");
const maxlength = 200;
const textareaForeign = document.querySelector(".foreign-know");
const counterForeign = document.querySelector(".current-foreign");
const maxlengthForeign = 200;

textarea.addEventListener("input", onInput);

function onInput(event) {
  event.target.value = event.target.value.substr(0, maxlength); // обрезаем текст до 360 символов
  const length = event.target.value.length;
  counter.textContent = length;
}

textareaForeign.addEventListener("input", onInputForeign);

function onInputForeign(event) {
  event.target.value = event.target.value.substr(0, maxlengthForeign); // обрезаем текст до 360 символов
  const lengthForeign = event.target.value.length;
  counterForeign.textContent = lengthForeign;
}
const textarea = document.querySelector('textarea');
const counter = document.querySelector('.current');
const maxlength = 200;


textarea.addEventListener('input', onInput)

function onInput(event) {
  event.target.value = event.target.value.substr(0, maxlength); // обрезаем текст до 360 символов
  const length = event.target.value.length;
  counter.textContent = length;
}
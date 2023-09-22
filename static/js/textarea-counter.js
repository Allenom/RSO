// Счетчик символов в воде текстариа
const textarea = document.querySelector('textarea');
const counter = document.querySelector('[name=counter]');
const maxlength = 400;

textarea.addEventListener('input', onInput)

function onInput(event) {
  event.target.value = event.target.value.split(' ').join('').substr(0, maxlength); // обрезаем текст до 360 символов
  const length = event.target.value.length;
  counter.textContent = length;
}
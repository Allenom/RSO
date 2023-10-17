const textareaNameSquad = document.querySelector(".name-squad");
const counterNameSquad = document.querySelector(".current--name-squad");
const maxlengthNameSquad = 30;
const textareaAboutSquad = document.querySelector(".about-squad");
const counterAboutSquad = document.querySelector(".current--about-squad");
const maxlengthAboutSquad = 300;

textareaNameSquad.addEventListener("input", onInputNameSquad);

function onInputNameSquad(event) {
  event.target.value = event.target.value.split(' ').join('').substr(0, maxlengthNameSquad); // обрезаем текст до 30 символов
  const lengthNameSquad = event.target.value.length;
  counterNameSquad.textContent = lengthNameSquad;
}

textareaAboutSquad.addEventListener("input", onInputAboutSquad);

function onInputAboutSquad(event) {
  event.target.value = event.target.value.split(' ').join('').substr(0, maxlengthAboutSquad); // обрезаем текст до 30 символов
  const lengthAboutSquad = event.target.value.length;
  counterAboutSquad.textContent = lengthAboutSquad;
}
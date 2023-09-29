
function myFunctionOpen() {
   let checkBox = document.getElementById("myCheckOpen");
   let text = document.getElementById("textOpen");

   if (checkBox.checked == true) {
      text.style.display = "block";
   }
   else {
      text.style.display = "none";
   }
}

// при нажатии на checkbox завершенные выводится текст нет завершнных
function myFunction() {
   let checkBox = document.getElementById("myCheck");
   let text = document.getElementById("text");

   if (checkBox.checked == true) {
      text.style.display = "block";
   }
   else {
      text.style.display = "none";
   }
}


// ++++++++++++++++++++++++++++++++++++ слайдер 


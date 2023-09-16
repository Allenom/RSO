let passInput = document.getElementById("password");
let show = document.getElementById("show");
let hide = document.getElementById("hide");

let repInput = document.getElementById("repeat_password");
let repshow = document.getElementById("repshow");
let rephide = document.getElementById("rephide");

let oulInput = document.getElementById("oul");
let oulshow = document.getElementById("oulshow");
let oulhide = document.getElementById("oulhide");
 
// при нажатии на кнопку показываем пароль


function togglePass() {
   if (passInput.type === "password") {
      passInput.type = 'text';
      hide.style.display = 'none';
      show.style.display = 'inline';
   } else {
      passInput.type = 'password';
      hide.style.display = 'inline';
      show.style.display = 'none';
   }

}


function repeaPass() {
   if (repInput.type === "password") {
      repInput.type = 'text';
      rephide.style.display = 'none';
      repshow.style.display = 'inline';
   } else {
      repInput.type = 'password';
      rephide.style.display = 'inline';
      repshow.style.display = 'none';
   }

}

function oulPass() {
   if (oulInput.type === "password") {
      oulInput.type = 'text';
      oulhide.style.display = 'none';
      oulshow.style.display = 'inline';
   } else {
      oulInput.type = 'password';
      oulhide.style.display = 'inline';
      oulshow.style.display = 'none';
   }

}
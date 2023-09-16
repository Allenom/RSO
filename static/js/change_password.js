let passInput = document.getElementById("new_password");
let show = document.getElementById("show");
let hide = document.getElementById("hide");

let repeatPassInput = document.getElementById("repeat_new_password");
let show_repeat = document.getElementById("show_repeat");
let hide_repeat = document.getElementById("hide_repeat");

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
function repeatTogglePass() {
    if (repeatPassInput.type === "password") {
        repeatPassInput.type = 'text';
        hide_repeat.style.display = 'none';
        show_repeat.style.display = 'inline';
    } else {
        repeatPassInput.type = 'password';
        hide_repeat.style.display = 'inline';
        show_repeat.style.display = 'none';
    }
}
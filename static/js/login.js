let passInput = document.getElementById("password");
let show = document.getElementById("show");
let hide = document.getElementById("hide");

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
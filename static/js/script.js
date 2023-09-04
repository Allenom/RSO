const togglePassword = document.getElementById("togglePassword");
const togglePasswordConfirm = document.getElementById("togglePasswordConfirm");
const repeatPassword = document.getElementById("repeat-password");
  togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("fa-eye");
});

togglePasswordConfirm.addEventListener("click", function () {
  // toggle the type attribute
  const type = repeatPassword.getAttribute("type") === "password" ? "text" : "password";
  repeatPassword.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("fa-eye");
});

const form = document.getElementById("form");
const surname = document.getElementById("surname");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("repeat-password");
const login = document.getElementById("username");
const check = document.getElementById("check");
const min = 3,
  max = 25;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return re.test(phone);
}

// const isPasswordSecure = (password) => {
//   const re = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;
//   return re.test(password);
// };

const validateInputs = () => {
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const surnameValue = surname.value.trim();
  const loginValue = login.value.trim();
  const phoneValue = phone.value.trim()
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (emailValue === "") {
    setError(email, "email обязательное поле");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "email должен содержать @");
  } else {
    setSuccess(email);
  }

  if (usernameValue === "") {
    setError(username, "имя обязательное поле");
  } else if (!isBetween(usernameValue.length, min, max)) {
    setError(username, `имя должно быть пределах  ${min} и ${max} символов.`);
  } else {
    setSuccess(username);
  }

  if (surnameValue === "") {
    setError(surname, "фамилия обязательное поле");
  } else if (!isBetween(surnameValue.length, min, max)) {
    setError(surname, `имя должно быть пределах  ${min} и ${max} символов.`);
  } else {
    setSuccess(surname);
  }

  if (loginValue === "") {
    setError(login, "логин обязательное поле");
  } else if (!isBetween(loginValue.length, min, max)) {
    setError(login, `логин должен быть пределах  ${min} и ${max} символов.`);
  } else {
    setSuccess(login);
  }

  if(phoneValue === ""){
    setError(phone, "телефон обязательное поле");
  } else if (!isValidPhone(phoneValue)) {
    setError(phone, "Не верный стандарт телефона");
  } else {
    setSuccess(phone);
  }

  if (passwordValue === "") {
    setError(password, "Пароль обязательное поле");
  } else if (passwordValue.length < 8) {
    setError(
      password,
      "Пароль не должен быть короче 8 символов"
    );
  } else if(passwordValue.search(/[a-z]/i) < 0){
    setError(
      password,
      "Пароль должен содежать хотя бы одну букву"
    );
  }
  else if(passwordValue.search(/[0-9]/) < 0){
    setError(
      password,
      "Пароль должен содежать хотя бы одну цифру"
    );
  }
  else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Пожалуйста повторите пароль");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Пароли не совпадают");
  } else {
    setSuccess(confirmPassword);
  }

  if(!form.check.checked) {
    setError(check, "тык сюда плиз");
  } else {
    setSuccess(check);
  }
};

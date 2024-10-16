const formNode = document.querySelector("#myForm");

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const fullname = document.querySelector("#fullname");
const errorName = document.querySelector("#errorName");
const errorPassword = document.querySelector("#errorPassword");
const emailError = document.querySelector("#emailError");
formNode.addEventListener("submit", (event) => {
  event.preventDefault();
  let reg = /\S+@\S+/;
  if (username.value == "") {
    errorName.textContent = "Name is required";
  } else if (username.value.length < 5 || username.value.length > 10) {
    errorName.textContent = "Phải trên 5 ký tự";
  }
  if (password.value == "") {
    errorPassword.textContent = "Password is required";
  } else if (password.value.length < 5 || password.value.length > 10) {
    errorPassword.textContent = "Phải trên 5 ký tự";
  }
  if (email.value == "") {
    emailError.textContent = "Email is required";
  } else if (!reg.test(email)) {
    emailError.textContent = "Email không hợp lệ";
  }
});

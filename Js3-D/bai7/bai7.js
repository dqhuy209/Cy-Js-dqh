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
  let emailregex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/
  );
  if (username.value == "") {
    errorName.textContent = "Name is required";
  } else if (username.value.length < 5 || username.value.length > 10) {
    errorName.textContent = "Phải trên 5 ký tự";
  } else {
    errorName.textContent = "";
  }
  if (password.value == "") {
    errorPassword.textContent = "Password is required";
  } else if (password.value.length < 5 || password.value.length > 10) {
    errorPassword.textContent = "Phải trên 5 ký tự";
  } else {
    errorPassword.textContent = "";
  }
  if (email.value == "") {
    emailError.textContent = "Email is required";
  } else if (!emailregex.test(email.value)) {
    emailError.textContent = "Email không hợp lệ";
  } else {
    emailError.textContent = "";
  }
});

"use strict";
const form = document.querySelector(".login-form");
let userList = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("You did not fill all input fields");
  } else {
    userList.email = email.value;
    userList.password = password.value;
    console.log(userList);
    form.reset();
  }
});

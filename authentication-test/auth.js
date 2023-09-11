import { login } from "./login.js";

let inputUserName = document.querySelector("#userName").value;
let inputPassword = document.querySelector("#password").password;

document.querySelector("#submit").addEventListener("click", () => {
  let userInput = { inputUserName, inputPassword };
  login(userInput);
});


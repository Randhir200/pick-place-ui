const users = [
  { userName: "sandeepDev", password: "1234" },
  { userName: "Randhir", password: "1234" },
];
export function login(userInput = null) {
  console.log(userInput);
  let data;
  if (userInput) {
    data = users.find((user) => {
      return (
        user.userName === userInput.inputUserName &&
        user.password === userInput.inputPassword
      );
    });
  }

  if (data) {
    window.location.href = "index.html";
  }
  {
    window.location.href = "login.html";
  }
}

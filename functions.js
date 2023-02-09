var userStorage = {
  username: "Victor",
  password: 12345,
};

var user = {
  username: "",
  password: "",
};

let loginButton = document.getElementById("botaoLogin");
let username = document.getElementById("username");
let password = document.getElementById("password");

const handleChangeUsername = (e) => {
  user.username = e.target.value;
  console.log(user);
};
const handleChangePassword = (e) => {
  user.password = e.target.value;
  console.log(user);
};

const clicou = () => {
  if (
    userStorage.username == user.username &&
    userStorage.password == user.password
  ) {
    alert("Logou.");
  } else {
    alert("Credenciais incorretas.");
  }
};

loginButton.addEventListener("click", clicou);
username.addEventListener("change", handleChangeUsername);
password.addEventListener("change", handleChangePassword);

const username = document.querySelector("#username");
const password = document.querySelector("#password");

if (username) {
    username.setAttribute("autocomplete", "username");
}
if (password) {
    password.setAttribute("autocomplete", "current-password");
}

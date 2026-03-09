// Mouse Events //

const button = document.getElementById("hoverButton");
const message = document.getElementById("message");

button.addEventListener("mouseover", function () {
    message.textContent = "Ouch get off me!";
    this.style.backgroundColor = "hotpink";
});

button.addEventListener("mouseout", function () {
    message.textContent = "Thank you";
    this.style.backgroundColor = "lightblue";
});

// Keyboard Events //

const searchBar = document.getElementById("search-bar");
const keysPressed = document.getElementById("keysPressed");

searchBar.addEventListener("keydown", function (event) {
    keysPressed.textContent = event.key;
});

// Form Events //

const form = document.getElementById("loginForm")
const email = document.getElementById("email");
const password = document.getElementById("password")

form.addEventListener("submit", function(submitForm) {
    submitForm.preventDefault();
    alert("Login was sucessful!");
})
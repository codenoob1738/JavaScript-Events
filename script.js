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

document.addEventListener('keydown', function (event) {
    keysPressed.textContent = event.key;
});
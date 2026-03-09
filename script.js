const button = document.getElementById("hoverButton");
const message = document.getElementById("message");

button.addEventListener("mouseover", function() {
    message.textContent = "You are hovering over the button!";
    this.style.backgroundColor = "hotpink";
});

button.addEventListener("mouseout", function() {
    message.textContent = "You left the button.";
    this.style.backgroundColor = "lightblue";
});
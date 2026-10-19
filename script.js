// Smart PDF Hub - JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Smart PDF Hub!");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("Button clicked:", button.textContent);
        });
    });
});

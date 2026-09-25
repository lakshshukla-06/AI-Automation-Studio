/*
    JavaScript adds behavior and interaction to a webpage.

    Today we will make the "Get Started" button
    show a message when the user clicks it.
*/


// Find the first <button> element in our HTML page.
const button = document.querySelector("button");


// Add a "click" event to the button.
button.addEventListener("click", function () {

    // Show a message when the button is clicked.
    alert("Welcome! Let's build something amazing.");

});
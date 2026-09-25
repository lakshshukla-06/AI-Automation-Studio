/*
    JavaScript controls the behavior of our website.

    HTML = Structure
    CSS  = Design
    JS   = Behavior
*/


// Find the "Get Started" button.
const buttons = document.querySelectorAll(".cta-button");


// Add a click event to every CTA button.
buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Show a message when the user clicks the button.
        console.log("CTA button clicked!");

    });

});
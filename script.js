$(document).ready(function () {
    // Set the initial background color and the very soft pale blue color
    var originalColor = "#e0f7ff";  // Original background color
    var newColor = "#fae1dd";  // Very soft pale blue color
    var currentColor = originalColor;  // Start with the original color
    var cardOut = false;  // Flag to track if the card is out or not

    // Set initial text for the message
    $(".text").text("  From Mannat");

    // Click anywhere on the body to toggle the card animation and background color
    $("body").click(function () {
        // If the card is not out yet, animate it coming out
        if (!cardOut) {
            $(".card").stop().animate(
                { top: "-90px" },  // Move the card up (out of the envelope)
                700,  // Time for the card to animate
                function () {
                    // Change the background color after the card moves out
                    $("body").animate({ backgroundColor: newColor }, 500);
                    currentColor = newColor;  // Update the current background color
                    $(".text").html("Hi to You!<br>Everything fine na?");// Set the new message text
                    cardOut = true;  // Set the cardOut flag to true
                }
            );
        } else {
            // If the card is already out, animate it going back and change the color back
            $(".card").stop().animate(
                { top: "0" },  // Move the card back down
                700,  // Time for the card to go back
                function () {
                    // Change the background color back to the original color
                    $("body").animate({ backgroundColor: originalColor }, 500);
                    currentColor = originalColor;  // Update the current background color
                    $(".text").text("  From Mannat:");  // Set the original message text
                    cardOut = false;  // Reset the cardOut flag to false
                }
            );
        }
    });
});

// script.js

// Function to update the content of the span
function updateSpanContent() {
    var mySpan = document.getElementById("mytestdiv");
    if (mySpan) {
        mySpan.textContent = "**This is test content**";
    }
}

// Call the function when the page has finished loading
document.addEventListener("DOMContentLoaded", function() {
    updateSpanContent();
});

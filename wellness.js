// Function to show the popup
function showPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
}

// Function to hide the popup
function hidePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

// Event Listeners for the buttons
document.getElementById("closeButton").addEventListener("click", hidePopup);
document.getElementById("submitButton").addEventListener("click", function() {
    hidePopup();
    window.location.href = "home.html";
});

// Assuming there's a Login button elsewhere in the document with id 'loginButton'
document.getElementById("loginButton").addEventListener("click", showPopup);



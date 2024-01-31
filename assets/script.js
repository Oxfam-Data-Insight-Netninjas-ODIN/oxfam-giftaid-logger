// Back-end branch
var isFullscreen = false;

// create a function for toggle fullscreen view
function toggleFullscreen() {
    if (isFullscreen) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
    isFullscreen = !isFullscreen;
}

// set a variable referencing the element with ID "fullscreen-button"
var fullscreenButton = document.getElementById("fullscreen-button");

// add event listener for clicking the fullscreen button
fullscreenButton.addEventListener("click", toggleFullscreen);

// add sound effect when pressing buttons
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.play();
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
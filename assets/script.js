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
}

// create a function to increment the values according to which is button pressed
function incrementCounter(buttonType) {
    // create a variable referencing the curent date and change it to string
        const currentDate = new Date().toLocaleDateString(); 
        console.log("currenDate: "+ currentDate);
        // create a variable for "clickData" stored in local storage  ; if no data then create an empty object
        let data = JSON.parse(localStorage.getItem('clickData')) || {};
        console.log("data : " +data);
        // check if "currentDate" key exist in the saved "data" object ; if not, create a default value of 0
        if (!data[currentDate]) {
            data[currentDate] = { 'giftAid': 0, 'not': 0 };
        }
        // increase/update the value of the "data""currentDate" value of the button pressed
        data[currentDate][buttonType]++;
        console.log(data[currentDate]);
        // save the updated data in local storage
        localStorage.setItem('clickData', JSON.stringify(data));
        updateTable();
    }
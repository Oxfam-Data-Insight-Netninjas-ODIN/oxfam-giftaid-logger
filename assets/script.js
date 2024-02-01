
// bring data from dayjs using API
var currentDate = dayjs().format('[Today is : ] dddd[,] DD-MM-YYYY');
// create a variable referencing the html element with ID "currentDay"
var dateElem = $('#currentDay');
dateElem.text(currentDate);

// creating varaible for weather API address and API key
var key = "7093b5895d7dff871294e9d20a842e17";
var currentDay = dayjs().format("D/M/YYYY");
var coordinates
var currentLocalization




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
    console.log("currenDate: " + currentDate);
    // create a variable for "clickData" stored in local storage  ; if no data then create an empty object
    let data = JSON.parse(localStorage.getItem('clickData')) || {};
    console.log("data : " + data);
    // check if "currentDate" key exist in the saved "data" object ; if not, create a default value of 0

    // increase/update the value of the "data""currentDate" value of the button pressed
    data[currentDate][buttonType]++;
    console.log(data[currentDate]);
    // save the updated data in local storage
    localStorage.setItem('clickData', JSON.stringify(data));
    updateTable();
}

// create function to create / update table with data introduced
function updateTable() {
    // call data from local storage
    const data = JSON.parse(localStorage.getItem('clickData')) || {}
    // create variable referencing the element with ID "dataTableBody"
    const tableBody = document.getElementById('dataTableBody');
    // setup initial value to empty
    tableBody.innerHTML = ''
    // create a for loop to take every key in "data" object 
    for (const date in data) {
        // object destructuring syntax is used to extract the values of the properties giftAid and not from the data objec
        const { giftAid, not } = data[date];
        // create a variable for the total number of both buttons pressed
        const total = giftAid + not;
        // ternary operator is used to calculate the percentage value of giftAid button
        const percentage = total > 0 ? ((giftAid / total) * 100).toFixed(2) : 0;
        // round a percentage to the nearest whole for display purpose 
        const roundPercentage = Math.round(percentage);
        // create a new variable for a new table row
        const newRow = document.createElement('tr');
        // insert the table data with the values
        newRow.innerHTML = `<td>${giftAid}</td><td>${not}</td><td>${date}</td><td>${roundPercentage}%</td>`;
        tableBody.appendChild(newRow);
        data[date].percentage = percentage;
        // save the data in local storage
        localStorage.setItem('clickData', JSON.stringify(data));
    }
}
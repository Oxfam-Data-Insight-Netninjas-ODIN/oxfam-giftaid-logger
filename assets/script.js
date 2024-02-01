var userCode = "F1234";
var firstName = "Martin";

// bring data from dayjs using API
var currentDate = dayjs().format('[Today is : ] dddd[,] DD-MM-YYYY');
// create a variable referencing the html element with ID "currentDay"
var dateElem = $('#currentDay');
// // add the date to html element
dateElem.text(currentDate);
console.log(currentDate);

// creating varaible for weather API address and API key
var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=";
var key = "7093b5895d7dff871294e9d20a842e17";
// // creating variables for current and 5days ahead dates
var currentDay = dayjs().format("D/M/YYYY");
// // create variable coordinates referencing the localization of the user computer
var coordinates
// // create a variable for the name of location representing the user computer
var currentLocalization

// 3rd API ?
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    console.log("Geolocation is not supported by this browser.");
}
// find the coordonates (long and lat) of user (need one time acceptance)
function success(position) {
    var latitude = position.coords.latitude.toFixed(2);
    var longitude = position.coords.longitude.toFixed(2);
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);

    // find location (as in city) from the coordonates

    fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            // Do something with the response data
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
    // .fail(function(xhr, status, error) {
    //   // Handle any errors
    //   console.error(error);
    // });
    // const city = response.data.results[0].components.city;
    // log("city :" + city)




    console.log("lat : " + latitude);
    var coordinates = `${latitude}&lon=${longitude}`;

    // display weather for default city - London and add weather icon - to be updated with lo
    var cityQueryURL = queryURL + coordinates + "&units=metric&appid=" + key;
    console.log(cityQueryURL);
    fetch(cityQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("weather : " + data.main.temp);
            // set a variable for wather icon addres and display it
            var iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            var iconElement = $("<img>").attr("src", iconURL);
            // display current weather data
            $("#currentTemperature").text(" Temp: " + data.main.temp + "°C");


        })
}



function error() {
    console.log("Unable to retrieve your location.");
}





console.log("Test");
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
    if (!data[currentDate]) {
        data[currentDate] = { 'user': userCode, 'firstName': "Martin", 'giftAid': 0, 'not': 0, 'date': currentDate };
    }
    // increase/update the value of the "data""currentDate" value of the button pressed
    data[currentDate][buttonType]++;
    console.log(data[currentDate]);
    // save the updated data in local storage
    localStorage.setItem('clickData', JSON.stringify(data));
    updateTable();
}

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

// open another page to display the previous days results
function sendDataToPage2() {
    // take input userCode, add data to local storage and open page 2 with data from previous days
    var inputData = userCode.value;
    localStorage.setItem("userCode", inputData);
    // open the page with highscore
    var otherPage = window.open('highscores.html');
    otherPage.onload = scoresOnOtherPage();
}

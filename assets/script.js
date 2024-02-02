var userCode = "F1234";
var firstName = "Martin";
// create a list of users
var cashiers = [
  { firstName: "Martin", user: "M1234" },
  { firstName: "Amy", user: "D3456" },
  { firstName: "George", user: "G8976" },
];

// create a drop down list with user names
for (i = 0; i < cashiers.length; i++) {
  var newButtonUser = $("<li>");
  newButtonUser.text(cashiers[i].firstName);

  $("#users").append(newButtonUser);
}

var userName = null;
// create a click event for the drop menu user to select the current user
$(".dropdown-menu li").click(function () {
  userName = $(this).text();
  //   save to local storage the userName
  localStorage.setItem("currentUserName", userName);
  console.log("clicked username : " + userName);

  // loop through data to identify the userCode corresponding to the firstnme
  for (i = 0; i < cashiers.length; i++) {
    $.each(cashiers[i], function (key, value) {
      if (value === userName) {
        userCode = cashiers[i].user;
        console.log("userCode coresonding to the click name is: " + userCode);
        //   save to local storage the userCode
        localStorage.setItem("currentUserCode", userCode);
        return false; // Exit the loop once a match is found
      }
    });
  }
});

console.log("selected user is :" + userName);
console.log("firstname is : " + firstName);
console.log("userCode for first name is : " + userCode);

var userCode = localStorage.getItem("currentUserCode");
if (userCode == null) {
    userCode = "anonymous"
};
console.log("usercode from storage : " + userCode);

var userName = localStorage.getItem("currentUserName");
if (userName == null) {
    userName = "anonymous"
}
console.log("usercode from storage : " + userName);


let localdata = JSON.parse(localStorage.getItem("clickData"));
const currentDate = dayjs().format("DD/MM/YYYY");
console.log(localdata);
if (localdata == null) {
    const newLocaldata = {
      [currentDate] : {[userCode]: {
      user: userCode,
      firstName: userName,
      giftAid: 0,
      not: 0,
      date: currentDate,}}
    };
    console.log(newLocaldata);
    localStorage.setItem('clickData', JSON.stringify(newLocaldata));
  }


// create a function to increment the values according to which is button pressed
function incrementCounter(buttonType) {
  // create a variable referencing the curent date and change it to string
//   var dateForObject = dayjs().format("DD/MM/YYYY");
//   const currentDate = dateForObject;
  const currentDate = dayjs().format("DD/MM/YYYY");
  console.log("currenDate: " + currentDate);
  // create a variable for "clickData" stored in local storage  ; if no data then create an empty object
  let localdata = JSON.parse(localStorage.getItem("clickData"));

  console.log(localdata);



//   // check if "currentDate" key exist in the local data ; if not, create a default value of 0
//   if (!localdata || (localdata == {})) {
//     const newLocaldata = {
//       currentDate : {userCode: {
//       user: userCode,
//       firstName: userName,
//       giftAid: 0,
//       not: 0,
//       date: currentDate,}}
//     };
//     localStorage.setItem('clickData', JSON.stringify(newLocaldata));
//   }

  localdata = localStorage.getItem("clickData");
  console.log("last local data is : "+localdata);
  localdata = JSON.parse(localStorage.getItem("clickData"));
  console.log("last local data is : "+localdata);
  // increase/update the value of the "data""currentDate""userCode" value of the button pressed
  localdata.currentDate.buttonType++;
  console.log(localdata[currentDate][userCode]);
  // save the updated data in local storage
  localStorage.setItem("clickData", JSON.stringify(localdata));
  updateTable();
}



// create function to create / update table with data introduced
function updateTable() {
  // call data from local storage
  const localdata = JSON.parse(localStorage.getItem("clickData")) || {};
  // create variable referencing the element with ID "dataTableBody"
  const tableBody = document.getElementById("dataTableBody");
  // setup initial value to empty
  tableBody.innerHTML = "";
  // create a for loop to take every key in "data" object
  for (const date in localdata) {
    // object destructuring syntax is used to extract the values of the properties giftAid and not from the data objec
    const { giftAid, not } = localdata[date];
    // create a variable for the total number of both buttons pressed
    const total = giftAid + not;
    // ternary operator is used to calculate the percentage value of giftAid button
    const percentage = total > 0 ? ((giftAid / total) * 100).toFixed(2) : 0;
    // round a percentage to the nearest whole for display purpose
    const roundPercentage = Math.round(percentage);
    // create a new variable for a new table row
    const newRow = document.createElement("tr");
    // insert the table data with the values
    newRow.innerHTML = `<td>${giftAid}</td><td>${not}</td><td>${date}</td><td>${roundPercentage}%</td>`;
    tableBody.appendChild(newRow);
    localdata[date].percentage = percentage;
    // save the data in local storage
    localStorage.setItem("clickData", JSON.stringify(localdata));
  }
}

// // open another page to display the previous days results
// function sendDataToPage2() {
//     // take input userCode, add data to local storage and open page 2 with data from previous days
//     var inputData = userCode.value;
//     localStorage.setItem("userCode", inputData);
//     // open the page with highscore
//     var otherPage = window.open('highscores.html');
//     otherPage.onload = scoresOnOtherPage();
// }

// bring data from dayjs using 1st API
var todayDate = dayjs().format("[Today is : ] dddd[,] DD-MM-YYYY");

// create a variable referencing the html element with ID "currentDay"
var dateElem = $("#currentDay");
// Moved these two here to allow for scope access
var currentCityElem = $("#currentLocation");
var tempElem = $("#locationTemp");

// Create a variable referencing the html element with ID "currentLocationData"
var locationElem = $("#currentLocationData");
// // add the date to html element
dateElem.text(todayDate);
console.log(todayDate);

// creating varaible for weather 2nd API address and API key
var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=";
var key = "7093b5895d7dff871294e9d20a842e17";

// 3rd API ?
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.log("Geolocation is not supported by this browser.");
}
// find the coordonates (long and lat) of user (need one time acceptance)
function success(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);

  // find location (as in city) from the coordonates
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
      // take the reverse geolocation from API and display the city
      var currentCity = data.features[0].properties.address.town;
      console.log("location object : " + JSON.stringify(data.features[0]));

      console.log("current location =" + currentCity);

      currentCityElem.text(currentCity);
      // Meant to fetch data but undefined
      locationElem.text(`${currentCityElem.text()} | ${tempElem.text()}`);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });

  // // create variable coordinates referencing the localization of the user computer
  var coordinates = `${latitude}&lon=${longitude}`;

  // display weather for default city - London and add weather icon - to be updated with lo
  var cityQueryURL = queryURL + coordinates + "&units=metric&appid=" + key;
  // console.log(cityQueryURL);
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

      tempElem.text(" Temp: " + data.main.temp + "°C");
    });
}
function error() {
  console.log("Unable to retrieve your location.");
}

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

// click event to open table html
$("#myButtonHistory").click(function () {
  // Open the other webpage
  window.location.href = "assets/table.html";
});

// click event to open table html
$("#myButtonScores").click(function () {
  // Open the other webpage
  window.location.href = "assets/scores.html";
});

// add sound effect when pressing buttons
function playSound(soundId) {
  const sound = new Audio(`assets/sound/${soundId}.wav`);

  sound.play();
}

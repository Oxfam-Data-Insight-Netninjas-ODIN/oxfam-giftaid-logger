const tableBody = document.getElementById("dataTableBody");
var userCode = localStorage.getItem("currentUserCode") || "anonymous";
var firstName = localStorage.getItem("currentUserName") || "anonymous";
var userName = localStorage.getItem("currentUserName") || "anonymous";
// localStorage.setItem("currentUserName", "anonymous");
// localStorage.setItem("currentUserCode", "anonymous");


var totalGiftAidClicksToday = localStorage.getItem("giftAidClicksToday")|| 0;
var totalClicksToday = localStorage.getItem("giftClicksToday") || 0;
$('#ga-count').text(totalGiftAidClicksToday);
$('#nga-count').text(totalClicksToday-totalGiftAidClicksToday);
$('#percent-count').text(Math.round(((totalGiftAidClicksToday / totalClicksToday) * 100).toFixed(2)) + "%")


// create a list of users
var cashiers = [
  { firstName: "Martin", user: "M1234" },
  { firstName: "Amy", user: "A3456" },
  { firstName: "George", user: "G8976" },
  { firstName: "anonymous", user: "anonymous" },
];

// create a drop down list with user names
for (i = 0; i < cashiers.length; i++) {
  var newButtonUser = $("<li>");
  newButtonUser.text(cashiers[i].firstName);
  $("#users").append(newButtonUser);
}


// create a click event for the drop menu users to select the current user
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

        //   save to local storage the userCode
        localStorage.setItem("currentUserCode", userCode);
        return false; // Exit the loop once a match is found
      }
    localDataWork()
    });
  }
});

console.log("default selected user is :" + userName);
console.log("default firstname is : " + firstName);
console.log("default userCode for first name is : " + userCode);

// localDataWork()

// write the object data in local storage as a function
function localDataWork() {
//   retrieve the selected userCode from local storage
  var userCode = localStorage.getItem("currentUserCode");
  if (userCode == null) {
      userCode = "anonymous"
  };
  console.log("usercode from storage : " + userCode);
  //   retrieve the selected userName from local storage
  var userName = localStorage.getItem("currentUserName");
  if (userName == null) {
      userName = "anonymous"
  }
 
  
  // retrieve data from locals storage and populate an object with selected User data;
  //      if there is none, generate a default one
  //           Then save data to local storage
  let localdata = JSON.parse(localStorage.getItem("clickData"));
  const currentDate = dayjs().format("DD/MM/YYYY");
  var newLocaldata;
  var newUserData;
  var userAlreadyInLocal = false
  
//   if the local storage is empti create a default user data
  if (localdata == null || localdata == {}) {
    newLocaldata = {
      [currentDate] : {[userCode]: {
      user: userCode,
      firstName: userName,
      giftAid: 0,
      not: 0,
      percentage: 0,
      date: currentDate,}}
    };
    localStorage.setItem('clickData', JSON.stringify(newLocaldata));
    localdata = newLocaldata;
  }
  
  // if the current date is different than the one in data base create a new data for current date  
  //    as in check if the key date is present, if not add it with the value of new user
  if (`${currentDate}` in localdata) {
  } else {  
    console.log(`all dates are different than ${currentDate} so a new date will be created`);
    var newDateLocaldata = {
      [currentDate] : {[userCode]: {
      user: userCode,
      firstName: userName,
      giftAid: 0,
      not: 0,
      percentage: 0,
      date: currentDate,}}
    };

    $.extend(localdata, newDateLocaldata);

    localStorage.setItem('clickData', JSON.stringify(localdata));
  } 

  
  // check if selected user is already in local storage   
  for (var key in localdata[currentDate]) {
    var keys = Object.keys(localdata[currentDate]);

    if (key === userCode) {

      userAlreadyInLocal = true;
      break;
    } else {
        userAlreadyInLocal = false;

    } 
  }

  


  // is user not in local storage add the new user with default values   
  if (userAlreadyInLocal === true) {

  }
  else {
        newUserData = {
            [userCode]: {
            user: userCode,
            firstName: userName,
            giftAid: 0,
            not: 0,
            percentage: 0,
            date: currentDate,}};
          

          $.extend(localdata[currentDate], newUserData);

          localStorage.setItem('clickData', JSON.stringify(localdata));
    }
}
localDataWork()

// create a function to increment the values according to which is button pressed
function incrementCounter(buttonType) {
  // create a variable referencing the curent date and change it to string
  var currentDate = dayjs().format("DD/MM/YYYY");
  // create a variable for "clickData" stored in local storage  ; if no data then create an empty object
  let localdata = JSON.parse(localStorage.getItem("clickData"));

  userCode = localStorage.getItem("currentUserCode")

  localdata[currentDate][userCode][buttonType]++;
 // save the updated data in local storage
  localStorage.setItem("clickData", JSON.stringify(localdata));
  updateTable();

//   calculate and display total clicks today
  var todayDataObj =  localdata[currentDate]
  var totalClicksPerUser = 0;
  var totalClicksToday = 0;
  var totalGiftAidClicksToday = 0;
  for (const user in todayDataObj) {

    // create a variable for the total number of both buttons pressed
    var giftAidClick = todayDataObj[user].giftAid;
    console.log("user giftaid is : "+giftAidClick);
    var noGiftAidClick =  todayDataObj[user].not
    totalClicksPerUser = giftAidClick + noGiftAidClick;
    console.log("total Clicks per user = "+ totalClicksPerUser);
    totalClicksToday = totalClicksToday + totalClicksPerUser;
    totalGiftAidClicksToday = totalGiftAidClicksToday + giftAidClick;
   }
  $('#ga-count').text(totalGiftAidClicksToday);
  $('#nga-count').text(totalClicksToday-totalGiftAidClicksToday);
  $('#percent-count').text(Math.round(((totalGiftAidClicksToday / totalClicksToday) * 100).toFixed(2)));
  localStorage.setItem("giftAidClicksToday", totalGiftAidClicksToday);
  localStorage.setItem("giftClicksToday", totalClicksToday);
  
  // call function to display a gif as a reward for introducing data
  console.log("the button pressed is :" +buttonType);
  if (buttonType == "giftAid") {
    $('#gifClipID').empty();
    gifClip();
  }
  if (buttonType == "not") {
    $('#gifClipID').empty();
    }
}


// create function to create / update table with data introduced
function updateTable() {
  // call data from local storage
  const localdata = JSON.parse(localStorage.getItem("clickData")) || {};
  // create variable referencing the element with ID "dataTableBody"


  var currentDate = dayjs().format("DD/MM/YYYY");
  userCode = localStorage.getItem("currentUserCode");
  console.log(localdata[currentDate][userCode].giftAid)
  var todayDataObj =  localdata[currentDate]
  // create a for loop to take every key in "data" object
  for (const user in todayDataObj) {

    // create a variable for the total number of both buttons pressed
    var giftAid = localdata[currentDate][userCode].giftAid;
    var noGiftAid = localdata[currentDate][userCode].not;
    var firstName = localdata[currentDate][userCode].firstName;
    const total = giftAid + noGiftAid;
    console.log("total clicked per user is : "+total);
    // ternary operator is used to calculate the percentage value of giftAid button
    const calculatedPercentage = total > 0 ? ((giftAid / total) * 100).toFixed(2) : 0;
    localdata[currentDate][userCode].percentage = calculatedPercentage
    // round a percentage to the nearest whole for display purpose
    const roundPercentage = Math.round(calculatedPercentage);
    // create a new variable for a new table row
    const newRow = document.createElement("tr");
    // insert the table data with the values
    newRow.innerHTML = `<td>${firstName}</td><td>${giftAid}</td><td>${noGiftAid}</td><td>${currentDate}</td><td>${roundPercentage}%</td>`;
    tableBody.innerHTML = "";
    tableBody.appendChild(newRow);
    // localdata[date].percentage = percentage;
    // save the data in local storage
    localStorage.setItem("clickData", JSON.stringify(localdata));
    // If the amount of non-gift aided is greater than gift aided, switch the arrow colour to red
    if (not > giftAid) {
      $("#arrow").attr("src","assets/images/red_score_arrow.png");
    }
  }
}
updateTable();



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
      var currentCity = data.features[0].properties.address.town || data.features[0].properties.address.village;
      console.log("location object : " + JSON.stringify(data.features[0]));
      console.log(data);

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

// If the viewport is equal to or under 575 pixels wide, remove arrow from the page
if (window.matchMedia("(max-width: 575px)").matches) {
    $("#arrow").remove();
  }

// 4th API to display a gif when GiftAidis pressed
function gifClip () {
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=AQMPU710JqQQFEDRjh4gbD9dEuYCXy2d&rating=pg&limit=10&q=happy dance";
  console.log("displaying gif");
  fetch(queryURL)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    // for (let i = 0; i < data.data.length; i++) {
      var randomNumber = Math.floor(Math.random() * 5) + 1;
      console.log("number is :"+ randomNumber);
      var myImg = data.data[randomNumber].images.original.url;
      var imgTag = document.createElement("img");
      imgTag.src = myImg;
      $('#gifClipID').append(imgTag)
      setTimeout(function() {
        $('#gifClipID').empty();
      }, 5000);
    // }
  });
}
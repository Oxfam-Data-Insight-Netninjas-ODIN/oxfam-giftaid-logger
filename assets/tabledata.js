displayUser ();

var currentUserCode = localStorage.getItem('currentUserCode');
var currentDate = dayjs().format("DD/MM/YYYY");

var historyData = [];

var historyDataServer = [
  { user: "F2345", firstName: "John", giftAid: 2, not: 2, percentage: 50,  date: "30/12/2023" },
  { user: "F1234", firstName: "Martin", giftAid: 1, not: 1, percentage: 50, date: "30/12/2023" },
  { user: "F5678", firstName: "Duncan", giftAid: 3, not: 1, percentage: 75, date: "30/12/2023" },
  { user: "F2334", firstName: "Rob", giftAid: 4, not: 1, percentage: 100, date: "30/12/2023" },
  { user: "G6734", firstName: "Tom", giftAid: 2, not: 1, percentage: 66, date: "29/12/2023" },
  { user: "S2544", firstName: "Amy", giftAid: 0, not: 0, percentage: 0, date: "29/12/2023" },
];


// if the local storage is empty create an empty object
if (!localStorage.getItem('clickData')) {
  // If it doesn't exist, create an empty object
  var emptyObject = {};
  // Convert the empty object to JSON format
  var emptyObjectJSON = JSON.stringify(emptyObject);
  // Store the empty object in local storage
  localStorage.setItem('clickData', emptyObjectJSON);
}

// get data stored in storage (is stored as object with objects inside)
let storageData = JSON.parse(localStorage.getItem('clickData'));
var newStorag
// go through all dates from local storage and bring their values as data to be added into historyData array
$.each(storageData, function(key, value) {

    var newObject = value;
    // repeat same process to go further down the path to target the needded values
    $.each(newObject, function(key, value) {

        var neededObject = value;
        // add the element to the historydata in the first position
        historyData.unshift(neededObject);
        });
  });
// add the data from file to the historydata
historyData = historyData.concat(historyDataServer)





// variable for first object length
var historyDataObjectLength = Object.keys(historyData).length;
// loop through all elemeents of the object to and populate the table
for (var i=0 ; i<historyDataObjectLength ; i++) {
  var populateUser = historyData[i].user;
  var populateName= historyData[i].firstName;
  var populateGiftAid= historyData[i].giftAid;
  var populateNot= historyData[i].not;
  var populatePercentage= historyData[i].percentage;
  var populateDate= historyData[i].date;
  // if (populateInitials === undefined || populateScore === undefined ) {continue;}
  // if (populateInitials === null || populateScore === null ) {continue;}
  var newRow = $("<tr>");
  $('#tableHistoryBody').append(newRow);
  newRow.append(`<td>${populateDate}</td><td>${populateUser}</td><td>${populateName}</td><td>${populateGiftAid}</td><td>${populateNot}</td><td>${Math.round(populatePercentage)}%</td>`)
  $('#tableHistoryBody').append(newRow);
}
// create a variable for the data entry of the current user
var currentUserEntry = historyData[0];




// ////////////////////////////////////////////////////
// code for Scores HTML

// Sort the object based on the 'age' value in descending order
historyData.sort(function(a, b) {
  if (b.percentage === a.percentage) {
    return b.giftAid - a.giftAid;
  }
  return b.percentage - a.percentage;
});

// Iterate over the sorted object and create rows
$.each(historyData, function(index, element) {
  // Create a new row element
  var newRow = $('<tr>');

  // Add cells or data to the row
  newRow.append('<td>' + element.date + '</td>');
  newRow.append('<td>' + element.user + '</td>');
  newRow.append('<td>' + element.firstName + '</td>');
  newRow.append('<td>' + element.giftAid + '</td>');
  newRow.append('<td>' + element.not + '</td>');
  newRow.append('<td>' + Math.round(element.percentage)+"%" + '</td>');

  // Append the new row to the table
  $('#table-body').append(newRow);
});

// populate top3
var top1name = historyData[0].firstName;
$('#top1nameElem').text(top1name);
var top1percentage = Math.round(historyData[0].percentage)
$('#top1percElem').text(`${top1percentage}%`);

var top2name = historyData[1].firstName;
$('#top2nameElem').text(top2name);
var top2percentage = Math.round(historyData[1].percentage)
$('#top2percElem').text(`${top2percentage}%`);

var top3name = historyData[2].firstName;
$('#top3nameElem').text(top3name);
var top3percentage = Math.round(historyData[2].percentage)
$('#top3percElem').text(`${top3percentage}%`);

// find the current user data in the table data and return the position of the user in the table 
for (var i = 0; i < historyData.length; i++) {
  if (historyData[i].user === currentUserCode && historyData[i].date === currentDate) {
    index = i+1;
    var currentUserPosition = index;
    $('#currentUserPosition').text(`You are in ${index}th Place`);
    var currentUserPerc = Math.round(historyData[i].percentage)
    $('#currentUserPercentage').text(`${currentUserPerc}%`);
    console.log("index of user is : "+index);
    if (index <4) {
      $('#gifClipID').empty();
      gifClip2();
    }
    // highlight the current user inside the table
    // $("#table-body > :nth-child(i+3)").css("color", "red");
    var currentUserTableRowIndex = i+7
    var parent = document.getElementById("table-body");
    // var currentUserDataChild = parent.querySelector(":nth-child(" + currentUserTableRowIndex + ")");
    
    // currentUserDataChild.style.backgroundColor = "green";
    $("#table-body > :nth-child(" + currentUserTableRowIndex + ")").css("backgroundColor", "green");
    break;
  }
}



// work in progress with data copied from main html to test it here !




// bring data from dayjs using 1st API
var todayDate = dayjs().format('[Today is : ] dddd[,] DD-MM-YYYY');

// create a variable referencing the html element with ID "currentDay"
var dateElem = $('#currentDay');
// Moved these two here to allow for scope access
var currentCityElem = $('#currentLocation');
var tempElem = $('#locationTemp');


// Create a variable referencing the html element with ID "currentLocationData"
var locationElem = $("#currentLocationData");
// // add the date to html element
dateElem.text(todayDate);


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
    var latitude = position.coords.latitude.toFixed(2);
    var longitude = position.coords.longitude.toFixed(2);


    // find location (as in city) from the coordonates
    fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`)
        .then(response => response.json())
        .then(data => {
            // take the reverse geolocation from API and display the city
            var currentCity = data.features[0].properties.address.town;




            currentCityElem.text(currentCity);
            // Meant to fetch data but undefined
            // locationElem.text(`${currentCityElem.text()}  ${tempElem.text()}`);
        })
        .catch(error => {
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
  
            // set a variable for wather icon addres and display it
            var iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            var iconElement = $("<img>").attr("src", iconURL);
            // display current weather data


            tempElem.text("   Temp: " + data.main.temp + "°C");

        })
}
function error() {
    console.log("Unable to retrieve your location.");
}



function displayUser () {
  var userName = localStorage.getItem("currentUserName")
  console.log("username for title is :"+userName);
  if (userName === "anonymous") {
    console.log("username is anonymous in left top corner");
    $('#username').text (`Welcome, Volunteer`);
  } else {
    $('#username').text (`Welcome, ${userName}`);
  }
};


function gifClip2 () {
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=AQMPU710JqQQFEDRjh4gbD9dEuYCXy2d&rating=pg&limit=10&q=congratulation";

  fetch(queryURL)
  .then(function(response) {
    return response.json();
  }).then(function(data) {

      var randomNumber = Math.floor(Math.random() * 5) + 1;

      var myImg = data.data[randomNumber].images.original.url;
      var imgTag = document.createElement("img");
      imgTag.src = myImg;
      $('#gifClipID2').append(imgTag)
      setTimeout(function() {
        $('#gifClipID2').empty();
      }, 5000);
    
  });
}


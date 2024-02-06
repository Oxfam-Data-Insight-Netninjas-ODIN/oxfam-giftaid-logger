
var historyData = [
  { user: "F2345", firstName: "John", giftAid: 2, not: 2, percentage: 50,  date: "30/01/2024" },
  { user: "F1234", firstName: "Martin", giftAid: 1, not: 1, percentage: 50, date: "30/01/2024" },
  { user: "F5678", firstName: "Duncan", giftAid: 3, not: 1, percentage: 75, date: "30/01/2024" },
  { user: "F2334", firstName: "Rob", giftAid: 4, not: 0, percentage: 100, date: "30/01/2024" },
  { user: "G6734", firstName: "Tom", giftAid: 2, not: 1, percentage: 66, date: "29/01/2024" },
  { user: "S2544", firstName: "Amy", giftAid: 0, not: 0, percentage: 0, date: "29/01/2024" },
  { user: "D1034", firstName: "Ela", giftAid: 8, not: 2, percentage: 80, date: "28/01/2024" },
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
        historyData.push(neededObject);
        });
  });

// // create an array with the values of the keys (the key is the data when was introduced)
// var valuesArray = Object.values(storageData);
// // use a loop to add all data from local storage to the main database (the "historyData" )
// for (i=0 ; i<valuesArray.length ; i++) {
//   // add local storage data to current object data
//   historyData.push(valuesArray[i]);

// }
// Custom comparison function
function compareDates(a, b) {
  var dateA = new Date(a.date);
  console.log(dateA);
  var dateB = new Date(b.date);
  console.log("dateB-dateA : " +dateB - dateA);
  return dateB - dateA;
}

// Sort the data based on the date value
historyData.sort(compareDates);

// Output the sorted data
console.log(historyData);


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




// code for Scores HTML

// Sort the object based on the 'age' value in descending order
historyData.sort(function(a, b) {
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
  $('#tableScoresBody').append(newRow);
});





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
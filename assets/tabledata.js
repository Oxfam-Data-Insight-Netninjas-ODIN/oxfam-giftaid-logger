var tableHistory = document.querySelector('#tableHistory');


var historyData = [
  { user: "F2345", firstName: "John", giftAid: 2, not: 2, percentage: 50,  date: "30/01/2023" },
  { user: "F1234", firstName: "Martin", giftAid: 1, not: 1, percentage: 50, date: "30/01/2023" },
  { user: "F5678", firstName: "Duncan", giftAid: 3, not: 1, percentage: 75, date: "30/01/2023" },
  { user: "F2334", firstName: "Rob", giftAid: 4, not: 0, percentage: 100, date: "30/01/2023" },
];
console.log(historyData);

var bestUsers = [
    {}
];

// variable for first object length
var historyDataObjectLength = Object.keys(historyData).length;
// loop through all elemeents of the object to and populate the table
for (var i=0 ; i<historyDataObjectLength ; i++) {
  console.log("loop is : "+historyDataObjectLength);
  
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
  newRow.append(`<td>${populateDate}</td><td>${populateUser}</td><td>${populateName}</td><td>${populateGiftAid}</td><td>${populateNot}</td><td>${populatePercentage}</td>`)
  $('#tableHistoryBody').append(newRow);

}


// Run a JavaScript function from the other page
function populateTable () {}

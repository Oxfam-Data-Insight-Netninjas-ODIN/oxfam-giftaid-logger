
var historyData = [
  { user: "F2345", firstName: "John", giftAid: 2, not: 2, percentage: 50,  date: "30/01/2023" },
  { user: "F1234", firstName: "Martin", giftAid: 1, not: 1, percentage: 50, date: "30/01/2023" },
  { user: "F5678", firstName: "Duncan", giftAid: 3, not: 1, percentage: 75, date: "30/01/2023" },
  { user: "F2334", firstName: "Rob", giftAid: 4, not: 0, percentage: 100, date: "30/01/2023" },
  { user: "G6734", firstName: "Tom", giftAid: 2, not: 1, percentage: 66, date: "29/01/2023" },
  { user: "S2544", firstName: "Amy", giftAid: 0, not: 0, percentage: 0, date: "29/01/2023" },
  { user: "D1034", firstName: "Ela", giftAid: 8, not: 2, percentage: 80, date: "28/01/2023" },
];
console.log(historyData);


// gett data stored in storage (is stored as object with objects inside)
let storageData = JSON.parse(localStorage.getItem('clickData'));
console.log(storageData);
// create an array with the values of the keys (the key is the data when was introduced)
var valuesArray = Object.values(storageData);
// use a loop to add all data from local storage to the main database (the "historyData" )
for (i=0 ; i<valuesArray.length ; i++) {
  // add local storage data to current object data
  historyData.push(valuesArray[i]);
  console.log(valuesArray[i]);
}


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


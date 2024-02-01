
var historyData = [
  { user: "F2345", firstName: "John", giftAid: 2, not: 2, percentage: 50,  date: "30/01/2023" },
  { user: "F1234", firstName: "Martin", giftAid: 1, not: 1, percentage: 50, date: "30/01/2023" },
  { user: "F5678", firstName: "Duncan", giftAid: 3, not: 1, percentage: 75, date: "30/01/2023" },
  { user: "F2334", firstName: "Rob", giftAid: 4, not: 0, percentage: 100, date: "30/01/2023" },
];
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
  newRow.append(`<td>${populateDate}</td><td>${populateUser}</td><td>${populateName}</td><td>${populateGiftAid}</td><td>${populateNot}</td><td>${populatePercentage}</td>`)
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
  newRow.append('<td>' + element.percentage + '</td>');

  // Append the new row to the table
  $('#tableScoresBody').append(newRow);
});


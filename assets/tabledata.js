var tableHistory = document.querySelector('#tableHistory');


var historyData = [
  { user: "F2345", firstName: "John", giftAid: 2, not: 2, percentage: 50,  date: "30/01/2023" },
  { user: "F1234", firstName: "Martin", giftAid: 1, not: 1, percentage: 50, date: "30/01/2023" },
  { user: "F5678", firstName: "Duncan", giftAid: 3, not: 1, percentage: 75, date: "30/01/2023" },
  { user: "F2334", firstName: "Rob", giftAid: 4, not: 0, percentage: 100, date: "30/01/2023" },
];


var bestUsers = [
    {}
];

$(document).ready(function() {
  // Attach a click event handler to the button
  $('#myButton').click(function() {
    // Open the other webpage
    window.open('otherpage.html', '_blank');

  
    for (var i=0 ; i<historyData[0].length ; i++) {
      console.log("loop is : "+historyData[0].length);
      var populateInitials = storedHighScoredObj[i].key1;
      var populateScore = storedHighScoredObj[i].key2;
      if (populateInitials === undefined || populateScore === undefined ) {continue;}
      if (populateInitials === null || populateScore === null ) {continue;}
      var newRow = document.createElement("li");
      newRow.innerHTML = populateInitials + " - " + populateScore;
      highscores.appendChild(newRow);
    }


    // Run a JavaScript function from the other page
    function populateTable () {}
  });
});
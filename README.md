# Giftaid-logger


Deployed Application: https://alex-quayle.github.io/oxfam-giftaid-logger/

# Gift Aid Enhancement Strategy for Oxfam GB

Gift Aid presents an opportunity to amplify the impact of contributions to Oxfam without incurring additional costs for donors. For UK taxpayers, Oxfam can reclaim 25% of the basic tax paid on their gifts, transforming a £100 donation into a £125 value. Gift Aid providers partnering with Oxfam affix barcode labels to donated goods, facilitating seamless integration with the Electronic Point of Sale (EPOS) system for efficient tracking.

However, a current challenge faced by Oxfam GB shops involves certain outlets lagging in Gift Aid sales. Analysis reveals potential issues such as till operator errors, discrepancies in donation sorting, and anomalies in Gift Aid donations. To address this, a systematic approach has been initiated, instructing the recording of Gift Aid sales versus non-Gift Aid sales to pinpoint and rectify the problem.

One contributing factor may be insufficient hardware in the till scanners receiving this data, leading operators to forgo manual input during peak times. To address this issue, we propose the development of an application utilizing suitable hardware sources. The application aims to:

- record gift aid sales per till operator
- identify potential anomalies
- encourage participation through gamification
- provide feedback to area managers, for further analysis
- 
APIS we are considering using are:

- Day.js for tracking the date
- openweathermap API - for displaying the weather -perhaps on a marquee
- navigator.geolocation.API - to display where the user is based
- a giff APi - as part of the gamification element - 'happy pictures' on a gift aid sale
- a sound API - as part of the gamification process.

Implementation of this solution is poised to enhance data input accuracy, encouraging a seamless and efficient Gift Aid process while providing valuable insights for management.

Therefore, an idea to help encourage the data input accuracy of till operators and provide feedback to managers and area managers is to be implemented.

## basic structure

First up: 
[SOMEWAY OF LOGGING A USERNAME & SHOPCODE INTO LOCAL STORAGE via table. Perhaps a button that opens a modal to ask for them. see single table row bullet points on page one below - not a priority but something that can be implemented after the minimum viable product has been created]

which leads straight to:

# Page 1 - landing page 

This is the Landing page and displays Oxfam heading and title

2 x buttons, 1 for add gift aid, one for not gift aid. theese must be large for the user to see and responsive (sound/visual cues)

An animated marquee. this could be replaced with another animation - just something to grab the users attention.

## A single table row with the days data: shopCode / usersFirstName / Gift Aided / Not Gift Aided / Date / Percentage

- shopCode is 1 letter followed by 4 numbers e.g.. F1924 (this is not included on the prototype landing page)
- userFirstName is a string of up to 12 characters (this is not included on the prototype landing page)
- giftAided is an int number value
- notGiftAided is an int number value
- Date is a date value - maybe using DateJS API
- Percentage - is an int value that is the percentage of GiftAid over the total sales (giftAided and notGiftAided)

## also:

a button to toggle the Application Fullscreen, small and discrete
a link to page 2, possibly small and discrete as well (this is not included on the prototype landing page)
a link to page 3, also possibly small and discrete. (this is not included on the prototype landing page)
  
# Page 2 (yet to be added)

This should contain:

- smaller logo, page description title, page header.

A table that is the same as the table row on the main page except containing more rows (the previous days) is added to as each day goes by
(this is the current functionality of the landing page, however, the List that it adds to , should be added to is the one on this page)
Ideally, finding a way of printing this data into a readable format on paper would be good (to be sorted by date).

- a link to page 1, possibly small and discrete as well 
- a link to page 3, also possibly small and discrete. 


# page 3 (yet to be added)

This should contain:

- smaller logo, page description title, page header.

this page is similar to page 2 except it is a high-score table of users with the highest gift aid percentage per day at the top.
Ideally, finding a way of printing this data into a readable format on paper would be good (to be sorted by highest percentage).

- a link to page 1, possibly small and discrete as well 
- a link to page 2, also possibly small and discrete. 

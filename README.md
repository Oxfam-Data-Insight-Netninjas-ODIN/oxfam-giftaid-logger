# Giftaid-logger

## Collaborators

- Cris Bogdan - Javascript and API's (Backend)
- Alex Qualye - Figma, UX Design, CSS HTML (Frontend)
- Demitri Nunziata - Figma, UX Design, CSS HTML (Frontend)
- Terence Honeyford - Concept, Client liaison, Presentation, testing (Project Co-ordinator)

- GitHub Page : https://github.com/Oxfam-Data-Insight-Netninjas-ODIN/oxfam-giftaid-logger.git
- Deployed Application: https://oxfam-data-insight-netninjas-odin.github.io/oxfam-giftaid-logger

# Gift Aid Enhancement Strategy for Oxfam GB

Gift Aid presents an opportunity to amplify the impact of contributions to Oxfam without incurring additional costs for donors. For UK taxpayers, Oxfam can reclaim 25% of the basic tax paid on their gifts, transforming a £100 donation into a £125 value. Gift Aid providers partnering with Oxfam affix barcode labels to donated goods, facilitating seamless integration with the Electronic Point of Sale (EPOS) system for efficient tracking.

However, a current challenge faced by Oxfam GB shops involves certain outlets lagging in Gift Aid sales. Analysis reveals potential issues such as till operator errors, discrepancies in donation sorting, and anomalies in Gift Aid donations. To address this, a systematic approach has been initiated, instructing the recording of Gift Aid sales versus non-Gift Aid sales to pinpoint and rectify the problem.

One contributing factor may be insufficient hardware in the till scanners receiving this data, leading operators to forgo manual input during peak times. To address this issue, we propose the development of an application utilizing suitable hardware sources. The application aims to:

- record gift aid sales per till operator
- identify potential anomalies
- encourage participation through gamification
- provide feedback to area managers, for further analysis
  
APIS we are considering using are:

- Day.js for tracking the date - for quality of life, keep till operators' eyes on the app.
- openweathermap API - for displaying the weather -perhaps on a marquee
- navigator.geolocation.API - to display where the user is based.
- a giff APi - as part of the gamification element - 'happy pictures' on a gift aid sale
- a sound API - as part of the gamification process.
  
  Technologies used

- HTML
- CSS
- Javascript
- Jquery
- Bootstrap
- Figma
- Github
  

Implementation of this solution is poised to enhance data input accuracy, encouraging a seamless and efficient Gift Aid process while providing valuable insights for management.

## Basic structure

Burger menus are included at the top of all pages upon the event of re-size.


![screenshot1final](https://github.com/Alex-Quayle/oxfam-giftaid-logger/assets/64762171/4a965318-5de3-4aaa-8644-e4a5468b8fad)


# Page 1 - landing page/logger

This is the Landing page and displays the Oxfam heading and title

The page will ask to confirm a user location, and display if allowed.

The page shows the current date and temperature.

The page shows a message saying welcome, and then the name of who is 'logged in' or just says 'volunteer'.

The page has a drop-down form that lets the user select their name if they are using the till, this will carry across page changes

It has 2 x buttons, 1 for add gift aid, and one for not gift aid. These are large for the user to see and responsive (sound/visual cues)

An animated marquee. this could maybe be replaced with another animation in the future -it is just something to grab the user's attention, containing a motivational script.

## A single table row with the days' data:  Gift Aided / Not Gift Aided / Percentage

information that is being used on this page is:

- shopCode is 1 letter followed by 4 numbers e.g.. F1924 (this is not included on the prototype landing page)
- userFirstName is a string of up to 12 characters (this is not included on the prototype landing page)
- giftAided is an int number value
- notGiftAided is an int number value
- Date is a date value - maybe using DateJS API
- Percentage - is an int value that is the percentage of GiftAid over the total sales (giftAided and notGiftAided)

## also:

a button to toggle the Application Fullscreen, small and discrete
a link to page 2 (data table), possibly small and discrete as well 
a link to page 3 (high scores), also possibly small and discrete. 
  
# Page 2, table of data 

![screenshot2final](https://github.com/Alex-Quayle/oxfam-giftaid-logger/assets/64762171/8154ba1f-d2b9-426c-ac10-ff1f10631a57)

This contains:

- small logo, page description title, page header, username/temperature, location if applicable.

A table that is the same as the table row on the main page except containing more rows (the previous days) is added to as each day goes by
(this is the current functionality of the landing page, however, the List that it adds to, should be added to is the one on this page)
Ideally, finding a way of printing this data into a readable format on paper would be good (to be sorted by date).

Data Rows contain:

Date/employee (shop) code/employee (volunteer) name / Gift Aided / Not Gift Aided / Percentage of GA sales

Refer to page 1 for the data types of each of these pieces of information.

- a link to page 1 (the landing page), possibly small and discrete as well 
- a link to page 3 (the high score table), also possibly small and discrete. 


# page 3 high scores

![screenshot3final](https://github.com/Oxfam-Data-Insight-Netninjas-ODIN/oxfam-giftaid-logger/assets/64762171/efe39408-497a-4138-ad81-3e9f81b30839)

This contains:

- smaller logo, page description title, page header, username

This page is similar to page 2 except it is a high-score table of users with the highest gift aid percentage per day at the top.
This page should differentiate between 1st, 2nd, and 3rd places, and also show the current users position.
A motivational giff is placed at the top as part of the gamification process.

- a link to pages 1 and 2, possibly small and discrete as well 
- a link to page 2, also possibly small and discrete.

  ## Challenges

  Geolocation the first test went well, but some data didn't show well, alex and Cris sorted that out.
  Change the mentality of working alone - you have to accommodate and adapt.
  Originally overly enthusiastic, but we learned to focus on a minimum-viable product and leave other features for later.
  local storage consists of 5 data types. uses interlocking storage.

  ## Successes

The team worked really well together, we used kanban but found we didn't need it once we settled into roles well. we found being connected 
on Slack and Zoom voice chat enough to complete most tasks. There is an opportunity to expand on the work we've done.

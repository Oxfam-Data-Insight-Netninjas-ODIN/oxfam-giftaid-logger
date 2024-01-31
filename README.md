# giftaid-logger

Gift Aid is a simple way to increase the value of your gift to Oxfam – at no extra cost to you. If you pay tax in the UK, Oxfam can reclaim the basic rate of tax you have paid on your gift, which increases the value of your donations by 25%. So, if you donate £100, it is worth £125 to Oxfam. A gift aid provider signs up with oxfam, and when they donate goods, barcode labels are attached to those goods, with the intention of being scanned via the EPOS system.

A current problem, that the Oxfam GB shops face is that currently, certain shops, seem to be lagging behind in gift aid sales. Analysis of the problem indicates that this could be due to either till operator error, donation sorter error, or just base anomilies in the amount of gift aid donations that are provided. In order to remedy this situation, instructions were given to record the amount of gift aid sales compared to non gift aid sales. In order to home in on the problem and remedy it. This, could be due to the fact that the till scanner hardware that recieves this data, are infact insufficient. which in turn causes the till operators, under pressure with big ques to not 'punch the data in manually' usually because of big ques.
to provide a solution to this, given hardware sources that can be provided, we will produce an application that will:

- record gift aid sales per till operator
- identify potential anomolies
- encourage particiapation through gamification
- provide feedback to area managers, to compare till data to app data

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

chat gpts effort:


Gift Aid Enhancement Strategy for Oxfam GB
Gift Aid presents an opportunity to amplify the impact of contributions to Oxfam without incurring additional costs for donors. For UK taxpayers, Oxfam can reclaim 25% of the basic tax paid on their gifts, transforming a £100 donation into a £125 value. Gift Aid providers partnering with Oxfam affix barcode labels to donated goods, facilitating seamless integration with the Electronic Point of Sale (EPOS) system for efficient tracking.

However, a current challenge faced by Oxfam GB shops involves certain outlets lagging in Gift Aid sales. Analysis reveals potential issues such as till operator errors, discrepancies in donation sorting, and anomalies in Gift Aid donations. To address this, a systematic approach has been initiated, instructing the recording of Gift Aid sales versus non-Gift Aid sales to pinpoint and rectify the problem.

One contributing factor may be insufficient hardware in the till scanners receiving this data, leading operators to forgo manual input during peak times. To address this issue, we propose the development of an application utilizing suitable hardware sources. The application aims to:

Record Gift Aid sales per till operator.
Identify potential anomalies in Gift Aid transactions.
Foster participation through gamification strategies.
Provide feedback to area managers, enabling a comparison between till data and app-generated data.
Implementation of this solution is poised to enhance data input accuracy, encouraging a seamless and efficient Gift Aid process while providing valuable insights for management.

Therefore, an idea to help encourage the data input accuracy of till operators and provide feedback to managers and area managers is to be implemented

## basic structure

First up: 
[SOMEWAY OF LOGGING A USERNAME & SHOPCODE INTO LOCAL STORAGE via table. Perhaps a button that opens a modal to ask for them. see single table row bullet points on page one below]

which leads straight to:

# Page 1 - landing page 

basic prototype landing page so far: https://github.com/Tezeroth/GiftAidRecorder - also available on prototype branch.

This is the Landing page and displays Oxfam heading and title

2 x buttons, 1 for add gift aid, one for not gift aid. these must be large for the user to see and responsive (sound/visual cues)

An animated marquee. this could be replaced with another animation - just something to grab the users attention.

## A single table row with the days data: shopCode / usersFirstName / Gift Aided / Not Gift Aided / Date / Percentage

- shopCode is 1 letter followed by 4 numbers e.g.. F1924 (this is not included on the prototype landing page)
- userFirstName is a string of up to 12 characters (this is not included on the prototype landing page)
- giftAided is an int number value
- notGiftAided is an int number value
- Date is a date value - maybe using DateJS API
- Percentage - is an int value that is the percentage of GiftAid over the total sales (giftAided and notGiftAided)

## also:

a button to toggle the application Fullscreen, small and discrete
a link to page 2, possibly small and discrete as well (this is not included on the prototype landing page)
a link to page 3, also possibly small and discrete. (this is not included on the prototype landing page)
  
# Page 2 (yet to be added)

This should contain:

- smaller logo, page description title, page header.

A table that is the same as the table row on the main page except containing more rows (the previous days) is added to as each day goes by
(this is the current functionality of the landing page, however, the List that it adds to, should be added to is the one on this page)
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

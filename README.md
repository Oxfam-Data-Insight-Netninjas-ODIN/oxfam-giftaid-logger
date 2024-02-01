
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

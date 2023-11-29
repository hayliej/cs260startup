# Make a choice
### Elevator Pitch
Do you ever feel overwhelmed by too many options and you just don't know which one to choose? The Make A Choice application will help you break down your decisions into smaller pieces so you can be confident in your choice. As you compare options one by one, your smaller selections will eventually lead you to be confident in what you have deemed the best choice of all.

### Design
![IMG_2818](https://github.com/hayliej/startup/assets/144943589/83e08ee1-2afb-427f-9e2c-3e4ca98beed4)


### Key Features
+ Secure login with HTTPS
+ Able to choose what question to answer 
+ Able to select all the options to choose from
+ Display choices two at a time, based on previous user selections
+ Display the final winning choice
+ Results are stored
+ User can add or delete questions

### Technologies
I will use the required technologies in these ways:
+ **HTML -** Use HTML structure for application. Three HTML pages. One for logging in, one for the decision process, one to see any past decisions made from your account. Hyperlinks between pages.
+ **CSS -** Styling the application to look good on cell phones and laptop/desktop screens using whitespace and colors.
+ **JavaScript -** Used for login, decision process, displaying winning options and previous choices, and connecting to backend.
+ **Service -** Backend service with endpoints to:
    - login
    - accessing options
    - making choices
    - winning choice
+ **DB -** Store user information, options, and winning choices.
+ **Login -** Register users. Login information securely stored in database.
+ **WebSocket -** User's choices will determine next set of options.
+ **React -** Application ported to use React framework.

## HTML Deliverable
For this deliverable I created the general structure of my app.
+ **HTML pages -** 5 HTML pages. Home page, decision start page leading to decision making page when you press start, results page showing the results of your decision, and an about page explaining the purpose of the app.
+ **Links -** the header has links to each page. The only page with the link not in the header is the page representing where the user would actually be making decisions and is linked from the "Start" button of the Decide page.
+ **Text -** sample text representing where users would put their options to decide between.
+ **Login -** input box for info and login button on the home page.
+ **Database -** the options for deciding would be data from the database based on the user's entries.
+ **WebSocket -** will take into account the winner of each decision pair in real time and move it to the next round.

## CSS Deliverable
For this deliverable I styled the application to its final appearance.
+ **Header, footer, and main content body -** edited the color, font, and format
+ **Navigation elements -** I spaced out the navigation elements
+ **Responsive to window resizing -** my app works for all window sizes and devices
+ **Application elements -** good use of contrast and whitespace
+ **Application text content -** consistent fonts and colors
+ **Application images -** image displayed on all windows

## JavaScript Deliverable
For this deliverable I implemented JavaScript to include basic functionality for the application that works for a single user. I also added placeholders for future technology.
+ **login -** when you press the login button it takes you to the page to enter options to decide between and displays your name in the header
+ **database -** it currently stores decision information in local storage, but will use database for this data in the future
+ **WebSocket -** currently displays decision results in a table for single user, in the future this will display decisions from fellow users as well
+ **application logic -** when you choose one option it shows you the next one until you have come to a decision.

## Service Deliverable
For this deliverable I added backend endpoints that receive votes and then returns the decision.
+ **Node.js/Express HTTP service -** done
+ **Static middleware for frontend -** done
+ **Calls to third party endpoints -** done, puts a quotation from an API on the about page
+ **Backend service endpoints -** Placeholder for login that stores the current user on the server. Endpoints for decision results.
+ **Frontend calls service endpoints -** I did this using the fetch function

## DB Deliverable
+ **MongoDB Atlas database created -** done
+ **Endpoints for data -** endpoints process data and send it to MongoDB
+ **Stores data in MongoDB -** done

## Login Deliverable
For this deliverable I associate the choices with the logged in user.
+ **User registration -** creates a new account in the database
+ **Existing user -** stores the votes under the same user if the user already exists
+ **Use MongoDB to store credentials -** stores both user and their votes
+ **Restricts functionality -** You cannot see full results list until you have logged in.

## WebSocket deliverable
+ **Backend listens for WebSocket connection -** done
+ **Frontend makes WebSocket connection -** done
+ **Data sent over WebSocket connection -** done
+ **WebSocket data displayed in the application interface -** shows users when other users have joined the website

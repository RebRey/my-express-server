// STEP 1: require the express into our project
const express = require("express");

// STEP 2: create a new constant called app. This is a function that represents the
// Express module and we bind that to the word app. It is best practice to use the word app.
const app = express();

// STEP 3: create a new constant called port at set it to 3000
const port = 3000;

// STEP 4: use the app and use one of its methods called listen. This tell is to listen to
// a specific port for any HTTP requests that get sent to our server.
// STEP 5: add an anonymous function to the listen method using a callback console.log to see when our port is set up in the terminal
// check by using the terminal run the program $ node server.js, you should see msg in terminal.
app.listen(3000, function(){
    console.log("Server successfully started on port 3000.");
});

// STEP 6: Have the server respond when a browser is making a request to our server. 
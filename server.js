// STEP 1: require the express into our project
const express = require("express");

// STEP 2: create a new constant called app. This is a function that represents the
// Express module and we bind that to the word app. It is best practice to use the word app.
const app = express();

// STEP 3: create a new constant called port at set it to 3000
const port = 3000;

// STEP 6: Have the server respond when a browser is making a request to our server. 
// app.get allows us to specify what should happen when a browser gets in touch with our
// server and makes a get request.
// the first parameter it takes is the location "/" refers to home route (home page)
// the second parameter is a callback function that tells the server what to do when requests and responses happen
// you can use res for request or req for response
app.get("/", function(req, res) {
    // STEP 7: Print out the request object that we get when the callback function gets triggered
    // you can send plain text such as "Hello World!" or HTML such as "<h1>Hello World!</h1>"
    res.send("<h1>Hello World!</h1>");
  });

//STEP 8: Create a contact route
app.get("/contact", function (req, res) {
  res.send("Contact me at: RebReyAZ@gmail.com");
});

//STEP 9: Create an about route
app.get("/about", function(req, res){
  res.send("My name is Rebecca and I love spicy food.");
});

//STEP 10: Create a hobby route
app.get("/hobbies", function(req, res){
  res.send("<ul><li>Minecraft</li><li>Hot Cheetos</li><li>Sailor Moon</li><li>Nail Polish</li></ul>");
});

// STEP 4: use the app and use one of its methods called listen. This tell is to listen to
// a specific port for any HTTP requests that get sent to our server.
// STEP 5: add an anonymous function to the listen method using a callback console.log to see when our port is set up in the terminal
// check by using the terminal run the program $ node server.js, you should see msg in terminal.
app.listen(3000, function(){
    console.log("Server successfully started on port 3000.");
});


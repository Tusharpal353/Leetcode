//jshint esversion6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // write this code everytime you need to use bodyparser

// app.get("/", function (req, res) {
//   res.send("tushar");
// });


// app.post("/", function (req, res) {
//   res.sendFile(__dirname + "/signup.html");
// });

app.get("/signup", function (req, res) {
  // res.send("hello")
  res.sendFile(__dirname + "/signup.html");
});
app.post('/signup', (req, res) => {
  // Your code logic here

  // Send a 200 OK status code
  res.status(200).send('Success');
});



app.listen(3000, function () {
  console.log("server is started on port 3000");
});

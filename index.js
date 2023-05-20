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


//***************************SignUP**************************************
const users=[]

app.get("/signup", function (req, res) {
  // res.send("hello")
  res.sendFile(__dirname + "/signup.html");
});
app.post('/signup', (req, res) => {
  const { username, email } = req.body;
  const pass = req.body.password;

  const newUser = {
    email,
    pass
  };

  // Push the new user object to the "users" array
  users.push(newUser);
  // Send a 200 OK status code
  res.status(200).send('Success');
});
//***************************SignUP**************************************
//****************************questions ********************************* */
const QUESTIONS = [{
  title: "Two states",
  description: "Given an array , return the maximum of the array?",
  testCases: [{
      input: "[1,2,3,4,5]",
      output: "5"
  }]
}];
app.post("/questions",function(req,res){
  res.send(QUESTIONS)
})

//****************************questions ********************************* */

app.listen(3000, function () {
  console.log("server is started on port 3000");
});

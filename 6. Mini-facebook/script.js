// Create an array which contains the object you have made above and name the arry "database"
var database = [
  {
    username: "promise",
    password: "pro1122",
  },
  {
    username: "wisdom",
    password: "wis1122",
  },
  {
    username: "miracle",
    password: "mir1122",
  },
];

// Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cool!",
  },
  {
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!",
  },
];

// CHECK IF USER DETAIL IS VALID
function isUserVaild(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserVaild(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password!");
  }

  // OLD VERSION
  // if (user === database[0].username && pass === database[0].password) {
  //   console.log(newsfeed);
  // } else {
  //   alert("Sorry, wrong username and password!");
  // }
}

var userNamePrompt = prompt("what is your username?");
var passWordPrompt = prompt("what is your password?");

// INVOKE SIGNIN FUNCTION
signIn(userNamePrompt, passWordPrompt);

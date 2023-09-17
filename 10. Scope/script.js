// scope
var b = "Can i access this?";

function bb() {
  var a = "hello";
}

// Root scope (window)
var fun = 5;

function funerFunction() {
  // child scope
  var fun = "Byee";
  console.log(2, fun);
}

function funestFunction() {
  // child scope
  var fun = "AHHHHHH";
  console.log(2, fun);
}

function funFunction() {
  // child scope
  fun = "hellooo";
  console.log(1, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();

// ARRAY
var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];

var todosTwo = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];

// FOR LOOP
// var todosLength = todos.length;

// for (var i = 0; i < todosLength; i++) {
//   console.log(todos[i], i);
// }

function logTodos(todo, i) {
  console.log(todo, i);
}

// FOREACH LOOP
todos.forEach(logTodos);
todosTwo.forEach(logTodos);

// WHILE LOOP
// var counterOne = 10;
// while (counterOne > 0) {
//   console.log("while", counterOne);
//   counterOne--;
// }

// DO WHILE LOOP
// var counterTwo = 10;
// do {
//   console.log("do while", counterTwo);
//   counterTwo--;
// } while (counterTwo > 10);

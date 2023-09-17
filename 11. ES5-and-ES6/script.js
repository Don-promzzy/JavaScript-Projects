// Template strings
const name = "Sally";
const age = 34;
const pet = "horse";

// const greating = "Hello " + name + "you seem to be doing " + greating + "!";

const greetingBest = `Hello ${name} you seem to be ${
  age - 10
}. What a lovely ${pet} you have.`;

// Defauly arguments

function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} you seem to be ${
    age - 10
  }. What a lovely ${pet} you have.`;
}

// Symbol

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

// sym1 === sym2 = false

// Arrow function
function add(a, b) {
  return a + b;
}
// add(4,2)

const add2 = (a, b) => a + b;

add2(4, 2);
// 6

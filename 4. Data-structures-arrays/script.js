// Arrays
var list = ["tiger", "cat", "bear", "bird"];
console.log(list);

// Exercise Array
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
array.sort();
var newArray = array.concat(["Kiwi"]);
newArray.splice(0, 1);
newArray.reverse();

console.log(newArray);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);

var input = document.querySelector("#userInput");
var button = document.querySelector(".enter");
var ul = document.querySelector("ul");

const inputLength = () => {
  return input.value.length;
};

const createListElement = () => {
  var li = document.createElement("li");
  var deleteList = document.createElement("span");
  deleteList.className = "fa-solid fa-trash";
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteList);

  ul.appendChild(li);
  input.value = "";

  deleteList.addEventListener("click", function () {
    ul.removeChild(li);
  });
};

const addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement();
  }
};

const addListAfterKeypress = (e) => {
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
  }
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

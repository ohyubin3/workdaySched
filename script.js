let currentDay = moment().format("MMMM Do, YYYY - dddd");
$("#currentDay").text(currentDay);

let timeEl = document.querySelector(".whatTime");
let saveButtons = document.querySelectorAll(".saveBtn");
let textAreas = document.querySelectorAll(".whatTodo");
let container = document.querySelector(".container");
let todos = [];
console.log(textAreas);

renderStorage();
getText();

container.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    localStorage.setItem(
      `hourTodo${event.target.parentElement.dataset.hour}`,
      event.target.previousElementSibling.value
    );
    console.log(event.target.previousElementSibling.value);
    // console.log(event.target.parentElement.dataset.hour);
  }
});

function renderStorage() {
  for (let i = 8; i < 18; i++) {
    // localStorage.getItem(`whatTodo${i}`);
    // console.log(textAreas[i]);
    document.querySelectorAll(".whatTodo" + i);
    // console.log(localStorage.getItem`hourTodo${textAreas[i].value}`);
  }
}

function render() {
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var list = document.getElementsByClassName("whatTodo8");
    list.textContent = todo;
  }

  function getText() {
    var savedTodos = JSON.parse(localStorage.getItem(`hourTodo8`));
    if (savedTodos !== null) {
      todos = storedTodos;
    }
    render();
  }
}

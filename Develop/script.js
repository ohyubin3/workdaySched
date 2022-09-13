let currentDay = moment().format("MMMM Do, YYYY - dddd");
$("#currentDay").text(currentDay);

let timeEl = document.querySelector(".whatTime");
let toDoEl = document.querySelector(".whatTodo");
let saveButtons = document.querySelectorAll(".saveBtn");
let textAreas = document.querySelectorAll(".whatTodo");
let container = document.querySelector(".container");

renderStorage();

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

// for (let i = 0; i < saveButtons.length; i++) {
//   saveButtons[i].addEventListener("click", function (event) {
//     // console.log(event.target);
//     // console.log(textAreas[i].value);
//   });
// }

function renderStorage() {
  for (let i = 8; i < 17; i++) {
    // localStorage.getItem(`whatTodo${i}`);
    console.log(localStorage.getItem(`hourTodo$`{i}));
  }
}

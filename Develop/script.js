let currentDay = moment().format("MMMM Do, YYYY - dddd");
$("#currentDay").text(currentDay);

let timeEl = document.querySelector(".whatTime");
let toDoEl = document.querySelector(".whatTodo");
let saveButtons = document.querySelectorAll(".saveBtn");
let textAreas = document.querySelectorAll(".whatTodo");

console.log(saveButtons);

let whatTodo = "";

for (let i = 0; i < saveButtons.length; i++) {
  saveButtons[i].addEventListener("click", function (event) {
    console.log(event.target);
    console.log(textAreas[i].value);
    localStorage.setItem(`hourTodo${i}`, textAreas[i].value);
  });
}

// This is what the Save Button will do
// saveButtons.addEventListener("click", function (event) {
//   event.preventDefault();

//   let hourTodo = {
//     Hours: timeEl.textContent,
//     Todo: toDoEl.value.trim(),
//   };

//   localStorage.setItem("hourTodo", JSON.stringify(whatTodo));
//   console.log(whatTodo);
// });

// var arr = [
//   ` <button
//     type="button"
//     class="btn btn-primary col-xl-2 col-m-1 col-s-2 text-wrap saveBtn"
//   >
//     SAVE
//   </button>`, `<button
//   type="button"
//   class="btn btn-primary col-xl-2 col-m-1 col-s-2 text-wrap saveBtn"
// >
//   SAVE
// </button>`
//

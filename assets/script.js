var currentDate = document.getElementById("currentDay");
var exactTime = document.getElementById("exactTime");
var thValue = document.querySelector("thead");

currentDate.textContent = moment().format("[Today is ]MMMM Do[,] YYYY");
exactTime.textContent = moment().format("[The time now is ]hh:mm A");

var saveBtn = $(".saveBtn");

var textInput = $(".textInput");

var row = document.querySelector(".row");
var currentTime = moment().format("H");

var textArea = $("<textarea>");
textArea.text("");
textArea.appendTo(textInput);

function init() {
  formatDoc();

  saveBtn.on("click", function (event) {
    console.log(event.target);
    var thId = $(this).parent().siblings(".time")[0].id;
    var savedText = $(this).parent().siblings(".textInput").children()[0].value;
    console.log(thId);
    console.log(savedText);
    localStorage.setItem(thId, savedText);
  });
}

// using template literals below to grab the id's by their index point on the array.
function formatDoc() {
  for (var i = 8; i < 19; i++) {
    var timeValue = localStorage.getItem(`${i}am`);
    console.log($(`#${i}`));
    $(`#${i}`)[0].lastChild.value = timeValue;
    if (currentTime > i) {
      $(`#${i}`).addClass("past")
    } else if (currentTime < i) {
      $(`#${i}`).addClass("future")
    } else {
      $(`#${i}`).addClass("present")
    }
  }
    }

init();

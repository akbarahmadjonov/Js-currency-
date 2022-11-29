// let userName = prompt(
//   "Please let us know your name, we'll use your (name) to display with your currency."
// );
let elForm = document.querySelector(".form");
// Get form from document
let elInput = document.querySelector(".form-control");
// Get input from document
let elSelect = document.querySelector(".form-select");
// Get select from document
let elResult = document.querySelector(".result");
// h3 tag to display results

let USD = 11352;
let RUBL = 18515;
let EURO = 11760;
let totalResult = +"";

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Prevent webpage from auto-refresh
  elResult.textContent = elInput.value;

  if (elInput.value <= 0) {
    elResult.textContent = `Please ${userName}  enter a number upper than 0(zero)`;
  } else if (elSelect.value == "usd") {
    totalResult = elInput.value / USD;
    elResult.textContent = `$${totalResult.toFixed(2)}`;
    // USD
  } else if (elSelect.value == "rubl") {
    totalResult = elInput.value / RUBL;
    elResult.textContent = `₽${totalResult.toFixed(2)}`;
    // RUBL
  } else if (elSelect.value == "euro") {
    totalResult = elInput.value / EURO;
    elResult.textContent = `€${totalResult.toFixed(2)}`;
  }
});

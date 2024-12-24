const display = document.querySelectorAll("h1")[1];
const resDisplay = document.getElementById("oldres");

let res = "";
let old = "";

function append(input) {
  if (display.innerHTML === null || display.innerHTML === '0') {
      res = "";
      display.innerHTML = "";
  }
  res += input;
  display.innerHTML += input;
}

function calculate() {
  resDisplay.style.display = "block";
  resDisplay.innerHTML = display.innerHTML;
  display.innerHTML = eval(res);
}

function clearDisplay() {
  res = "";
  old = "";
  resDisplay.innerHTML = "";
  display.innerHTML = res;
}

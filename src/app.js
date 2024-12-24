let display = null;
let resDisplay = null;
let res;

document.addEventListener("DOMContentLoaded", ()=>{
    display =  document.querySelectorAll("h1")[1];
    resDisplay =  document.getElementById("oldres");
});

function append(input) {
  if (display.innerHTML === null || display.innerHTML === '0') {
      res = "";
      display.innerHTML = "";
  }
  resDisplay.style.display = "none";
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
  resDisplay.innerHTML = "";
  display.innerHTML = "0";
}

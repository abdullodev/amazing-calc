let calcInput = document.getElementById("calc_input");

let btns = document.querySelectorAll(".calc_btn");

function calculate() {
  calcInput.value = eval(calcInput.value);
}

for (let btn of btns) {
  btn.addEventListener("click", (e) => {
    btn_value = e.target.innerText;
    if (btn_value === "AC") {
      calcInput.value = "";
    } else calcInput.value += btn_value;
  });
}

function sinus() {
  calcInput.value = Math.sin(calcInput.value);
}

function cosinus() {
  calcInput.value = Math.cos(calcInput.value);
}

function tangenus() {
  calcInput.value = Math.tan(calcInput.value);
}

function logarifm() {
  calcInput.value = Math.log(calcInput.value);
}

function powElement() {
  calcInput.value = Math.pow(calcInput.value, 2);
}

function sqrtIldiz() {
  calcInput.value = Math.sqrt(calcInput.value, 2);
}

function e() {
  calcInput.value += 2.718;
}

function pi() {
  calcInput.value += 3.1415;
}

function factorial() {
  let number = calcInput.value;
  let f = 1;

  for (let i = 1; i <= number; i++) {
    f = f * i;
  }

  calcInput.value = f;
}

function backScape() {
  calcInput.value = calcInput.value.substr(0, calcInput.value.length - 1);
}

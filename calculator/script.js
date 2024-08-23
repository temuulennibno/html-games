const resultEl = document.querySelector("#resultTarget");

let inputValue = Number(resultEl.innerHTML);
let savedNumber;
let lastOperation;

let calculated = false;

const buttons = document.querySelectorAll(".button");

buttons.forEach((buttonEl) => {
  const buttonText = buttonEl.innerHTML;
  buttonEl.addEventListener("click", () => {
    if (buttonEl.classList.contains("symbol")) {
      if (["-", "+", "×", "÷"].includes(buttonText)) {
        if (savedNumber && lastOperation) {
          switch (buttonText) {
            case "+":
              inputValue = savedNumber + inputValue;
              savedNumber = inputValue;
              break;
            case "-":
              inputValue = savedNumber - inputValue;
              savedNumber = inputValue;
              break;
            case "×":
              inputValue = savedNumber * inputValue;
              savedNumber = inputValue;
              break;
            case "÷":
              inputValue = savedNumber / inputValue;
              savedNumber = inputValue;
              break;
          }
          calculated = true;
        } else {
          savedNumber = inputValue;
          inputValue = 0;
        }

        resultEl.innerHTML = inputValue;
        lastOperation = buttonEl;
      }
      if (buttonText === "C") {
        inputValue = 0;
        resultEl.innerHTML = inputValue;
      }
    } else {
      if (!calculated) {
        inputValue = Number(`${inputValue}${buttonEl.innerHTML}`);
        resultEl.innerHTML = inputValue;
      } else {
        inputValue = Number(`${buttonEl.innerHTML}`);
        resultEl.innerHTML = inputValue;
        calculated = false;
      }
    }
  });
});

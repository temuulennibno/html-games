const buttonEl = document.querySelector("button");
const targetEl = document.querySelector("#target");

let count = 0;

targetEl.innerHTML = count;

buttonEl.addEventListener("click", () => {
  count++;
  targetEl.innerHTML = count;
});

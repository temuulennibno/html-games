const rootEl = document.querySelector("#root");
rootEl.innerHTML = "Test";

const btnEl = document.querySelector("button");

btnEl.addEventListener("click", () => {
  rootEl.innerHTML = "Test!!!!";
});

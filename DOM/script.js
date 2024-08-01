const string = "Hello world!";
let reversing = false;

console.log("Hi");

// alert("Hi");
// const value = window.prompt("Utga oruulna uu");
// console.log(value);

// const value = window.confirm("Ta itgeltei baina uu?");
// console.log(value);

const changeColor = () => {
  const body = document.body;

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  body.style.backgroundColor = `rgb(${red},${green},${blue})`;
};

const interval = setInterval(changeColor, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

let index = 0;

setInterval(() => {
  if (!reversing) {
    document.body.innerHTML = string.slice(0, index + 2);
    index++;
    if (index === string.length) reversing = true;
  } else {
    document.body.innerHTML = string.slice(0, index - 1);
    index--;
    if (index === 0) reversing = false;
  }
}, 200);

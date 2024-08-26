let reversing = false;

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

let index = 0;
let typing = true;
const type = () => {
  const string = "Hello world!";
  const body = document.body;
  body.innerText = string.slice(0, index);
  if (index === string.length) {
    typing = false;
  }
  if (index === 0) {
    typing = true;
  }
  if (typing) {
    index++;
  } else {
    index--;
  }
};

setInterval(type, 200);

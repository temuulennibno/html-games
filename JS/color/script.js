const board = document.querySelector(".board");

const MAX_WIDTH = 500;

let ROW_COUNT = 3;
let COL_COUNT = 3;

let MARGIN = 100;

let SCORE = 0;

let TIMER = 60;

const updateScore = () => {
  const pointEl = document.querySelector("#point");
  pointEl.innerHTML = SCORE;
};

const updateCountdown = () => {
  const countdownEl = document.querySelector("#countdown");
  countdownEl.innerHTML = TIMER;
};

const gameover = () => {
  const gameoverEl = document.querySelector("#game-over");
  gameoverEl.className = "shown";
};

const countdown = () => {
  if (TIMER !== 0) {
    TIMER--;
    updateCountdown();
  } else {
    gameover();
  }
};

setInterval(countdown, 1000);

const draw = () => {
  board.innerHTML = "";
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const oddIndex = Math.floor(Math.random() * ROW_COUNT * COL_COUNT);

  for (let i = 0; i < ROW_COUNT * COL_COUNT; i++) {
    const tileEl = document.createElement("div");
    tileEl.className = "tile";
    tileEl.style.width = `${MAX_WIDTH / COL_COUNT}px`;
    tileEl.style.height = `${MAX_WIDTH / ROW_COUNT}px`;

    if (i === oddIndex) {
      tileEl.addEventListener("click", handleCorrectClick);
      tileEl.style.backgroundColor = `rgb(${red - MARGIN},${green - MARGIN},${
        blue - MARGIN
      })`;
    } else {
      tileEl.addEventListener("click", handleClick);
      tileEl.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }

    board.appendChild(tileEl);
    updateScore();
  }
};

const handleClick = () => {
  TIMER -= 5;
};

const handleCorrectClick = () => {
  SCORE++;
  TIMER += 2;
  if (SCORE % 3 === 0) {
    COL_COUNT++;
    ROW_COUNT++;
    if (MARGIN !== 20) {
      MARGIN -= 10;
    }
  }
  draw();
};

draw();

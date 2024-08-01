let ROWS = 2;
let COLS = 2;

let ROUND = 0;

let BOARD_SIZE = 600;

const board = document.querySelector(".board");

board.style.width = `${BOARD_SIZE}px`;
board.style.height = `${BOARD_SIZE}px`;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let differentTile = 0;

const drawBoard = (rows, cols, margin) => {
  board.innerHTML = "";
  const totalTiles = rows * cols;
  let differentTile = getRandomNumber(0, totalTiles - 1);

  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  const oddColor = `rgb(${red - margin}, ${green - margin}, ${blue - margin})`;

  let tileIndex = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.classList.add("tile");
      cell.style.width = `${BOARD_SIZE / cols}px`;
      cell.style.height = `${BOARD_SIZE / rows}px`;

      cell.setAttribute("data-index", tileIndex);

      if (tileIndex === differentTile) {
        cell.style.backgroundColor = oddColor;
      } else {
        cell.style.backgroundColor = color;
      }

      cell.addEventListener("click", (event) => {
        const clickedTile = event.target;
        const clickedIndex = parseInt(clickedTile.getAttribute("data-index"));

        if (clickedIndex === differentTile) {
          ROUND++;
          drawBoard(
            ROWS + Math.floor(ROUND / 3),
            COLS + Math.floor(ROUND / 3),
            100 - Math.floor(ROUND / 3) * 10
          );
        }
      });

      board.appendChild(cell);

      tileIndex++;
    }
  }
};

drawBoard(ROWS + ROUND, COLS + ROUND, 100 - ROUND * 10);

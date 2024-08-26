const PIANO_BOARD = document.querySelector("#piano");
const TOTAL_NOTES = 36;

const NOTES = ["C", "D", "E", "F", "G", "A", "B"];

const KEYBOARD = "123QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./";

let NOTE_DIGIT = 2;

for (let i = 0; i < TOTAL_NOTES; i++) {
  const keyboardKey = KEYBOARD[i];
  const tileEl = document.createElement("div");
  tileEl.className = "tile";

  const noteLetter = NOTES[i % 7];
  const tileNote = `${noteLetter}${NOTE_DIGIT}`;

  const audio = new Audio(`./piano-mp3/${tileNote}.mp3`);
  tileEl.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
  });

  tileEl.setAttribute("data-key", keyboardKey);

  tileEl.innerText = tileNote;
  PIANO_BOARD.appendChild(tileEl);
  if (noteLetter === "B") {
    NOTE_DIGIT++;
  }
}

window.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toUpperCase();
  if (KEYBOARD.includes(pressedKey)) {
    const tile = document.querySelector(`[data-key='${pressedKey}']`);
    tile.click();
    tile.classList.add("playing");
    setTimeout(() => {
      tile.classList.remove("playing");
    }, 300);
  }
});

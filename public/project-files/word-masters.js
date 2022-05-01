const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".scoreboard-letter");

async function init() {
  let currentRow = 0;
  let currentGuess = "";
  let done = false;
  let isShowingModal = true;

  const res = await fetch(
    "http://127.0.0.1:3000/get-word-of-the-day?random=true"
  );
  const { word: wordRes } = await res.json();
  const word = wordRes.toUpperCase();
  const wordParts = word.split("");
  isShowingModal = false;
  setLoading(isShowingModal);

  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      current = currentGuess.substring(0, currentGuess.length - 1) + letter;
    }

    letters[currentRow * ANSWER_LENGTH + currentGuess.length - 1].innerText =
      letter;
  }

  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      // do nothing
      return;
    }

    isShowingModal = true;
    setLoading(isShowingModal);
    const res = await fetch("http://localhost:3000/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: currentGuess }),
    });
    const { isValidWord } = await res.json();

    if (!isValidWord) {
      setLoading(false);
      setInfo("Not a valid word", isShowingModal);
      return;
    }
    isShowingModal = false;
    setLoading(isShowingModal);

    const guessParts = currentGuess.split("");
    const map = makeMap(wordParts);
    let allRight = true;

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
        // mark as correct
        letters[currentRow * ANSWER_LENGTH + i].classList.add("correct");
        map[guessParts[i]]--;
      }
    }

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
        // do nothing
      } else if (map[guessParts[i]] && map[guessParts[i]] > 0) {
        // mark as close
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add("close");
        map[guessParts[i]]--;
      } else {
        // wrong
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add("wrong");
      }
    }

    currentRow++;
    currentGuess = "";
    if (allRight) {
      // win
      isShowingModal = true;
      setInfo("you win", isShowingModal);
      done = true;
    } else if (currentRow === ROUNDS) {
      // lose
      isShowingModal = true;
      setInfo(`you lose, the word was ${word}`, isShowingModal);
      done = true;
    }
  }

  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[currentRow * ANSWER_LENGTH + currentGuess.length].innerText = "";
  }

  document.addEventListener("keydown", function handleKeyPress(event) {
    if (done || isShowingModal) {
      // do nothing;
      return;
    }

    const action = event.key;

    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
      // do nothing
    }
  });

  document
    .querySelector(".info-button")
    .addEventListener("click", function handleInfoButtonClick() {
      isShowingModal = false;
      setInfo("", isShowingModal);
    });
}

function isLetter(letter) {
  return letter.length === 1 && letter.match(/[a-zA-Z]/) !== null;
}

const loadingDiv = document.querySelector(".loading");
const infoDiv = document.querySelector(".info");
const infoTextDiv = document.querySelector(".info-text");
const spiralDiv = document.querySelector(".spiral");
function setLoading(isShowingModal) {
  loadingDiv.classList.toggle("hidden", !isShowingModal);
  spiralDiv.classList.toggle("hidden", !isShowingModal);
}
function setInfo(text, isShowingModal) {
  loadingDiv.classList.toggle("hidden", !isShowingModal);
  infoDiv.classList.toggle("hidden", !isShowingModal);
  infoTextDiv.innerText = text;
}

function makeMap(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
}

init();

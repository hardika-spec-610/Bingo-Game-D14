let numberNode;
let numberArray;
let numberConatiner = [];
let repeatedNumber = [];
function generateColor() {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += hexArray[Math.floor(Math.random() * 16)];
  }
  return `#${code}`;
}
// create an arr in range[1,...76]
const fillArray = function () {
  let arr = [];
  for (let i = 0; i < 76; i++) {
    arr.push(i + 1);
  }
  return arr;
};
// generate random index in the range of the arr.length
// get element in the arr under the index
// remove the element from the arr

const getRandomArray = function (range) {
  const randIndex = Math.floor(Math.random() * range.length);
  const random = range.splice(randIndex, 1)[0];
  // console.log("random", random);
  return random;
};

function createRandomNumber(range) {
  const random = getRandomArray(range);
  let divNodes = numberConatiner[random - 1];
  // console.log(numberConatiner);
  // console.log(divNodes);
  divNodes.classList.add("selected");
  divNodes.style.backgroundColor = generateColor();

  const userBoardNumber = document.querySelectorAll(
    ".user-board-margin .number"
  );
  userBoardNumber.forEach((cell) => {
    if (parseInt(cell.innerText) === random) {
      cell.classList.add("selected");
      cell.style.backgroundColor = generateColor();
    }
  });
}

function resetRandomNumber() {
  getRandomArray(range);
  return;
}

function generateUserBoard() {
  let inputValue = document.getElementById("numberInput").value;
  let userBoard = document.getElementById("user-board");
  if (parseInt(inputValue) > 0) {
    for (let i = 0; i < parseInt(inputValue); i++) {
      const range = fillArray();
      let board = document.createElement("div");
      // console.log(board);
      board.classList.add("user-board-margin");
      for (let i = 0; i < 24; i++) {
        const random = getRandomArray(range);
        board.innerHTML += `<div class='number'>${random}</div>`;
      }
      userBoard.appendChild(board);
    }
  }
}

function onLoadActions() {
  for (let number = 1; number <= 76; number++) {
    numberNode = document.createElement("div");
    // console.log(numberNode);
    numberNode.classList.add("number");
    numberNode.innerText = number;
    numberArray = document
      .getElementById("num-container")
      .appendChild(numberNode);
    numberConatiner.push(numberArray);
  }
  const randBtn = document.getElementById("random-number");
  const range = fillArray();
  randBtn.addEventListener("click", function () {
    createRandomNumber(range);
  });
  const userBoardBtn = document.getElementById("userBoardBtn");
  // userBoardBtn.onclick = generateUserBoard;
  userBoardBtn.addEventListener("click", function () {
    generateUserBoard();
  });
  // userBoardBtn.addEventListener("reset", function () {
  //   resetRandomNumber();
  // });
}

window.onload = onLoadActions;

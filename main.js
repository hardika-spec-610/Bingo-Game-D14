let n;
let numberNode;
let numberArray;
let numberConatiner = [];
function generateColor() {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += hexArray[Math.floor(Math.random() * 16)];
  }
  return `#${code}`;
}

function createRandomNumber() {
  n = Math.floor(Math.random() * 75) + 1;
  //   console.log(n);
  let divNodes = numberConatiner[n - 1];
  //   console.log(numberConatiner);
  //   console.log(divNodes);
  divNodes.classList.add("selected");
  divNodes.style.backgroundColor = generateColor();
}
function createNewBoard() {
  let inputValue = document.getElementById("numberInput").value;
  if (inputValue === "") {
    alert("Text cannot be empty!");
    return;
  }
  let numberConvert = parseFloat(inputValue);
  //   console.log(numberConvert);
  // if(numberConvert === 'Number'){

  // }
  for (let num of n) {
    let newBoard = document.createElement("div");
    newBoard.classList.add("number");
    newBoard.innerText = num;
    console.log("number,", newBoard.innerText);
  }

  //   newBoard.classList.add("board-container");
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
}

window.onload = onLoadActions;

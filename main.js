function createRandomNumber(event) {
  console.log(event);
}

function onLoadActions() {
  for (let number = 1; number <= 76; number++) {
    let numberNode = document.createElement("div");
    console.log(numberNode);
    numberNode.classList.add("number");
    numberNode.innerText = number;
    document.getElementById("num-container").appendChild(numberNode);
  }
}

window.onload = onLoadActions;

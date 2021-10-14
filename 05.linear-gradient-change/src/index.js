const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const middleButton = document.querySelector("#js-botton");

function updateColor() {
  const firstNum = Math.floor(Math.random() * 17);
  const secondNum = Math.floor(Math.random() * 17);

  drawGradientBackColor(firstNum, secondNum);
}

function drawGradientBackColor(firstNum, secondNum) {
  const firstColor = colors[firstNum];
  const secondColor = colors[secondNum];

  document.body.style.background = `linear-gradient(${firstColor}, ${secondColor})`;
}

updateColor();
middleButton.addEventListener("click", updateColor);

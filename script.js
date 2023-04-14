const button = document.querySelector("button");
const body = document.querySelector("body");

body.style.background = "aqua";
const color = [
  "red",
  "blue",
  "rgba(0,0,0,0.9)",
  "aqua",
  "yellow",
  "orangered",
  "purple",
  "pink",
  "royalblue",
];

button.addEventListener("click", changeBg);

function changeBg() {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.background = color[colorIndex];
  body.style.transition = ".5s";
}

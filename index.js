const btnClick = document.querySelector(".btn")
const color = document.querySelector(".colorName")
const container = document.querySelector(".container")

const colors = [
  "green",
  "red",
  "#ffffff",
  "#FFFF00",
  "rgba(255, 0, 255, 0.5)",
  "blue",
  "#00FF00",
  "rgba(0, 0, 255, 0.5)",
  "yellow",
  "#FFA500",
  "rgba(255, 165, 0, 0.5)",
]

let randomNumber = 1
btnClick.addEventListener("click", changeColor)
function changeColor() {
  randomNumber = Math.floor(Math.random() * 10)
  container.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
}
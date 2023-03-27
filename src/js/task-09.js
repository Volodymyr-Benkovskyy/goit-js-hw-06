function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
function paintBody() {
  const colorHex = getRandomHexColor();
  document.body.style.backgroundColor = colorHex;
  spanColor.textContent = colorHex;
}

button.addEventListener("click", paintBody);

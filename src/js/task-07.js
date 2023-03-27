const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function sizeFont(event) {
  console.log(event.currentTarget.value);
  text.style.fontSize = `${event.currentTarget.value}px`;
}

input.addEventListener("input", sizeFont);

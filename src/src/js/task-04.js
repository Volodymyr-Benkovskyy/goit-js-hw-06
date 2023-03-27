const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const counterDisplay = document.querySelector("#value");

function increment() {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counterDisplay.textContent = counterValue;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

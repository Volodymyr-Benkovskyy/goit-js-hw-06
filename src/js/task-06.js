const userInput = document.querySelector("#validation-input");

function validCheck(event) {
  console.log(event.currentTarget.value.length);
  userInput.classList.add("invalid");
  if (Number(userInput.dataset.length) === event.currentTarget.value.length) {
    userInput.classList.remove("invalid");
    userInput.classList.add("valid");
  }
}

userInput.addEventListener("blur", validCheck);

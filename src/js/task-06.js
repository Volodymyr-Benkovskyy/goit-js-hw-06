const userInput = document.querySelector("#validation-input");

function validCheck(event) {
  console.log(event.currentTarget.value.length);

  if (Number(userInput.dataset.length) === event.currentTarget.value.length) {
    userInput.classList.add("valid");
    userInput.classList.remove("invalid");
  } else {
    userInput.classList.add("invalid");
    userInput.classList.remove("valid");
  }
}

userInput.addEventListener("blur", validCheck);

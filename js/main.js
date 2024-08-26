const jsConfetti = new JSConfetti();

function handleModal(event) {
  event.preventDefault();

  const modalTitle = document.getElementById("modal-title");

  const palindromeResult = document.getElementById("palindrome-result");

  const userInput = document.getElementById("inputText").value;

  if (userInput == "" || userInput.length < 2) {
    modalTitle.innerText = "Invalid Entry";

    palindromeResult.innerText = "Please enter at least 2 characters";
  } else {
    checkForPalindrome(userInput);
  }

  var modal = new bootstrap.Modal(document.getElementById("palindromeModal"));

  modal.show();

  const closeModal = document.querySelector(".clear-text");

  const input = document.getElementById("inputText");

  closeModal.addEventListener("click", function () {
    input.value = "";
  });
}

function checkForPalindrome(userInput) {
  const modalTitle = document.getElementById("modal-title");

  const palindromeResult = document.getElementById("palindrome-result");

  let reversed = "";

  let filteredInput = userInput.replace(/[^a-z0-9]/gi, "").toLowerCase();

  for (let i = filteredInput.length - 1; i >= 0; i--) {
    reversed += filteredInput[i];
  }

  if (filteredInput == reversed) {
    modalTitle.innerText = "Congrats! That is a palindrome!";

    palindromeResult.innerText = `${filteredInput} is ${reversed} backwards!`;
    jsConfetti.addConfetti();
  } else {
    modalTitle.innerText = "Sorry! That is not a palindrome!";

    palindromeResult.innerText = `${filteredInput} is ${reversed} backwards!`;
  }
}

// Get the modal
var modal = document.getElementById("passwordModal");
var secretBtn = document.getElementById("wrong");
var audioTwo = document.getElementById('myAudioTwo');
var audioOrg = document.getElementById('myAudio');
var goHome = document.getElementById('goHome');
var maxAttempts = 3;
var attemptsLeft = maxAttempts;

goHome.addEventListener('click', function(){
  document.getElementById('withPalanggaBestMoments').style.display = 'none';
  document.querySelector(".container").style.display = "block";
  document.getElementById("passwordInput").value = "";
  attemptsLeft = 3;
  
});

secretBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  errorMessage.style.display = "";

});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    errorMessage.style.display = "";

  }
};

function checkPassword() {
  var enteredPassword = document.getElementById("passwordInput").value;
  var correctPassword = "11111";
  var errorMessage = document.getElementById("errorMessage");

  if (enteredPassword.trim() === "") {
    // If password field is empty, display the fill fields banner and return early
    // alert ("Ah tapulana wa jud gi type. Ge leave blank ra ang password");
    errorMessage.textContent = "Ah tapulana wa jud gi type ang code. Type pod!";
    errorMessage.style.display = "block";
    return;
  } else {
    // Hide the fill fields banner if the password field is not empty
    errorMessage.style.display = "none";
  }

  if (enteredPassword === correctPassword) {
    // If password is correct, do whatever you need to do (e.g., display content)
    audioTwo.play();
    audioOrg.pause();
    modal.style.display = "none";
    errorMessage.style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.getElementById("withPalanggaBestMoments").style.display = "block";
  } else {
    // If password is incorrect and the password field is not empty
    if (enteredPassword.trim() !== "") {
      attemptsLeft--;
    }
    document.getElementById("passwordInput").value = ""; // Clear the password field

    if (attemptsLeft <= 0) {
      // If no attempts left, close the modal
      modal.style.display = "none";
    } else {
      // Show the remaining attempts and error message
      errorMessage.textContent = "Taronga langga. You have " + attemptsLeft + "  attempts left.";
      errorMessage.style.display = "block";
    }
  }
}

//show model when click button
document.getElementById("secret").onclick = function () {
  modal.style.display = "block";
};
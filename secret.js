// Get the modal
var modal = document.getElementById("passwordModal");
var secretBtn = document.getElementById("wrong");
var audioTwo = document.getElementById('myAudioTwo');
var audioOrg = document.getElementById('myAudio');
var goHome = document.getElementById('goHome');

goHome.addEventListener('click', function(){
  document.getElementById('withPalanggaBestMoments').style.display = 'none';
  document.querySelector(".container").style.display = "block";
  
});



secretBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

var maxAttempts = 3;
var attemptsLeft = maxAttempts;

function checkPassword() {
  var enteredPassword = document.getElementById("passwordInput").value;
  var correctPassword = "2/11/2023";
  var errorMessage = document.getElementById("errorMessage");

  if (enteredPassword === correctPassword) {
    // If password is correct, do whatever you need to do (e.g., display content)
    audioTwo.play();
    audioOrg.pause();
    modal.style.display = "none";
    errorMessage.style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.getElementById("withPalanggaBestMoments").style.display = "block";
  } else {
    // If password is incorrect, reduce attempts and display error message
    attemptsLeft--;
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
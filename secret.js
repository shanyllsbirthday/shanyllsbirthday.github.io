// Get the modal
var modal = document.getElementById("passwordModal");
var secretBtn = document.getElementById("wrong");
var audioTwo = document.getElementById('myAudioTwo');
var audioOrg = document.getElementById('myAudio');
var goHome = document.getElementById('goHome');
var sched = document.getElementById('dyul');

var playPauseIcon = document.getElementById('playPauseIcon');


sched.addEventListener('click', function (){
  document.getElementById('schedule').style.display = 'block';
  document.querySelector(".container").style.display = "none";
  document.getElementById("withPalanggaBestMoments").style.display = "none";
});

var maxAttempts = 3;
var attemptsLeft = maxAttempts;

goHome.addEventListener('click', function () {
  location.reload();
  document.getElementById('withPalanggaBestMoments').style.display = 'none';
  document.querySelector(".container").style.display = "block";
  document.getElementById("passwordInput").value = "";
  audioOrg.play();
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

document.getElementById("passwordInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { 
    event.preventDefault(); // Prevent the default form submission behavior
    checkPassword(); 
  }
});

function checkPassword() {
  var enteredPassword = document.getElementById("passwordInput").value;
  var correctPassword = "2/11/2023";
  var errorMessage = document.getElementById("errorMessage");

  if (enteredPassword.trim() === "") {
    errorMessage.textContent = "Ah tapulana wa jud gi type ang code. Type pod!";
    errorMessage.style.display = "block";
    return;

  } else {
    errorMessage.style.display = "none";
  }

  if (enteredPassword === correctPassword) {
    audioTwo.play();
    audioOrg.pause();
    modal.style.display = "none";
    errorMessage.style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.getElementById("withPalanggaBestMoments").style.display = "block";

  } else {
    if (enteredPassword.trim() !== "") {
      attemptsLeft--;
    }
    document.getElementById("passwordInput").value = ""; // Clear the password field

    if (attemptsLeft <= 0) {
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
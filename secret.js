 // Get the modal
 var modal = document.getElementById("passwordModal");
 var secretBtn = document.getElementById("wrong");

secretBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
   if (event.target === modal) {
     modal.style.display = "none";
   }
 };


 function checkPassword() {
   var enteredPassword = document.getElementById("passwordInput").value;
   var correctPassword = "kenet";

   if (enteredPassword === correctPassword) {
     modal.style.display = "none";
     document.getElementById("errorMessage").style.display = "none";
     document.querySelector(".container").style.display = "none";
     document.getElementById("divToDisplay").style.display = "block";
   } else {
     document.getElementById("errorMessage").style.display = "block";
   }
 }

 //show model when click button
 document.getElementById("secret").onclick = function () {
   modal.style.display = "block";
 };
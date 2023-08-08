function toggleAudio() {
  var audio = document.getElementById('myAudio');
  var playPauseIcon = document.getElementById('playPauseIcon');

  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
  } else {
    audio.pause();
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
  }
}

var goToHomePlayAudio = document.getElementById('forHome');
var goTopPlayAudio = document.getElementById('goTop');

goToHomePlayAudio.addEventListener('click', function () {
  audioOrg.play();
  playPauseIcon.classList.remove('fa-play');
  playPauseIcon.classList.add('fa-pause');
});

goTopPlayAudio.addEventListener('click', function () {
  audioTwo.play();
});

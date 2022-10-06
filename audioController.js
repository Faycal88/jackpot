function playAudio() {
  var play = new Audio("./play.mp3");
  if (typeof play.loop === "Boolean") {
    play.loop = true;
    play.playbackRate = 2;
  } else {
    play.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.playbackRate = 0.5;
        this.play();
      },
      false
    );
  }
  play.play();
  setTimeout(() => {
    play.pause();
    play.currentTime = 0;
  }, 2000);
}

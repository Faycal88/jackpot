var table = ["cherry", "club", "diamond", "heart", "joker", "seven"];
var currentGame = [];
var Sessiongame = {};

function counts(currentGame) {
  var count = {};
  currentGame.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  return count;
}

function updateCurrentGame(Session, coins, score) {
  let Cvalue = coins + Sessiongame.coins;
  let Svalue = score + Sessiongame.score;
  let Sessionupdate = {
    id: Session.id,
    coins: Cvalue,
    score: Svalue,
  };
  document.getElementById("scoreShow").innerHTML = `${Svalue}`;
  document.getElementById("coinShow").innerHTML = `${Cvalue}`;
  localStorage.setItem("room", JSON.stringify(Sessionupdate));
}

function pickRandomElement(array) {
  let div = array[Math.floor(Math.random() * array.length)];
  currentGame.push(`${div}`);

  if (currentGame.length === 5) {
    let obj = counts(currentGame);

    Object.keys(obj).forEach(function (key) {
      switch (obj[key]) {
        case 3:
          var win = new Audio("./win.mp3");
          updateCurrentGame(Sessiongame, -10, 100);
          document.getElementById("scoreShow").innerHTML = "1000";
          document.querySelector(".loseScreen").style.display = "none";
          setTimeout(() => {
            document.querySelector(".winScreen").style.display = "block";
          }, 500);
          win.play();
          break;
        case 4:
          updateCurrentGame(Sessiongame, 20, 250);
          document.querySelector(".loseScreen").style.display = "none";
          setTimeout(() => {
            document.querySelector(".winScreen").style.display = "block";
          }, 1500);
          break;
        case 5:
          updateCurrentGame(Sessiongame, 500, 500);
          document.querySelector(".loseScreen").style.display = "none";
          setTimeout(() => {
            document.querySelector(".winScreen").style.display = "block";
          }, 1500);
          break;
        default:
          var lose = new Audio("./lose.mp3");
          updateCurrentGame(Sessiongame, -10, 0);
          lose.play();
          setTimeout(() => {
            document.querySelector(".loseScreen").style.display = "block";
          }, 500);
          break;
      }
    });
  }
  return div;
}

spin.addEventListener("click", (e) => {
  currentGame = [];

  playAudio();
  var i = 1;
  function looping() {
    setTimeout(function () {
      let selected = document.querySelector(`.${pickRandomElement(table)}${i}`);

      var topPos = selected.offsetTop || 0;

      const slotSpin = [{ transform: `translateY(-${topPos}px)` }];
      const time = {
        duration: 500,
        iterations: 1,

        fill: "forwards",
      };
      if (!slotSpin) {
        return;
      } else {
        document.querySelector(`.a${i}`).animate(slotSpin, time);
      }
      i++;
      if (i < 6) {
        looping();
      }
    }, 250);
  }
  looping();

  /*  var selected = document.querySelector(`.${pickRandomElement(table)}1`);
       var topPos = selected.offsetTop;
       const slotSpin = [{ transform: `translateY(-${topPos}px)` }];
       const time = {
         duration: 500,
         iterations: 1,

         fill: "forwards",
       };
       document.querySelector(".a1").animate(slotSpin, time); */
});

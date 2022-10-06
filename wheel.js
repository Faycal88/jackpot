function pickRandomNumberInDegrees() {
  const min = 0;
  const max = 2520;
  const delt = 4.166666666666667;
  const res = Math.floor(Math.random() * (max - min + 1)) + min;
  const num = res / 360;
  const deleteNum = Math.trunc(num);

  const finalResult = Math.ceil(((num - deleteNum) * 100) / delt);
  console.log(finalResult);

  return res;
}

spinWheel.addEventListener("click", (e) => {
  const wins = {
    0: "Null",
    1: "bankrupt",
    2: 300,
    3: 500,
    4: 400,
    5: 500,
    6: 800,
    7: "turn",
    8: 700,
    9: "free",
    10: 650,
    11: "bankrupt",
    12: 900,
    13: 500,
    14: 350,
    15: 600,
    16: 500,
    17: 400,
    18: 550,
    19: 800,
    20: 300,
    21: 700,
    22: 600,
    23: 500,
    24: "null",
  };
  function getMessage(wins) {
    let ttt = Object.keys(wins).forEach(function (key) {
      switch (key) {
        case 0:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          break;
        case 8:
          break;
        case 9:
          break;
        case 10:
          break;
        case 11:
          break;
        case 12:
          break;
        case 13:
          break;
        case 14:
          break;
        case 15:
          break;
        case 16:
          break;
        case 17:
          break;
        case 18:
          break;
        case 19:
          break;
        case 20:
          break;
        case 21:
          break;
        case 22:
          break;
        case 23:
          break;
        case 24:
          break;
        default:
          break;
      }
      return newContent;
    });
    console.log(ttt);
    return ttt;
  }
  var wheel = document.getElementById("actual_wheel");
  const wheelSpin = [
    { transform: `rotate(${pickRandomNumberInDegrees()}deg)` },
  ];
  const time = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };
  wheel.animate(wheelSpin, time);

  setTimeout(() => {
    var notif = document.getElementById("notify");
    var message = document.createElement("h1");
    message.className = "wellcomeMessage";
    var newContent = document.createTextNode("Try next time!");
    message.appendChild(newContent);
    notif.appendChild(message);
    document.getElementById;
    notif.style.display = "block";
  }, 3000);
});

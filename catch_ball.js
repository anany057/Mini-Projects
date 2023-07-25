var ballCord = document.getElementById('ball');
var playAreaCord = document.getElementById('play-area');

var PosX = ballCord.offsetLeft - 590;
var PosY = ballCord.offsetTop - 275;
var inPosX = ballCord.offsetLeft - 590;
var inPosY = ballCord.offsetTop - 275;

var count = 0;
ballCord.addEventListener('mouseover', function () {
  var positionsX = [20, 20,40,25,50];
  var positionsY = [20, 20,10,2,4];
  var Bc = ballCord.getBoundingClientRect();
  var Pc = playAreaCord.getBoundingClientRect();

  var index, index2; // Define index and index2 outside the if-else blocks

  if (count % 2 == 0 && Pc.right - Bc.right > 20) {
    index = Math.floor(Math.random() * positionsX.length);
    if (positionsX[index] + PosX === ballCord.offsetLeft) {
      index = (index + 1) % positionsX.length;
      PosX = PosX + positionsX[index];
      ballCord.style.marginLeft = PosX + 'px';
    } else {
      PosX = PosX + positionsX[index];
      ballCord.style.marginLeft = PosX + 'px';
    }
  } else if ( count % 2 != 0&&Bc.top-Pc.top>20) {
    index2 = Math.floor(Math.random() * positionsY.length);
    if (positionsY[index2] + PosY === ballCord.offsetTop) {
      index2 = (index2 + 1) % positionsY.length;
      PosY = PosY - positionsY[index2];
      ballCord.style.marginTop = PosY + 'px';
    } else {
      PosY = PosY - positionsY[index2];
      ballCord.style.marginTop = PosY + 'px';
    }
  }

  else {
PosX=inPosX;
PosY=inPosY;

ballCord.style.marginLeft = PosX + 'px';
ballCord.style.marginTop = PosY + 'px';
  }

  count++;
});

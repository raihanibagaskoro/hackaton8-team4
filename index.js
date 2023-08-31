let counterPlayer1 = 50
let counterPlayer2 = 50

const player1 = document.querySelector("#player1")
player1.innerHTML = `<h1>nilai 1: ${counterPlayer1}</h1>`

const player2 = document.querySelector("#player2")
player2.innerHTML = `<br><h1>nilai 2: ${counterPlayer2}</h1>`

const winner = document.querySelector(".winner")
const element = document.createElement('h1')
const button = document.querySelector("#mulai")

function playAudio() {
  const audio = document.getElementById("audio");
  audio.play();
}
// const music = document.createElement('audio')
function mulai(){
  let timeleft = 3;
  button.style.display = "none"
  let downloadTimer = setInterval(function () {
    if (timeleft <= -1) {
      // audio.innerHTML = '<audio id="audio" src="war.mp3" autoplay></audio>'
     
      clearInterval(downloadTimer);
      document.addEventListener('keyup', logKey);
      document.getElementById("countdown").style.display = "none"
    } else {
      document.getElementById("countdown").innerHTML = timeleft //+ "seconds remaining";
    }
    timeleft -= 1;
  }, 1000);
}


// var timeleft = 10;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//   } else {
//     document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//   }
//   timeleft -= 1;
// }, 1000);



// document.addEventListener('keyup', logKey)

function logKey(e) {

  if (counterPlayer1 === 0 || counterPlayer2 === 0) {

  } else {
    if (e.code === "KeyZ" && counterPlayer1 > 0) {
      playAudio()
      counterPlayer1--
      player1.innerHTML = `<h1>nilai 1: ${counterPlayer1}</h1>`
      if (counterPlayer1 === 0) {
        element.innerHTML = `Pemenangnya adalah player 1`
        winner.appendChild(element)
        document.querySelector("#countdown").style.display = "none";
        document.getElementById("audio").outerHTML = " "

      }
    }

    if (e.code === "KeyM" && counterPlayer2 > 0) {
      counterPlayer2--
      player2.innerHTML = `<h1>nilai 2: ${counterPlayer2}</h1>`
      if (counterPlayer2 === 0) {
        element.innerHTML = `Pemenangnya adalah player 2`
        winner.appendChild(element)
        document.querySelector("#countdown").style.display = "none";
        document.getElementById("audio").outerHTML = " "
      }
    }
  }
}






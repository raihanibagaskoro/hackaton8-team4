let counterPlayer1 = 50
let counterPlayer2 = 50

const player1 = document.querySelector("#player1")
// player1.innerHTML = `<h1>nilai 1: ${counterPlayer1}</h1>`

const player2 = document.querySelector("#player2")
// player2.innerHTML = `<h1>nilai 2: ${counterPlayer2}</h1>`

const winner = document.querySelector(".winner")
const element = document.createElement('h2')
const kata = document.createElement('h2')
const br = document.createElement("br")
const button = document.querySelector("#mulai")
const pemenang = document.querySelector("#pemenang")
// const btnoke = document.querySelector("#oke")
const img1 = document.querySelector("#kerupuk1")
const img2 = document.querySelector("#kerupuk2")
const petunjuk = document.querySelector(".petunjuk")

// console.dir(winner.style.backgroundColor);
function playAudio() {
  const audio = document.getElementById("audio");
  audio.play();
}

function playCongrats(){
  const audio1 = document.getElementById("audio1");
  audio1.play();
}

function playKrauk(){
  const audio2 = document.getElementById("audio2");
  audio2.play();
}

let nama1
let nama2

function oke(){
petunjuk.style.display = "none"

nama1 = prompt(`Masukkan nama Player 1`)
nama2 = prompt(`Masukkan nama Player 2`)

document.querySelector(`#player1`).innerText = nama1
document.querySelector(`#player2`).innerText = nama2
} 
// const music = document.createElement('audio')

function mulai(){
  let timeleft = 3;
  button.style.display = "none"
  let downloadTimer = setInterval(function () {
    if (timeleft < 0) {
      // audio.innerHTML = '<audio id="audio" src="war.mp3" autoplay></audio>'
      winner.style.backgroundColor = "rgba(255, 255, 255, 0)"
      playAudio()
      clearInterval(downloadTimer);
      document.addEventListener('keyup', logKey);
      document.getElementById("countdown").style.display = "none"
    } else {
      document.getElementById("countdown").innerHTML = timeleft
    }
    timeleft -= 1;
  }, 1000);
}

function logKey(e) {

  if (counterPlayer1 === 0 || counterPlayer2 === 0) {

  } else {
    if (e.code === "KeyZ" && counterPlayer1 > 0) {
      counterPlayer1--
      playKrauk()
      // player1.innerHTML = `<h1>nilai 1: ${counterPlayer1}</h1>`
      if (counterPlayer1 === 0) {
        playCongrats()
        pemenang.style.display = "block"
        winner.style.backgroundColor = "rgba(0, 0, 0, 0.676)"
        element.innerHTML = `${nama1} 🏅 <br><br> Kamu telah berhasil menjuarai lomba makan kerupuk antar HACKTIV `
        pemenang.appendChild(element)
        document.querySelector("#countdown").style.display = "none";
        document.getElementById("audio").outerHTML = " "
        img1.src = " "
        img2.src = " "
      }
    }

    if (e.code === "KeyM" && counterPlayer2 > 0) {
      counterPlayer2--
      playKrauk()
      // player2.innerHTML = `<h1>nilai 2: ${counterPlayer2}</h1>`
      if (counterPlayer2 === 0) {
        playCongrats()
        pemenang.style.display = "block"
        winner.style.backgroundColor = "rgba(0, 0, 0, 0.676)"
        element.innerHTML = `${nama2} 🏅 <br><br> Kamu telah berhasil menjuarai lomba makan kerupuk antar HACKTIV`
        pemenang.appendChild(element)
        document.querySelector("#countdown").style.display = "none";
        document.getElementById("audio").outerHTML = " "
        img1.src = " "
        img2.src = " "
      }
    }

    if (counterPlayer1 === 45){
      img1.src = "kerupuk2.png"
    }
    if (counterPlayer1 === 40){
      img1.src = "kerupuk3.png"
    }
    if (counterPlayer1 === 35){
      img1.src = "kerupuk4.png"
    }
    if (counterPlayer1 === 30){
      img1.src = "kerupuk5.png"
    }
    if (counterPlayer1 === 25){
      img1.src = "kerupuk6.png"
    }
    if (counterPlayer1 === 20){
      img1.src = "kerupuk7.png"
    }
    if (counterPlayer1 === 15){
      img1.src = "kerupuk8.png"
    }
    if (counterPlayer1 === 5){
      img1.src = "kerupuk9.png"
    }

    if (counterPlayer2 === 45){
      img2.src = "kerupuk2.png"
    }
    if (counterPlayer2 === 40){
      img2.src = "kerupuk3.png"
    }
    if (counterPlayer2 === 35){
      img2.src = "kerupuk4.png"
    }
    if (counterPlayer2 === 30){
      img2.src = "kerupuk5.png"
    }
    if (counterPlayer2 === 25){
      img2.src = "kerupuk6.png"
    }
    if (counterPlayer2 === 20){
      img2.src = "kerupuk7.png"
    }
    if (counterPlayer2 === 15){
      img2.src = "kerupuk8.png"
    }
    if (counterPlayer2 === 5){
      img2.src = "kerupuk9.png"
    }

  }
}






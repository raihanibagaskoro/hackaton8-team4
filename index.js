let counterPlayer1 = 10
let counterPlayer2 = 10

const player1 = document.querySelector("#player1")
player1.innerHTML = `<h1>nilai 1: ${counterPlayer1}</h1>`

const player2 = document.querySelector("#player2")
player2.innerHTML = `<h1>nilai 2: ${counterPlayer2}</h1>`

const element = document.createElement('h1')
const winner = document.querySelector(".winner")

document.addEventListener('keyup', logKey)

function logKey(e) {
    if (e.code === "KeyZ" && counterPlayer1 > 0) {
        counterPlayer1--
        player1.innerHTML = `<h1>nilai 1: ${counterPlayer1}</h1>`
        if (counterPlayer1 === 0) {
            element.innerHTML = `Pemenangnya adalah player 1`
            winner.appendChild(element)
        }
    }

    if (e.code === "KeyM" && counterPlayer2 > 0) {
        counterPlayer2--
        player2.innerHTML = `<h1>nilai 2: ${counterPlayer2}</h1>`
        if (counterPlayer2 === 0) {
            element.innerHTML = `Pemenangnya adalah player 2`
            winner.appendChild(element)
        }
    }
}




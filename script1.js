
/* Globala variabler */

let text = document.getElementById("userText")
let input = document.getElementById("userInput")
const button = document.getElementById("userButton")


/* TUTORIAL HALP */

function getUserInput() {
    console.log(input.value)
    text.innerHTML = 'Hej ' + input.value + 'luvan! Vad vill du göra nu?'

    button.onclick = event1
}

 function event1(){
     console.log('wohoo')

     text.innerHTML = input.value + ' låter som en dålig idé'
/*     let userInput = input.value
    let userText = document.getElementById('userText')

    userText = input.value + " låter som en dålig idé"
    text.HTML = userText */

}




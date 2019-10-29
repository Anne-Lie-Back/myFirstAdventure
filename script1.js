
/* Globala variabler */

/**
 * @param {string} userText - The text that shows the storys progress
 * @param {string} userInput - The text the user writes in the input-field
 * @param {object} basket - Contains the items the user has in their basket.
 * @param {number} healthPoints - The users HP
 */
let text = document.getElementById("userText")
let input = document.getElementById("userInput")
const button = document.getElementById("userButton")

let basket = {}
let userName
let healthPoints = 20


/* --- GAME PLAY --- */

function firstUserInput() {
    userName = input.value + "luvan"
    text.innerHTML += '<br>"' + userName + '! Har du glömt att du ska till mormor med lunch idag?! " <br> Du reser dig upp ur sängen och tänker :"Gaffel också" och slänger på dig dina kläder och springer ner. <br> <br> Väl där nere frågar din mor: "Vad tror du mormor vill ha att äta idag?"'
    
    button.onclick = event1
    
}

 function event1(){
     basket.food = input.value

     text.innerHTML += '<br> "Okej, jaja. Jag packar väl ner ' + basket.food + '. Vad tror du hon vill ha att dricka?'

     button.onclick = event2

    

}

function event2(){
    basket.drink = input.value

    text.innerHTML += '<br>"Tror du verkligen att hon dricker ' + basket.drink + '? Jaja, hon dricker säkert det mesta. <br>' +
                        userName + ' med ett HP på ' + healthPoints + ' ger sig ut i skogen med en korg med ' + basket.food + ' och ' + basket.drink + '. Målet är: mormors stuga!'

    button.onclick = event3
}






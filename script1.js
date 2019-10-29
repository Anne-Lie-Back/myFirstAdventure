
/* Globala variabler */

/**
 * @param {string} userText - The text that shows the storys progress
 * @param {string} userInput - The text the user writes in the input-field
 * @param {object} basket - Contains the items the user has in their basket.
 * @param {number} healthPoints - The users HP
 * @param {number} strength - Your strength point
 * @param {number} breadCrumbs - Number of excisting breadcrumbs through the game
 */
let text = document.getElementById("userText")
let input = document.getElementById("userInput")
const button = document.getElementById("userButton")
let wrongInput = '<br> Det där är ingen korrekt input. Försök igen!'

let basket = {}
let userName
let healthPoints = 20
let userStrength = 1
let breadCrumbles = 5


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
                        userName + ' med ett HP på ' + healthPoints + ' ger sig ut i skogen med en korg med ' + basket.food + ' och ' 
                        + basket.drink + '. Målet är: mormors stuga!' + 
                         '<br> <br> Du traskar ut i den gröna, frodiga skogen. Fåglar kvittrar och solens strålar skapar silar genom trädkronorna och skapar skuggspel över stigen. Plötsligt ser du en brödsmula! <br> Vill du plocka upp brödsmulan? J/N'

    button.onclick = pickBreadCrumble

}

function pickBreadCrumble(){
    
    if (input.value === 'j'){
        breadCrumbles = breadCrumbles - 1
        text.innerHTML += '<br> Du böjer dig ner och lockar upp brödsmulan i din hand. Du undersöker den noggrant, dammar av de fåtal gruskorn som satt på det, och slänger sedan in smulan i munnen. Medan du ändå är där nere så funderar du på om du ska göra en armhävning. <br> Gör du en armhävning? J/N' 
        
        button.onclick = doPushUp
    }

    else if (input.value === 'n'){
        text.innerHTML += '<br> Brödsmulan ser inte tillräckligt aptitlig ut. Du promenerar vidare.'
        button.onclick = event3
    }

    else{
        text.innerHTML += wrongInput
        button.onclick = pickBreadCrumble
    }
}

function doPushUp(){

    if(input.value === 'j'){
        userStrength = userStrength + 1
        text.innerHTML += '<br> Du gör en armhävning och känner dig som en riktig spännis.'
        button.onclick = event3
    }

    else if (input.value === 'n'){
        text.innerHTML += '<br> Äsh, trams. Vem i sitt sinnes fulla bruk gör en armhävning mitt ute i skogen?'
        button.onclick = event3
    }

    else{
        input.value += wrongInput
        button.onlick = doPushUp
    } 

    
}






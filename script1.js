
/* Globala variabler */

/**
 * @param {string} userText - The text that shows the storys progress
 * @param {string} userInput - The text the user writes in the input-field
 * @param {array} basket - Contains the items the user has in their basket.
 * @param {number} healthPoints - The users HP
 * @param {number} strength - Your strength point
 * @param {number} breadCrumbs - Number of excisting breadcrumbs through the game
 * 
 */
let text = document.getElementById("userText")
let input = document.getElementById("userInput")
const button = document.getElementById("userButton")
let wrongInput = '<br> Det där är ingen korrekt input. Försök igen!'

let basket = []
let userName
let healthPoints = 20
let userStrength = 1
let breadCrumbles = 5


/* --- GAME PLAY --- */


function initialInput(){
    userName = input.value + "luvan"
    text.innerHTML += '<br>"' + userName + '! Har du glömt att du ska till mormor med lunch idag?! " <br> Du reser dig upp ur sängen och tänker :"Gaffel också" och slänger på dig dina kläder och springer ner. <br> <br> Väl där nere frågar din mor: "Vad tror du mormor vill ha att äta idag?"'
    
    button.onclick = event1
    
}

 function event1(){
     basket.push(input.value)

     text.innerHTML += '<br> "Okej, jaja. Jag packar väl ner ' + basket[0] + '. Vad tror du hon vill ha att dricka?'

     button.onclick = event2
}

function event2(){
    basket.push(input.value)

    text.innerHTML += '<br>"Tror du verkligen att hon dricker ' + basket[1] + '? Jaja, hon dricker säkert det mesta. <br>' +
                        userName + ' med ett HP på ' + healthPoints + ' ger sig ut i skogen med en korg med ' + basket[0] + ' och ' 
                        + basket[1] + '. Målet är: mormors stuga!' + 
                         '<br> <br> Du traskar ut i den gröna, frodiga skogen. Fåglar kvittrar och solens strålar skapar silar genom trädkronorna och skapar skuggspel över stigen. Plötsligt ser du en brödsmula! <br> Vill du plocka upp brödsmulan? J/N'

    button.onclick = pickBreadCrumble

}

/**
 * -- BREADCRUMB AND PUSHUP --
 * 
 * @param {string} story - The text that takes the user further in the gameplay after pickBreadCrumble and doPushUp
 */
const story = 'Skogen bjuder på många spännande dofter, men inget doftar så gott som din mormors kanelbullar. Du börjar fantisera om alla de kanelbullar du hoppas få äta när du kommer fram till mormors stuga. Bredvid ett träd precis vid stigen ser du en svamp. Mormor gillar svamp. Plocka upp den? (J/N)'

function pickBreadCrumble(){
    
    if (input.value === 'j'){
        breadCrumbles = breadCrumbles - 1
        text.innerHTML += '<br> Du böjer dig ner och lockar upp brödsmulan i din hand. Du undersöker den noggrant, dammar av de fåtal gruskorn som satt på det, och slänger sedan in smulan i munnen. Medan du ändå är där nere så funderar du på om du ska göra en armhävning. <br> Gör du en armhävning? J/N' 
        button.onclick = doPushUp
        
    }

    else if (input.value === 'n'){
        text.innerHTML += '<br> Brödsmulan ser inte tillräckligt aptitlig ut. Du promenerar vidare.' + story
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
        text.innerHTML += '<br> Du gör en armhävning och känner dig som en riktig spännis.' + story
        button.onclick = event3
    }

    else if (input.value === 'n'){
        text.innerHTML += '<br> Äsh, trams. Vem i sitt sinnes fulla bruk gör en armhävning mitt ute i skogen?' + story
        button.onclick = event3
    }

    else{
        input.value += wrongInput
        button.onlick = doPushUp
    }    
}

function event3(){
    
    if (input.value === 'j'){
            text.innerHTML += 'Den ser stor och svampig ut. Vill du äta den på stubben? (J/N)'
            console.log('test svamp')
            button.onclick = eatMushroom
    }
        
    else if (input.value === 'n'){
            text.innerHTML += 'Nej fy, även om din mormor gillar svamp så hatar du att ens vidröra dess svampiga yta. Du ryser till vid tanken och springer vidare innan tanken hinenr ikapp igen'
            basket.push('svamp')
            console.log(basket)
            button.onclick = event4
    }

    else{
            text.innerHTML += wrongInput
            button.onclick = event3
        
    }

}

function eatMushroom(){
    
    if (input.value === 'j'){
            youDied()
    }
        
    else if(input.value === 'n'){
            text.innerHTML += 'Du lägger ner svampen i korgen bland ' + basket[0] + ' och ' + basket[1] + ' och beger dig vidare in i skogen.'
            button.onclick = event4
    }

    else{
            text.innerHTML += wrongInput
    }
}

function youDied(){
    text.innerHTML += '<p class="dead"><br> YOU DIEDED!</p> <p> Vill du spela igen? (J/N)</p>'
    button.onclick = startOver

    function startOver(){
    switch (input.value) {
        case 'j':
            text.innerHTML = 'En solig dag i augusti vaknar du av att din mamma ropar på dig. (Skriv ditt namn)'
            button.onclick = initialInput
            break

        case 'n':
            text.innerHTML = '<p> Så spelet var för svårt för dig? Det är okej. Du är välkommen tillbaka när du blivit lite smartare. </p>'
            break
        default:
            text.innerHTML = wrongInput
    }
    }
}

function event4(){
    console.log('sist')
}
/**
 * @param {string} wolfDialog - story-text, the initial wolf-dialog after user is "done" with pickUpBreadCrumble and doPushUp
 */
const wolfDialog = '<br><br> Skogen bjuder på många spännande ljud. Fåglar som kvittrar, vinden som viner genom trädtopparna, en buske som prasslar medan en varg stiger ut ur den... ... ... <br> EN BUSKE SOM PRASSLAR MEDAN EN VARG STIGER UR DEN?!' +
'<br> Vargen synar dig från top till tå, sedan öppnar han sitt tandprydda gap och börjar tala med sin hesa whiskeyröst <br> "Nämen hej kompis. Vad heter du?"' + 
'<br> Din mamma har alltid sagt till dig att du inte ska prata med främmande människor, men hon sa inget om djur. <br> "Jag heter ' + userName + '"'







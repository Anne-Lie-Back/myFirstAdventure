
/* Globala variabler */

/**
 * @param {string} userText - The text that shows the storys progress
 * @param {string} userInput - The text the user writes in the input-field
 * @param {array} basket - Contains the items the user has in their basket.
 * @param {number} healthPoints - The users HP
 * @param {number} strength - Your strength point
 * @param {number} breadCrumbs - Number of excisting breadcrumbs through the game
 * @param {boolean} wolf - Stores if you told the wolf the truth or not
 * @param {Number} breadCrumbsLeft - tells how many crumbs there's left to find and tells the programme where you are in the story/series of head-functions
 * @param {Boolean} mushroom - tells if the user has the mushroom
 * @param {Boolean} pikachu - tells if user has Pikachu or not
 * @param {Boolean} stick - tells if the user has a stick or not
 */
let text = document.getElementById("userText")
let input = document.getElementById("userInput")
const button = document.getElementById("userButton")
let wrongInput = '<br> Det där är ingen korrekt input. Försök igen!'

let basket = []
let userName
let healthPoints = 20
let userStrength = 1
let breadCrumbs = 5
let breadCrumbsLeft = 5
let mushroom = false
let wolf = true
let pikachu = false
let stick = false




/**
 *  --- GAME PLAY ---
 */


/**
 * --- USER IS AT HOME ---
 * First input from user. Sets name of character and collects food and drink in basket
 */
function initialInput(){
    userName = input.value + "luvan"
    text.innerHTML += '<p>"' + userName + '! Har du glömt att du ska till mormor med lunch idag?! " <br> Du reser dig upp ur sängen och tänker: '+
    '"Gaffel också" och slänger på dig dina kläder och springer ner. <br> <br> Väl där nere frågar din mor: "Vad tror du mormor vill ha att äta idag?"</p>'
    
    button.onclick = event1
    
}

 function event1(){
     basket.push(input.value)

     text.innerHTML += '<p> "Okej, jaja. Jag packar väl ner ' + basket[0] + '. Vad tror du hon vill ha att dricka? </p>'

     button.onclick = event2
}

/**
 * --- GOOD BYE MOM. 
 * The beginning of the user's journey. 
 * The user finds its first breadcrumb
 */
function event2(){
    basket.push(input.value)

    text.innerHTML += '<p>"Tror du verkligen att hon dricker ' + basket[1] + '? Jaja, hon dricker säkert det mesta. <br>' +
                        userName + ' med ett HP på ' + healthPoints + ' ger sig ut i skogen med en korg med ' + basket[0] + ' och ' 
                        + basket[1] + '. Målet är: mormors stuga!' + 
                         '<br> <br> Du traskar ut i den gröna, frodiga skogen. Fåglar kvittrar och solens strålar som silar genom trädkronorna och skapar skuggspel över stigen. </p>'

    seeBreadCrumb(event3)
}

/**
 * 
 * The Mushroom-functions. Will the user pick it up and will the user eat it or store it in their basket
 */

function event3(){

    text.innerHTML += '<p> Skogen bjuder på många spännande dofter, men inget doftar så gott som din mormors kanelbullar. Du börjar fantisera om alla de kanelbullar du hoppas få äta när du kommer fram till mormors stuga. Bredvid ett träd precis vid stigen ser du en svamp. Mormor gillar svamp. Plocka upp den? (J/N)</p>'
    
    button.onclick = pickUpMushroom
    
    function pickUpMushroom(){

        switch(input.value) {

            case 'j':
            case 'J':
                text.innerHTML += '<p> Den ser stor och svampig ut. Vill du äta den på stubben? (J/N) </p>'
                console.log('test svamp')
                button.onclick = eatMushroom

                function eatMushroom(){
        
                    switch(input.value){

                        case 'j':
                        case 'J':
                            youDied()
                            break

                        case 'n':
                        case 'N':
                                text.innerHTML += '<p> Du lägger ner svampen i korgen bland ' + basket[0] + ' och ' + basket[1] + ' och beger dig vidare in i skogen. </p>'
                                
                                basket.push('svamp')
                                mushroom = true                             
                                event4()
                                break
                        
                        default:
                                text.innerHTML += wrongInput 
                    }
                }
            break
        
            
        case 'n':
        case 'N':
            text.innerHTML += 'Nej fy, även om din mormor gillar svamp så hatar du att ens vidröra dess svampiga yta. Du ryser till vid tanken och springer vidare innan tanken hinenr ikapp igen'
            
            event4()
            break

        default:
                text.innerHTML += wrongInput
                
                button.onclick = event3       
        }
    }

}

/**
 * --- WOLF DIALOG ---
 * the user's dialog with the fluffy wolf.
 * These series of function tells and stores if you told the wolf the truth or not
 */

function event4(){
    
    text.innerHTML += '<p><br> Skogen bjuder på många spännande ljud. Fåglar som kvittrar, vinden som viner genom trädtopparna, en buske som prasslar medan en varg stiger ut ur den... ... ... <br> EN BUSKE SOM PRASSLAR MEDAN EN VARG STIGER UR DEN?!' +
    '<br> Vargen synar dig från top till tå, sedan öppnar han sitt tandprydda gap och börjar tala med sin hesa whiskeyröst <br> "Nämen hej kompis. Vad heter du?"' + 
    '<br> Din mamma har alltid sagt till dig att du inte ska prata med främmande människor, men hon sa inget om djur. <br> "Jag heter ' + userName + 
    '" <br> "MMMMjjjahajahaja...du ' + userName + ', vad är det du har i korgen?" <br> Du tittar ner i din korg och räknar upp innehållet: "' +
    basket + '" <br> "MMmmmåhååå, kan man få smaka något? <br> "Nej, maten jag har i min korg ska jag ge till mormor" <br> Vargen tittar på dig med surmulen blick.' +
    'Du börjar bli osäker, var det främmande människor eller främlingar överhuvudtaget man inte skulle prata med? Ska du berätta vad mormor bor (S) eller ska du ljuga för vargen? (F) </p>'
     
    button.onclick  = tellTruth

    function tellTruth(){

        switch(input.value){
            case 's':
            case 'S':
                text.innerHTML += '<p> Du bestämmer dig för att allt fluffigt går att lita på och berättar sanningen: <br> "Hon bor i andra sidan skogen, om du tar höger vid stigen" </p>'

                seeBreadCrumb(event5)
                break

            case 'f':
            case 'F':
                text.innerHTML += '<p> Du bestämmer dig för att även om vargen är söt och fluffig så är han en främling. För att dämpa skadan som redan är skedd så bestämmer du dig för att dra en vit lögn. Skriv en lögn att lura vargen med: </p>'
                wolf = false
                
                button.onclick = tellLie
                break
            
            default:
                text.innerHTML += wrongInput
                
                button.onclick = tellTruth
        }      
    }

    function tellLie(){
        
        text.innerHTML += '<br> "'+ input.value + '" <br> "Oj, då har du en bit att gå. Bäst att låta dig traska vidare. Farväl ' + userName + '!"'
        
        seeBreadCrumb(event5)
    }
}


function event5(){

    text.innerHTML += '<p><br> EN VILD PIKACHU UPPENBARAR SIG! <br> Vad vill du göra: fånga, mata eller fly?</p>'

    button.onclick = pikachuEvent
}

/**
 * Event6 is a function where the user can choose to pick up a stick or not.
 */

function event6(){
    switch(input.value){
        case 'j':
        case 'J':
            stick = true
            basket.push(pinne)

            text.innerHTML += '<p> Du plockar upp den och lägger den i din korg. I din korg ser du nu massa bra grejer som: ' + basket + '. </p>'

            console.log(basket)
            event7()

        case 'n':
        case 'N':

        text.innerHTML += '<p> Du gillar inte pinnar, dessutom kan de vara farliga. Man kan ju faktiskt snubbla på den. </p>'

        event7()

        default:
            text.innerHTML += wrongInput
    }
}

function event7(){
    text.innerHTML = '<p> Du kommer fram till ett vägskäl </p>'

}









/**
 * ----- DEAD ----
 * Function played when user dies
 */

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

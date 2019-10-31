
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
let wolf = true
let breadCrumbsLeft = 5


/**
 *  --- GAME PLAY ---
 */


/**
 * --- USER IS AT HOME ---
 * First input from user
 */
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

/**
 * --- GOOD BYE MOM. 
 * The beginning of the user's journey. 
 * The user finds its first breadcrumb
 */
function event2(){
    basket.push(input.value)

    text.innerHTML += '<br>"Tror du verkligen att hon dricker ' + basket[1] + '? Jaja, hon dricker säkert det mesta. <br>' +
                        userName + ' med ett HP på ' + healthPoints + ' ger sig ut i skogen med en korg med ' + basket[0] + ' och ' 
                        + basket[1] + '. Målet är: mormors stuga!' + 
                         '<br> <br> Du traskar ut i den gröna, frodiga skogen. Fåglar kvittrar och solens strålar som silar genom trädkronorna och skapar skuggspel över stigen.'

    breadCrumbsLeft = 4

    seeBreadCrumb()
}



function event3(){

    text.innerHTML += 'Skogen bjuder på många spännande dofter, men inget doftar så gott som din mormors kanelbullar. Du börjar fantisera om alla de kanelbullar du hoppas få äta när du kommer fram till mormors stuga. Bredvid ett träd precis vid stigen ser du en svamp. Mormor gillar svamp. Plocka upp den? (J/N)'
    
    button.onclick = pickUpMushroom
    
    function pickUpMushroom(){

        if (input.value === 'j'){
                text.innerHTML += 'Den ser stor och svampig ut. Vill du äta den på stubben? (J/N)'
                console.log('test svamp')
                button.onclick = eatMushroom

                function eatMushroom(){
        
                    if (input.value === 'j'){
                            youDied()
                    }
                        
                    else if(input.value === 'n'){
                            text.innerHTML += 'Du lägger ner svampen i korgen bland ' + basket[0] + ' och ' + basket[1] + ' och beger dig vidare in i skogen.'
                            basket.push('svamp')
                            
                            event4()
                    }
                
                    else{
                            text.innerHTML += wrongInput
                    }
                }
        }
            
        else if (input.value === 'n'){
                text.innerHTML += 'Nej fy, även om din mormor gillar svamp så hatar du att ens vidröra dess svampiga yta. Du ryser till vid tanken och springer vidare innan tanken hinenr ikapp igen'
                event4()
        }

        else{
                text.innerHTML += wrongInput
                button.onclick = event3       
        }
    }

}

/**
 * --- WOLF DIALOG ---
 * the user's dialog with the fluffy wolf
 */

function event4(){
    text.innerHTML += '<br><br> Skogen bjuder på många spännande ljud. Fåglar som kvittrar, vinden som viner genom trädtopparna, en buske som prasslar medan en varg stiger ut ur den... ... ... <br> EN BUSKE SOM PRASSLAR MEDAN EN VARG STIGER UR DEN?!' +
    '<br> Vargen synar dig från top till tå, sedan öppnar han sitt tandprydda gap och börjar tala med sin hesa whiskeyröst <br> "Nämen hej kompis. Vad heter du?"' + 
    '<br> Din mamma har alltid sagt till dig att du inte ska prata med främmande människor, men hon sa inget om djur. <br> "Jag heter ' + userName + 
    '" <br> "MMMMjjjahajahaja...du ' + userName + ', vad är det du har i korgen?" <br> Du tittar ner i din korg och räknar upp innehållet: "' +
    basket + '" <br> "MMmmmåhååå, kan man få smaka något? <br> "Nej, maten jag har i min korg ska jag ge till mormor" <br> Vargen tittar på dig med surmulen blick.' +
    'Du börjar bli osäker, var det främmande människor eller främlingar överhuvudtaget man inte skulle prata med? Ska du berätta vad mormor bor (S) eller ska du ljuga för vargen? (F)'
     
    button.onclick  = tellTruth

    function tellTruth(){
        switch(input.value){
            case 's' || 'S':
                text.innerHTML += 'Du bestämmer dig för att allt fluffigt går att lita på och berättar sanningen: <br> "Hon bor i andra sidan skogen, om du tar höger vid stigen"'

                seeBreadCrumb()
                break

            case 'f' || 'F':
                text.innerHTML += 'Du bestämmer dig för att även om vargen är söt och fluffig så är han en främling. För att dämpa skadan som redan är skedd så bestämmer du dig för att dra en vit lögn. Skriv en lögn att lura vargen med'
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
        
        breadCrumbsLeft = 3
        seeBreadCrumb()


    }
}

function event5(){
    text.innerHTML += 'hello'
}

/**
 * ---- BREADCRUMB LOOP ---
 * functions played everytime the user sees a breadcrumb
 */

function seeBreadCrumb(){

    text.innerHTML += '<br> Din färd mot mormors stuga fortsätter. På stigen ser du en brödsmula. Plocka upp brödsmulan? (J/N)'

    button.onclick = pickBreadCrumb

    function pickBreadCrumb(){
    
        if (input.value === 'j'){
            breadCrumbles = breadCrumbles - 1
            text.innerHTML += '<br> Du böjer dig ner och lockar upp brödsmulan i din hand. Du undersöker den noggrant, dammar av de fåtal gruskorn som satt på det, och slänger sedan in smulan i munnen. Medan du ändå är där nere så funderar du på om du ska göra en armhävning. <br> Gör du en armhävning? J/N' 
            button.onclick = doPushUp

            function doPushUp(){
                console.log('Gör en armhävning')
                switch(input.value){
                case 'j':
                    userStrength = userStrength + 1
                    text.innerHTML += '<br> Du gör en armhävning och känner dig som en riktig spännis.'
                    eventDirection()
                    break
                
            
                case 'n':
                    text.innerHTML += '<br> Äsh, trams. Vem i sitt sinnes fulla bruk gör en armhävning mitt ute i skogen?'
                    eventDirection()
                    break
                
            
                default:
                    input.value += wrongInput
                    button.onlick = doPushUp
                }
            }
        }

        else if (input.value === 'n'){
            text.innerHTML += '<br> Brödsmulan ser inte tillräckligt aptitlig ut. Du promenerar vidare.'
            eventDirection()
            
        }

        else{
            text.innerHTML += wrongInput
            button.onclick = pickBreadCrumble
        }
    }

    function eventDirection(){
        switch (breadCrumbsLeft){

            case 4:
                button.onclick = event3
                break

            case 3:
                button.onclick = event5
                break

            default:
                console.log('Nu blev det fel')

        }
    }
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

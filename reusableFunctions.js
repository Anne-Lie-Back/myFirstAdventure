
/**
 * ALL GLOBAL VARIABLES IN ALPHABETICAL ORDER
 * 
 * @param {Array} basket - Contains the items the user has in their basket.
 * @param {Number} breadCrumbs - Number of excisting breadcrumbs through the game
 * @param {String} drink - chosen drink
 * @param {String} food - chosen food
 * @param {Number} healthPoints - The user's HP
 * @param {Boolean} hunter - if true the hunter will come to grandma's house
 * @param {String} input - The user's input
 * @param {Boolean} itemWasFound - tells if item can be found in the basket
 * @param {Number} itemIndex - Where to start de search 
 * @param {Boolean} mushroom - tells if the user has the mushroom. If true user has mushroom
 * @param {Boolean} pikachu - tells if user has Pikachu or not. if true user has pikachu
 * @param {Boolean} pikachuFed tells if Pikachu has been fed with food or not
 * @param {String} randomNumber - helps to store a random number that's used to determine of the user is successful in capturing Pikachu or not.
 * @param {Boolean} stick - tells if the user has a stick or not. If true user has stick
 * @param {String} storyBeforeStickEventSad - a string to lead user on to the stick-function
 * @param {String} storyBeforeStickEventSad - a string to lead user on to the stick-function
 * @param {Number} strength - Your strength point
 * @param {Number} witchHP - declares the amount of HP the witch has
 * @param {Number} witchStrength - declares the strength of the witch
 * @param {Boolean} witchAlive - tells if the witch is alive
 * @param {Boolean} wolf - Stores if you told the wolf the truth or not. If true, you lied to the wolf and he will be present att the gingerbread house
 * @param {Number} wolfHP - declares the healt points of the wolf
 * @param {Number} wolfStrength - declares the wolf's strength
 * @param {String} wrongInput - a string to display if input is wrong
 *
 */


let basket = []
let breadCrumbs = 5
let drink
let food
let healthPoints = 20
let hunter = false
let itemIndex = -1
let itemWasFound = false
let mushroom = false
let pikachu = false
let pikachuFed = false
let pikachuFight = false
let stick = false
let stickThrown = false
const storyBeforeStickEventHappy = ' Vilken härlig dag! Inte bara solen skiner, utan du har också lyckats skaffa dig en gullig kompis. Nynnandes på en' + 
                                    'trevlig truddelutt och blicken höjd i en nöjd manér så missar du totalt pinnen som ligger utbredd över stigen. ' + 
                                    '<br> SCHMACK! (-1 HP) Det där gjorde ont tänkte du, vänder dig bakåt och ser pinnen som orsakade olyckan. Vill du plocka upp den? (J/N) </p>'
const storyBeforeStickEventSad = '<p> Med tungt hjärta promenerar du vidare, gråten nära till hands. Aldrig har något så skrämmande hänt dig förut.' + 
                                    'Men blicken djupt sjunken i marken framför dig så är det svårt att missa den pinne som ligger tvärs över vägen.' + 
                                    'Vill du plocka upp den? (J/N)</p>';

let userName
let userStrength = 1
let witch = true
let witchHP = 20
const witchStrength = 1
let wolf = true
let wolfAtGrandma = false
let wolfHP = 30
let wolfStrength = 4
let wrongInput = '<br> Det där är ingen korrekt input. Försök igen!'

/**
 * --- BELOW YOU CAN FIND REUSED FUNCTIONS
 */

/**
 * This function helps managing the inventory and (if needed) splices of the used item out of the basket-array
 * 
 */
function useBasketItem(input){


    for (const index in basket){
        const item = basket[index]
        if (item == input) {
            itemWasFound = true
            itemIndex = index
            break
        }
    }

    if (itemWasFound){
        basket.splice(itemIndex, 1)
    }

    return itemWasFound
}

/**
 * Randomizes a random number for the random events
 */
function getRandomNumber(randomNumber){
    return randomNumber = Math.round( Math.random() * 4 )
    
}


/**
 * ----- DEAD ----
 * Function played when user dies. Empties basket and gives you the option to play again
 */
function youDied(){

    basket = []
    text.innerHTML += '<p class="dead"><br> YOU DIEDED!</p> <p> Vill du spela igen? (J/N)</p>'
    button.onclick = startOver

    /**
     * Function for choosing if you want to play again or not. Empties text-field
     */
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

/**
 * When the user manage to come to the end of the story without dying. There's multipal endings.
 */
function theEnd(){
    text.innerHTML += '<p class="theEnd"><br> <br> THE END </p>'
    showNews()
}

/**
 * Shows what happens if you eat to many breadcrumbs
 */
function showNews(){

    text.innerHTML += '<p> EPILOG: <br> Morgonen efter denna märkliga dag kan du knappt fatta vad som hänt. Svampar, vargar och gud vet vad. När du går ner för ' + 
                        'trappan möts du av din mamma som tittar på dig med uppjagad blick <br> Mamma: "VET du VAD som har hänt? '
    if (breadCrumbs == 5 || witch){
        text.innerHTML += 'Våra grannar, Hans och Greta, sprang på ett jättestort pepparkakshus i skogen. Där var det en häxa som ville äta upp dem, ' + 
                            ' men VET du vad Hans och Greta gjorde? DE PUTTADE IN HÄXAN I UGNEN"'
        
    }
    else if(breadCrumbs >=3){
        text.innerHTML += 'Våra grannar, Hans och Greta, gick vilse igår. Ingen har hittat dem än. Man tror att de fortfarande irrar runt i skogen någonstans"'
    }
    else if(breadCrumbs <=2){
        text.innerHTML += 'Våra grannar, Hans och Greta, hittades döda i skogen igår. De hade gått vilse och inte hittat hem."'
    }

    else if(!witch && breadCrumbs == 5){
        text.innerHTML += 'Våra grannar, Hans och Greta, gick vilse igår. Men dom hittades vid ett JÄTTESTORT pepparkakshus. Tydligen låg tanten som bode i huset död i sin trädgård...' + 
        '<br>...stackars tant. Så sorgligt"'
    }
}

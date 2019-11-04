
/**
 * ALL GLOBAL VARIABLES IN ALPHABETICAL ORDER
 * 
 * @param {Array} basket - Contains the items the user has in their basket.
 * @param {Number} breadCrumbs - Number of excisting breadcrumbs through the game
 * @param {String} food - chosen food
 * @param {Number} breadCrumbsLeft - tells how many crumbs there's left to find and tells the programme where you are in the story/series of head-functions
 * @param {String} drink - chosen drink
 * @param {Number} healthPoints - The user's HP
 * @param {String} input - The user's input
 * @param {Boolean} itemWasFound - tells if item can be found in the basket
 * @param {Number} itemIndex - Where to start de search 
 * @param {Boolean} mushroom - tells if the user has the mushroom
 * @param {Boolean} pikachu - tells if user has Pikachu or not
 * @param {Boolean} stick - tells if the user has a stick or not
 * @param {Number} strength - Your strength point
 * @param {String} text - The text shown for the user in DOM
 * @param {String} userInput - The text the user writes in the input-field
 * @param {String} userText - The text that shows the storys progress
 * @param {Number} witchHP - declares the amount of HP the witch has
 * @param {Number} witchStrength - declares the strength of the witch
 * @param {Boolean} witchAlive - tells if the witch is alive
 * @param {String} wrongInput - a string to display if input is wrong
 * @param {Boolean} wolf - Stores if you told the wolf the truth or not
 * @param {Number} wolfHP - declares the healt points of the wolf
 * @param {Number} wolfStrength - declares the wolf's strength
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
let breadCrumbs = 5
let food
let drink

let mushroom = false
let wolf = true
let wolfAtGrandma = false
let hunter = false

let stick = false

let itemWasFound = false
let itemIndex = -1
let witchHP = 20
const witchStrength = 1
let wolfHP = 30
let wolfStrength = 4
let witch = true
let stickThrown = false
let  pikachuFight = false



/**
 * This function helps managing the inventory and (if needed) splices of the used item
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

function getRandomNumber(randomNumber){
    return randomNumber = Math.round( Math.random() * 4 )
    
}

/**
 * Function that tells us the user is dead because 0HP
 */

/**
 * ----- DEAD ----
 * Function played when user dies
 */

function youDied(){

    basket = []
    text.innerHTML += '<p class="dead"><br> YOU DIEDED!</p> <p> Vill du spela igen? (J/N)</p>'
    button.onclick = startOver

    /**
     * Function for choosing if you want to play again or not.
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

function theEnd(){
    text.innerHTML += '<p class="theEnd"><br> <br> THE END </p>'
    console.log('SLUT')
}

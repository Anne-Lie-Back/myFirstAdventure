
/**
 * This function helps managing the inventory and (if needed) splices of the used item
 * 
 * @param {Boolean} itemWasFound - tells if item can be found in the basket
 * @param {Number} itemIndex - Where to start de search
 */
function useBasketItem(input){

    let itemWasFound = false
    let itemIndex = -1
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

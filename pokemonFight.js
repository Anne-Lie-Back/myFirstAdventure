/**
 * --- THE PIKACHU PART---
 * @param {Boolean} pikachuFed tells if Pikachu has been fed with food or not
 * 
 *  A switch to help determine wich function the user would like to invoke : to capture, to feed or to run away.
 * 
 * --- capturePikachu ---
 * @param {String} randomNumber - helps to store a random number that's used to determine of the user is successful in capturing Pikachu or not.
 * @param {String} storyBeforeStickEvent - a string to lead user on to the stick-function
 */

let pikachu = false
let pikachuFed = false
const storyBeforeStickEventSad = '<p> Med tungt hjärta promenerar du vidare, gråten nära till hands. Aldrig har något så skrämmande hänt dig förut.' + 
                                    'Men blicken djupt sjunken i marken framför dig så är det svårt att missa den pinne som ligger tvärs över vägen.' + 
                                    'Vill du plocka upp den? (J/N)</p>';

const storyBeforeStickEventHappy = ' Vilken härlig dag! Inte bara solen skiner, utan du har också lyckats skaffa dig en gullig kompis. Nynnandes på en' + 
                                    'trevlig truddelutt och blicken höjd i en nöjd manér så missar du totalt pinnen som ligger utbredd över stigen. ' + 
                                    '<br> SCHMACK! (-1 HP) Det där gjorde ont tänkte du, vänder dig bakåt och ser pinnen som orsakade olyckan. Vill du plocka upp den? (J/N) </p>'

function pikachuEvent(){

    /*     const condition = input.value
        condition.toLowerCase() */
    
        switch(input.value){
    
            case 'fånga':
                console.log('fånga')
                capturePikachu()
                break
            
            case 'mata':
                    console.log('mata')
                    text.innerHTML += '<p> I din korg har du: ' + basket + '. Vad vill du ge Pikachu? </p>'
                    
                    button.onclick = feedPikachu
                break
    
            case 'fly':
                text.innerHTML += 'Ingen minns en fegis, men en fegis får iallafall leva längre.' + storyBeforeStickEventSad

                button.onclick = event6
                break
    
            default: 
                text.innerHTML += wrongInput
        }
    }

function capturePikachu(){

    text.innerHTML += '<p> Du kastar pokebollen du (tydligen) haft i fickan hela tiden </p>'

    let chanceToCatch = getRandomNumber()
    

    if ( chanceToCatch >= 4){
        
        healthPoints = healthPoints - 1
        text.innerHTML += ' <p> Grattis! Du har just fångat din första Pokémon </p> <br>' + storyBeforeStickEventHappy
        basket.push('pokemon')
        pikachu = true
        console.log(healthPoints, chanceToCatch)

        button.onclick = event6
    }

    else{
        
        text.innerHTML += '<p> Oh no! Pikachu lyckades rulla undan!'
        console.log(chanceToCatch)
        
        
            if (pikachuFed == false){

                healthPoints = healthPoints - 2
                text.innerHTML += 'Dessutom hoppar den fram och biter dig i fingret.'
                
                    if(healthPoints === 0){
                        youDied()
                    }
                    else{
                        text.innerHTML += '<br> "AJ" (Du har nu ' + healthPoints + ' HP) <br> Vad gör du nu? <br> Fånga, mata eller fly?</p>'
                        console.log(healthPoints)
                    }
                
            }
            else{
                text.innerHTML += '<p> "Piiiika pi?" <br> Pikachu tittar på dig med sina stora runda ögon och lägger huvudet på sne <br> Vad gör du nu? <br> Fånga, mata eller fly?</p>'
            }
        
        button.onclick = pikachuEvent
    }

}

function feedPikachu(){

    let itemToFeed = input.value.toLowerCase()
    useBasketItem(itemToFeed)

    pikachuFed = true

    if (itemToFeed === 'svamp' && mushroom){
        text.innerHTML += '<p> Du ser hur Pikachu börjar hosta. Hans gulliga ansikte förändras sakta till en blå-lila färg samtidigt som blod ' + 
        ' börjar rinna ur hans näsa. Han segnar ner och flämtar ett "piikaa~" med sitt sista andetag. <br> Snyft </p> <br>' + storyBeforeStickEventSad

        button.onclick = event6
    }

    else if (itemToFeed === food || itemToFeed === drink)(
        text.innerHTML += '<p>"Pika pikaaaa~" kurrar pikachu och ser nöjd ut. <br> Vad gör du nu? <br> Fånga, mata eller fly?</p>' 
    )

    else{
        text.innerHTML += wrongInput
        button.onclick = feedPikachu
    }

    button.onclick = pikachuEvent

    console.log(basket)
} 




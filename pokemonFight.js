/**
 * --- THE PIKACHU EVENT ---
 */

/**
 * Handles og the user has chosen fånga/capture, mata/feed or fly/run away and invokes correct series of events/functions.
 */
function pikachuEvent(){
    
    switch(input.value){

        case 'fånga':
            console.log('fånga')
            capturePikachu()
            break
        
        case 'mata':
                console.log('mata')
                text.innerHTML += '<p> I din korg har du: ' + basket + '. Vad vill du ge Pikachu? Eller ångra? </p>'
                
                button.onclick = feedPikachu
            break

        case 'fly':
            text.innerHTML += 'Ingen minns en fegis, men en fegis får iallafall leva längre.' + storyBeforeStickEventSad

            button.onclick = event6
            break

        default: 
            text.innerHTML += wrongInput
            button.onclick = pikachuEvent
    }
}

/**
 * If user would like to try to capture Pikachu, there's a 1 in 5 chance to be successful. If Pikachu is not fed (PikachuFed is false)
 * pikachu will bite of 3HP of the users HealthPoints
 */
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

                healthPoints = healthPoints - 3
                text.innerHTML += 'Dessutom hoppar den fram och biter dig i fingret.'
                
                    if(healthPoints <= 0){
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

/**
 * Lets user feed Pikachu and handle the user's feeding choice. Depending on what the user feed Pikachu different things will happen.
 * PikachuFed will become true if user feeds pikachu with food or drink. He will no longer bite you.
 */
function feedPikachu(){

    let itemToFeed = input.value.toLowerCase()
    useBasketItem(itemToFeed)

    if (itemToFeed === 'svamp' && mushroom){
        text.innerHTML += '<p> Du ser hur Pikachu börjar hosta. Hans gulliga ansikte förändras sakta till en blå-lila färg samtidigt som blod ' + 
        ' börjar rinna ur hans näsa. Han segnar ner och flämtar ett "piikaa~" med sitt sista andetag. <br> Snyft </p> <br>' + storyBeforeStickEventSad

        button.onclick = event6
    }

    else if (itemToFeed === food || itemToFeed === drink){
        text.innerHTML += '<p>"Pika pikaaaa~" kurrar pikachu och ser nöjd ut. <br> Vad gör du nu? <br> Fånga, mata eller fly?</p>'
        
        pikachuFed = true
        button.onclick = pikachuEvent 
    }

    else if(input.value.toLowerCase() === 'ångra'){
        text.innerHTML += '<p> Vad vill du göra: fånga, mata eller fly?</p>'

        button.onclick = pikachuEvent
    }
    else{
        text.innerHTML += wrongInput
        button.onclick = feedPikachu
    }
} 




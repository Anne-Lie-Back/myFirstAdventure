
/**
 * Tells which "starting phrase" that will be invoked
 */
function fightTheWitch(){

    if (witch && wolf && !stickThrown){
        text.innerHTML += '<p> Häxan: "Det är ingen idé att kämpa emot. Min craving för barnpaj är för stor. Ge upp nu så lovar jag att du får välja' + 
                            ' kryddning!" <br> Vargen: "Ja, ge upp ' + userName + ' så jag får välja kryddning! </p>'
        chooseAction()
    }

    else if(!witch && wolf && !stickThrown){
        text.innerHTML += '<p> Vargen: "Du dödade min kompis! Nu ska du allt få!" </p>'
        wolfStrength = 6
        chooseAction()
    }

    else if(witchHP <= 0 && wolfHP <= 0){
        text.innerHTML += '<p> Häxan och Vargen är död. <br> Phew, det var en ansträngande fight tänker du och vänder på klacken för att gå mot mormors. ' + 
        ' Men innan du går bryter du av ett stort hörn av pepparkakshusets tak... som färdkost.</p>'

        wolfAtGrandma = false
        goToGrandma()
    }

    else if(witchHP <= 0 && stickThrown){
        text.innerHTML += '<p> Häxan är död. Vargen jagar sina drömmar symboliserade i en pinne. Du bestämmer dig för att nu är det läge att gå till mormors stuga. Du är redan försenad dit.</p>'
        
        wolfAtGrandma = false
        goToGrandma()
    }

    else if(witchHP <= 0 && !wolf ){
        text.innerHTML += '<p> Häxan är död. <br> Phew, det var en ansträngande fight tänker du och vänder på klacken för att gå mot mormors. ' + 
        ' Men innan du går bryter du av ett stort hörn av pepparkakshusets tak... som färdkost.</p>'
        goToGrandma()
    }
    
    else{
        text.innerHTML += '<p> "Det är ingen idé att kämpa emot. Min craving för barnpaj är för stor. Ge upp nu så lovar jag att du får välja kryddning!" </p>'
        chooseAction()
    }

}

/**
 * Lets the user choose action and which function that will be invoked
 */
function chooseAction(){
    text.innerHTML += '<p> Vad vill du göra? <br> - Slå <br> - Ge upp <br> - Korgen </p>'
    button.onclick = chosenAction

    function chosenAction(){
        switch (input.value.toLowerCase()){
            case 'slå': 
            chooseHitWitchOrWolf()
            break

            case 'ge upp':
            text.innerHTML += '<p> Pressen är för stor för dig. Du ger upp</p>'
            youDied()
            break

            case 'korgen':
             checkBasket()
            break

            default:
                text.innerHTML += wrongInput
                button.onclick = chooseAction
        }
    }

}

/**
 * ------- If SLÅ is chosen! -------
 */

/**
 * Gives the option to choose if you would like to hit the wolf or witch (option only available if you lied to the wolf)
 * if you told the wolf the truth, he's not here and you will automaticly try to hit the witch. If you've thrown the stick (stick is true) the wolf will 
 * not be present. He's out chasing the stick
 */

function chooseHitWitchOrWolf(){

    if(witch && wolf && !stickThrown){
        text.innerHTML += '<p>Vem vill du slå? <br> - Häxan <br> - Vargen </p>'
        button.onclick = hitWitchOrWolf
    }

    else if (wolf && !stickThrown && !witch){
        hitTheWolf()
    }

    else{
        hitTheWitch()
    }
}
 /**
  * HitWitchOrWolf determines who the user would like to hit and if it's a hit or miss.
  */

function hitWitchOrWolf(){

    if (input.value.toLowerCase() == 'häxan'){
            hitTheWitch()       
    }
        
    else if(input.value.toLowerCase() == 'vargen' && !stickThrown){
            hitTheWolf()       
    }

    else{
            text.innerHTML += wrongInput
            button.onclick = hitWitchOrWolf
    }

}

/**
 * Function for trying to hit the witch and what happens if the witch run out of HP
 * @param {Number} hitOrMiss - local variable for random number
 */

function hitTheWitch(){
    
    let hitOrMiss = getRandomNumber()

    if (hitOrMiss >= 1){
        witchHP = witchHP - userStrength
        text.innerHTML += '<p> Du träffade! <br> "AJ, förgrymmade unge!"</p>'
        console.log(witchHP)
        
        if(witchHP <= 0){
            text.innerHTML += '<p> "Åh nej! Jag dör! JAG HATAR BARN" </p>'
            witch = false
        }
        wolfAndWitchHitsBack()
    }

    else{
        text.innerHTML += '<p> Du snubblar till och missar häxan totalt. Skit också. </p>'
        wolfAndWitchHitsBack()
    }
}

/**
 * Function for trying to hit the wolf and what happens if the wolf run out of HP
 * @param {Number} hitOrMiss - local variable for random number
 */
function hitTheWolf(){

   let hitOrMiss = getRandomNumber()

    if (hitOrMiss >= 2){
        wolfHP = wolfHP - userStrength
        text.innerHTML += '<p>Du träffade! <br> Vargen: "Ouch! Djurmisshandlare! "</p>'
        console.log(wolfHP) 

        if(wolfHP <= 0){
            text.innerHTML += '<p> Vargen: "Jag vill inte dö nu! Jag som alltid drömt om att få leka apport inna jag dör". <br>' + 
            'Vargen faller ihop död på marken utan sin livsdröm uppfylld </p>' 
            wolf = false
        }
        wolfAndWitchHitsBack()
    }

    else{
        text.innerHTML += '<p> Du tvekar inför att slå ett så fluffigt djur. I din tvekan lyckas vargen undvika sitt slag </p>'
        wolfAndWitchHitsBack()
    }

}

/**
 * If certain conditions is met, Pikachu will aid you in your fight in different ways. Who Pikachu will hit is randomized
 * @param {Number} witchOrWolf - local variable for storing random number.
 */
function fightingPikachu(){

    if (wolf && witch && !stickThrown){
        let witchOrWolf = getRandomNumber()

        if(witchOrWolf >= 2){
            wolfHP = wolfHP - 2
            text.innerHTML += '"Blixtra vargen Pikachu!" ropar du med hög myndig stämma. <br> "PiiiiiiiiiiiiiiiKAAAAAAAAAA!" <br>' + 
            ' Vargen gnyr ledsamt. Det luktar lite bränt'

            console.log(wolfHP)

            if(wolfHP <= 0){
                text.innerHTML += '<p> Vargen: "Jag vill inte dö nu! Jag som alltid drömt om att få leka apport innan jag dör". <br>' + 
                'Vargen faller ihop död på marken utan sin livsdröm uppfylld </p>'
                
                wolf = false
            }
        }

        else{
            witchHP = witchHP - 2
            text.innerHTML += '"Blixtra häxan Pikachu!" ropar du med hög myndig stämma. <br> "Piiiiika CHUUUUUUUUUUUUUU!" <br>' + 
            ' Häxan skriker högt- Hennes hår ser ännu vildare ut nu. Det luktar lite bränt'
            console.log(witchHP)
    
            if(witchHP <= 0){
                text.innerHTML += '<p> "Åh nej! Jag dör! JAG HATAR BARN!!!" </p>'
                witch = false
            }
        }
    }

    else if(!witch && wolf && !stickThrown){

        wolfHP = wolfHP - 2
        text.innerHTML += '"Blixtra vargen Pikachu!" ropar du med hög myndig stämma. <br> "PiiiiiiiiiiiiiiiKAAAAAAAAAA!" <br>' + 
        ' Vargen gnyr ledsamt. Det luktar lite bränt'

        if(wolfHP === 0){
            text.innerHTML += '<p> Vargen: "Jag vill inte dö nu! Jag som alltid drömt om att få leka apport inna jag dör". <br>' + 
            'Vargen faller ihop död på marken utan sin livsdröm uppfylld </p>'
            
            wolf = false
        }

    }

    else if ((witch && !wolf) || (witch && stickThrown && wolf)){

        witchHP = witchHP - 2
        text.innerHTML += '"Blixtra häxan Pikachu!" ropar du med hög myndig stämma. <br> "Piiiiika CHUUUUUUUUUUUUUU!" <br>' + 
        ' Häxan skriker högt- Hennes hår ser ännu vildare ut nu. Det luktar lite bränt'

        if(witchHP <= 0){
            text.innerHTML += '<p> "Åh nej! Jag dör! JAG HATAR BARN" </p>'
            witch = false
        }
    }

    else{
        text.innerHTML += '<p> Det finns ingen att blixtra. Pikachu tittar sig omkring och springer sedan ut till skogs <br> "Pikapiiiiiiiiiiiiiiiii~ </p>'
        pikachu = false
    }
}

/**
 *  The function that helps identify who will hit you the current round
 */

function wolfAndWitchHitsBack(){

    if(wolf && witch && !stickThrown){
        hitByWitch()
        hitByWolf()
    }

    else if(witch && wolf && stickThrown){
        hitByWitch()
        text.innerHTML += '<p> Vargen är iväg och hämtar pinnen du kastade. </p>'
    }

    else if( wolf && !witch && !stickThrown){

        text.innerHTML += '<p> Vargen: "Du dödade häxan din lille skit! Hon som skulle bjuda mig på mat!"</p>'
        hitByWolf()
    }

    else if(witch && !wolf){
        hitByWitch()
    }

    else{
        text.innerHTML += '<p> <br> Lugnet lägger sig över slagfältet. </p>'
        fightTheWitch()
    }

    if(healthPoints >= 1){
        if(pikachuFight){
            fightingPikachu()   
        }
        fightTheWitch()
    }
    
}

/**
 * Determies if the witch is successful in hitting user
 * @param {Number} hitOrMiss - local random number
 */

function hitByWitch(){
    if (healthPoints >= 1){
        let hitOrMiss = getRandomNumber()
        if (hitOrMiss >= 1){
            healthPoints = healthPoints - witchStrength
            text.innerHTML += '<p> Häxan träffar dig med ett slag. <br> "Mwehehehe, snart blir det barnpaj till middag!" <br> Du har nu ' + healthPoints +
            'HP kvar </p>'

            if(healthPoints <= 0){
                youDied()
            }
        }

        else{
            text.innerHTML += '<p> Du lyckas rulla undan som en riktig Ninja. Häxan skriker i frustration: <br> "Djävulens avkomma!" </p>'
        }
    }

}

/**
 * Determies if the wolf is successful in hitting user
 * @param {Number} hitOrMiss - local random number
 */

function hitByWolf(){

    if (healthPoints >= 1){
        let hitOrMiss = getRandomNumber()
        if (hitOrMiss >= 1){
            healthPoints = healthPoints - wolfStrength
            text.innerHTML += '<p> Vargen träffar dig med sina vassa klor. <br> "Snart ska jag äta upp dig!" <br> Du har nu ' + healthPoints +
            'HP kvar </p>'

            if(healthPoints <= 0){
                youDied()
            }
        }

        else{
            text.innerHTML += '<p> Du lyckas ducka undan när vargens stora fluffiga tass kommer farande. Vargen gnyr ledsamt: <br> "Typiska människor ' + 
            'med sin dubbelmoral. Ni vill klappa oss, men om vi vill klappa till er så får vi inte det " </p>'
        }
    }
}

/**
 * This function helps to manage your basket inventory
 * @param {String} 
 */

function checkBasket(){
    text.innerHTML += '<p> I din korg har du: ' + basket + '. Eller vill du backa?</p>'

    button.onclick = chooseBasketItem

    /**
     * Handles user input. Which item user would like to use and pops the item out of the basket.
     * @param {String} chosenItem - just a little local string-variable for declutter the if-elses.
     */
    function chooseBasketItem(){

        let chosenItem = input.value.toLowerCase()
        useBasketItem(chosenItem)

        if (mushroom && chosenItem == 'svamp'){

                if(wolf && witch && pikachuFight && !stickThrown){

                text.innerHTML += '<p> Vem ska få svampen? <br> - Häxan <br> - Vargen <br> - Pikachu - <br> - Du </p>'
                }

                else if(witch && wolf && !pikachuFight){
                    text.innerHTML += '<p> Vem ska få svampen? <br> - Häxan <br> - Vargen <br> - Du </p>'
                }

                else if((witch && !wolf && pikachuFight)|| ( witch && wolf && pikachuFight && stickThrown)){
                    text.innerHTML += '<p> Vem ska få svampen? <br> - Häxan <br> - Pikachu - <br> - Du </p>'
                }

                else if(!witch && wolf && pikachuFight){
                    text.innerHTML += '<p> Vem ska få svampen? <br> - Vargen <br> - Pikachu <br> - Du </p>'
                }

                
                else if(!witch && wolf && !pikachuFight && !stickThrown){
                    text.innerHTML += '<p> Vem ska få svampen? <br> - Vargen <br> - Du </p>'
                }

                else { 

                    text.innerHTML += '<p> Vem ska få svampen? <br> - Häxan <br> - Du </p>'
                }
                
                button.onclick = giveMushroom 
            
        }

        
        else if(stick && wolf && chosenItem == 'pinne'){
            text.innerHTML += '<p> Du kastar pinnen. Vargen blir helt lyrisk och springer efter pinnen med stor entusiasm </p>'
            stickThrown = true
            stick = false
            wolfAndWitchHitsBack()
        }

        else if(stick && chosenItem == 'pinne' && !wolf){
            text.innerHTML += '<p> Du kastar pinnen mot häxan men den träffar inte.</p>'
            wolfAndWitchHitsBack()
        }


        else if (chosenItem == 'pokemon' && pikachu){
            text.innerHTML += '<p> Du kastar ut din pokéboll. <br> Pikachu: "PikaPIII!" <br> Pikachu joinade fighten. </p>'
            pikachuFight = true
            wolfAndWitchHitsBack()
        }

        else if (chosenItem == food || chosenItem == drink){
            text.innerHTML += "Ditt HP återställs"
            healthPoints = 20
            wolfAndWitchHitsBack()
        }
        
        else if(input.value.toLowerCase() === 'backa'){
            chooseAction()
        }
        else{
            text.innerHTML += wrongInput
            button.onclick = chooseBasketItem
        }
    }
}

/**
 * Handles user input. Who should get the mushroom? And what happens when the mushroom is given?
 */
function giveMushroom(){
    const giveTo = input.value.toLowerCase()

    if (giveTo == 'häxa' && witch){
        text.innerHTML += '<p> Du kastar svampen mot häxan, men hon tar ett steg åt sidan. <br> Häxan: "Mwehehehe! ' + 
        ' Tror du jag skulle äta den där? den är ju dödligt giftig. </p>'
        
        chooseAction()
    }

    else if(giveTo === 'vargen' && wolf){
        text.innerHTML += '<p> Du kastar svampen mot vargen. Vargens inre tamhund reagerar instinktivt. Han öppnar sitt stora gap ' + 
        ' och fångar svampen i luften. Vargen segnar ihop på marken. Ur hans näsa börjar det rinna blod. Med en sista tårfyld blick tittar han på dig ' + 
        'och viskar fram ett svagt "Hur kunde du?" innan han faller ihop på marken. Död.'
                    
        wolf = false
        chooseAction()
    }

    else if(giveTo === 'pikachu' && pikachu){
        text.innerHTML += '<p> Du ser hur Pikachu börjar hosta. Hans gulliga ansikte förändras sakta till en blå-lila färg samtidigt som blod ' + 
        ' börjar rinna ur hans näsa. Han segnar ner och flämtar ett "piikaa~" med sitt sista andetag. <br> Snyft </p>'
        
        pikachuFight = false
        chooseAction()
    }
            

    else if(giveTo === 'du' || giveTo === 'jag'){
        youDied()
    }
        
    else{
        text.innerHTML += wrongInput
        button.onclick = giveMushroom
    }

}



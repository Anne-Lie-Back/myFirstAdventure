function fightTheWitch(){

    if (witch && !wolfAlive){
        text.innerHTML += '<p> Häxan: "Det är ingen idé att kämpa emot. Min craving för barnpaj är för stor. Ge upp nu så lovar jag att du får välja' + 
                            ' kryddning!" <br> Vargen: "Ja, ge upp ' + userName + ' så jag får välja kryddning! </p>'
    }

    else if(!witch && wolf && !stickThrown){
        text.innerHTML += '<p> Vargen: "Du dödade min kompis! Nu ska du allt få!" </p>'
        wolfStrength = 6
    }

    else if(witchHP == 0 && wolfHP == 0){
        text.innerHTML += '<p> Häxan och Vargen är död. <br> Phew, det var en ansträngande fight tänker du och vänder på klacken för att gå mot mormors. ' + 
        ' Men innan du går bryter du av ett stort hörn av pepparkakshusets tak... som färdkost.</p>'

        goToGrandma()
    }

    else if(witchHP == 0 && stickThrown){
        text.innerHTML += '<p> Häxan är död. Vargen jagar sina drömmar symboliserade i en pinne. Du bestämmer dig för att nu är det läge att gå till mormors stuga. Du är redan försenad dit.</p>'
        
        goToGrandma()
    }
    
    else{
        text.innerHTML += '<p> "Det är ingen idé att kämpa emot. Min craving för barnpaj är för stor. Ge upp nu så lovar jag att du får välja kryddning!" </p>'
    }

    chooseAction()
}

function chooseAction(){
    text.innerHTML += '<p> Vad vill du göra? <br> - Slå <br> - Ge upp <br> - Korgen </p>'
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
        }

}

/**
 * ------- If SLÅ is chosen! -------
 */

/**
 * This function gives the option to choose if you would like to hit the wolf or witch (option only available if you lied to the wolf)
 * if you told the wolf the truth, he's not here and you will automaticly try to hit the witch. If you've thrown the stick (stick is true) the wolf will 
 * not be present. He's out chasing the stick
 */

function chooseHitWitchOrWolf(){

    if(wolf && !stickThrown){
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

    switch (input.value.toLowerCase()){
        case 'häxan':
            hitTheWitch()
            break
        
        case 'vargen' && !stickThrown:
            hitTheWolf()
            break

        default:
            text.innerHTML += wrongInput
    }

    if(pikachuFight){
    fightingPikachu()
    }

    wolfAndWitchHitsBack()

}

/**
 * Function for trying to hit the witch and what happens if the witch run out of HP
 */

function hitTheWitch(){

    getRandomNumber(hitOrMiss)

    if (hitOrMiss >= 1){
        witchHP = witchHP - userStrength
        text.innerHTML += '<p> Du träffade! <br> "AJ, förgrymmade unge!"</p>'
        console.log(witchHP)

        if(witchHP === 0){
            text.innerHTML += '<p> "Åh nej! Jag dör! JAG HATAR BARN" </p>'
            witch = false
        }
    }

    else{
        text.innerHTML += '<p> Du snubblar till och missar häxan totalt. Skit också. </p>'
    }
}

function hitTheWolf(){

    getRandomNumber(hitOrMiss)

    if (hitOrMiss >= 1){
        wolfHP = wolfHP - userStrength
        text.innerHTML += '<p>Du träffade! <br> Vargen: "Ouch! Djurmisshandlare! "</p>'
        console.log(wolfHP)

        if(wolfHP === 0){
            text.innerHTML += '<p> Vargen: "Jag vill inte dö nu! Jag som alltid drömt om att få leka apport inna jag dör". <br>' + 
            'Vargen faller ihop död på marken utan sin livsdröm uppfylld </p>'
            
            wolf = false
        }
    }

    else{
        text.innerHTML += '<p> Du tvekar inför att slå ett så fluffigt djur. I din tvekan lyckas vargen undvika sitt slag </p>'
    }

}

function fightingPikachu(){

    if (wolf && witch){
    getRandomNumber(witchOrWolf)

        if(witchOrWolf >= 2){
            wolfHP = wolfHP - 2
            text.innerHTML += '"Blixtra vargen Pikachu!" ropar du med hög myndig stämma. <br> "PiiiiiiiiiiiiiiiKAAAAAAAAAA!" <br>' + 
            ' Vargen gnyr ledsamt. Det luktar lite bränt'

            console.log(wolfHP)

            if(wolfHP === 0){
                text.innerHTML += '<p> Vargen: "Jag vill inte dö nu! Jag som alltid drömt om att få leka apport inna jag dör". <br>' + 
                'Vargen faller ihop död på marken utan sin livsdröm uppfylld </p>'
                
                wolf = false
            }

            else{
                witchHP = witchHP - 2
                text.innerHTML += '"Blixtra häxan Pikachu!" ropar du med hög myndig stämma. <br> "Piiiiika CHUUUUUUUUUUUUUU!" <br>' + 
                ' Häxan skriker högt- Hennes hår ser ännu vildare ut nu. Det luktar lite bränt'
                console.log(witchHP)
        
                if(witchHP === 0){
                    text.innerHTML += '<p> "Åh nej! Jag dör! JAG HATAR BARN" </p>'
                    witch = false
                }
            }
        }
    }

    else if(!witch && wolf){

        wolfHP = wolfHP - 2
        text.innerHTML += '"Blixtra vargen Pikachu!" ropar du med hög myndig stämma. <br> "PiiiiiiiiiiiiiiiKAAAAAAAAAA!" <br>' + 
        ' Vargen gnyr ledsamt. Det luktar lite bränt'

        if(wolfHP === 0){
            text.innerHTML += '<p> Vargen: "Jag vill inte dö nu! Jag som alltid drömt om att få leka apport inna jag dör". <br>' + 
            'Vargen faller ihop död på marken utan sin livsdröm uppfylld </p>'
            
            wolf = false
        }
    }

    else{

        witchHP = witchHP - 2
        text.innerHTML += '"Blixtra häxan Pikachu!" ropar du med hög myndig stämma. <br> "Piiiiika CHUUUUUUUUUUUUUU!" <br>' + 
        ' Häxan skriker högt- Hennes hår ser ännu vildare ut nu. Det luktar lite bränt'

        if(witchHP === 0){
            text.innerHTML += '<p> "Åh nej! Jag dör! JAG HATAR BARN" </p>'
            witch = false
        }
    }
}

/**
 *  The function that helps identify who will hit you the current round
 */

function wolfAndWitchHitsBack(){

    if(wolf && witch){
        hitByWitch()
        hitByWolf()
    }

    else if(witch && stickThrown){
        hitByWitch()
        text.innerHTML += '<p> Vargen är iväg och hämtar pinnen du kastade. </p>'
    }

    else if( wolf && !witch){

        text.innerHTML += '<p>Vargen: "Du dödade häxan din lille skit! Hon som skulle bjuda mig på mat!"</p>'
        hitByWolf()
    }

    else{
        hitByWitch()
    }

    fightTheWitch()
}

/**
 * Determies if the witch is successful in hitting user
 */

function hitByWitch(){

    getRandomNumber(hitOrMiss)
    if (hitOrMiss >= 1){
        healthPoints = healthPoints - witchStrength
        text.innerHTML = '<p> Häxan träffar dig med ett slag. <br> "Mwehehehe, snart blir det barnpaj till middag!" <br> Du har nu ' + healthPoints +
        'HP kvar </p>'
    }

    else{
        text.innerHTML += '<p> Du lyckas rulla undan som en riktig Ninja. Häxan skriker i frustration: <br> "Djävulens avkomma!" </p>'
    }

}

/**
 * Determines if the wolf is successful in hitting user
 */

function hitByWolf(){

    getRandomNumber(hitOrMiss)
    if (hitOrMiss >= 1){
        healthPoints = healthPoints - wolfStrength
        text.innerHTML = '<p> Vargen träffar dig med sina vassa klor. <br> "Snart ska jag äta upp dig!" <br> Du har nu ' + healthPoints +
        'HP kvar </p>'
    }

    else{
        text.innerHTML += '<p> Du lyckas ducka undan när hans stora fluffiga tass kommer farande. Vargen gnyr ledsamt: <br> "Typiska människor ' + 
        'med sin dubbelmoral. Ni vill klappa oss, men om vi vill klappa till er så får vi inte det " </p>'
    }
}

/**
 * This function helps to manage your basket inventory
 */

function checkBasket(){
    text.innerHTML += '<p> I din korg har du: ' + basket + '. </p>'

    button.onclick = chooseBasketItem
    
    function chooseBasketItem(){

        const chosenItem = input.value.toLowerCase()
        useBasketItem(chosenItem)

        if (chosenItem == 'svamp' && svamp){
            console.log(basket)

            if(wolf && witch && pikachuFight){

                text.html += '<p> Vem ska få svampen? <br> - Häxan <br> - Vargen <br> - Pikachu - <br> - Du </p>'
            }

            else if(witch && wolf && !pikachuFight){
                text.html += '<p> Vem ska få svampen? <br> - Häxan <br> - Vargen <br> - Du </p>'
            }

            else if(witch && !wolf && pikachuFight && stickThrown){
                text.html += '<p> Vem ska få svampen? <br> - Häxan <br> - Pikachu - <br> - Du </p>'
            }

            else if(!witch && wolf && pikachuFight){
                text.html += '<p> Vem ska få svampen? <br> - Häxan <br> - Vargen <br> - Pikachu <br> - Du </p>'
            }

            
            else if(!witch && wolf && !pikachuFight){
                text.html += '<p> Vem ska få svampen? <br> - Vargen <br> - Du </p>'
            }

            else { 

                text.html += '<p> Vem ska få svampen? <br> - Häxan <br> - Du </p>'
            }
            
            button.onclick = giveMushroom 
        }


        else if(chosenItem == 'pinne' && stick){
            text.innerHTML += '<p> Du kastar pinnen mot häxan men den träffar inte.</p>'
        }

        else if(chosenItem == 'pinne' && stick && wolf){
            text.innerHTML += '<p> Du kastar pinnen. Vargen blir helt lyrisk och springer efter pinnen med stor entusiasm </p>'
            stickThrown = true
            stick = false
        }

        else if (chosenItem == 'pokemon' && pikachu){
            text.innerHTML += '<p> Du kastar ut din pokéboll. <br> Pikachu: "PikaPIII!" <br> Pikachu joinade fighten. </p>'
            PikachuFight = true
        }

        else{
            text.InnerHTML += "Ditt HP återställs"
            healthPoints = 20
        }

        chooseAction()
    }
}

function giveMushroom(){
    switch (input.value.toLowerCase()){

        case 'häxan' && witch:
            text.innerHTML += '<p> Du kastar svampen mot häxan, men hon tar ett steg åt sidan. <br> Häxan: "Mwehehehe! ' + 
            ' Tror du jag skulle äta den där? den är ju dödligt giftig. </p>'
            break

        case 'vargen' && wolf:
           text.innerHTML += '<p> Du kastar svampen mot vargen. Vargens inre tamhund reagerar instinktivt. Han öppnar sitt stora gap ' + 
           ' och fångar svampen i luften. Vargen segnar ihop på marken. Ur hans näsa börjar det rinna blod. Med en sista tårfyld blick tittar han på dig ' + 
           'och viskar fram ett svagt "Hur kunde du?" innan han faller ihop på marken. Död.'

           wolf = false
           break

        case 'pikachu' && pikachu:
                text.innerHTML += '<p> Du ser hur Pikachu börjar hosta. Hans gulliga ansikte förändras sakta till en blå-lila färg samtidigt som blod ' + 
                ' börjar rinna ur hans näsa. Han segnar ner och flämtar ett "piikaa~" med sitt sista andetag. <br> Snyft </p>'
                
                pikachu = false
                break

        case 'du':
        case 'jag':
            youDied()
            break
        
        default:
            text.innerHTML += wrongInput
        
    }

}

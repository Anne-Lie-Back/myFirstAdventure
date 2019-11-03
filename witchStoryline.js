
/**
 * @param {Number} witchHP - declares the amount of HP the witch has
 * @param {Number} witchStrength - declares the strength of the witch
 * @param {Number} wolfHP - declares the healt points of the wolf
 * @param {Number} wolfStrength - declares the wolf's strength
 * @param {Boolean} witchAlive - tells if the witch is alive
 *
 */

 let witchHP = 20
 const witchStrength = 1
 let wolfHP = 30
 const wolfStrength = 4
 let witchAlive = true
 let stickThrown = false

/**
 * This function takes the user further down the path to the left and invites to a breadcrumb-function
 */
function goToTheWitch(){
    text.innerHTML += '<p> Du följer spåret av brödsmulor. Vad kommer finnas vid dess ände? Hur kommer det sig att dessa brödsmulor leder dit? ' + 
                        ' Är det en bagare som burit en stor korg med bröd? Eller kanske en jättestor hungrig mus som smulat på vägen? Vem vet? ' +
                        ' Inte du iallafall, eftersom du nyfiket följer spåret av brödsmulor. <br> Du funderar på om du vill plocka upp och äta en brödsmula. </p>'    

    seeBreadCrumb(noticeLastBreadCrumb)
}

/**
 * Another breadcrumb-function!
 * (I promise, this is the last one)
 */
function noticeLastBreadCrumb(){

    text.innerHTML += '<p> Medan du promenerar på stigen känner du att du kanske vill ha en smula, det kan väl inte skada? </p>'

    seeBreadCrumb(approachTheGingerbreadHouse)
}

/**
 * The function that leads to the gingerbread house and handles how the user would like to approach it
 */

function approachTheGingerbreadHouse(){

    console.log(breadCrumbs)
    text.innerHTML += '<p> Du börjar se slutet av stigen och skymtar en stor äng. På denna stora äng står det en stor stuga gjord av....pepparkaka? <br>' + 
    ' <br> Du smyger långsamt fram till skogskanten. Kan det vara sant? Ett hus gjort av pepparkaka? <br> WOW, det kan vara bland det coolaste du sett ' + 
    'i hela ditt liv. Du blir himla nyfiken på vem som bor i ett sådant hus, men vågar du gå närmare? Vad gör du? Knackar på, smyger närmare eller går därifrån? </p>'

    button.onclick = enterTheGingerbreadHouse
    /**
     * this function handles user's choice about what to do next
     */

    function enterTheGingerbreadHouse(){

        switch(input.value.toLowerCase()){

            case 'knackar på':
                knockOnDoor()
                break

            case 'smyger närmare':
                sneakCloser()
                break
            
            case 'går därifrån':
                text.innerHTML += '<p> Mormor har alltid sagt att saker som verkar för bra för att vara sant oftast är det. Med detta i åtanke ' + 
                'vänder du på klacken och stegar tillbaka för att ta stigen som leder till din mormors stuga. <br> Hoppas hon serverar pepparkakor... </p>'
                break

            default:
                text.innerHTML += wrongInput
                button.onclick = enterTheGingerbreadHouse       
        }
    }
}

function knockOnDoor(){

    text.innerHTML += '<p> Någon som bor i ett pepparkakshus kan ju inte vara något annat än trevlig. Du sträcker självsäkert på dig och traskar' +
                    ' fram till den glasyrklädda dörren.'
    answerDoor()
                    
    function answerDoor(){

        let knocks = 'KNACK KNACK KNACK'
        text.innerHTML += knocks
        
        
        let openDoor = getRandomNumber()

        if (openDoor <= 3){
            knocks = knocks + ' KNACK'
            console.log(knocks, openDoor)
            text.innerHTML += '<p> Ingen svarade. Försöka igen? (J/N) </p>'
            button.onclick = answerOrSneak

            function answerOrSneak(){
                switch (input.value.toLowerCase()){

                    case 'j':

                    answerDoor()
                    break

                    case 'n':
                    sneakAway()
                    break
                
                    default:
                    text.innerHTML += wrongInput
                }
            }

        }

        else{
            console.log(openDoor)
            text.innerHTML += '<p> <br> Bakom dörren hör du fotsteg. <br> Dörren öppnas långsamt och en lång näsa sticker ut genom dörrspringan. Ett öga av ' + 
            ' äldre karaktär tittar tillbaka på dig. Dörren fortsätter att öppna sig långsamt till synen av en kort tant med hår som ett grått åskmoln ' + 
            ' fyller din vy. <br> "Nämen lilla vän, vad kul att du hittat hit. Vill du ha fika? Kanske lite pepparkaka och mjölk kanske?" <br> HUR kunde ' +
            'tanten veta att jag var så himla sugen på pepparkakor just nu? Självklart vill du ha fika! Dessutom ser tanten väldigt snäll ut </p>' + 
            '<p> Inne i huset är allt inrett med godis, furu-möbler och rutiga tyger. Du slår dig ner vid det runda lilla bordet. Tanten dukar fram överdådigt ' + 
            'med bullar, kolaremmar, prinsessbakelser, GIGANTISKA pepparkakor och ett glas mjölk. Du sätter tänderna i en pepparkaka formad som en svamp' + 
            ' och smaskar nöjsamt och högljutt med öppen mun. '

            eatTreat()

            function eatTreat(){
                text.innerHTML += '<p>"Kul att du tycker om mina bakverk. Ta mer! (J/N)"</p>'
                button.onclick = eatMoreTreats

                function eatMoreTreats(){

                    switch(input.value.toLowerCase()){
                        case 'n':
                            text.innerHTML += '<p> DET BLIR TJAFFS </p>'
                            fightTheWitch()
                            
                            break
                        
                        case 'j':
                            text.innerHTML += '<p> Du tar lite mer fika. Tanten böjer sig fram och klämmer dig lätt på överarmen med sina skrynkliga fingrar. ' + 
                            ' " Ta lite mer fika, du som är så mager." säger tanten med värme i rösten. Vill du ta mer fika? (J/N) </p>'
                            
                            button.onclick = eatMoreTreats
                            break
                        
                        default:
                            text.innerHTML += wrongInput

                    }
                }
            }
            
        }

    }

}

function fightTheWitch(){

    if (witch && !wolf){
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

    //NEED TO BE MOVED TO RIGHT PLACE 

    else if (!witch && wolf && stickThrown) {
        text.innerHTML += ' <p> Vargen jagar glatt sin pinne och har inget intresse av att äta upp dig längre. </p>'
        wolf = false
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

        if(witchHP === 0){
            text.innerHTML += '<p> "Åh nej! Jag dör! JAG HATAR BARN" </p>'
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

        if(wolfHP === 0){
            text.innerHTML += '<p> Vargen: "Jag vill inte dö nu! Jag som alltid drömt om att få leka apport inna jag dör". <br>' + 
            'Vargen faller ihop död på marken utan sin livsdröm uppfylld </p>'
        }
    }

    else{
        text.innerHTML += '<p> Du tvekar inför att slå ett så fluffigt djur. I din tvekan lyckas vargen undvika sitt slag </p>'
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

        useBasketItem(input.value)

        if (chosenItem == 'svamp' && svamp && wolf && witch){
            text.html += '<p> Vem ska få svampen? <br> - Häxan <br> - Vargen</p>'

                
        }

        else if(chosenItem == 'pinne' && pinne)

        else if(chosenItem == 'pinne' && pinne && wolf){
            text.innerHTML += '<p> Du kastar pinnen. Vargen blir helt lyrisk och springer efter pinnen med stor entusiasm </p>'
        }

    }
}


function sneakCloser(){
    text.innerHTML += '<p> Sneak closer </p>'
}

function sneakAway(){
    text.innerHTML += '<p> Sneak away </p>'
}



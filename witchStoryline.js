
/**
 * @param {Number} witchHP - declares the amount of HP the witch has
 * @param {Number} witchStrength - declares the strength of the witch
 * @param {Number} wolfHP - declares the healt points of the wolf
 * @param {Number} wolfStrength - 
 *
 */

 let witchHP = 20
 const witchStrength = 1
 let wolfHP = 30
 const wolfStrength = 4

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

    if (wolf){
        text.innerHTML += '<p> Häxan: "Det är ingen idé att kämpa emot. Min craving för barnpaj är för stor. Ge upp nu så lovar jag att du får välja' + 
                            ' kryddning!" <br> Vargen: "Ja, ge upp ' + userName + ' så jag får välja kryddning! </p>'
    }
    
    else{
        text.innerHTML += '<p> "Det är ingen idé att kämpa emot. Min craving för barnpaj är för stor. Ge upp nu så lovar jag att du får välja kryddning!" </p>'
    }

    chooseAction()
}




function chooseAction(){
    text.innerHTML += '<p> Vad vill du göra? <br> - Slå <br> - Gråta <br> - Korgen </p>'
        switch (input.value.toLowerCase()){
            case 'slå': 
            hitTheWitch()
            break

            case 'ge upp':
            text.innerHTML += '<p> Pressen är för stor för dig. Du ger upp</p>'
            break

            case 'korgen':
             checkInventory()
            break

            default:
                text.innerHTML += wrongInput
        }

}

/**
 * This function gives the option to choose if you would like to hit the wolf or witch (option only available if you lied to the wolf)
 * if you told the wolf the truth, he's not here and you will automaticly try to hit the witch.
 */

function hitTheWitch(){

    if(wolf && !stick){
        text.innerHTML += '<p>Vem vill du slå? <br> - Häxan <br> - Vargen </p>'
        button.onclick = hitWitchOrWolf
    }

    else {

        if (hitOrMiss >= 1){
            witchHP = witchHP - userStrength
            text.innerHTML += '<p> Du träffade! <br> "AJ, förgrymmade unge!"</p>'
        }

        else{
            text.innerHTML += '<p> Du snubblar till och missar häxan totalt. Skit också. </p>'
        }
    }

}
 /**
  * HitWitchOrWolf determines who the user would like to hit and if it's a hit or miss.
  */

function hitWitchOrWolf(){
    getRandomNumber(hitOrMiss)

    switch (input.value.toLowerCase()){
        case 'häxan':
            if (hitOrMiss >= 1){
                witchHP = witchHP - userStrength
                text.innerHTML += '<p> Du träffade! <br> "AJ, förgrymmade unge!"</p>'
            }

            else{
                text.innerHTML += '<p> Du snubblar till och missar häxan totalt. Skit också. </p>'
            }

            break
        
        case 'vargen' && !stick:
            if (hitOrMiss >= 1){
                wolfHP = wolfHP - userStrength
                text.innerHTML += '<p>Du träffade! <br> "Ouch! Djurmisshandlare! "</p>'
            }

            else{
                text.innerHTML += '<p> Du tvekar inför att slå ett så fluffigt djur. I din tvekan lyckas vargen undvika sitt slag </p>'
            }
            
            break

        default:
            text.innerHTML += wrongInput
    }

    chooseAction()
}

function sneakCloser(){
    text.innerHTML += '<p> Sneak closer </p>'
}

function sneakAway(){
    text.innerHTML += '<p> Sneak away </p>'
}


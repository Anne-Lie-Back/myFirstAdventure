
/**
 * --- THE WITCH STORY ARC ---
 * You can find the fighting functions at witchStorylineFight.js
 */

/**
 * Takes the user further down the path to the left and invites to a series of breadcrumb-functions
 */
function goToTheWitch(){
    text.innerHTML += '<p> Du följer spåret av brödsmulor. Vad kommer finnas vid dess ände? Hur kommer det sig att dessa brödsmulor leder dit? ' + 
                        ' Är det en bagare som burit en stor korg med bröd? Eller kanske en jättestor hungrig mus som smulat på vägen? Vem vet? ' +
                        ' Inte du iallafall, eftersom du nyfiket följer spåret av brödsmulor. <br> Du funderar på om du vill plocka upp och äta en brödsmula. </p>'    

    seeBreadCrumb(noticeLastBreadCrumb)
}

/**
 * Another invite to breadcrumb-functions!
 * (I promise, this is the last one)
 */
function noticeLastBreadCrumb(){

    text.innerHTML += '<p> Medan du promenerar på stigen känner du att du kanske vill ha en smula, det kan väl inte skada? </p>'

    seeBreadCrumb(approachTheGingerbreadHouse)
}

/**
 * Leads to the gingerbread house and asks how the user would like to approach it.
 */

function approachTheGingerbreadHouse(){

    console.log(breadCrumbs)
    text.innerHTML += '<p> Du börjar se slutet av stigen och skymtar en stor äng. På denna stora äng står det en stor stuga gjord av....pepparkaka? <br>' + 
    ' <br> Du smyger långsamt fram till skogskanten. Kan det vara sant? Ett hus gjort av pepparkaka? <br> WOW, det kan vara bland det coolaste du sett ' + 
    'i hela ditt liv. Du blir himla nyfiken på vem som bor i ett sådant hus, men vågar du gå närmare? Vad gör du: <br> - Knackar på <br> - Smyger närmare <br> - Går därifrån? </p>'

    button.onclick = enterTheGingerbreadHouse
    /**
     * this function handles user's choice about how to approach the gingerbread house, or just not to approach
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
                goToGrandma()
                break

            default:
                text.innerHTML += wrongInput

                button.onclick = enterTheGingerbreadHouse       
        }
    }
}

/**
 * if user chose to knock on the door this function will trigger a series of events and functions
 */
function knockOnDoor(){

    text.innerHTML += '<p> Någon som bor i ett pepparkakshus kan ju inte vara något annat än trevlig. Du sträcker självsäkert på dig och traskar' +
                    ' fram till den glasyrklädda dörren.'
    answerDoor()
            
    /**
     * Handles if the witch will answer the door or not, and what happens when the door is finally answered
     * @param {String} knocks - local string of KNACK
     * @param {String} knocksAgain - Local string that adds a KNACK for each time user knocks on dore
     * @param {openDoor} openDoor - local random number to use for deciding if witch answers the door or not
     */
    function answerDoor(){
        const knocks = 'KNACK KNACK KNACK'
        text.innerHTML += knocks
        
        
        
        let openDoor = getRandomNumber()
        console.log(openDoor)

        if (openDoor <= 2){
            text.innerHTML += '<p> Ingen svarade. Försöka igen? (J/N) </p>'
            
            button.onclick = answerOrSneak

            /**
             * Handles if the user would like to keep knocking or sneak away back to grandma's house
             */
            function answerOrSneak(){
                switch (input.value.toLowerCase()){

                    case 'j':

                        answerDoor()
                        break

                    case 'n':
                        text.innerHTML += '<p> Mormor har alltid sagt att saker som verkar för bra för att vara sant oftast är det. Med detta i åtanke ' + 
                        'vänder du på klacken och stegar tillbaka för att ta stigen som leder till din mormors stuga. <br> Hoppas hon serverar pepparkakor... </p>'
                        goToGrandma()
                        break
                
                    default:
                    text.innerHTML += wrongInput
                }
            }

        }

        else{
            text.innerHTML += '<p> <br> Bakom dörren hör du fotsteg. <br> Dörren öppnas långsamt och en lång näsa sticker ut genom dörrspringan. Ett öga av ' + 
            ' äldre karaktär tittar tillbaka på dig. Dörren fortsätter att öppna sig långsamt till synen av en kort tant med hår som ett grått åskmoln ' + 
            ' fyller din vy. <br> "Nämen lilla vän, vad kul att du hittat hit. Vill du ha fika? Kanske lite pepparkaka och mjölk kanske?" <br> HUR kunde ' +
            'tanten veta att jag var så himla sugen på pepparkakor just nu? Självklart vill du ha fika! Dessutom ser tanten väldigt snäll ut </p>' + 
            '<p> Inne i huset är allt inrett med godis, furu-möbler och rutiga tyger. Du slår dig ner vid det runda lilla bordet. Tanten dukar fram överdådigt ' + 
            'med bullar, kolaremmar, prinsessbakelser, GIGANTISKA pepparkakor och ett glas mjölk. Du sätter tänderna i en pepparkaka formad som en svamp' + 
            ' och smaskar nöjsamt och högljutt med öppen mun. '

            eatTreat()

            /**
             * Asks if user would like more treats
             */
            function eatTreat(){
                text.innerHTML += '<p>"Kul att du tycker om mina bakverk. Ta mer! (J/N)"</p>'
                button.onclick = eatMoreTreats

                /**
                 * Handles the user's desire to more eat treats. if 'N' the grand fight will begin! (at witchStorylineFight.js)
                 */
                function eatMoreTreats(){

                    switch(input.value.toLowerCase()){
                        case 'n':
                           
                            text.innerHTML += '<p> Häxan: "VA?! Vill du inte ha mina kakor? Nå jag får väl äta upp dig trots att du knappt kommer mätta" <br> Äta upp dig? Vad är det för dumheter? <br> ' + 
                            ' Du springer ut från huset men häxan hinner ifatt. </p>'

                            if(wolf){
                                text.innerHTML += '<p> Inte nog med att häxan hinner ikapp. Du springer rakt i en fluffig vägg. Det är vargen. <br> Åh nej, dubbel trubbel...</p>'
                            }

                            text.innerHTML += '<p> Du som hatar bråk har inget val. Nu blir det bråk. </p>'
                            
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


/**
 * If user chose to sneak closer this function will play out the events that leads to THE BIG FIGHT! (at witchStorylineFight.js)
 */
function sneakCloser(){
    text.innerHTML += '<p> Du smyger fram och kikar in genom fönstret. Där ser du en gammal dam som tillagar något. Hon plockar fram en köttkniv ' + 
    'och böjer sig ner. Du funderar över vad det är hon ska använda kniven till, tills du ser att hon slänger upp ett oroveckande stycke kött. ' + 
    ' Är det...ett stycke barnkropp? <br> Fylld av fasa försöker du smyga iväg igen, men självklart lyckas du snubbla på en kruka med klubbor som stod'+ 
    'framför häxans fönster. <br> Du hör hur häxan klampar mot dörren, slår upp den och utbrister: "Kom hit din skit så jag kan äta upp"</p>'

    if(wolf){
        text.innerHTML += '<p> Du försöker springa men springer rakt in i en fluffig vägg. Det är vargen. <br> Åh nej, dubbel trubbel...</p>'
    }

    text.innerHTML += '<p> Du som hatar bråk har inget val. Nu blir det bråk. </p>'
                            
    fightTheWitch()
}




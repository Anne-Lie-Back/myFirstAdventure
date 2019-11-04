/** 
 * @param {String} text - The text shown for the user in DOM
 * @param {String} userInput - The text the user writes in the input-field
 * @param {String} userText - The text that shows the storys progress
 */

let text = document.getElementById("userText")
const button = document.getElementById("userButton")
let input = document.getElementById("userInput")

/**
 *  --- GAME PLAY ---
 * Main story-line.
 * 
 * You can find global variables at reusableFunctions.js
 */


/**
 * --- USER IS AT HOME ---
 * First input from user. Sets name of user character.
 */
function initialInput(){
    userName = input.value + "luvan"
    text.innerHTML += '<p>"' + userName + '! Har du glömt att du ska till mormor med lunch idag?! " <br> Du reser dig upp ur sängen och tänker: '+
    '"Gaffel också" och slänger på dig dina kläder och springer ner. <br> <br> Väl där nere frågar din mor: "Vad tror du mormor vill ha att äta idag?"</p>'
    
    button.onclick = event1   
}

/**
 * Sets what kind of food the user would like to bring
 */
 function event1(){
     food = input.value.toLowerCase()
     basket.push(input.value)

     text.innerHTML += '<p> "Okej, jaja. Jag packar väl ner ' + food + '. Vad tror du hon vill ha att dricka? </p>'

     button.onclick = event2
}

/**
 * --- GOOD BYE MOM. 
 * The beginning of the user's journey. Sums up the stats before user heads out in the woods 
 * The user finds its first breadcrumb
 */
function event2(){
    drink = input.value.toLowerCase()
    basket.push(input.value)

    text.innerHTML += '<p>"Tror du verkligen att hon dricker ' + drink + '? Jaja, hon dricker säkert det mesta. <br>' +
                        userName + ' med ett HP på ' + healthPoints + ' ger sig ut i skogen med en korg med ' + food + ' och ' 
                        + drink + '. Målet är: mormors stuga!' + 
                         '<br> <br> Du traskar ut i den gröna, frodiga skogen. Fåglar kvittrar och solens strålar som silar genom trädkronorna och skapar skuggspel över stigen.'
                         ' <br> Du ser en ensam liten brödsmula ligga på stigen </p>'

    seeBreadCrumb(event3)
}

/**
 * 
 * The Mushroom-function. Will de user pick upp the mushroom?
 */

function event3(){

    text.innerHTML += '<p> Skogen bjuder på många spännande dofter, men inget doftar så gott som din mormors kanelbullar. Du börjar fantisera ' +
                        'om alla de kanelbullar du hoppas få äta när du kommer fram till mormors stuga. Bredvid ett träd precis vid stigen ser ' + 
                        'du en svamp. Mormor gillar svamp. Plocka upp den? (J/N)</p>'
    
    button.onclick = pickUpMushroom

    /**
     * Handles if the user wants to pick up Mushroom or not and asks if user wants to eat mushroom or not?
     */
    function pickUpMushroom(){

        switch(input.value.toLowerCase()) {

            case 'j':
                text.innerHTML += '<p> Den ser stor och svampig ut. Vill du äta den på stubben? (J/N) </p>'
  
                button.onclick = eatMushroom

                /**
                 * Handles if the user wants to eat mushroom now or put it in the basket.
                 */
                function eatMushroom(){
        
                    switch(input.value.toLowerCase()){

                        case 'j':
                            youDied()
                            break

                        case 'n':
                                text.innerHTML += '<p> Du lägger ner svampen i korgen bland ' + basket[0] + ' och ' + basket[1] + ' och beger dig vidare in i skogen. </p>'
                                
                                basket.push('svamp')
                                mushroom = true                             
                                event4()
                                break
                        
                        default:
                                text.innerHTML += wrongInput 
                    }
                }
            break
        
        case 'n':
            text.innerHTML += 'Nej fy, även om din mormor gillar svamp så hatar du att ens vidröra dess svampiga yta. Du ryser till vid tanken och springer vidare innan tanken hinenr ikapp igen'
            
            event4()
            break

        default:
            text.innerHTML += wrongInput
            
            button.onclick = event3       
        }
    }

}

/**
 * --- START WOLF DIALOG ---
 * Asks if you would like to tell him where your grandma lives
 */

function event4(){
    
    text.innerHTML += '<p><br> Skogen bjuder på många spännande ljud. Fåglar som kvittrar, vinden som viner genom trädtopparna, en buske som prasslar medan en varg stiger ut ur den... ... ... <br> EN BUSKE SOM PRASSLAR MEDAN EN VARG STIGER UR DEN?!' +
    '<br> Vargen synar dig från top till tå, sedan öppnar han sitt tandprydda gap och börjar tala med sin hesa whiskeyröst <br> "Nämen hej kompis. Vad heter du?"' + 
    '<br> Din mamma har alltid sagt till dig att du inte ska prata med främmande människor, men hon sa inget om djur. <br> "Jag heter ' + userName + 
    '" <br> "MMMMjjjahajahaja...du ' + userName + ', vad är det du har i korgen?" <br> Du tittar ner i din korg och räknar upp innehållet: "' +
    basket + '" <br> "MMmmmåhååå, kan man få smaka något? <br> "Nej, maten jag har i min korg ska jag ge till mormor" <br> Vargen tittar på dig med surmulen blick.' +
    'Du börjar bli osäker, var det främmande människor eller främlingar överhuvudtaget man inte skulle prata med? Ska du berätta vad mormor bor (Sanningen) eller ska du ljuga för vargen? (Ljuga) </p>'
     
    button.onclick  = tellTruthOrLieWolf

    /**
     * Handles if user wants to lie or tell the truth to the wolf about grandmas whereabouts
     */
    function tellTruthOrLieWolf(){

        switch(input.value.toLowerCase()){
            case 'sanningen':
                text.innerHTML += '<p> Du bestämmer dig för att allt fluffigt går att lita på och berättar sanningen: <br> "Hon bor i andra sidan skogen, om du tar höger vid stigen" </p>'
                
                wolf = false
                wolfAtGrandma = true
                seeBreadCrumb(event5)
                break

            case 'ljuga':
                text.innerHTML += '<p> Du bestämmer dig för att även om vargen är söt och fluffig så är han en främling. För att dämpa skadan som redan är skedd så bestämmer du dig för att dra en vit lögn. Skriv en lögn att lura vargen med: </p>'
                              
                button.onclick = tellLieWolf
                break
            
            default:
                text.innerHTML += wrongInput
                
                button.onclick = tellTruthOrLieWolf
        }      
    }
    
    /**
     * handles the user's input-lie and the wolfs reaction to that lie.
     */
    function tellLieWolf(){
        
        text.innerHTML += '<br> "'+ input.value + '" <br> "Oj, då har du en bit att gå. Bäst att låta dig traska vidare. Farväl ' + userName + 
                            '!" <br> Ditt äventyr fortsätter. På stigen ser du en brödsmula.'
        
        seeBreadCrumb(event5)
    }
}

/**
 * --- PIKACHU ARC ---
 * Reveals the Pikachu and starts the Pikachu event in pokemonFight.js
 */
function event5(){
    text.innerHTML += '<p><br> EN VILD PIKACHU UPPENBARAR SIG! <br> Vad vill du göra: fånga, mata eller fly?</p>'

    button.onclick = pikachuEvent
}

/**
 *  Handles if the user would like to pick up a stick
 */

function event6(){
    switch(input.value.toLowerCase()){
        case 'j':
            basket.push('pinne')
            text.innerHTML += '<p> Du plockar upp den och lägger den i din korg. I din korg ser du nu massa bra grejer som: ' + basket + '. </p>'

            stick = true
            break

        case 'n':
            text.innerHTML += '<p> Du gillar inte pinnar, dessutom kan de vara farliga. Man kan ju faktiskt snubbla på den. </p>'

            break

        default:
            text.innerHTML += wrongInput
            button.onclick= event6
    }

    text.innerHTML += '<br> Ditt äventyr fortsätter. På stigen ser du en brödsmula.'
    seeBreadCrumb(event7)
}

/**
 * The user is asked to input if user would like to follow breadcrumbs to the left or go to grandma to the right
 */
function event7(){
    text.innerHTML += '<p> Du kommer fram till ett vägskäl. Stigen delar sig som ett Y framför dig. Till höger ser du en mörk,' + 
    ' lummig väg som du vet leder till mormor. På stigen till vänster skiner solen och du ser du ett spår av brödsmulor som leder djupare in. ' + 
    '<br> Väljer du att gå höger eller vänster?</p>'

    button.onclick = choosePath

    /**
     * Handles if the user wants to follow the breadcrumbs to the right or go right to grandma
     */
    function choosePath(){

    switch(input.value.toLowerCase()){
        case 'vänster':
            goToTheWitch()
            break
        
        case 'höger':
            goToGrandma()
            break
        
        default:
            text.innerHTML += wrongInput
    }

    }
}

/**
 * The goToTheWitch-function can be found in witchStoryline.js, else continue down below to goToGrandma
 */

/**
 * After the witch-arc or of the user choose to go right. If the wolfis alive and you told him the truth, wolfAtGrandma is true and 
 * triggers talkToHunter, else the user will continue without any encounters to grandma's cottage.
 */
function goToGrandma(){
    text.innerHTML += '<p> <br> "Det är långt till mormor, men så småningom börjar du skymta slutet av stigen och den lilla röda stugan" </p>'

    if(wolfAtGrandma){
        talkToHunter()
    }

    else{
        atGrandma()
    }
}
 /**
  * Handles if user would like to lie to the hunter about their knowladge about the wolf.
  */
function talkToHunter(){
    text.innerHTML += '<p> <br> En lång och mörk gubbe ställer sig framför dig på stigen. På hans rygg hänger ett gevär. Han tittar med skarp ' + 
                        'blick rakt in i dina ögon.<br> Jägaren: "Hej skogsvandrare. Du har möjligtvis inte sett en fluffig varg springa runt ' + 
                        'i krokarna?" <br> <br> Du vet inte riktigt vad du ska svara för även om du tycker vargar är lite otäcka så tycker du ' + 
                        'att jägaren är ännu otäckare. Berättar du: <br> - Sanning <br> - Lögn  </p>'

                        button.onclick = tellTrutchOrLieHunter

                        /**
                         * Handles the user's input, if they would like to tell the truth or lie
                         */
                        function tellTrutchOrLieHunter(){

                            switch(input.value.toLowerCase()){

                                case 'sanning':
                                   hunter = true
                                    text.innerHTML += '<p>"Ja, jag mötte en varg förut. Jag berättade för honom att min mormor bor på denna '+ 
                                                        'stigen lite längre fram" <br> Jägaren: "Jag förstår, tack för informationen. Trevlig vandring!" </p>'
                                    atGrandma()
                                    break
                                
                                case 'lögn':
                                    text.innerHTML += '<p>"Näe, jag kan inte minnas att jag sett någon varg. Särskilt inte någon fluffig sådan som ' +
                                                     'undrar var mormoar bor. <br> Jägaren: "Jag förstår, tack för informationen. Trevlig vandring!" </p>'
                                    atGrandma()
                                    break
                                
                                default:
                                    text.innerHTML += wrongInput
                                    button.onclick = tellTrutchOrLieHunter
                            }
                        }

                        
}

/**
 * Handles which ending should be played depending on earlier choices by user.
 */
function atGrandma(){
    text.innerHTML += 'Fem minuter är du framme hos mormor. Du knackar på med bestämda slag'

    if((wolfAtGrandma && !hunter)||(wolfAtGrandma && hunter)){
        console.log('Jägarn kommer')
        wolfEnding()
    }

    else{
        grandmaEnding()
    }
}

/**
 * --- WOLF ENDING ARC ---
 * contains functions that handles the wolf-ending (if the wolf was told the truth about grandma's whereabouts or never was 
 * defeated at the witches house). Lets user ask a question to the "Grandma"
 * 
 */
function wolfEnding(){
    text.innerHTML += '<p> Dörren öppnas. Där står din mormor...fast...hon ser lite annorlunda ut, mjukare ut. Ställ en fråga till mormor: </p>'
    button.onclick = askFirstQuestion

    /**
     * Wolf answers question and user gets the chance to ask another question
     */
    function askFirstQuestion(){
        text.innerHTML += '"' + input.value + '"' + ' <p> Mormor svarar: "Ingen kommentar" <br> Du känner fortfarande på dig att något är lurt. Ställ en fråga till: </p>'
        button.onclick = askSecondQuestion

        /**
         * Wolf ansers second question and depending on if user told the truth to the hunter, the wolf and hunter ending will be invoked. 
         * Else the story ends with you and wolf at grandmas table. If the user has the mushroom left in the basket there's an opportunity to offer
         * the wolf the mushroom 
         * 
         */
        function askSecondQuestion(){
            text.innerHTML += '"' + input.value + '"' +  '<p> Mormor: "OKEJ, okej okej okej. Jag är inte din mormor. Jag är vargen...och jag har ätit upp din mormor. ' + 
                            'Du ser, jag kunde inte stå emot min hunger när du pratade om ' + food + ' och ' + drink + ' och jag ville inte äta upp dig '+ 
                            ' så jag tänkte vara schysst och äta upp din mormor istället.'
            
            if(hunter){
                wolfHunterEnding()
            }

            else{
                text.innerHTML += '<p><br> Du och vargen sitter runt det lilla bordet inne i mormors stuga. En pinsam tystnad råder.</p>'

                if(mushroom){
                    text.innerHTML += '<p> Vill du erbjuda honom svampen du har i korgen? (J/N)'
                    button.onclick = offerMushroom

                        /**
                         * handles if user would like to offer the wolf the mushroom.
                         */
                        function offerMushroom(){
                            switch(input.value.toLowerCase()){

                                case 'j':
                                text.innerHTML += '<p> Du kikar upp på vargen som fingrar med sina klor på sin kaffekopp och frågar: ' + 
                                                '<br> "Du skulle inte vilja ha lite svamp?" <br> "Nej tack, jag gillar inte svampar." svarade vargen.' + 
                                                '<br> "OK" </p>'

                                                theEnd()
                                break

                                case 'n':
                                    text.innerHTML += '<p> Aldrig i din vildaste fantasi skulle du ens komma på tanken att ge honom en svamp som du visste var giftig,' +
                                                        ' inte ens en varg som äter mormorsar förtjänar svampdöden. Du vänder dig mot vargen och frågar: <br> ' + 
                                                        '"Nu när du ätit upp min mormor...kan du bli min nya mormor?" <br> Vargen log brett och sa: "självklart. <br> "... Coolt"' +
                                                        userName + '.'
                                                        
                                                        theEnd()
                                break

                                default:
                                    text.innerHTML += wrongInput
                                    button.onclick = offerMushroom
                            }
                        }
                    
                }

                else{
                    text.innerHTML += '<p> Du vänder dig mot vargen och frågar: <br> "Nu när du ätit upp min mormor...skulle du vilja bli min nya mormor då?" <br> Vargen log brett och sa: "självklart. <br> "... Coolt"' 
                     theEnd()
                }
            }

        }
    }
}

/**
 * The ending if wolf is at grandma's house and you told the hunter the truth. The user gets to choose if user knows if wolf eaten someone lately
 */
function wolfHunterEnding(){
    text.innerHTML += '<p> Vargen tittade skyldigt ner på sin mage och sa: <br> "Det värsta är att hon inte ens smakade g-" <br> "PEW!" <br>' +
                    ' Plötsligt sätter sig en pil med röd fjäder i vargens hals. Han segnar ihop på golvet i en hög. Mannen du träffade på stigen ' + 
                    ' ganska nyss kliver fram. <br> Jägaren: "Förlåt för det där, men han har problem den där vargen. Han har för vana att äta upp ' + 
                    ' människor lite till höger och vänster. Egentligen brukar han äta medicin mot det begäret men du ser, han rymde från vargreservatet för ' + 
                    ' en vecka sedan och jag har jagat honom sen dess. Vet du om han hunnit äta upp någon än?" (J/N)</p>'

                    button.onclick = eatenOrNot

                    /** Handles user's choise to lie or not and which ending that will be played out*/
                    function eatenOrNot(){
                        switch (input.value.toLowerCase()){
                            case 'j':
                                text.innerHTML += '<p> "Ja, han åt min mormor för bara en stund sen" <br> Medan jägaren lyfter upp den sovande vargen på sina axlar säger han: ' + 
                                                    ' "Jaså, det gjorde han. Då tar vi honom ' + 
                                                    'till operationsbordet, så får du tillbaka henne om en vecka. Du kan hämta henne vid närmaste postombud. ' +
                                                    'vilket innebär att vi skickar henne med PostNord, vilket i sin tur innebär att hon kanske inte kommer fram ' +
                                                    'men vi skickar ett sms om hon gör det! På återseende". Sedan försvann jägaren runt skogsbrynet. <br> Du tittar länge efter honom, och säger sedan: <br> "Men jag har ingen mobil..."</p>'
                                                    theEnd() 
                                break

                            case 'n':
                                text.innerHTML += '<p> Du tar tillfället i akt och säger "Nej", ty du har egentligen aldrig tyckt om din mormor...</p>'
                                theEnd()
                                break

                            default:
                                text.innerHTML += wrongInput
                                button.onclick = eatenOrNot
                        }
                    }

}

/**
 * If the grandma miraculously is alive at the end of the game, this is the endings you get depending on if user has mushroom or not
 */
function grandmaEnding(){

    text.innerHTML+= '<p> Mormor öppnar dörren.</p>'

    if(mushroom){
        text.innerHTML += '<p> "Hej mormor. Vill du ha svamp?" </p>'
        theEnd()
    }

    else{
        text.innerHTML += '"Hej mormor. Vad trevligt att du lever!'
        theEnd()
    }

}









/**
 *  --- GAME PLAY ---
 */


/**
 * --- USER IS AT HOME ---
 * First input from user. Sets name of character and collects food and drink in basket
 */
function initialInput(){
    userName = input.value + "luvan"
    text.innerHTML += '<p>"' + userName + '! Har du glömt att du ska till mormor med lunch idag?! " <br> Du reser dig upp ur sängen och tänker: '+
    '"Gaffel också" och slänger på dig dina kläder och springer ner. <br> <br> Väl där nere frågar din mor: "Vad tror du mormor vill ha att äta idag?"</p>'
    
    button.onclick = event1
    
}

 function event1(){
     food = input.value
     basket.push(input.value)

     text.innerHTML += '<p> "Okej, jaja. Jag packar väl ner ' + food + '. Vad tror du hon vill ha att dricka? </p>'

     button.onclick = event2
}

/**
 * --- GOOD BYE MOM. 
 * The beginning of the user's journey. 
 * The user finds its first breadcrumb
 */
function event2(){
    drink = input.value
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
 * The Mushroom-functions. Will the user pick it up and will the user eat it or store it in their basket
 */

function event3(){

    text.innerHTML += '<p> Skogen bjuder på många spännande dofter, men inget doftar så gott som din mormors kanelbullar. Du börjar fantisera om alla de kanelbullar du hoppas få äta när du kommer fram till mormors stuga. Bredvid ett träd precis vid stigen ser du en svamp. Mormor gillar svamp. Plocka upp den? (J/N)</p>'
    
    button.onclick = pickUpMushroom
    
    function pickUpMushroom(){

        switch(input.value) {

            case 'j':
            case 'J':
                text.innerHTML += '<p> Den ser stor och svampig ut. Vill du äta den på stubben? (J/N) </p>'
                console.log('test svamp')
                button.onclick = eatMushroom

                function eatMushroom(){
        
                    switch(input.value){

                        case 'j':
                        case 'J':
                            youDied()
                            break

                        case 'n':
                        case 'N':
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
        case 'N':
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
 * --- WOLF DIALOG ---
 * the user's dialog with the fluffy wolf.
 * These series of function tells and stores if you told the wolf the truth or not
 */

function event4(){
    
    text.innerHTML += '<p><br> Skogen bjuder på många spännande ljud. Fåglar som kvittrar, vinden som viner genom trädtopparna, en buske som prasslar medan en varg stiger ut ur den... ... ... <br> EN BUSKE SOM PRASSLAR MEDAN EN VARG STIGER UR DEN?!' +
    '<br> Vargen synar dig från top till tå, sedan öppnar han sitt tandprydda gap och börjar tala med sin hesa whiskeyröst <br> "Nämen hej kompis. Vad heter du?"' + 
    '<br> Din mamma har alltid sagt till dig att du inte ska prata med främmande människor, men hon sa inget om djur. <br> "Jag heter ' + userName + 
    '" <br> "MMMMjjjahajahaja...du ' + userName + ', vad är det du har i korgen?" <br> Du tittar ner i din korg och räknar upp innehållet: "' +
    basket + '" <br> "MMmmmåhååå, kan man få smaka något? <br> "Nej, maten jag har i min korg ska jag ge till mormor" <br> Vargen tittar på dig med surmulen blick.' +
    'Du börjar bli osäker, var det främmande människor eller främlingar överhuvudtaget man inte skulle prata med? Ska du berätta vad mormor bor (S) eller ska du ljuga för vargen? (F) </p>'
     
    button.onclick  = tellTruth

    function tellTruth(){

        switch(input.value){
            case 's':
            case 'S':
                text.innerHTML += '<p> Du bestämmer dig för att allt fluffigt går att lita på och berättar sanningen: <br> "Hon bor i andra sidan skogen, om du tar höger vid stigen" </p>'
                wolf = false
                wolfAtGrandma = true

                seeBreadCrumb(event5)
                break

            case 'f':
            case 'F':
                text.innerHTML += '<p> Du bestämmer dig för att även om vargen är söt och fluffig så är han en främling. För att dämpa skadan som redan är skedd så bestämmer du dig för att dra en vit lögn. Skriv en lögn att lura vargen med: </p>'
                              
                button.onclick = tellLie
                break
            
            default:
                text.innerHTML += wrongInput
                
                button.onclick = tellTruth
        }      
    }

    function tellLie(){
        
        text.innerHTML += '<br> "'+ input.value + '" <br> "Oj, då har du en bit att gå. Bäst att låta dig traska vidare. Farväl ' + userName + 
                            '!" <br> Ditt äventyr fortsätter. På stigen ser du en brödsmula.'
        
        seeBreadCrumb(event5)
    }
}


function event5(){

    text.innerHTML += '<p><br> EN VILD PIKACHU UPPENBARAR SIG! <br> Vad vill du göra: fånga, mata eller fly?</p>'

    button.onclick = pikachuEvent
}

/**
 * Event6 is a function where the user can choose to pick up a stick or not.
 */

function event6(){
    switch(input.value){
        case 'j':
        case 'J':
            basket.push('pinne')
            stick = true
            text.innerHTML += '<p> Du plockar upp den och lägger den i din korg. I din korg ser du nu massa bra grejer som: ' + basket + '. </p>'

            console.log(basket)
            
            break

        case 'n':
        case 'N':

        text.innerHTML += '<p> Du gillar inte pinnar, dessutom kan de vara farliga. Man kan ju faktiskt snubbla på den. </p>'

        
        break

        default:
            text.innerHTML += wrongInput
    }

    text.innerHTML += '<br> Ditt äventyr fortsätter. På stigen ser du en brödsmula.'
    seeBreadCrumb(event7)
}

function event7(){
    text.innerHTML += '<p> Du kommer fram till ett vägskäl. Stigen delar sig som ett Y framför dig. Till höger ser du en mörk,' + 
    ' lummig väg som du vet leder till mormor. På stigen till vänster skiner solen och du ser du ett spår av brödsmulor som leder djupare in. ' + 
    '<br> Väljer du att gå höger (H) eller vänster (V)?</p>'

    button.onclick = choosePath

    function choosePath(){

    switch(input.value.toLowerCase()){
        case 'v':
            goToTheWitch()
            break
        
        case 'h':
            goToGrandma()
            break
        
        default:
            text.innerHTML += wrongInput
    }

    }
}



function goToGrandma(){
    text.innerHTML += '<p> <br> "Det är långt till mormor, men så småningom börjar du skymta slutet av stigen och den lilla röda stugan" </p>'

    if(wolfAtGrandma){
        talkToHunter()
    }

    else{
        atGrandma()
    }
}

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

function wolfEnding(){
    text.innerHTML += '<p> Dörren öppnas. Där står din mormor...fast...hon ser lite annorlunda ut, mjukare ut. Ställ en fråga till mormor: </p>'
    button.onclick = askFirstQuestion

    function askFirstQuestion(){
        text.innerHTML += '"' + input.value + '"' + ' <p> Mormor svarar: "Ingen kommentar" <br> Du känner fortfarande på dig att något är lurt. Ställ en fråga till: </p>'
        button.onclick = askSecondQuestion

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

function wolfHunterEnding(){
    text.innerHTML += '<p> Vargen tittade skyldigt ner på sin mage och sa: <br> "Det värsta är att hon inte ens smakade g-" <br> "PEW!" <br>' +
                    ' Plötsligt sätter sig en pil med röd fjäder i vargens hals. Han segnar ihop på golvet i en hög. Mannen du träffade på stigen ' + 
                    ' ganska nyss kliver fram. <br> Jägaren: "Förlåt för det där, men han har problem den där vargen. Han har för vana att äta upp ' + 
                    ' människor lite till höger och vänster. Egentligen brukar han äta medicin mot det begäret men du ser, han rymde från vargreservatet för ' + 
                    ' en vecka sedan och jag har jagat honom sen dess. Vet du om han hunnit äta upp någon än?" (J/N)</p>'

                    button.onclick = eatenOrNot

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

function talkToHunter(){
    text.innerHTML += '<p> <br> En lång och mörk gubbe ställer sig framför dig på stigen. På hans rygg hänger ett gevär. Han tittar med skarp ' + 
                        'blick rakt in i dina ögon.<br> Jägaren: "Hej skogsvandrare. Du har möjligtvis inte sett en fluffig varg springa runt ' + 
                        'i krokarna?" <br> <br> Du vet inte riktigt vad du ska svara för även om du tycker vargar är lite otäcka så tycker du ' + 
                        'att jägaren är ännu otäckare. Berättar du: <br> - Sanning <br> - Lögn  </p>'

                        button.onclick = tellTrutchOrLieHunter

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

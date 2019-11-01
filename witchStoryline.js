
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

    console.log(breadCrumbsLeft)
    text.innerHTML += '<p> Du börjar se slutet av stigen och skymtar en stor äng. På denna stora äng står det en stor stuga gjord av....pepparkaka? <br>' + 
    ' <br> Du smyger långsamt fram till skogskanten. Kan det vara sant? Ett hus gjort av pepparkaka? <br> WOW, det kan vara bland det coolaste du sett ' + 
    'i hela ditt liv. Du blir himla nyfiken på vem som bor i ett sådant hus, men vågar du gå närmare? Vad gör du? Knackar på, smyger närmare eller går därifrån? </p>'

    enterTheGingerbreadHouse()
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
                    'fram till den glasyrklädda dörren.'
                    
    function answerDoor(){

        let knocks = 'KNACK KNACK KNACK'
        text.innerHTML += knocks
        
        let openDoor = getRandomNumber()

        if (openDoor <= 4){
            knocks = knocks + ' KNACK'
            text.innerHTML += '<p> Ingen svarade. Försöka igen? (J/N) </p>'
            
            if (input.value.toLowerCase() == 'j'){
                answerDoor()
            }

            else if(input.value.toLowerCase() == 'n'){
                sneakAway()
            }

            else{
                text.innerHTML += wrongInput
            }

        }

        else{
            text.innerHTML += '<p> Bakom dörren hör du fotsteg. </p>'
        }



    }

}


function sneakCloser(){
    text.innerHTML += '<p> Sneak closer </p>'
}

function sneakAway(){
    text.innerHTML += '<p> Sneak away </p>'
}


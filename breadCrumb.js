
/**
 * The breadcrumb-events is a series of functions that's reusable fot everytime the user sees a breadcrumb
 * 
 */

/**
 * Asks the user if user would like to pick up breadcrumb.
 */
function seeBreadCrumb(nextEvent){

    text.innerHTML += ' <p> Plocka upp brödsmulan? (J/N) </p>'

    button.onclick = pickBreadCrumb

    /**
     * Handles the user's answe if user would like to pick up breadcrumb and asks if user would like to do a pushup
     */
    function pickBreadCrumb(){ 
        
        switch (input.value.toLowerCase()){

            case 'j':
            breadCrumbs = breadCrumbs - 1
            text.innerHTML += '<p> Du böjer dig ner och lockar upp brödsmulan i din hand. Du undersöker den noggrant, dammar av de fåtal ' +
                            'gruskorn som satt på smulan, och slänger sedan in den i din mun. Medan du ändå är där nere så funderar du på om du ' + 
                            'ska göra en armhävning. <br> Gör du en armhävning? J/N </p>' 
            button.onclick = doPushUp
            break

            /**
             * Handles user-input if user wanted to do a pushup and the gain of strength if user chose 'J'
             */
            function doPushUp(){

                switch(input.value.toLowerCase()){

                    case 'j':
                        userStrength = userStrength + 1
                        text.innerHTML += '<p> Du gör en armhävning och känner dig som en riktig spännis.</p>'
                        nextEvent()
                        break
                            
                    case 'n':
                        text.innerHTML += '<p> Äsh, trams. Vem i sitt sinnes fulla bruk gör en armhävning mitt ute i skogen? </p>'
                        nextEvent()
                        break
                    
                
                    default:
                        text.innerHTML += wrongInput
                        button.onlick = doPushUp
                }
                
            }

        case 'n':
            text.innerHTML += '<p> Brödsmulan ser inte tillräckligt aptitlig ut. Du promenerar vidare.</p>'
            nextEvent()
            break
            
        default:
            text.innerHTML += wrongInput
            button.onclick = pickBreadCrumb
        }      
    }
}
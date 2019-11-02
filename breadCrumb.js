
/**
 * The breadcrumb-function that's a reusable loop of functions to use everytime the user sees a breadcrumb
 * 
 * NEED TO FIX ISSUE WITH PROGRAM LOSING PACE AFTER everything that's not wrong input.
 */

function seeBreadCrumb(nextEvent){

    text.innerHTML += ' Plocka upp brödsmulan? (J/N)'

    button.onclick = pickBreadCrumb

    function pickBreadCrumb(){ 
        
        switch (input.value){

            case 'j':
            case 'J':
            breadCrumbs = breadCrumbs - 1
            text.innerHTML += '<br> Du böjer dig ner och lockar upp brödsmulan i din hand. Du undersöker den noggrant, dammar av de fåtal gruskorn som satt på det, och slänger sedan in smulan i munnen. Medan du ändå är där nere så funderar du på om du ska göra en armhävning. <br> Gör du en armhävning? J/N' 
            button.onclick = doPushUp
            break

            function doPushUp(){
                console.log('Gör en armhävning')

                switch(input.value){
                case 'j':
                case 'J':
                    userStrength = userStrength + 1
                    text.innerHTML += '<br> Du gör en armhävning och känner dig som en riktig spännis.'
                    nextEvent()
                    break
                
            
                case 'n':
                case 'N':
                    text.innerHTML += '<br> Äsh, trams. Vem i sitt sinnes fulla bruk gör en armhävning mitt ute i skogen?'
                    nextEvent()
                    break
                
            
                default:
                    text.innerHTML += wrongInput
                    button.onlick = doPushUp
                }
                
            }

        case 'n':
        case 'N':
            text.innerHTML += '<br> Brödsmulan ser inte tillräckligt aptitlig ut. Du promenerar vidare.'
            nextEvent()
            break
            
        default:
            text.innerHTML += wrongInput
            button.onclick = pickBreadCrumb
        }      
    }

/*     function eventDirection(){
     
        switch (breadCrumbsLeft){

            case 4:

                 return button.onclick = event3
                
            case 3:

                return button.onclick = event5
                
            default:
                console.log('Nu blev det fel')

        }
    } */
}
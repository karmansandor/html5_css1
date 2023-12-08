//Elemek kiválasztása
// @param selector: string - az elemet kiválasztó szelektor
function _q( selector ) {
    //Elemek kiválasztása
    var elements = document.querySelectorAll( selector );
    
    return elements;
    
}


//Profile beviteli mező megjelenítése
function showProfile() {
    
    // elem kiválasztása
    var div = document.querySelector(".profile-div");
    
    //ha a show class hozzá van adva az elemhez, különben megjelenítjük
    if ( div.classList.contains("show") ) {
        div.classList.remove("show");
    } else {
    div.classList.add("show");
    }
} 
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


// Késleltetett megjelenítés
setTimeout(function () {
    $("#myModal").modal("show");
}, 5000 );

//Popover beállítása
$('#popover1').popover();

// a folyamat állása
function changeProgress( progress ) {
    
    if ( !progress) {
        progress = document.querySelector( ".progress-value" ).value;
    }
    
    //Reguláris kifejezéssel eltávolítjuk vagy átalakítjuk a hibás karaktereket
    progress = progress.replace(/[^0-9\.]/g, ""); 
    progress = progress.replace(/,/g, ".");
    
    progress = parseFloat(progress);
    if (!progress || isNaN(progress))
        return;
    
  var bar = document.querySelector( ".progress .progress-bar");
    bar.style.width =progress + "%";
}
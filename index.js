let nav = document.getElementById("navbar")
let menu = document.getElementById("menu")

nav.addEventListener( "click", navopen)

function navopen(){
    if( menu.style.display === "none"){
        menu.style.display = "grid"
    } else{
        menu.style.display = "none"
    }
}
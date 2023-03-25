const nav = document.getElementById("navbar")
const menu = document.getElementById("menu")
const banner = document.querySelector("div#taker")
const ban = document.querySelector("div#take")
let images = ["url(../Image/model1.jpg)", "url(../Image/model2.jpg)", "url('https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/01/14190548/towfiqu-barbhuiya-0BEqLfQwVzM-unsplash-1350x900.jpg?tr=w-1920')"]

nav.addEventListener( "click", navopen)

function navopen(){
    if( menu.style.display === "none"){
        menu.style.display = "grid"
    } else{
        menu.style.display = "none"
    }
}
let nu = 0;
function carousel(){
    if (nu > images.length - 1 ){
        nu = 0
                banner.style.backgroundImage = images[nu];
        banner.animate([
            { opacity: 0, },
            {opacity: 0.5},
            {opacity: 0.8},
            {opacity: 1},
            {opacity: 0.5},
            { opacity: 0, }
          ], {
            duration: 5000, 
            fill: 'forwards' 
          });
        nu++
    }else {
        banner.style.backgroundImage = images[nu];
        banner.animate([
            { opacity: 0},
            {opacity: 0.5},
            {opacity: 0.8},
            {opacity: 1},
            {opacity: 0.5},
            { opacity: 0,}
          ], {
            duration: 5000, 
            fill: 'forwards' 
          });
        banner.style.color = "white"
        nu++
    }
}
setInterval( carousel, 5000);
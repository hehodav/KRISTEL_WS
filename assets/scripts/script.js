/*************************************************************************
*                            NAVBAR                                      *
**************************************************************************/


// Sélectionne l'élément de la barre de navigation
const navbar = document.querySelector(".navbar"); 
const headerHeight = document.querySelector("header").height;
console.log(headerHeight);

// Ajoute un écouteur d'événement pour le défilement de la page 
window.addEventListener("scroll", function() { 
    // Vérifie si l'utilisateur a défilé vers le haut 
    if(window.scrollY > 50 && window.scrollY <= 700 )  { 
        // Affiche la barre de navigation 
        navbar.style.backgroundColor = "var(--secondaryColor)"; 
        navbar.style.opacity = 0.7;    
    } 
    else if(window.scrollY > 700)  { 
        // Affiche la barre de navigation 
        navbar.style.backgroundColor = "var(--secondaryColor)"; 
        navbar.style.opacity = 1;    
    } 
    else { 
        // Cache la barre de navigation 
        navbar.style.backgroundColor = ""; } }); 


/*************************************************************************
*                            HOME PAGE                                   *
**************************************************************************/

/**************************       HEADER     *****************************/

// Survol des liens vers les réseaux sociaux
const logoFacebook = document.querySelector("#logoFacebook");
logoFacebook.addEventListener("mouseover", function() {
    logoFacebook.src = "./assets/logos/facebook_black.webp";
})
logoFacebook.addEventListener("mouseout", function() {
    logoFacebook.src = "./assets/logos/facebook_red.webp";
})

const logoInstagram = document.querySelector("#logoInstagram");
logoInstagram.addEventListener("mouseover", function() {
    logoInstagram.src = "./assets/logos/Instagram_black.webp";
})
logoInstagram.addEventListener("mouseout", function() {
    logoInstagram.src = "./assets/logos/Instagram_red.webp";
})

const logoTikTok = document.querySelector("#logoTikTok");
logoTikTok.addEventListener("mouseover", function() {
    logoTikTok.src = "./assets/logos/TikTok_black.webp";
})
logoTikTok.addEventListener("mouseout", function() {
    logoTikTok.src = "./assets/logos/TikTok_red.webp";
})

const logoYouTube = document.querySelector("#logoYouTube");
logoYouTube.addEventListener("mouseover", function() {
    logoYouTube.src = "./assets/logos/YouTube_black.webp";
})
logoYouTube.addEventListener("mouseout", function() {
    logoYouTube.src = "./assets/logos/YouTube_red.webp";
})

const logoSpotify = document.querySelector("#logoSpotify");
logoSpotify.addEventListener("mouseover", function() {
    logoSpotify.src = "./assets/logos/Spotify_black.webp";
})
logoSpotify.addEventListener("mouseout", function() {
    logoSpotify.src = "./assets/logos/Spotify_red.webp";
})


//Apparition des icônes
document.addEventListener('DOMContentLoaded', () => {
    const iconesHeaderHome = document.querySelectorAll('.icones img');
    
    iconesHeaderHome[0].style.transform = 'scale(1)';
    iconesHeaderHome[0].style.opacity = '1';
    iconesHeaderHome[1].style.transform = 'scale(1)';
    iconesHeaderHome[1].style.opacity = '1';
})
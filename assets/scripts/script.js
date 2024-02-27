/*************************************************************************
*                            NAVBAR                                      *
**************************************************************************/


// Sélectionne l'élément de la barre de navigation
const navbar = document.querySelector(".navbar"); 
const headerHeight = document.querySelector("header").height;

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
const logoFacebookHeader = document.querySelector("#logoFacebookHeader");
logoFacebookHeader.addEventListener("mouseover", function() {
    logoFacebookHeader.src = "./assets/logos/facebook_black.webp";
})
logoFacebookHeader.addEventListener("mouseout", function() {
    logoFacebookHeader.src = "./assets/logos/facebook_red.webp";
})

const logoInstagramHeader = document.querySelector("#logoInstagramHeader");
logoInstagramHeader.addEventListener("mouseover", function() {
    logoInstagramHeader.src = "./assets/logos/Instagram_black.webp";
})
logoInstagramHeader.addEventListener("mouseout", function() {
    logoInstagramHeader.src = "./assets/logos/Instagram_red.webp";
})

const logoTikTokHeader = document.querySelector("#logoTikTokHeader");
logoTikTokHeader.addEventListener("mouseover", function() {
    logoTikTokHeader.src = "./assets/logos/TikTok_black.webp";
})
logoTikTokHeader.addEventListener("mouseout", function() {
    logoTikTokHeader.src = "./assets/logos/TikTok_red.webp";
})

const logoYouTubeHeader = document.querySelector("#logoYouTubeHeader");
logoYouTubeHeader.addEventListener("mouseover", function() {
    logoYouTubeHeader.src = "./assets/logos/YouTube_black.webp";
})
logoYouTubeHeader.addEventListener("mouseout", function() {
    logoYouTubeHeader.src = "./assets/logos/YouTube_red.webp";
})

const logoSpotifyHeader = document.querySelector("#logoSpotifyHeader");
logoSpotifyHeader.addEventListener("mouseover", function() {
    logoSpotifyHeader.src = "./assets/logos/Spotify_black.webp";
})
logoSpotifyHeader.addEventListener("mouseout", function() {
    logoSpotifyHeader.src = "./assets/logos/Spotify_red.webp";
})


//Apparition des icônes
document.addEventListener('DOMContentLoaded', () => {
    const iconesHeaderHome = document.querySelectorAll('.icones img');
    
    iconesHeaderHome[0].style.transform = 'scale(1)';
    iconesHeaderHome[0].style.opacity = '1';
    iconesHeaderHome[1].style.transform = 'scale(1)';
    iconesHeaderHome[1].style.opacity = '1';
})


/**************************        MAIN      *****************************/
const groupHistory = document.querySelector(".group-history")

const openHistory = document.querySelector("#openHistory");
openHistory.addEventListener("click", function() {
    groupHistory.style.display = "flex";
})

const closeHistory = document.querySelector("#closeHistory");
    closeHistory.addEventListener("click", function() {
        groupHistory.style.display = "none";
})


/**************************       FOOTER     *****************************/

// Survol des liens vers les réseaux sociaux
const logoFacebookFooter = document.querySelector("#logoFacebookFooter");
logoFacebookFooter.addEventListener("mouseover", function() {
    logoFacebookFooter.src = "./assets/logos/facebook_white.png";
})
logoFacebookFooter.addEventListener("mouseout", function() {
    logoFacebookFooter.src = "./assets/logos/facebook_black.webp";
})

const logoInstagramFooter = document.querySelector("#logoInstagramFooter");
logoInstagramFooter.addEventListener("mouseover", function() {
    logoInstagramFooter.src = "./assets/logos/Instagram_white.png";
})
logoInstagramFooter.addEventListener("mouseout", function() {
    logoInstagramFooter.src = "./assets/logos/Instagram_black.webp";
})

const logoTikTokFooter = document.querySelector("#logoTikTokFooter");
logoTikTokFooter.addEventListener("mouseover", function() {
    logoTikTokFooter.src = "./assets/logos/TikTok_white.png";
})
logoTikTokFooter.addEventListener("mouseout", function() {
    logoTikTokFooter.src = "./assets/logos/TikTok_black.webp";
})

const logoYouTubeFooter = document.querySelector("#logoYouTubeFooter");
logoYouTubeFooter.addEventListener("mouseover", function() {
    logoYouTubeFooter.src = "./assets/logos/YouTube_white.png";
})
logoYouTubeFooter.addEventListener("mouseout", function() {
    logoYouTubeFooter.src = "./assets/logos/YouTube_black.webp";
})

const logoSpotifyFooter = document.querySelector("#logoSpotifyFooter");
logoSpotifyFooter.addEventListener("mouseover", function() {
    logoSpotifyFooter.src = "./assets/logos/Spotify_white.png";
})
logoSpotifyFooter.addEventListener("mouseout", function() {
    logoSpotifyFooter.src = "./assets/logos/Spotify_black.webp";
})
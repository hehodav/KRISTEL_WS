/*************************************************************************
*                            NAVBAR                                      *
**************************************************************************/


// Selecting navbar DOM elements
const navbar = document.querySelector(".navbar"); 
const dropdownMenu = document.querySelector(".dropdown-menu"); 


/**********************      Script NavBar V1     ************************/
// // Ajoute un écouteur d'événement pour le défilement de la page 
// window.addEventListener("scroll", function() { 
//     // Vérifie si l'utilisateur a défilé vers le haut 
//     if(window.scrollY <= 100) {
//         navbar.style.display = "flex";
//         navbar.style.backgroundColor = "";
//         dropdownMenu.style.backgroundColor = "";
//     } else if(window.scrollY > 100 && window.scrollY <= 700 )  { 
//         // Affiche la barre de navigation 
//         // navbar.style.backgroundColor = "var(--secondaryColor)"; 
//         // navbar.style.opacity = 0.7; 
//         // dropdownMenu.style.backgroundColor = "var(--secondaryColor)"; 
//         // dropdownMenu.style.opacity = 0.7;   
//         navbar.style.display = "none";
//     } 
//     else if(window.scrollY > 700)  { 
//         // Affiche la barre de navigation
//         navbar.style.display = "flex";
//         navbar.style.backgroundColor = "var(--secondaryColor)"; 
//         navbar.style.opacity = 1;   
//         dropdownMenu.style.backgroundColor = "var(--secondaryColor)"; 
//         dropdownMenu.style.opacity = 1;  
//     } 
//     else { 
//         // Cache la barre de navigation 
//         navbar.style.backgroundColor = "";
//         dropdownMenu.style.backgroundColor = "";
//      } 
// }); 
/*************************************************************************/


/**********************      Script NavBar V2     ************************/
let lastScrollPos = 0;

window.addEventListener("scroll", function() {
  const currentScrollPos = window.scrollY;
//   console.log(currentScrollPos);

  // If user is scrolling down, hide the navbar
  if  (currentScrollPos <= 0) {
    navbar.classList.remove("navbar_hide");
  } else {
  if (currentScrollPos > lastScrollPos) {
    navbar.classList.add("navbar_hide");
  } else {
    // If user is scrolling up, show the navbar
        if(window.scrollY <= 150) {
            navbar.classList.remove("navbar_hide");
            navbar.style.backgroundColor = "";
            dropdownMenu.style.backgroundColor = "";
        }
        if (window.scrollY > 150 && window.scrollY <= 700 )  {
            navbar.classList.remove("navbar_hide");
            navbar.style.backgroundColor = "var(--secondaryColor)"; 
            navbar.style.opacity = 0.7; 
            dropdownMenu.style.backgroundColor = "var(--secondaryColor)"; 
            dropdownMenu.style.opacity = 0.7;   
        }
        if(window.scrollY > 700)  {
            navbar.classList.remove("navbar_hide");
            navbar.style.backgroundColor = "var(--secondaryColor)"; 
            navbar.style.opacity = 1; 
            dropdownMenu.style.backgroundColor = "var(--secondaryColor)"; 
            dropdownMenu.style.opacity = 1; 
        }
    }
  }

  lastScrollPos = currentScrollPos;
});
/*************************************************************************/



/*************************************************************************
*                            HOME PAGE                                   *
**************************************************************************/

/**************************       HEADER     *****************************/

// Survol des liens vers les réseaux sociaux
const logoFacebookHeader = document.querySelector("#logoFacebookHeader");
logoFacebookHeader.addEventListener("mouseover", function() {
    logoFacebookHeader.src = "./assets/logos/facebook_black.webp";
});
logoFacebookHeader.addEventListener("mouseout", function() {
    logoFacebookHeader.src = "./assets/logos/facebook_red.webp";
});

const logoInstagramHeader = document.querySelector("#logoInstagramHeader");
logoInstagramHeader.addEventListener("mouseover", function() {
    logoInstagramHeader.src = "./assets/logos/Instagram_black.webp";
});
logoInstagramHeader.addEventListener("mouseout", function() {
    logoInstagramHeader.src = "./assets/logos/Instagram_red.webp";
});

const logoTikTokHeader = document.querySelector("#logoTikTokHeader");
logoTikTokHeader.addEventListener("mouseover", function() {
    logoTikTokHeader.src = "./assets/logos/TikTok_black.webp";
});
logoTikTokHeader.addEventListener("mouseout", function() {
    logoTikTokHeader.src = "./assets/logos/TikTok_red.webp";
});

const logoYouTubeHeader = document.querySelector("#logoYouTubeHeader");
logoYouTubeHeader.addEventListener("mouseover", function() {
    logoYouTubeHeader.src = "./assets/logos/YouTube_black.webp";
});
logoYouTubeHeader.addEventListener("mouseout", function() {
    logoYouTubeHeader.src = "./assets/logos/YouTube_red.webp";
});

const logoSpotifyHeader = document.querySelector("#logoSpotifyHeader");
logoSpotifyHeader.addEventListener("mouseover", function() {
    logoSpotifyHeader.src = "./assets/logos/Spotify_black.webp";
});
logoSpotifyHeader.addEventListener("mouseout", function() {
    logoSpotifyHeader.src = "./assets/logos/Spotify_red.webp";
});


//Apparition des icônes
document.addEventListener('DOMContentLoaded', () => {
    const iconesHeaderHome = document.querySelectorAll('.icones img');
    
    iconesHeaderHome[0].style.transform = 'scale(1)';
    iconesHeaderHome[0].style.opacity = '1';
    iconesHeaderHome[1].style.transform = 'scale(1)';
    iconesHeaderHome[1].style.opacity = '1';
});


/**************************        MAIN      *****************************/


/***************        Open / Close - Group Details     *****************/
const groupHistory = document.querySelector(".group-history");

const openHistory = document.querySelector("#openHistory");
openHistory.addEventListener("click", function() {
    groupHistory.style.display = "flex";
});

const closeHistory = document.querySelector("#closeHistory");
closeHistory.addEventListener("click", function() {
        groupHistory.style.display = "none";
});

/***************        Open / Close - Members 1 Details     *****************/
const membersCardsContent1 = document.querySelector(".members-cards-content-1");

const openMembersCardsContent1 = document.querySelector("#open-members-cards-content-1");
openMembersCardsContent1.addEventListener("click", function() {
    membersCardsContent1.style.display = "flex";
});

const closeMembersCardsContent1 = document.querySelector("#close-members-cards-content-1");
closeMembersCardsContent1.addEventListener("click", function() {
    membersCardsContent1.style.display = "none";
});

/***************        Open / Close - Members 2 Details     *****************/
const membersCardsContent2 = document.querySelector(".members-cards-content-2");

const openMembersCardsContent2 = document.querySelector("#open-members-cards-content-2");
openMembersCardsContent2.addEventListener("click", function() {
    membersCardsContent2.style.display = "flex";
});

const closeMembersCardsContent2 = document.querySelector("#close-members-cards-content-2");
closeMembersCardsContent2.addEventListener("click", function() {
    membersCardsContent2.style.display = "none";
});

/***************        Open / Close - Members 3 Details     *****************/
const membersCardsContent3 = document.querySelector(".members-cards-content-3");

const openMembersCardsContent3 = document.querySelector("#open-members-cards-content-3");
openMembersCardsContent3.addEventListener("click", function() {
    membersCardsContent3.style.display = "flex";
});

const closeMembersCardsContent3 = document.querySelector("#close-members-cards-content-3");
closeMembersCardsContent3.addEventListener("click", function() {
    membersCardsContent3.style.display = "none";
});


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
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
const logoInstagramHeader = document.querySelector("#logoInstagramHeader");
const logoTikTokHeader = document.querySelector("#logoTikTokHeader");
const logoYouTubeHeader = document.querySelector("#logoYouTubeHeader");
const logoSpotifyHeader = document.querySelector("#logoSpotifyHeader");

logoFacebookHeader.addEventListener("mouseover", function() {
    logoFacebookHeader.src = "./assets/logos/facebook_black.webp";
});
logoFacebookHeader.addEventListener("mouseout", function() {
    logoFacebookHeader.src = "./assets/logos/facebook_red.webp";
});


logoInstagramHeader.addEventListener("mouseover", function() {
    logoInstagramHeader.src = "./assets/logos/instagram_black.webp";
});
logoInstagramHeader.addEventListener("mouseout", function() {
    logoInstagramHeader.src = "./assets/logos/instagram_red.webp";
});


logoTikTokHeader.addEventListener("mouseover", function() {
    logoTikTokHeader.src = "./assets/logos/tiktok_black.webp";
});
logoTikTokHeader.addEventListener("mouseout", function() {
    logoTikTokHeader.src = "./assets/logos/tiktok_red.webp";
});


logoYouTubeHeader.addEventListener("mouseover", function() {
    logoYouTubeHeader.src = "./assets/logos/youtube_black.webp";
});
logoYouTubeHeader.addEventListener("mouseout", function() {
    logoYouTubeHeader.src = "./assets/logos/youtube_red.webp";
});


logoSpotifyHeader.addEventListener("mouseover", function() {
    logoSpotifyHeader.src = "./assets/logos/spotify_black.webp";
});
logoSpotifyHeader.addEventListener("mouseout", function() {
    logoSpotifyHeader.src = "./assets/logos/spotify_red.webp";
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
const logoInstagramFooter = document.querySelector("#logoInstagramFooter");
const logoTikTokFooter = document.querySelector("#logoTikTokFooter");
const logoYouTubeFooter = document.querySelector("#logoYouTubeFooter");
const logoSpotifyFooter = document.querySelector("#logoSpotifyFooter");

logoFacebookFooter.addEventListener("mouseover", function() {
    logoFacebookFooter.src = "./assets/logos/facebook_white.png";
})
logoFacebookFooter.addEventListener("mouseout", function() {
    logoFacebookFooter.src = "./assets/logos/facebook_black.webp";
})


logoInstagramFooter.addEventListener("mouseover", function() {
    logoInstagramFooter.src = "./assets/logos/instagram_white.png";
})
logoInstagramFooter.addEventListener("mouseout", function() {
    logoInstagramFooter.src = "./assets/logos/instagram_black.webp";
})


logoTikTokFooter.addEventListener("mouseover", function() {
    logoTikTokFooter.src = "./assets/logos/tiktok_white.png";
})
logoTikTokFooter.addEventListener("mouseout", function() {
    logoTikTokFooter.src = "./assets/logos/tiktok_black.webp";
})


logoYouTubeFooter.addEventListener("mouseover", function() {
    logoYouTubeFooter.src = "./assets/logos/youtube_white.png";
})
logoYouTubeFooter.addEventListener("mouseout", function() {
    logoYouTubeFooter.src = "./assets/logos/youtube_black.webp";
})


logoSpotifyFooter.addEventListener("mouseover", function() {
    logoSpotifyFooter.src = "./assets/logos/spotify_white.png";
})
logoSpotifyFooter.addEventListener("mouseout", function() {
    logoSpotifyFooter.src = "./assets/logos/spotify_black.webp";
})
/*************************************************************************
*                            NAVBAR                                      *
**************************************************************************/


/**********************      Script NavBar V1     ************************/

// Selecting navbar DOM elements
// const navbarContainer = document.querySelector(".navbar-container"); 
// const navbar = document.querySelector(".navbar");
// const dropdownMenu = document.querySelector(".dropdown-menu"); 
// const navbarMobileMenu = document.querySelector(".navbar-mobile_menu"); 


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
//
/*************************************************************************/


/**********************      Script NavBar V2     ************************/
/*************************************************************************/

let lastScrollPos = 0;

window.addEventListener("scroll", function() {
    // Selecting navbar DOM elements
    const navbarContainer = document.querySelector(".navbar-container"); 
    const navbar = document.querySelector(".navbar");
    const dropdownMenu = document.querySelector(".dropdown-menu"); 
    const navbarMobileMenu = document.querySelector(".navbar-mobile_menu"); 

    const currentScrollPos = window.scrollY;
    // console.log(currentScrollPos);
    
    // If user is scrolling down, hide the navbar
    if  (currentScrollPos <= 0) {
        navbarContainer.classList.remove("navbar_hide");
        navbarMobileMenu.classList.remove("navbar-mobile_menu_hide");
    } else {
        if (currentScrollPos > lastScrollPos) {
            navbarContainer.classList.add("navbar_hide");
            navbarMobileMenu.classList.add("navbar-mobile_menu_hide");
        } else {
            // If user is scrolling up, show the navbar
            if(window.scrollY <= 150) {
                navbarContainer.classList.remove("navbar_hide");
                navbarMobileMenu.classList.remove("navbar-mobile_menu_hide");
                navbar.style.backgroundColor = "";
                dropdownMenu.style.backgroundColor = "";
            }
            if (window.scrollY > 150 && window.scrollY <= 700 )  {
                navbarContainer.classList.remove("navbar_hide");
                navbarMobileMenu.classList.remove("navbar-mobile_menu_hide");
                navbar.style.backgroundColor = "var(--secondaryColor)"; 
                navbar.style.opacity = 0.7; 
                dropdownMenu.style.backgroundColor = "var(--secondaryColor)"; 
                dropdownMenu.style.opacity = 0.7;   
            }
            if(window.scrollY > 700)  {
                navbarContainer.classList.remove("navbar_hide");
                navbarMobileMenu.classList.remove("navbar-mobile_menu_hide");
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



/**********************    Script NavBar Mobile     **********************/
/*************************************************************************/


/**********************       Menu Burger        ************************/
const menuBurger = document.querySelector(".burger-menu");


menuBurger.addEventListener ("click", function() {
    const menuBurger = document.querySelector(".burger-menu");
    const dropdownMenuMobile = document.querySelector(".dropdown-menu-mobile");
    const btnOpenCloseMenuGaleries = document.querySelector("#btnOpenCloseMenuGaleries");
    const navbarMobileMenu = document.querySelector(".navbar-mobile_menu"); 
    const burgerMenuContainer = document.querySelector(".burger-menu-container");

    if (navbarMobileMenu.style.left === "0px") {
        navbarMobileMenu.style.transition = "all 1000ms ease"; 
        navbarMobileMenu.style.left = "400px";
        menuBurger.style.background = "url(./assets/ico/icons8-menu-60_black.webp)";
        menuBurger.style.height = "45px";
        menuBurger.style.width = "45px";
        menuBurger.style.backgroundSize = "cover";
        menuBurger.backgroundPosition = "center";
        burgerMenuContainer.style.boxShadow = "1px 1px 4px var(--tertiaryColor)";
        dropdownMenuMobile.style.display = "none";
        btnOpenCloseMenuGaleries.style.transform = "rotate(90deg)";
        setTimeout(function() {
            navbarMobileMenu.style.display = "none";
        }, "1000");
    } else {
        navbarMobileMenu.style.display = "flex";
        setTimeout(function() {
            navbarMobileMenu.style.transition = "all 1000ms ease";
            navbarMobileMenu.style.left = "0px";
            menuBurger.style.background = "url(./assets/ico/icons8-effacer-64_red.webp)";
            menuBurger.style.height = "45px";
            menuBurger.style.width = "45px";
            menuBurger.style.backgroundSize = "cover";
            menuBurger.backgroundPosition= "center";
            burgerMenuContainer.style.boxShadow = "1px 1px 4px var(--primaryColor)";
        }, "100");
    }
});

window.addEventListener("click", function(event) {
    const menuBurger = document.querySelector(".burger-menu");
    const dropdownMenuMobile = document.querySelector(".dropdown-menu-mobile");
    const btnOpenCloseMenuGaleries = document.querySelector("#btnOpenCloseMenuGaleries");
    const navbarMobileMenu = document.querySelector(".navbar-mobile_menu"); 
    const burgerMenuContainer = document.querySelector(".burger-menu-container");
    const navbarMobileLinkList = this.document.querySelector(".navbar-mobile_link-list")
    // console.log(navbarMobileLinkList)
    // console.log(event.target.parentNode)
    // console.log(event.target.parentNode.parentNode)
  
    if (    ((event.target.parentNode !== navbarMobileLinkList) && 
            (event.target.parentNode.parentNode !== navbarMobileLinkList) &&
            (event.target.parentNode.parentNode.parentNode !== navbarMobileLinkList) &&
            (event.target.parentNode.parentNode.parentNode.parentNode !== navbarMobileLinkList) &&
            (event.target.parentNode.parentNode.parentNode.parentNode.parentNode !== navbarMobileLinkList)) 
            && (navbarMobileMenu.style.left === "0px")
        ) 
    {
        navbarMobileMenu.style.transition = "all 1000ms ease"; 
        navbarMobileMenu.style.left = "400px";
        menuBurger.style.background = "url(./assets/ico/icons8-menu-60_black.webp)";
        menuBurger.style.height = "45px";
        menuBurger.style.width = "45px";
        menuBurger.style.backgroundSize = "cover";
        menuBurger.backgroundPosition = "center";
        burgerMenuContainer.style.boxShadow = "1px 1px 4px var(--tertiaryColor)";
        dropdownMenuMobile.style.display = "none";
        btnOpenCloseMenuGaleries.style.transform = "rotate(90deg)";
        setTimeout(function() {
            navbarMobileMenu.style.display = "none";
        }, "1000");
    }
});


/**********************       Dropdown Menu        **********************/
const btnOpenCloseMenuGaleries = document.querySelector("#btnOpenCloseMenuGaleries");

btnOpenCloseMenuGaleries.addEventListener ("click", function() {
    const dropdownMenuMobile   = document.querySelector(".dropdown-menu-mobile");
    
    if (dropdownMenuMobile.style.display === "flex") {
        btnOpenCloseMenuGaleries.style.transform = "rotate(90deg)";
        dropdownMenuMobile.style.display = "none";
    } else {
        btnOpenCloseMenuGaleries.style.transform = "rotate(180deg)";
        dropdownMenuMobile.style.display = "flex";
    }
});

const linkOpenCloseMenuGaleries = document.querySelector("#linkOpenCloseMenuGaleries");

linkOpenCloseMenuGaleries.addEventListener ("click", function() {
    const dropdownMenuMobile   = document.querySelector(".dropdown-menu-mobile");
    
    if (dropdownMenuMobile.style.display === "flex") {
        btnOpenCloseMenuGaleries.style.transform = "rotate(90deg)";
        dropdownMenuMobile.style.display = "none";
    } else {
        btnOpenCloseMenuGaleries.style.transform = "rotate(180deg)";
        dropdownMenuMobile.style.display = "flex";
    }
});


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
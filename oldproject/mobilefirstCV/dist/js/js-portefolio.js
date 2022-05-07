//////////////////////////////////////////
// Mouvement de ma barre de progression //
//////////////////////////////////////////

var barreWebmarketing = document.getElementById("barre-webmarketing");
var barreDesign = document.getElementById("barre-webdesign");
var barreDev = document.getElementById("barre-developpement");
var barreCms = document.getElementById("barre-cms");

function move(elem) {
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 70) {
      //console.log('I love you');
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

////////////////////////////////////////////////////////////////////////////
// Defilement pour mes barres de progressions (Intersection Observer API) //
////////////////////////////////////////////////////////////////////////////

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

var observer = new IntersectionObserver(handleIntersect, options);
observer.observe(barreWebmarketing);

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    console.log(entry.intersectionRect);
    if (entry.rootBounds) {
      move(barreWebmarketing);
      move(barreDesign);
      move(barreDev);
      move(barreCms);
    }
  });
}

//////////////////
// slider slick //
//////////////////

$(document).ready(function () {
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});


//////////////////
////// Menu //////
//////////////////

// Récupération des blocs
var mainMenu = document.querySelector("#menu");
var burgerMenu = document.querySelector("#menu-burger");

////////////////////////////////////
///// Clic sur le menu burger //////
////////////////////////////////////

// Vérifie si l'événement touchstart existe et est le premier déclenché
var clickedEvent = "click"; // Au clic si "touchstart" n'est pas détecté
window.addEventListener('touchstart', function detectTouch() {
  clickedEvent = "touchstart"; // Transforme l'événement en "touchstart"
  window.removeEventListener('touchstart', detectTouch, false);
}, false);

// Créé un "toggle class" en Javascrit natif (compatible partout)
burgerMenu.addEventListener(clickedEvent, function (evt) {
  console.log(clickedEvent);
  // Modification du menu burger
  if (!this.getAttribute("class")) {
    this.setAttribute("class", "clicked");
  } else {
    this.removeAttribute("class");
  }
  // Variante avec x.classList (ou DOMTokenList), pas 100% compatible avant IE 11...
  // burgerMenu.classList.toggle("clicked");

  // Créé l'effet pour le menu slide (compatible partout)
  if (mainMenu.getAttribute("class") != "visible") {
    mainMenu.setAttribute("class", "visible");
  } else {
    mainMenu.setAttribute("class", "invisible");
  }
}, false);

////////////////////
////// Ancres //////
////////////////////

// supprimer le menu blanc au click
//var liMenuGauche = document.querySelectorAll("#menu > ul > li.li-menu-gauche").forEach(e => parentNode.remove(e).stopPropagation(e));
var liMenuGauche = document.querySelectorAll("li[class*=li-menu-gauche]");
liMenuGauche.forEach(function (evt) {
    evt.onclick = function () {
      burgerMenu.classList.toggle("clicked");
      mainMenu.classList.toggle("invisible");
    };
})
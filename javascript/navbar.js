let isHamburgerMenuOpen = false;
const menu = document.getElementById("navbar-hamburger-menu");
const menuButton = document.getElementById("hamburger");
const menuButtonIcon = document.getElementById("hamb-logo");
const menuElementsHamb = document.getElementsByClassName("lmao-lazy");
const body = document.getElementById("body");

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-wrapper");
      $nav.toggleClass("navbar-scrolled", $(this).scrollTop() > $nav.height());
    });
  });

function handleHambNavbar() {
  if (isHamburgerMenuOpen) {
    menu.classList.remove("open");
    body.style.overflowY = "";
  } else {
    menu.classList.add("open");
    body.style.overflowY = "hidden";
  }
  isHamburgerMenuOpen = !isHamburgerMenuOpen;
}

menuButtonIcon.addEventListener("click", handleHambNavbar);
menuButton.addEventListener("click", handleHambNavbar);
for (let i = 0; i < menuElementsHamb.length; i++) {
  menuElementsHamb.item(i).addEventListener("click", handleHambNavbar);
}

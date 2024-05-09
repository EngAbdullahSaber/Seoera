window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".navber__section");
var navbarButton = document.querySelector(".btn1");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    console.log(navbarButton);
    navbar.classList.add("sticky");
    navbar.classList.add("scroll");
    navbarButton.classList.add("button__scroll");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("scroll");
    navbarButton.classList.remove("button__scroll");
  }
}

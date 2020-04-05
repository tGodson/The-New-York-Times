window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var footer = document.getElementById("sticky-footer");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    footer.classList.add("sticky-base");
  } else {
    header.classList.remove("sticky");
     footer.classList.remove("sticky-base");
  }
}
//mostrar e ocultar menu mobile
"use strict";
function change() {
  const display = document.querySelector(".sub").style.display;
  if (display != "block") {
    document.querySelector(".sub").style.display = "block";
  } else {
    document.querySelector(".sub").style.display = "none";
  }
}

//Submenu do menu mobile
function change_sub() {
  const display = document.querySelector(".subGaleria").style.display;
  if (display != "block")
    document.querySelector(".subGaleria").style.display = "block";
  else {
    document.querySelector(".subGaleria").style.display = "none";
  }
}

//scroll

function activeScroll() {
  document.querySelectorAll(".foto").forEach((img) => {
    if (img.getBoundingClientRect().top <= innerHeight) {
      img.src = img.getAttribute("data-src");
    }
  });
    console.log(innerHeight)
}
window.addEventListener("scroll", activeScroll);

//##################################################

let initial = 0;
let writeThis = "Sejam bem-vindos ao universo da imaginação.";
function typeWrite() {
  if (initial < writeThis.length) {
    document.querySelector(".type").innerHTML += writeThis.charAt(initial);
    initial++;
    setTimeout(typeWrite, 100);
  }
}
typeWrite();

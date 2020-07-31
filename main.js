//mostrar e ocultar menu mobile
function mudar() {
    let display = document.querySelector(".sub").style.display;
    if (display == "none")
        document.querySelector(".sub").style.display = 'block';
    else {
        document.querySelector(".sub").style.display = 'none';
    }
}

//Submenu do menu mobile
function mudar2() {
    let display = document.querySelector(".subGaleria").style.display;
    if (display == "none")
        document.querySelector(".subGaleria").style.display = 'block';
    else {
        document.querySelector(".subGaleria").style.display = 'none';
    }
}


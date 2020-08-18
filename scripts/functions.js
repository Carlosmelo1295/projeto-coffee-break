//mostrar e ocultar menu mobile
function change() {
    const display = document.querySelector(".sub").style.display;
    if (display != "block") {
        document.querySelector(".sub").style.display = 'block';
    } else {
        document.querySelector(".sub").style.display = 'none';
    }
}

//Submenu do menu mobile
function change_sub() {
    const display = document.querySelector(".subGaleria").style.display;
    if (display != "block")
        document.querySelector(".subGaleria").style.display = 'block';
    else {
        document.querySelector(".subGaleria").style.display = 'none';
    }
}

//####################################################################

const focusBox = document.querySelector('div.procura');
const search = document.querySelector('#procura');
const btn = document.querySelector('#btn')

//dar foco na caixa de pesquisa
function focusOn() {
    focusBox.style.boxShadow = '0 0 10px white'
    btn.style.transform = "translateX(5px)"
    btn.style.boxShadow = '0 5px 10px black'
    btn.style.transition = '500ms'
}
//tirar foco da caixa de pesquisa
function focusOff() {
    btn.style.transform = "translateX(0px)"
    btn.style.boxShadow = 'none'
    focusBox.style.boxShadow = 'none'
}
//scroll


function activeScroll() {

    document.querySelectorAll('.foto').forEach((img) => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.getAttribute('data-src');
        };
    })
}
window.addEventListener('scroll', activeScroll);

//##################################################

let initial = 0
let writeThis = "Sejam bem-vindos ao universo da imaginação."
function typeWrite() {
    if (initial < writeThis.length) {
        document.querySelector(".type").innerHTML += writeThis.charAt(initial);
        initial++
        setTimeout(typeWrite, 100)
    }
}
typeWrite()
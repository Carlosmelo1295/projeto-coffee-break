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

//dar foco na caixa de pesquisa
function focar() {
    var focusBox = document.querySelector('div.procura');
    var search = document.querySelector('#procura');
    var btn = document.querySelector('#btn')
    focusBox.style.boxShadow = '0 0 10px white'
    btn.style.transform = "translateX(5px)"
    btn.style.boxShadow = '0 5px 10px black'
    btn.style.transition = '500ms'
}
//tirar foco da caixa de pesquisa
function desfocar() {
    var desfoque = document.querySelector('div.procura')
    var btn = document.querySelector('#btn')
    btn.style.transform = "translateX(0px)"
    btn.style.boxShadow = 'none'
    desfoque.style.boxShadow = 'none'
}
//scroll
function ativaNoScroll() {

    document.querySelectorAll('.foto').forEach((img, index) => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.getAttribute('data-src');
        };
    })
}

window.addEventListener('scroll', ativaNoScroll);
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

//validar campo de pesquisa

function focar() {
    var focusBox = document.querySelector('div.procura')
    var search = document.querySelector('#procura')
    var btn = document.querySelector('#btn')
    if (search.value == "") {
        focusBox.style.boxShadow = '0 0 10px red'
        alert('Caixa vazia!')
    } else {
        btn.style.transform = "translateX(0px)"
        btn.style.boxShadow = 'none'

    }
}

function desfocar() {
    var desfoque = document.querySelector('div.procura')
    var btn = document.querySelector('#btn')
    btn.style.transform = "translateX(5px)"
    btn.style.boxShadow = '0 5px 10px black'
    desfoque.style.boxShadow = 'none'
}
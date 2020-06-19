//código de confirmação de saída 
function confirmaSaida() {
    return 'Tem certeza de que deseja sair desta página?';

}

window.onbeforeunload = confirmaSaida; // para chamar a função antes da página ser recarregada 

//mostrar e ocultar menu mobile
function mudar() {
    let display = document.querySelector(".sub").style.display;
    if (display == "none")
        document.querySelector(".sub").style.display = 'block';
    else
        document.querySelector(".sub").style.display = 'none';
}
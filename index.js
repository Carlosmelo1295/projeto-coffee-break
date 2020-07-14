   /*exibir mensagem de carregando*/
   window.onload = function () {
       document.getElementById('conteudo').style.display = "block";
       setTimeout(function () {
           document.getElementById('carregando').style.display = "none";
       }, 2000);
   }
   

   //mostrar e ocultar menu mobile
   function mudar() {
       let display = document.querySelector(".sub").style.display;
       if (display == "none")
           document.querySelector(".sub").style.display = 'block';
       else
           document.querySelector(".sub").style.display = 'none';
   }

   function mudar2() {
       let display = document.querySelector(".subGaleria").style.display;
       if (display == "none")
           document.querySelector(".subGaleria").style.display = 'block';

       else
           document.querySelector(".subGaleria").style.display = 'none';
   }

   
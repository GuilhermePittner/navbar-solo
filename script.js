const variaveis = [
    hamburguer = document.querySelector(".hamburguer"),
    nav_list = document.querySelector(".nav__lista-mobile"),
    ul_list = document.querySelector(".lista-mobile")
];

/* abrir ou ocultar o menu dropdown */

hamburguer.addEventListener("click", function dropdown(){
    nav_list.classList.toggle("ocultar");
});

ul_list.addEventListener("click", function dropdown(){
    nav_list.classList.toggle("ocultar");
});

/* abrir ou ocultar o menu dropdown */
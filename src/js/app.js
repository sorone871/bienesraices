document.addEventListener('DOMContentLoaded', function(){

    eventListeners();
});

function eventListeners(){
    const mobilMenu = document.querySelector('.mobil-menu');

    mobilMenu.addEventListener('click', functionnavegacionResponsive);
}

function functionnavegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    // if (navegacion.classList.contains('mostrar')) {
    //     navegacion.classList.remove('mostrar');
    // }else{
    //     navegacion.classList.add('mostrar');
    // }
    navegacion.classList.toggle('mostrar');
}
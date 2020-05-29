const seccion2 = document.querySelector('.select-section2');
const jugador1 = document.querySelector('#gamer-form1');

function ocultaSeccion2(){
    seccion2.style.display="none";
    const valorJugadorUno = jugador1.selection.value;
    console.log(valorJugadorUno);
}

function mostrarSeccion2(){
    seccion2.style.display="flex";
}
/*
(function() {
    for (let number of arguments) {
      
      const seccion$number = document.querySelector('.select-section'+number);
    }
  })(1, 2, 3);
*/

const seccion1 = document.querySelector('.select-section1');
const seccion2 = document.querySelector('.select-section2');
const seccion3 = document.querySelector('.select-section3');
const footer = document.querySelector('.footer-class');
const jugador1 = document.querySelector('#gamer-form1');
const jugador2 = document.querySelector('#gamer-form2');
const jugador3 = document.querySelector('#gamer-form3');
var valorJugadorUno = "";
var valorJugadorDos = "";
var gamerWinner = "";

function mostrarSeccion2(callback){
    seccion2.style.display="flex";
    seccion1.style.display="none";
    let valorUno = OtorgarValorJugadorUno(function(valorJugadorUno){
        console.log('Jugador(Ricardo): '+valorJugadorUno);
    });
}

function OtorgarValorJugadorUno(callback){
    valorJugadorUno = jugador1.selection.value;
    callback(valorJugadorUno);
}

function OtorgarValorJugadorDos(callback){
    valorJugadorDos = jugador2.selection.value;
    callback(valorJugadorDos);
}

function validarGanador(){
    let valorUno = OtorgarValorJugadorDos(function(valorJugadorDos){
        console.log('Jugador(Barry): '+valorJugadorDos);
    });
    evaluarPartidas('Ricardo', valorJugadorUno, 'Barry', valorJugadorDos)
}

function evaluarPartidas(nameGamerUno, seleccionUno, nameGamerDos, seleccionDos){
    if(seleccionUno == 'piedra')
    {
        if(seleccionDos == 'piedra')
        {
            gamerWinner = 'Empate!!!';
        }
        else if(seleccionDos == 'papel')
        {
            gamerWinner = 'Ganaste '+nameGamerDos+'!!!';
        }
        else if(seleccionDos == 'tijera')
        {
            gamerWinner = 'Ganaste '+nameGamerUno+'!!!';
        }
    }
    else if(seleccionUno == 'papel')
    {
        if(seleccionDos == 'piedra')
        {
            gamerWinner = 'Ganaste '+nameGamerUno+'!!!';
        }
        else if(seleccionDos == 'papel')
        {
            gamerWinner = 'Empate!!!';
        }
        else if(seleccionDos == 'tijera')
        {
            gamerWinner = 'Ganaste '+nameGamerDos+'!!!';
        }
    }
    else if(seleccionUno == 'tijera')
    {
        if(seleccionDos == 'piedra')
        {
            gamerWinner = 'Ganaste '+nameGamerDos+'!!!';
        }
        else if(seleccionDos == 'papel')
        {
            gamerWinner = 'Ganaste '+nameGamerUno+'!!!';
        }
        else if(seleccionDos == 'tijera')
        {
            gamerWinner = 'Empate!!!';
        }
    }
    else
    {
        alert("Error en la matrix!!!");
    }

    alert(gamerWinner);
    seccion2.style.display="none";
    footer.style.display="flex";
    document.getElementById('footerWinner').innerHTML = gamerWinner;

}

function showAll(){
    seccion1.style.display="flex";
    seccion2.style.display="flex";
}

function regresar(){
    location.reload();
}
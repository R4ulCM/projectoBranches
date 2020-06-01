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
var gamerWinner = "";
var datosGame = [];
var letras="abcdefghyjklmnñopqrstuvwxyz";

function startGame(){    
    let valueInput = true;
    let cont = 1;
    let nameGamer;
    do{
        nameGamer = prompt("Introduce el nombre del jugador "+cont+": ");
        if(typeof(nameGamer) == 'object'){
            seccion1.style.display='none';
            break;
        }
        valueInput = ValidaInput('string', nameGamer);
        if(valueInput){
            datosGame.push([CapitalizeFirstLetter(nameGamer), ""]);
            cont++;
        }        
    }while(cont<=2);    
    for (var i = 0; i < datosGame.length; i++) {
        GetElement('jugador'+(i+1)).innerHTML = datosGame[i][0];
    }
}

function ValidaInput(typeTxt, valueTxt){
    if(typeTxt == 'string' && valueTxt.length >= 3){
        valueTxt = valueTxt.toLowerCase();
        for(i=0; i<valueTxt.length; i++){
            if (letras.indexOf(valueTxt.charAt(i),0)!=-1){
                return true;
            }
        }
        alert("El dato introducido no es valido ("+valueTxt+")");
        return false;
    }else{
        alert("El dato introducido no es valido o no cuenta con la cantidad minima de caracteres ("+valueTxt+")");
        return false;
    }
}

function GetElement(name){
    return document.getElementById(name);
}

function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mostrarSeccion2(callback){
    seccion2.style.display="flex";
    seccion1.style.display="none";
    datosGame[0][1] = jugador1.selection.value;
    ImprimeValor("Jugador "+datosGame[0][0]+": "+datosGame[0][1]);
}

function validarGanador(){
    datosGame[1][1] = jugador2.selection.value;
    ImprimeValor("Jugador "+datosGame[1][0]+": "+datosGame[1][1]);
    evaluarPartidas(datosGame[0][0], datosGame[0][1], datosGame[1][0], datosGame[1][1])
}

function ImprimeValor(value){
    console.log(value);
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

    seccion2.style.display="none";
    seccion3.style.display="flex";
    document.getElementById('footerWinner').innerHTML = gamerWinner;

}

function showAll(){
    seccion1.style.display="flex";
    seccion2.style.display="flex";
}

function regresar(){
    location.reload();
}

function CambioDeColor(){
    seccion2.style.background="black";
}
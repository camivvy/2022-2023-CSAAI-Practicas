console.log("Ejecuitando JS...");

//-- Elementos de la interfaz del juego
/* display1 = document.getElementById("display1")
display2 = document.getElementById("display2")
display3 = document.getElementById("display3")
display4 = document.getElementById("display4")

boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
boton3 = document.getElementById("boton3")
boton4 = document.getElementById("boton4")
boton5 = document.getElementById("boton5")
boton6 = document.getElementById("boton6")
boton7 = document.getElementById("boton7")
boton8 = document.getElementById("boton8")
boton9 = document.getElementById("boton9")
boton0 = document.getElementById("boton0") */
//Codigo secreto
var codigo = "";
var oculto = [];
var intento = [];
//Elemento html del codigo
var hueco = document.getElementById("codigo");
//Botones de numeros
var buttons = document.getElementsByClassName("digito")

//Escoge un codigo al azar
//-- Generar números aleatorios con un valor máximo
function getRandomInt() {
    codigo = Math.floor(Math.random() * 9999);
    console.log(codigo);
}

//Funcion pinta asteriscos
function asteriscos() {
    for (var i = 0; i < 4; i++) {
        oculto[i] = "*"
    }
    hueco.innerHTML = oculto.join("");
}

//Retroalimentacion botones de numeros
function teclado() {
    var buttons = "";
    for (let boton of buttons) {

        //-- Se ejecuta cuando se pulsa un boton
        //-- que es un dígito. Para que el código sea 
        //-- mas legible la función de retrollamada se
        //-- escribe como una función normal (digito)
        boton.onclick = buttons.innerHTML = intento.join("");
    }
    
}

function revisar(intento) {
    for (i=0 ; i<4; i++) {
        if (intento[i] == codigo[i]){
            hueco.innerHTML = oculto.join("");
        }
    }
}
 /* function teclado() {
    var buttons = "";
    document.getElementById("teclado").innerHTML = "";
 } */ 
// Revisar si coincide
/*
  function intentos(digito) {
    document.getElementById(digito).disabled = true;
    if(codigo.indexOf(digito) != -1) {
        for(var i=0; i<4; i++) {
            if(codigo[i] == digito) oculto[i] = digito;
        }
        hueco.innerHTML = oculto.join("");
    } 
    finished();
    //ns si hay q meter algo del cronometro aqui
} 
*/


//Revisar si hemos acabado
function finished() {
    if(oculto.indexOf("*")== -1){
       
        for(var i = 0; i<buttons.length; i++){
            buttons[i].disabled = true;
        }
    } 
    crono.stop();
} 

function iniciar() {
    getRandomInt();
    asteriscos();
    
}

window.onload = iniciar();

//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset")
}



//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}
console.log("Ejecuitando JS...");

//-- Elementos de la interfaz del juego
var display1 = document.getElementById("display1")
var display2 = document.getElementById("display2")
var display3 = document.getElementById("display3")
var display4 = document.getElementById("display4")

//Botones de numeros
const botones = document.getElementsByClassName("digito")
function valores(value)
{
  console.log("Valor: " + value);
}
var secretcode=[];
//secretcode = generarCodigo();

const ESTADO = {
    INIT: 0,
    OP1: 1,
}
let estado = ESTADO.INIT; 
function digito(ev)
{
    //-- Se ha recibido un dígito
    //-- Según en qué estado se encuentre la calculadora
    //-- se hará una cosa u otra

    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display
    if (estado == ESTADO.INIT) {
        display1.innerHTML = "*";
        display2.innerHTML = "*";
        display3.innerHTML = "*";
        display4.innerHTML = "*";
     secretcode = generarCodigo();
     console.log(secretcode); 
     //asociar();

    //-- Pasar al siguiente estado
     estado = ESTADO.OP1;
     crono.start();

    } 
    if(estado==ESTADO.OP1) {
        comparar(ev);
        console.log('11')
    } 
    
}
for (let boton of botones) {
    //-- Establecer la funcion de llamada del boton i
    //-- El parámetro ev.target contiene el boton
    //-- que ha recibido el click
      boton.onclick = digito;
  }

function comparar(ev){
    for(i=0;i<secretcode.length;i++)
    {  
        //console.log(secretcode[i])
        if(secretcode[0]==ev.target.value){
            console.log('AQUI')
            display1.innerHTML = ev.target.value;
            
        }
        if(secretcode[1]==ev.target.value){
            display2.innerHTML=ev.target.value
            
        }
        if(secretcode[2]==ev.target.value){
            display3.innerHTML=ev.target.value
            
        }
        if(secretcode[3]==ev.target.value){
            display4.innerHTML=ev.target.value
        }
    }

}

//-------- Resto de funciones de retrollamada
start.onclick = () => {
    crono.start
    estado = ESTADO.OP1;
}
stop.onclick = () => {
    estado = ESTADO.OP1;
  
}
reset.onclick = () => {
  display1.innerHTML = "*";
  display2.innerHTML = "*";
  display3.innerHTML = "*";
  display4.innerHTML = "*";

  estado = ESTADO.INIT;
}

//Escoge un codigo al azar y lo guarda en un array
function generarCodigo() {
    let codigo = [];
    for (let i = 0; i < 4; i++) {
      codigo.push(Math.floor(Math.random() * 10));
    }
    return codigo;
  }
  
  console.log(secretcode)
 
//Asocia los sitios del array con el display
  function asociar(){
    display1 = secretcode[0]
    display2 = secretcode[1]
    display3 = secretcode[2]
    display4 = secretcode[3]
  }



/*//Funcion pinta asteriscos
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


/*//Revisar si hemos acabado
function finished() {
    if(oculto.indexOf("*")== -1){
       
        for(var i = 0; i<buttons.length; i++){
            buttons[i].disabled = true;
        }
    } 
    crono.stop();
} 
*/
/* function iniciar() {
    getRandomInt();
     
}

window.onload = iniciar(); */

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
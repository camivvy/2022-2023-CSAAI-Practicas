console.log("Ejecuitando JS...");

//-- Elementos de la interfaz del juego
var display1 = document.getElementById("display1")
var display2 = document.getElementById("display2")
var display3 = document.getElementById("display3")
var display4 = document.getElementById("display4")

//contador para aciertos
var contador = 0;
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
     contador=0;
     //asociar();
    
    //-- Pasar al siguiente estado
     estado = ESTADO.OP1;
     crono.start();

    } 
    if(estado==ESTADO.OP1) {
        comparar(ev);
        console.log('11')
        
    } 
    if (contador == 4) {
        crono.stop();

    }
    
}
for (let boton of botones) {
    //-- Establecer la funcion de llamada del boton i
    //-- El parámetro ev.target contiene el boton
    //-- que ha recibido el click
      boton.onclick = digito;
  }

function comparar(ev){
    //for(i=0;i<secretcode.length;i++)
    {  
        //console.log(secretcode[i])
        if(secretcode[0]==ev.target.value){
            console.log('AQUI')
            display1.innerHTML = ev.target.value;
            contador = contador +1;
            
        }
        if(secretcode[1]==ev.target.value){
            display2.innerHTML=ev.target.value
            contador = contador +1;
            
        }
        if(secretcode[2]==ev.target.value){
            display3.innerHTML=ev.target.value
            contador = contador +1;
            
        }
        if(secretcode[3]==ev.target.value){
            display4.innerHTML=ev.target.value
            contador = contador +1;
        }
    }

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
    estado = ESTADO.OP1;
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
    estado = ESTADO.OP1;

}

//-- Reset del cronómetro
 gui.reset.onclick = () => {
    console.log("Reset!");
    display1.innerHTML = "*";
    display2.innerHTML = "*";
    display3.innerHTML = "*";
    display4.innerHTML = "*";

  estado = ESTADO.INIT;
    crono.reset();
} 
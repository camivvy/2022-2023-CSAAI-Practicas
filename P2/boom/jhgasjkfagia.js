console.log("Ejecuitando JS...");

//Botones de numeros
var buttons = document.getElementsByClassName("digito")

//Escoge un codigo al azar
function generarCodigo() {
    let codigo = [];
    for (let i = 0; i < 4; i++) {
      codigo.push(Math.floor(Math.random() * 10));
    }
    return codigo;
  }
  secretcode = generarCodigo();
  console.log(secretcode); 

  const ESTADO = {
    INIT: 0,
    OP1: 1,
  }
//Estado Inicial 
let estado = ESTADO.INIT 

  


console.log("Montando la red...")

const gui = {
  bsend : document.getElementById("bsend"),
  netdelay : document.getElementById("netdelay"),
  netdelayvalue : document.getElementById("netdelay_value"),
  nodedelay : document.getElementById("nodedelay"),
  nodedelayvalue : document.getElementById("nodedelay_value"),
  nodos: document.getElementById("nodos"),
  nodosvalue: document.getElementById("nodos_value") }

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const imgBack = document.getElementById('imagesrchide');
const imgCloud = document.getElementById('cloud');
const imgFront = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Gestionar el estado el envío
const state = {
  sendingImage: false,
  totalTime: 0,
  totalPackages:0,
  sendingPackage:0,
  netDelay: 1,
  netDelayDefault: 1,
  nodos : 3,
  retardo : 1,
  loop: null
}

//-- Iniciar el valor del deslizador con el valor de la 
// variable de estado para el delay
gui.nodedelayvalue.innerHTML = state.retardo;

//-- Cuando está disponible cargo la imagen con la nube para represntar el destino
imgCloud.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = imgCloud.width;
  canvas.height = imgCloud.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavía
  ctx.drawImage(imgCloud, 0, 0);

}

//-- función de callback para el envío de la imagen
gui.bsend.onclick = () => {
  sendImage()
}

//-- función de callback para actualizar los valores del 
// deslizador y la variable de estado para el delay

gui.nodedelay.oninput = () => {
  gui.nodedelayvalue.innerHTML = gui.nodedelay.value;
  state.retardo = gui.nodedelay.value;
}
gui.nodos.oninput = () => {
  gui.nodosvalue.innerHTML = gui.nodos.value;
  state.nodos = gui.nodos.value;
}

//-- simulación del envío de la imagen
//-- la he planteado como que cada línea horizontal de la imagen
//-- es un paquete de datos, que sufrirá el retardo correspondiente.
//-- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData

const sendImage = () => {

  console.log("Comienzo a enviar...");

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = imgFront.width;
  canvas.height = imgFront.width;  
 
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavía
  ctx.drawImage(imgFront, 0, 0);

  //-- Obtener la imagen del canvas en pixeles
  //let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  state.totalPackages = canvas.height;
  state.sendingImage = true;

  //-- declaro las variables fuera del loop
  //-- esta me servirá para seleccionar el rectángulo de la imagen
  let imgData = ctx.getImageData(0, 0, 1, 1)
  
  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  state.loop = setInterval(() => {

    state.totalTime++
    state.sendingPackage++

    //-- dimensiones del rectángulo 1
    sx1 = 0;
    sy1 = 0;
    sw1 = canvas.width;
    sh1 = state.sendingPackage;

    imgData = ctx.getImageData(sx1, sy1, sw1, sh1);

    //-- Obtener el array con todos los píxeles
    data = imgData.data

    //-- cambiamos el canal a rojo del rectángulo que hemos seleccionado
    for (let i = 0; i < data.length; i+=4) {
      data[i] = 0; //-- Canal rojo a 0 
    
    }
    
    //-- dimensiones del rectángulo 2
    sx2 = sx1;
    sy2 = sh1+1;
    sw2 = sw1;
    sh2 = state.totalPackages - sh1;

    // if (sh2 > 0) {
    //   //-- seleccionamos el rectángulo 2
    //   imgData = ctx.getImageData(sx2, sy2, sw2, sh2);

    //   //-- Obtener el array con todos los píxeles
    //   data = imgData.data
  
    //   for (let i = 0; i < data.length; i+=4) {
    //     // brillo = (3 * r + 4 * g + b)/8
    //     //let brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
    //     //data[i] = brillo;
    //     //data[i+1] = brillo;
    //     //data[i+2] = brillo; 
    //     //data[i] = 0;
    //     //data[i+1] = 0;
    //     data[i+2] = 0;         
    //   }  
    // }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);

    // Paramos el loop si hemos terminado de enviar
    if (state.sendingPackage == state.totalPackages) {
      ctx.drawImage(imgBack, 0, 0); 
      console.log("Envio terminado...");
      state.sendingImage = false;             
      clearInterval(state.loop);
    }

    console.log("Enviando...");
  },  state.nodos*state.retardo )
}

console.log("Red preparada...");
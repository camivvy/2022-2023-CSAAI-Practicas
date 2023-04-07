console.log("Ejecutando JS...");
// Cronometro
const gui = {
  display : document.getElementById("display"),
}
const crono = new Crono(gui.display);

// Deslizador Angulo
const angulo = document.getElementById("angulo");
const angulo_disp = document.getElementById("angulo_disp");

angulo.oninput = () => {
  angulo_disp.innerHTML = angulo.value;
}
// Deslizador Velocidad
const velocidad = document.getElementById("veloc");
const velocidad_disp = document.getElementById("veloc_disp");

velocidad.oninput = () => {
  velocidad_disp.innerHTML = velocidad.value;
}

const canvas = document.getElementById("canvas");
//-- Definir el tamaño del canvas
canvas.width = 700;
canvas.height = 370;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Posición inicial del elemento a animar
let x = 5;
let y = 345;

//-- Velocidad del objeto a lanzar
let velx = velocidad.value;
//-- Angulo del objeto a lanzar
let alfa = angulo.value;
// gravedad
let g = 9.8

//Posicion del objetivo
let xo = 600;
let yo = 345;

// Pintar lo inicial 
ctx.beginPath();
    ctx.rect(x, y, 20, 20);
    ctx.rect(xo,yo,20, 20);

    //-- Dibujar
    ctx.fillStyle = 'blue';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

//-- Función principal de animación
function update() 
{
  console.log("update");
  //-- Algoritmo de animación:
   //-- 1) Actualizar posición de los elementos
   x = x + velx

  //-- 2) Borrar el canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 20, 20);
    ctx.rect(xo,yo,20, 20);

    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");
//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
  update();
  console.log("Lanzar!!");
  crono.start();
}
//-- Acceder al botón de inicio
const btnIniciar = document.getElementById("btnIniciar");
//-- Función de retrollamada del botón iniciar
btnIniciar.onclick = () => {
  location.reload();
  console.log("Iniciar!");
  crono.reset();
  crono.stop();
}

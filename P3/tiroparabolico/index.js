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

// Dimensiones de los cubos
let lx = 20;
let ly = 20;

//-- Velocidad del objeto a lanzar
let vel = velocidad.value;
//-- Angulo del objeto a lanzar
let alfa = angulo.value;
// gravedad
let g = 9.8

//Posicion del objetivo
let xo = 600;
let yo = 345;

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

  //-- Pintando el proyectil
  ctx.beginPath();

  //-- Definir un rectángulo de dimensiones lx x ly,
  ctx.rect(x, y, lx, ly);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = color;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();

  ctx.closePath();
}
//-- función para pintar el objetivo
function dibujarO(xo,yo,lx,ly,color) {

  //-- Pintando el proyectil
  ctx.beginPath();

  //-- Definir un rectángulo de dimensiones lx x ly,
  ctx.rect(xo, yo, lx, ly);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = color;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();

  ctx.closePath();
}
//funcion acierto o fallo
function revisar(){
  if (((xo+10) > x > (xo-10))&&((yo+10) > y > (yo-10))){
    ctx.strokeStyle = 'green';
    ctx.font = "35px Arial";
    ctx.strokeText("ACIERTO :) ", 5, 80);
  } else {
    ctx.strokeStyle = 'red';
    ctx.font = "35px Arial";
    ctx.strokeText("FALLO :( ", 5, 80);
  }
}

// Pintar lo inicial 
dibujarP(x,y,lx,ly,"red");
dibujarO(xo,yo,lx,ly,"blue");

let t = 0; //tiempo inicial
let velx = 0;
let vely = 0;
//-- Función principal de animación
function update() 
{
  console.log("update");
  //-- Algoritmo de animación:
   //-- 1) Actualizar posición de los elementos
    velx = vel * Math.cos((alfa*Math.PI)/180);
    vely = vel * Math.sin((alfa*Math.PI)/180);
    x = x + velx*t ;
    y = y + vely*t-0.5*g*t*t;

   // x = x + (vel * Math.cos(alfa) * t)
   // y = y + (vel * Math.sin(alfa) * t)-(0.5*g*(t^2))
   t = t + 0.1

  //-- 2) Borrar el canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  dibujarP(x,y,lx,ly,"red");
  dibujarO(xo,yo,lx,ly,"blue");

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
  revisar();
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

console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

const ctx = canvas.getContext("2d");  

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()
ctx.beginPath();
  //-- Definir un rectángulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(5,5, 100, 50);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = 'blue';

  //-- Mostrar el relleno
  ctx.fill();

  //-- Cambiar el tamaño de la línea del trazo
  ctx.lineWidth = 4;

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();
ctx.closePath();
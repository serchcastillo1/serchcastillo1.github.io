// Crea un objeto para el círculo
let circulo = {
    x: 0, // Posición inicial en el eje x
    y: 200, // Posición inicial en el eje y
    diametro: 50, // Diámetro del círculo
    velocidad: 5, // Velocidad de movimiento del círculo
    color: [255, 255, 255] // Color inicial del círculo (blanco)
  };
  
  // Función que se ejecuta una vez al inicio
  function setup() {
    createCanvas(400, 400); // Crea un lienzo de 400 x 400 píxeles
    // Añade un efecto de sombra al círculo
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "rgba(0, 0, 0, 0.5)";
  }
  
  // Función que se ejecuta en cada fotograma
  function draw() {
    // Crea un degradado de fondo con dos colores
    let color1 = color(0, 0, 255); // Azul
    let color2 = color(255, 0, 0); // Rojo
    setGradient(0, 0, width, height, color1, color2);
    fill(circulo.color); // Rellena el círculo con el color actual
    ellipse(circulo.x, circulo.y, circulo.diametro); // Dibuja el círculo en la posición actual
    circulo.x += circulo.velocidad; // Actualiza la posición del círculo en el eje x
    // Si el círculo llega al borde del lienzo, cambia de dirección y de color
    if (circulo.x > width - circulo.diametro / 2 || circulo.x < circulo.diametro / 2) {
      circulo.velocidad *= -1; // Invierte la velocidad
      circulo.color = [random(255), random(255), random(255)]; // Asigna un color aleatorio
    }
  }
  
  // Función que crea un degradado lineal entre dos colores
  function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1); // Calcula la interpolación entre los dos colores
      let c = lerpColor(c1, c2, inter); // Obtiene el color resultante
      stroke(c); // Asigna el color al trazo
      line(x, i, x + w, i); // Dibuja una línea horizontal
    }
  }
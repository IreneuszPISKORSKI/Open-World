let canvas;
let img;
let t = 0; // time variable


function preload() {
  img = loadImage('Accueil_img/fond_accueil3.jpg');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noStroke();
  fill(255, 255, 255);
}

function draw() {
  background(10, 10); // translucent background (creates trails)
  img.resize(windowWidth, windowHeight);
  image(img, 0, 0);
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 100) {
    for (let y = 0; y <= height; y = y + 100) {
      let d = dist(mouseX, mouseY, x, y);
      fill(255, 255, 255, 7)
      ellipse(x, y, d); // draw particle

    }
  }
}
let canvas;
let img;
let things = [];
let nbrOf =300;

function preload(){
    img = loadImage("../images/fond_numerique3.jpeg")
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight+100);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    for (i = 0; i < nbrOf; i++){
        things.push(new sped());
    }
    
}

function draw(){
    image(img,0,0, width, height);
    for (i = 0; i < things.length; i++){
        stroke(255,100);
        things[i].show()
        things[i].update();
        things[i].reset();
    }  

}

function windowResized(){
    
    resizeCanvas(windowWidth,windowHeight);
}
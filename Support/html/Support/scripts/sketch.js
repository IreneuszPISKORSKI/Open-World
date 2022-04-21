let canvas;
let img;
let things = [];
let nbrOf =50;


function setup(){
    canvas = createCanvas(windowWidth,windowHeight+400);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    for (i = 0; i < nbrOf; i++){
        things.push(new croix());
    }
    
}

function draw(){
    background(255);
    for (i = 0; i < things.length; i++){
        stroke(255,100);
        things[i].show()
        things[i].update();
        things[i].reset();
    }  

}

function windowResized(){
    canvas.resize(windowWidth,windowHeight);
}
let imgs = [];
let fond;
let canvas;
let img;

function preload() {
    fond = loadImage('../images/wallpaper-ecologie.jpg')
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight+200);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    for ( i =0; i <30; i++){
        imgs.push(new feuille())
    
    }
    fond.resize(width,height);
}

function draw() {
    image(fond,0,0);
    for (i = 0 ; i< imgs.length; i++){
        imgs[i].update();
        imgs[i].show();
        imgs[i].reset();
    }

}
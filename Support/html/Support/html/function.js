function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(51);
    translate(200, 200);
    rotate(-90);
    let hr = hour();
    let mn = minute();
    let sc = second();



    strokeWeight(8);
    stroke(255, 175, 0);
    noFill();
    let end1 = map(sc, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, end1);

    push();
    rotate(end1);
    stroke(255, 175, 0);
    strokeWeight(5);
    line(0, 0, 100, 0);
    pop();


    stroke(255, 0, 0);
    let end2 = map(mn, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, end2);

    push();
    rotate(end2);
    stroke(255, 0, 0);
    strokeWeight(5);
    line(0, 0, 75, 0);
    pop();

    stroke(255, 100, 0);
    let end3 = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 320, 320, 0, end3);

    push();
    rotate(end3);
    stroke(255, 100, 0);
    strokeWeight(5);
    line(0, 0, 50, 0);
    pop();


    stroke(255);
    point(0, 0);


}
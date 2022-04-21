class sped {
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.speed = random(2,10);
        this.ran = random(20,100);
    }
    update(){
        this.x += this.speed;
    }
    show(){
        stroke(255,100);
        strokeWeight(1);
        line(this.x,this.y,this.x+this.ran,this.y);
    }

    reset(){
        if (this.x > width){
            this.x = random(-100,-50);
        }
    }
}
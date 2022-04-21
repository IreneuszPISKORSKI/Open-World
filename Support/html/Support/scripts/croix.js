class croix {
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.speed = random(2,5);
        this.ran = random(20,100);
        this.ratio = random(0.3,3);
        this.alpha = random(100,200);
    }
    update(){
        this.y += this.speed;
    }
    show(){
        stroke(0,100);
        fill(255,0,0, this.alpha);
        strokeWeight(1);
        this.drawCroix();
    }

    reset(){
        if (this.y > height){
            this.y = random(-100,-50);
            this.x = random(0,width);
            this.speed = random(2,5);
        }
    }

    drawCroix(){
        beginShape();
        vertex(this.ratio *(this.x+0),this.ratio *(this.y +0));
        vertex(this.ratio *(this.x+20),this.ratio *(this.y +0));
        vertex(this.ratio *(this.x+20),this.ratio *(this.y +40));
        vertex(this.ratio *(this.x+60),this.ratio *(this.y +40));
        vertex(this.ratio *(this.x+60),this.ratio *(this.y +60));
        vertex(this.ratio *(this.x+20),this.ratio *(this.y +60));
        vertex(this.ratio *(this.x+20),this.ratio *(this.y +100));
        vertex(this.ratio *(this.x+0),this.ratio *(this.y +100));
        vertex(this.ratio *(this.x+0),this.ratio *(this.y +60));
        vertex(this.ratio *(this.x+-40),this.ratio *(this.y +60));
        vertex(this.ratio *(this.x+-40),this.ratio *(this.y +40));
        vertex(this.ratio *(this.x+0),this.ratio *(this.y +40));
        vertex(this.ratio *(this.x+0),this.ratio *(this.y +0));
        endShape();
    }
}
    

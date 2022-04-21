class feuille {
    constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.speed = random(2,5);
        this.img = loadImage('../images/feuille3.png')
    }

    update(){
        this.y += this.speed;
    }
    show(){
        image(this.img,this.x,this.y);
        this.img.resize(100,100);
    }
    reset(){
        if(this.y > height){
            this.y = random(-100,-50)
        }
    }
}
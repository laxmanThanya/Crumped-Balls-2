class Dustbin{

    constructor(x,y,width,height){
    
        var option={
            isStatic:true,
           
            density:0
          }
          this.body = Bodies.rectangle(x,y,width,height,option);
          //this.image=loadImage("dustbingreen.png");
          this.width=width;
          this.height=height;
          World.add(world,this.body);
    
    }
    
    display(){
    
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
        //image(this.image,pos.x,pos.y,width,this.height);
    
    }
    
    }
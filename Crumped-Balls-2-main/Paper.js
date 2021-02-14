class Paper{

    constructor(x,y,radius){
    
        var options={
            isStatic:false,
            restitution:0.4,
            friction:0,
            density:1.2
           
          }
          this.x=x;
          this.y=y;
          this.radius=radius;
          this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options)
          this.image=loadImage("paper.png");
          World.add(world,this.body);
    
    }
    
    display(){
    
        var pos = this.body.position;
        //rectMode(CENTER);
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.radius, this.radius)
			//ellipse(0,0,this.r, this.r);
			pop()
    
    }
    
    }
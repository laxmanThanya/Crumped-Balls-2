
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(100,680,1500,20);
	World.add(world,ground);

	

	ball1=new Paper(70,50,150);
	World.add(world,ball1);

	d1=new Dustbin(570,600,10,150);
	World.add(world,d1);

	d2=new Dustbin(750,600,10,150);
	World.add(world,d2);

	d3=new DustBinimg(560,480,10,20);
	World.add(world,d3);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("255,255,255");
  
  
  
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  ball1.display();
  
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:500,y:-900});
        
	}
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(200,100,300,20);
bob1=new Bob(200,200,25,25);
bob2=new Bob(150,200,25,25);
bob3=new Bob(250,200,25,25);
bob4=new Bob(300,200,25,25);
bob5=new Bob(100,200,25,25);
chain2=new Slingshot(bob2.body,{x:150,y:100})
chain1=new Slingshot(bob1.body,{x:200,y:100})
chain3=new Slingshot(bob3.body,{x:250,y:100})
chain4=new Slingshot(bob4.body,{x:300,y:100})
chain5=new Slingshot(bob5.body,{x:100,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  roof.display();
  bob1.display();
  chain1.display();
  bob2.display();
  chain2.display();
  bob3.display();
  chain3.display();
  bob4.display();
  chain4.display();
  bob5.display();
  chain5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-25,y:-25});
}
}



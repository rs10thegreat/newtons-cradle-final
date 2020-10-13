
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob (150,600);
	bob2 = new Bob (210,600);
	bob3 = new Bob (268,600);
	bob4 = new Bob (326,600);
	bob5 = new Bob (386,600);

	roof = new Roof(400,100,800,30);

	rope1 = new Rope(bob1.body,{x:150,y:90});
	rope2 = new Rope(bob2.body,{x:210,y:90});
	rope3 = new Rope(bob3.body,{x:268,y:90});
	rope4 = new Rope(bob4.body,{x:326,y:90});
	rope5 = new Rope(bob5.body,{x:386,y:90});
	Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:10});
	}
}

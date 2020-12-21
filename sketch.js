const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(100,100,400,100);
	box1 = new Box(100,100);
	box2 = new Box(20,100); 

	Engine.run(engine);
}	


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  drawSprites();
  console.log(box.y)

}




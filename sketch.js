const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var dustbin1
var dustbin2
var dustbinBase

function setup() {
	canvas = createCanvas(1500,715);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     paper= new Paper(100,200,45) 
  
	 ground=new Ground(750,700,1500,10)

	 dustbin3=new DustbinBase(1000,height-17)
	 dustbin1=new Dustbin(900,height-75)
	 dustbin2=new Dustbin(1100,height-75)

	Engine.run(engine);
  
}


function draw() {
  
	Engine.update(engine);

  background("lightBlue");
  
  paper.display()
ground.display()

dustbin3.display()
dustbin1.display()
dustbin2.display() 
}



function keyPressed()
{


	if(keyCode === UP_ARROW)
{

Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})



}


}
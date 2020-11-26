
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
function preload()
{
	
}

var ground;
var invisGround;
var basket;
var paper;

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1200,600);
	ground = new Ground(600,550,width,10);
	basket = new Basket();
	paper = new Paper(100,400,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  ground.display();
  paper.display();
  basket.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:500, y:-600});
		console.log("eafgsafa");
	}
}




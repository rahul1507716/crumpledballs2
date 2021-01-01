var dustbinImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
  world = engine.world;
  ground1 = new ground(600,595,1200,20);
  paper1 = new paper(200,500);
var dsideright = createSprite(1025,550,20,70);
var dsideleft = createSprite(885,550,20,70);
var dsidecenter = createSprite(955,430,120,20);
dsidecenter.addImage(dustbinImg);





	//Create the Bodies Here.
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  ground1.display();
 paper1.display();
 
 drawSprites();
}

function keyPressed() {
 if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});
 }
}




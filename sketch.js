
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var trash;
var ground;
var trashcan, trashLoad;

function preload()
{
	trashLoad = loadImage("Project 25 Trash.png");
}

function setup() 
{
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	trashcan = createSprite(1020,500,150,200);
	trashcan.addAnimation("trashAnimation", trashLoad);

	paper1 = new Paper(100,650,20);

	//leftmost box
	trash1 = new Trash(910,615,20,450);

	//bottom box
	trash2 = new Trash(1020,653,200,20);


	//bottom box
	//trash = new Trash(1020,550,200,250);
	

	//rightmost box
	trash3 = new Trash(1130,615,20,450);

	ground = new Ground(650,680,1300,20);
	


  
}


function draw() 
{

	
  background(100);
 
  Engine.update(engine);
  
  paper1.display();

  trash1.display();
  trash2.display();
  trash3.display();
  //trash.display();
  

  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:1,y:-2});
		
	}

	if(keyCode === DOWN_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 0, y: 1});
	}

	if(keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: -1, y: 0});
	}

	if(keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 1, y: 0});
	}
}






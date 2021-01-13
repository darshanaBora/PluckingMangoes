const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var boy,ground,stone,mango1,mango2,mango3,mango4,mango5,mango6,mango7,launcher;

function preload() {
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1000,600);

	tree = createSprite(700,350, 10,10);
	tree.addImage("tree", treeImage);
	tree.scale = 0.4;
	
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(600,height,1200,20);

	boy = new Boy(200,550);
	stone = new Stone(150,500);

	mango1 = new Mango(720,120);
	mango2 = new Mango(600,200);
	mango3 = new Mango(800,150);
	mango4 = new Mango(650,280);
	mango5 = new Mango(750,250);
	mango6 = new Mango(900,250);
	mango7 = new Mango(500,270);

	launcher = new Launcher(stone.body,{x:150, y:500});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  drawSprites();
  
  ground.display();
  boy.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  launcher.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x: 150, y: 500});
		launcher.attach(stone.body);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function detectollision(lstone,lmango) {
	mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
  
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
    }
}

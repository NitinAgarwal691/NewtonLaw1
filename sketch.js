const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5,ground,conector1,conector2,conector3,conector4,conector5,hanger;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new Ball(400,600,30);
	ball2=new Ball(450,600,30);
	ball3=new Ball(500,600,30);
	ball4=new Ball(350,600,30);
	ball5=new Ball(300,600,30);
	ground=new Ground();
	hanger=new Hanger(400,250,600,30);
	conector1=new Rope(ball1.body,hanger.body,0);
	conector2=new Rope(ball2.body,hanger.body,60);
	conector3=new Rope(ball3.body,hanger.body,111);
	conector4=new Rope(ball4.body,hanger.body,-60);
	conector5=new Rope(ball5.body,hanger.body,-111);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  hanger.display();
 conector1.display();
  conector2.display();
  conector3.display();
  conector4.display();
  conector5.display();
}

function keyPressed(){
   if(keyCode === UP_ARROW) { 
  Matter.Body.applyForce(ball3.body,ball3.body.position,{x:90,y:-90}) 
   }
}
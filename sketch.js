
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(1200, 700);

    engine = Engine.create();
    world = engine.world;

    paperobj=createSprite(100, 650, 15, 15);
    paperobj.shapeColor=color(0, 0, 200);

    papersprite = Bodies.circle(390, 255 , 5, {restitution:0.3, friction:0.5, density:1.2, isStatic:false});
	  World.add(world, papersprite);

    ground=createSprite(600, 667, 1200, 15);
    ground.shapeColor=color(255);

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	  World.add(world, ground);

    boxPosition=width/2+300
    boxY=545;

    boxleftSprite=createSprite(900, boxY, 20,200);
    boxleftSprite.shapeColor=color(0,200,0);

    boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,070 , {isStatic:true} );
    World.add(world, boxLeftBody);

    boxBase=createSprite(boxPosition+100, 650, 200,20);
    boxBase.shapeColor=color(0,200,0);

    boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);

    boxleftSprite=createSprite(1105 , boxY, 20,200);
    boxleftSprite.shapeColor=color(0,200,0);

    boxRightBody = Bodies.rectangle(boxPosition+200-20, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxRightBody);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperobj.body, paperobj.body.position,{X:85,Y:-85});
  }
}


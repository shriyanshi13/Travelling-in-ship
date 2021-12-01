var ship,ship1;
var sea, sea1;

function preload(){
  ship1 = loadImage("ship-1.png","ship-2.png");
  sea1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
  //shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(600,500);


  // Moving background
  sea=createSprite(600,300);
  sea.addAnimation("running", sea1);
  sea.scale=0.5;
  sea.velocityX=-1;

  
  ship = createSprite(50,200,20,50);
  ship.addAnimation("running",ship1);
  edges = createEdgeSprites();

  ship.scale=0.25
  ship.x=90;
  ship.y=300;
  
}

function draw() {
  background("blue");
  if(keyDown("enter")){
    ship.velocityX=5;
  
  }
  if(keyDown("left")){
    ship.velocityX=-5;
  
  } 
  if(keyDown("space")){
    ship.velocityX=0;
  
  }
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  
ship.collide(edges[3])
  drawSprites();
}

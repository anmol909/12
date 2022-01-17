var path,boy,boy_running
var score,boundries

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");

  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  coinImage = loadAnimation("coin.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(200,365,10,10);
  boy.addAnimation("Running",boy_running);
  boy.velocityY = 0;
  boy.scale = 0.095;

  invisibleboundrie1 = createSprite(20,200,20,400);
  invisibleboundrie1.visible = false;
  invisibleboundrie2 = createSprite(390,200,20,400);
  invisibleboundrie2.visible = false;

  
}

function draw() {
  background("white");

  boy.velocityX = 0;
  boy.velocityY = 0;

 if(path.y > 400 ){
   path.y = height/2;
 }

 if(keyDown("LEFT_ARROW")){
   boy.velocityX = -2;
 }

 if(keyDown("RIGHT_ARROW")){
  boy.velocityX = 2;
}

  boy.x = World.mouseX;

  boy.collide(invisibleboundrie1);
  boy.collide(invisibleboundrie2);

drawSprites();
}

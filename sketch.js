var fixedRect, movingRect;

function setup(){
  createCanvas (400, 400);
  fixedRect = createSprite(300,200,50,300);
  movingRect = createSprite(200,200,100,30);
  
  car1 = createSprite(100, 100, 30, 30);
  car1.velocityX = 3;

  car2 = createSprite(100, 200, 30, 30);
  car2.velocityX = 3;
  movingRect.debug = true;
  fixedRect.debug = true;
  
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
}



function draw() {
  
  background("white");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //isTouching algorithm
  if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
  movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
  movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }

  //collide algorithm
  if(fixedRect.x - car1.x <= fixedRect.width/2 + car1.width/2){
    car1.velocityX = 0;
  }

  //bouncOff algorithm
  if(fixedRect.x - car2.x <= fixedRect.width/2 + car2.width/2){
    car2.velocityX = -3;
  }
  drawSprites()
}

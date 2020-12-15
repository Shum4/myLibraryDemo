var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "purple";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "red";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
bounceOff(movingRect,fixedRect);
  
  drawSprites();
}

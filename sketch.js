var fixed,moving
var A,B
function setup() {

  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="lime";
  moving=createSprite(200,300,50,50);
  A=createSprite(100,250,30,30);
  A.shapeColor="pink";
  A.velocityX=2;
  B=createSprite(700,250,30,30);
  B.shapeColor="blue";
  B.velocityX=-2;
}

function draw() {
  background(0);  
  drawSprites();
  moving.x=mouseX;
  moving.y=mouseY;
  if(isTouching(moving,fixed))
  {
    fixed.shapeColor="blue";
  }
  else{
    fixed.shapeColor="lime";
  }
  bounceOff(A,B)
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2&&
    object2.x-object1.x<=object1.width/2+object2.width/2&&
     object1.y-object2.y<=object1.height/2+object2.height/2&&
     object2.y-object1.y<=object1.height/2+object2.height/2){
     return true
    }
    else{
     return false
    }
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2&&
    object2.x-object1.x<=object1.width/2+object2.width/2)
  {
    object1.velocityX=object1.velocityX*-1;
    object2.velocityX=object2.velocityX*-1;
  }
  if(object1.y-object2.y<=object1.height/2+object2.height/2&&
    object2.y-object1.y<=object1.height/2+object2.height/2)
    {
      object1.velocityY=object1.velocityY*-1;
      object2.velocityY=object2.velocityY*-1;
    }
}
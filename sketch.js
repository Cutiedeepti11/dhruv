
var mov,fix;
function setup() {
  createCanvas(800,400);
  mov =createSprite(200,200,20,20);
  fix=createSprite(100,200,50,50);
}

function draw() {
  background(0); 
  mov.x=mouseX;
  mov.y=mouseY;
  console.log(mov.x-fix.x)
  console.log(mov.width/2+fix.width/2)
  if(mov.x-fix.x<mov.width/2+fix.width/2&&fix.x-mov.x<fix.width/2+mov.width/2)
  {
    mov.shapeColor="green";
    fix.shapeColor="green";
  }
  else{
    mov.shapeColor="red";
    fix.shapeColor="red";
  }
  drawSprites();
}
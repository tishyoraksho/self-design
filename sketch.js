var bg;
var chicken;
function preload()  {
  bg_img= loadImage("assets/bg.jpg");
  bg1_img=loadImage("assets/bg1.jpg");
  chickenimg=loadAnimation("assets/chick1.png","assets/chick2.png","assets/chick3.png");
  corn_img=loadImage("assets/corn.png")

}

function setup() {
  createCanvas(1050,500);
   bg=createSprite(400, 200, 800, 400);
   bg.addImage(bg1_img);

   chicken=createSprite(100,height-100,50,150);
   chicken.addAnimation("running",chickenimg);
   chicken.scale=1.2
  //createSprite()
}

function draw() {
  background("green");  
  drawSprites();
}
function spawncorns() {
  if(frameCount%60 === 0) {
    corn=createSprite()
  }
}
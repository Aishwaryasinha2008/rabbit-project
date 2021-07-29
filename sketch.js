var garden,rabbit,apple,orange,leaf;
var gardenImg,rabbitImg,appleImg,orageImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  
}
  function spawnapples(){
    apple=createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.5;
    apple.velocityX = -3;
    apple.lifetime=134;
  }
  function spawnleaf(){
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(appleImg);
  leaf .scale = 0.5;
  leaf .velocityX = -3;
  leaf .lifetime=300;
  }


  var select_sprite=Math.round(random(1,2));
  
if(frameCount % 80==0){
if(select_sprite==1){

}
}














var path
var runner2
var coin
var power
var energyDrink
var invisiblePath
var invisiblePath2

function preload(){
  //pre-load images

  //creating animations
  pathImage = loadImage("path.png");
 runner2Image = loadImage("Runner-2.png");
 coinImage = loadImage("coin.png");
 powerImage = loadImage("power.png");
 energyDrinkImage = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //creating path
 path = createSprite(200,200,100,100);
 path.addImage(pathImage);
 path.velocityY = 4;
 path.scale = 1.2;

 //creating runner-2
 runner2 = createSprite(200,330,30,20);
runner2.addImage(runner2Image);
runner2.velocityX = 2;
runner2.velocityY = 0;
runner2.scale = 0.1

 //creating coin
 coin = createSprite(200,200,5,10);
 coin.addImage(coinImage);
 coin.velocityY = 4;
 coin.scale = 0.3;

 //creating power portion
 power = createSprite(100,100,50,50);
 power.addImage(powerImage);
 power.velocityY = 4;
 power.scale = 0.2;
 
 //creating energyDrink
 energyDrink = createSprite(320,100,20,30);
 energyDrink.addImage(energyDrinkImage);
 energyDrink.velocityY = 5;
 energyDrink.scale = 0.1;

//creating invisiblePath
invisiblePath = createSprite(45,200,5,400)
invisiblePath.visible = false;

//creating invisiblPath2
invisiblePath2 = createSprite(360,200,5,400);
invisiblePath2.visible = false;





}

function draw() {
  background("black");

runner2.x = mouseX

runner2.collide(invisiblePath);
runner2.collide(invisiblePath2);


  //code to reset the background
  if(path.y > 400){
path.y = height/2;
  }
 
  //code to reset coin 
if(coin.y > 400){
coin.y = height/20;
}

//code to reset power
  if(power.y > 400){
power.y = height/20;
  }

  //code to reset energyDrink
  if(energyDrink.y > 400){
energyDrink.y = height/20;
  }

if(runner2.isTouching(coin)){
coin.destroy();
}

if(runner2.isTouching(power)){
power.destroy();
}

if(runner2.isTouching(energyDrink)){
energyDrink.destroy();
}



drawSprites();
}

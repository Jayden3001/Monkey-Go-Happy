var Background,Backgroundimg
var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var rocks;
var banana;
var survivalTime=0;

function preload(){
  
  Backgroundimg=loadImage("jungle.jpg")
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
   Background=createSprite(200,200,400,400)
  Background.addImage(Backgroundimg)
  Background.velocityX=-3
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
  
  

  ground=createSprite(390,390,900,10)
  ground.velocityX=4
  ground.x=ground.width/2;
  console.log(ground.x)
  
 
  foodGroup= new Group()
 obstacleGroup=new Group()
  ground.visible=false
}


function draw() {
 background("white");
  drawSprites();
  textSize(15)
  fill("black")
  text("score:"+score,300,30)
  
  if(keyDown("space")){
    monkey.velocityY=-8;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
  
   monkey.collide(ground);
  
 if (ground.x < ground.width/ 0){
    ground.x = 250;
  }
  food()
  obstacles()
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/getFrameRate());
  text("Survival Time:"+ survivalTime,100,50);
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.destroy()
    
  }
  
   
  if(obstacleGroup.isTouching(monkey)){
    
    monkey.scale=0.2
  }
  
if(foodGroup.isTouching(monkey)){
  foodGroup.destroyEach()
  score=score+2
  
}
  if(Background.x<0){
    Background.x=400/2
  }
  
  switch(score){
    case 10:monkey.scale=0.12;
      break;
      case 20:monkey.scale=0.14;
      break;
      case 30:monkey.scale=0.16
      break;
      case 40:monkey.scale=0.18
      break
      default:break
  }
      
}

function food(){
  if(frameCount%80 === 0){
    var banana = createSprite(400,random(60,150),10,10);
    position=Math.round(random(1,2))
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 105;
    foodGroup.add(banana);
    banana.scale = 0.1
  }
}

function obstacles (){
  if (frameCount%300===0){
    var rocks = createSprite(400,375,10,40);
    rocks.velocityX = -4
    rocks.scale = 0.1
    rocks.addImage(obstacleImage);
    rocks.lifetime = 105;
    obstacleGroup.add(rocks);
  }
  }
  





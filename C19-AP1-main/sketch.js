var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost", ghostImg);
  
 // doorsGroup = new group();

//climbersGroup = new group();
//invisibleBlockGroup = new group();

  //spookySound.loop();


}


function draw() {
  background(0);
  gameState = "PLAY";
  if (gameState === "PLAY") {
    if (keyDown("right_arrow")) {
      ghost.x = ghost.x +3;
    }
    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    if (keyDown("space")){
      ghost.y = ghost.y -10;
    }
    ghost.velocityY = ghost.velocityY+0.1;
   
  // if (climbersGroup.isTouching(ghost)) {
  //  ghost.velocityY =0;
  // }
   //if (invisibleBlockGroup.isTouching(ghoust) || ghost.y > 600) {
  //   ghost.destroy();
  //   gameState = "end";
  //  }



  if(tower.y > 400){
      tower.y = 300
    } 





    drawSprites();
   // spawndoors();
}
 if (gameState === "end"){
   stroke("red");
  FileList("red");
  textSize(30);
  text("fim de jogo", 230,250);
 }
}
//function spawmClimbers() {





//}
var tom;
var jerry;
var tom1, tom2, tom3;
var jerry1, jerry2, jerry3;
var bgImg;

function preload() {
    tom1 = loadImage("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tom3 = loadImage("images/cat4.png");

    jerry1 = loadImage("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerry3 = loadImage("images/mouse4.png");

    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(600,600);

    tom = createSprite(420,520,10,10);
    tom.addImage("Tom1", tom1);
    tom.scale = 0.1;

    jerry = createSprite(100,520,10,10);
    jerry.addImage("Jerry1", jerry1);
    jerry.scale = 0.1;

    

}

function draw() {

    background(bgImg);
    
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){

    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === RIGHT_ARROW){
  tom.addAnimation("Tom2&3", tom2);
  tom.changeAnimation("Tom2&3");
  tom.frameDelay = 25;
  }

  if(keyCode === LEFT_ARROW){
      tom.addAnimation("Tom2&3", tom2);
      tom.changeAnimation("Tom2&3");
      tom.frameDelay = 25;
  }

}

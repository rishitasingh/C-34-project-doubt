//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImg;

function preload()
{
  //load images here

  dogImg = loadImage("Dog.png");
  happyDogImg = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(200, 350, 30, 30);
  dog.addImage(dogImg);

  foodStock = database.ref('food');
  foodStock.on("value", readStock);

}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  }

  drawSprites();
  //add styles here
  text("press UP ARROW key to feed the dog", 250, 100);
  textSize(38);
  fill("red");
  stroke(3);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }

  else{
    x = x-1;
  }

  database.ref('/').ref.update({});
}




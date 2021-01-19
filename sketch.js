//Create variables here
var database;
var canvas;
var foodstock = 0;
var lastfed = 0;
var p;

function preload()
{
  dog = loadImage("dogimg.png");
  dogi = loadImage("dogimg1.png");
}

function setup() {
  database = firebase.database();

  canvas = createCanvas(1000, 400);

  dogn = createSprite(900,250,10,10);
  dogn.addImage(dog);
  dogn.scale = 0.2;
  
  var button = createButton("feed");
  button.position(700,60);
  button.mousePressed(feedDog);

  var button2 = createButton("addFood");
  button2.position(750,60);
  button2.mousePressed(addFood);

  p = new FOOD();

}

function draw() {  
  background(46, 139, 87);

  drawSprites();
  
  p.display();
  p.getFoodStock();

  

}

function feedDog(){

  dogn.addImage(dogi);
   
  if(foodstock > 0){
    foodstock = foodstock-1;
  }
  else{foodstock=0}

  p.updateFoodStock(foodstock);
}

function addFood(){
 
  if(foodstock < 20){
    foodstock = foodstock+1;

  }
  else{
    foodstock = 20;

  }

  p.updateFoodStock(foodstock);

}



//.ref = refer to a location of the database value;
//.on = it moniters the value of database;
//.set = used to set the values in the database;
//.update = used to update the values in the database;
//.val = to extract the values of the database;
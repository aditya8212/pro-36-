class FOOD{
constructor(){
  this.bottle = loadImage("Milk.png")

}

display(){
  for(var x = 0;x<foodstock/2;x++){
    for(var y=0 ; y<2;y++){
      image(this.bottle,50+40*x,100+100*y,100,100)

    }

  }
    
   
}

getFoodStock(){
    var foodstockref = database.ref('foods')
    foodstockref.on("value",function(data){
        foodstock = data.val();
    })
    
}

updateFoodStock(count){
    database.ref('/').update({
        foods:count
    })

}
/*
deductFood(x){
    if(x<=0){
        x=0;
      }
      else{
        x=x-1;
      }
    
      database.ref('/').update({
        foods:x
    
      })

}
*/
}
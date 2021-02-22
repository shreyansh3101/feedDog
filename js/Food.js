class Food{

constructor(){
this.image=loadImage("/Images/Milk.png")

var foodstock
}
getFoodStock(){
var food = database.ref('milk')
food.on("value",function(data){

 milk=data.val();   
})
}

updateFoodStock(state){
database.ref('/').uptade({
milk:state
})
}

deductFood(state){
    database.ref('/').uptade({
        milk:state
        })    
}

display(){
var x=80,y=100
imageMode(CENTRE)
this.image(this.image,720,220,70,70)
if (this.foodstock!=0){
   for (var i=0;i<this.foodstock;i++) {
     if (i%10==0) {
      x=80
      y=y+50   
     } 
     this.image(this.image,x,y,50,50)
     x=x+30
   }
}
}

}
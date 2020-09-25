var car,wall;
var speed,weight;

function setup(){

  createCanvas(1300,400);
  speed=random(50,90);
  weight=random(400,1500);
  car=createSprite(70,200,40,40);
  car.velocityX=speed;
  wall=createSprite(1000,200,60,height/2);
 
}

function draw() {
  background("pink");  
  
  if(wall.x-car.x < (wall.width + car.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>180)
    {
      car.shapeColor("red");
    }
    if( deformation>100 && deformation<180)
    {
      car.shapeColor("yellow");
    }
    if(deformation<100)
    {
      car.shapeColor("green");
    }


  }
  drawSprites();
}
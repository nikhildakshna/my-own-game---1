class Puzzle{

constructor(){};

ballthrower(){
var Ball = new ball(100,displayHeight - 300);
var lever = createSprite(50,displayHeight/2,50,20);
var color = map(mouseY,0,displayHeight,0,255);
lever.shapeColor = rgb(255,color,0);
Ball.display();

if(keyWentDown(UP_ARROW)){
lever.velocityY = -10;
console.log(lever.y);
}

else if(keyWentUp(UP_ARROW)){
lever.velocityY = 0;
}

else if(keyWentDown(DOWN_ARROW)){
    lever.velocityY = 10;

}

else if(keyWentUp(DOWN_ARROW)){
    lever.velocityY = 0;
}

if(keyDown("space")){
Matter.Body.applyForce(Ball.body,{x: 100,y: lever.y});
}

}
 
matchColor(){
var colorBox = createSprite(displayWidth/2,displayHeight/2);
colorBox.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
var r = 0;
var g = 0;
var b = 0;
if(keyDown("r")){
r += 10;
}
else if(keyDown("g")){
g += 10;
}
else if(keyDown("b")){
b += 10;
}
background(rgb(r,g,b));
}

oddOneOut(){

}

}


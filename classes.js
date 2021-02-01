class ball{
constructor(x,y){
var options = {
isStatic: false,
'restitution': 0.6,
'friction': 1,
'density': 1
}
this.body = Bodies.circle(x,y,50,options);
this.radius = 50;
this.x = this.body.position.x;
this.y = this.body.position.y;

World.add(world,this.body);
}

display(){
push();
translate(this.x,this.y);
stroke(255);
fill(0);
ellipseMode(RADIUS);
ellipse(0,0,this.radius);
pop();
}

}

class basket{
constructor(x,y,width,height){
this.body = Bodies.rectangle(x,y,width,height);
this.width = width;
this.height = height;

World.add(world,this.body);
}

displaybox(){
this.pos = this.body.position;
push();
translate(this.pos.x,this.pos.y);
stroke(255);
fill(0);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();    
}



}
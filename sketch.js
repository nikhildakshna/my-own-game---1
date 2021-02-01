const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;



var Gamestate;
var puzzle = new Puzzle();

function setup() {
  var dWidth = displayWidth;
  var dHeight = displayHeight;
  createCanvas(dWidth,dHeight);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();
  puzzle.ballthrower();
}
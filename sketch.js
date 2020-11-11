const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var car, earth, ground,fox;

function setup() {
  createCanvas(400,400);

  car = Engine.create();   //.world
  earth = car.world;

  var ground_options = {
    isStatic : true
  }


  ground = Bodies.rectangle(200,380,400,40,ground_options);

  World.add(earth,ground);

var ox={
  restitution : 1

}
  fox=Bodies.circle(200,150,30,ox);
  World.add(earth,fox);

}

function draw() {
  background("orange");  
  Engine.update(car)

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);

  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(fox.position.x,fox.position.y,30,30);

}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1;
var bg = "snow2.jpg";



function preload() {
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1350,550);
  createSprite(400, 200, 50, 50);

  snow = new Snow(100,100,50,50);
}

function draw() {
  background(backgroundImg);  

snow.display();

  drawSprites();
}
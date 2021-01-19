var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces
surface1=createSprite(100, 400, 30, 10);
surface1.shapeColor="green";

surface2=createSprite(300, 400, 30, 10);
surface2.shapeColor="yellow";

surface3=createSprite(500, 400, 30, 10);
surface3.shapeColor="red";

surface4=createSprite(700, 400, 30, 10);
surface4.shapeColor="blue";

    //create box sprite and give velocity
box=createSprite(random(20,750));
box.shapeColor="white";
box.velocityX=5;
box.velocityY=5;

}

function draw() {
    background(rgb(129,129,129));
    //create edgeSprite
  edges=createEdgeSprites();
  box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
   if(isTouching(box, surface1) && bounceOff(surface1, box)){
       box.shapeColor="green"
   }

   if(isTouching(box,surface2) && bounceOff(surface2,box)){
    box.shapeColor="yellow"
    }

    if(isTouching(box,surface3) && bounceOff(surface3,box)){
        box.shapeColor="red"
    }

    if(isTouching(box,surface4) && bounceOff(surface4,box)){
        box.shapeColor="blue"
    }

drawSprites;
}







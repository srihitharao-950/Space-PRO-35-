var balloon,balloonImage2,bg;
var position;

function preload(){
   bg =loadImage("Space.png");
   balloonImage2=loadAnimation("Rocket1.png","Rocket1.png",
   "Rocket1.png","Rocket2.png","Rocket2.png",
   "Rocket2.png");
  }

  
  function setup(){
     database = firebase.database();
     console.log(database);
      createCanvas(500,500);
  
  balloon = createSprite (100,400, 20, 20)
    balloon.addAnimation("balloon", balloonImage2);
    balloon.scale = 0.4;
  
  
  }
  
  function draw(){
  
      background(bg);
    
          if(keyDown(LEFT_ARROW)){
              balloon.x = balloon.x - 10;
          }
          else if(keyDown(RIGHT_ARROW)){
              balloon.x = balloon.x + 10;
          }
          else if(keyDown(UP_ARROW)){
              balloon.y = balloon.y - 10;
          }
          else if(keyDown(DOWN_ARROW)){
               balloon.y = balloon.y + 10;
          }
          drawSprites();
      }
  
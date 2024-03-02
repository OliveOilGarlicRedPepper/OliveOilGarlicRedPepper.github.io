

// HOME SCREEN && TUTORIAL 
function homeScreen() {
  screen = 0;
  background(titleBackImg);


  //Game titleif(!textTitle){
 
  noStroke();
  
 /* fill(255);
  textSize(40);
  textAlign(CENTER, TOP);
  text("5", width / 2, height / 2 - 150); */

  //Play button
  playButton = new Sprite(width / 4, height / 2, 100, 50, 'k');
  playButton.color = color(106, 113, 173);
  playButton.textColor = "white";
  playButton.textSize = 20;
  playButton.text = "Play!";

  //Directions button
  directionsButton = new Sprite(width/4 + width / 2, height / 2, 100, 50, 'k');
  directionsButton.color = color(106, 113, 173);
  directionsButton.textColor = "white";
  directionsButton.textSize = 15;
  directionsButton.text = "TSA Stuff";

 
  textTitle = new Sprite(titleTextImg, windowWidth/2, windowHeight/2, "n");
  

  

}

function directionsScreen() {
  background(132, 141, 217);
  playButton.pos = { x: -11200, y: -1300 };
  directionsButton.pos = { x: -1500, y: -4100 };
  textTitle.pos = { x: -1500, y: -4100 };

  //Directions (description of game)
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  text("here is our game \n isn't it great?")


  //Back button
  backButton = new Sprite(width / 2, height / 2 + 50, 125, 40, "k");
  backButton.color = color(106, 113, 173);
  backButton.textColor = "white";
  backButton.textSize = 15;
  backButton.text = "Back to Home";
}

function tutorialScreenAssests() {//MAIN TUTORIAL SCREEN
  lvl = 0;
  textTitle.pos = { x: -1500, y: -4100 };
  totHealth = 100;
  eHealth = 100;
  canMove = true; 
  eMove = false;
  e1Check = false;
  e2Check = false; 
  
  //Create player
  playButton.pos = { x: -5100, y: -5100 };
  directionsButton.pos = { x: -6100, y: -6110 };
  //player

  //(x,y,w,h,collider)
  e1 = new enemies.Sprite(1300, 320, 20);
  eh1 = new enemyHealthBar.Sprite(1300, 300, 50, 5, "n");
  

  e2 = new enemies.Sprite(1200, 220, 20);
  eh2 = new enemyHealthBar.Sprite(1200, 200, 50, 5, "n");
 
  


  //RADIO LAMP 
  lamp1 = new lamps.Sprite(lampImg, 300, 328);
  lamp2 = new lamps.Sprite(lampImg, 1000, 328);

  //TRIGGERING EVENTS
  invis1 = new invisibles.Sprite(clearImg, 300, 200); 
  invis2 = new invisibles.Sprite(clearImg, 1000, 200); 
  //TEXT BUBBLES



  // design layout
  rock1 = new rocks.Sprite (blockImg1, 500, 450, "s");
  rock2 = new rocks.Sprite (blockImg1a, 500, 20, "s")
  rock3 = new rocks.Sprite (blockImg1, 800, 20, "s");
  rock4 = new rocks.Sprite (blockImg1a, 800, 450, "s")

  r1 = new rocks.Sprite(rockOneImg, 600, 500, "n");
  r2 = new rocks.Sprite(rockOneImg, 730, 500, "n");
  r3 = new rocks.Sprite(rockOneImg, 670, 510, "n");
  boundary = new rocks.Sprite(rockBoundary, 0, 300, "s")
  boundary1 = new rocks.Sprite(rockBoundary, -300, 300, "s")
  boundary1.mirror.x = true;
  r2.scale = 1.3; 
  r3.scale =.6; 
  r3.mirror.x = true; 
  
  




  //CREATE GROUND
 ground = new Sprite(groundImg1, width / 3, 595, "s"); //"k = kinetic, s = static"
  //new Sprite(x,y,w,h,collider)
  // new Sprite(image, x, y, collider) 
 
  ground.friction = 0;
  ground.x = camera.x;
  getPlayer();

  player.pos = { x: 200, y: 350 };

  healthBar.x = player.x;
  healthBar.layer = 2000; 


  //Extra mobility for the player 
  
  ang1 = new angles.Sprite(player.x, player.y - 100, "n"); //up
  ang2 = new angles.Sprite(player.x, player.y + 100, "n"); //down
  ang3 = new angles.Sprite(player.x - 50, player.y + 100, "n"); //northwest
  ang4 = new angles.Sprite(player.x + 50, player.y + 100, "n"); //northeast
  ang5 = new angles.Sprite(player.x + 50, player.y - 100, "n"); //southwest
  ang6 = new angles.Sprite(player.x - 50, player.y - 100, "n"); //southeast
  ang7 = new angles.Sprite(player.x + 50, player.y, "n"); //right
  ang8 = new angles.Sprite(player.x - 50, player.y, "n"); //left

  ang1.x = player.x; ang1.y = player.y - 100;
  ang2.x = player.x; ang2.y = player.y + 100;
  ang3.x = player.x - 50; ang3.y = player.y + 100;
  ang4.x = player.x + 50; ang4.y = player.y + 100;
  ang5.x = player.x + 50; ang5.y = player.y - 100;
  ang6.x = player.x - 50; ang6.y = player.y - 100;
  ang7.x = player.x + 50; ang7.y = player.y;
  ang8.x = player.x - 50; ang8.y = player.y;
  


  theEnd = new doors.Sprite(); 
  theEnd.x = 1650; 
  theEnd.color = "black";
  theEnd.image = endGoalImg; 
  g1 = new Sprite(clearImg, theEnd.x, theEnd.y, "n");
  g1.layer = 1; 
  theEnd.layer = 5; 

  //end of tutorial
  
 
}


function eDeath1(){
  if(!eDeathSND.isPlaying()){
    eDeathSND.play(); 
   
   }
}






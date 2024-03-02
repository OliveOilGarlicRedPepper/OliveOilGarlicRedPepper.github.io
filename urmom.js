

// HOME SCREEN && TUTORIAL 
function homeScreen() {
  screen = 0;
  background(titleBackImg);
   musicToggle(); 


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
  directionsButton.text = "Choose Level";

 
  textTitle = new Sprite(titleTextImg, windowWidth/2, windowHeight/2, "n");
  

  

}

function directionsScreen() {
  background(132, 141, 217);
   musicToggle(); 

  playButton.pos = { x: -11200, y: -1300 };
  directionsButton.pos = { x: -1500, y: -4100 };
  textTitle.pos = { x: -1500, y: -4100 };

  fill(255);
  textSize(30);
  textAlign(CENTER, TOP);
  text("Stuck on a level and want to skip ahead?\nOr maybe you really like a certain level and want to play again?\nClick on wherever you'd like to go!\n(We recommend you play the whole thing through first.)", width / 2, height / 2 - 200);

  //Directions (description of game)
  goLvl1 = new Sprite(width / 2 - 350, height / 2 + 50, 300, 50, 'k');
  goLvl1.color = color(106, 113, 173);
  goLvl1.textColor = "white";
  goLvl1.textSize = 20;
  goLvl1.text = "Skip to Level 1";

  goLvl2 = new Sprite(width / 2 + 350, height / 2 + 50, 300, 50, 'k');
  goLvl2.color = color(106, 113, 173);
  goLvl2.textColor = "white";
  goLvl2.textSize = 20;
  goLvl2.text = "Skip to Level 2";

  goLvl3 = new Sprite(width / 2 - 350, height / 2 + 150, 300, 50, 'k');
  goLvl3.color = color(106, 113, 173);
  goLvl3.textColor = "white";
  goLvl3.textSize = 20;
  goLvl3.text = "Skip to Level 3";

  goLvl4 = new Sprite(width / 2, height / 2 + 150, 300, 50, 'k');
  goLvl4.color = color(106, 113, 173);
  goLvl4.textColor = "white";
  goLvl4.textSize = 20;
  goLvl4.text = "Skip to Level 4";

  goLvl5 = new Sprite(width / 2 + 350, height / 2 + 150, 300, 50, 'k');
  goLvl5.color = color(106, 113, 173);
  goLvl5.textColor = "white";
  goLvl5.textSize = 20;
  goLvl5.text = "Skip to Level 5";


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
  e1 = new enemies.Sprite(1700, 320, 20);
  eh1 = new enemyHealthBar.Sprite(1700, 300, 50, 5, "n");
  

  e2 = new enemies.Sprite(1600, 220, 20);
  e2.scale = 1.3; 
  eh2 = new enemyHealthBar.Sprite(1600, 200, 50, 5, "n");
 
  


  //RADIO LAMP 
  lamp1 = new lamps.Sprite(lampImg, 500, 328);
  lamp2 = new lamps.Sprite(lampImg, 1300, 328);

  //TRIGGERING EVENTS
  invis1 = new invisibles.Sprite(clearImg, 500, 200); 
  invis2 = new invisibles.Sprite(clearImg, 1300, 200); 
  //TEXT BUBBLES



  // design layout
  ceiling = new  boundaries.Sprite(platImg, 400, 20, "n"); 
  ceiling.mirror.y = true; 
  rock1 = new  boundaries.Sprite (blockImg1, 800, 470, "s");
  rock12 = new  boundaries.Sprite (blockImg1, 800, 395, "s");
  rock13 = new  boundaries.Sprite(blockImg1, 800, 320, "s");
  rock14 = new  boundaries.Sprite(blockImg1, 800, 245, "s");
  rock2 = new  boundaries.Sprite (blockImg1a, 800, 20, "s");

  
  rock3 = new  boundaries.Sprite (blockImg1, 1100, 20, "s");
  rock32 = new  boundaries.Sprite (blockImg1a, 1100, 95, "s");
  rock33 = new  boundaries.Sprite (blockImg1a, 1100, 170, "s");
  rock34 = new  boundaries.Sprite (blockImg1, 1100, 395, "s");
  rock4 = new  boundaries.Sprite (blockImg1a, 1100, 470, "s");

  r1 = new rocks.Sprite(rockOneImg, 300, 500, "n");
  r2 = new rocks.Sprite(rockOneImg, 170, 500, "n");
  r3 = new rocks.Sprite(rockOneImg, 670, 510, "n");
  r4 = new rocks.Sprite(rockOneImg, 950, 490, "n");
  r5 = new rocks.Sprite(rockOneImg, 1200, 490, "n");
  r6 = new rocks.Sprite(rockOneImg, 1600, 490, "n");
  r7 = new rocks.Sprite(rockOneImg, 2500, 490, "n");

  c1 = new rocks.Sprite(coralImg, 1700, 490, "n");
  c2 = new rocks.Sprite(coralImg, 1500, 470, "n"); 
  
  boundary = new  boundaries.Sprite(rockBoundary, 0, 300, "s")
  boundary.text = "WASD or \nARROW KEYS \nto move. Press M to \ntoggle the music!\n ---S4LM0N";
  boundary.textColor = "grey";
  boundary.textSize = 15;
  boundary1 = new rocks.Sprite(rockBoundary, -300, 300, "s")
  boundary1.mirror.x = true;
  //fishSTOP = new rocks.Sprite(clearImg, rockBoundary.x , 250, "s"); 
  
  r2.scale = 1.3; 
  r3.scale =.6; 
  r4.scale = .75;
  r5.scale = 0.25; 
  r6.mirror.x = true; 
  r3.mirror.x = true; 
  c1.scale = 0.5; 
  
  




  //CREATE GROUND
if(!ground){
  ground = new Sprite(groundImg1, width / 3, 595, "s"); //"k = kinetic, s = static"
  //new Sprite(x,y,w,h,collider)
  // new Sprite(image, x, y, collider) 
}
  ground.friction = 0;
  ground.x = camera.x;
  ceiling.x = camera.x; 
  getPlayer();

  player.pos = { x: 200, y: 350 };

  healthBar.x = player.x;
  healthBar.layer = 2000; 


  //Extra mobility for the player 
  /*
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
  
*/

if(!theEnd) { theEnd = new doors.Sprite(); 
  theEnd.x = 2050; 
  theEnd.y = 300; 
  theEnd.color = "black";
  theEnd.image = endGoalImg; 
  g1 = new Sprite(clearImg, theEnd.x, theEnd.y, "n");
  g1.layer = 1; 
  theEnd.layer = 5; 
            }

  //end of tutorial
  
 
}


function eDeath1(){
  if(!eDeathSND.isPlaying()){
    eDeathSND.play(); 
   
   }
}






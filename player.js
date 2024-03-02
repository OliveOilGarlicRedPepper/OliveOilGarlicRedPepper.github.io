function playerSetUp(){ 

if(canMove == true)
{
  if ((kb.pressing('w') || kb.pressing('up'))) 
  {
  //   player.rotateTo(ang1, 1);
    player.vel.y = -4;
    player.changeAni('move');
    counter = 0; 
  }
    
  else if ( (kb.pressing('s')) || kb.pressing('down')) 
  {
   //  player.rotateTo(ang2, 1);
    player.vel.y = 4;
    player.changeAni('move');
   counter = 0; 
  
  }  
  else 
  {
    player.vel.y = 0;
  }

  if (  (kb.pressing('a')) || kb.pressing('left')) 
  {
    player.vel.x = -4;
    player.changeAni('move');
   //  player.rotateTo(ang7, 1);
   // player.rotationSpeed = 8;
  
    counter = 1; 
  } 
  else if ( (kb.pressing('d')) || kb.pressing('right'))  
  {
    player.vel.x =4;
    player.changeAni('move');
  //  player.rotationSpeed = 8;
   
    player.mirror.x = true;
    counter = 0; 

  }   else {
    player.vel.x = 0;
    
  }
  }

  if(player.vel.x == 0 && player.vel.y == 0){
    player.changeAni('idle');
  }

/*  if(kb.released() == true){
    player.rotationLock = true; 
  } else{
    player.rotationLock = false; 
  }
*/ 
 

  
  if (player.x  < 20) {
    player.x = 20;
  }
  if (player.x  > 10000) {
    player.x = 10000;
  }
  if (player.y > 700) {
    player.y = 700;
  }
  if (player.y < 0){
  player.y = 0;
  }
  camera.x = player.x + 102;
  ground.x = camera.x; 

  if (counter == 1){
  player.mirror.x = false;
    
    
  }

  if(counter == 0 ){
    player.mirror.x = true;
  }



  //mechanics
health();
hide();
  shoot();
  oilSpill(); 
  netting();

  fall(); 
  dash(); 

  



  
}// END OF DEFAULT PLAYER SET UP


function getPlayer() {
if (!player) {  // Check ifplayer has not been created
  player = new Sprite(boatImg, 20, 350);
  
  player.width = 85;
  player.height = 40;
  player.color = color(67, 66, 140);
  player.rotationLock = true;
  player.vel.x = 0;
  player.vel.y = 0;
  player.acceleration = 0;
  player.friction = 0;
  camera.x = player.x + 102;
  player.layer = 3; 
  player.addAni('move', fishMoveAni);
  player.addAni('idle', fishIdleAni);
  player.addAni('die', fishDieAni);
  player.changeAni('idle');
  playerSetUp();
}
}


/*MECHANICS*/

function hide(){ //KELP FOREST
  if (kb.pressing('shift')) {
   // player.overlaps(kelps);
    kelps.layer = 4
    canHurt = false; 
  } 
  else {
    //player.collides(kelps);
    kelps.layer = 2; 
    canHurt = true; 
  }
}

function dash() {
  if (kb.presses('ctrl')) {
    if(kb.pressing('w') || ( kb.pressing('s'))){
      player.vel.y *= 10;
    }
    else if( kb.pressing('a') || ( kb.pressing('d'))){
    player.vel.x *= 10;
    }
   else{
   player.vel.x += 76;
    }
}
}



function shoot(){ //MAIN ABILITY
  if (kb.presses('space')){

    if(counter == 0){
      bullet = new bullets.Sprite(player.x+50, player.y, 10, "n");
      bullet.vel.x = 8;
    }
    else{
      bullet = new bullets.Sprite(player.x-50, player.y, 10, "n");
      bullet.vel.x = -8;  
    }
  
    }

  
}

function shine(){ //SUNKEN SHIP
  if (!light) {  
    noStroke();
    light = new Sprite(flashImg, player.x + 50, player.y, "n");
     light.color = (255, 255, 0, 150);
  }

  light.x = player.x; 
  light.y = player.y; 
   light.layer = 2;
 

/*middle finger*/
}

function oilSpill(){
  if(oils.overlapping(player)){
      player.vel.x = player.vel.x /2; 
    
  }  
}

function netting(){
  if(nets.overlapping(player)){
    if(canHurt == true){
    totHealth --; 
    healthBar.w = healthBar.w - 2;
    }
  }
  
}

function fall(){
  if(debris.collides(player)){
    totHealth = totHealth - 5; 
    healthBar.w = healthBar.w - 10; 
  }
  
}






/*DAMAGE AND HEALTH*/ 

function health(){
if(!healthBar){
  rectMode(CORNER);
  healthFront = new Sprite(healthBarImg, 100, 20, "n");
  healthBar = new Sprite(100, 20,200, 20, "n");
 
 
  healthFront.layer = 8;
  healthBar.layer = 7; 

}

  if(totHealth <= 100 && totHealth > 50){
      healthBar.color = "green";
  } else if(totHealth <= 50  && totHealth >25){
    healthBar.color = "yellow";
  } else{
    healthBar.color = "red";
  }
  
  healthFront.x = player.x;
  healthBar.x = player.x;
  collision();
 
  


  
}

function collision()
{
rectMode(CORNER);
  //if player collides with certain enemies, decAmt is a certain amt. 
  if(player.colliding(enemies)){
    
  totHealth --;
  healthBar.w = healthBar.w - 2;
  }

  

  }

  
  
  


function death()
{
 
  enemies.vel.x = 0;
  enemies.vel.y = 0; 
  theEnd.remove(); 

  player.vel.x = 0;
  player.vel.y = -1; 
    healthBar.x = -1500;
  healthBar.w = 200;

   player.changeAni('die');
    
 
   
  
}

function deathCard1(){
  background(backImg);
  death();
  

  //play death animation 1 
 

  d1 = new deaths.Sprite(clearImg);
  d1.x = camera.x; 
  d1.y = height/2; 
  d1.text = "You died to a lil guy!\nClick anywhere to try again!"; 
  d1.textSize = 15;
  d1.textColor = "white"; 


  
  if(mouse.presses()){
    deaths.removeAll(); 
     enemies.removeAll();
    enemyHealthBar.removeAll(); 
    fishDieAni.frame = 1; 
    fishDieAni.play();
    
    tutorialScreenAssests();
    
    screen = 2; 
  }



  
}





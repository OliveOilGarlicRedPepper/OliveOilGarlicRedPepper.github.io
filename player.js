function playerSetUp(){ 

if(canMove == true)
{
  if ((kb.pressing('w') || kb.pressing('up'))) 
  {
    
    player.vel.y = -4;
    player.rotation = -90; 
    player.changeAni('move');
    counter = 2; 
    player.mirror.x = true;
  }
    
  else if ( (kb.pressing('s')) || kb.pressing('down')) 
  {
  
    
    player.vel.y = 4;
    player.rotation = 90; 
    player.changeAni('move');
   counter = -2; 
    player.mirror.x = true;
  }  
  else 
  {
    player.vel.y = 0;
  }

  if (  (kb.pressing('a')) || kb.pressing('left')) 
  {
    player.rotation = 0; 
    player.vel.x = -4;
    player.changeAni('move');
    counter = 1; 
    player.mirror.x = false; 
    
  } 
  else if ( (kb.pressing('d')) || kb.pressing('right'))  
  {
   player.rotation = 0; 
   
    player.vel.x =4;
    player.changeAni('move');
   
    player.mirror.x = true;
    counter = 0; 

  }   else {
    player.vel.x = 0;
    
  }
  }

  if(player.vel.x == 0 && player.vel.y == 0){
    player.changeAni('idle');
  }



  /* if(kb.presses('w') || kb.presses('up')){
    player.rotation = -90; 
  } else if (kb.presses('s') || kb.presses('down')){
    player.rotation = 90; 
  } 
 */ 

  
  if (player.x  < -20000) {
    player.x = -20000;
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

  /* if (counter == 1){
  player.mirror.y = true;
    
    
  }

  if(counter == 0 ){
    player.mirror.x = true;
  }
*/


  //mechanics
health();
hide();
  shoot();
  oilSpill(); 
  netting();

  fall(); 
  musicToggle();



  
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
  if ((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))) {
   // player.overlaps(kelps);
    player.layer = 2
    canHurt = false; 
  } 
  else {
    //player.collides(kelps);
    player.layer = 3; 
    canHurt = true; 
  }
}

function dash() {
  if (kb.presses('enter')) {
   /* if(kb.pressing('w') || ( kb.pressing('s'))){
      player.vel.y *= 10;
    }
    else */if( kb.pressing('a') || ( kb.pressing('d'))){
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
    else if (counter == 1){
      bullet = new bullets.Sprite(player.x-50, player.y, 10, "n");
      bullet.vel.x = -8;  
    } else if (counter == -2){
      bullet = new bullets.Sprite(player.x, player.y + 50, 10, "n");
      bullet.vel.y = 8; 
    }else if (counter == 2){
      bullet = new bullets.Sprite(player.x, player.y - 50, 10, "n");
      bullet.vel.y = -8; 
    } else {
      bullet = new bullets.Sprite(player.x+50, player.y, 10, "n");
      bullet.vel.x = 8;
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
  if(debris.overlapping(player)){
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
 
 
  healthFront.layer = 80;
  healthBar.layer = 79; 

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

  if (player.colliding(hiders)){
    totHealth --;
    healthBar.w = healthBar.w - 2;
  }


  }

  
  
  


function death()
{
  
  enemies.vel.x = 0;
  enemies.vel.y = 0; 
  enemyHealthBar.y = -200; 
  player.vel.x = 0;
  player.vel.y = -1; 
    healthBar.x = -1500;
  healthBar.w = 200;
   player.changeAni('die');
}
function death2()
{
   
  enemies.vel.x = 0;
  enemies.vel.y = 0; 
  enemyHealthBar.y = -200; 
  player.vel.x = 0;
  player.vel.y = -1; 
    healthBar.x = -1500;
  healthBar.w = 200;
   player.changeAni('die');
}

function death3()
{

  player.vel.x = 0;
  player.vel.y = -1; 
    healthBar.x = -1500;
  healthBar.w = 200;
   player.changeAni('die');
}
function death4()
{

  enemies.vel.x = 0;
  enemies.vel.y = 0; 
   enemyHealthBar.y = -200; 
  player.vel.x = 0;
  player.vel.y = -1; 
    healthBar.x = -1500;
  healthBar.w = 200;
  //light.vey = player.y; 
  g3.remove(); 
   player.changeAni('die');
}
function death5()
{
 
  enemies.vel.x = 0;
  enemies.vel.y = 0; 
   enemyHealthBar.y = -200; 
  player.vel.x = 0;
  player.vel.y = -1; 
    healthBar.x = -1500;
  healthBar.w = 200;
   player.changeAni('die');
}

function death6()
{
 
  enemies.vel.x = 0;
  enemies.vel.y = 0; 
  player.vel.x = 0;
   enemyHealthBar.y = -200; 
  player.vel.y = -1; 
    healthBar.x = -1500;
  healthBar.w = 200;
   player.changeAni('die');
}

function deathCard1(){
  background(backImg);
  death(); 
//  theEnd.remove(); 
  //play death animation 1 
  if(!d1){
    d1 = new deaths.Sprite(clearImg);
    d1.x = camera.x; 
    d1.y = height/2; 
    d1.text = "You died to a corrupted fish!\nPress E to try again!"; 
    d1.textSize = 15;
    d1.textColor = "white"; 
  }
  if(kb.presses('e')){
    deaths.removeAll(); 
     enemies.removeAll();
    corals.removeAll(); 
    rocks.removeAll(); 
    coralBack.remove(); 
    
  
    enemyHealthBar.removeAll(); 
    fishDieAni.frame = 1; 
    fishDieAni.play();
     
    tutorialScreenAssests();
    screen = 2; 
  }
}
function deathCard2(){
  background(backImg);
  death2();
  //play death animation 2 
if(!d1){
  d1 = new deaths.Sprite(clearImg);
  d1.x = camera.x; 
  d1.y = height/2; 
  d1.text = "You died to a corrupted fish!\nPress E to try again!"; 
  d1.textSize = 15;
  d1.textColor = "white"; 
  d1.layer = 200; 
}

  if(kb.presses('e')){
    deaths.removeAll(); 
    corals.removeAll(); 
     enemies.removeAll();
    enemyHealthBar.removeAll(); 
    rocks.removeAll(); 
    oils.removeAll(); 
    
    invisibles.removeAll(); 
   

    fishDieAni.frame = 1; 
    fishDieAni.play();

    playLvl1();

    screen = 30; 
  }
}
function deathCard3(){
  background(backImg2);
  death3();
  //play death animation 2 
if(!deaths){
  d1 = new deaths.Sprite(clearImg);
  d1.x = camera.x; 
  d1.y = height/2; 
  d1.text = "You died to ghost gear!\nPress E to try again!"; 
  d1.textSize = 15;
  d1.textColor = "white"; 
}
  if(kb.presses('e')){
    deaths.removeAll(); 
     enemies.removeAll();
    nets.removeAll();
    kelps.removeAll();
    kelpBack1.remove();
    rocks.removeAll(); 
    boundaries.removeAll();
   

    enemyHealthBar.removeAll(); 
    fishDieAni.frame = 1; 
    fishDieAni.play();

    playLvl2();

    screen = 40; 
  }
}

function deathCard4(){
  background(16,14,54);
  death4();
  //play death animation 2 
if(!d1){
  d1 = new deaths.Sprite(clearImg);
  d1.x = camera.x; 
  d1.y = height/2; 
  d1.text = "You died to [????]!\nPress E to try again!"; 
  d1.textSize = 15;
  d1.textColor = "white"; 
  d1.layer = 200;
  
}
  if(kb.presses('e')){
    deaths.removeAll(); 
     hiders.removeAll();
    platforms.removeAll();
    entrance.remove(); 
    //light.remove(); 
     light.y = player.y;
    g3.remove(); 
    enemyHealthBar.removeAll(); 
    fishDieAni.frame = 1; 
    fishDieAni.play();
   


    playLvl3();

    screen = 50; 
  }
}

function deathCard5(){
  background(backImg4);
  death5();
  //play death animation 2 
if(!d1){
  d1 = new deaths.Sprite(clearImg);
  d1.x = camera.x; 
  d1.y = height/2; 
  d1.text = "You died!\nPress E to try again!"; 
  d1.textSize = 15;
  d1.textColor = "white"; 
}
  if(kb.presses('e')){
    deaths.removeAll(); 
     enemies.removeAll();
    enemyHealthBar.removeAll(); 
    rocks.removeAll();
    debris.removeAll();
    fishDieAni.frame = 1; 
    fishDieAni.play();
    


    playLvl4();

    screen = 60; 
  }
}
function deathCard6(){
  background(backImg5);
  death6();
  //play death animation 2 
if(!d1){
  d1 = new deaths.Sprite(clearImg);
  d1.x = camera.x; 
  d1.y = height/2; 
  d1.text = "You died!\nPress E to try again!"; 
  d1.textSize = 15;
  d1.textColor = "white"; 
}
  if(kb.presses('e')){
    deaths.removeAll(); 
     enemies.removeAll();
    rocks.removeAll();
    oils.removeAll();
    volcanoFish.remove();
    boundaries.removeAll(); 
    enemyHealthBar.removeAll(); 
    fishDieAni.frame = 1; 
  

    fishDieAni.play();
    playLvl5();
    screen = 70; 
  }
}





function musicToggle(){
  if(kb.presses('m')){
    musicCheck++; 
      if(musicCheck % 2 == 0){
        windySND.setVolume(1); 
         dramaticSND.setVolume(1);
         shopSND.setVolume(1);
        opening2.setVolume(1); 
         SND1.setVolume(1);
        opening.setVolume(1); 
      } else {
        windySND.setVolume(0); 
         dramaticSND.setVolume(0);
         shopSND.setVolume(0);
        opening2.setVolume(0); 
         SND1.setVolume(0);
        opening.setVolume(0); 
      }
    
  }
  
}


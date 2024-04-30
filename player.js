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
 // musicToggle();
  pmenu(); 



  
}// END OF DEFAULT PLAYER SET UP

function pmenu(){

  if(kb.presses('escape')){
    if(canMenu == true){
    menuCheck++; 
    if(!menu){ 
      menu = new Sprite(camera.x, height/2, 350, 200, "n"); 
      menu.layer = 1500; 
      menu.text = "MENU\n\n\n\n(Press 'escape' again \nto exit menu)";
      menu.textSize = 25; 
      menu.textColor = "white";
      menu.color = color(106,102,163); 
    }
    if(!mback){
      mback = new Sprite(menuBackImg, menu.x, menu.y, "n"); 
      mback.layer = menu.layer - 1; 
      mback.scale = 5; 
    }
    if(!mb2){
      mb2 = new Sprite(camera.x + 75, menu.y, 100, 50, "k"); 
      mb2.layer = 1500;
      mb2.text = "Mute"; 
      mb2.textColor = "white";
      mb2.textSize = 20;
      mb2.color = color(132,169,192);
    }
    if(!mb1){
      mb1 = new Sprite(camera.x - 75, menu.y, 100, 50, "k"); 
      mb1.layer = 1500;
      mb1.text = "Home";
      mb1.textSize = 20; 
      mb1.textColor = "white";
      mb1.color = color(179, 203, 249);
    }
    if (menuCheck % 2 != 0){
      menu.y = height/2; 
      mb1.y = menu.y; 
      mback.y = menu.y; 
      mb2.y = menu.y;  
      menu.x = camera.x; 
     mb1.x = menu.x-70; 
      mb2.x = menu.x +70; 
      mback.y = menu.y; 
      mback.x = menu.x; 
      canMove = false;
      yomama = player.y
    //  you left the call again
     
      player.vel.x = 0; 
       player.vel.y = 0; 
      player.collider = "n"; 
    } else
    {
      menu.y = -1000; 
        mb1.y = -1000; 
        mb2.y = -1050; 
        mback.y = -10000; 
      player.collider = "d"; 
      player.x = camera.x - 102; 
       player.y = yomama; 
      canMove = true; 
    
    } 
  
   
  }

  

 
  }
   if(mb2){
      if(mb2.mouse.presses()){
        musicCheck++; 
        if(musicCheck % 2 == 0){
          windySND.setVolume(1); 
           dramaticSND.setVolume(1);
           shopSND.setVolume(1);
           if(sC1 == false){
           //  radioSND.setVolume(1); 
          opening2.setVolume(1); 
           } else{
             opening3.setVolume(1); 
           }

          if(sC5 == false && sC6 == false){
           opening21.setVolume(1);
          }else if(sC5 ==true && sC6 == false){
            dramaticSND.setVolume(1);
          }else if (sC6 == true && sC5 == false){
            dramatic2SND.setVolume(1); 
          }
           SND1.setVolume(1);
          opening.setVolume(1); 
          opening3.setVolume(1);
           lvl2SND.setVolume(1);
          lvl3SND.setVolume(1);
          deepSND.setVolume(1);
          flutterSND.setVolume(1);
          mb2.text = "Mute"; 
        } else {
          windySND.setVolume(0); 
           dramaticSND.setVolume(0);
           shopSND.setVolume(0);
          //  radioSND.setVolume(0); 
          opening2.setVolume(0);
          opening21.setVolume(0);
          radioSND.setVolume(0);
          opening3.setVolume(0);
           dramatic2SND.setVolume(0); 
          
           SND1.setVolume(0);
          opening.setVolume(0);
           lvl2SND.setVolume(0);
          lvl3SND.setVolume(0);
          deepSND.setVolume(0);
          flutterSND.setVolume(0); 
          mb2.text = "Unmute"; 

        }
      }
    } // Music toggle 
  if(mb1){
    if(mb1.mouse.presses()){
      player.collider = "d"; 
      healthFront.y = -200;
      healthBar.y = -200;
      totHealth = 100;
      healthBar.w = 200;
      if(screen == 2 ){
        opening3.stop(); 
        opening3.setVolume(0);
         enemies.removeAll();
        corals.removeAll(); 
       
        rocks.removeAll(); 
        enemyHealthBar.removeAll(); 
        lamps.removeAll(); 
        platforms.removeAll();
        boundaries.removeAll(); 
  //  textBubbles.removeAll(); 
        g1.y = -1000; 
         opening2.stop(); 
        player.y = -1000; 
        menu.y = -1000; 
        mb1.y = -1000; 
        mb2.y = -1050;
        mback.y = -10000; 
        camera.x = windowWidth/2;
        ground.image = clearImg; 
        menuCheck++; 
        screen = 0;
        theEnd.y = -1000; 
         opening2.setVolume(0); 
         homeScreen();
      } else if (screen == 30){
        corals.removeAll(); 
         enemies.removeAll();
        enemyHealthBar.removeAll(); 
        rocks.removeAll(); 
        if(txt5){
           txt5.y = -1000; 
            }
        oils.removeAll(); 
        textBubbles.removeAll(); 
        coralBack.remove(); 
        invisibles.removeAll(); 
        lamps.removeAll(); 
         g1.y = -10000; 
        platforms.removeAll();
        boundaries.removeAll(); 
      //  textBubbles.removeAll(); 
        camera.x =  windowWidth/2;
        menuCheck++; 
        player.y = -1000; 
        menu.y = -1000; 
        mb1.y = -1000; 
        mb2.y = -1050;
        mback.y = -10000; 
        ground.image = clearImg; 
        shopSND.setVolume(0); 
        shopSND.stop(); 
         lvl1End.y = -1000; 
         screen = 0;
         homeScreen();
      } else if (screen == 40){
        enemies.removeAll();
        nets.removeAll();
        kelps.removeAll();
        if(txt3){
           txt3.y = -1000; 
            }
        kelpBack1.remove();
        textBubbles.removeAll(); 
        rocks.removeAll(); 
        boundaries.removeAll();
        enemyHealthBar.removeAll(); 
        lamps.removeAll(); 
        platforms.removeAll();
        boundaries.removeAll(); 
      //  textBubbles.removeAll(); 
        camera.x =  windowWidth/2;
        menuCheck++; 
        player.y = -1000; 
        menu.y = -1000; 
        mb1.y = -1000; 
        mb2.y = -1050;
        mback.y = -10000; 
        ground.image = clearImg; 
        g1.y = -1000;
          lvl2SND.stop();
         lvl2SND.setVolume(0); 
         screen = 0;
         lvl2End.y=-2000;
         homeScreen();
      } else if (screen == 50){
         hiders.removeAll();
        platforms.removeAll();
        entrance.remove(); 
        lamps.removeAll(); 
        platforms.removeAll();
        boundaries.removeAll(); 
        if(txt6){
           txt6.y = -1000; 
            }
        textBubbles.removeAll(); 
      //  textBubbles.removeAll(); 
        player.y = -1000; 
        light.y = -500;
         g3.y = -2000;
        g1.y = -1000;
        enemyHealthBar.removeAll(); 
        menu.y = -1000; 
        mb1.y = -1000; 
        mb2.y = -1050;
        mback.y = -10000; 
        camera.x =  windowWidth/2;
        ground.image = clearImg; 
        menuCheck++; 
         screen = 0;
         lvl3End.y = -1000;
        lvl3SND.setVolume(0); 
         homeScreen();
      } else if (screen == 60){
        enemies.removeAll();
          rocks.removeAll();
          debris.removeAll();
       //   textBubbles.removeAll(); 
          boundaries.removeAll(); 
          enemyHealthBar.removeAll(); 
        lamps.removeAll(); 
        platforms.removeAll();
        boundaries.removeAll(); 
        if(txt7){
           txt7.y = -1000; 
            }
       textBubbles.removeAll(); 
        camera.x =  windowWidth/2;
        player.y = -1000; 
        menu.y = -2000; 
        mb1.y = -1000; 
        mb2.y = -1050;
        mback.y = -10000; 
         screen = 0;
        menuCheck++; 
        ground.image = clearImg; 
         lvl4End.y = -1000;
        g1.y = -1000; 
        windySND.setVolume(0); 
         homeScreen();
      }
      else if (screen == 70){
        enemies.removeAll();
          rocks.removeAll();
          oils.removeAll();
          hiders.removeAll();
          textBubbles.removeAll(); 
          volcanoFish.remove();
          boundaries.removeAll(); 
          enemyHealthBar.removeAll(); 
        lamps.removeAll(); 
        platforms.removeAll();
        boundaries.removeAll(); 
    //  textBubbles.removeAll(); 
        camera.x =  windowWidth/2;
        player.y = -1000; 
        menu.y = -1000; 
        mb1.y = -1000; 
        mb2.y = -1050;
        mback.y = -10000; 
         screen = 0;
         lvl5End.y = -1000;
        g1.y = -1000; 
        menuCheck++; 
        ground.image = clearImg;
        
        
        if(opening21.isPlaying()){
        opening21.stop(); 
          opening21.setVolume(0); 
        }
        if(dramaticSND.isPlaying()){
          dramaticSND.stop();
           dramaticSND.setVolume(0);
        }
        if(dramatic2SND.isPlaying()){
          dramatic2SND.stop();
           dramatic2SND.setVolume(0);
        }

      
       
         homeScreen();
      }
    }
  } 
}





function getPlayer() {
if (!player) {  // Check ifplayer has not been created
  player = new Sprite(boatImg, 20, 350);
  player.width = 85;
  player.height = 40;
  player.color = color(67, 66, 140);
  player.rotationLock = true;
  player.vel.x = 0;
  player.collider = "d";
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
  if (((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))) || (menuCheck % 2 != 0)) {
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
  if(canMove == true){
    if (kb.presses('enter')) {
      if(kb.pressing('w') || ( kb.pressing('s'))){
       // player.applyForce(60); 
         player.vel.x *= 10;
      }
      else if(kb.presses('d') || ( kb.pressing('a'))){
     player.vel.x *= 10;
        // player.applyForce(60);
      }
      else if (player.mirror.x == true){
          player.vel.x += 76;
      } else if (player.mirror.x == false){
        player.vel.x -= 76;
      }
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
  if(canHurt == true){
  if(debris.overlapping(player)){
    totHealth = totHealth - 5; 
    healthBar.w = healthBar.w - (10); 
  }
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
  if(!d2){
    d2 = new deaths.Sprite(clearImg);
    d2.x = camera.x; 
    d2.y = height/2; 
    d2.text = "You died to a corrupted fish!\nPress E to try again!"; 
    d2.textSize = 15;
    d2.textColor = "white"; 
    d2.layer = 2000; 
  }
  d2.y = height/2; 
  d2.x = camera.x;

}
function death2()
{
  

  enemies.vel.x = 0;
  enemies.vel.y = 0; 
  enemyHealthBar.y = -200; 
  player.vel.x = 0;
  player.vel.y = -1; 
    healthBar.x = -1500;
  stores.remove(); 
  healthBar.w = 200;
   player.changeAni('die');
  if(!d21){
    d21 = new deaths.Sprite(clearImg);
    d21.x = camera.x; 
    d21.y = height/2; 
    d21.text = "You died to a corrupted fish!\nPress E to try again!"; 
    d21.textSize = 15;
    d21.textColor = "white"; 
    d21.layer = 2000; 
  }
  d21.y = height/2;
   d21.x = camera.x; 
}

function death3()
{
 

  player.vel.x = 0;
  player.vel.y = -1; 
    healthBar.x = -1500;
  healthBar.w = 200;
   player.changeAni('die');
  if(!d3){
    d3 = new deaths.Sprite(clearImg);
    d3.x = camera.x; 
    d3.y = height/2; 
    d3.text = "You died to ghost gear!\nPress E to try again!"; 
    d3.textSize = 15;
    d3.textColor = "white"; 
    d3.layer = 2000;
  }
  d3.y = height/2;
   d3.x = camera.x; 
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
  if(!d4){
    d4 = new deaths.Sprite(clearImg);
    d4.x = camera.x; 
    d4.y = height/2; 
    d4.text = "You died to [????]!\nPress E to try again!"; 
    d4.textSize = 15;
    d4.textColor = "white"; 
    d4.layer = 200;
  }
  d4.y = height/2;
  d4.x = camera.x; 
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
  if(!d5){
    d5 = new deaths.Sprite(clearImg);
    d5.x = camera.x; 
    d5.y = height/2; 
    d5.text = "You died!\nPress E to try again!"; 
    d5.textSize = 15;
    d5.layer = 200; 
    d5.textColor = "white"; 
  }
  d5.y = height/2; 
  d5.x = camera.x; 
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
  if(!d6){
    d6 = new deaths.Sprite(clearImg);
    d6.x = camera.x; 
    d6.y = height/2; 
    d6.text = "You died!\nPress E to try again!"; 
    d6.textSize = 15;
    d6.layer = 200; 
    d6.textColor = "white"; 
  }
  d6.y = height/2; 
   d6.x = camera.x; 
}

function deathCard1(){
  background(backImg);
  death(); 
//  theEnd.remove(); 
  //play death animation 1 

  if(kb.presses('e') || player.y < -10){
    //deaths.removeAll(); 
     enemies.removeAll();
    corals.removeAll(); 
    rocks.removeAll(); 
    //coralBack.remove(); 
    d2.y = -500; 
  
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


  if(kb.presses('e') || player.y < -10){
  //  deaths.removeAll(); 
    corals.removeAll(); 
     enemies.removeAll();
    enemyHealthBar.removeAll(); 
    rocks.removeAll(); 
    oils.removeAll(); 
    coralBack.remove(); 
    d21.y = -500;
    
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

  if(kb.presses('e') || player.y < -10){
//    deaths.removeAll(); 
     enemies.removeAll();
    nets.removeAll();
    kelps.removeAll();
    kelpBack1.remove();
    rocks.removeAll(); 
    boundaries.removeAll();

    d3.y = -500; 
   

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

  if(kb.presses('e') || player.y < -10){
   // deaths.removeAll(); 
     hiders.removeAll();
    platforms.removeAll();
    entrance.remove(); 
    //light.remove(); 

    d4.y = -500; 
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

  if(kb.presses('e') || player.y < -10){
    //deaths.removeAll(); 
     enemies.removeAll();
    enemyHealthBar.removeAll(); 
    rocks.removeAll();
    debris.removeAll();
    fishDieAni.frame = 1; 
    fishDieAni.play();

    d5.y = -500; 
    


    playLvl4();

    screen = 60; 
  }
}
function deathCard6(){
  background(backImg5);
  death6();
  //play death animation 2 

  if(kb.presses('e') || player.y < -10){
   // deaths.removeAll(); 
     enemies.removeAll();
    rocks.removeAll();
    oils.removeAll();
    hiders.removeAll();
    textBubbles.removeAll(); 
    volcanoFish.remove();
    boundaries.removeAll(); 
    enemyHealthBar.removeAll(); 
    fishDieAni.frame = 1; 
  d6.y = -500; 

    fishDieAni.play();
    playLvl5();
    screen = 70; 
  }
}





/*function musicToggle(){
  if(kb.presses('m')){
    musicCheck++; 
      if(musicCheck % 2 == 0){
        windySND.setVolume(1); 
         dramaticSND.setVolume(1);
         shopSND.setVolume(1);
         if(sC1 == false){
           radioSND.setVolume(1); 
        opening2.setVolume(1); 
         }
         SND1.setVolume(1);
        opening3.setVolume(1);

        opening.setVolume(1); 
         lvl2SND.setVolume(1);
        lvl3SND.setVolume(1);
        deepSND.setVolume(1);
        flutterSND.setVolume(1);
      } else {
        windySND.setVolume(0); 
         dramaticSND.setVolume(0);
         shopSND.setVolume(0);
      
        opening2.setVolume(0); 
        
         SND1.setVolume(0);
        opening3.setVolume(0);

        opening.setVolume(0);
         lvl2SND.setVolume(0);
        lvl3SND.setVolume(0);
        deepSND.setVolume(0);
        flutterSND.setVolume(0); 

      }
    
  }
  
} */ 


function playLvl1(){ //CORAL
screen = 30;
  sC2 = false; 
  mC1 = false; 
  camera.x = player.x + 102;
//  musicToggle(); 
  if(musicCheck % 2 == 0){
   shopSND.setVolume(1);
  }
  healthFront.y = 20;
  healthBar.y = 20; 
    //deathCount = 0; 
   canMove = true; 
  lvl = 1;
  
  totHealth = 100;
  healthBar.w = 200; 
  eMove = false; 
   eMove2 = false; 
   eMove3 = false; 
   eMove4 = false; 
   eMove5 = false;  
  eMove6 = false; 
   eMove7 = false; 
   eMove8 = false; 
   eMove9 = false; 
   eMove10 = false; 
  eMove11 = false; 
   eMove12 = false; 
   eMove13 = false; 
   eMove14 = false; 
   eMove15 = false;  
  eMove16 = false; 
   eMove17 = false; 
   eMove18 = false; 
   eMove19 = false; 
   eMove20 = false; 
  eC1 = false;
  eC2 = false;
  eC3 = false;
  eC4 = false;
  eC5 = false;
  eC6 = false;
  eC7 = false;
  eC8 = false;
  eC9 = false;
  eC10 = false;
  eC11 = false;
  eC12 = false;
  eC13 = false;
  eC14 = false;
  eC15 = false;
  eC16 = false;
  eC17= false;
  eC18 = false;
  eC19 = false;
  eC20 = false;
  canMenu = true; 
 
  
  player.y = 350;
  player.x = 20;
   background(132, 141, 217); 
  opening.stop(); 
  
  
   
  ground.friction = 0;
  ground.x = camera.x;
  ground.layer = 10; 
  ground.image = groundImg1;
  
  getPlayer(); 

  if (!lvl1End) {  // Check if lvl1End has not been created
    lvl1End = new Sprite(endGoalImg, 7050, 300, "k");
    lvl1End.color = "black";
    g1 = new Sprite(clearImg, lvl1End.x, lvl1End.y, "n"); 
   // END IS AT 6050
  }


  lvl1End.y = 300; 
  g1.y = lvl1End.y;
  g1.image = clearImg; 

  boundary = new boundaries.Sprite(rockBoundary, -300, 300, "s")
  boundary1 = new boundaries.Sprite(rockBoundary, -600, 300, "s")
  boundary1.mirror.x = true;
  // radio stuff
  i2 = false;
  radio2 = new lamps.Sprite(lampImg, 300, 328);
  invis0 = new invisibles.Sprite(clearImg, 300, 200); 
  invis100 = new invisibles.Sprite(clearImg, 300, 200);
 
  txt5 = new textBubbles.Sprite(textBubbleImg, 470, -2000, "n");
  

   coralBack = new Sprite(coralBackImg, 200, 480, "n");
  coralBack.y = 480; 
 
    
  for(let i = 0; i<31; i++){
   
  
    c = new corals.Sprite(coralImg, random(200, 8050), 470, "n"); 
    if(c.overlapping(corals)){
      c.remove();
    }
    i++; 
  }
  for(let i = 0; i<31; i++){
    c = new corals.Sprite(coralImg, random(200,8050), 470, "n"); 
    c.scale = 0.5; 
    c.y = 490; 
    if(c.overlapping(corals)){
      c.remove();
    }
    i++; 
  }

  r1 = new rocks.Sprite(rockOneImg,20, 470, "n" );
  r2 = new rocks.Sprite(rockTwoImg,300, 470, "n" );
//  r3 = new rocks.Sprite(rockTwoImg, 500, 470, "n" );
   r4 = new rocks.Sprite(rockThreeImg, 600, 470, "n" );
  r4.mirror.x = true; 
   r5 = new rocks.Sprite(rockTwoImg,1200, 470, "n" );
//  r6 = new rocks.Sprite(rockOneImg, 1400, 470, "n"); 
 // r6.mirror.x = true; 
  r7 = new rocks.Sprite(rockThreeImg, 1900, 470, "n" );
  r7.mirror.x = true; 
  r8 = new rocks.Sprite(rockTwoImg, 2200, 470, "n" );
  r9 = new rocks.Sprite(rockThreeImg, 2600, 470, "n" );
  r10 = new rocks.Sprite(rockTwoImg, 3000, 470, "n" ); 
  r10.mirror.x = true; 
  r11 = new rocks.Sprite(rockOneImg, 3800, 470, "n" ); 
  r12 = new rocks.Sprite(rockOneImg, 4350, 470, "n" );
  r12.mirror.x = true; 
  r13 = new rocks.Sprite(rockThreeImg, 4700, 470, "n" ); 
  r14 = new rocks.Sprite(rockThreeImg, 5100, 470, "n" ); 
  


  coralBack.layer = 2;
  boundary.layer = 3;
  boundary1.layer = 3; 
  lvl1End.layer = 4;
  g1.layer = 3; 
  corals.layer = 2.8; 
  ceiling = new rocks.Sprite(platImg, 400, 20, "n"); 
  ceiling.mirror.y = true; 

  //ENEMIES HIDING IN THE OILS=======================================


  o1 = new oils.Sprite(700, 200, 110);
  o1.scale = 1.1; 
  // x, y, diameter
  o2 = new oils.Sprite(800, 400, 60);
  o2.scale = 0.6; 
  o3 = new oils.Sprite(975, 50, 80);
  o3.scale = 0.8; 
  o4 = new oils.Sprite(1100, 250, 100);
  o5 = new oils.Sprite(1600, 350, 100);
  o6 = new oils.Sprite(1760, 250, 70); 
  o6.scale = 0.7; 
  o7 = new oils.Sprite(1300, 200, 70); 
  o7.scale = 0.7; 
  o8 = new oils.Sprite(1570, 100, 60); 
  o8.scale = 0.6; 
  o9 = new oils.Sprite(1860, 50, 50);
  o9.scale = 0.5; 
  o10 = new oils.Sprite(1960, 350, 90);
  o10.scale = 0.9; 
  
  o11 = new oils.Sprite(2200, 200, 130);
  o11.scale = 1.3; 
  o12 = new oils.Sprite(2450, 100, 60);
  o12.scale = 0.6; 
  o13 = new oils.Sprite(2600, 300, 80);
  o13.scale = 0.8; 
  o14 = new oils.Sprite(2100, 400, 90);
  o14.scale = 0.9; 
  o15 = new oils.Sprite(2340, 370, 80);
  o15.scale = 0.8; 
  o16 = new oils.Sprite(2450, 70, 120);
  o16.scale = 1.2; 
  o17 = new oils.Sprite(2250, 530, 100);
  o18 = new oils.Sprite(2400, 600, 60);
  o18.scale = 0.6; 
  o19 = new oils.Sprite(2250, 650, 100);
  o20 = new oils.Sprite(2650, 150, 100);


  
  o21 = new oils.Sprite(3000, 200, 130);
  o21.scale = 1.3; 
  o22 = new oils.Sprite(3300, 300, 60);
  o22.scale = 0.6; 
  //o23 = new oils.Sprite(3400, 250, 80);
 // o23.scale = 0.8; 
  o24 = new oils.Sprite(3100, 400, 90); 
  o24.scale = 0.9; 
  o25 = new oils.Sprite(3340, 570, 80);
  o25.scale = 0.8; 
  o26 = new oils.Sprite(3450, 70, 120);
  o26.scale = 1.2; 
  o27 = new oils.Sprite(3250, 130, 100); 
 o28 = new oils.Sprite(3400, 200, 60);
 o28.scale = 0.6; 
  o29 = new oils.Sprite(3650, 500, 100);
  o30 = new oils.Sprite(3550, 390, 100);

  o31 = new oils.Sprite(3630, 200, 130);
  o31.scale = 1.3; 
  o32 = new oils.Sprite(3800, 300, 60);
  o32.scale = 0.6; 
 // o33 = new oils.Sprite(3590, 200, 80);
 // o33.scale = 0.8; 
  o34 = new oils.Sprite(4100, 400, 90); 
  o34.scale = 0.9; 
  o35 = new oils.Sprite(5140, 570, 80);
 o35.scale = 0.8; 
  o36 = new oils.Sprite(4150, 70, 120);
   o36.scale = 1.2; 
 // o37 = new oils.Sprite(4350, 130, 100);
  o38 = new oils.Sprite(4400, 200, 60);
   o38.scale = 0.6; 
  o39 = new oils.Sprite(5250, 500, 100);
  o40 = new oils.Sprite(5550, 390, 100);
  
  o41 = new oils.Sprite(4300, 300, 60);
  o41.scale = 0.6; 
  o42 = new oils.Sprite(5200, 200, 80);
   o42.scale = 0.8; 
  o43 = new oils.Sprite(4700, 200, 90); 
   o43.scale = 0.9; 
  o44 = new oils.Sprite(3800, 670, 80);
   o44.scale = 0.8; 
  o45 = new oils.Sprite(4550, 70, 120);
   o45.scale = 1.2; 
  o46 = new oils.Sprite(4200, 530, 100);
  o47 = new oils.Sprite(3900, 500, 60);
   o47.scale = 0.6; 
  o48 = new oils.Sprite(4650, 600, 100);
//  o49 = new oils.Sprite(4250, 390, 100);
  o50 = new oils.Sprite(4150, 490, 100);


  e1 = new enemies.Sprite(680, 200, 20);
  eh1 = new enemyHealthBar.Sprite(680, -180, 50, 5, "n");

  e2 = new enemies.Sprite(720, 200, 20);
  eh2 = new enemyHealthBar.Sprite(720, -180, 50, 5, "n");

  e3 = new enemies.Sprite(1100, 250, 20);
  eh3 = new enemyHealthBar.Sprite(1100, 230, 50, 5, "n");

  e4 = new enemies.Sprite(1570, 350, 20);
  eh4 = new enemyHealthBar.Sprite(1500, 330, 50, 5, "n");
  
  e5 = new enemies.Sprite(1860, 50, 20);
  eh5 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");

  e6 = new enemies.Sprite(1860, 50, 20);
  eh6 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e6.x = o12.x; 
  e6.y = o12.y; 
  /*
  e7 = new enemies.Sprite(1860, 50, 20);
  eh7 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e7.x = o20.x; 
  e7.y = o20.y; 
  */
  e8 = new enemies.Sprite(1860, 50, 20);
  eh8 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e8.x = o11.x; 
  e8.y = o11.y; 
  e8.scale = 1.3; 

  e9 = new enemies.Sprite(1860, 50, 20);
  eh9 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e9.x = o36.x; 
  e9.y = o36.y; 

  e10 = new enemies.Sprite(1860, 50, 20);
  eh10 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e10.x = o45.x; 
  e10.y = o45.y; 
  e10.scale =1.2; 

  e11 = new enemies.Sprite(1860, 50, 20);
  eh11 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e11.x = o17.x; 
  e11.y = o17.y; 


  e12 = new enemies.Sprite(1860, 50, 20);
  eh12 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e12.x = o31.x; 
  e12.y = o31.y;
  

  e13 = new enemies.Sprite(1860, 50, 20);
  eh13 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e13.x = o20.x; 
  e13.y = o20.y;

  e14 = new enemies.Sprite(1860, 50, 20);
  eh14 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e14.x = o26.x; 
  e14.y = o26.y;
  e14.scale = 0.95; 

/*  e15 = new enemies.Sprite(1860, 50, 20);
  eh15 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e15.x = o16.x; 
  e15.y = o16.y;
  e15.scale = 1.2;
  */
  e16 = new enemies.Sprite(1860, 50, 20);
  eh16 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e16.x = o42.x; 
  e16.y = o42.y;
  e16.scale = 1; 

 /* e17 = new enemies.Sprite(1860, 50, 20);
  eh17 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e17.x = o28.x; 
  e17.y = o28.y;
  e17.scale = 0.6; 
*/
 /* e18 = new enemies.Sprite(1860, 50, 20);
  eh18 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e18.x = o41.x; 
  e18.y = o41.y;
  */

  e19 = new enemies.Sprite(1860, 50, 20);
  eh19 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e19.x = o39.x; 
  e19.y = o39.y;

 e20 = new enemies.Sprite(1860, 50, 20);
  eh20 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e20.x = -9999//o18.x; 
  e20.y = -9999//o18.y;
e20.scale = 0.9; 




  
  invis1 = new invisibles.Sprite(clearImg1, 375, 200); 
  invis1.h = windowHeight;//(x,y) E1 & E2
  invis2 = new invisibles.Sprite(clearImg1, 1050, 200); //(x,y)  E3 
  invis3 = new invisibles.Sprite(clearImg1, 1500, 200); //(x,y)  E4
  invis4 = new invisibles.Sprite(clearImg1, 1800, 200); //(x,y)  E5

  
  invis5 = new invisibles.Sprite(clearImg1, 2100, 200);
  
  invis6 = new invisibles.Sprite(clearImg1, 2530, 200); //3
  invis7 = new invisibles.Sprite(clearImg1, 2900, 200);//6
  invis8 = new invisibles.Sprite(clearImg1, 2300, 200); //1
  invis11 = new invisibles.Sprite(clearImg1, 2450, 200); //2
  invis20 = new invisibles.Sprite(clearImg1, 2600, 200); //4
  invis13 = new invisibles.Sprite(clearImg1, 2750, 200); //5
  invis15 = new invisibles.Sprite(clearImg1, 2750, 200); //5

  
  invis9 = new invisibles.Sprite(clearImg1, 5140, 200);
  invis10 = new invisibles.Sprite(clearImg1, 4550, 200);
  invis18 = new invisibles.Sprite(clearImg1, 5350, 200);
  invis19 = new invisibles.Sprite(clearImg1, 5250, 200);
  invis16 = new invisibles.Sprite(clearImg1, 4200, 200);
  
  invis12 = new invisibles.Sprite(clearImg1, 3650, 200);
  invis14 = new invisibles.Sprite(clearImg1, 3400, 200);
  invis17 = new invisibles.Sprite(clearImg1, 3400, 200);


  






  

  platform = new  boundaries.Sprite (blockImg1b, 6070, 370, "s");
  platform1 = new  boundaries.Sprite (blockImg1b, 6070, 125, "s");

  platform2 = new  boundaries.Sprite(blockImg1b, 6420, 100, "s");
  platform2.scale = 0.70;
  platform3 = new  boundaries.Sprite(blockImg1b, 6420, 300, "s");
  platform3.scale = 0.70;
  platform4 = new  boundaries.Sprite(blockImg1b, 6420, 500, "s");
  platform4.scale = 0.70;

}//end LVL 1 ====================================================

function playLvl2(){ //KELP
  mC2 = false; 
  camera.x = player.x + 102;

  screen = 40; 
  healthFront.y = 20;
  healthBar.y = 20; 
  totHealth = 100;
  healthBar.w = 200; 
  player.y = 350;
  player.x = 20;
  opening.stop(); 
  if(musicCheck % 2 == 0){
   lvl2SND.setVolume(1);
  }
  canMove = true; 
    
//  deathCount = 0; 
  canMenu = true; 
  nC1 = true; 
  nC2 =  true;
  nC3 = true;
  nC4 =  true;
  nC5 =  true;
  nC6 =  true;
  nC7 = true;
  nC8 =  true;
  nC9 =  true;
  nC99 =  true;

  ground.image = groundImg2;
  ground.friction = 0;
  ground.x = camera.x;

  playerSetUp();

  if (!lvl2End) // Check if lvl1End has not been created
  {  
    lvl2End = new Sprite(endGoalImg, 8650, 300, "k");
     g1 = new Sprite(glow2Img, lvl2End.x, lvl2End.y, "n"); 
    g1.layer = lvl2End.layer - 1; 

   // lvl2End.image = endGoalImg;

  }

  lvl2End.y = 300; 
  g1.y = lvl2End.y;

  g1.image = glow2Img; 

  boundary = new  boundaries.Sprite(rockBoundary, -300, 300, "s")
  boundary1 = new  boundaries.Sprite(rockBoundary, -600, 300, "s")
  boundary1.mirror.x = true;
  // radio stuff ========================= 
    i2 = false;
    radio1 = new lamps.Sprite(lampImg, 300, 328);
    invis3 = new invisibles.Sprite(clearImg, 300, 200);

   txt3 = new textBubbles.Sprite(textBubbleImg, 470, -2000, "n");
  
    n1 = new nets.Sprite(netImg1, 950, -101);//y-value 
    n1.w = 100;
    n1.h = 150; 

  n99 = new nets.Sprite(netImg1, 1450, -101);//y-value 
  n99.w = 100;
  n99.h = 150; 

    n2 = new nets.Sprite(netImg1, 2499, 150);
    n2.w = 100;
    n2.h = 150;  //chases u

    n3 = new nets.Sprite(netImg1, 1750, -101);
    n3.w = 100;
    n3.h = 150;

    n4 = new nets.Sprite(netImg1, 3699, 150);
    n4.w = 100;
    n4.h = 150;

    n5 = new nets.Sprite(netImg1, 3400, -101);
  n5.w = 100;
  n5.h = 150;

  n6 = new nets.Sprite(netImg1, 4300, -101);
  n6.w = 100;
  n6.h = 150;
  
  n7 = new nets.Sprite(netImg1, 4850, -101);
  n7.w = 100;
  n7.h = 150;

  n8 = new nets.Sprite(netImg1, 5100, -101);
  n8.w = 100;
  n8.h = 150;

  n9 = new nets.Sprite(netImg1, 5300, -101);
  n9.w = 100;
  n9.h = 150;

  n10 = new nets.Sprite(netImg1, 6000, 100);
  n10.w = 100;
  n10.h = 150;
    
 
  
  kelpBack1 = new Sprite(kelpBackImg, 200,500, "n")
  kelpBack1.layer = 1;
    kelpg1 = new kelps.Sprite(kelpFrontImg, 500, 440);
    kelpg2 = new kelps.Sprite(kelpFrontImg, 800, 440);
  kelpg2.scale = 0.7; 
    kelpg3 = new kelps.Sprite(kelpFrontImg, 1000, 440);
    //kelpg4 = new kelps.Sprite(kelpFrontImg, 1300, 420);
//kelpg5 = new kelps.Sprite(kelpFrontImg, 1400, 420);
    kelpg6 = new kelps.Sprite(kelpFrontImg, 1300, 440);
   // kelpg7 = new kelps.Sprite(kelpFrontImg,1600, 420);
  //  kelpg8 = new kelps.Sprite(kelpFrontImg, 1800, 420);
  //  kelpg9 = new kelps.Sprite(kelpFrontImg, 2000, 420);
   // kelpg10 = new kelps.Sprite(kelpFrontImg, 2200, 420);
    kelpg11 = new kelps.Sprite(kelpFrontImg, 2400, 440);
  kelpg11.scale = 0.95; 
    //kelpg12 = new kelps.Sprite(kelpFrontImg, 2700, 420);
   // kelpg13 = new kelps.Sprite(kelpFrontImg, 3300, 440);
 //   kelpg14 = new kelps.Sprite(kelpFrontImg, 3800, 440);
  //  kelpg15 = new kelps.Sprite(kelpFrontImg, 3700, 440);
   // kelpg16 = new kelps.Sprite(kelpFrontImg, 3900, 420);
   // kelpg17 = new kelps.Sprite(kelpFrontImg, 4000, 420);
    
    kelpg18 = new kelps.Sprite(kelpFrontImg, 4300, 440);
  //  kelpg19 = new kelps.Sprite(kelpFrontImg, 5000, 440);
  //  kelpg20 = new kelps.Sprite(kelpFrontImg, 5700, 440);
   kelpg20 = new kelps.Sprite(kelpFrontImg, 7000, 440);
  kelpg21 = new kelps.Sprite(kelpFrontImg, 7200, 440); 
  kelpg21.scale = 1.2; 
  kelpg22 = new kelps.Sprite(kelpFrontImg, 7500, 440);
  kelpg22.scale = 1.1; 
  kelpg23 = new kelps.Sprite(kelpFrontImg, 7700, 440);
  kelpg24 = new kelps.Sprite(kelpFrontImg, 7900, 440);
  kelpg25 = new kelps.Sprite(kelpFrontImg, 8100, 440);
  kelpg25.scale = 1.3; 
   kelpg26 = new kelps.Sprite(kelpFrontImg, 8300, 440);
  kelpg26.scale = 1.5; 
  kelpg27 = new kelps.Sprite(kelpFrontImg, 8500, 440);
  kelpg27.scale = 1.7; 
/*
  kelpg3.mirror.x = true;
  kelpg6.mirror.x = true;
  kelpg8.mirror.x = true;
  kelpg9.mirror.x = true;
  kelpg10.mirror.x = true;
  kelpg12.mirror.x = true;
*/
    kelp1 = new kelps.Sprite(kelpImg, 630, 465);
    kelp2 = new kelps.Sprite(kelpImg, 900, 465);
    kelp3 = new kelps.Sprite(kelpImg, 1500, 455);
  //  kelp4 = new kelps.Sprite(kelpImg, 1890, 455);
    kelp5 = new kelps.Sprite(kelpImg, 2040, 465); 
  kelp6 = new kelps.Sprite(kelpImg, 2340, 465);
  kelp6.scale = 0.76; 
  //  kelp6 = new kelps.Sprite(kelpImg, 2348, 455);
   // kelp7 = new kelps.Sprite(kelpImg, 2545, 455);
   // kelp8 = new kelps.Sprite(kelpImg, 2956, 455);
   // kelp9 = new kelps.Sprite(kelpImg, 3140, 455);
 //   kelp10 = new kelps.Sprite(kelpImg, 3200, 455);
 //   kelp11 = new kelps.Sprite(kelpImg, 3547, 455);
 //   kelp12 = new kelps.Sprite(kelpImg, 3678, 455);
  //  kelp13 = new kelps.Sprite(kelpImg, 3780, 455);
    //kelp14 = new kelps.Sprite(kelpImg, 4000, 455);
  kelp15 = new kelps.Sprite(kelpImg, 7100, 455);
  kelp16 = new kelps.Sprite(kelpImg, 7300, 455);
 
  
  

  kelp1.mirror.x = true; 
//  kelp4.mirror.x = true; 
  kelp5.mirror.x = true; 
//  kelp7.mirror.x = true; 
///  kelp10.mirror.x = true;
 // kelp14.mirror.x = true;



 rk1 = new kelps.Sprite(rockOneImg, 1000, 485, "n");
  rk1.mirror.x = true; 
 rk2 = new kelps.Sprite(rockThreeImg, 500, 495, "n");
  rk2.scale = 0.5; 
 rk3 = new kelps.Sprite(rockOneImg, 1450, 495, "n");
  rk3.scale = 0.5; 
 rk4 = new kelps.Sprite(rockTwoImg, 1950, 495, "n");
 
  
  rk7 = new kelps.Sprite(rockOneImg, 2950, 495, "n");
  rk7.scale = 0.8;
  rk8 = new kelps.Sprite(rockTwoImg, 3690, 495, "n");
  rk8.scale = 0.8; 
  rk9 = new kelps.Sprite(rockOneImg, 4100, 495, "n")
  rk9.scale = 0.5; 
  rk10 = new kelps.Sprite(rockThreeImg, 7300, 495, "n");
  
  
  rock1 = new  boundaries.Sprite (blockImg2, 1200, 470, "s");
  rock12 = new  boundaries.Sprite (blockImg2, 1200, 395, "s");
  rock13 = new  boundaries.Sprite(blockImg2, 1200, 320, "s");
  rock14 = new  boundaries.Sprite(blockImg2, 1200, 245, "s");
  rock2 = new  boundaries.Sprite (blockImg2, 1200, 20, "s");
  rock3 = new  boundaries.Sprite (blockImg2, 1950, 20, "s");
  rock4 = new  boundaries.Sprite (blockImg2, 1950, 170, "s");
  rock5 = new  boundaries.Sprite (blockImg2, 1950, 95, "s");
//  rock101 = new rocks.Sprite (blockImg2, 1500, 395, "s");
//  rock102 = new rocks.Sprite (blockImg2, 1500, 470, "s");
//   rock103 = new rocks.Sprite (blockImg2, 1750, 470, "s");
  rock15 = new  boundaries.Sprite(blockImg2, 1950, 470, "s"); 

  rock31 = new  boundaries.Sprite (blockImg2, 3500, 20, "s");
  rock41 = new  boundaries.Sprite (blockImg2, 3500, 470, "s");
   rock61 = new  boundaries.Sprite (blockImg2, 3500, 95, "s");
   rock51 = new  boundaries.Sprite (blockImg2, 3500, 395, "s");

  rock32 = new  boundaries.Sprite (blockImg2, 4500, 470, "s");
  rock42 = new  boundaries.Sprite (blockImg2, 4500, 395, "s");
  rock52 = new  boundaries.Sprite(blockImg2, 4500, 320, "s");
  rock62= new  boundaries.Sprite(blockImg2, 4500, 245, "s");

  rock32 = new  boundaries.Sprite (blockImg2, 5600, 470, "s");
  rock42 = new  boundaries.Sprite (blockImg2, 5600, 395, "s");
  rock52 = new  boundaries.Sprite(blockImg2, 5600, 320, "s");
  rock62= new  boundaries.Sprite(blockImg2, 5600, 20, "s");
  
  rock16 = new  boundaries.Sprite(blockImg2, 6950, 20, "s");
  rock17 = new  boundaries.Sprite(blockImg2, 6950, 95, "s");
  rock18 = new  boundaries.Sprite(blockImg2, 6950, 170, "s");
  rock19 = new  boundaries.Sprite(blockImg2, 6950, 245, "s");
  rock20= new  boundaries.Sprite(blockImg2, 6950, 320, "s");
   rock21= new  boundaries.Sprite(blockImg2, 6950, 320, "s");

  
  
  
    
  


}///end LVL 2 ====================================================

function playLvl3(){ //SUNKEN SHIP
  mC3 = false;
  camera.x = player.x + 102;

  screen = 50; 
  healthFront.y = 20;
  healthBar.y = 20; 
  totHealth = 100;
  healthBar.w = 200; 
  player.y = 350;
  player.x = 20;
  if(musicCheck % 2 == 0){
   lvl3SND.setVolume(1); 
  }
  opening.stop();
   canMove = true; 
  canMenu = true; 
  //deathCount = 0; 
  hc1 = 100;
   hc2 = 100; 
   hc3 = 100; 
   hc4 = 100; 
   hc5 = 100; 
   hc6 = 100; 
   hc7 = 100; 
   hc8 = 100;  
  hc9 = 100; 
   hc10 = 100; 
   hc11 = 100; 
   hc12 = 100;
   hc13 = 100; 
   hc14 = 100; 
   hc15 = 100; 
   hc16 = 100; 
  

  playerSetUp();
  shine(); 
  hide(); 
  pmenu(); 
  ground.image = groundImg3; 
  light.y = player.y; 
      
  
  // radio stuff===================================
  

  i2 = false;
  radio3 = new lamps.Sprite(lampImg, 300, 328);
  invis5 = new invisibles.Sprite(clearImg, 300, 200);
   txt6 = new textBubbles.Sprite(textBubbleImg, 470, -2000, "n");
  if (!lvl3End) {  // Check if lvl1End has not been created
    lvl3End = new Sprite(endGoalImg, 6750, 250, "k");
     g1 = new Sprite(glow2Img, lvl3End.x, lvl3End.y, "n");
    g1.layer = lvl3End.layer - 1; 

  //  lvl3End.image = endGoalImg;

  }

  lvl3End.y = 300; 
  g1.y = lvl3End.y;
  g1.image = glow2Img; 

  boundary = new  boundaries.Sprite(rockBoundary, -300, 300, "s");
  boundary1 = new  boundaries.Sprite(rockBoundary, -600, 300, "s");
  boundary1.mirror.x = true;


    entrance = new Sprite(shipWreckImg, 600, 280, "n");
  
  
  
    g3 = new Sprite(glowImg, player.x, player.y, "n"); 
  g3.layer = light.layer;
  
  

  plat1 = new platforms.Sprite(1100, 300, 48, 300); //bottom 1st
  plat1Top = new platforms.Sprite(1100, 25, 48, 50); //top 1st
//need to be 200 apart in x direction 
  plat2 = new platforms.Sprite(1350, 200, 48, 300); 
  plat3 = new platforms.Sprite(1600, 100, 48, 250);

  plat4 = new platforms.Sprite(2250, 400, 198, 50);
  plat5 = new platforms.Sprite(1995, 175, 195, 40);
  plat6 = new platforms.Sprite(1350, 200, 48, 100);
  plat7 = new platforms.Sprite(1800, 500, 48, 450);
  plat77 = new platforms.Sprite(1800, 100, 48, 150); 
//  plat8 = new platforms.Sprite(4000, 100, 25, 1000 ); //End
  plat9 = new platforms.Sprite(1900, 550, 48, 100);
  plat10 = new platforms.Sprite(1350, 500, 48, 120);
  plat11 = new platforms.Sprite(2700, 350, 48, 250);
  plat12 = new platforms.Sprite(1600, 400, 48, 100);
  plat13 = new platforms.Sprite(1200, 250, 250,48);
  plat14 = new platforms.Sprite(2300, 100, 48 ,300);
  plat15 = new platforms.Sprite(2100, 300, 48, 300);
  plat16 = new platforms.Sprite(2050, 25, 250, 48);  
  plat17 = new platforms.Sprite(2500, 100, 40, 300); 
  plat18 = new platforms.Sprite(2900, 200, 48, 200); 
  plat19 = new platforms.Sprite(2900, 300, 100, 48); 
  plat20 = new platforms.Sprite(3000, 350, 48, 100); 
  plat21 = new platforms.Sprite(3100, 50, 48, 200); 
//  plat22 = new platforms.Sprite(3600, 70, 98, 100);
  plat23 = new platforms.Sprite(3300, 100, 48, 300);
  plat24 = new platforms.Sprite(3400, 400, 198, 40); 
  plat25 = new platforms.Sprite(3600, 200, 250, 40);
  plat26 = new platforms.Sprite(3700, 300, 48, 200);
  plat27 = new platforms.Sprite(3800, 50, 298, 40);
  plat28 = new platforms.Sprite(3900, 400, 48, 300); 
  plat29 = new platforms.Sprite(3600, 400, 48, 200); 
  plat30 = new platforms.Sprite(2400, 450, 48, 200);
  plat31 = new platforms.Sprite(4100, 200, 48, 150); 
   plat32 = new platforms.Sprite(4100, 300, 198, 50);
   plat33 = new platforms.Sprite(4250, 20, 48, 175);
  plat34 = new platforms.Sprite(4200, 460, 48, 105);
  plat35 = new platforms.Sprite(4500, 240, 148, 55);
  plat35 = new platforms.Sprite(4350, 290, 48, 255);
  plat36 = new platforms.Sprite(4600, 340, 298, 55);
   plat37 = new platforms.Sprite(4650, 240, 48, 155);
  plat38 = new platforms.Sprite(4550, 40, 48, 255);
   plat39 = new platforms.Sprite(4750, 250, 170, 35);
  plat40 = new platforms.Sprite(4850, 450, 48, 255);
  plat41 = new platforms.Sprite(4800, 50, 48, 155);
  plat42 = new platforms.Sprite(4950, 150, 48, 155);
  plat43= new platforms.Sprite(4600, 450, 78, 35);


  /*plat100 = new Sprite(1000, 100,3,1000, "n");
  plat150 = new Sprite(1500, 100,3,1000, "n");
  plat200 = new Sprite(2000, 100, 3, 1000, "n");
  plat250 = new Sprite (2500, 100, 3, 1000, "n");
  plat300 = new Sprite(3000, 100, 3, 1000, "n");
  plat350 = new Sprite(3500, 100, 3, 1000, "n");

  plat100.color = "red";
  plat150.color = "green";
  plat200.color = "red";
  plat250.color = "green";
  plat300.color = "red";
  plat350.color = "green";
 */ 

  // hiders
  h1 = new hiders.Sprite(1230, 320,20, "k");
  h2 = new hiders.Sprite(1230, 140,20, "k");
  h3 = new hiders.Sprite(1600, 260,20, "k"), 
  h4 = new hiders.Sprite(2000, 400,20, "k");
  h5 = new hiders.Sprite(2250, 300,20, "k");
  h6 = new hiders.Sprite(3000, 50,20, "k");
  h7 = new hiders.Sprite(2650, 200,20, "k");
  h8 = new hiders.Sprite(2750, 400,20, "k");
  h9 = new hiders.Sprite(3250, 400,20, "k");
  h10 = new hiders.Sprite(3500, 70,20, "k");

  h100 = new hiders.Sprite(4050, 30,20, "k");
  h200 = new hiders.Sprite(4050, 400,20, "k");
  h300 = new hiders.Sprite(4600, 30,20, "k");
  h400 = new hiders.Sprite(4400, 400,20, "k");
  
  h11 = new hiders.Sprite(5500, 250, 60, "k"); // BIG BOAH 
  h12 = new hiders.Sprite(5700, 300,20, "k");
  h13 = new hiders.Sprite(5200, 70, 10, "k"); 
  h14 = new hiders.Sprite(5100, 470, 20, "k"),  
  h15 = new hiders.Sprite(5600, 470, 40, "k");
  h16 = new hiders.Sprite(5800, 50, 20, "k");
  h17 = new hiders.Sprite(5900, 250, 40, "k");
  h18 = new hiders.Sprite(6100, 150, 20, "k");



}// end LVL 3 ==========================================================

function playLvl4(){ //WHALE FALL
  mC4 = false; 
  camera.x = player.x + 102;

  screen = 60; 
  healthFront.y = 20;
  healthBar.y = 20; 
  playerSetUp();
  if(musicCheck % 2 == 0){
  windySND.setVolume(1);
  }
  dash(); 
  totHealth = 100;
  healthBar.w = 200;
  //deathCount = 0; 
  player.y = 350;
  player.x = 20;
  eMove21 = false;
  eMove2 = false; 
  canMenu = true; 
  shine(); 
  light.y = -2000;
 // g3.y = -200; 
  hide(); 
   canMove = true; 
  opening.stop(); 
   weC1 =false; 


  //radio stuff===================================
  i2 = false;
  radio4 = new lamps.Sprite(lampImg, 300, 328);
  invis6 = new invisibles.Sprite(clearImg, 300, 200);
  txt7 = new textBubbles.Sprite(textBubbleImg, 470, -2000, "n");
  ground.image = groundImg4;
  ground.friction = 0;
  ground.x = camera.x;

  
  if (!lvl4End) {  // Check if lvl1End has not been created
    lvl4End = new Sprite(endGoalImg, 7750,250, "k");
     g1 = new Sprite(glow2Img, lvl4End.x, lvl4End.y, "n"); 
    g1.layer = lvl4End.layer - 1; 

  //  lvl4End.image = endGoalImg;

  }
  lvl4End.y = 250; 
   g1.y = lvl4End.y;    
  g1.image = glow2Img; 

  boundary = new  boundaries.Sprite(rockBoundary, -300, 300, "s")
  boundary1 = new  boundaries.Sprite(rockBoundary, -600, 300, "s")
  boundary1.mirror.x = true;
  
/*  for(let i = 0; i<31; i++){


    c = new rocks.Sprite(rockOneImg, random(200, 6050), 470, "n"); 
    if(c.overlapping(rocks)){
      c.remove();
    }
    i++; 
  }
  */ 

  r1 = new rocks.Sprite(rockOneImg, 400, 470, "n");
  r1.mirror.x = true; 
  r2 = new rocks.Sprite(rockOneImg, 600, 470, "n");
  r2.scale = 0.5; 
  r3 = new rocks.Sprite(rockOneImg, 1300, 470, "n");
  r4 = new rocks.Sprite(rockThreeImg, 1600, 480, "n");
  r5 = new rocks.Sprite(rockOneImg, 2400, 470, "n"); 
  r5.scale = 0.7; 
  r6 = new rocks.Sprite(rockTwoImg, 2250, 470, "n"); 
  r7 = new rocks.Sprite(rockOneImg, 2700, 470, "n");
  r7.text = "                 Here I make\n                   my last stand.\n                 I dream they will tell stories\n                of my adventure one day.\n                  Yet, deep down, I know\n\n                Only heroes get remembered.\n                 ---S4LM0N\n\n"; 
  r7.textSize = 10; 
//  r8 = new rocks.Sprite(rockThreeImg, 3000, 470, "n");
//  r9 = new rocks.Sprite(rockOneImg, 3100, 470, "n");
//  r9.scale = 0.8; 
  r10 = new rocks.Sprite(rockTwoImg, 3400, 470, "n");
  r11 = new rocks.Sprite(rockOneImg, 3800, 470, "n");
  r12 = new rocks.Sprite(rockOneImg, 4100, 470, "n");
  r12.mirror.x = true; 
  r13 = new rocks.Sprite(rockThreeImg, 4400, 480, "n");
  r14 = new rocks.Sprite(rockOneImg, 4550, 470, "n");
  r15 = new rocks.Sprite(rockOneImg, 5400, 470, "n");
  r16 = new rocks.Sprite(rockTwoImg, 5600, 470, "n");
  r17 = new rocks.Sprite(rockThreeImg, 6500, 480, "n");
  r18 = new rocks.Sprite(rockOneImg, 6200, 470, "n");

  
  d1 = new debris.Sprite(w1,600, 0); 
  d1.vel.y = random(5, 8);
  d2 = new debris.Sprite(w2, 500, 0);
  d2.vel.y = random(5, 8);
  d3 = new debris.Sprite(w3, 700, 0);
 d3.vel.y = random(5, 8);
  d4 = new debris.Sprite(w4, 800, 0);
 d4.vel.y = random(5, 8);
  d5 = new debris.Sprite(w5, 1200, 0);
d5.vel.y = random(5, 8);

  e21 = new enemies.Sprite(2300,300, 20);
  eh21 = new enemyHealthBar.Sprite(2300, 275, 50, 5, "n");
  e22 = new enemies.Sprite(2700,250, 20);
  eh22 = new enemyHealthBar.Sprite(2700, 235, 50, 5, "n");
   invis06 = new invisibles.Sprite(clearImg, 2200, 200);

  
  d6 = new debris.Sprite(w1, 1200, 0);
  d6.vel.y = random(5, 8);
  d7 = new debris.Sprite(w2, 1200, 0);
  d7.vel.y = random(5, 8);
  d8 = new debris.Sprite(w3, 1200, 0);  
  d8.vel.y = random(5, 8);
  d9 = new debris.Sprite(w4, 1200, 0);
  d9.vel.y = random(5, 8);
  d10 = new debris.Sprite(w5, 1200, 0);
  d10.vel.y = random(5, 8);

  d16 = new debris.Sprite(w1, 1200, 0);
  d16.vel.y = random(5, 8);
  d17 = new debris.Sprite(w2, 1200, 0);
  d17.vel.y = random(5, 8);
  d18 = new debris.Sprite(w3, 1200, 0);  
  d18.vel.y = random(5, 8);
  d19 = new debris.Sprite(w4, 1200, 0);
  d19.vel.y = random(5, 8);
  d20 = new debris.Sprite(w5, 1200, 0);
  d20.vel.y = random(5, 8);

   d11 = new debris.Sprite(w1,5100, 0); 
    d11.vel.y = random(5, 8);
    d12 = new debris.Sprite(w2,5100, 0);
    d12.vel.y = random(5, 8);
    d13 = new debris.Sprite(w3, 5100, 0);
   d13.vel.y = random(5, 8);
    d14 = new debris.Sprite(w4, 5100, 0);
   d14.vel.y = random(5, 8);
    d15 = new debris.Sprite(w5, 5100, 0);
  d15.vel.y = random(5, 8);


  r1 = new rocks.Sprite(rockOneImg, 2100, 50, "n");
  r1.mirror.y = true; 
  r1.scale = 0.5; 
   r2 = new rocks.Sprite(rockOneImg, 2400, 70, "n");
  r2.mirror.y = true; 
  r2.scale = 0.75; 

   r3 = new rocks.Sprite(rockOneImg, 2600, 70, "n");
  r3.mirror.y = true; 
  r4 = new rocks.Sprite(rockOneImg, 2900, 70, "n");
  r4.mirror.y = true; 
 
  r5 = new rocks.Sprite(rockOneImg, 4300, 40, "n");
  r5.mirror.y = true; 
  r5.scale = 0.5; 
   r6 = new rocks.Sprite(rockOneImg, 4500, 70, "n");
  r6.mirror.y = true; 
  

   r8 = new rocks.Sprite(rockOneImg, 4700, 70, "n");
  r8.mirror.y = true; 
  r9 = new rocks.Sprite(rockOneImg, 5000, 70, "n");
  r9.mirror.y = true; 

  
  rock1 = new  boundaries.Sprite (blockImg4, 950, 470, "s");
  rock12 = new  boundaries.Sprite (blockImg4, 950, 395, "s");
  rock13 = new  boundaries.Sprite(blockImg4, 950, 320, "s");
  rock14 = new  boundaries.Sprite(blockImg4, 950, 245, "s");
  rock2 = new  boundaries.Sprite (blockImg4, 950, 20, "s");


  rock3 = new  boundaries.Sprite (blockImg4, 2000, 20, "s");
  rock32 = new  boundaries.Sprite (blockImg4, 2000, 95, "s");
  rock33 = new  boundaries.Sprite (blockImg4, 2000, 170, "s");
  rock34 = new  boundaries.Sprite (blockImg4, 2000, 395, "s");
  rock4 = new  boundaries.Sprite (blockImg4, 2000, 470, "s");


  rock16 = new  boundaries.Sprite(rockBoundary, 3000, 70, "s"); 
  rock16.scale = 0.5; 
  rock16.mirror.y = true; 

  rock17 = new  boundaries.Sprite(rockBoundary, 4200, 400, "s");
  rock17.scale = 0.5; 



}//end LVL 4=================================================================

function playLvl5(){ //UNDERWATER VOLCANO 
  mC5 = false; 
  screen = 70; 
  sC5 = false; 
  sC6 = false; 
  
  camera.x = player.x + 102;
 // opening2.setVolume(1);
//   dramatic2SND.setVolume(1);
  veC1 = false;
  veC2 = false; 
  veC3 = false; 
  healthFront.y = 20;
  healthBar.y = 20; 
  if(musicCheck % 2 == 0){
    
     opening21.setVolume(1);
   
      dramaticSND.setVolume(1);
  
      dramatic2SND.setVolume(1); 
 

  }
  totHealth = 100;
  healthBar.w = 200; 
  player.y = 350;
    player.x = 20;
 // deathCount = 0; 
  canMenu = true; 
  eMove2 = false; 
  eMove3 =false; 
  eMove4 = false; 
  eMove5 = false; 
  eMove6 = false; 
  opening.stop(); 
   canMove = true; 
  if(!g3) 
  {
    g3 = new Sprite(glowImg, player.x, player.y, "n"); 
  g3.layer = light.layer;
    g3.y = -200; 
  }


  playerSetUp();
  shine(); 
  dash();
  hide(); 

ground.image = groundImg5; 
  ground.friction = 0;
  ground.x = camera.x;

  //radio stuff===================================
  i2 = false;
  radio5 = new lamps.Sprite(lampImg, 300, 328);
  invis7 = new invisibles.Sprite(clearImg, 300, 200);
  txt8 = new textBubbles.Sprite(textBubbleImg, 450, -2000, "n");
  
  if (!lvl5End) {  // Check if lvl1End has not been created
    lvl5End = new Sprite(endGoalImg, -9250, 300, "k");
    lvl5End.color = "black";
     g1 = new Sprite(glow2Img, lvl5End.x, lvl5End.y, "n");
    g1.layer = lvl5End.layer - 1; 
    //lvl5End.image = endGoalImg;
  }
  lvl5End.y = 300;
  g1.y = lvl5End.y; 
  g1.image = glow2Img; 

 radio6 = new lamps.Sprite(lampImg, 2300, 328);
  invis6 = new invisibles.Sprite(clearImg, 2300, 200);
  //

  volcanoFish = new Sprite(volcanoFishAni, 1700, 300, "n");
  volcanoFish.layer = 1000; 
  vBar =  new enemyHealthBar.Sprite(2700, -235, 50, 5, "n");
 // volcanoFish.vel.x = -2.7; 
  vr1 = new  boundaries.Sprite (blockImg5, -600, 470, "s");
  vr2 = new  boundaries.Sprite (blockImg5, -600, 395, "s");
  vr3 = new  boundaries.Sprite(blockImg5, -600, 320, "s");
  vr4 = new  boundaries.Sprite(blockImg5, -600, 245, "s");
  vr5  = new  boundaries.Sprite (blockImg5, -600, 20, "s");

  vr6 = new  boundaries.Sprite (blockImg5, -2600, 20, "s");
  vr7 = new  boundaries.Sprite (blockImg5, -2600, 95, "s");
  vr8 = new  boundaries.Sprite(blockImg5, -2600, 170, "s");
  vr9 = new  boundaries.Sprite(blockImg5, -2600, 395, "s");
  vr10  = new  boundaries.Sprite (blockImg5, -2600, 470, "s");

  


    f1 = new debris.Sprite(v1,-700, 0); 
    f1.vel.y = random(5, 8);
    f2 = new debris.Sprite(v2, -700, 0);
    f2.vel.y = random(5, 8);
    f3 = new debris.Sprite(v3, -700, 0);
   f3.vel.y = random(5, 8);
    f4 = new debris.Sprite(v4, -800, 0);
   f4.vel.y = random(5, 8);
    f5 = new debris.Sprite(v5, -1200, 0);
  f5.vel.y = random(5, 8);
  
  f6 = new debris.Sprite(v5, -1600, 0);
  f6.vel.y = random(5, 8);


  f7 = new debris.Sprite(v5, -2000, 0);
  f7.vel.y = random(5, 8);

  f8 = new debris.Sprite(v5, -2400, 0);
  f8.vel.y = random(5, 8);


  


 

  o01 = new oils.Sprite(-850, 120, 110);
  o01.scale = 0.5; 
  
  o02 = new oils.Sprite(-900, 50, 110);
  o02.scale = 0.9; 

  o03 = new oils.Sprite(-1900, 250, 110);
  o03.scale = 1.1; 

  o04 = new oils.Sprite(-1100, 400, 110);
  o04.scale = 1.3; 

  o05 = new oils.Sprite(-1400, 200, 110);
  o05.scale = 1.2; 

  o06 = new oils.Sprite(-1350, 450, 110);
  o06.scale = 0.5; 

  o07 = new oils.Sprite(-1550, 350, 110);
  o07.scale = 0.75; 

  o08 = new oils.Sprite(-1850, 30, 110);
  o08.scale = 1.75; 

  o09 = new oils.Sprite(-1670, 370, 110);
  o09.scale = 0.6; 

  o10 = new oils.Sprite(-2050, 430, 110);
  o10.scale = 0.75; 

  o11 = new oils.Sprite(-2450, 130, 110);
  o11.scale = 1.2;

  o12 = new oils.Sprite(-2350, 430, 110);
  o12.scale = 0.6;

  


  r1 = new rocks.Sprite(rockOneImg, -2800, 50, "n");
  r1.mirror.y = true; 
  r1.scale = 0.5; 
   r2 = new rocks.Sprite(rockOneImg, -3000, 70, "n");
  r2.mirror.y = true; 
  r2.scale = 0.75; 

   r3 = new rocks.Sprite(rockOneImg, -3300, 70, "n");
  r3.mirror.y = true; 
  r4 = new rocks.Sprite(rockOneImg, -3600, 70, "n");
  r4.mirror.y = true; 
  r5 = new rocks.Sprite(rockOneImg, -3900, 70, "n");
  r5.mirror.y = true; 
  r5.scale = 1.3; 
  r6 = new rocks.Sprite(rockOneImg, -4100, 70, "n");
  r6.mirror.y = true; 

  e20 = new enemies.Sprite(-2860, 150, 20);
  eh20 = new enemyHealthBar.Sprite(-2860, 125, 50, 5, "n");

  e21 = new enemies.Sprite(-3060, 350, 20);
  eh21 = new enemyHealthBar.Sprite(-3060, 325, 50, 5, "n");

  e22 = new enemies.Sprite(-3300, 250, 20);
  eh22 = new enemyHealthBar.Sprite(-3300, 225, 50, 5, "n");

  e23 = new enemies.Sprite(-3560, 120, 20);
  eh23 = new enemyHealthBar.Sprite(-3560, 95, 50, 5, "n");

  e24 = new enemies.Sprite(-3960, 470, 20);
  eh24 = new enemyHealthBar.Sprite(-3960, 445, 50, 5, "n");

 

  invis07 = new invisibles.Sprite(clearImg, -2850, 200);
   radio8 = new lamps.Sprite(lampImg, -8000, 328);
  invis08 = new invisibles.Sprite(clearImg, -8000,200); 

  vr11 = new  boundaries.Sprite (blockImg5, -4300, 20, "s");
  vr12 = new  boundaries.Sprite (blockImg5, -4300, 95, "s");
  vr13 = new  boundaries.Sprite(blockImg5, -4300, 170, "s");
  vr14 = new  boundaries.Sprite(blockImg5, -4300, 395, "s");
  vr15  = new  boundaries.Sprite (blockImg5, -4300, 470, "s");

  vr16 = new  boundaries.Sprite (blockImg5, -5750, 20, "s");
  vr17 = new  boundaries.Sprite (blockImg5, -5750, 95, "s");
  vr18 = new  boundaries.Sprite(blockImg5, -5750, 170, "s");
  vr19 = new  boundaries.Sprite(blockImg5, -5750, 395, "s");
  vr20  = new  boundaries.Sprite (blockImg5, -5750, 470, "s");

  darkness = new Sprite(-5025 ,250,1500,1000, "n"); 
  darkness.color = color(16,14,54);
  darkness.layer = 1; 

 
  Lcounter = 1; 

  plat1 = new platforms.Sprite(-4650, 150, 48, 350);
  plat2 = new platforms.Sprite(-5100, 175, 195, 40);
  plat3 = new platforms.Sprite(-4525, 100, 298, 40);
  plat4 = new platforms.Sprite(-4900, 500, 48, 450);
  plat5 = new platforms.Sprite(-5100, 300, 48, 150); 
  plat6 = new platforms.Sprite(-5400, 350, 198, 40); 
  plat7 = new platforms.Sprite(-5400, 50, 48, 400); 
 

  h1 = new hiders.Sprite(-4650, 470,20);
  h2 = new hiders.Sprite(-4875, 140,20);
  h3 = new hiders.Sprite(-5200, 40,20);

 r7 = new rocks.Sprite(rockThreeImg, -5900, 470, "n");
 r8 = new rocks.Sprite(rockTwoImg, -6600, 470, "n");
 r9 = new rocks.Sprite(rockOneImg, -6900, 470, "n");
  r10 = new rocks.Sprite(rockThreeImg, -7300, 470, "n");


    f11 = new debris.Sprite(v1,-6700, 0); 
    f11.vel.y = random(5, 8);
    f12 = new debris.Sprite(v2, -6700, 0);
    f12.vel.y = random(5, 8);
    f13 = new debris.Sprite(v3, -6700, 0);
   f13.vel.y = random(5, 8);
    f14 = new debris.Sprite(v4, -6800, 0);
   f14.vel.y = random(5, 8);
    f15 = new debris.Sprite(v5, -6200, 0);
  f15.vel.y = random(5, 8);

   vr114 = new  boundaries.Sprite (blockImg5, -7750, 245, "s");
   vr115 = new  boundaries.Sprite (blockImg5, -7750, 320, "s");
  vr116 = new  boundaries.Sprite (blockImg5, -7750, 20, "s");
  vr117 = new  boundaries.Sprite (blockImg5, -7750, 95, "s");
  vr118 = new  boundaries.Sprite(blockImg5, -7750, 170, "s");
  vr119 = new  boundaries.Sprite(blockImg5, -7750, 395, "s");
  vr210  = new  boundaries.Sprite (blockImg5, -7750, 470, "s");

  invis1 = new invisibles.Sprite(clearImg, -6550, 470); 
   radio06 = new lamps.Sprite(lampImg, -6550, 328);

  end1 = new Sprite(rockBoundary, -8500, 50, "s");
  end1.layer = volcanoFish.layer + 1; 
  end1.mirror.y = true; 
  end1.scale = 0.35; 

  end12 = new Sprite(rockBoundary, -8600, 50, "s");
  end12.layer = volcanoFish.layer + 1; 
  end12.mirror.y = true; 
  end12.scale = 0.35; 
  end12.mirror.x = true; 

  end13 = new Sprite(rockBoundary, -8700, 50, "s");
  end13.layer = volcanoFish.layer + 1; 
  end13.mirror.y = true; 
  end13.scale = 0.55; 

  end14 = new Sprite(rockBoundary, -8800, 50, "s");
  end14.layer = volcanoFish.layer + 1; 
  end14.mirror.y = true; 
  end14.scale = 0.35; 
   end14.mirror.x = true; 
  
  end15 = new Sprite(rockBoundary, -8900, 50, "s");
  end15.layer = volcanoFish.layer + 1; 
  end15.mirror.y = true; 
  end15.scale = 0.35; 
  
  end16 = new Sprite(rockBoundary, -9000, 50, "s");
  end16.layer = volcanoFish.layer + 1; 
  end16.mirror.y = true; 
  end16.scale = 0.45; 

  end17 = new Sprite(rockBoundary, -9100, 50, "s");
  end17.layer = volcanoFish.layer + 1; 
  end17.mirror.y = true; 
  end17.scale = 0.55; 
   end17.mirror.x = true; 
  
  end18 = new Sprite(rockBoundary, -9200, 50, "s");
  end18.layer = volcanoFish.layer + 1; 
  end18.mirror.y = true; 
  end18.scale = 0.35; 
   end18.mirror.x = true; 

  end19 = new Sprite(rockBoundary, -9300, 50, "s");
  end19.layer = volcanoFish.layer + 1; 
  end19.mirror.y = true; 
  end19.scale = 0.55; 

  end20 = new Sprite(rockBoundary, -9400, 50, "s");
  end20.layer = volcanoFish.layer + 1; 
  end20.mirror.y = true; 
  end20.scale = 0.65; 


  

  end2 = new Sprite(rockBoundary, -8500, 470, "s");
  end2.layer = volcanoFish.layer + 1; 
   end2.scale = 0.35;

  end22 = new Sprite(rockBoundary, -8600, 450, "s");
  end22.layer = volcanoFish.layer + 1; 
   end22.scale = 0.45; 
  end22.mirror.x = true; 

  end23 = new Sprite(rockBoundary, -8700, 450, "s");
  end23.layer = volcanoFish.layer + 1; 
   end23.scale = 0.35; 

  end24 = new Sprite(rockBoundary, -8800, 470, "s");
  end24.layer = volcanoFish.layer + 1; 
   end24.scale = 0.35;
   end24.mirror.x = true; 

  end25 = new Sprite(rockBoundary, -8900, 470, "s");
  end25.layer = volcanoFish.layer + 1; 
   end25.scale = 0.55;

  end26 = new Sprite(rockBoundary, -9000, 470, "s");
  end26.layer = volcanoFish.layer + 1; 
   end26.scale = 0.45;
   end26.mirror.x = true; 

  end27 = new Sprite(rockBoundary, -9100, 470, "s");
  end27.layer = volcanoFish.layer + 1; 
   end27.scale = 0.45;
   end27.mirror.x = true; 

  end28 = new Sprite(rockBoundary, -9200, 470, "s");
  end28.layer = volcanoFish.layer + 1; 
   end28.scale = 0.55;

  end29 = new Sprite(rockBoundary, -9300, 470, "s");
  end29.layer = volcanoFish.layer + 1; 
   end29.scale = 0.45;

  end30 = new Sprite(rockBoundary, -9400, 470, "s");
  end30.layer = volcanoFish.layer + 1; 
   end30.scale = 0.65;
   end30.mirror.x = true; 

  stopper = new boundaries.Sprite(clearImg, -30, 250, "s");
  stopper.w = 1;
  stopper.h = windowHeight; 
 

  //BOO. 
  
}//end LVL 5=================================================================


// Store intilization
function storeOpen()
{
  cafeMusic(); 
 
 /* if(!storeBack)
    {
        storeBack = new Sprite(storeBackImg, camera.x, height/2, "n");
        storeBack.layer = 1;
   }
  
   if(!storeFront)
   {
      storeFront = new Sprite(storeFrontImg, camera.x, height/2, "n");
     storeFront.layer = 90000;
  }
  storeFront.x = camera.x;
  storeFront.y = height/2;
  storeBack.layer = 1;
  storeFront.layer = 90000;
  storeBack.x = camera.x;
  storeBack.y = height/2;
  */ 
  //if(!uno) 
    //{ 
      uno = new rocks.Sprite(blockImg1, camera.x-550, 100); 
      uno.scale = 2.5;
      uno.layer = 40;
  //  }
   // if(!dos) 
   // {
      dos= new rocks.Sprite(blockImg1, camera.x-550, 300); 
      dos.scale = 2.5; 
      dos.layer = 40;
  //  }
    // if(!tres) 
    // {
     tres= new rocks.Sprite(blockImg1, camera.x-550, 500); 
    tres.scale = 2.5; 
       tres.layer = 40;
     //}
   // if(!uno1) 
   // {
      uno1 = new rocks.Sprite(blockImg1, camera.x+560, 100); 
      uno1.scale = 2.5;
      uno1.layer = 40;
   // }
    // if(!dos2)
    // {
       dos2= new rocks.Sprite(blockImg1, camera.x+570, 300); 
      dos2.scale = 2.5; 
       dos2.layer = 40;
     //}
   // if(!tres3) 
   // {
      tres3= new rocks.Sprite(blockImg1, camera.x+575, 500); 
    tres3.scale = 2.5;
      tres3.layer = 40;
   // }
   // if(!cuatro)
    //{
      cuatro = new corals.Sprite(coralImg, camera.x-450, 500);
      cuatro.scale = 2; 
      cuatro.layer = 40;
    //}
    //if(!cinco)
    //{
      cinco = new corals.Sprite(coralImg, camera.x+500, 500); 
      cinco.scale = 2; 
      cinco.layer = 40;
   // }  
  
   background(197,198,215); 

  }

//Mermaid functions ===========================
function mermaid1a()// CAL
{

  cafeMusic();
  if(!storeBack2){
  storeBack2 = new stores.Sprite(storeBackImg, camera.x, -1000, "n");
   storeBack2.layer = 10;
  }
  storeBack2.y = height/2 
if(!storeFront2){
  storeFront2 = new stores.Sprite(storeFrontImg, camera.x,-1000, "n");
   storeFront2.layer = 30;
    storeFront2.text = " ";
}
  storeFront2.y = height/2; 
  
 // storeBack2.y = height/2;
//  storeFront2.y = height/2;
  
/*  if(!storeBack)
    {
        storeBack = new Sprite(storeBackImg, camera.x, height/2, "n");
   }
  storeBack.x = camera.x;
  storeBack.y = height/2;
   if(!storeFront)
   {
      storeFront = new Sprite(storeFrontImg, camera.x, height/2, "n");
  }
  storeFront.x = camera.x;
  storeFront.y = height/2;
  storeBack.layer = 10;
  storeFront.layer = 30;
  */
 if(!kelpMermaid){
    kelpMermaid = new Sprite(MerCal1Img, camera.x, -2000, "n");
    kelpMermaid.layer = storeBack2.layer + 1;
 } 
  kelpMermaid.y = height/2 + 50; 
 
  
 if(!nextText){
   nextText = new nexts.Sprite(camera.x+280,450,150,25,"k");
   nextText.text = "NEXT";
   nextText.textColor = "white";
   nextText.color = color(27, 95, 122);
   nextText.textSize = 15;
   textFont('Courier New');
 }
  nextText.y= 450; 
 

    txt = new textBubbles.Sprite(textBubbleImg, camera.x +200, 300, "n"); 
      txt.text = "You're here to save me?\nI've been trapped in my\nshop for so long. I'm\nsurprised you made it\n no offense. You're just\nso... small.";
      txt.textSize = 15;
    txt.layer = 35;
  ground.image = clearImg; 
}

function mermaid1b()// cal2
{
 


   if(!kelpMermaid1){
      kelpMermaid1 = new Sprite(MerCal2Img, camera.x, -2000, "n");
      kelpMermaid1.layer = storeBack2.layer + 1;
   } else{

     kelpMermaid.image = MerCal2Img; 
     
   }
  kelpMermaid1.y = height/2 + 40; 

  if(!nextText1){
     nextText1 = new Sprite(camera.x+280,450,150,25,"s");
      nextText1.text = "NEXT";
     nextText1.textColor = "white";
      nextText1.color = color(27, 95, 122);
      nextText1.textSize = 15;
      textFont('Courier New');
  }
  nextText1.y = 450; 
   
  
 txt2 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n");
   txt2.text = "You're a MECHANICAL\nfish? Huh. In that case,\nhere’s an upgrade! We're\nin my shop, after all.\nAnd where you're going\nyou'll need to be a\nlittle less conspicuous.\n No offense.";
   txt2.textSize = 14.5;
  txt2.layer = 35;
}


function mermaid2a() // sydeny
{
//screen = 26; 
  cafeMusic(); 

  if(!storeBack3)  {
     storeBack3 = new stores.Sprite(storeBackImg, camera.x, height/2, "n");
     storeBack3.layer = 10;
   }
  storeBack3.y = height/2;


  if(!storeFront3)  {
     storeFront3 = new stores.Sprite(storeFrontImg, camera.x, height/2, "n");
     storeFront3.layer = 30;
   }
  storeFront3.y = height/2;

  if(!coralMermaid){
    coralMermaid = new stores.Sprite(MerSyd1Img, camera.x, height/2 + 50, "n");
    coralMermaid.layer = 200;
    coralMermaid.layer = storeBack3.layer + 1;
  }
  coralMermaid.y = height/2 + 50;

  
  if(!nextText2)
   {
     nextText2 = new Sprite(camera.x+280,450,150,25,"s");
      nextText2.text = "NEXT";
     nextText2.textColor = "white";
      nextText2.color = color(27, 95, 122);
      nextText2.textSize = 15;
      textFont('Courier New');
   }
  nextText2.y = 450; 
  txt33 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n");
txt33.text = "Fish. Hello. Hi.You came\nfrom the Reef? How did\nyou get past the\nsentient nets? I almost\ndied. Twice.";
  txt33.textSize = 15;
  txt33.layer = 35;

//  storeBack.x = camera.x;
//storeFront.x = camera.x;
  

 // storeBack.layer = 10;
 // storeFront.layer = 30;
  
 ground.image = clearImg; 
}

function mermaid2b() // sydeny2
{


  if(!coralMermaid){
       coralMermaid = new Sprite(MerSyd2Img, camera.x,  height/2 + 50, "n");
   //  coralMermaid.layer = storeBack2.layer + 1;
  } else{

      coralMermaid.image = MerSyd2Img; 
  }
  coralMermaid.y = height/2 + 50;
  

    if(!nextText3)
     {
       nextText3 = new Sprite(camera.x+280,450,150,25,"s");
        nextText3.text = "NEXT";
       nextText3.textColor = "white";
        nextText3.color = color(27, 95, 122);
        nextText3.textSize = 15;
        textFont('Courier New');
       
     }
  nextText3.y = 450; 
  
    txt22 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
    txt22.text = "A robot. They sent a\nrobot. To save the ocean.\nHm...hm. Okay. I can\nwork with this. I have a\n spare flashlight with\nfull charge. You'll need\n it. Bye. Don't die.";
    txt22.textSize = 15;
  txt22.layer = 35;
  
}
function mermaid3a() // Natalia
{ 
  cafeMusic(); 


  if(!storeBack4) 
  {
     storeBack4 = new stores.Sprite(storeBackImg, camera.x, height/2, "n");
     storeBack4.layer = 1;
   }
  if(!storeFront4)  {
     storeFront4 = new stores.Sprite(storeFrontImg, camera.x, height/2, "n");
     storeFront4.layer = 2000;
   }
  storeFront4.y = height/2;
  storeBack4.y = height/2; 
  /*
  if(!storeBack)
    {
        storeBack = new Sprite(storeBackImg, camera.x, height/2, "n");
   }
  storeBack.x = camera.x;
  storeBack.y = height/2;
   if(!storeFront)
   {
      storeFront = new Sprite(storeFrontImg, camera.x, height/2, "n");
  }
  storeFront.x = camera.x;
  storeFront.y = height/2;
  storeBack.layer = 10;
  storeFront.layer = 30;
  */
  if(!shipMermaid)
  {
    shipMermaid = new Sprite(MerNat1Img,camera.x, height/2 +50, "n");
   shipMermaid.layer = 20;
  } 
  shipMermaid.layer = 20;
  shipMermaid.x = camera.x;
  shipMermaid.y = height/2 + 50;
  if(!nextText4)
   {
     nextText4 = new Sprite(camera.x+280,450,150,25,"s");
      nextText4.text = "NEXT";
     nextText4.textColor = "white";
      nextText4.color = color(27, 95, 122);
      nextText4.textSize = 15;
      textFont('Courier New');

   }
  nextText4.y = 450; 
  

txt69 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
  txt69.text ="Har, har- FISH?! Through\nthe darkness? You sure\nbe nifty, little robot\nshrimp. Craftsmanship!\nNothin'\nlike ‘em 'uman\nships that there litter\nme realm.";
  txt69.textSize = 15;
  txt69.layer = 35;
  //storeBack.x = camera.x;
 // storeFront.x = camera.x;

 ground.image = clearImg; 
}

function mermaid3b()
{
   
   if(!shipMermaid)
     {
       shipMermaid = new Sprite(MerNat2Img,camera.x, height/2 +50, "n");
      shipMermaid.layer = 20;
     } else{
     shipMermaid.image = MerNat2Img;
     }

  shipMermaid.y = height/2 + 50;
  if(!nextText5)
   {
     nextText5 = new Sprite(camera.x+280,450,150,25,"s");
      nextText5.text = "NEXT";
     nextText5.textColor = "white";
      nextText5.color = color(27, 95, 122);
      nextText5.textSize = 15;
      textFont('Courier New');
    
   }
  nextText5.y = 450;
       txt420 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
       txt420.text ="Yer nigh-perfect. But\nmissing somthin'...\nSpeed! I'll fix ya up.\nDon't let yer guard down\nlike that other fish!\nShame what happened to\n'im. Well! Off ye go!";
       txt420.textSize = 15;
  txt420.layer = 35;
   
}

function mermaid4a() // Hasset
{

  cafeMusic(); 
  if(!storeBack5)  {
     storeBack5 = new stores.Sprite(storeBackImg, camera.x, height/2, "n");
     storeBack5.layer = 10;
   }

   if(!storeFront5)
   {
      storeFront5 = new stores.Sprite(storeFrontImg, camera.x, height/2, "n");
  }
  storeFront5.x = camera.x;
  storeFront5.y = height/2;
   storeBack5.y = height/2;
  storeBack5.layer = 10;
  storeFront5.layer = 30;
  storeBack5.x = camera.x;
  storeFront5.x = camera.x;
  
if(!whaleMermaid)
  {
    whaleMermaid = new Sprite(MerHgtv1Img,camera.x, height/2 +50, "n");
   whaleMermaid.layer = 20;
  } 
  whaleMermaid.y = height/2 + 50;
  if(!nextText6)
   {
     nextText6 = new Sprite(camera.x+280,450,150,25,"s");
      nextText6.text = "NEXT";
     nextText6.textColor = "white";
      nextText6.color = color(27, 95, 122);
      nextText6.textSize = 15;
      textFont('Courier New');
     
   }
  nextText6.y = 450; 
txt777 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
  txt777.text ="Yo… A Robot fish. A\nRobo-fish. A Rish. I got\nrescued by a Rish! This\nis the best thing that's\nhappened to me. And I've\nwon the lottery!";
  txt777.textSize = 15;
  txt777.layer = 35;
 ground.image = clearImg;
}
function mermaid4b()
{
  
  if(!whaleMermaid)
     {
      whaleMermaid = new Sprite(MerHgtv2Img,camera.x, height/2 +50, "n");
      whaleMermaid.layer = 20;
     } else{
     whaleMermaid.image = MerHgtv2Img;
     }

   whaleMermaid.y = height/2 + 50;
  if(!nextText7)
   {
     nextText7 = new Sprite(camera.x+280,450,150,25,"s");
      nextText7.text = "NEXT";
     nextText7.textColor = "white";
      nextText7.color = color(27, 95, 122);
      nextText7.textSize = 15;
      textFont('Courier New');
     
   }
  nextText7.y = 450; 
       txt778 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
       txt778.text ="You're so close, Rish.\nBut where you're going,\nI can't help you. But I\nsee you've gotten some\nupgrades. I'm sure those\nwill help. Probably.";
       txt778.textSize = 15;
  txt778.layer = 35;
  
}
function mermaid5a() // Abi
{

  cafeMusic(); 
  if(!storeBack6)  {
     storeBack6 = new stores.Sprite(storeBackImg, camera.x, height/2, "n");
     storeBack6.layer = 10;
   }

  if(!storeFront6)  {
     storeFront6 = new stores.Sprite(storeFrontImg, camera.x, height/2, "n");
     storeFront6.layer = 10;
   }
  storeFront6.x = camera.x;
  storeFront6.y = height/2;
  storeBack6.layer = 10;
  storeFront6.layer = 30;
  storeBack6.y = height/2;
  storeFront6.x = camera.x;
  

  
  if(!volcanoMermaid)
    {
      volcanoMermaid = new Sprite(MerAbi1Img,camera.x, height/2 +50, "n");
     volcanoMermaid.layer = 20;
    } 
  volcanoMermaid.y = height/2 + 50;
  
  if (!nextText9)
  {
    nextText9 = new Sprite(camera.x+280,450,150,25,"s");
     nextText9.text = "NEXT";
    nextText9.textColor = "white";
     nextText9.color = color(27, 95, 122);
     nextText9.textSize = 15;
     textFont('Courier New');
  }
  nextText9.y = 450; 
  txt99 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
    txt99.text ="You did it! You defeated\nthe volcano fish that\nplagued these lands!"; 
    txt99.textSize = 15;
    txt99.layer = 35;
   ground.image = clearImg;
}
function mermaid5b()
{
  
  if(!volcanoMermaid)
     {
      volcanoMermaid = new Sprite(MerAbi2Img,camera.x, height/2 + 130, "n");
      volcanoMermaid.layer = 20;
     } else{
     volcanoMermaid.image = MerAbi2Img;
     }
  volcanoMermaid.y = height/2 + 70;

  if(!nextText10)
   {
     nextText10 = new Sprite(camera.x+280,450,150,25,"s");
      nextText10.text = "NEXT";
     nextText10.textColor = "white";
      nextText10.color = color(27, 95, 122);
      nextText10.textSize = 15;
      textFont('Courier New');
   }
  nextText10.y = 450; 
       txt999 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
       txt999.text ="We'd all like to thank\nyou for your help!";
       txt999.textSize = 15;
  txt999.layer = 35;
  
}

//ALL NETS FUNCTION ===========================================
async function net2()
{
      await n2.moveTo(2499, 150);
      n2.vel.y = 0; 
      n2.vel.x = -7; 
  if (n2.x < 2500) 
    {
        n2.vel.x = 6;
        n2.image = netImg1;
      } else if (n2.x > 3100)
    {
        n2.vel.x = -6;
      }
}


async function net4()
{
  await n4.moveTo(3699, 150);
      n4.vel.y = 0; 
      n4.vel.x = -7; 
  if (n4.x < 3700) 
    {
        n4.vel.x = 3.5;
        n4.image = netImg1;
      } else if (n2.x > 4400)
    {
        n4.vel.x = -3.5;
      }
}
//ALL HIDERS FUNCTION===========================================
async function hider1(){

 
 
}

async function music1(){
 if(!opening.isPlaying()){
   opening.play(); 
 }
 
  
}

async function cafeMusic(){
if(!SND1.isPlaying()){
  SND1.play();
}
  
}

async function tutMusic(){
  if(!opening2.isPlaying()){
    opening2.play(); 
  }
 
}

async function endMusic(){
  if(!opening21.isPlaying()){
    opening21.play(); 
  }

}

async function lvl1Music(){
  if(!shopSND.isPlaying()){
    shopSND.play(); 
  }
  
}

async function lvl2Music(){
  if(!lvl2SND.isPlaying()){
    lvl2SND.play(); 
  }
}

async function lvl3Music(){
  if(!lvl3SND.isPlaying()){
    lvl3SND.play();
  }
}

async function lvl4Music(){
  if(!windySND.isPlaying()){
    windySND.play();
  }
  
}

async function lvl5Music(){
  if(!dramaticSND.isPlaying()){
    dramaticSND.play(); 
  }
  
}

async function lvl5Music2(){
  if(!dramatic2SND.isPlaying()){
    dramatic2SND.play(); 
  }

}

async function flutterMusic(){
    if(!flutterSND.isPlaying()){
      flutterSND.play();
    }
}
async function deepMusic(){
    if(!deepSND.isPlaying()){
      deepSND.play();
    }
}

async function SRSMusic(){
    if(!opening3.isPlaying()){
      opening3.play();
    }
}

async function radioStatic(){
    if(!radioSND.isPlaying()){
      radioSND.play();
    }
}

function theEND(){

  if(!restart){
    restart = new Sprite(camera.x, height/2, 150, 25, "k"); 
    restart.color = color(27, 95, 122);
    restart.textColor = "white";
    restart.textSize = 15;
    restart.text = "RESTART?";
    textFont('Courier New');
  }

  endo = new Sprite(endslide, camera.x, height/2, "n"); 
 /* if(!volcanoMermaid3)
   {
    volcanoMermaid3 = new Sprite(MerAbi2Img, camera.x, height/2 +130 , "n");
    volcanoMermaid3.layer = 20;
   } 
  volcanoMermaid3.y = height/2 + 130;
  volcanoMermaid3.x = camera.x;

  if(!whaleMermaid2)
   {
    whaleMermaid2 = new Sprite(MerHgtv2Img,camera.x - +450, height/2 + 70, "n");
    whaleMermaid2.layer = 20;
   } 

  if(!shipMermaid2)
   {
     shipMermaid2 = new Sprite(MerNat2Img,camera.x + 250, height/2 +100, "n");
    shipMermaid2.layer = 20;
   } 
  if(!coralMermaid2)
  {
    coralMermaid2 = new Sprite(MerSyd1Img,camera.x -250, height/2 + 100, "n");
    coralMermaid2.layer = 20;
  } 

  if (!kelpMermaid2)
  {
    kelpMermaid2 = new Sprite(MerCal2Img, camera.x + 450, (height/2) + 100, "n")
  }
  */
//////////////////////////////////////////////////////////////



  
  
}

function mormon(){
  screen = 2024; 
  background(132, 141, 217); 
  //camera.x = 101010; 

  if(!storeBack)
    {
        storeBack = new Sprite(storeBackImg, camera.x, height/2, "n");
   }
  storeBack.x = camera.x;
  storeBack.y = height/2;
   if(!storeFront)
   {
      storeFront = new Sprite(storeFrontImg, camera.x, height/2, "n");
  }

  if (!nextText9)
  {
    nextText9 = new Sprite(camera.x+280,450,150,25,"s");
     nextText9.text = "NEXT";
    nextText9.textColor = "white";
     nextText9.color = color(27, 95, 122);
     nextText9.textSize = 15;
     textFont('Courier New');
  }
  nextText9.y = 450; 

  if(!(nextText7)){
    {
      nextText7 = new Sprite(camera.x+280,450,150,25,"s");
       nextText7.text = "NEXT";
      nextText7.textColor = "white";
       nextText7.color = color(27, 95, 122);
       nextText7.textSize = 15;
       textFont('Courier New');
    }
    nextText7.y = -2000; 
    
  if(!storeTxt)
  {   
    storeTxt = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n");
  }
storeTxt.textSize = 15;
storeTxt.layer = 35;


  storeFront.x = camera.x;
  storeFront.y = height/2;
  storeBack.layer = 10;
  storeFront.layer = 30;
  storeBack.x = camera.x;
  storeFront.x = camera.x;


}}
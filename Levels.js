function playLvl1(){ //CORAL
screen = 30;
   musicToggle(); 

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
  player.y = 350;
  player.x = 20;
   background(132, 141, 217); 
  opening.stop(); 
  
  
  ground = new Sprite(groundImg1, width / 3, 595, "s"); 
  ground.friction = 0;
  ground.x = camera.x;
  ground.layer = 10; 
  
  
  getPlayer(); 

  if (!lvl1End) {  // Check if lvl1End has not been created
    lvl1End = new Sprite(endGoalImg, 6050, 300, "k");
    lvl1End.color = "black";
    g1 = new Sprite(clearImg, lvl1End.x, lvl1End.y, "n"); 
   // END IS AT 6050
  }
  boundary = new boundaries.Sprite(rockBoundary, -300, 300, "s")
  boundary1 = new boundaries.Sprite(rockBoundary, -600, 300, "s")
  boundary1.mirror.x = true;
  // radio stuff
  i2 = false;
  radio2 = new lamps.Sprite(lampImg, 300, 328);
  invis0 = new invisibles.Sprite(clearImg, 300, 200); 
  invis100 = new invisibles.Sprite(clearImg, 300, 200);


   coralBack = new Sprite(coralBackImg, 200, 480, "n");
 
    
  for(let i = 0; i<31; i++){
   
  
    c = new corals.Sprite(coralImg, random(200, 6050), 470, "n"); 
    if(c.overlapping(corals)){
      c.remove();
    }
    i++; 
  }
  for(let i = 0; i<31; i++){
    c = new corals.Sprite(coralImg, random(200,6050), 470, "n"); 
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
  o5 = new oils.Sprite(1500, 350, 100);
  o6 = new oils.Sprite(1760, 250, 70); 
  o6.scale = 0.7; 
  o7 = new oils.Sprite(1300, 200, 70); 
  o7.scale = 0.7; 
  o8 = new oils.Sprite(1470, 100, 60); 
  o8.scale = 0.6; 
  o9 = new oils.Sprite(1860, 50, 50);
  o9.scale = 0.5; 
  o10 = new oils.Sprite(1960, 350, 90);
  o10.scale = 0.9; 
  
  o11 = new oils.Sprite(2200, 200, 130);
  o11.scale = 1.3; 
  o12 = new oils.Sprite(2300, 100, 60);
  o12.scale = 0.6; 
  o13 = new oils.Sprite(2400, 300, 80);
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
  o35 = new oils.Sprite(4140, 570, 80);
 o35.scale = 0.8; 
  o36 = new oils.Sprite(4150, 70, 120);
   o36.scale = 1.2; 
 // o37 = new oils.Sprite(4350, 130, 100);
  o38 = new oils.Sprite(4400, 200, 60);
   o38.scale = 0.6; 
  o39 = new oils.Sprite(4250, 500, 100);
  o40 = new oils.Sprite(4550, 390, 100);
  
  o41 = new oils.Sprite(4300, 300, 60);
  o41.scale = 0.6; 
  o42 = new oils.Sprite(4200, 200, 80);
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

  e4 = new enemies.Sprite(1500, 350, 20);
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
  e9.x = o35.x; 
  e9.y = o35.y; 

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
  e12.x = o29.x; 
  e12.y = o29.y;
  

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
  e20.x = o18.x; 
  e20.y = o18.y;
e20.scale = 0.9; 

  
 
  invis1 = new invisibles.Sprite(clearImg1, 375, 200); 
  invis1.h = windowHeight;//(x,y) E1 & E2
  invis2 = new invisibles.Sprite(clearImg1, 1050, 200); //(x,y)  E3 
  invis3 = new invisibles.Sprite(clearImg1, 1400, 200); //(x,y)  E4
  invis4 = new invisibles.Sprite(clearImg1, 1800, 200); //(x,y)  E5
  invis5 = new invisibles.Sprite(clearImg1, 2100, 200);
  invis6 = new invisibles.Sprite(clearImg1, 2300, 200);
  invis7 = new invisibles.Sprite(clearImg1, 2600, 200);
  invis8 = new invisibles.Sprite(clearImg1, 2200, 200);
  invis9 = new invisibles.Sprite(clearImg1, 4140, 200);
  invis10 = new invisibles.Sprite(clearImg1, 4550, 200);
  invis11 = new invisibles.Sprite(clearImg1, 2250, 200);
  invis12 = new invisibles.Sprite(clearImg1, 3650, 200);
  invis13 = new invisibles.Sprite(clearImg1, 2450, 200);
  invis14 = new invisibles.Sprite(clearImg1, 3400, 200);
  invis15 = new invisibles.Sprite(clearImg1, 2450, 200);
  invis16 = new invisibles.Sprite(clearImg1, 4200, 200);
  invis17 = new invisibles.Sprite(clearImg1, 3400, 200);
  invis18 = new invisibles.Sprite(clearImg1, 4350, 200);
  invis19 = new invisibles.Sprite(clearImg1, 4250, 200);
  invis20 = new invisibles.Sprite(clearImg1, 2400, 200);
  






  

  platform = new  boundaries.Sprite (blockImg1b, 5070, 370, "s");
  platform1 = new  boundaries.Sprite (blockImg1b, 5070, 125, "s");

  platform2 = new  boundaries.Sprite(blockImg1b, 5420, 100, "s");
  platform2.scale = 0.70;
  platform3 = new  boundaries.Sprite(blockImg1b, 5420, 300, "s");
  platform3.scale = 0.70;
  platform4 = new  boundaries.Sprite(blockImg1b, 5420, 500, "s");
  platform4.scale = 0.70;

}//end LVL 1 ====================================================

function playLvl2(){ //KELP
  screen = 40; 
  totHealth = 100;
  healthBar.w = 200; 
  player.y = 350;
  player.x = 20;
  opening.stop(); 


  ground.image = groundImg2;
  ground.friction = 0;
  ground.x = camera.x;

  playerSetUp();

  if (!lvl2End) // Check if lvl1End has not been created
  {  
    lvl2End = new Sprite(endGoalImg, 7150, 300, "k");
     g1 = new Sprite(glow2Img, lvl2End.x, lvl2End.y, "n"); 
    g1.layer = lvl2End.layer - 1; 

   // lvl2End.image = endGoalImg;

  }
  boundary = new  boundaries.Sprite(rockBoundary, -300, 300, "s")
  boundary1 = new  boundaries.Sprite(rockBoundary, -600, 300, "s")
  boundary1.mirror.x = true;
  // radio stuff ========================= 
    i2 = false;
    radio1 = new lamps.Sprite(lampImg, 300, 328);
    invis3 = new invisibles.Sprite(clearImg, 300, 200);

    n1 = new nets.Sprite(netImg1, 900, -101);//y-value 
    n1.w = 100;
    n1.h = 150; 

  n99 = new nets.Sprite(netImg1, 1000, -101);//y-value 
  n99.w = 100;
  n99.h = 150; 

    n2 = new nets.Sprite(netImg1, 1999, 150);
    n2.w = 100;
    n2.h = 150;  

    n3 = new nets.Sprite(netImg1, 1550, -101);
    n3.w = 100;
    n3.h = 150;

    n4 = new nets.Sprite(netImg1, 3199, 150);
    n4.w = 100;
    n4.h = 150;

    n5 = new nets.Sprite(netImg1, 2900, -101);
  n5.w = 100;
  n5.h = 150;

  n6 = new nets.Sprite(netImg1, 3700, -101);
  n6.w = 100;
  n6.h = 150;
  
  n7 = new nets.Sprite(netImg1, 4400, -101);
  n7.w = 100;
  n7.h = 150;

  n8 = new nets.Sprite(netImg1, 4700, -101);
  n8.w = 100;
  n8.h = 150;

  n9 = new nets.Sprite(netImg1, 4900, -101);
  n9.w = 100;
  n9.h = 150;

  n10 = new nets.Sprite(netImg1, 5300, 100);
  n10.w = 100;
  n10.h = 150;
    
 
  
  kelpBack1 = new Sprite(kelpBackImg, 200,500, "n")
  kelpBack1.layer = 1;
    kelpg1 = new kelps.Sprite(kelpFrontImg, 500, 440);
    kelpg2 = new kelps.Sprite(kelpFrontImg, 800, 440);
    kelpg3 = new kelps.Sprite(kelpFrontImg, 1000, 440);
    //kelpg4 = new kelps.Sprite(kelpFrontImg, 1300, 420);
//kelpg5 = new kelps.Sprite(kelpFrontImg, 1400, 420);
    kelpg6 = new kelps.Sprite(kelpFrontImg, 1500, 440);
   // kelpg7 = new kelps.Sprite(kelpFrontImg,1600, 420);
  //  kelpg8 = new kelps.Sprite(kelpFrontImg, 1800, 420);
  //  kelpg9 = new kelps.Sprite(kelpFrontImg, 2000, 420);
   // kelpg10 = new kelps.Sprite(kelpFrontImg, 2200, 420);
    kelpg11 = new kelps.Sprite(kelpFrontImg, 2600, 440);
    //kelpg12 = new kelps.Sprite(kelpFrontImg, 2700, 420);
   // kelpg13 = new kelps.Sprite(kelpFrontImg, 3300, 440);
 //   kelpg14 = new kelps.Sprite(kelpFrontImg, 3800, 440);
  //  kelpg15 = new kelps.Sprite(kelpFrontImg, 3700, 440);
   // kelpg16 = new kelps.Sprite(kelpFrontImg, 3900, 420);
   // kelpg17 = new kelps.Sprite(kelpFrontImg, 4000, 420);
    
    kelpg18 = new kelps.Sprite(kelpFrontImg, 4300, 440);
  //  kelpg19 = new kelps.Sprite(kelpFrontImg, 5000, 440);
  //  kelpg20 = new kelps.Sprite(kelpFrontImg, 5700, 440);
   kelpg20 = new kelps.Sprite(kelpFrontImg, 6300, 440);
  kelpg21 = new kelps.Sprite(kelpFrontImg, 6500, 440); 
  kelpg21.scale = 1.2; 
  kelpg22 = new kelps.Sprite(kelpFrontImg, 6800, 440);
  kelpg22.scale = 1.1; 
  kelpg23 = new kelps.Sprite(kelpFrontImg, 7000, 440);
  kelpg24 = new kelps.Sprite(kelpFrontImg, 7200, 440);
  kelpg25 = new kelps.Sprite(kelpFrontImg, 7400, 440);
  kelpg25.scale = 1.3; 
   kelpg26 = new kelps.Sprite(kelpFrontImg, 7600, 440);
  kelpg26.scale = 1.5; 
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
    kelp5 = new kelps.Sprite(kelpImg, 2140, 465);   
  //  kelp6 = new kelps.Sprite(kelpImg, 2348, 455);
   // kelp7 = new kelps.Sprite(kelpImg, 2545, 455);
   // kelp8 = new kelps.Sprite(kelpImg, 2956, 455);
   // kelp9 = new kelps.Sprite(kelpImg, 3140, 455);
 //   kelp10 = new kelps.Sprite(kelpImg, 3200, 455);
 //   kelp11 = new kelps.Sprite(kelpImg, 3547, 455);
 //   kelp12 = new kelps.Sprite(kelpImg, 3678, 455);
  //  kelp13 = new kelps.Sprite(kelpImg, 3780, 455);
    //kelp14 = new kelps.Sprite(kelpImg, 4000, 455);
  kelp15 = new kelps.Sprite(kelpImg, 6400, 455);
  kelp16 = new kelps.Sprite(kelpImg, 6500, 455);
 
  
  

  kelp1.mirror.x = true; 
//  kelp4.mirror.x = true; 
  kelp5.mirror.x = true; 
//  kelp7.mirror.x = true; 
///  kelp10.mirror.x = true;
 // kelp14.mirror.x = true;



 rk1 = new rocks.Sprite(rockOneImg, 1000, 485, "n");
  rk1.mirror.x = true; 
 rk2 = new rocks.Sprite(rockThreeImg, 500, 495, "n");
  rk2.scale = 0.5; 
 rk3 = new rocks.Sprite(rockOneImg, 1450, 495, "n");
  rk3.scale = 0.5; 
 rk4 = new rocks.Sprite(rockTwoImg, 1950, 495, "n");
 
  
  rk7 = new rocks.Sprite(rockOneImg, 3100, 495, "n");
  rk7.scale = 0.8;
  rk8 = new rocks.Sprite(rockTwoImg, 3600, 495, "n");
  rk8.scale = 0.8; 
  rk9 = new rocks.Sprite(rockOneImg, 4100, 495, "n")
  rk9.scale = 0.5; 
  rk10 = new rocks.Sprite(rockThreeImg, 6500, 495, "n");
  
  
  rock1 = new  boundaries.Sprite (blockImg2, 1200, 470, "s");
  rock12 = new  boundaries.Sprite (blockImg2, 1200, 395, "s");
  rock13 = new  boundaries.Sprite(blockImg2, 1200, 320, "s");
  rock14 = new  boundaries.Sprite(blockImg2, 1200, 245, "s");
  rock2 = new  boundaries.Sprite (blockImg2, 1200, 20, "s");
  rock3 = new  boundaries.Sprite (blockImg2, 1350, 320, "s");
  rock4 = new  boundaries.Sprite (blockImg2, 1350, 395, "s");
  rock5 = new  boundaries.Sprite (blockImg2, 1350, 470, "s");
//  rock101 = new rocks.Sprite (blockImg2, 1500, 395, "s");
//  rock102 = new rocks.Sprite (blockImg2, 1500, 470, "s");
//   rock103 = new rocks.Sprite (blockImg2, 1750, 470, "s");
  rock15 = new  boundaries.Sprite(blockImg2, 1900, 470, "s"); 
  
  rock16 = new  boundaries.Sprite(blockImg2, 6250, 20, "s");
  rock17 = new  boundaries.Sprite(blockImg2, 6250, 95, "s");
  rock18 = new  boundaries.Sprite(blockImg2, 6250, 170, "s");
  rock19 = new  boundaries.Sprite(blockImg2, 6250, 245, "s");
  rock20= new  boundaries.Sprite(blockImg2, 6250, 320, "s");
   rock21= new  boundaries.Sprite(blockImg2, 6250, 320, "s");

  
  
  
    
  


}///end LVL 2 ====================================================

function playLvl3(){ //SUNKEN SHIP
  screen = 50; 
  totHealth = 100;
  healthBar.w = 200; 
  player.y = 350;
  player.x = 20;
  opening.stop(); 
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
  ground.image = groundImg3; 
  light.y = player.y; 
      
  
  // radio stuff===================================
  

  i2 = false;
  radio3 = new lamps.Sprite(lampImg, 300, 328);
  invis5 = new invisibles.Sprite(clearImg, 300, 200);
  
  if (!lvl3End) {  // Check if lvl1End has not been created
    lvl3End = new Sprite(endGoalImg, 5750, 250, "k");
     g1 = new Sprite(glow2Img, lvl3End.x, lvl3End.y, "n");
    g1.layer = lvl3End.layer - 1; 

  //  lvl3End.image = endGoalImg;

  }
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
  



  /*
  plat100 = new Sprite(1000, 100,3,1000, "n");
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
  h11 = new hiders.Sprite(4500, 250, 20, "k"); // BIG BOAH 
  h12 = new hiders.Sprite(4700, 300,20, "k");
  h13 = new hiders.Sprite(4200, 70, 20, "k"); 
  h14 = new hiders.Sprite(4100, 470, 20, "k"),  
  h15 = new hiders.Sprite(4600, 470, 20, "k");
  h16 = new hiders.Sprite(4800, 50, 20, "k");
  


}// end LVL 3 ==========================================================

function playLvl4(){ //WHALE FALL
  screen = 60; 
  playerSetUp();
  dash(); 
  totHealth = 100;
  healthBar.w = 200; 
  player.y = 350;
  player.x = 20;
  eMove21 = false;
  eMove2 = false; 
  shine(); 
  light.y = -2000;
 // g3.y = -200; 
  hide(); 
  
  opening.stop(); 


  //radio stuff===================================
  i2 = false;
  radio4 = new lamps.Sprite(lampImg, 300, 328);
  invis6 = new invisibles.Sprite(clearImg, 300, 200);

  ground.image = groundImg4;
  ground.friction = 0;
  ground.x = camera.x;

  
  if (!lvl4End) {  // Check if lvl1End has not been created
    lvl4End = new Sprite(endGoalImg, 6550,250, "k");
     g1 = new Sprite(glow2Img, lvl4End.x, lvl4End.y, "n"); 
    g1.layer = lvl4End.layer - 1; 

  //  lvl4End.image = endGoalImg;

  }
  boundary = new  boundaries.Sprite(rockBoundary, -300, 300, "s")
  boundary1 = new  boundaries.Sprite(rockBoundary, -600, 300, "s")
  boundary1.mirror.x = true;
  
  for(let i = 0; i<31; i++){


    c = new rocks.Sprite(rockOneImg, random(200, 6050), 470, "n"); 
    if(c.overlapping(rocks)){
      c.remove();
    }
    i++; 
  }
  
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
  screen = 70; 
  totHealth = 100;
  healthBar.w = 200; 
  player.y = 350;
    player.x = 20;
  eMove2 = false; 
  eMove3 =false; 
  eMove4 = false; 
  eMove5 = false; 
  eMove6 = false; 
  opening.stop(); 

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

  
  if (!lvl5End) {  // Check if lvl1End has not been created
    lvl5End = new Sprite(endGoalImg, -8500, 300, "k");
    lvl5End.color = "black";
     g1 = new Sprite(glow2Img, lvl5End.x, lvl5End.y, "n");
    g1.layer = lvl5End.layer - 1; 
    //lvl5End.image = endGoalImg;
  }

 radio6 = new lamps.Sprite(lampImg, 1300, 328);
  invis6 = new invisibles.Sprite(clearImg, 1300, 200);
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

  vr6 = new  boundaries.Sprite (blockImg5, -1600, 20, "s");
  vr7 = new  boundaries.Sprite (blockImg5, -1600, 95, "s");
  vr8 = new  boundaries.Sprite(blockImg5, -1600, 170, "s");
  vr9 = new  boundaries.Sprite(blockImg5, -1600, 395, "s");
  vr10  = new  boundaries.Sprite (blockImg5, -1600, 470, "s");

  


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


 

  o01 = new oils.Sprite(-850, 120, 110);
  o01.scale = 0.5; 
  
  o02 = new oils.Sprite(-900, 50, 110);
  o02.scale = 0.9; 

  o03 = new oils.Sprite(-1300, 250, 110);
  o03.scale = 1.1; 

  o04 = new oils.Sprite(-1100, 400, 110);
  o04.scale = 1.3; 

  r1 = new rocks.Sprite(rockOneImg, -1800, 50, "n");
  r1.mirror.y = true; 
  r1.scale = 0.5; 
   r2 = new rocks.Sprite(rockOneImg, -2000, 70, "n");
  r2.mirror.y = true; 
  r2.scale = 0.75; 

   r3 = new rocks.Sprite(rockOneImg, -2300, 70, "n");
  r3.mirror.y = true; 
  r4 = new rocks.Sprite(rockOneImg, -2600, 70, "n");
  r4.mirror.y = true; 
  r5 = new rocks.Sprite(rockOneImg, -2900, 70, "n");
  r5.mirror.y = true; 
  r5.scale = 1.3; 
  r6 = new rocks.Sprite(rockOneImg, -3100, 70, "n");
  r6.mirror.y = true; 

  e20 = new enemies.Sprite(-1860, 150, 20);
  eh20 = new enemyHealthBar.Sprite(-1860, 125, 50, 5, "n");

  e21 = new enemies.Sprite(-2060, 350, 20);
  eh21 = new enemyHealthBar.Sprite(-2060, 325, 50, 5, "n");

  e22 = new enemies.Sprite(-2300, 250, 20);
  eh22 = new enemyHealthBar.Sprite(-2300, 225, 50, 5, "n");

  e23 = new enemies.Sprite(-2560, 120, 20);
  eh23 = new enemyHealthBar.Sprite(-2560, 95, 50, 5, "n");

  e24 = new enemies.Sprite(-2960, 470, 20);
  eh24 = new enemyHealthBar.Sprite(-2960, 445, 50, 5, "n");

 

  invis07 = new invisibles.Sprite(clearImg, -1850, 200)

  vr11 = new  boundaries.Sprite (blockImg5, -3300, 20, "s");
  vr12 = new  boundaries.Sprite (blockImg5, -3300, 95, "s");
  vr13 = new  boundaries.Sprite(blockImg5, -3300, 170, "s");
  vr14 = new  boundaries.Sprite(blockImg5, -3300, 395, "s");
  vr15  = new  boundaries.Sprite (blockImg5, -3300, 470, "s");

  vr16 = new  boundaries.Sprite (blockImg5, -4750, 20, "s");
  vr17 = new  boundaries.Sprite (blockImg5, -4750, 95, "s");
  vr18 = new  boundaries.Sprite(blockImg5, -4750, 170, "s");
  vr19 = new  boundaries.Sprite(blockImg5, -4750, 395, "s");
  vr20  = new  boundaries.Sprite (blockImg5, -4750, 470, "s");

  darkness = new Sprite(-4025 ,250,1500,1000, "n"); 
  darkness.color = color(16,14,54);
  darkness.layer = 1; 

 
  Lcounter = 1; 

  plat1 = new platforms.Sprite(-3650, 150, 48, 350);
  plat2 = new platforms.Sprite(-4100, 175, 195, 40);
  plat3 = new platforms.Sprite(-3525, 100, 298, 40);
  plat4 = new platforms.Sprite(-3900, 500, 48, 450);
  plat5 = new platforms.Sprite(-4100, 300, 48, 150); 
  plat6 = new platforms.Sprite(-4400, 350, 198, 40); 
  plat7 = new platforms.Sprite(-4400, 50, 48, 400); 
 

  h1 = new hiders.Sprite(-3650, 470,20);
  h2 = new hiders.Sprite(-3875, 140,20);
  h3 = new hiders.Sprite(-4200, 40,20);

 r7 = new rocks.Sprite(rockThreeImg, -4900, 470, "n");
 r8 = new rocks.Sprite(rockTwoImg, -5600, 470, "n");
 r9 = new rocks.Sprite(rockOneImg, -5900, 470, "n");
  r10 = new rocks.Sprite(rockThreeImg, -6300, 470, "n");


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

   vr114 = new  boundaries.Sprite (blockImg5, -6750, 245, "s");
   vr115 = new  boundaries.Sprite (blockImg5, -6750, 320, "s");
  vr116 = new  boundaries.Sprite (blockImg5, -6750, 20, "s");
  vr117 = new  boundaries.Sprite (blockImg5, -6750, 95, "s");
  vr118 = new  boundaries.Sprite(blockImg5, -6750, 170, "s");
  vr119 = new  boundaries.Sprite(blockImg5, -6750, 395, "s");
  vr210  = new  boundaries.Sprite (blockImg5, -6750, 470, "s");

  invis1 = new invisibles.Sprite(clearImg, -6050, 470); 
   radio06 = new lamps.Sprite(lampImg, -6050, 328);

  end1 = new Sprite(rockBoundary, -7500, 50, "s");
  end1.layer = volcanoFish.layer + 1; 
  end1.mirror.y = true; 
  end1.scale = 0.35; 

  end12 = new Sprite(rockBoundary, -7600, 50, "s");
  end12.layer = volcanoFish.layer + 1; 
  end12.mirror.y = true; 
  end12.scale = 0.45; 
  end12.mirror.x = true; 

  end13 = new Sprite(rockBoundary, -7700, 50, "s");
  end13.layer = volcanoFish.layer + 1; 
  end13.mirror.y = true; 
  end13.scale = 0.55; 

  end14 = new Sprite(rockBoundary, -7800, 50, "s");
  end14.layer = volcanoFish.layer + 1; 
  end14.mirror.y = true; 
  end14.scale = 0.35; 
  

  end2 = new Sprite(rockBoundary, -7500, 470, "s");
  end2.layer = volcanoFish.layer + 1; 
   end2.scale = 0.35;

  end22 = new Sprite(rockBoundary, -7600, 450, "s");
  end22.layer = volcanoFish.layer + 1; 
   end22.scale = 0.45; 
  end22.mirror.x = true; 

  end23 = new Sprite(rockBoundary, -7700, 450, "s");
  end23.layer = volcanoFish.layer + 1; 
   end23.scale = 0.55; 

  end24 = new Sprite(rockBoundary, -7800, 470, "s");
  end24.layer = volcanoFish.layer + 1; 
   end24.scale = 0.35;

  stopper = new boundaries.Sprite(clearImg, -30, 250, "s");
  stopper.w = 1;
  stopper.h = windowHeight; 
 

  //BOO. 
  
}//end LVL 5=================================================================


// Store intilization
function storeOpen()
{
  cafeMusic(); 
 
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
  storeBack.layer = 10;
  storeFront.layer = 30;
   background(197,198,215); 

  }

//Mermaid functions ===========================
function mermaid1a()// CAL
{

  cafeMusic();
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
  if(!kelpMermaid)
  {
    kelpMermaid = new Sprite(MerCal1Img, camera.x, (height/2)+40 , "n");
    kelpMermaid.layer = 20;
  }
 

    txt = new textBubbles.Sprite(textBubbleImg, camera.x +200, 300, "n");
      txt.text = "Gosh darn it!\n All these polluted fish...\n It's such a shame what's happening\n to the reef. \n Press N to continue";
      txt.textSize = 10;
    txt.layer = 35;
  ground.image = clearImg; 
}

function mermaid1b()// cal2
{
  i5 = 1;
  if (!kelpMermaid)
  {
    kelpMermaid = new Sprite(MerCal2Img, camera.x, (height/2) -30, "n")
  }
  else
  {
    kelpMermaid.image = MerCal2Img;
  }
  txt2 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n");
   txt2.text = "I'm thinking I should \n reward you somehow.. \n What if I showed you how to be one \n with the kelp?\n   Press E to leave";
   txt2.textSize = 10;
  txt2.layer = 35;
}


function mermaid2a() // sydeny
{
//screen = 26; 
  cafeMusic(); 
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
  if(!coralMermaid)
  {
    coralMermaid = new Sprite(MerSyd2Img, camera.x, height/2 + 50, "n");
    coralMermaid.layer = 20;
  } 

  txt33 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n");
txt33.text = "Ugh, I  was having such a hard \ntime getting past those stupid nets. \nThanks for getting here. \nPress N to continue.";
  txt33.textSize = 10;
  txt33.layer = 35;

  storeBack.x = camera.x;
storeFront.x = camera.x;
  

  storeBack.layer = 10;
  storeFront.layer = 30;
  
 ground.image = clearImg; 
}

function mermaid2b() // sydeny2
{
  if(!coralMermaid)
  {
    coralMermaid = new Sprite(MerSyd1Img,camera.x, height/2 - 20, "n");
    coralMermaid.layer = 20;
  } 
  else 
  {
  coralMermaid.image = MerSyd1Img;
  }
    
  
    txt22 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
    txt22.text =" You're heading to the shipwreck, \nright? Here, take this flashlight. \nPress E to leave.";
    txt22.textSize = 10;
  txt22.layer = 35;
  
}
function mermaid3a() // Natalia
{ 
  cafeMusic(); 
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
  if(!shipMermaid)
  {
    shipMermaid = new Sprite(MerNat1Img,camera.x, height/2 +50, "n");
   shipMermaid.layer = 20;
  } 
txt69 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
  txt69.text ="Arghhh matey you made it thorough \nthe wreck! Very impressive \nPress N to continue.";
  txt69.textSize = 10;
  txt69.layer = 35;
  storeBack.x = camera.x;
  storeFront.x = camera.x;

 ground.image = clearImg; 
}

function mermaid3b()
{
   
   if(!shipMermaid)
     {
       shipMermaid = new Sprite(MerNat2Img,camera.x, height/2 +50, "n");
      shipMermaid.layer = 20;
     } 
     shipMermaid.image = MerNat2Img;

       txt420 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
       txt420.text =" You want some treasure? \n how about a speed boost?\nPress E to leave.";
       txt420.textSize = 10;
  txt420.layer = 35;
   
}

function mermaid4a() // Hasset
{

  cafeMusic(); 
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
  storeBack.x = camera.x;
  storeFront.x = camera.x;
if(!whaleMermaid)
  {
    whaleMermaid = new Sprite(MerHgtv1Img,camera.x, height/2 +50, "n");
   whaleMermaid.layer = 20;
  } 
txt777 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
  txt777.text ="Oh I see you made it through \n the graveyard. Good work F15H, \nbut...here comes the hard part. \nPress N to continue.";
  txt777.textSize = 10;
  txt777.layer = 35;
 ground.image = clearImg;
}
function mermaid4b()
{
  
  if(!whaleMermaid)
     {
      whaleMermaid = new Sprite(MerHgtv2Img,camera.x, height/2 +50, "n");
      whaleMermaid.layer = 20;
     } 
     whaleMermaid.image = MerHgtv2Img;

       txt778 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
       txt778.text ="I hope you remember all the tricks \n you have learned. \nYour gonna need it. \n Good luck!\nPress E to leave.";
       txt778.textSize = 10;
  txt778.layer = 35;
  
}
function mermaid5a() // Abi
{

  cafeMusic(); 
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
  storeBack.x = camera.x;
  storeFront.x = camera.x;
  

  
  if(!volcanoMermaid)
    {
      volcanoMermaid = new Sprite(MerAbi1Img,camera.x, height/2 +50, "n");
     volcanoMermaid.layer = 20;
    } 
  txt99 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
    txt99.text =" You did it! you defeated the \n volcano fish! \n Press N to continue."; 
    txt99.textSize = 10;
    txt99.layer = 35;
   ground.image = clearImg;
}
function mermaid5b()
{
  
  if(!volcanoMermaid)
     {
      volcanoMermaid = new Sprite(MerAbi2Img,camera.x, height/2 +50, "n");
      volcanoMermaid.layer = 20;
     } 
     volcanoMermaid.image = MerAbi2Img;

       txt999 = new textBubbles.Sprite(textBubbleImg, camera.x + 200, 300, "n")
       txt999.text ="Thank you for your help! \n press E to leave";
       txt999.textSize = 10;
  txt999.layer = 35;
  
}

//ALL NETS FUNCTION ===========================================
async function net2()
{
      await n2.moveTo(1999, 150);
      n2.vel.y = 0; 
      n2.vel.x = -7; 
  if (n2.x < 2000) 
    {
        n2.vel.x = 6;
        n2.image = netImg1;
      } else if (n2.x > 2700)
    {
        n2.vel.x = -6;
      }
}

async function net4()
{
  await n4.moveTo(3199, 150);
      n4.vel.y = 0; 
      n4.vel.x = -7; 
  if (n4.x < 3200) 
    {
        n4.vel.x = 3.5;
        n4.image = netImg1;
      } else if (n2.x > 3500)
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

function theEND(){
  if(!volcanoMermaid)
   {
    volcanoMermaid = new Sprite(MerAbi2Img, camera.x, height/2 +100, "n");
    volcanoMermaid.layer = 20;
   } 
  volcanoMermaid.y = height/2 + 100;

  if(!whaleMermaid)
   {
    whaleMermaid = new Sprite(MerHgtv2Img,camera.x - +450, height/2 + 70, "n");
    whaleMermaid.layer = 20;
   } 

  if(!shipMermaid)
   {
     shipMermaid = new Sprite(MerNat2Img,camera.x + 250, height/2 +100, "n");
    shipMermaid.layer = 20;
   } 
  if(!coralMermaid)
  {
    coralMermaid = new Sprite(MerSyd1Img,camera.x -250, height/2 + 100, "n");
    coralMermaid.layer = 20;
  } 

  if (!kelpMermaid)
  {
    kelpMermaid = new Sprite(MerCal2Img, camera.x + 450, (height/2) + 100, "n")
  }
  
  
}
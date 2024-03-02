function playLvl1(){ //CORAL
  screen = 30;
  lvl = 1;
  totHealth = 100;
  healthBar.w = 200; 
  eMove = false; 
   background(132, 141, 217); 
  
  
  ground = new Sprite(groundImg1, width / 3, 595, "s"); 
  ground.friction = 0;
  ground.x = camera.x;
  ground.layer = 10; 
  
  
  getPlayer(); 

  if (!lvl1End) {  // Check if lvl1End has not been created
    lvl1End = new Sprite(endGoalImg, 6550, windowHeight/2, "k");
    lvl1End.color = "black";
    g1 = new Sprite(clearImg, lvl1End.x, lvl1End.y, "n"); 
   // lvl1End.image = endGoalImg;
  }
  // radio stuff
  i2 = false;
  radio2 = new lamps.Sprite(lampImg, 300, 328);
  invis0 = new invisibles.Sprite(clearImg, 300, 200); 
  invis100 = new invisibles.Sprite(clearImg, 300, 200);

 // boundary = new rocks.Sprite(rockBoundary, 0, 300, "s")
 // boundary1 = new rocks.Sprite(rockBoundary, -300, 300, "s")
//  boundary1.mirror.x = true;



   coralBack = new Sprite(coralBackImg, 200, 480, "n");
    coral1 = new corals.Sprite(coralImg, 200, 470, "n");
    coral2 = new corals.Sprite(coralImg, 350, 470, "n");
    coral1.layer = 2;
    coral2.layer = 4;
  coralBack.layer = 2;

  //ENEMIES HIDING IN THE OILS=======================================


  o1 = new oils.Sprite(700, 200, 110);
  // x, y, diameter
  o2 = new oils.Sprite(800, 400, 60);
  o3 = new oils.Sprite(975, 50, 80);
  o4 = new oils.Sprite(1100, 250, 100);
  o5 = new oils.Sprite(1500, 350, 100);
  o6 = new oils.Sprite(1760, 250, 70); 
  o7 = new oils.Sprite(1300, 200, 70); 
  o8 = new oils.Sprite(1470, 100, 60); 
  o9 = new oils.Sprite(1860, 50, 50);
  o10 = new oils.Sprite(1960, 350, 90);
  
  o11 = new oils.Sprite(2200, 200, 130);
  o12 = new oils.Sprite(2300, 100, 60);
  o13 = new oils.Sprite(2400, 300, 80);
  o14 = new oils.Sprite(2100, 400, 90); 
  o15 = new oils.Sprite(2340, 370, 80);
  o16 = new oils.Sprite(2450, 70, 120);
  o17 = new oils.Sprite(2250, 530, 100);
  o18 = new oils.Sprite(2400, 600, 60);
  o19 = new oils.Sprite(2250, 650, 100);
  o20 = new oils.Sprite(2450, 150, 100);

  o21 = new oils.Sprite(3000, 200, 130);
  o22 = new oils.Sprite(3300, 300, 60);
  o23 = new oils.Sprite(3400, 200, 80);
  o24 = new oils.Sprite(3100, 400, 90); 
  o25 = new oils.Sprite(3340, 570, 80);
  o26 = new oils.Sprite(3450, 70, 120);
  o27 = new oils.Sprite(3250, 130, 100);
  o28 = new oils.Sprite(3400, 200, 60);
  o29 = new oils.Sprite(3650, 500, 100);
  o30 = new oils.Sprite(3550, 390, 100);

  o31 = new oils.Sprite(3630, 200, 130);
  o32 = new oils.Sprite(3700, 300, 60);
  o33 = new oils.Sprite(3590, 200, 80);
  o34 = new oils.Sprite(4100, 400, 90); 
  o35 = new oils.Sprite(4140, 570, 80);
  o36 = new oils.Sprite(4150, 70, 120);
  o37 = new oils.Sprite(4350, 130, 100);
  o38 = new oils.Sprite(4400, 200, 60);
  o39 = new oils.Sprite(4250, 500, 100);
  o40 = new oils.Sprite(4550, 390, 100);
  
  o41 = new oils.Sprite(4300, 300, 60);
  o42 = new oils.Sprite(4200, 200, 80);
  o43 = new oils.Sprite(4700, 400, 90); 
  o44 = new oils.Sprite(4340, 670, 80);
  o45 = new oils.Sprite(4550, 70, 120);
  o46 = new oils.Sprite(4200, 530, 100);
  o47 = new oils.Sprite(4300, 500, 60);
  o48 = new oils.Sprite(4650, 600, 100);
  o49 = new oils.Sprite(4250, 390, 100);
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

  e7 = new enemies.Sprite(1860, 50, 20);
  eh7 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");

  e8 = new enemies.Sprite(1860, 50, 20);
  eh8 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e8.x = o11.x; 
  e8.y = o11.y; 

  e9 = new enemies.Sprite(1860, 50, 20);
  eh9 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e9.x = o35.x; 
  e9.y = o35.y; 

  e10 = new enemies.Sprite(1860, 50, 20);
  eh10 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e10.x = o45.x; 
  e10.y = o45.y; 

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
  e14.x = o23.x; 
  e14.y = o23.y;

  e15 = new enemies.Sprite(1860, 50, 20);
  eh15 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e15.x = o16.x; 
  e15.y = o16.y;

  e16 = new enemies.Sprite(1860, 50, 20);
  eh16 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e16.x = o42.x; 
  e16.y = o42.y;

  e17 = new enemies.Sprite(1860, 50, 20);
  eh17 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e17.x = o28.x; 
  e17.y = o28.y;

  e18 = new enemies.Sprite(1860, 50, 20);
  eh18 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e18.x = o37.x; 
  e18.y = o37.y;

  e19 = new enemies.Sprite(1860, 50, 20);
  eh19 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e19.x = o39.x; 
  e19.y = o39.y;

  e20 = new enemies.Sprite(1860, 50, 20);
  eh20 = new enemyHealthBar.Sprite(1860, -10, 50, 5, "n");
  e20.x = o18.x; 
  e20.y = o18.y;


  
 
  invis1 = new invisibles.Sprite(clearImg, 375, 200); //(x,y) E1 & E2
  invis2 = new invisibles.Sprite(clearImg, 1050, 200); //(x,y)  E3 
  invis3 = new invisibles.Sprite(clearImg, 1400, 200); //(x,y)  E4
  invis4 = new invisibles.Sprite(clearImg, 1800, 200); //(x,y)  E5
  invis5 = new invisibles.Sprite(clearImg, 2100, 200);
  invis6 = new invisibles.Sprite(clearImg, 2300, 200);
  invis7 = new invisibles.Sprite(clearImg, 2600, 200);
  invis8 = new invisibles.Sprite(clearImg, 2200, 200);
  invis9 = new invisibles.Sprite(clearImg, 4140, 570);
  invis10 = new invisibles.Sprite(clearImg, 4550, 70);
  invis11 = new invisibles.Sprite(clearImg, 2250, 530);
  invis12 = new invisibles.Sprite(clearImg, 3650, 500);
  invis13 = new invisibles.Sprite(clearImg, 2450, 150);
  invis14 = new invisibles.Sprite(clearImg, 3400, 200);
  invis15 = new invisibles.Sprite(clearImg, 2450, 70);
  invis16 = new invisibles.Sprite(clearImg, 4200, 200);
  invis17 = new invisibles.Sprite(clearImg, 3400, 200);
  invis18 = new invisibles.Sprite(clearImg, 4600, 200);
  invis19 = new invisibles.Sprite(clearImg, 4760, 200);
  invis20 = new invisibles.Sprite(clearImg, 4860, 200);

  platform = new rocks.Sprite (blockImg1b, 5070, 375, "s");
 

  platform1 = new rocks.Sprite (blockImg1b, 5070, 125, "s");

  platform1.mirror.y = true; 


}//end LVL 1 ====================================================

function playLvl2(){ //KELP
  screen = 40; 
  totHealth = 100;
  healthBar.w = 200; 

  ground = new Sprite(groundImg2, width / 3, 595, "s"); 
  ground.friction = 0;
  ground.x = camera.x;

  playerSetUp();

  if (!lvl2End) // Check if lvl1End has not been created
  {  
    lvl2End = new Sprite(300, 50, 20, 40, "k");
    lvl2End.color = "black";
   // lvl2End.image = endGoalImg;

  }
  // radio stuff ========================= 
    i2 = false;
    radio1 = new lamps.Sprite(lampImg, 300, 328);
    invis3 = new invisibles.Sprite(clearImg, 300, 200);

    n1 = new nets.Sprite(netImg1, 700, -101);//y-value 
    n1.w = 100;
    n1.h = 150; 

    n2 = new nets.Sprite(netImg1, 1299, 150);
    n2.w = 100;
    n2.h = 150;  
    
 boundary = new rocks.Sprite(rockBoundary, 0, 300, "s")
  boundary1 = new rocks.Sprite(rockBoundary, -300, 300, "s")
  boundary1.mirror.x = true;
  
  kelpBack1 = new Sprite(kelpBackImg, 200,300, "n")
  kelpBack1.layer = 1;
    kelp1 = new kelps.Sprite(kelpFrontImg, 500, 420);
    kelp2 = new kelps.Sprite(kelpFrontImg, 700, 420);
    kelp3 = new kelps.Sprite(kelpFrontImg, 1000, 420);
    kelp4 = new kelps.Sprite(kelpImg, 6000, 455);
    kelp5 = new kelps.Sprite(kelpImg, 5000, 455);
    kelp6 = new kelps.Sprite(kelpImg, 2000, 455);
    kelp7 = new kelps.Sprite(kelpImg, 2000, 455);
    kelp8 = new kelps.Sprite(kelpImg, 3000, 455);   
    kelp9 = new kelps.Sprite(kelpImg, 4000, 455);
    kelp10 = new kelps.Sprite(kelpImg, 5000, 455);

 kelp1.mirror.x = true; 
  kelp4.mirror.x = true; 
  kelp5.mirror.x = true; 
  kelp8.mirror.x = true; 
  kelp8.mirror.y = true;


 rk1 = new rocks.Sprite(rockOneImg, 400, 485, "n");
 rk2 = new rocks.Sprite(rockOneImg, 500, 485, "n");
 rk3 = new rocks.Sprite(rockOneImg, 700, 485, "n");
 rk4 = new rocks.Sprite(rockOneImg, 850, 485, "n");
  
  
  
  
    
  


}///end LVL 2 ====================================================

function playLvl3(){ //SUNKEN SHIP
  screen = 50; 
  totHealth = 100;
  healthBar.w = 200; 
  playerSetUp();
  shine(); 

  
  // radio stuff===================================
  boundary = new rocks.Sprite(rockBoundary, 0, 300, "s");
  boundary1 = new rocks.Sprite(rockBoundary, -300, 300, "s");
  boundary1.mirror.x = true;
 

  i2 = false;
  radio3 = new lamps.Sprite(lampImg, 300, 328);
  invis5 = new invisibles.Sprite(clearImg, 300, 200);
  
  if (!lvl3End) {  // Check if lvl1End has not been created
    lvl3End = new Sprite(300, 50, 20, 40, "k");
    lvl3End.color = "black";
  //  lvl3End.image = endGoalImg;

  }




  plat1 = new platforms.Sprite(500, 300, 95, 300); //bottom 1st
  plat1Top = new platforms.Sprite(500, 25, 95, 50); //top 1st
//need to be 200 apart in x direction 
  plat2 = new platforms.Sprite(750, 200, 95, 100); 
  plat3 = new platforms.Sprite(1000, 200, 95, 100);

  plat4 = new platforms.Sprite(1500, 400, 95, 100);
  plat5 = new platforms.Sprite(1200, 500, 195, 100);
  h1 = new hiders.Sprite(plat1.x + 50 ,200,20); 


}// end LVL 3 ==========================================================

function playLvl4(){ //WHALE FALL
  screen = 60; 
  totHealth = 100;
  healthBar.w = 200; 

  playerSetUp();

  //radio stuff===================================
  i2 = false;
  radio4 = new lamps.Sprite(lampImg, 300, 328);
  invis6 = new invisibles.Sprite(clearImg, 300, 200);

  ground = new Sprite(groundImg4, width / 3, 595, "s"); 
  ground.friction = 0;
  ground.x = camera.x;

  
  if (!lvl4End) {  // Check if lvl1End has not been created
    lvl4End = new Sprite(300, 50, 20, 40, "k");
    lvl4End.color = "black";
  //  lvl4End.image = endGoalImg;

  }
  
  boundary = new rocks.Sprite(rockBoundary, 0, 300, "s")
  boundary1 = new rocks.Sprite(rockBoundary, -300, 300, "s")
  boundary1.mirror.x = true;
  
  d1 = new debris.Sprite(w1, 00, 0); 
  d1.vel.y = random(5, 8);
  d2 = new debris.Sprite(w2, 300, 0);
  d2.vel.y = random(5, 8);
  d3 = new debris.Sprite(w3, 400, 0);
  d3.vel.y = random(5, 8);
  d4 = new debris.Sprite(w4, 800, 0);
  d4.vel.y = random(5, 8);
  d5 = new debris.Sprite(w5, 1200, 0);
  d5.vel.y = random(5, 8);


}//end LVL 4=================================================================

function playLvl5(){ //UNDERWATER VOLCANO 
  screen = 70; 
  totHealth = 100;
  healthBar.w = 200; 

  playerSetUp();

  ground = new Sprite(groundImg5, width / 3, 595, "s"); 
  ground.friction = 0;
  ground.x = camera.x;

  //radio stuff===================================
  i2 = false;
  radio5 = new lamps.Sprite(lampImg, 300, 328);
  invis7 = new invisibles.Sprite(clearImg, 300, 200);

  
  if (!lvl5End) {  // Check if lvl1End has not been created
    lvl5End = new Sprite(300, 50, 20, 40, "k");
    lvl5End.color = "black";
    //lvl5End.image = endGoalImg;
  }

 radio6 = new lamps.Sprite(lampImg, 1300, 328);
  invis6 = new invisibles.Sprite(clearImg, 1300, 200);
  //



  
}//end LVL 5=================================================================


//Mermaid functions ===========================
function mermaid1()// callie?
{
  background(0,0,0); 
  screen = 25; 
  
  if(!storeBack){
      storeBack = new Sprite(storeBackImg, camera.x, height/2, "n");

  }

  if(!storeFront){
    storeFront = new Sprite(storeFrontImg, camera.x, height/2, "n");
  }

  if(!kelpMermaid){
    kelpMermaid = new Sprite(MerAbi1Img, 1500, 370, "n");
    kelpMermaid.layer = 2;
  }

  storeBack.layer = 1;
  storeFront.layer = 3;
}


function mermaid2() // sydeny
{
background(0,0,0); 
screen = 26; 

if(!storeBack){
    storeBack = new Sprite(storeBackImg, camera.x, height/2, "n");

}

if(!storeFront){
  storeFront = new Sprite(storeFrontImg, camera.x, height/2, "n");
}

if(!sydMermaid){
  sydMermaid = new Sprite(MerAbi1Img, 1500, 370, "n");
  sydMermaid.layer = 2;
}

storeBack.layer = 1;
storeFront.layer = 3;
}


//ALL NETS FUNCTION ===========================================
async function net2(){
      await n2.moveTo(1299, 150);
      n2.vel.y = 0; 
      n2.vel.x = -3; 
  if (n2.x < 1300) 
    {
        n2.vel.x = 3;
        n2.image = netImg1;
      } else if (n2.x > 1500) {
        n2.vel.x = -3;
      }


}

//ALL HIDERS FUNCTION===========================================
async function hider1(){

 
 
}
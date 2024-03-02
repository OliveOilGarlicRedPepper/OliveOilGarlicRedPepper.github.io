
/* VARIABLES */
let playButton, directionsButton, backButton, textTitle; //for homescreen
let player, ground, theEnd, bullets, light; //for ALL
let healthBar, enemyHealthBar, e1, eH1, e2, eh2, d1, healthFront, healthDMG; //for ALL

let goLvl1, goLvl2, goLvl3, goLvl4, goLvl5; 
let vHealth = 100; 
let hc1, hc2, hc3, hc4, hc5, hc6, hc7, hc8, hc9, hc10, hc11, hc12, hc13, hc14, hc15, hc16 = 100; 

let vCheck = false; 

let totHealth = 100;
let maxHealth = 100;
let enemies, kelps, platforms,lamps, rocks, invisibles, lanterns, corals, doors, deaths, oils, nets, debris, boundaries, angles, hiders; //ALL INTERACTIVE SPRITES 

let storeFront, storeBack, storeBack2, storeFront2, tester, kelpMermaid, coralMermaid, shipMermaid,whaleMermaid,volcanoMermaid, uno, dos, tres, uno1, dos2, tres3, cuatro, cinco, seis; 
let txt4, txt5; 

let netCount1;
let entrance;
let g3; 
let volcanoFish; 

let canHurt = true; 

let canMove = true; 
let eMove = false;
let eMove2, eMove3, eMove4, eMove5, eMove6, eMove7, eMove8, eMove9, eMove10,eMove11,eMove12,eMove13,eMove14,eMove15, eMove16, eMove17, eMove18, eMove19, eMove20, eMove21 = false; 
let i1 = false;
let i2 = false; 
let i3 = 0;
let i4 = false;
let i5 =0;
let e1S = false; 
let messageCheck = false; 
let musicCheck = 2; 
let textBubbles; 
let eDeathSND; 
let fishMoveAni, fishIdleAni, enemyMoveAni; 

let lvl1End;//for lvl1
let lvl2End;
let lvl3End;
let lvl4End;
let lvl5End;
let screen = 0;
let lvl = 0;
let counter = 0;
let Lcounter = 0; 

/* PRELOAD LOADS FILES */
function preload() {
    
  titleBackImg = loadImage('assets/TitleBack.png');
  titleTextImg = loadImage('assets/TitleText.png');
boatImg = loadImage('assets/FishIdle1.png');
platImg = loadImage('assets/Platform.png');
backImg = loadImage('assets/Stage1Back.jpg');
  backImg2 = loadImage('assets/Stage2Back.jpg');
  backImg4 = loadImage('assets/Stage4Back.jpg');
  backImg5 = loadImage('assets/Stage5Back.png');
  kelpImg = loadImage('assets/Kelp.png');
  lampImg = loadImage('assets/Radio.png');
  coralImg = loadImage('assets/Coral.png');
  clearImg = loadImage('assets/clear.png');
  clearImg1 = loadImage('assets/clear.png');
  kelpBackImg = loadImage('assets/KelpGroupBack.png');
  kelpFrontImg = loadImage('assets/KelpGroupFront.png');
  textBubbleImg = loadImage('assets/RadioBubble.png');
  coralBackImg = loadImage('assets/CoralBack.png');
  endGoalImg = loadImage('assets/Lamp.png');
  glowImg = loadImage('assets/Glow.png');
  glow2Img = loadImage('assets/Glow2.png');
  glow3Img = loadImage('assets/Glow3.png');
 

  
 groundImg1 = loadImage('assets/Stage1Floor.jpg');
  groundImg2 = loadImage('assets/Stage2Floor.jpg');
  groundImg3 = loadImage('assets/Stage3Floor.jpg');
  groundImg4 = loadImage('assets/Stage4Floor.jpg');
  groundImg5 = loadImage('assets/Stage5Floor.png');
  
  blockImg1 = loadImage('assets/Block1.png');
    blockImg1a =loadImage('assets/Block1a.png');
    blockImg1b =loadImage('assets/Block1b.png')
  blockImg2 = loadImage('assets/Block2.png');
  blockImg4 = loadImage('assets/Block4.png');
  blockImg5 = loadImage('assets/Block5.png');

  rockBoundary = loadImage('assets/RockBoundary.png');
  hiderImg = loadImage('assets/darkEST.png'); 
  
  rockOneImg = loadImage('assets/RockOne.png');
  rockTwoImg = loadImage('assets/RockTwo.png');
  rockThreeImg = loadImage('assets/RockThree.png'); 
  
  healthBarImg = loadImage('assets/HealthFront.png');
healthImg = loadImage('assets/HealthBack.png'); 
  
  storeFrontImg = loadImage('assets/StoreFront.png');
  storeBackImg = loadImage('assets/StoreBack.jpg');
  
  netImg1 = loadImage('assets/NetOpen.png');
  netImg2 = loadImage('assets/NetClosed.png');
  
  e1 = loadImage('assets/EnemyMove1.png');
  e2 = loadImage('assets/EnemyMove2.png');
  e3 = loadImage('assets/EnemyMove3.png');
  e4 = loadImage('assets/EnemyMove4.png');
  
  MerAbi1Img = loadImage('assets/Abi1.png');
  MerAbi2Img = loadImage('assets/abi2.png');
  MerNat1Img = loadImage('assets/Tali1.png');
  MerNat2Img = loadImage('assets/Tali2.png');
  MerHgtv1Img = loadImage('assets/Hasset1.png');
  MerHgtv2Img = loadImage('assets/Hasset2.png');
  MerSyd1Img = loadImage('assets/Sydney1.png');
  MerSyd2Img = loadImage('assets/Sydney2.png');
  MerCal1Img = loadImage('assets/Cal1.png');
  MerCal2Img = loadImage('assets/Cal2.png');
  

  oilImg = loadImage('assets/Oil.png');
  oil2Img = loadImage('assets/Oil2.png');
  oil3Img = loadImage('assets/Oil3.png');
  oil4Img = loadImage('assets/Oil4.png');

  flashImg = loadImage('assets/Flashlight.png');
  flash2Img = loadImage('assets/Flashlight2.png');

  w1 = loadImage('assets/WhaleDebris1.png');
  w2 = loadImage('assets/WhaleDebris2.png');
  w3 = loadImage('assets/WhaleDebris3.png');
  w4 = loadImage('assets/WhaleDebris4.png');
  w5 = loadImage('assets/WhaleDebris5.png');

  v1 = loadImage('assets/VolcanoDebris1.png');
  v2 = loadImage('assets/VolcanoDebris2.png');
  v3 = loadImage('assets/VolcanoDebris3.png');
  v4 = loadImage('assets/VolcanoDebris4.png');
  v5 = loadImage ('assets/VolcanoDebris5.png'); 

  shipWreckImg = loadImage('assets/ShipEntrance.png'); 
 //chiseledFont = loadFont('assets/Chiseled-KExl.ttf');

  //SOUNDS
  eDeathSND = loadSound('assets/eDeathTEST.mp3');
  opening = loadSound('assets/music/Opening music.m4a');
  shopSND = loadSound('assets/music/Cafe.m4a');
  opening2 = loadSound('assets/music/Opening2.m4a');
  opening3 = loadSound('assets/music/Opening3.m4a');
  SND1 = loadSound('assets/music/My Song 2.m4a');
  dramaticSND = loadSound('assets/music/Dramatic.m4a'); 
  windySND = loadSound('assets/music/windy.mp3'); 
  
  //ANIMATIONS
  enemyMoveAni = loadAnimation(e1,e2,e3,e4);
  volcanoFishAni = loadAnimation('assets/VolcanoFish1', 'assets/VolcanoFish2.png','assets/VolcanoFish3.png', 'assets/VolcanoFish4.png', 'assets/VolcanoFish5.png')
   fishIdleAni = loadAnimation('assets/FishIdle1', 'assets/FishIdle3.png', 'assets/FishIdle4.png');
   fishMoveAni = loadAnimation('assets/FishMove1.png', 'assets/FishMove2.png', 'assets/FishMove3.png', 'assets/FishMove4.png', 'assets/FishMove3.png');

  fishDieAni = loadAnimation('assets/FishDie1.png', 'assets/FishDie2.png', 'assets/FishDie3.png', 'assets/FishDie4.png', 'assets/FishDie5.png');

  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  homeScreen();

  titleTextImg.resize(500, 0);
  boatImg.resize(100,0);// (controls width, 0)
  healthImg.resize(130,20);
  healthBarImg.resize(220,0);
  coralBackImg.resize(1300,0);
  kelpBackImg.resize(windowWidth+100,0);
  kelpFrontImg.resize(500,0);
  platImg.resize(windowWidth, 0);
  lampImg.resize(100, 0);
  kelpImg.resize(150, 0);
  coralImg.resize(100, 0);
  textBubbleImg.resize(150,0);
  storeBackImg.resize(800, 0);
  storeFrontImg.resize(800, 0);
  MerAbi1Img.resize(450,0);
  MerAbi2Img.resize(450,0);
  MerNat1Img.resize(450,0);
  MerNat2Img.resize(450,0);
  MerHgtv1Img.resize(450,0);
  MerHgtv2Img.resize(450,0);
  MerSyd1Img.resize(450,0);
  MerSyd2Img.resize(450,0);
  MerCal1Img.resize(450,0);
  MerCal2Img.resize(450,0);
  hiderImg.resize(40, 0); 

  endGoalImg.resize(windowHeight, windowHeight); 
  glow2Img.resize(500,0); 
  glow3Img.resize(700,0);


  rockBoundary.resize(0, windowHeight);
  rockOneImg.resize(400,0);
  rockTwoImg.resize(400,0);
  rockThreeImg.resize(400,0);
  netImg1.resize(200,0);
  netImg2.resize(200, 0);
  e1.resize(150,0);
  e2.resize(150,0);
  e3.resize(150,0);
  e4.resize(150,0);
  oilImg.resize(150, 0); 
  oil2Img.resize(100, 0);
  oil3Img.resize(50, 0);
  oil4Img.resize(250, 0);
  shipWreckImg.resize(750, 0); 

  clearImg1.resize(0, windowHeight);
  
  groundImg1.resize(windowWidth, 0);
  groundImg2.resize(windowWidth, 0);
  groundImg3.resize(windowWidth, 0);
  groundImg4.resize(windowWidth, 0);
  groundImg5.resize(windowWidth, 0);
  
  w1.resize(100, 0);
  w2.resize(100, 0);
  w3.resize(100, 0);
  w4.resize(100, 0);
  w5.resize(100, 0);
  
  v1.resize(100, 0);
  v2.resize(100, 0);
  v3.resize(100, 0);
  v4.resize(100, 0);
  v5.resize(100, 0);

  blockImg1.resize(150,0);
  blockImg1a.resize(150,0);
  blockImg1b.resize(300,0);

  blockImg2.resize(150,0);
   blockImg4.resize(150,0);
   blockImg5.resize(150,0);

  

  flashImg.resize(150,0);
  flash2Img.resize(150,0);
  glowImg.resize(150,0);
 
   eDeathSND.setLoop(false); 
  eDeathSND.playMode('untilDone');



 
fishMoveAni.scale = 0.15;
  fishMoveAni.frameDelay = 15;

  volcanoFishAni.scale = 0.15;
  volcanoFishAni.frameDelay = 15

 
  fishIdleAni.scale = 0.15;
  fishIdleAni.frameDelay = 30;


  enemyMoveAni.frameDelay = 10;
  enemyMoveAni.scale = 0.2; 

  fishDieAni.noLoop(); 
  fishDieAni.scale = 0.15; 
  fishDieAni.frameDelay = 10;
  
  
  platforms = new Group(); //just in general--- walls
  platforms.color = color(16,14,54);
  //color(16,14,54);
  platforms.collider = "s";
  platforms.friction = 0;

  angles = new Group();
  angles.collider = "n"; 
  angles.image = clearImg; 

  boundaries = new Group(); 
  boundaries.collider = "s";
  

  enemies = new Group(); //any enemy 
  enemies.collider = "d";
  enemies.color = color(0);
  enemies.rotationLock = true;
  enemies.addAni(enemyMoveAni);
  enemies.ani.scale = 0.2; 

   musicToggle(); 


  enemyHealthBar = new Group();
  enemyHealthBar.collider = "n";  //Enemy health bar display 
  enemyHealthBar.color = 'red';
  enemyHealthBar.w = 50; 
  enemyHealthBar.h = 5; 
  /*enemyHealthBar.x = enemies.x;
  enemyHealthBar.y = enemies.y - 25; */

  bullets = new Group();  //bullet shot by player
  bullets.vel.x = 0;
  bullets.vel.y = 0;
  bullets.life = 50; 

  kelps = new Group(); //player can hide in kelp 
  kelps.collider = "n";
  kelps.friction = 0;

  rocks = new Group(); //player runs into rocks 
 rocks.collider = "s";
  rocks.friction = 0;
  rocks.color = 'grey';

  corals = new Group(); // player moves over coral
  corals.collider = "n" 
  corals.friction = 0;
  corals.w = 20;
  corals.h = 50;

  lamps = new Group();  //Guiding player; tutorial
  lamps.collider = "n";
  lamps.friction = 0;
  lamps.color = 'yellow';
  lamps.w = 10;
  lamps.h = 100; 

  doors = new Group();  //End Goals
  doors.collider = "k"
  doors.h = windowHeight;
  doors.w = 20; 
  
  

  invisibles = new Group();  //when player crosses, it triggers an event 
  invisibles.collider = "n";   //REMEMBER: y value must be 200 for it to cover whole screen 
  invisibles.color = 'white'; 
  invisibles.w = 1;
  invisibles.h = windowHeight; 
   

  lanterns = new Group();  //When player touches, they 'win' a level 

  textBubbles = new Group();  //text that appears when player triggers event
  textBubbles.collider = "n"; 
  textBubbles.color = 'white'; 

  deaths = new Group(); 
  deaths.collider = "n"; 

  oils = new Group();
  oils.collider = "n"; 
  oils.color = "purple"; 
  oils.image = oilImg;

  nets = new Group();
  nets.collider = "n"; 
  nets.color = "white";

  hiders = new Group();
  hiders.collider = "k";
  hiders.color = color(16,14,54);

  

  debris = new Group(); 
  debris.collider = "n";
  debris.color = "green"; 

  boundaries = new Group(); 
  boundaries.collider = "s"; 
  boundaries.layer = 78; 
  
  
  
//LAYERING
 lamps.layer = 2.5; //light is layer 2, player is layer 3, healthbar is layer 7 & 8, coral back is 2
 textBubbles.layer = 1; 
  deaths.layer = 5; 
  doors.layer = 4; 
  debris.layer = 10; 
  rocks.layer = 2.7;
  platforms.layer = 6; 
  kelps.layer = 2.5; 
  enemies.layer = 5;
  enemyHealthBar.layer = 5;
  oils.layer = 6;
  corals.layer= 2; 

 // camera.zoom = 0.5; 

}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen == 0) {
    background(titleBackImg);
    music1();
    musicToggle(); 
    if(directionsButton.mouse.presses()){
      screen = 1; //TSA INFO 
      directionsScreen();
       musicToggle(); 
     
    } else if (playButton.mouse.presses()){
      screen = 2;
      tutorialScreenAssests();
       musicToggle(); 
      
    }
  }


  if (screen == 1 ){//TSA INFORMATION  

    if(backButton.mouse.presses()){
      screen = 0;
       musicToggle(); 
      

      goLvl1.pos = {x: -500, y:-500};
       goLvl2.pos = {x: -500, y:-500};
       goLvl3.pos = {x: -500, y:-500};
       goLvl4.pos = {x: -500, y:-500};
       goLvl5.pos = {x: -500, y:-500};
      backButton.pos = {x: -500, y:-500};
      homeScreen(); //back to home 
      
    }
    if(goLvl1.mouse.presses()){
      screen = 30; 
      backButton.pos = {x: -500, y:-500};
      goLvl1.pos = {x: -500, y:-500};
       goLvl2.pos = {x: -500, y:-500};
       goLvl3.pos = {x: -500, y:-500};
       goLvl4.pos = {x: -500, y:-500};
       goLvl5.pos = {x: -500, y:-500};
       ground = new Sprite(groundImg1, width / 3, 595, "s");
      getPlayer();
      
      playLvl1(); 
    }
    if(goLvl2.mouse.presses()){
      screen = 40; 
      backButton.pos = {x: -500, y:-500};
      goLvl1.pos = {x: -500, y:-500};
       goLvl2.pos = {x: -500, y:-500};
       goLvl3.pos = {x: -500, y:-500};
       goLvl4.pos = {x: -500, y:-500};
       goLvl5.pos = {x: -500, y:-500};
       ground = new Sprite(groundImg1, width / 3, 595, "s");
      getPlayer();
      playLvl2(); 
    }
    if(goLvl3.mouse.presses()){
      screen = 50; 
      backButton.pos = {x: -500, y:-500};
      goLvl1.pos = {x: -500, y:-500};
       goLvl2.pos = {x: -500, y:-500};
       goLvl3.pos = {x: -500, y:-500};
       goLvl4.pos = {x: -500, y:-500};
       goLvl5.pos = {x: -500, y:-500};
       ground = new Sprite(groundImg1, width / 3, 595, "s");
      getPlayer();
       hide(); 
      playLvl3(); 
    }

    if(goLvl4.mouse.presses()){
      screen = 60; 
      backButton.pos = {x: -500, y:-500};
      goLvl1.pos = {x: -500, y:-500};
       goLvl2.pos = {x: -500, y:-500};
       goLvl3.pos = {x: -500, y:-500};
       goLvl4.pos = {x: -500, y:-500};
       goLvl5.pos = {x: -500, y:-500};
       ground = new Sprite(groundImg1, width / 3, 595, "s");
      getPlayer();
      dash();
       hide(); 
      playLvl4(); 
    }
    if(goLvl5.mouse.presses()){
      screen = 70; 
      backButton.pos = {x: -500, y:-500};
      goLvl1.pos = {x: -500, y:-500};
       goLvl2.pos = {x: -500, y:-500};
       goLvl3.pos = {x: -500, y:-500};
       goLvl4.pos = {x: -500, y:-500};
       goLvl5.pos = {x: -500, y:-500};
       ground = new Sprite(groundImg1, width / 3, 595, "s");
      getPlayer();
      shine(); 
       hide(); 
       dash();
      g3 = new Sprite(glowImg, player.x, player.y, "n"); 
      g3.layer = light.layer;
      playLvl5(); 
    }
  }
  //FIRST GAME ROOOM TUTORIAL~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (screen == 2){ //TUTORIAL SETUP
    background(backImg);
    opening.stop(); 
    tutMusic(); 
    player.debug = mouse.pressing();
    player.mirror.x = true;
    invisibles.debug = mouse.pressing();
    enemies.debug= mouse.pressing(); 
   /* ang1.x = player.x; ang1.y = player.y - 100;
    ang2.x = player.x; ang2.y = player.y + 100;
    ang3.x = player.x - 50; ang3.y = player.y + 100;
    ang4.x = player.x + 50; ang4.y = player.y + 100;
    ang5.x = player.x + 50; ang5.y = player.y - 100;
    ang6.x = player.x - 50; ang6.y = player.y - 100;
    ang7.x = player.x + 50; ang7.y = player.y;
    ang8.x = player.x - 50; ang8.y = player.y;
   */ 
    playerSetUp();
    ceiling.x = player.x + 90; 
    
   
    if(eMove == true)
    {
     e1.moveTowards(player);  //ENEMY NUMBER ONE 
    e1.speed = 1.7;

      if(e1.x - player.x < 0){
    e1.mirror.x = true;
      }else{
        e1.mirror.x = false;
      }

     eh1.x = e1.x; 
     eh1.y = e1.y - 25;
     
     e2.moveTowards(player);  //ENEMY NUMBER TWO
    e2.speed = 0.7;

      if(e2.x - player.x < 0){
        e2.mirror.x = true;
          }else{
            e2.mirror.x = false;
          }




     eh2.x = e2.x; 
     eh2.y = e2.y - 25;
      
        /*END*/
    }
     //EVENT NUMBER 1: RADIO TELLS U HOW TO MOVE
     
   if (player.overlapping(invis1))
   {
     i1 = true; 
     txt = new textBubbles.Sprite(textBubbleImg, 600, 200, "n");
      txt.text = "Welcome Unit F15H. \nFirst day on the job, eh? \n See that green thing up top?\nThat's your health bar.\nDon't let it drop. \n Press E to Continue";
      txt.textSize = 10;
       canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
     player.vel.x = 0; 
     player.vel.y = 0; 
      invis1.remove(); 
     
  
     }
    /*ALL TEXT STUFF */ 
     if((canMove == false) && i1 == true ){
          if(kb.presses("e")){
            canMove = true;
           i1 = false; 
            textBubbles.remove(); 
          } else{
            canMove = false; 
    
          }
      }
     //USED FOR ALL TEXT BUBBLES 
    //END EVENT NUMBER 1: RADIO1 

    /* EVENT NUMBER 2: RADIO 2 ENEMY BATTLES */
    if (player.overlapping(invis2)){
      i2 = true; 
       txt = new textBubbles.Sprite(textBubbleImg, 1400, 200, "n");
      txt.text = "F15H! Those poor fish have \nbeen infected with chemicals!\n Totally tubular! \nPut them out of their misery. \nPress SPACE to shoot.\n Press E to Continue.";
        txt.textSize = 10;
         canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
       player.vel.x = 0; 
       player.vel.y = 0; 
        invis2.remove(); 
      
    }

    if((canMove == false) && i2 == true ){
        if(kb.presses("e")){
          eMove = true; 
          canMove = true;
        i2 = false; 
          textBubbles.remove(); 
        } else{
          canMove = false; 

        }
    }

    
    

    //END EVENT 2: ENEMY BATTLES ===========================================


    if(totHealth == 0){
      screen = 100;
      enemies.remove(); 
      
    }

  

    if (bullets.overlaps(e1)){
     eh1.w -= 12.5;
    }
    if(eh1.w <= 0)
    {
      e1.remove();
      eh1.remove();
     // eDeath1(); 

    } 

  
     

    if (bullets.overlaps(e2)){
     eh2.w -= 12.5;
    }
    if(eh2.w <= 0)
    {
      e2.remove();
      eh2.remove();
    
    }

    
    if((eh2.w<= 0) && (eh1.w <=1)){
      g1.image = glow2Img; 
    }
    

    
    if(player.collides(theEnd) && eh2.w <= 0){
      if(eh1.w <= 0){
      platforms.removeAll(); 
      opening2.stop();
      theEnd.remove(); 
      enemies.removeAll(); 
      rocks.removeAll();
      lamps.removeAll();
      invisibles.removeAll();
      corals.removeAll();
        opening2.stop(); 
      textBubbles.removeAll();
      enemyHealthBar.removeAll();
        boundaries.removeAll();
        
        ceiling.image = clearImg; 
      g1.remove(); 
      screen = 30; 
       // playLvl1(); 
       player.x = -1000;
        player.vel.x = 0;
        player.vel.y = 0; 
        player.y = 350;
        player.x = 20;
        playLvl1();
      }
    }

    
  }

  

  if(screen == 30){ //lvl 1: coral reef//chemical enemy
    background(backImg);
    if(theEnd) {theEnd.y= -1000;}
    coralBack.x = player.x + 70; 
    invisibles.debug = mouse.pressing();
    player.debug = mouse.pressing();
    playerSetUp();
    ceiling.x = player.x + 90; 
    lvl1Music(); 
    shopSND.stop(); 
    if (!txt4)
    {
     txt4 = new textBubbles.Sprite(textBubbleImg, 420, -200, "n");
      txt4.text = "Watch out for enemies! \nThey're EVERYWHERE!!\nShoot them all to light the lamp. \n Press E to continue";
        txt4.textSize =10;
      player.vel.x = 0; 
       player.vel.y = 0; 

    }
   
    // RADIO STUFF=================================
  if (player.overlapping(invis0))
      {
        canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
        if (!txt4)
        {
          txt4 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
        

        }
        txt4.text = "Watch out for enemies! \nThey're EVERYWHERE!!\nShoot them all to light the lamp. \n Press E to continue";
          txt4.textSize =10;
        player.vel.x = 0; 
         player.vel.y = 0; 
        txt4.y = 200; 
        i2 = true;
       
      }

    if(canMove == false && i2 == true)
    {
      if(kb.presses("e"))
      {
        txt4.y = -200; 
        invis0.remove();
        canMove = true;
        i2 = false;
      }
    }

    if(player.overlapping(invis100))
      { 
          if(!txt5){
          txt5 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
          }
          txt5.text = "bzzt... bzzt... \nDon't get caught in the oil! \n You don't know what's \nwaiting for you in there!\nShoot them all to light up the lamp \nPress E to continue";
          txt5.textSize = 10;
        canMove = false;
        i2 = true; 

        if(kb.presses("e"))
        {

          txt5.remove(); 
          invis100.remove();
          canMove = true;
           i2 = false; 
        } 
      }   
// END OF RADIO STUFF===============================
   
  
    
      
    
    //ALL ENEMY STUFF=================================================
    if(eMove == true ){
      e1.moveTowards(player);  //ENEMY NUMBER ONE 
      e1.speed = 2.7;

      e2.moveTowards(player);  //ENEMY NUMBER TWO
      e2.speed = 2.7;

      eh1.x = e1.x; 
       eh1.y = e1.y - 25;

      eh2.x = e2.x; 
       eh2.y = e2.y - 25;

      if(e2.x - player.x < 0){
        e2.mirror.x = true;
          }else{
            e2.mirror.x = false;
          }
      if(e1.x - player.x < 0){
        e1.mirror.x = true;
          }else{
            e1.mirror.x = false;
          }

    }

    if(eMove2 == true ){
      e3.moveTowards(player);  //ENEMY NUMBER Three
      e3.speed = 2.7;
      eh3.x = e3.x; 
       eh3.y = e3.y - 25;

      if(e3.x - player.x < 0){
        e3.mirror.x = true;
          }else{
            e3.mirror.x = false;
          }

    }

    if(eMove3 == true ){
      e4.moveTowards(player);  //ENEMY NUMBER 4
      
      e4.speed = 2.7;
      eh4.x = e4.x; 
       eh4.y = e4.y - 25;

      if(e4.x - player.x < 0){
        e4.mirror.x = true;
          }else{
            e4.mirror.x = false;
          }

    }

    if(eMove4 == true ){
      e5.moveTowards(player);  //ENEMY NUMBER 5
      e5.speed = 2.7;

      if(e5.x - player.x < 0){
        e5.mirror.x = true;
          }else{
            e5.mirror.x = false;
          }

      eh5.x = e5.x; 
       eh5.y = e5.y - 25;

    }

  

    if(eMove6 == true ){
      e6.moveTowards(player);  //ENEMY NUMBER 4
      eh6.x = e6.x; 
       eh6.y = e6.y - 25;
      e6.speed = 2.7;

      if(e6.x - player.x < 0){
        e6.mirror.x = true;
          }else{
            e6.mirror.x = false;
          }

    }

/*    if(eMove7 == true ){
      e7.moveTowards(player);  //ENEMY NUMBER 4

      e7.speed = 2.7;
      eh7.x = e7.x; 
       eh7.y = e7.y - 25;

      if(e7.x - player.x < 0){
        e7.mirror.x = true;
          }else{
            e7.mirror.x = false;
          }
      e7.remove();

    } */

    if(eMove8 == true ){
     
      e8.moveTowards(player);  //ENEMY NUMBER 4

      e8.speed = 2.5;
      eh8.x = e8.x; 
       eh8.y = e8.y - 25;

      if(e8.x - player.x < 0){
        e8.mirror.x = true;
          }else{
            e8.mirror.x = false;
          }

    }

    if(eMove9 == true ){
     
      e9.moveTowards(player);  //ENEMY NUMBER 4

      e9.speed = 3;
      eh9.x = e9.x; 
       eh9.y = e9.y - 25;

      if(e9.x - player.x < 0){
        e9.mirror.x = true;
          }else{
            e9.mirror.x = false;
          }

    }

    if(eMove10 == true ){
     
      e10.moveTowards(player);  //ENEMY NUMBER 4

      e10.speed = 2.3;
      eh10.x = e10.x; 
       eh10.y = e10.y - 25;
      if(e10.x - player.x < 0){
        e10.mirror.x = true;
          }else{
            e10.mirror.x = false;
          }

    }

    if(eMove11 == true ){
     
      e11.moveTowards(player);  //ENEMY NUMBER 4

      e11.speed = 2.7;
      eh11.x = e11.x; 
       eh11.y = e11.y - 25;

      if(e11.x - player.x < 0){
        e11.mirror.x = true;
          }else{
            e11.mirror.x = false;
          }

    }

    if(eMove12 == true ){
    
      e12.moveTowards(player);  //ENEMY NUMBER 4

      e12.speed = 2.8;
      eh12.x = e12.x; 
       eh12.y = e12.y - 25;
      if(e12.x - player.x < 0){
        e12.mirror.x = true;
          }else{
            e12.mirror.x = false;
          }

    }

    if(eMove13 == true ){
     
      e13.moveTowards(player);  //ENEMY NUMBER 4

      e13.speed = 2.6;
      eh13.x = e13.x; 
       eh13.y = e13.y - 25;

      if(e13.x - player.x < 0){
        e13.mirror.x = true;
          }else{
            e13.mirror.x = false;
          }

    }

    if(eMove14 == true ){
      
      e14.moveTowards(player);  //ENEMY NUMBER 4

      e14.speed = 3;
      eh14.x = e14.x; 
       eh14.y = e14.y - 25;

      if(e14.x - player.x < 0){
        e14.mirror.x = true;
          }else{
            e14.mirror.x = false;
          }

    }

 /*   if(eMove15 == true ){
      
      e15.moveTowards(player);  //ENEMY NUMBER 4

      e15.speed = 2;
      eh15.x = e15.x; 
       eh15.y = e15.y - 25;

      if(e15.x - player.x < 0){
        e15.mirror.x = true;
          }else{
            e15.mirror.x = false;
          }
      e15.remove(); 

    } */

    if(eMove16 == true ){
     
      e16.moveTowards(player);  //ENEMY NUMBER 4

      e16.speed = 2.9;
      eh16.x = e16.x; 
       eh16.y = e16.y - 25;

      if(e16.x - player.x < 0){
        e16.mirror.x = true;
          }else{
            e16.mirror.x = false;
          }

    }

   /* if(eMove17 == true ){
 
      e17.moveTowards(player);  //ENEMY NUMBER 4

      e17.speed = 3.4;
      eh17.x = e17.x; 
       eh17.y = e17.y - 25;

      if(e17.x - player.x < 0){
        e17.mirror.x = true;
          }else{
            e17.mirror.x = false;
          }

    } 

    if(eMove18 == true ){
      
      e18.moveTowards(player);  //ENEMY NUMBER 4

      e18.speed = 2.6;
      eh18.x = e18.x; 
       eh18.y = e18.y - 25;

      if(e18.x - player.x < 0){
        e18.mirror.x = true;
          }else{
            e18.mirror.x = false;
          }

    } */

    if(eMove19 == true ){
      
      e19.moveTowards(player);  //ENEMY NUMBER 4

      e19.speed = 2.75;
      eh19.x = e19.x; 
       eh19.y = e19.y - 25;

      if(e19.x - player.x < 0){
        e19.mirror.x = true;
          }else{
            e19.mirror.x = false;
          }

    }

    if(eMove20 == true ){
      
      e20.moveTowards(player);  //ENEMY NUMBER 4

      e20.speed = 3;
      eh20.x = e20.x; 
       eh20.y = e20.y - 25;

      if(e20.x - player.x < 0){
        e20.mirror.x = true;
          }else{
            e20.mirror.x = false;
          }

    }
// Below is invisible triggers for enemies
    
    if(player.overlapping(invis1)){
      eMove = true; 
      
    }

     if(player.overlapping(invis2)){
        eMove2 = true; 
      }

    if(player.overlapping(invis3)){
      eMove3 = true; 
    }

    if(player.overlapping(invis4)){
      eMove4 = true; 
    }

    if(player.overlapping(invis5)){
      eMove5 = true; 
    }

    if(player.overlapping(invis6)){
      eMove6 = true; 
    }

  /*  if(player.overlapping(invis7)){
      eMove7 = true; 
    } */

    if(player.overlapping(invis8)){
      eMove8 = true; 
    }

    if(player.overlapping(invis9)){
      eMove9 = true; 
    }

    if(player.overlapping(invis10)){
      eMove10 = true; 
    }

    if(player.overlapping(invis11)){
      eMove11 = true; 
    }

    if(player.overlapping(invis12)){
      eMove12 = true; 
    }

    if(player.overlapping(invis13)){
      eMove13 = true; 
    }

    if(player.overlapping(invis14)){
      eMove14 = true; 
    }

  /*  if(player.overlapping(invis15)){
      eMove15 = true; 
    }*/
    
    if(player.overlapping(invis16)){
      eMove16 = true; 
    }
    
   /* if(player.overlapping(invis17)){
      eMove17 = true; 
    }
    
    if(player.overlapping(invis18)){
      eMove18 = true; 
    }
    */
    if(player.overlapping(invis19)){
      eMove19 = true; 
    }
    
    if(player.overlapping(invis20)){
      eMove20 = true; 
    }
    

    // Above is the invisible triggers for the eneies
    //below is their health bars

    if (bullets.overlaps(e1)){
     eh1.w -= 12.5;
    }
    if(eh1.w <= 0)
    {
      e1.remove();
      eh1.remove();

    }

    if (bullets.overlaps(e2)){
     eh2.w -= 12.5;
    }
    if(eh2.w <= 0)
    {
      e2.remove();
      eh2.remove();

    }

    if (bullets.overlaps(e3)){
     eh3.w -= 12.5;
    }
    if(eh3.w <= 0)
    {
      e3.remove();
      eh3.remove();

    }

    if (bullets.overlaps(e4)){
     eh4.w -= 12.5;
    }
    if(eh4.w <= 0)
    {
      e4.remove();
      eh4.remove();

    }

    if (bullets.overlaps(e5)){
     eh5.w -= 12.5;
    }
    if(eh5.w <= 0)
    {
      e5.remove();
      eh5.remove();

    }

    if (bullets.overlaps(e6)){
     eh6.w -= 12.5;
    }
    if(eh6.w <= 0)
    {
      e6.remove();
      eh6.remove();

    }

    /*if (bullets.overlaps(e7)){
     eh7.w -= 12.5;
    }
    if(eh7.w <= 0)
    {
      e7.remove();
      eh7.remove();
    }*/

    if (bullets.overlaps(e8)){
     eh8.w -= 12.5;
    }
    if(eh8.w <= 0)
    {
      e8.remove();
      eh8.remove();
    }

    if (bullets.overlaps(e9)){
     eh9.w -= 12.5;
    }
    if(eh9.w <= 0)
    {
      e9.remove();
      eh9.remove();
    }

    if (bullets.overlaps(e10)){
     eh10.w -= 12.5;
    }
    if(eh10.w <= 0)
    {
      e10.remove();
      eh10.remove();
    }

    if (bullets.overlaps(e11)){
     eh11.w -= 12.5;
    }
    if(eh11.w <= 0)
    {
      e11.remove();
      eh11.remove();
    }
    
    if (bullets.overlaps(e12)){
     eh12.w -= 12.5;
    }
    if(eh12.w <= 0)
    {
      e12.remove();
      eh12.remove();
    }

    if (bullets.overlaps(e13)){
     eh13.w -= 12.5;
    }
    if(eh13.w <= 0)
    {
      e13.remove();
      eh13.remove();
    }

    if (bullets.overlaps(e14)){
     eh14.w -= 12.5;
    }
    if(eh14.w <= 0)
    {
      e14.remove();
      eh14.remove();
    }

  /*  if (bullets.overlaps(e15)){
     eh15.w -= 12.5;
    }
    if(eh15.w <= 0)
    {
      e15.remove();
      eh15.remove();
    }
*/ 
    if (bullets.overlaps(e16)){
     eh16.w -= 12.5;
    }
    if(eh16.w <= 0)
    {
      e16.remove();
      eh16.remove();
    }

   /* if (bullets.overlaps(e17)){
     eh17.w -= 12.5;
    }
    if(eh17.w <= 0)
    {
      e17.remove();
      eh17.remove();
    }
*/
   /* if (bullets.overlaps(e18)){
     eh18.w -= 12.5;
    }
    if(eh18.w <= 0)
    {
      e18.remove();
      eh18.remove();
    }
*/
    if (bullets.overlaps(e19)){
     eh19.w -= 12.5;
    }
    if(eh19.w <= 0)
    {
      e19.remove();
      eh19.remove();
    }

    if (bullets.overlaps(e20)){
     eh20.w -= 12.5;
    }
    if(eh20.w <= 0)
    {
      e20.remove();
      eh20.remove();
    }

    //DEATH CARD
    if(totHealth == 0){
      screen = 101;
      enemies.remove(); 

    }



    

    if((eh1.w<= 0) && (eh2.w <= 0)&&(eh3.w<= 0) &&(eh4.w<= 0) &&(eh5.w<= 0) &&(eh6.w<= 0)  &&(eh8.w<= 0) &&(eh9.w<= 0) &&(eh10.w<= 0) &&(eh11.w<= 0) &&(eh12.w<= 0) &&(eh13.w<= 0) &&(eh14.w<= 0) &&(eh16.w<= 0) &&(eh19.w<= 0) &&(eh20.w<= 0)){
      g1.image = glow2Img; 
    } 
   
    eh3.x = e3.x; 
     eh3.y = e3.y - 25;

    eh4.x = e4.x; 
     eh4.y = e4.y - 25;

    
    if(g1.image == glow2Img){
      if(player.collides(lvl1End))
        {
          lvl1End.remove(); 
          platforms.removeAll(); 
          enemies.removeAll();
          corals.removeAll();
          oils.removeAll();
          coralBack.remove();
          enemyHealthBar.removeAll();
          rocks.removeAll();
          boundaries.removeAll();
          shopSND.stop(); 
          g1.remove(); 
          screen = 25; 
           player.x = -1000;
            player.vel.x = 0;
            player.vel.y = 0; 
          player.y = 350;
          player.x = 20; 
          shopSND.stop();
           //playLvl2();
       }
    }
   

  }
   //=========================================================== 

  
  // MERMAID MESSAGE
  if(screen == 25)
  {
      storeOpen();
      mermaid1a();
     musicToggle(); 
    if(kb.presses("n"))
    {
      screen = 251; 
    }
  }

  if (screen == 251)
  {
    mermaid1b();
     musicToggle(); 

    if (kb.presses('e'))
    {
      storeFront.y = -9000;
      storeBack.y = -90000;
      storeFront.layer = -1;
      storeBack.layer = -1;
      corals.removeAll();
      textBubbles.removeAll();
      kelpMermaid.remove();
      rocks.removeAll();
      playLvl2();
      screen = 40;
    }
  }
  
  if(screen == 40)
  { //lvl2: kelp forest // net enemy
    background(backImg2);
    playerSetUp();
    shopSND.stop(); 
     musicToggle(); 
    opening.stop(); 
    if(lvl1End) {lvl1End.y= -1000;}
   
    if(totHealth == 0){
      screen = 102;
      enemies.remove(); 

    }

    nets.debug = mouse.pressing();

    kelpBack1.x = player.x + 70;
    SND1.stop(); 
    
  // RADIO STUFF=================================  
    if (player.overlapping(invis3))
    {
      i2 = true; 
       txt3 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
      txt3.text = "Ugh, those stupid \ncommericial fishers.\nPress 'SHIFT' to hide behind \nthe kelp and rocks. \n Screw those guys. \n Press E to Continue";
        txt3.textSize = 10;
         canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
       player.vel.x = 0; 
       player.vel.y = 0; 
        invis3.remove(); 

    } 

    if((canMove == false) && i2 == true )
    {
    if(kb.presses("e"))
    {

      canMove = true;
    i2 = false; 
      textBubbles.remove(); 
    } 
    else
    {
      canMove = false; 
    }
    }
    //END OF TEXT STUFF --------------------------------------
    // net stuff ===================  

    // auto move net
  if (n1.y < -100) 
  {
      n1.vel.y = 5;
      n1.image = netImg1;
    } else if (n1.y > 360) {
      n1.vel.y = -5;
    n1.image = netImg2;
    }

    if(n1.overlapping(player))
    {
      if(canHurt == true){
      player.vel.y = n1.vel.y; 
      }
    }

    

    if (n99.y < -100) 
      {
          n99.vel.y = 4.5;
          n99.image = netImg1;
        } else if (n99.y > 360) {
          n99.vel.y = -4.5;
        n99.image = netImg2;
        }

        if(n99.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n1.vel.y; 
          }
        }

    //async net
    if (n2.x < 2000) 
    {
        n2.vel.x = 6;
        n2.image = netImg1;
      } else if (n2.x > 2700) {
        n2.vel.x = -6;
      }

      if(n2.overlapping(player))
      {
        if(canHurt == true)
        {
        player.vel.y = n2.vel.y; 
        }
      }

      if(player.x > 2000 && player.x < 2700)
      {
        if(!((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))))
        {
        n2.vel.x = 0;
        n2.vel.y = 7; 
        n2.image = netImg2; 
        n2.moveTo(player);
         netCount1 = 1; 
        }
      }
     if((n2.y > 360 && (!player.overlapping(n2))) || ((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))) && (n2.y > 150))
     {
      net2(); 
     } 

    
     if (n3.y < -100) 
        {
          n3.vel.y = 5;
          n3.image = netImg1;
        } 
     else if (n3.y > 360) 
       {
          n3.vel.y = -5;
        n3.image = netImg2;
        }

        if(n3.overlapping(player))
        {
          if(canHurt == true)
          {
          player.vel.y = n3.vel.y; 
          }
        }
    
    if (n4.x < 3200) 
      {
          n4.vel.x = 8;
          n4.image = netImg1;
        } else if (n4.x > 3500) {
          n4.vel.x = -3;
        }

        if(n4.overlapping(player))
        {
          if(canHurt == true)
          {
          player.vel.y = n4.vel.y; 
          }
        }

        if(player.x > 3200 && player.x < 3500)
        {
          if(!((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))))
          {
          n4.vel.x = 0;
          n4.vel.y = 7; 
          n4.image = netImg2; 
          n4.moveTo(player);
           netCount1 = 1; 
          }
        }
       if((n4.y > 360 && (!player.overlapping(n4))) || ((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))) && (n4.y > 150))
       {
        net4(); 
       } 
    

     if (n5.y < -100) 
      {
          n5.vel.y = 8;
          n5.image = netImg1;
        } else if (n5.y > 360) {
          n5.vel.y = -8;
        n5.image = netImg2;
        }

        if(n5.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n5.vel.y; 
          }
        }

    if (n6.y < -100) 
      {
          n6.vel.y = 8;
          n6.image = netImg1;
        } else if (n6.y > 360) {
          n6.vel.y = -3;
        n6.image = netImg2;
        }

        if(n6.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n6.vel.y; 
          }
        }

    if (n7.y < -100) 
      {
          n7.vel.y = 9.1;
          n7.image = netImg1;
        } else if (n7.y > 360) {
          n7.vel.y = -9.1;
        n7.image = netImg2;
        }

        if(n7.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n7.vel.y; 
          }
        }

    if (n8.y < -100) 
      {
          n8.vel.y = 3;
          n8.image = netImg1;
        } else if (n8.y > 360) {
          n8.vel.y = -3;
        n8.image = netImg2;
        }

        if(n8.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n8.vel.y; 
          }
        }

    if (n9.y < -100) 
      {
          n9.vel.y = 9.1;
          n9.image = netImg1;
        } else if (n9.y > 360) {
          n9.vel.y = -9.1;
        n9.image = netImg2;
        }

        if(n9.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n9.vel.y; 
          }
        }

      if((player.x >= 5300) && player.x <= 6200)
      {
        n10.x = player.x - 50; 
          if(!((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))))
          {
            n10.moveTo(player); 
          } 
          else
         
          {
             n10.x = player.x - 50; 
          } 
      }

    

    
    // end of net stuff ==================

   

    // end level ==========================
    if(player.collides(lvl2End))
    {
        lvl2End.remove();
      platforms.removeAll(); 
      kelps.removeAll();
      lamps.removeAll();
      nets.removeAll(); 
      rocks.removeAll(); 
      kelpBack1.remove(); 
      boundaries.removeAll();
      g1.remove();
      player.y = 350;
      player.x = 20; 
      screen = 250;
     // playLvl3();
     }
   }

    
    if(screen == 250)// sydney 
    {
      
      mermaid2a(); 
       musicToggle(); 
      storeOpen();
      storeBack.layer = 19;
      storeFront.layer = 30;
      storeFront.y = height/2;
      storeBack.y = height/2;
    if(kb.presses("n"))
      {
        screen = 255; 
      } 
    } 
    if( screen == 255)
    {
      mermaid2b();
       musicToggle(); 
      lvl2End.remove(); 

      if(kb.presses("e"))
      {
        player.y = 350;
          player.x = 20;
         storeFront.x = -9000000;
         storeBack.x = -900000;
        corals.removeAll();
        rocks.removeAll();
        textBubbles.removeAll();
         coralMermaid.remove();
          playLvl3();
        screen = 50;
      }
    }
    
  

  if (screen == 50){//lvl 3:sunken ship //plastic enemy
    background(16,14,54);
    playerSetUp();
    shopSND.stop(); 
     musicToggle(); 
  
    if(lvl2End) {lvl2End.y= -1000;}
    
    if(totHealth == 0){
      screen = 103;

    }
 


    player.debug = mouse.pressing(); 
 
    if (player.overlapping(invis5))
    {
      i2 = true;
      canMove = false;
      txt5 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
      txt5.text = "... Make sure to use your \nflashlight. This maze has \nsome fishy stuff \naround the corners.\nPress E to Continue";

        txt5.textSize = 10;
      player.vel.x = 0; 
       player.vel.y = 0; 
      invis5.remove(); 
    }
    
    if((canMove == false) && i2 == true )
      {
      if(kb.presses("e"))
      {
        canMove = true;
        i2 = false; 
        textBubbles.remove(); 
      } 
     else
        canMove = false;
        
      }

    light.x = player.x; 
    light.y = player.y; 
    g3.layer = light.layer;
    g3.y = player.y;
    g3.x = player.x; 

    if(kb.pressing('left') || kb.pressing('a')){
          light.x = player.x - 90;
          light.mirror.x = false; 
        Lcounter = 1; 
        }else if (kb.pressing('right') || kb.pressing('d')) {
          light.x = player.x + 90; 
          light.mirror.x = true; 
        Lcounter = 0; 
        } else if (kb.pressing('up') || kb.pressing('w')){
        Lcounter = -2; 
        light.rotation = -90; 
        light.y = player.y - 90;
        } else if (kb.pressing('down') || kb.pressing('s')){
        Lcounter = 2; 
       light.rotation = 90;
         light.y = player.y + 90;
        }
    if (Lcounter == 1){
     light.image = flashImg; 
      light.x = player.x - 90;
      light.rotation = 0; 

    } else if(Lcounter == 0) {
    light.mirror.x = true;
       light.image = flashImg; 
      light.rotation = 0; 
      light.x = player.x + 90; 

    } else if (Lcounter == -2 ){
       light.image = flashImg; 
      light.mirror.x = true;
      light.rotation = -90;
       light.y = player.y - 90;
      

    } else if (Lcounter == 2){
       light.image = flashImg; 
      light.mirror.x = true;
      light.rotation = 90; 
      light.y = player.y + 90;
      

    }

    
   if(light.overlapping(h1) || g3.overlapping(h1)){
      h1.moveTo(player);
     h1.speed = 1; 
      h1.image = hiderImg; 
    }

    if(light.overlapping(h2) || g3.overlapping(h2)){
      h2.moveTo(player);
       h2.speed = 1; 
      h2.image = hiderImg; 
    }

    if(light.overlapping(h3) || g3.overlapping(h3)){
      h3.moveTo(player);
       h3.speed = 1; 
      h3.image = hiderImg; 
    }

    if(light.overlapping(h4) || g3.overlapping(h4)){
      h4.moveTo(player);
      h4.image = hiderImg; 
       h4.speed = 1; 
    }

    if(light.overlapping(h5) || g3.overlapping(h5)){
      h5.moveTo(player);
       h5.speed = 1; 
      h5.image = hiderImg; 
    }

    if(light.overlapping(h6) || g3.overlapping(h6)){
      h6.moveTo(player);
      h6.image = hiderImg; 
       h6.speed = 1; 
    }

    if(light.overlapping(h7) || g3.overlapping(h7)){
      h7.moveTo(player);
      h7.image = hiderImg; 
       h7.speed = 1; 
    }

    if(light.overlapping(h8) || g3.overlapping(h8)){
      h8.moveTo(player);
      h8.image = hiderImg; 
       h8.speed = 1; 
    }
    if(light.overlapping(h9) || g3.overlapping(h9)){
      h9.moveTo(player);
      h9.image = hiderImg; 
       h9.speed = 1; 
    }

    if(light.overlapping(h10) || g3.overlapping(h10)){
      h10.moveTo(player);
      h10.image = hiderImg; 
       h10.speed = 1; 
    }

    if(light.overlapping(h11) || g3.overlapping(h11)){
      h11.moveTo(player);
      h11.image = hiderImg; 
       h11.speed = 1; 
    }
    if(light.overlapping(h12) || g3.overlapping(h12)){
      h12.moveTo(player);
      h12.image = hiderImg; 
       h12.speed = 1; 
    }
    if(light.overlapping(h13) || g3.overlapping(h13)){
      h13.moveTo(player);
      h13.image = hiderImg; 
       h13.speed = 1; 
    }
    if(light.overlapping(h14) || g3.overlapping(h14)){
      h14.moveTo(player);
      h14.image = hiderImg; 
       h14.speed = 1; 
    }
    if(light.overlapping(h15) || g3.overlapping(h15)){
      h15.moveTo(player);
      h15.image = hiderImg; 
       h15.speed = 1; 
    }
    if(light.overlapping(h16) || g3.overlapping(h16)){
      h16.moveTo(player);
      h16.image = hiderImg; 
       h16.speed = 1; 
    }

    if (bullets.overlaps(h1)){
     
          h1.remove();

        }
    if (bullets.overlaps(h2)){
    
      h2.remove();
     
    }
    if (bullets.overlaps(h3)){
    
      h3.remove();
     
    }
    if (bullets.overlaps(h4)){
    
      h4.remove();
    }
    if (bullets.overlaps(h5)){
     
      h5.remove();
    }  
    if (bullets.overlaps(h6)){
     
      h6.remove();
    }  
    if (bullets.overlaps(h7)){
     
      h7.remove();
    } 
    if (bullets.overlaps(h8)){
    
      h8.remove();
    }  
    if (bullets.overlaps(h9)){
     
      h9.remove();
    } 
    if (bullets.overlaps(h10)){
     
      h10.remove();
    }  
    if (bullets.overlaps(h11)){
    
      h11.remove();
    } 
    if (bullets.overlaps(h12)){
     
      h12.remove();
    }
    if (bullets.overlaps(h13)){
   
      h13.remove();
      
    }
    if (bullets.overlaps(h14)){
    
      h14.remove();
  
    }
    if (bullets.overlaps(h15)){
     
      h15.remove();
    }
    if (bullets.overlaps(h16)){
   
      h16.remove();
  
    }



 




    
    if(player.collides(lvl3End)){
        lvl3End.remove();
      platforms.remove(); 
      enemies.remove();
      lamps.remove();
      g1.remove();
      g3.y = -2000; 
      light.y = -2000; 
      hiders.remove();
      entrance.remove();
      player.y = 350;
      player.x = 20; 
      //playLvl4();
      screen = 27;
  }
  } //END LVL 3
  
  if(screen == 27)// natalia 
  {
    storeOpen();
    mermaid3a(); 
     musicToggle(); 
    storeFront.y = height/2;
    storeBack.y = height/2;
    storeFront.layer  = 30;
    storeBack.layer = 19;
    if(kb.presses("n"))
    {
      screen = 420; 
    } 

  } 

  if (screen == 420)
  {
    mermaid3b();
     musicToggle(); 
    if (kb.presses('e'))
    {
      player.y = 350;
      player.x = 20;
      
      storeFront.y = -9000;
      storeBack.y = -90000;
      storeFront.layer = -1;
      storeBack.layer = -1;
      corals.removeAll();
      rocks.removeAll();
      textBubbles.removeAll();
      shipMermaid.remove();
      playLvl4();
      screen = 60;
    }
  }
  
 

  if (screen == 60){ //lvl 4: whale fall // falling marine snow 
    background(backImg4);
    playerSetUp();
    lvl4Music(); 
     musicToggle(); 
    shopSND.stop(); 
   if(lvl3End) {lvl3End.y= -1000;}


    if(totHealth == 0){
      screen = 104;
      enemies.remove(); 
    }
    
eMove = false;
    if (player.overlapping(invis6))
      {
        i2 = true;
        canMove = false;
        txt6 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
        txt6.text = "bzzt... A dead whale is falling\n all around you.\n Don't get hit by the whale bits!\n press ENTER to dash around them\n Press E to Continue.";
          txt6.textSize = 10;
        player.vel.x = 0; 
         player.vel.y = 0; 
        invis6.remove(); 
      }

      if((canMove == false) && i2 == true )
        {
        if(kb.presses("e"))
        {
          canMove = true;
          i2 = false; 
          textBubbles.remove(); 
        } 
       else
          canMove = false;

        }
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
    

    if((player.overlaps(invis06)))
      {
        eMove21 = true; 
        eMove2 = true; 

      }
     
   
    if (bullets.overlaps(e21)){
     eh21.w -= 12.5;
    }
    if(eh21.w <= 0)
    {
      e21.remove();
      eh21.remove();
    }
   
    if(eMove21 == true )
      {
      e21.moveTowards(player);  
      e21.speed = 2.7;
      eh21.x = e21.x; 
       eh21.y = e21.y - 25;

      if(e21.x - player.x < 0)
      {
        e21.mirror.x = true;
      }
      else
      {
            e21.mirror.x = false;
      }
    }

    if (bullets.overlaps(e22)){
     eh22.w -= 12.5;
    }
    if(eh22.w <= 0)
    {
      e22.remove();
      eh22.remove();
    }

    if(eMove2 == true )
      {
      e22.moveTowards(player);  
      e22.speed = 2.7;
      eh22.x = e22.x; 
       eh22.y = e22.y - 25;

      if(e22.x - player.x < 0)
      {
        e22.mirror.x = true;
      }
      else
      {
            e22.mirror.x = false;
      }
    }

    
  if(d1.overlapping(player)){
    d1.y = 0; 
  }
    if(d2.overlapping(player)){
      d2.y = 0; 
    }
    if(d3.overlapping(player)){
      d3.y = 0; 
    }
    if(d4.overlapping(player)){
      d4.y = 0; 
    }
    
    if(d5.overlapping(player)){
      d5.y = 0; 
    }
    if(d6.overlapping(player)){
      d6.y = 0; 
    }
    if(d7.overlapping(player)){
      d7.y = 0; 
    }
    if(d8.overlapping(player)){
      d8.y = 0; 
    }
    if(d9.overlapping(player)){
      d9.y = 0; 
    } if(d10.overlapping(player)){
      d10.y = 0; 
    } if(d10.overlapping(player)){
      d10.y = 0; 
    }
    if(d11.overlapping(player)){
      d11.y = 0; 
    }
    if(d12.overlapping(player)){
      d12.y = 0; 
    }
    if(d13.overlapping(player)){
      d13.y = 0; 
    }
    if(d14.overlapping(player)){
      d14.y = 0; 
    }
    if(d15.overlapping(player)){
      d15.y = 0; 
    }
    if(d16.overlapping(player)){
      d16.y = 0; 
    } if(d17.overlapping(player)){
      d17.y = 0; 
    }
    if(d18.overlapping(player)){
      d18.y = 0; 
    }
    if(d19.overlapping(player)){
      d19.y = 0; 
    }
    if(d20.overlapping(player)){
      d20.y = 0; 
    }
    
   if((player.x <= 1000) && player.x >=300)
   {
    if (d1.y >= 500 || d1.overlapping(player)) 
    {
      d1.y = 0;
    d1.x = random(player.x - 750, player.x + 750);
    d1.vel.y = random(1, 4);
      d1.scale = random(0.5, 1); 
    } 

    if (d2.y >= 500 || d2.overlapping(player)) 
    {
      d2.y = 0;
    d2.x = random(player.x - 750, player.x + 750);
    d2.vel.y = random(1, 4);
      d2.scale = random(0.5, 1); 
    } 
    if (d3.y >= 500||  d3.overlapping(player)) 
    {
      d3.y = 0;
    d3.x = random(player.x - 750, player.x + 750);
    d3.vel.y = random(1, 4);
      d3.scale = random(0.5, 1); 

    } 
     if (d4.y >= 500||  d4.overlapping(player)) 
     {
       d4.y = 0;
     d4.x = random(player.x - 750, player.x + 750);
     d4.vel.y = random(1, 4);
       d4.scale = random(0.5, 1); 
     } 

     if (d5.y >= 500||  d5.overlapping(player)) 
     {
       d5.y = 0;
     d5.x = random(player.x - 750, player.x + 750);
     d5.vel.y = random(1, 4);
       d5.scale = random(0.5, 1); 
     } 
   } 
    else if ((player.x >= 3000) && player.x <= 4200){
      if (d1.y >= 500 || d1.overlapping(player)) 
         {
           d1.y = 0;
         d1.x = random(3000, 4200);
         d1.vel.y = random(6, 9);
           d1.scale = random(0.5, 1); 
         } 

         if (d2.y >= 500 || d2.overlapping(player)) 
         {
           d2.y = 0;
         d2.x = random(3000, 4200);
         d2.vel.y = random(6, 9);
           d2.scale = random(0.5, 1); 
         } 
         if (d3.y >= 500||  d3.overlapping(player)) 
         {
           d3.y = 0;
         d3.x = random(3000, 4200);
         d3.vel.y = random(6, 9);
           d3.scale = random(0.5, 1); 

         } 
          if (d4.y >= 500||  d4.overlapping(player)) 
          {
            d4.y = 0;
          d4.x = random(3000, 4200);
          d4.vel.y = random(6, 9);
            d4.scale = random(0.5, 1); 
          } 

          if (d5.y >= 500||  d5.overlapping(player)) 
          {
            d5.y = 0;
          d5.x = random(3000, 4200);
          d5.vel.y = random(6, 9);
            d5.scale = random(0.5, 1); 
          } 
     
   } else if ((player.x >= 5200) && (player.x <= 6200)){
      if (d1.y >= 500 || d1.overlapping(player)) 
        {
          d1.y = 0;
        d1.x = random(player.x - 750, player.x + 750);
        d1.vel.y = random(1, 4);
          d1.scale = random(0.5, 1); 
        } 

        if (d2.y >= 500 || d2.overlapping(player)) 
        {
          d2.y = 0;
        d2.x = random(player.x - 750, player.x + 750);
        d2.vel.y = random(1, 4);
          d2.scale = random(0.5, 1); 
        } 
        if (d3.y >= 500||  d3.overlapping(player)) 
        {
          d3.y = 0;
        d3.x = random(player.x - 750, player.x + 750);
        d3.vel.y = random(1, 4);
          d3.scale = random(0.5, 1); 

        } 
         if (d4.y >= 500||  d4.overlapping(player)) 
         {
           d4.y = 0;
         d4.x = random(player.x - 750, player.x + 750);
         d4.vel.y = random(1, 4);
           d4.scale = random(0.5, 1); 
         } 

         if (d5.y >= 500||  d5.overlapping(player)) 
         {
           d5.y = 0;
         d5.x = random(player.x - 750, player.x + 750);
         d5.vel.y = random(1, 4);
           d5.scale = random(0.5, 1); 
         }
      
   }
    

  if (d16.y >= 500 || d16.overlapping(player)) 
     {
       d16.y = 0;
     d16.x = random(3000, 4200);
     d16.vel.y = random(5, 8);
       d16.scale = random(0.5, 1); 
     } 

     if (d17.y >= 500 || d17.overlapping(player)) 
     {
       d17.y = 0;
     d17.x = random(3000, 4200);
     d17.vel.y = random(6, 8);
       d17.scale = random(0.5, 1); 
     } 
     if (d18.y >= 500||  d18.overlapping(player)) 
     {
       d18.y = 0;
     d18.x = random(3000, 4200);
     d18.vel.y = random(5, 8);
       d18.scale = random(0.5, 1); 

     } 
      if (d19.y >= 500||  d19.overlapping(player)) 
      {
        d19.y = 0;
      d19.x = random(3000, 4200);
      d19.vel.y = random(5, 8);
        d19.scale = random(0.5, 1); 
      } 

      if (d20.y >= 500||  d20.overlapping(player)) 
      {
        d20.y = 0;
      d20.x = random(3000, 4200);
      d20.vel.y = random(5, 8);
        d20.scale = random(0.5, 1); 
      } 
//
    if (d6.y >= 500 || d6.overlapping(player)) 
       {
         d6.y = 0;
       d6.x = random(1000, 1900);
       d6.vel.y = random(5, 8);
         d6.scale = random(0.5, 1); 
       } 

       if (d7.y >= 500 || d7.overlapping(player)) 
       {
         d7.y = 0;
       d7.x = random(1000, 1900);
       d7.vel.y = random(5, 8);
         d7.scale = random(0.5, 1); 
       } 
       if (d8.y >= 500||  d8.overlapping(player)) 
       {
         d8.y = 0;
       d8.x = random(1000, 1900);
       d8.vel.y = random(5, 8);
         d8.scale = random(0.5, 1); 

       } 
        if (d9.y >= 500||  d9.overlapping(player)) 
        {
          d9.y = 0;
        d9.x = random(1000, 1900);
        d9.vel.y = random(5, 8);
          d9.scale = random(0.5, 1); 
        } 

        if (d10.y >= 500||  d10.overlapping(player)) 
        {
          d10.y = 0;
        d10.x = random(1000, 1900);
        d10.vel.y = random(5, 8);
          d10.scale = random(0.5, 1); 
        } 

    
    if (d11.y >= 500 || d11.overlapping(player)) 
       {
         d11.y = 0;
       d11.x = 5400;
       d11.vel.y = 11;
         d11.scale = random(0.5, 1); 
       } 

       if (d12.y >= 500 || d12.overlapping(player)) 
       {
         d12.y = 0;
       d12.x = 5500;
       d12.vel.y = 8;
         d12.scale = random(0.5, 1); 
       } 
       if (d13.y >= 500||  d13.overlapping(player)) 
       {
         d13.y = 0;
       d13.x = 5700;
       d13.vel.y = 9;
         d13.scale = random(0.5, 1); 
       } 
        if (d14.y >= 500||  d14.overlapping(player)) 
        {
          d14.y = 0;
        d14.x = 5900;
        d14.vel.y = 4;
          d14.scale = random(0.5, 1); 
        } 

        if (d15.y >= 500||  d15.overlapping(player)) 
        {
          d15.y = 0;
        d15.x = 6100;
        d15.vel.y = 7;
          d15.scale = random(0.5, 1); 
        } 

    
    


    
    if(player.collides(lvl4End)){
      lvl4End.remove();
      enemies.removeAll();
      enemyHealthBar.removeAll(); 
      lamps.removeAll();
      debris.removeAll();
      rocks.removeAll();
      g1.remove(); 
      windySND.stop(); 
      boundaries.removeAll();

      player.y = 350;
      player.x = 20; 
      //playLvl5();
      screen = 778;
    }
   } 

if (screen == 778)
{
  storeOpen();
  mermaid4a();
   musicToggle(); 
  storeFront.y = height/2;
  storeBack.y = height/2;
  storeFront.layer  = 30;
  storeBack.layer = 19;
  if (kb.presses('n'))
  {
    screen = 777;
  }
}
  
  if (screen == 777)
  {
    mermaid4b();
     musicToggle(); 
    if (kb.presses('e'))
    {
      player.y = 350;
      player.x = 20;
      storeFront.y = -9000;
      storeBack.y = -90000;
      storeFront.layer = -1;
      storeBack.layer = -1;
      corals.removeAll();
      rocks.removeAll();
      textBubbles.removeAll();
      whaleMermaid.remove();
      playLvl5();
      screen =70;
    }
  }

  
  

  if (screen == 70){ //lvl 5: underwater volcano 
    background(backImg5);
    shopSND.stop(); 
    opening.stop(); 
     musicToggle(); 
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

    playerSetUp();
    if(totHealth == 0){
      screen = 105;
      enemies.remove(); 

    }
    if (player.colliding(volcanoFish)){
      totHealth --;
      healthBar.w = healthBar.w - 2;
    }

    if (player.overlapping(invis7))
      {
        i2 = true;
        canMove = false;
        txt7 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
        txt7.text = "RUN AWAY. \n Press E to Continue";
          txt7.textSize = 10;
        player.vel.x = 0; 
         player.vel.y = 0;
       
        
        invis7.remove(); 
      }

      if((canMove == false) && i2 == true )
        {
        if(kb.presses("e"))
        {
          canMove = true;
          i2 = false; 
          textBubbles.remove(); 
           volcanoFish.vel.x = -3.5; 
          stopper.remove(); 
          lvl5Music(); 
        } 
       else
          canMove = false;
        }

   

  
    if (f1.y >= 500 || f1.overlapping(player)) 
       {
         f1.y = 0;
       f1.x = random(-720, -1550);
       f1.vel.y = random(5, 8);
         f1.scale = random(0.5, 1); 
       } 

       if (f2.y >= 500 || f2.overlapping(player)) 
       {
         f2.y = 0;
       f2.x = random(-720, -1550);
       f2.vel.y = random(5, 8);
         f2.scale = random(0.5, 1); 
       } 
       if (f3.y >= 500||  f3.overlapping(player)) 
       {
         f3.y = 0;
       f3.x = random(-720, -1550);
       f3.vel.y = random(5, 8);
         f3.scale = random(0.5, 1); 

       } 
        if (f4.y >= 500||  f4.overlapping(player)) 
        {
          f4.y = 0;
        f4.x = random(-720, -1550);
        f4.vel.y = random(5, 8);
          f4.scale = random(0.5, 1); 
        } 

        if (f5.y >= 500||  f5.overlapping(player)) 
        {
         f5.y = 0;
        f5.x = random(-720, -1550);
        f5.vel.y = random(5, 8);
          f5.scale = random(0.5, 1); 
        } 
    if((player.overlaps(invis07)))
      {
        eMove2 = true; 
        eMove3 = true; 
        eMove4 = true;
        eMove5 = true;
        eMove6 = true;


      }


    if (bullets.overlaps(e20)){
     eh20.w -= 12.5;
    }
    if(eh20.w <= 0)
    {
      e20.remove();
      eh20.remove();
    }

    if(eMove2 == true )
      {
      e20.moveTowards(player);  
      e20.speed = 2.7;
      eh20.x = e20.x; 
       eh20.y = e20.y - 25;

      if(e20.x - player.x < 0)
      {
        e20.mirror.x = true;
      }
      else
      {
            e20.mirror.x = false;
      }
    }
//
  

    if (bullets.overlaps(e21)){
     eh21.w -= 12.5;
    }
    if(eh21.w <= 0)
    {
      e21.remove();
      eh21.remove();
    }

    if(eMove3 == true )
      {
      e21.moveTowards(player);  
      e21.speed = 2.7;
      eh21.x = e21.x; 
       eh21.y = e21.y - 25;

      if(e21.x - player.x < 0)
      {
        e21.mirror.x = true;
      }
      else
      {
            e21.mirror.x = false;
      }
    }


//

    if (bullets.overlaps(e22)){
     eh22.w -= 12.5;
    }
    if(eh22.w <= 0)
    {
      e22.remove();
      eh22.remove();
    }

    if(eMove4 == true )
      {
      e22.moveTowards(player);  
      e22.speed = 2.7;
      eh22.x = e22.x; 
       eh22.y = e22.y - 25;

      if(e22.x - player.x < 0)
      {
        e22.mirror.x = true;
      }
      else
      {
            e22.mirror.x = false;
      }
    }
//
    if (bullets.overlaps(e23)){
     eh23.w -= 12.5;
    }
    if(eh23.w <= 0)
    {
      e23.remove();
      eh23.remove();
    }

    if(eMove4 == true )
      {
      e23.moveTowards(player);  
      e23.speed = 2.7;
      eh23.x = e23.x; 
       eh23.y = e23.y - 25;

      if(e23.x - player.x < 0)
      {
        e23.mirror.x = true;
      }
      else
      {
            e23.mirror.x = false;
      }
    }


    if (bullets.overlaps(e24)){
     eh24.w -= 12.5;
    }
    if(eh24.w <= 0)
    {
      e24.remove();
      eh24.remove();
    }

    if(eMove5 == true )
      {
      e24.moveTowards(player);  
      e24.speed = 2.7;
      eh24.x = e24.x; 
       eh24.y = e24.y - 25;

      if(e24.x - player.x < 0)
      {
        e24.mirror.x = true;
      }
      else
      {
            e24.mirror.x = false;
      }
    }




    
    if(player.x <= -3300 && player.x >= -4750){
     light.y = player.y;
      g3.y = player.y;
      
      if(kb.pressing('left') || kb.pressing('a')){
            light.x = player.x - 90;
            light.mirror.x = false; 
          Lcounter = 1; 
          }else if (kb.pressing('right') || kb.pressing('d')) {
            light.x = player.x + 90; 
            light.mirror.x = true; 
          Lcounter = 0; 
          } else if (kb.pressing('up') || kb.pressing('w')){
          Lcounter = -2; 
          light.rotation = -90; 
          light.y = player.y - 90;
        light.x = player.x;
          } else if (kb.pressing('down') || kb.pressing('s')){
          Lcounter = 2; 
         light.rotation = 90;
           light.y = player.y + 90;
        light.x = player.x;
          }
      if (Lcounter == 1){
       light.image = flashImg; 
        light.x = player.x - 90;
        light.rotation = 0; 

      } else if(Lcounter == 0) {
      light.mirror.x = true;
         light.image = flashImg; 
        light.rotation = 0; 
        light.x = player.x + 90; 

      } else if (Lcounter == -2 ){
         light.image = flashImg; 
        light.mirror.x = true;
        light.rotation = -90;
         light.y = player.y - 90;


      } else if (Lcounter == 2){
         light.image = flashImg; 
        light.mirror.x = true;
        light.rotation = 90; 
        light.y = player.y + 90;


      }

    } else{
      light.y = -2000; 
      g3.y = -2000;
    }

    if(light.overlapping(h1) || g3.overlapping(h1)){
      h1.moveTo(player);
      h1.image = hiderImg; 
    }

    if(light.overlapping(h2) || g3.overlapping(h2)){
      h2.moveTo(player);
      h2.image = hiderImg; 
    }

    if(light.overlapping(h3) || g3.overlapping(h3)){
      h3.moveTo(player);
      h3.image = hiderImg; 
    }

    if(player >= 4750){
      light.remove(); 
    }
    

 

  
    if (f11.y >= 500 || f11.overlapping(player)) 
       {
         f11.y = 0;
       f11.x = random(-4900, -6550);
       f11.vel.y = random(1,4);
         f11.scale = random(0.5, 1); 
       } 

       if (f12.y >= 500 || f12.overlapping(player)) 
       {
         f12.y = 0;
       f12.x = random(-4900, -6550);
       f12.vel.y = random(1,4);
         f12.scale = random(0.5, 1); 
       } 
       if (f13.y >= 500||  f3.overlapping(player)) 
       {
         f13.y = 0;
       f13.x = random(-4900, -6550);
       f13.vel.y = random(1,4);
         f13.scale = random(0.5, 1); 

       } 
        if (f14.y >= 500||  f14.overlapping(player)) 
        {
          f14.y = 0;
        f14.x = random(-4900, -6550);
        f14.vel.y = random(1,4);
          f14.scale = random(0.5, 1); 
        } 

        if (f15.y >= 500||  f15.overlapping(player)) 
        {
         f15.y = 0;
        f15.x = random(-4900, -6550);
        f15.vel.y = random(1,4);
          f15.scale = random(0.5, 1); 
        } 

    if(f1.overlapping(player)){
      f1.y = 0; 
    }
      if(f2.overlapping(player)){
       f2.y = 0; 
      }
      if(f3.overlapping(player)){
        f3.y = 0; 
      }
      if(f4.overlapping(player)){
        f4.y = 0; 
      }

      if(f5.overlapping(player)){
        f5.y = 0; 
      }
    
      if(f11.overlapping(player)){
        f11.y = 0; 
      }
      if(f12.overlapping(player)){
        f12.y = 0; 
      }
      if(f13.overlapping(player)){
        f13.y = 0; 
      }
      if(f14.overlapping(player)){
        f14.y = 0; 
      }
      if(f15.overlapping(player)){
        f15.y = 0; 
      }

    
    if (player.overlapping(invis1))
    {
    
      txt7 = new textBubbles.Sprite(textBubbleImg, -6000, 200, "n");
      txt7.text = "HIDE.";
        txt7.textSize = 10;
      player.vel.x = 0; 
       player.vel.y = 0;
      invis1.remove(); 
    }

    if(volcanoFish.x <= -6800){
      vr114.remove();
      vr115.remove();
      vr118.remove(); 
      vCheck = true; 
    }
    if(((player.x - (volcanoFish.x - (volcanoFish.width/2))) >=0 ) && (vCheck == false)){
      totHealth --;
      healthBar.w = healthBar.w - 2;
    }

    if(kb.pressing('shift') && player.overlapping(rocks)){
      vCheck = true;
    } else{
      vCheck = false; 
    }

    if(volcanoFish.x <= -8000){
      volcanoFish.vel.x = 0; 
      vCheck = true; 
      volcanoFish.mirror.x = true; 
      volcanoFish.collider = "k"; 
        if(bullets.overlapping(volcanoFish)){
          vHealth = vHealth - .5; 
          vBar.w -= 12.5
          
        }
    }

    if(vHealth <= 0){
      volcanoFish.remove();
    }

    if(volcanoFish.overlapping(f11)){
      f11.y = 0;
    }
    if(volcanoFish.overlapping(f12)){
      f12.y = 0;
    }
    if(volcanoFish.overlapping(f13)){
      f13.y = 0;
    }
    if(volcanoFish.overlapping(f14)){
      f14.y = 0;
    }
    if(volcanoFish.overlapping(f15)){
      f15.y = 0;
    }
   

    
    if(player.collides(lvl5End))
    {
      lvl5End.remove();
      platforms.remove(); 
      enemies.remove();
      lamps.remove();

      player.y = 350;
      player.x = 20; 
      screen = 29;
     }
   }
  if(screen == 29){ // Abi mermaid/end screen?
   storeOpen();
    mermaid5a(); 
    storeFront.y = height/2;
    storeBack.y = height/2;
    storeFront.layer  = 30;
    storeBack.layer = 19;
    if(kb.presses("n"))
    {
      
      screen = 99; 
    } 

  } 
  if (screen == 99)
  {
    mermaid5b();
    if (kb.presses('e'))
    {
      player.y = 350;
      player.x = 20;
      storeFront.y = -9000;
      storeBack.y = -90000;
      storeFront.layer = -1;
      storeBack.layer = -1;
      corals.removeAll();
      rocks.removeAll();
      textBubbles.removeAll();
      volcanoMermaid.remove();
      screen =80;
    }
  }
  if(screen == 80)
  { //END SCREEN
    background(132, 141, 217);
    player.remove(); 
    enemies.removeAll();
    platforms.removeAll();
    boundaries.removeAll();
    light.remove(); 
    camera.x = 0; 
    
    fill(255);
    textSize(40);
    textAlign(CENTER, TOP);
    text("thank for playing", width / 2, height / 2 - 150);
  }

  if(screen == 100){
    deathCard1(); 
  }

  if(screen == 101){
    deathCard2(); 
  }

  if(screen == 102){
    deathCard3();  
  }

  if(screen == 103){
    deathCard4();
  }
  if(screen == 104){
    deathCard5(); 
  }
  if(screen == 105){
    deathCard6(); 
  } 
  


}//end of DRAW

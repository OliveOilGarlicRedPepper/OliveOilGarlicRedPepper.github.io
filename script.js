
/* VARIABLES */
let playButton, directionsButtaon, backButton, textTitle,menu, mb1, mb2, mback; //for homescreen
let player, ground, theEnd, bullets, light; //for ALL
let healthBar, enemyHealthBar, e1, eH1, e2, eh2, d1, d2, d3, d4, d5, d6,d21, healthFront, healthDMG; //for ALL

let yomama;

let sC1, sC2, sC3, sC4, sC5, sC6, sC7 = false; 

let fade; 
let fadeAmt = 1; 

let canMenu = true; 
let eC, eC1, eC2, eC3, eC4, eC5,eC6,eC7,eC8,eC9,eC10,eC11,eC12,eC13,eC14,eC15,eC16,eC17,eC18,eC19,eC20 = false; 
let loading = true; 

let weC1, weC2, weC3 = false; 

let veC1, veC2, veC3, veC4, veC5, veC6, veC7, veC8 = false; 

let goLvl1, goLvl2, goLvl3, goLvl4, goLvl5; 
let vHealth = 100; 
let hc1, hc2, hc3, hc4, hc5, hc6, hc7, hc8, hc9, hc10, hc11, hc12, hc13, hc14, hc15, hc16 = 100; 
let menuCheck = 0; 
let vCheck = false; 

let H1H, H2H, H3H, H4H, H5H, H6H, H7H, H8H, H9H, H10H, H11H, H12H, H13H, H14H, H15H, H16H, H17H, H18H, H19H, H20H = 0; 

let nC1, nC2, nC3, nC4, nC5, nC6, nC7, nC8, nC9, nC99 = 0; 

let deathCount, deathCount3, deathCount4, deathCount5,  deathCount6 = 0; 

let totHealth = 100;
let maxHealth = 100;
let enemies, kelps, platforms,lamps, rocks, invisibles, lanterns, corals, doors, deaths, oils, nets, debris, boundaries, angles, hiders, stores; //ALL INTERACTIVE SPRITES 

let storeFront, storeBack, storeBack2, storeBack3, storeBack4, storeBack5, storeBack6, storeFront2,storeFront3, storeFront4, storeFront5, storeFront6, tester, kelpMermaid, coralMermaid, shipMermaid,whaleMermaid,volcanoMermaid, uno, dos, tres, uno1, dos2, tres3, cuatro, cinco, seis,kelpMermaid2, coralMermaid2, shipMermaid2,whaleMermaid2,volcanoMermaid3,kelpMermaid1, coralMermaid1, shipMermaid1,whaleMermaid1,volcanoMermaid1; 
let txt3, txt4, txt5, txt6, txt7, txt8; 
let nextText, nextText1, nextText2, nextText3, nextText4, nextText5, nextText6, nextText7, nextText8, nextText9, nextText10, nextText11, nextText12, nextText13, nxtxt1, nxtxt2, nxtxt3, nxtxt4, nxtxt5, nxtxt6, nxtxt7;

let netCount1;
let entrance;
let g3; 
let volcanoFish; 

let slide1, slide2, slide3; 

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
let screen = 1010;
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
  menuBackImg = loadImage('assets/menuBack.png'); 

  lampImg = loadImage('assets/Radio.png');
  coralImg = loadImage('assets/Coral.png');
  clearImg = loadImage('assets/clear.png');
  clearImg1 = loadImage('assets/clear.png');
  textBubbleImg = loadImage('assets/RadioBubble.png');
  coralBackImg = loadImage('assets/CoralBack.png');
  endGoalImg = loadImage('assets/Lamp.png');

 groundImg1 = loadImage('assets/Stage1Floor.jpg');
  blockImg1 = loadImage('assets/Block1.png');
    blockImg1a =loadImage('assets/Block1a.png');
    blockImg1b =loadImage('assets/Block1b.png')
  rockBoundary = loadImage('assets/RockBoundary.png');
  hiderImg = loadImage('assets/darkEST.png'); 
  rockOneImg = loadImage('assets/RockOne.png');
  rockTwoImg = loadImage('assets/RockTwo.png');
  rockThreeImg = loadImage('assets/RockThree.png'); 
  healthBarImg = loadImage('assets/HealthFront.png');
healthImg = loadImage('assets/HealthBack.png'); 
  e1 = loadImage('assets/EnemyMove1.png');
  e2 = loadImage('assets/EnemyMove2.png');
  e3 = loadImage('assets/EnemyMove3.png');
  e4 = loadImage('assets/EnemyMove4.png');

  sl1 = loadImage('assets/Slideshow1.png');
  sl2 = loadImage('assets/Slideshow2.png');
  sl3 = loadImage('assets/Slideshow3.png');


 
  MerAbi1Img = loadImage('assets/LavaAbi1.png');
  MerAbi2Img = loadImage('assets/LavaAbi2.png');
  MerNat1Img = loadImage('assets/BlueTali1.png');
  MerNat2Img = loadImage('assets/BlueTali2.png');
  MerHgtv1Img = loadImage('assets/GlowHasset1.png');
  MerHgtv2Img = loadImage('assets/GlowHasset2.png');
  MerSyd1Img = loadImage('assets/GreenSydney1.png');
  MerSyd2Img = loadImage('assets/GreenSydney2.png');
  MerCal1Img = loadImage('assets/BlueCal1.png');
  MerCal2Img = loadImage('assets/BlueCal2.png');


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

  glowImg = loadImage('assets/Glow.png');
  glow2Img = loadImage('assets/Glow2.png');
  glow3Img = loadImage('assets/Glow3.png');
  backImg2 = loadImage('assets/Stage2Back.jpg');
  backImg4 = loadImage('assets/Stage4Back.jpg');
  backImg5 = loadImage('assets/Stage5Back.png');
  kelpImg = loadImage('assets/Kelp.png');
  blockImg2 = loadImage('assets/Block2.png');
  blockImg4 = loadImage('assets/Block4.png');
  blockImg5 = loadImage('assets/Block5.png');

  kelpBackImg = loadImage('assets/KelpGroupBack.png');
  kelpFrontImg = loadImage('assets/KelpGroupFront.png');

  groundImg2 = loadImage('assets/Stage2Floor.jpg');
  groundImg3 = loadImage('assets/Stage3Floor.jpg');
  groundImg4 = loadImage('assets/Stage4Floor.jpg');
  groundImg5 = loadImage('assets/Stage5Floor.png');
  storeFrontImg = loadImage('assets/StoreFront.png');
  storeBackImg = loadImage('assets/StoreBack.jpg');

  shipWreckImg = loadImage('assets/ShipEntrance.png'); 

  netImg1 = loadImage('assets/NetOpen.png');
  netImg2 = loadImage('assets/NetClosed.png');

 //chiseledFont = loadFont('assets/Chiseled-KExl.ttf');

  //SOUNDS
  eDeathSND = loadSound('assets/eDeathTEST.mp3');
  opening = loadSound('assets/music/l5.m4a');
  opening2 = loadSound('assets/music/l3.m4a');
  opening21 = loadSound('assets/music/l3.m4a');
  opening3 = loadSound('assets/music/new1.m4a');
  shopSND = loadSound('assets/music/new3.m4a');
  SND1 = loadSound('assets/music/mysong2.m4a');
  dramatic2SND = loadSound('assets/music/new5.m4a');
  dramaticSND = loadSound('assets/music/new4.m4a'); 
  windySND = loadSound('assets/music/windy.mp3'); 
  lvl2SND = loadSound('assets/music/LL1.m4a'); 
  lvl3SND = loadSound('assets/music/LL2.m4a');
  deepSND = loadSound('assets/music/r4.mp3'); 
  flutterSND = loadSound('assets/music/r3.mp3'); 
  radioSND = loadSound('assets/music/radio.m4a'); 
  //ANIMATIONS
  enemyMoveAni = loadAnimation(e1,e2,e3,e4);
  
   fishIdleAni = loadAnimation('assets/FishIdle1', 'assets/FishIdle3.png', 'assets/FishIdle4.png');
   fishMoveAni = loadAnimation('assets/FishMove1.png', 'assets/FishMove2.png', 'assets/FishMove3.png', 'assets/FishMove4.png', 'assets/FishMove3.png');

  fishDieAni = loadAnimation('assets/FishDie1.png', 'assets/FishDie2.png', 'assets/FishDie3.png', 'assets/FishDie4.png', 'assets/FishDie5.png');

  volcanoFishAni = loadAnimation('assets/VolcanoFish1', 'assets/VolcanoFish2.png','assets/VolcanoFish3.png', 'assets/VolcanoFish4.png', 'assets/VolcanoFish5.png');
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  lore1(); 
  music1();
  preloader.remove();
  rectMode(CORNER);

  

  titleTextImg.resize(500, 0);
  boatImg.resize(100,0);// (controls width, 0)
  healthImg.resize(130,20);
  healthBarImg.resize(220,0);
  coralBackImg.resize(1600,0);
  kelpBackImg.resize(windowWidth,0);
  kelpFrontImg.resize(500,0);
  platImg.resize(windowWidth, 0);
  lampImg.resize(100, 0);
  kelpImg.resize(150, 0);
  coralImg.resize(100, 0);
  textBubbleImg.resize(265,0);
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
  menuBackImg.resize(windowWidth, 0);

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

  sl1.resize(windowWidth/1.55, 0); 
  sl2.resize(windowWidth/1.55, 0);
  sl3.resize(windowWidth/1.55, 0);

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

  // musicToggle(); 


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

  nexts = new Group(); 
  nexts.collider = "k"; 

  deaths = new Group(); 
  deaths.collider = "n"; 

  oils = new Group();
  oils.collider = "n"; 
  oils.color = "purple"; 
  oils.image = oilImg;

  nets = new Group();
  nets.collider = "n"; 
  nets.color = "white";
  nets.layer = 100; 

  hiders = new Group();
  hiders.collider = "k";
  hiders.color = color(16,14,54);

  

  debris = new Group(); 
  debris.collider = "n";
  debris.color = "green"; 

  boundaries = new Group(); 
  boundaries.collider = "s"; 
  boundaries.layer = 78; 

  stores = new Group(); 
  stores.collider = "n";
  
  
  
//LAYERING
 lamps.layer = 2.5; //light is layer 2, player is layer 3, healthbar is layer 7 & 8, coral back is 2
 textBubbles.layer = 1000; 
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
  if(screen == 1010){ // LORE #1 
    music1();
    background(0,0,0);

    
   
    if(nxtxt1.mouse.presses()){
      screen = 1011;
      slide1.remove();
      nxtxt1.remove(); 
      lore2(); 
    }
  }

  if(screen == 1011){ //LORE #2 

    background(0,0,0);
   
    if(nxtxt2.mouse.presses()){
      screen = 1012;
      slide2.remove();
      nxtxt2.remove(); 
      lore3(); 
    }

  }


  if(screen == 1012){ //LORE #3 

    background(0,0,0);
   
    if(nxtxt3.mouse.presses()){
      screen = 0;
      slide3.remove();
      nxtxt3.remove(); 
      homeScreen(); 
    }


  } // END LORE BIT, BEGIN TITLE SCREEN TO MAIN GAME
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  if (screen == 0) {
    background(titleBackImg);
    music1();
  //  musicToggle(); 
    if(directionsButton.mouse.presses()){
      screen = 1; //TSA INFO 
      directionsScreen();
      
     
    } else if (playButton.mouse.presses()){
      screen = 2;
      tutorialScreenAssests();
     
      
    }
  }


  if (screen == 1 ){//TSA INFORMATION  

    if(backButton.mouse.presses()){
      screen = 0;
    
      

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
      opening.stop(); 
      
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
      opening.stop(); 
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
      playerSetUp();
       hide(); 
      opening.stop(); 
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
      opening.stop(); 
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
      opening.stop(); 
      playLvl5(); 
    }
  }




  
  //FIRST GAME ROOOM TUTORIAL~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (screen == 2){ //TUTORIAL SETUP
    background(backImg);
    opening.stop(); 
    tutMusic(); 
    //player.debug = mouse.pressing();
    player.mirror.x = true;
    //invisibles.debug = mouse.pressing();
    //enemies.debug= mouse.pressing(); 
 
    playerSetUp();
    ceiling.x = player.x + 90; 

    if (menuCheck % 2 != 0){
      eMove = false; 
      e1.vel.x = 0; 
      e2.vel.x = 0;
      e1.vel.y = 0;
      e2.vel.y = 0; 
      canHurt = false; 
    } else {
      if(eC == true){
      eMove = true; 
      }
      canHurt = true; 
    }

   
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
     canMenu = false; 
     txt = new textBubbles.Sprite(textBubbleImg, 660, 190, "n");
      txt.text = "Welcome Unit F15H. \nFirst day, eh? This\ncalls for a tutorial!\nThat green thing above\nyou is your health bar.\nDon't let it drop. \n (Press E to Continue)";
      txt.textSize = 15;
       canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
     player.vel.x = 0; 
     player.vel.y = 0; 
      invis1.remove(); 
     radioStatic();
     
  
     }
    /*ALL TEXT STUFF */ 
     if((canMove == false) && i1 == true ){
          if(kb.presses("e")){
            radioSND.stop(); 
            radioSND.setVolume(0); 
            canMove = true;
            canMenu = true; 
           i1 = false; 
            textBubbles.remove(); 
          } else{
            canMove = false;
            
            canMenu = false; 
    
          }
      }
     //USED FOR ALL TEXT BUBBLES 
    //END EVENT NUMBER 1: RADIO1 

    /* EVENT NUMBER 2: RADIO 2 ENEMY BATTLES */
    if (player.overlapping(invis2)){
      i2 = true; 
      canMenu = false; 
      
       txt = new textBubbles.Sprite(textBubbleImg, 1460, 195, "n");
      txt.text = "Watch out! \nThose poor fish have \nbeen corrupted by human \nchemicals. They're no \nlonger beings of the sea.\n*Press 'SPACE' to shoot.*\n (Press E to Continue)";
        txt.textSize = 15;
         canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
       player.vel.x = 0; 
       player.vel.y = 0; 
        invis2.remove(); 
      radioStatic();
    }

    if((canMove == false) && i2 == true ){
        if(kb.presses("e")){
          eMove = true;
          radioSND.stop(); 
          radioSND.setVolume(0); 
          opening2.stop();
          SRSMusic();
          sC1 = true; 
          opening2.setVolume(0);
          canMove = true;
          canMenu = true; 
          eC = true; 
        i2 = false; 
          textBubbles.remove(); 
        } else{
          sC1 = false; 
          canMove = false; 
          canMenu = false; 

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
      theEnd.y = -1000;  
      enemies.removeAll(); 
      rocks.removeAll();
      lamps.removeAll();
      invisibles.removeAll();
      corals.removeAll();
        opening2.stop(); 
      textBubbles.removeAll();
      enemyHealthBar.removeAll();
        boundaries.removeAll();
        shopSND.stop(); 
        ground.image = clearImg; 
        opening3.stop();
        opening3.setVolume(0);
        ceiling.image = clearImg; 
      g1.y = -1000; 
      screen = 30; 
       // playLvl1(); 
       player.x = -1000;
        player.vel.x = 0;
        player.vel.y = 0; 
        player.y = 350;
        playLvl1();
      }
    }

    
  }

  //END TUTORIAL SETUP, BEGIN THE REAL GAME :D 

  if(screen == 30){ //lvl 1: coral reef//chemical enemy
    background(backImg);
    if(theEnd) {theEnd.y= -1000;}
    coralBack.x = player.x + 70; 
    invisibles.debug = mouse.pressing();
   // player.debug = mouse.pressing();
    playerSetUp();
    ceiling.x = player.x + 90; 
    lvl1Music(); 
    
    SND1.stop(); 
  /*  if (!txt4)
    {
      
     txt4 = new textBubbles.Sprite(textBubbleImg, 450, -200, "n");
      txt4.text = "Watch out for enemies! \nThey're EVERYWHERE!!\nShoot them all to light the lamp. \n Press E to continue";
        txt4.textSize =15;
      player.vel.x = 0; 
       player.vel.y = 0; 

    }
   
    // RADIO STUFF=================================
/*  if (player.overlapping(invis0))
      {
        canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
        canMenu = false; 
        if (!txt4)
        {
          txt4 = new textBubbles.Sprite(textBubbleImg, 470, 200, "n");
        

        }
        txt4.text = "Watch out for enemies! \nThey're EVERYWHERE!!\nShoot them all to light the lamp. \n Press E to continue";
          txt4.textSize =15;
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
        canMenu = true; 
        i2 = false;
      }
    }
// */
    if(player.overlapping(invis100))
      { 
         canMove = false;
        canMenu = false; 
        txt5.y = 200; 
          
        if(deathCount == 0){
          txt5.text = "Welcome to the Coral\nReef! Beware, those oil\nspills are good hiding\nplaces. Eliminate ALL\ncorrupted fish, and do\nit quick! I need help!\n(Press E to continue)";
        } else if (deathCount == 1){
          txt5.text = "Yikes... that looked\nlike it hurt… But don't\nforget! You must\neliminate EVERY SINGLE\nfish to continue.\n(Press E to continue)" 
        } else if (deathCount == 2){
          txt5.text = "Struggling, huh? Maybe\nmaking a mad dash to the\nend and using the rocks\nto trap them will help.\nThat's what S4LM0N did..\n(Press E to continue)"
        } else if(deathCount >= 3){
          txt5.text = "...Even S4LM0N got\nfurther than this...\n(Press E to continue)" 
        }
          txt5.textSize = 15;
    
        player.vel.x = 0; 
         player.vel.y = 0; 
        i2 = true; 
        

        if(kb.presses("e"))
        {

          txt5.remove(); 
          invis100.remove();
          canMove = true;
           i2 = false; 
          canMenu = true; 
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
    if (menuCheck % 2 != 0){
      eMove = false; 
      e1.vel.x = 0; 
      e2.vel.x = 0;
      e1.vel.y = 0;
      e2.vel.y = 0; 
      canHurt = false; 
    } else {
      if(eC1 == true){
      eMove = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove2 = false; 
      e3.vel.x = 0; 
      e3.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC2 == true){
      eMove2 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove3 = false; 
      e4.vel.x = 0; 
      e4.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC3 == true){
      eMove3 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove4 = false; 
      e5.vel.x = 0; 
      e5.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC4 == true){
      eMove4 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove6 = false; 
      e6.vel.x = 0; 
      e6.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC6 == true){
      eMove6 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove8 = false; 
      e8.vel.x = 0; 
      e8.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC8 == true){
      eMove8 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove9 = false; 
      e9.vel.x = 0; 
      e9.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC9 == true){
      eMove9 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove10 = false; 
      e10.vel.x = 0; 
      e10.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC10 == true){
      eMove10 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove11 = false; 
      e11.vel.x = 0; 
      e11.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC11 == true){
      eMove11 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove12 = false; 
      e12.vel.x = 0; 
      e12.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC12 == true){
      eMove12 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove13 = false; 
      e13.vel.x = 0; 
      e13.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC13 == true){
      eMove13 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove14 = false; 
      e14.vel.x = 0; 
      e14.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC14 == true){
      eMove14 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove16 = false; 
      e16.vel.x = 0; 
      e16.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC16 == true){
      eMove16 = true; 
      }
      canHurt = true; 
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
    if (menuCheck % 2 != 0){
      eMove19 = false; 
      e19.vel.x = 0; 
      e19.vel.y = 0;
      canHurt = false; 
    } else {
      if(eC19 == true){
      eMove19 = true; 
      }
      canHurt = true; 
    }
/*
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
    if (menuCheck % 2 != 0){
      eMove20 = false; 
      e20.vel.x = 0; 
      e20.vel.x = 0;
      canHurt = false; 
    } else {
      if(eC20 == true){
      eMove20 = true; 
      }
      canHurt = true; 
    }
    */
// Below is invisible triggers for enemies
    
    if(player.overlaps(invis1)){
      eMove = true;
      eC1 = true; 
      
    }

     if(player.overlaps(invis2)){
        eMove2 = true; 
        eC2 = true; 
      }

    if(player.overlaps(invis3)){
      eMove3 = true; 
       eC3 = true; 
    }

    if(player.overlaps(invis4)){
      eMove4 = true; 
       eC4 = true; 
    }

    if(player.overlaps(invis5)){
      eMove5 = true; 
       eC5 = true; 
    }

    if(player.overlaps(invis6)){
      eMove6 = true; 
       eC6 = true; 
    }

  /*  if(player.overlapping(invis7)){
      eMove7 = true; 
    } */

    if(player.overlaps(invis8)){
      eMove8 = true; 
       eC8 = true; 
    }

    if(player.overlaps(invis9)){
      eMove9 = true; 
       eC9 = true; 
    }

    if(player.overlaps(invis10)){
      eMove10 = true; 
       eC10 = true; 
    }

    if(player.overlaps(invis11)){
      eMove11 = true; 
       eC11 = true; 
    }

    if(player.overlaps(invis12)){
      eMove12 = true; 
       eC12 = true; 
    }

    if(player.overlaps(invis13)){
      eMove13 = true; 
       eC13 = true; 
    }

    if(player.overlaps(invis14)){
      eMove14 = true;
       eC14 = true; 
    }

  /*  if(player.overlapping(invis15)){
      eMove15 = true; 
    }*/
    
    if(player.overlaps(invis16)){
      eMove16 = true; 
       eC16 = true; 
    }
    
   /* if(player.overlapping(invis17)){
      eMove17 = true; 
    }
    
    if(player.overlapping(invis18)){
      eMove18 = true; 
    }
    */
    if(player.overlaps(invis19)){
      eMove19 = true; 
       eC19 = true; 
    }
    
    if(player.overlaps(invis20)){
      eMove20 = true; 
       eC20 = true; 
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
/*
    if (bullets.overlaps(e20)){
     eh20.w -= 12.5;
    }
    if(eh20.w <= 0)
    {
      e20.remove();
      eh20.remove();
    }
*/
    //DEATH CARD
    if(totHealth == 0){
      screen = 101;
       deathCount++;
      enemies.remove(); 

    }



    

    if((eh1.w<= 0) && (eh2.w <= 0)&&(eh3.w<= 0) &&(eh4.w<= 0) &&(eh5.w<= 0) &&(eh6.w<= 0)  &&(eh8.w<= 0) &&(eh9.w<= 0) &&(eh10.w<= 0) &&(eh11.w<= 0) &&(eh12.w<= 0) &&(eh13.w<= 0) &&(eh14.w<= 0) &&(eh16.w<= 0) &&(eh19.w<= 0)){
      g1.image = glow2Img; 
    } 
   
    eh3.x = e3.x; 
     eh3.y = e3.y - 25;

    eh4.x = e4.x; 
     eh4.y = e4.y - 25;

    
    if(g1.image == glow2Img){
      if(player.collides(lvl1End))
        {
          lvl1End.y = -1000; 
          platforms.removeAll(); 
          enemies.removeAll();
          corals.removeAll();
          oils.removeAll();
          coralBack.remove();
          enemyHealthBar.removeAll();
          rocks.removeAll();
          boundaries.removeAll();
  //        textBubbles.removeAll();
          txt5.y = -1000;
          g1.y=-1000; 
          screen = 25; 
          shopSND.stop(); 
           player.x = -1000;
            player.vel.x = 0;
            player.vel.y = 0; 
          player.y = 350;
          player.x = 20; 
          SND1.stop();
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
    storeBack2.y = height/2;
    storeFront2.y = height/2;
   kelpMermaid.y = (height/2)+40;
    if(nextText.mouse.presses())
    {
   //    kelpMermaid1.image = MerCal2Img;
      if(kelpMermaid){
        kelpMermaid.image = MerCal2Img;
      }
      screen = 251;
       kelpMermaid.y = -1000;
  
     nextText.y = -1000;
     // background() = red;

    }
  }

  if (screen == 251)
  {
    mermaid1b();
    kelpMermaid1.y = (height/2)+40;
    

    if(nextText1.mouse.presses())
    {
     // storeFront.y = -9000;
     // storeBack.y = -90000;
     // storeFront.layer = -1;
     // storeBack.layer = -1;
     storeBack2.y = -1000;
   storeFront2.y = -1000;
    //  storeBack21.remove();
    //  storeFront21.remove(); 
      corals.removeAll();
      kelpMermaid1.y = -1000;
      textBubbles.removeAll();
      //kelpMermaid1.remove();
      rocks.removeAll();
     // stores.removeAll(); 
      nextText1.y = -1000;
      playLvl2();
      screen = 40;
    }
  }
  
  if(screen == 40)
  { //lvl2: kelp forest // net enemy
    background(backImg2);
    playerSetUp();
    SND1.stop(); 
   
    
    opening.stop(); 
    lvl2Music(); 
    if(lvl1End) {
    lvl1End.y = -1000;
    }
   
    if(totHealth == 0){
       deathCount3++;
      screen = 102;
      enemies.remove(); 

    }

  

  //  nets.debug = mouse.pressing();

    kelpBack1.x = player.x + 70;
    SND1.stop(); 
    
  // RADIO STUFF=================================  
    if (player.overlapping(invis3))
    {
       canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
      
       txt3.y = 200;
      if(deathCount3 == 0){
      txt3.text = "Welcome to my mojo dojo\ncasa kelp! Uh, these\nnets kinda have a mind\nof their own...Press\n 'SHIFT' to hide behind\nkelp and rocks. Don’t\nget caught!\n(Press E to Continue)";
      }else if (deathCount3 == 1){
         txt3.text = "Commercial fishing has\ncursed this realm once\nmore. Stay alert. If\nyou're not hiding some\nnets will chase you.\n(Press E to Continue)";
      } else if (deathCount3 == 2){
         txt3.text = "Don't fall here... you\nare much too important.\nAnd be aware that the\nmenu is unavailable when\nyou are being chased...\n (Press E to Continue)";
      } else if (deathCount3 >= 3){
         txt3.text = "Please.\nThe Kelp Mermaid needs\nyou.\n(Press E to Continue)";
      }
        txt3.textSize = 14.5;
      

       player.vel.x = 0; 
       player.vel.y = 0; 
       i2 = true; 

    } 

    if((canMove == false) && i2 == true )
    {
      
    if(kb.presses("e") && (menuCheck % 2 == 0) )
    {
      txt3.y = -7200; 
      invis3.remove();

    
      canMove = true;
      
    i2 = false; 
       
    } 
    else
    {
    //  canMenu = false; 
      canMove = false; 
    }
    }
    //END OF TEXT STUFF --------------------------------------
    // net stuff ===================  

    if (menuCheck % 2 != 0){
    n1.vel.y=0; 
      n99.vel.y = 0; 
  n2.vel.y = 0; 
      n3.vel.y = 0;
    
      n5.vel.y = 0;
      n6.vel.y=0;
      n7.vel.y=0;
      n8.vel.y=0;
      n9.vel.y = 0; 
      
      
    
      canHurt = false; 
    } else {

   
      if(nC1 == 0){
        n1.vel.y = 5
      }else if (nC1 == 1){
      n1.vel.y = -5;
      }

      if(nC99 == 0){
        n99.vel.y = 4.5;
      }else if (nC99 == 1){
      n99.vel.y = -4.5;
      }

      if(nC2 == 0){
        n2.vel.x = 6;
      }else if (nC2 == 1){
      n2.vel.x = -6;
      }

      if(nC3 == 0){
        n3.vel.y = 5;
      }else if (nC3 == 1){
      n3.vel.y = -5;
      }

      if(nC4 == 0){
        n4.vel.x = 8;
      }else if (nC4 == 1){
      n4.vel.x = -3;
      }

      if(nC5 == 0){
        n5.vel.y = 8;
      }else if (nC5 == 1){
      n5.vel.y = -8;
      }

      if(nC6 == 0){
        n6.vel.y = 8;
      }else if (nC6== 1){
      n6.vel.y = -3;
      }

      if(nC7 == 0){
        n7.vel.y = 9.1;
      }else if (nC7== 1){
      n7.vel.y = -9.1;
      }

      if(nC8 == 0){
        n8.vel.y = 3;
      }else if (nC8== 1){
      n8.vel.y = -3;
      }

      if(nC9 == 0){
        n9.vel.y= 9.1;
      }else if (nC9== 1){
      n9.vel.y = -9.1;
      }
      if(!((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))))
        {
      canHurt = true;
        }
    }


    // auto move net

  if (n1.y < -100) 
  {
      nC1 = 0;
      n1.vel.y = 5;
      n1.image = netImg1;
    } else if (n1.y > 360) {
      nC1 = 1;
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
        nC99 = 0;
          n99.vel.y = 4.5;
          n99.image = netImg1;
        } else if (n99.y > 360) {
        nC99 = 1; 
          n99.vel.y = -4.5;
        n99.image = netImg2;
        }

      
        if(n99.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n99.vel.y; 
          }
        }
      
    //async net
  
    if (n2.x < 2500) 
    {
      nC2 = 0; 
        n2.vel.x = 6;
        n2.image = netImg1;
      } else if (n2.x > 3100) {
      nC2 = 1; 
        n2.vel.x = -6;
      }
  
if(canHurt == true){
      if(n2.overlapping(player))
      {
        if(canHurt == true)
        {
        player.vel.y = n2.vel.y; 
        }
      }
}
      if((player.x >= 2500) && player.x <= 3100)
      {
        canMenu = false;
        if(!((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))) )
        {
       
           
        n2.vel.x = 0;
        n2.vel.y = 7; 
        n2.image = netImg2; 
        n2.moveTo(player);
         netCount1 = 1; 
           canMenu = false;
        } 
       
      }else{
        canMenu = true; 
      }
     if(((n2.y > 360 && (!player.overlapping(n2))) || ((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))) && (n2.y > 150)))
     {
      
      net2(); 
     } 

   
     if (n3.y < -100) 
        {
          nC3 = 0; 
          n3.vel.y = 5;
          n3.image = netImg1;
        } 
     else if (n3.y > 360) 
       {
         nC3 = 1; 
          n3.vel.y = -5;
        n3.image = netImg2;
        }
    
if(canHurt == true){
        if(n3.overlapping(player))
        {
          if(canHurt == true)
          {
          player.vel.y = n3.vel.y; 
          }
        }
}
    
    if (n4.x < 3700) 
      {
        nC4 = 0; 
          n4.vel.x = 8;
          n4.image = netImg1;
        } else if (n4.x > 4200) {
        nC4 = 1; 
          n4.vel.x = -3;
        }
    
if(canHurt == true){
        if(n4.overlapping(player))
        {
          if(canHurt == true)
          {
          player.vel.y = n4.vel.y; 
          }
        }
}

        if((player.x >= 3700) && player.x <= 4200)
        {
          canMenu = false;
          if((!((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks)))))
          {
       
          n4.vel.x = 0;
          n4.vel.y = 7; 
          n4.image = netImg2; 
          n4.moveTo(player);
           netCount1 = 1; 
      
          }
          
        }else{
          canMenu = true; 
        }
       if((n4.y > 360 && (!player.overlapping(n4))) || ((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))) && (n4.y > 150))
       {
  
        net4(); 
       } 
    

     if (n5.y < -100) 
      {
        nC5 = 0; 
          n5.vel.y = 8;
          n5.image = netImg1;
        } else if (n5.y > 360) {
        nC5 = 1; 
          n5.vel.y = -8;
        n5.image = netImg2;
        }

if(canHurt == true){
        if(n5.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n5.vel.y; 
          }
        }
}

    if (n6.y < -100) 
      {
        nC6 = 0; 
          n6.vel.y = 8;
          n6.image = netImg1;
        } else if (n6.y > 360) {
          n6.vel.y = -3;
        nC6 = 1; 
        n6.image = netImg2;
        }

if(canHurt == true){
        if(n6.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n6.vel.y; 
          }
        }
}


    if (n7.y < -100) 
      {
        nC7 = 0; 
          n7.vel.y = 9.1;
          n7.image = netImg1;
        } else if (n7.y > 360) {
        nC7 = 1; 
          n7.vel.y = -9.1;
        n7.image = netImg2;
        }

if(canHurt == true){
        if(n7.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n7.vel.y; 
          }
        }
}

    if (n8.y < -100) 
      {
        nC8 = 0; 
          n8.vel.y = 3;
          n8.image = netImg1;
        } else if (n8.y > 360) {
        nC8 = 1; 
          n8.vel.y = -3;
        n8.image = netImg2;
        }
if(canHurt == true){
        if(n8.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n8.vel.y; 
          }
        }
}

    if (n9.y < -100) 
      {
        nC9 = 0; 
          n9.vel.y = 9.1;
          n9.image = netImg1;
        } else if (n9.y > 360) {
        nC9 = 1; 
          n9.vel.y = -9.1;
        n9.image = netImg2;
        }

if(canHurt == true){
        if(n9.overlapping(player))
        {
          if(canHurt == true){
          player.vel.y = n9.vel.y; 
          }
        }
}

      if((player.x >= 6000) && player.x <= 6900)
      {
        canMenu = false; 
        n10.x = player.x - 50; 
          if(!((kb.pressing('shift')) && ((player.overlapping(kelps)) || player.overlapping(rocks))))
          {
            n10.moveTo(player); 
          } 
          else
         
          {
            
             n10.x = player.x - 50; 
          } 
      } else if ((player.x >= 2500) && player.x <= 3100){
        canMenu = false; 
      } else if ((player.x >= 3700) && player.x <= 4200){
        canMenu = false; 
      } else {
        canMenu = true; 
      }

    

    
    // end of net stuff ==================

   

    // end level ==========================
    if(player.collides(lvl2End))
    {
        lvl2End.y = -2000;
      platforms.removeAll(); 
      kelps.removeAll();
      lamps.removeAll();
      nets.removeAll(); 
   //   textBubbles.removeAll(); 
      rocks.removeAll(); 
      kelpBack1.remove(); 
      boundaries.removeAll();
      g1.y = -2000;
      txt3.y = -1000;
      lvl2SND.stop();
      player.y = 350;
      player.x = 20; 
      screen = 250;
     // playLvl3();
     }
   }

    
    if(screen == 250)// sydney 
    {
     // background(storeBackImg);
       storeOpen();
   mermaid2a(); 
      storeBack3.y = height/2;
      storeFront3.y = height/2;
    //   coralMermaid.y = (height/2)+40;
      
     
    /*  
      storeBack.layer = coralMermaid.layer -1;
      storeFront.layer = coralMermaid.layer +1;
      storeFront.y = height/2;
      storeBack.y = height/2;
      storeBack3.y = height/2;
      storeFront3.y = height/2;
      
      if (storeFront.layer < coralMermaid.layer)
      {
        storeFront.layer = coralMermaid.layer +1;
      }
      if (storeBack.layer > coralMermaid.layer)
      {
        storeBack.layer = coralMermaid.layer -1;
      }
      */
      if (storeFront3.layer < coralMermaid.layer +1)
      {
        storeFront3.layer = coralMermaid.layer +1;
      }
      if (storeBack3.layer > coralMermaid.layer )
      {
        storeBack3.layer = coralMermaid.layer -1;
      }
      
    if(nextText2.mouse.presses())
      {
       
          if(coralMermaid){
            coralMermaid.image = MerSyd2Img;
          }
        screen = 255; 
        nextText2.y = -2000;
      } 
    } 
    if( screen == 255)
    {
      mermaid2b();
      // coralMermaid.y = (height/2)+40;
    //  lvl2End.remove(); 

      if(nextText3.mouse.presses())
      {
        player.y = 350;
          player.x = 20;
      //   storeFront.y = -9000000;
      //   storeBack.y = -900000;
      storeBack3.y = -1000;
       storeFront3.y = -1000;
      //  stores.removeAll();
        corals.removeAll();
        rocks.removeAll();
        textBubbles.removeAll();
        coralMermaid.y = -1000;
        nextText3.y = -2000;
          playLvl3();
        screen = 50;
      }
    }
    
  

  if (screen == 50){//lvl 3:sunken ship //plastic enemy
    background(16,14,54);
    playerSetUp();
    SND1.stop(); 
    
    lvl3Music();
  
    if(lvl2End) {lvl2End.y= -1000;}
    
    if(totHealth == 0){
       deathCount4++;
      screen = 103;

    }

    
 


    //player.debug = mouse.pressing(); 
 
    if (player.overlapping(invis5))
    {
      i2 = true;
      canMove = false;
    //  canMenu = false; 
   //   canMenu = false; 
   
      if(deathCount4 == 0){
      txt6.text = "Be careful o' the things\nthat there 'ide in the\ndark- they be attracted\nto light. Please come\nsoon- it’s too dark 'ere.\n(Press E to Continue)";
      }else if (deathCount4 == 1){
        txt6.text = "Them poor creatures don’t\nknow they’re 'urtin' ye.\nTry shootin' a single\nshot to scare them away.\n(Press E to Continue)";
      } else if (deathCount4 == 2){
        txt6.text = "Watch out, there’s way\nmore creatures nearrr\nthe lamp at the end.\nAfter all, it be a giant\nball o' light.\n(Press E to Continue)";
      } else if (deathCount4 >= 3){
        txt6.text = "It’s so, SO dark. You’re\nme only chance. Please,\nremember what ye came\nfer!\n(Press E to Continue)";
      }
      txt6.y = 200; 
        txt6.textSize = 15;
      txt6.layer =entrance.layer+1;
      player.vel.x = 0; 
       player.vel.y = 0; 
     
    }
    
    if((canMove == false) && i2 == true )
      {
      if(kb.presses("e")  && (menuCheck % 2 == 0))
      {
        txt6.y = -7200;
         invis5.remove(); 
        canMove = true;
      //  canMenu = true; 
        i2 = false; 
        
      } 
     else
        canMove = false;
     //  canMenu = false; 
      }

    if (menuCheck % 2 != 0){
      canHurt = false; 
      h1.speed = 0;
       h2.speed = 0; 
       h3.speed = 0; 
       h4.speed = 0; 
       h5.speed = 0; 
       h6.speed = 0; 
       h7.speed = 0; 
       h8.speed = 0; 
       h9.speed = 0; 
       h10.speed = 0; 
       h11.speed = 0; 
       h12.speed = 0; 
       h13.speed = 0; 
       h14.speed = 0; 
       h15.speed = 0; 
       h16.speed = 0;
      h17.speed = 0; 
       h18.speed = 0;
      h100.speed = 0; 
       h200.speed = 0; 
       h300.speed = 0; 
       h400.speed = 0; 

    } else{
    
      
      canHurt = true; 
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

    
   if(light.overlapping(h1) || g3.overlapping(h1) && (menuCheck % 2 == 0)){
     H1H = 0; 
     if(menuCheck % 2 == 0){
      h1.moveTo(player);
     h1.speed = 1; 
     }
      h1.image = hiderImg; 
    }else{
      H1H = 1; 
     h1.speed = 0; 
    }

    if(light.overlapping(h2) || g3.overlapping(h2)&& (menuCheck % 2 == 0)){
      H2H = 0; 
       if(menuCheck % 2 == 0){
      h2.moveTo(player);
       h2.speed = 1; 
       }
      h2.image = hiderImg; 
    }else{
      H2H = 1; 
      h2.speed = 0; 
    }

    if(light.overlapping(h3) || g3.overlapping(h3)&& (menuCheck % 2 == 0)){
      H3H = 0; 
       if(menuCheck % 2 == 0){
      h3.moveTo(player);
       h3.speed = 1; 
       }
      h3.image = hiderImg; 
    }else{
      H3H = 1; 
    }

    if(light.overlapping(h4) || g3.overlapping(h4)&& (menuCheck % 2 == 0)){
      H4H = 0; 
       if(menuCheck % 2 == 0){
      h4.moveTo(player);
    
       h4.speed = 1; 
       }
      h4.image = hiderImg; 
    }else{
      H4H = 1; 
    }

    if(light.overlapping(h5) || g3.overlapping(h5)){
      H5H = 0; 
       if(menuCheck % 2 == 0){
      h5.moveTo(player);
       h5.speed = 1; 
       }
      h5.image = hiderImg; 
    }else{
      H5H = 1; 
    }

    if(light.overlapping(h6) || g3.overlapping(h6)){
      H6H = 0; 
       if(menuCheck % 2 == 0){
      h6.moveTo(player);
    
       h6.speed = 1; 
       }
      h6.image = hiderImg; 
    }else{
      H6H = 1; 
    }

    if(light.overlapping(h7) || g3.overlapping(h7)){
      H7H = 0; 
       if(menuCheck % 2 == 0){
      h7.moveTo(player);
   
       h7.speed = 1; 
       }
       h7.image = hiderImg; 
    }else{
      H7H = 1; 
    }

    if(light.overlapping(h8) || g3.overlapping(h8)){
      H8H = 0; 
       if(menuCheck % 2 == 0){
      h8.moveTo(player);
   
       h8.speed = 1; 
       }
       h8.image = hiderImg; 
    }else{
      H8H = 1; 
    }
    if(light.overlapping(h9) || g3.overlapping(h9)){
      H9H = 0; 
       if(menuCheck % 2 == 0){
      h9.moveTo(player);
    
       h9.speed = 1; 
       }
      h9.image = hiderImg; 
    }else{
      H9H = 1; 
    }

    if(light.overlapping(h10) || g3.overlapping(h10)){
      H10H = 0; 
       if(menuCheck % 2 == 0){
      h10.moveTo(player);
      
       h10.speed = 1; 
       }
      h10.image = hiderImg; 
    }else{
      H10H = 1; 
    }

    if(light.overlapping(h11) || g3.overlapping(h11)){
      H11H = 0; 
       if(menuCheck % 2 == 0){
      h11.moveTo(player);
  
       h11.speed = 1; 
       }
      h11.image = hiderImg; 
      h11.scale = 1.2; 
    }else{
      H11H = 1; 
    }
    if(light.overlapping(h12) || g3.overlapping(h12)){
       H12H = 0; 
       if(menuCheck % 2 == 0){
      h12.moveTo(player);
     
       h12.speed = 1;
       }
       h12.image = hiderImg; 
      h12.scale = 1.5; 
    }else{
      H12H = 1; 
    }
    if(light.overlapping(h13) || g3.overlapping(h13)){
       H13H = 0; 
       if(menuCheck % 2 == 0){
      h13.moveTo(player);
   
       h13.speed = 1; 
       }
       h13.image = hiderImg; 
      h13.scale = 0.7; 
    }else{
      H13H = 1; 
    }
    if(light.overlapping(h14) || g3.overlapping(h14)){
       H14H = 0; 
       if(menuCheck % 2 == 0){
      h14.moveTo(player);
     
       h14.speed = 1; 
       }
       h14.image = hiderImg; 
      h14.scale = 1.7; 
    }else{
      H14H = 1; 
    }
    if(light.overlapping(h15) || g3.overlapping(h15)){
       H15H = 0; 
       if(menuCheck % 2 == 0){
      h15.moveTo(player);
      
       h15.speed = 1; 
       }
       h15.image = hiderImg;
      h15.scale = 1.3; 
    }else{
      H15H = 1; 
    }
    if(light.overlapping(h16) || g3.overlapping(h16)){
      H16H = 0; 
       if(menuCheck % 2 == 0){
      h16.moveTo(player);

       h16.speed = 1; 
       }
      h16.image = hiderImg; 
      h16.scale = 1.5; 
    } else{
      H16H = 1; 
    }

    if(light.overlapping(h17) || g3.overlapping(h17)){
    
       if(menuCheck % 2 == 0){
      h17.moveTo(player);

       h17.speed = 1; 
       }
      h17.image = hiderImg; 
      h17.scale = 1.75; 
    } 

    if(light.overlapping(h18) || g3.overlapping(h18)){
     
       if(menuCheck % 2 == 0){
      h18.moveTo(player);

       h18.speed = 1; 
       }
      h18.image = hiderImg; 
      h18.scale = 1.6; 
    } 
    if(light.overlapping(h100) || g3.overlapping(h100)){
      
       if(menuCheck % 2 == 0){
      h100.moveTo(player);

       h100.speed = 1; 
       }
      h100.image = hiderImg; 
    }

    if(light.overlapping(h200) || g3.overlapping(h200)){
     
       if(menuCheck % 2 == 0){
      h200.moveTo(player);

       h200.speed = 1; 
       }
      h200.image = hiderImg; 
    }

    if(light.overlapping(h300) || g3.overlapping(h300)){
 
       if(menuCheck % 2 == 0){
      h300.moveTo(player);

       h300.speed = 1; 
       }
      h300.image = hiderImg; 
    } 

    if(light.overlapping(h400) || g3.overlapping(h400)){
      
       if(menuCheck % 2 == 0){
      h400.moveTo(player);

       h400.speed = 1; 
       }
      h400.image = hiderImg; 
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

    if (bullets.overlaps(h17)){

      h17.remove();

    }

    if (bullets.overlaps(h18)){

      h18.remove();

    }

    if (bullets.overlaps(h100)){

      h100.remove();

    }
    if (bullets.overlaps(h200)){

      h200.remove();

    }
    if (bullets.overlaps(h300)){

      h300.remove();

    }
    if (bullets.overlaps(h400)){

      h400.remove();

    }



 




    
    if(player.collides(lvl3End)){
        lvl3End.y = -1000;
      txt6.y = -1000;
    //  textBubbles.removeAll(); 
      platforms.removeAll(); 
      enemies.removeAll();
      lamps.removeAll();
      g1.y = -2000;
      g3.y = -2000; 
      light.y = -2000; 
      hiders.removeAll();
    
      entrance.remove();
      lvl3SND.stop();
      player.y = 350;
      player.x = 20;
    
      //playLvl4();
      screen = 27;
  }
  } //END LVL 3
  
  if(screen == 27)// natalia 
  {
  storeOpen();
//    mermaid3a();
    cafeMusic(); 
    mermaid3a()
    
    storeFront4.y = height/2; 
    storeBack4.y = height/2;
    shipMermaid.y = height/2 + 50;
    

   
  
/*
     if (storeBack4.layer > shipMermaid.layer)
     {
       storeBack.layer = shipMermaid.layer -1;
     }
    
    if (storeFront4.layer < shipMermaid.layer)
    {
      storeFront4.layer = shipMermaid.layer +1;
    }
  */ 
    
    if(nextText4.mouse.presses())
    {
   
     // nexts.removeAll(); 
      screen = 420; 
      nextText4.y = -2000;
    
    } 

  } 

  if (screen == 420)
  {
    mermaid3b();
    shipMermaid.image = MerNat2Img;
   

    if (nextText5.mouse.presses())
    {
     
      
     // storeFront.y = -9000;
     // storeBack.y = -90000;
      //storeFront.layer = -1;
      //storeBack.layer = -1;
      player.y = 350;
      player.x = 20;
      shipMermaid.y = -1000; 
    // storeBack4.y = -90000; 
    // storeFront4.y = -90000;
     // storeFront4.x = -9000;
     // storeBack4.x = -9000;
    //  stores.removeAll();
      corals.removeAll();
      rocks.removeAll();
      storeBack4.y = -1000;
      storeFront4.y= -1000;
      textBubbles.removeAll();
   //   shipMermaid.remove();
      nextText5.y= -2000;
      playLvl4(); 
   //   playLvl4();
      
      screen = 60;
    }
  }
  
if (screen == 60906)
{
  background(0,50,0);
}
 
 

  if (screen == 60){ //lvl 4: whale fall // falling marine snow 

 //   playLvl4(); 
    canMove = true;
  //  player.layer = 30000;
    playerSetUp();
    
    lvl4Music();
    deepMusic(); 
  background(backImg4);

    
      //DASH FUNCTION AGAIN (FOR IF U SKIP DIRECTLY TO THIS LEVEL)
     if(canMove == true){
      if (kb.presses('enter')) {
        if(kb.pressing('w') || ( kb.pressing('s'))){
          player.vel.y *= 10;
        //  player.bearing = -90;
       //   player.applyForce(60);
        }
        else if(kb.presses('d') || ( kb.pressing('a'))){
        player.vel.x *= 10;
          //player.bearing = 0;
        //  player.applyForce(60);
        }
        else if (player.mirror.x == true){
            player.vel.x += 76;
        } else if (player.mirror.x == false){
          player.vel.x -= 76;
        }
      }
     }
      // END  of DASH
    if (menuCheck % 2 != 0){
      canHurt = false; 
    } else{
      canHurt = true; 
    }
   
    SND1.stop(); 
   if(lvl3End) {lvl3End.y= -1000;}


    if(totHealth <= 0){
       deathCount5++;
      screen = 104;
      enemies.remove(); 
    }
    
eMove = false;
    if (player.overlapping(invis6))
      {
        i2 = true;
        canMove = false;
     //   canMenu = false; 
       
        if(deathCount5 == 0){
        txt7.text = "This place is desolate.\nA whale has died here,\nand it’s corpse falls\nlike sand. A graveyard\n for many, then.\nPress ENTER to dash.\n(Press E to Continue)";
        }else if (deathCount5 == 1){
          txt7.text = "I think hiding behind\nthe rocks might help you.\nOr try shooting the\ndebris. Stay safe out there.\n(Press E to Continue)";
        }else if(deathCount5 == 2){
          txt7.text = "This is as far as anyone\nhas gotten. You cannot\nfall here as well. I…\nWe can't lose you.\n(Press E to Continue)";
        } else if (deathCount5 >= 3){
          txt7.text = "\n\n...\n\n(Press E to Continue)";
        }
          txt7.textSize = 15;
        txt7.y = 200; 
        player.vel.x = 0; 
         player.vel.y = 0; 
       
      }

      if((canMove == false) && i2 == true )
        {
        if(kb.presses("e")  && (menuCheck % 2 == 0))
        {
          canMove = true;
       //   canMenu = true; 
          i2 = false; 
           invis6.remove(); 
          txt7.y = -7200; 
        } 
       else
          canMove = false;
      //   canMenu = false; 

        }


    

    if((player.overlaps(invis06)))
      {
        eMove21 = true; 
        eMove2 = true; 
        weC1 = true; 

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

    if (menuCheck % 2 != 0){
      eMove21 = false;
      eMove2 = false; 
      e21.vel.x = 0; 
      e22.vel.x = 0;
      e21.vel.y = 0;
      e22.vel.y = 0; 
      canHurt = false; 
    } else {
      if(weC1 == true){
      eMove21 = true;
        eMove2 = true; 
      }
      canHurt = true; 
    }
    
  if(d1.overlapping(player) || bullets.overlaps(d1) && canHurt == true){
    d1.y = 0; 
  }
    if(d2.overlapping(player)  || bullets.overlaps(d2)&&canHurt == true){
      d2.y = 0; 
    }
    if(d3.overlapping(player)  || bullets.overlaps(d3)&&canHurt == true){
      d3.y = 0; 
    
    }
    if(d4.overlapping(player)  || bullets.overlaps(d4)&& canHurt == true){
      d4.y = 0; 
    }
    
    if(d5.overlapping(player)  || bullets.overlaps(d5)&& canHurt == true){
      d5.y = 0; 
    }
    if(d6.overlapping(player) || bullets.overlaps(d6) && canHurt == true){
      d6.y = 0; 
    }
    if(d7.overlapping(player) || bullets.overlaps(d7) && canHurt == true){
      d7.y = 0; 
  
    }
    if(d8.overlapping(player)  || bullets.overlaps(d8)&& canHurt == true){
      d8.y = 0; 
    }
    if(d9.overlapping(player)  || bullets.overlaps(d9)&& canHurt == true){
      d9.y = 0; 
    } if(d10.overlapping(player)  || bullets.overlaps(d10)&& canHurt == true){
      d10.y = 0; 
    } if(d10.overlapping(player) || bullets.overlaps(d11) && canHurt == true){
      d10.y = 0; 
    }
    if(d11.overlapping(player) || bullets.overlaps(d11) && canHurt == true){
      d11.y = 0; 
    }
    if(d12.overlapping(player)  || bullets.overlaps(d12)&&canHurt == true){
      d12.y = 0; 
    }
    if(d13.overlapping(player) || bullets.overlaps(d13) && canHurt == true){
      d13.y = 0; 
    }
    if(d14.overlapping(player)  || bullets.overlaps(d14)&& canHurt == true){
      d14.y = 0; 
    }
    if(d15.overlapping(player)  || bullets.overlaps(d15)&& canHurt == true){
      d15.y = 0; 
    }
    if(d16.overlapping(player)  || bullets.overlaps(d16)&& canHurt == true){
      d16.y = 0; 
    } if(d17.overlapping(player)  || bullets.overlaps(d17)&&canHurt == true){
      d17.y = 0; 
    }
    if(d18.overlapping(player)  || bullets.overlaps(d18)&& canHurt == true){
      d18.y = 0; 
    }
    if(d19.overlapping(player)  || bullets.overlaps(d19)&& canHurt == true){
      d19.y = 0; 
    }
    if(d20.overlapping(player) || bullets.overlaps(d20) && canHurt == true){
      d20.y = 0; 
    }
    
   if((player.x <= 1000) && player.x >=300)
   {
    if (d1.y >= 500 || d1.overlapping(player)) 
    {
      d1.y = 0;
    d1C = random(player.x - 550, player.x + 550);
    d1V= random(1, 4);
      d1S = random(0.5, 1); 
       d1.scale = d1S;
      d1.x = d1C;
       d1.vel.y  = d1V;
      
      
    } 

    if (d2.y >= 500 || d2.overlapping(player)) 
    {
      d2.y = 0;
    d2.x = random(player.x - 350, player.x + 350);
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
         d1.x = random(3000, 3600);
         d1.vel.y = random(6, 9);
           d1.scale = random(0.5, 1); 
         } 

         if (d2.y >= 500 || d2.overlapping(player)) 
         {
           d2.y = 0;
         d2.x = random(4000, 4200);
         d2.vel.y = random(6, 9);
           d2.scale = random(0.5, 1); 
         } 

          if (d4.y >= 500||  d4.overlapping(player)) 
          {
            d4.y = 0;
          d4.x = random(3500, 3800);
          d4.vel.y = random(6, 9);
            d4.scale = random(0.5, 1); 
          } 

          if (d5.y >= 500||  d5.overlapping(player)) 
          {
            d5.y = 0;
          d5.x = random(3000, 4200);
          d5.vel.y = random(4, 7);
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
     d16.vel.y = random(4, 7);
       d16.scale = random(0.5, 1); 
     } 

     if (d17.y >= 500 || d17.overlapping(player)) 
     {
       d17.y = 0;
     d17.x = random(3000, 4200);
     d17.vel.y = random(3, 5);
       d17.scale = random(0.5, 1); 
     } 
     if (d18.y >= 500||  d18.overlapping(player)) 
     {
       d18.y = 0;
     d18.x = random(3000, 4200);
     d18.vel.y = random(4, 7);
       d18.scale = random(0.5, 1); 

     } 
      if (d19.y >= 500||  d19.overlapping(player)) 
      {
        d19.y = 0;
      d19.x = random(3000, 4200);
      d19.vel.y = random(4, 7);
        d19.scale = random(0.5, 1); 
      } 

      if (d20.y >= 500||  d20.overlapping(player)) 
      {
        d20.y = 0;
      d20.x = random(3000, 4200);
      d20.vel.y = random(4, 7);
        d20.scale = random(0.5, 1); 
      } 
//
   
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
       d11.vel.y = 4;
         d11.scale = random(1.5, 2); 
       } 

       if (d12.y >= 500 || d12.overlapping(player)) 
       {
         d12.y = 0;
       d12.x = 5700;
       d12.vel.y = 5;
         d12.scale = random(1.2, 1.7); 
       } 
       if (d13.y >= 500||  d13.overlapping(player)) 
       {
         d13.y = 0;
       d13.x = 5850;
       d13.vel.y = 3;
         d13.scale = random(1.5, 2); 
       } 
        if (d14.y >= 500||  d14.overlapping(player)) 
        {
          d14.y = 0;
        d14.x = 6200;
        d14.vel.y = 4.2;
          d14.scale = random(1.5, 1.6); 
        } 

        if (d15.y >= 500||  d15.overlapping(player)) 
        {
          d15.y = 0;
        d15.x = 6400;
        d15.vel.y = 5;
          d15.scale = random(1.3, 2.2); 
        } 
//
     if (d3.y >= 500||  d3.overlapping(player)) 
     {
       d3.y = 0;
     d3.x = random(6500, 7500);
     d3.vel.y = random(6, 9);
       d3.scale = random(1, 1.6); 
       

     } 
    

     if (d4.y >= 500||  d4.overlapping(player)) 
     {
       d4.y = 0;
     d4.x = random(6500,7500);
     d4.vel.y = random(1, 4);
       d4.scale = random(1.5, 2); 
      
     } 

    if (d6.y >= 500 || d6.overlapping(player)) 
     {
       d6.y = 0;
     d6.x = random(6500, 7500);
     d6.vel.y = random(5, 8);
       d6.scale = random(1.5, 1.7); 
     
     } 

     if (d7.y >= 500 || d7.overlapping(player)) 
     {
       d7.y = 0;
     d7.x = random(6500, 7500);
     d7.vel.y = random(5, 8);
       d7.scale = random(1.2, 1.5); 
       
     } 

    if(d7.overlapping(player)){
      totHealth = totHealth - 5; 
      healthBar.w = healthBar.w - (10);
    }
    if(d6.overlapping(player)){
      totHealth = totHealth - 5; 
      healthBar.w = healthBar.w - (10);
    }

    if(d4.overlapping(player)){
      totHealth = totHealth - 5; 
      healthBar.w = healthBar.w - (10);
    }

    if(d3.overlapping(player)){
      totHealth = totHealth - 5; 
      healthBar.w = healthBar.w - (10);
    }


    


    
    if(player.collides(lvl4End)){
      lvl4End.y = -1000;
      enemies.removeAll();
    //  textBubbles.removeAll(); 
      enemyHealthBar.removeAll(); 
      lamps.removeAll();
      debris.removeAll();
      rocks.removeAll();
      g1.y = -1000; 
      windySND.stop(); 
      deepSND.stop(); 
      boundaries.removeAll();
      txt7.y = -1000; 
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
   
 // storeBack5.y = height/2;
//  storeFront5.y = height/2;
  
 // storeFront.y = height/2;
//  storeBack.y = height/2;
 // storeFront.layer  = 30;
//  storeBack.layer = 19;
  if (storeFront5.layer < whaleMermaid.layer)
  {
    storeFront5.layer = whaleMermaid.layer +20;
  }
  if (storeBack5.layer > whaleMermaid.layer)
  {
    storeBack5.layer = whaleMermaid.layer -1;
  }
  
  if (nextText6.mouse.presses())
  {
    whaleMermaid.y = -2000; 
    screen = 777;
    nextText6.y = -4500;
  }
}
  
  if (screen == 777)
  {
    mermaid4b();
      whaleMermaid.image = MerHgtv2Img;
    if (nextText7.mouse.presses())
    {
      player.y = 350;
      player.x = 20;
      whaleMermaid.y = -2000; 
     // stores.removeAll(); 
   //   storeFront.y = -9000;
   //   storeBack.y = -90000;
    //  storeFront.layer = -1;
   //   storeBack.layer = -1;
      corals.removeAll();
      rocks.removeAll();
     storeBack5.y = -1000;
    storeFront5.y = -1000;
      textBubbles.removeAll();
   //   whaleMermaid.remove();
      nextText7.y = -2000;
      playLvl5();
      screen =70;
    }
  }

  
  

  if (screen == 70){ //lvl 5: underwater volcano 
    background(backImg5);
    SND1.stop(); 
    opening.stop(); 
    endMusic(); 
  

    playerSetUp();
    dash();
    if(totHealth <= 0){
       deathCount6++;
      screen = 105;
      enemies.removeAll(); 

    }
    if (player.colliding(volcanoFish)){
      totHealth --;
      healthBar.w = healthBar.w - 2;
    }

    if (player.overlapping(invis7))
      {
  
        txt8.y = 200; 
        textStyle(BOLD);
        txt8.text = "RUN.";
          txt8.textSize = 30;
        player.vel.x = 0; 
         player.vel.y = 0;
        opening21.stop();
        opening21.setVolume(0);
        sC5 = true; 
        
        invis7.remove(); 
        volcanoFish.vel.x = -5; 
        stopper.remove(); 
        veC2 = true; 
      
      }

    if(veC2 == true && dramaticSND.isPlaying() == false )
    {
     dramaticSND.play();
    }

  
   

  

//   if(player.x<= 1500 && dramaticSND.isPlaying() == false){
 //    dramaticSND.play(); 
 //  }

  
    if (f1.y >= 500 || f1.overlapping(player)) 
       {
         f1.y = 0;
       f1.x = random(-720, -2550);
       f1.vel.y = random(5, 8);
         f1.scale = random(0.5, 1); 
       } 

       if (f2.y >= 500 || f2.overlapping(player)) 
       {
         f2.y = 0;
       f2.x = random(-720, -2550);
       f2.vel.y = random(5, 8);
         f2.scale = random(0.5, 1); 
       } 
       if (f3.y >= 500||  f3.overlapping(player)) 
       {
         f3.y = 0;
       f3.x = random(-720, -2550);
       f3.vel.y = random(5, 8);
         f3.scale = random(0.5, 1); 

       } 
        if (f4.y >= 500||  f4.overlapping(player)) 
        {
          f4.y = 0;
        f4.x = random(-720, -2550);
        f4.vel.y = random(5, 8);
          f4.scale = random(0.5, 1); 
        } 

        if (f5.y >= 500||  f5.overlapping(player)) 
        {
         f5.y = 0;
        f5.x = random(-720, -2550);
        f5.vel.y = random(5, 8);
          f5.scale = random(0.5, 1); 
        } 

    if (f6.y >= 500||  f6.overlapping(player)) 
    {
     f6.y = 0;
    f6.x = random(-720, -2550);
    f6.vel.y = random(5, 8);
      f6.scale = random(0.5, 1); 
    } 
    if (f7.y >= 500||  f7.overlapping(player)) 
    {
     f7.y = 0;
    f7.x = random(-720, -2550);
    f7.vel.y = random(5, 8);
      f7.scale = random(0.5, 1); 
    } 
    if (f8.y >= 500||  f8.overlapping(player)) 
    {
     f8.y = 0;
    f8.x = random(-720, -2550);
    f8.vel.y = random(5, 8);
      f8.scale = random(0.5, 1); 
    } 
    
    if((player.overlaps(invis07)))
      {
        eMove2 = true; 
        eMove3 = true; 
        eMove4 = true;
        eMove5 = true;
        eMove6 = true;
        veC1 = true; 

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

    if (menuCheck % 2 != 0){
        volcanoFish.vel.x = 0; 
      //Enemies corurpted fish// 
      eMove2 = false; 
      eMove3 =  false;
      eMove4 =  false;
      eMove5 =  false;
      eMove6 =  false;
      e20.vel.x = 0; 
      e21.vel.x = 0;
      e20.vel.y = 0;
      e21.vel.y = 0; 

      e22.vel.x = 0; 
      e23.vel.x = 0;
      e22.vel.y = 0;
      e23.vel.y = 0; 

      e24.vel.x = 0; 
    
      e24.vel.y = 0;
   //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      h1.speed = 0; 
      h2.speed = 0; 
      h3.speed = 0; 
      
      canHurt = false; 
    } else {
      if(veC1 == true){
        eMove2 = true; 
        eMove3 =  true;
        eMove4 =  true;
        eMove5 =  true;
        eMove6 =  true;
      }
      if(veC2 == true && veC3 == false){
        volcanoFish.vel.x = -3.5; 
      }
      canHurt = true; 
    }




    
    if(player.x <= -4300 && player.x >= -5750){
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
      if(menuCheck % 2 == 0){
      h1.moveTo(player);
        h1.speed = 1; 
      }
      h1.image = hiderImg; 
    }

    if(light.overlapping(h2) || g3.overlapping(h2)){
      if(menuCheck % 2 == 0){
      h2.moveTo(player);
        h2.speed =2;
      }
      h2.image = hiderImg; 
    }

    if(light.overlapping(h3) || g3.overlapping(h3)){
      if(menuCheck % 2 == 0){
      h3.moveTo(player);
        h3.speed = 1; 
      }
      h3.image = hiderImg; 
    }

    if(player >= 4750){
      light.remove(); 
    }
    

 

  
    if (f11.y >= 500 || f11.overlapping(player)) 
       {
         f11.y = 0;
       f11.x = random(-5900, -7550);
       f11.vel.y = random(1,4);
         f11.scale = random(0.5, 1); 
       } 

       if (f12.y >= 500 || f12.overlapping(player)) 
       {
         f12.y = 0;
       f12.x = random(-5900, -7550);
       f12.vel.y = random(1,4);
         f12.scale = random(0.5, 1); 
       } 
       if (f13.y >= 500||  f3.overlapping(player)) 
       {
         f13.y = 0;
       f13.x = random(-5900, -7550);
       f13.vel.y = random(1,4);
         f13.scale = random(0.5, 1); 

       } 
        if (f14.y >= 500||  f14.overlapping(player)) 
        {
          f14.y = 0;
        f14.x = random(-5900, -7550);
        f14.vel.y = random(1,4);
          f14.scale = random(0.5, 1); 
        } 

        if (f15.y >= 500||  f15.overlapping(player)) 
        {
         f15.y = 0;
        f15.x = random(-5900, -7550);
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

    if(f6.overlapping(player)){
      f6.y = 0; 
    }
    if(f7.overlapping(player)){
      f7.y = 0; 
    }

    if(f8.overlapping(player)){
      f8.y = 0; 
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
    
      txt7 = new textBubbles.Sprite(textBubbleImg, -6690, 200, "n");
      txt7.text = "HIDE!";
        txt7.textSize = 30;
      player.vel.x = 0; 
       player.vel.y = 0;
      sC5 = false; 
      sC6 = true; 
      invis1.remove(); 
    }

    if(txt7 && dramatic2SND.isPlaying() == false){
      dramaticSND.stop();
      dramaticSND.setVolume(0);
      dramatic2SND.play(); 
    }

    if(volcanoFish.x <= -6800){
      vr114.remove();
      vr115.remove();
      vr118.remove(); 
      vCheck = true; 
      txt7.remove(); 
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

    if(volcanoFish.x <= -9000){
      volcanoFish.vel.x = 0; 
      volcanoFish.x = -9000; 
      veC3 = true; 
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

  if (player.overlapping(invis08))
  {

    txt8 = new textBubbles.Sprite(textBubbleImg, -7800, 200, "n");
    textStyle(NORMAL);
    txt8.text = "It's stuck!\nNow's your chance \nto fight it.";
      txt8.textSize = 15;
    player.vel.x = 0; 
     player.vel.y = 0;
    invis08.remove(); 
  }
   

    
    if(player.collides(lvl5End))
    {
      lvl5End.y = -1000;
      g1.y = -1000;
    //  textBubbles.removeAll(); 
      platforms.removeAll(); 
      enemies.removeAll();
      lamps.removeAll();
      dramaticSND.stop();
      dramatic2SND.stop();
      dramatic2SND.setVolume(0);
      player.y = 350;
      player.x = 20; 
      camera.x=9000; 
      screen = 29;
     }
   }
  if(screen == 29){ // Abi mermaid/end screen?
   storeOpen();
    mermaid5a(); 
   
   
 

    if (storeFront6.layer < volcanoMermaid.layer)
    {
      storeFront6.layer = volcanoMermaid.layer +1;
    }
    if (storeBack6.layer > volcanoMermaid.layer)
    {
      storeBack6.layer = volcanoMermaid.layer -1;
    }
    if(nextText9.mouse.presses())
    {
      
      screen = 99; 
      nextText9.y = -4500;
    } 

  } 
  if (screen == 99)
  {
    
    mermaid5b();
     volcanoMermaid.image = MerAbi2Img;
    if (nextText10.mouse.presses())
    {
      player.vel.y = 0;
      player.vel.x = 0;
     // stores.removeAll(); 
//      storeFront.y = -9000;
    //  storeBack.y = -90000;
     storeBack6.y = -1000;
      storeFront6.y = -1000;
    //  storeFront.layer = -1;
    //  storeBack.layer = -1;
      corals.removeAll();
      rocks.removeAll();
      nextText10.y = -45000;
      textBubbles.removeAll();
      SND1.stop();
      dramatic2SND.stop();
      dramatic2SND.setVolume(0);
      screen =80;
    }
  }
  if(screen == 80)
  { //END SCREEN
    background(titleBackImg);
    player.remove(); 
    enemies.removeAll();
    platforms.removeAll();
    boundaries.removeAll();
    light.remove(); 
    camera.x = 9000; 
    theEND();
    music1();
    
    fill(255);
    textSize(40);
    textAlign(CENTER, TOP);
    text("Our World Is Restored To Its Natural Order!\nThank you, Brave One!!", width / 2, height / 2 - 250);
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

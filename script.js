
/* VARIABLES */
let playButton, directionsButton, backButton, textTitle; //for homescreen
let player, ground, theEnd, bullets, light; //for ALL
let healthBar, enemyHealthBar, e1, eH1, e2, eh2, d1, healthFront, healthDMG; //for ALL

let totHealth = 100;
let maxHealth = 100;
let enemies, kelps, platforms,lamps, rocks, invisibles, lanterns, corals, doors, deaths, oils, nets, debris, boundaries, angles, hiders; //ALL INTERACTIVE SPRITES 

let storeFront, storeBack, tester, kelpMermaid; 
let txt4, txt5; 

let netCount1; 

let canHurt = true; 

let canMove = true; 
let eMove = false;
let eMove2, eMove3, eMove4, eMove5, eMove6, eMove7, eMove8, eMove9, eMove10,eMove11,eMove12,eMove13,eMove14,eMove15, eMove16, eMove17, eMove18, eMove19, eMove20 = false; 
let i1 = false;
let i2 = false; 
let e1S = false; 
let messageCheck = false; 
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
  kelpBackImg = loadImage('assets/KelpGroupBack.png');
  kelpFrontImg = loadImage('assets/KelpGroupFront.png');
  textBubbleImg = loadImage('assets/RadioBubble.png');
  coralBackImg = loadImage('assets/CoralBack.png');
  endGoalImg = loadImage('assets/Lamp.png');
  glowImg = loadImage('assets/Glow.png');
  glow2Img = loadImage('assets/Glow2.png');

  
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
  
  
  rockOneImg = loadImage('assets/RockOne.png');
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

  oilImg = loadImage('assets/Oil.png');
  oil2Img = loadImage('assets/Oil2.png');
  oil3Img = loadImage('assets/Oil3.png');
  oil4Img = loadImage('assets/Oil4.png');

  flashImg = loadImage('assets/Flashlight.png');

  w1 = loadImage('assets/WhaleDebris1.png');
  w2 = loadImage('assets/WhaleDebris2.png');
  w3 = loadImage('assets/WhaleDebris3.png');
  w4 = loadImage('assets/WhaleDebris4.png');
  w5 = loadImage('assets/WhaleDebris5.png');

  //SOUNDS
  eDeathSND = loadSound('assets/eDeathTEST.mp3');
  
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
  kelpFrontImg.resize(300,0);
  platImg.resize(25, 0);
  lampImg.resize(100, 0);
  kelpImg.resize(100, 0);
  coralImg.resize(100, 0);
  textBubbleImg.resize(150,0);
  storeBackImg.resize(windowWidth, windowHeight);
  storeFrontImg.resize(windowWidth, windowHeight+100);
  MerAbi1Img.resize(350,0);
  endGoalImg.resize(windowHeight, windowHeight); 
  glowImg.resize(200,0);
  glow2Img.resize(500,0);

  rockBoundary.resize(0, windowHeight);
  rockOneImg.resize(100,0);
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

  blockImg1.resize(50,500);
  blockImg1a.resize(50,130);
  blockImg1b.resize(300,0);
  

  flashImg.resize(100,0);
  glowImg.resize(100,0);
 
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
  platforms.color = color(0);
  platforms.collider = "s";
  platforms.friction = 0;

  angles = new Group();
  angles.collider = "n"; 
  angles.image = clearImg; 

  boundaries = new Group(); 
  boundaries.collider = "s";
  

  enemies = new Group(); //any enemy 
  enemies.collider = "d";
  enemies.color = color(16,14,54);
  enemies.rotationLock = true;
  enemies.addAni(enemyMoveAni);
  enemies.ani.scale = 0.2; 



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
  hiders.color = "black"; 

  

  debris = new Group(); 
  debris.collider = "k";
  debris.color = "green"; 
  
  
  
//LAYERING
 lamps.layer = 2.5; //light is layer 2, player is layer 3, healthbar is layer 7 & 8, coral back is 2
 textBubbles.layer = 1; 
  deaths.layer = 5; 
  doors.layer = 4; 
  rocks.layer = 6;
  platforms.layer = 6; 
  kelps.layer = 4; 
  enemies.layer = 5;
  enemyHealthBar.layer = 5;
  oils.layer = 6;
}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen == 0) {
    background(titleBackImg);
    
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
      backButton.pos = {x: -500, y:-500};
      homeScreen(); //back to home 
      
    }
  }
  //FIRST GAME ROOOM TUTORIAL~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (screen == 2){ //TUTORIAL SETUP
    background(backImg);
    player.debug = mouse.pressing();
    player.mirror.x = true;
    invisibles.debug = mouse.pressing();
    enemies.debug= mouse.pressing(); 
    ang1.x = player.x; ang1.y = player.y - 100;
    ang2.x = player.x; ang2.y = player.y + 100;
    ang3.x = player.x - 50; ang3.y = player.y + 100;
    ang4.x = player.x + 50; ang4.y = player.y + 100;
    ang5.x = player.x + 50; ang5.y = player.y - 100;
    ang6.x = player.x - 50; ang6.y = player.y - 100;
    ang7.x = player.x + 50; ang7.y = player.y;
    ang8.x = player.x - 50; ang8.y = player.y;
    
    playerSetUp();
    
    
   
    if(eMove == true){
     e1.moveTowards(player);  //ENEMY NUMBER ONE 
    e1.speed = 0.7;

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
     txt = new textBubbles.Sprite(textBubbleImg, 400, 200, "n");
      txt.text = "Welcome Unit F15H. \nFirst day on the job? \n Press ARROW KEYS to move. \n Press E to Continue";
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
       txt = new textBubbles.Sprite(textBubbleImg, 1100, 200, "n");
      txt.text = "F15H! Those poor fish have \nbeen infected with chemicals! \nPut them out of their misery. \nPress SPACE to shoot healing \npellets. Press E to Continue.";
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
      theEnd.remove(); 
      enemies.removeAll(); 
      rocks.removeAll();
      lamps.removeAll();
      invisibles.removeAll();
      corals.removeAll();
      textBubbles.removeAll();
      enemyHealthBar.removeAll();
      g1.remove(); 
      screen = 25; 
       player.x = -1000;
        player.vel.x = 0;
        player.vel.y = 0; 
      }
    }

    
  }

  if(screen == 25){
    mermaid1(); 
    if(mouse.presses()){
      player.y = 350;
      player.x = 20;
      storeFront.remove(); 
      storeBack.remove();
      kelpMermaid.remove();
      playLvl1();
      screen = 30; 
    } 
    
  }

  if(screen == 30){ //lvl 1: coral reef//chemical enemy
    background(backImg);
     coralBack.x = player.x + 70; 
    invisibles.debug = mouse.pressing();
    player.debug = mouse.pressing();
    playerSetUp();
    
    // RADIO STUFF=================================
  if (player.overlapping(invis0))
      {
        canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
        if (!txt4)
        {
         txt4 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
        }
        txt4.text = "Watch out for enemies! \nThey're EVERYWHERE!! \n Press E to continue";
          txt4.textSize =10;
        player.vel.x = 0; 
         player.vel.y = 0; 
        i2 = true;
      }

    if(canMove == false && i2 == true)
    {
      if(kb.presses("e"))
      {
        txt4.remove();
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
          txt5.text = "bzzt... bzzt... \nDon't get caught in the oil! \n You don't know what's \nwaiting for you in there! \nPress E to continue";
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
      e1.speed = 3.2;

      e2.moveTowards(player);  //ENEMY NUMBER TWO
      e2.speed = 0.7;

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
      e3.speed = 3.2;

      if(e3.x - player.x < 0){
        e3.mirror.x = true;
          }else{
            e3.mirror.x = false;
          }

    }

    if(eMove3 == true ){
      e4.moveTowards(player);  //ENEMY NUMBER 4
      
      e4.speed = 3.2;

      if(e4.x - player.x < 0){
        e4.mirror.x = true;
          }else{
            e4.mirror.x = false;
          }

    }

    if(eMove4 == true ){
      e5.moveTowards(player);  //ENEMY NUMBER 5
      e5.speed = 3.2;

      if(e5.x - player.x < 0){
        e5.mirror.x = true;
          }else{
            e5.mirror.x = false;
          }

      eh5.x = e5.x; 
       eh5.y = e5.y - 25;

    }

    if(eMove5 == true ){
      e5.moveTowards(player);  //ENEMY NUMBER 4

      e5.speed = 3.2;

      if(e5.x - player.x < 0){
        e5.mirror.x = true;
          }else{
            e5.mirror.x = false;
          }

    }

    if(eMove6 == true ){
      e6.moveTowards(player);  //ENEMY NUMBER 4

      e6.speed = 3.2;

      if(e6.x - player.x < 0){
        e6.mirror.x = true;
          }else{
            e6.mirror.x = false;
          }

    }

    if(eMove7 == true ){
      e7.moveTowards(player);  //ENEMY NUMBER 4

      e7.speed = 3.2;

      if(e7.x - player.x < 0){
        e7.mirror.x = true;
          }else{
            e7.mirror.x = false;
          }

    }

    if(eMove8 == true ){
     
      e8.moveTowards(player);  //ENEMY NUMBER 4

      e8.speed = 3.2;

      if(e8.x - player.x < 0){
        e8.mirror.x = true;
          }else{
            e8.mirror.x = false;
          }

    }

    if(eMove9 == true ){
     
      e9.moveTowards(player);  //ENEMY NUMBER 4

      e9.speed = 3.2;

      if(e9.x - player.x < 0){
        e9.mirror.x = true;
          }else{
            e9.mirror.x = false;
          }

    }

    if(eMove10 == true ){
     
      e10.moveTowards(player);  //ENEMY NUMBER 4

      e10.speed = 3.2;

      if(e10.x - player.x < 0){
        e10.mirror.x = true;
          }else{
            e10.mirror.x = false;
          }

    }

    if(eMove11 == true ){
     
      e11.moveTowards(player);  //ENEMY NUMBER 4

      e11.speed = 3.2;

      if(e11.x - player.x < 0){
        e11.mirror.x = true;
          }else{
            e11.mirror.x = false;
          }

    }

    if(eMove12 == true ){
    
      e12.moveTowards(player);  //ENEMY NUMBER 4

      e12.speed = 3.2;

      if(e12.x - player.x < 0){
        e12.mirror.x = true;
          }else{
            e12.mirror.x = false;
          }

    }

    if(eMove13 == true ){
     
      e13.moveTowards(player);  //ENEMY NUMBER 4

      e13.speed = 3.2;

      if(e13.x - player.x < 0){
        e13.mirror.x = true;
          }else{
            e13.mirror.x = false;
          }

    }

    if(eMove14 == true ){
      
      e14.moveTowards(player);  //ENEMY NUMBER 4

      e14.speed = 3.2;

      if(e14.x - player.x < 0){
        e14.mirror.x = true;
          }else{
            e14.mirror.x = false;
          }

    }

    if(eMove15 == true ){
      
      e15.moveTowards(player);  //ENEMY NUMBER 4

      e15.speed = 3.2;

      if(e15.x - player.x < 0){
        e15.mirror.x = true;
          }else{
            e15.mirror.x = false;
          }

    }

    if(eMove16 == true ){
     
      e16.moveTowards(player);  //ENEMY NUMBER 4

      e16.speed = 3.2;

      if(e16.x - player.x < 0){
        e16.mirror.x = true;
          }else{
            e16.mirror.x = false;
          }

    }

    if(eMove17 == true ){
 
      e17.moveTowards(player);  //ENEMY NUMBER 4

      e17.speed = 3.2;

      if(e17.x - player.x < 0){
        e17.mirror.x = true;
          }else{
            e17.mirror.x = false;
          }

    }

    if(eMove18 == true ){
      
      e18.moveTowards(player);  //ENEMY NUMBER 4

      e18.speed = 3.2;

      if(e18.x - player.x < 0){
        e18.mirror.x = true;
          }else{
            e18.mirror.x = false;
          }

    }

    if(eMove19 == true ){
      
      e19.moveTowards(player);  //ENEMY NUMBER 4

      e19.speed = 3.2;

      if(e19.x - player.x < 0){
        e19.mirror.x = true;
          }else{
            e19.mirror.x = false;
          }

    }

    if(eMove20 == true ){
      
      e20.moveTowards(player);  //ENEMY NUMBER 4

      e20.speed = 3.2;

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

    if(player.overlapping(invis7)){
      eMove7 = true; 
    }

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

    if(player.overlapping(invis15)){
      eMove15 = true; 
    }
    
    if(player.overlapping(invis16)){
      eMove16 = true; 
    }
    
    if(player.overlapping(invis17)){
      eMove17 = true; 
    }
    
    if(player.overlapping(invis18)){
      eMove18 = true; 
    }
    
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

    if (bullets.overlaps(e7)){
     eh7.w -= 12.5;
    }
    if(eh7.w <= 0)
    {
      e7.remove();
      eh7.remove();
    }

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

    if (bullets.overlaps(e15)){
     eh15.w -= 12.5;
    }
    if(eh15.w <= 0)
    {
      e15.remove();
      eh15.remove();
    }

    if (bullets.overlaps(e16)){
     eh16.w -= 12.5;
    }
    if(eh16.w <= 0)
    {
      e16.remove();
      eh16.remove();
    }

    if (bullets.overlaps(e17)){
     eh17.w -= 12.5;
    }
    if(eh17.w <= 0)
    {
      e17.remove();
      eh17.remove();
    }

    if (bullets.overlaps(e18)){
     eh18.w -= 12.5;
    }
    if(eh18.w <= 0)
    {
      e18.remove();
      eh18.remove();
    }

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

    if((eh1.w<= 0) && (eh2.w <=1)&&(eh3.w<= 0) &&(eh4.w<= 0) &&(eh5.w<= 0) &&(eh6.w<= 0) &&(eh7.w<= 0) &&(eh8.w<= 0) &&(eh9.w<= 0) &&(eh10.w<= 0) &&(eh11.w<= 0) &&(eh12.w<= 0) &&(eh13.w<= 0) &&(eh14.w<= 0) &&(eh15.w<= 0) &&(eh16.w<= 0) &&(eh17.w<= 0) &&(eh18.w<= 0) &&(eh19.w<= 0) &&(eh20.w<= 0)){
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
          player.y = 350;
          player.x = 20; 
          screen = 26;
          playLvl2();
       }
    }
   


   //=========================================================== 

    
   /* if(screen == 26)
  {
      mermaid2(); 
      if(mouse.presses())
      {
        player.y = 350;
        player.x = 20;
        storeFront.removeAll(); 
        storeBack.removeAll();
        sydMermaid.removeAll();
        playLvl2();
        screen = 40; 
      } 
    } */
  }
  if(screen == 40){ //lvl2: kelp forest // net enemy
    background(backImg2);
    playerSetUp();

    nets.debug = mouse.pressing();

    kelpBack1.x = player.x + 70;
    
  // RADIO STUFF=================================  
    if (player.overlapping(invis3))
    {
      i2 = true; 
       txt3 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
      txt3.text = "Ugh, those stupid \ncommericial fishers.\nPress 'SHIFT' to hide behind \nthe kelp. Screw those guys. \n Press E to Continue";
        txt3.textSize = 10;
         canMove = false;//MAKES IT SO PLAYER MUST WAIT FOR INSTRUCTIONS
       player.vel.x = 0; 
       player.vel.y = 0; 
        invis3.remove(); 

    } //END OF TEXT STUFF --------------------------------------
    

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

    

  if (n1.y < -100) 
  {
      n1.vel.y = 3;
      n1.image = netImg1;
    } else if (n1.y > 360) {
      n1.vel.y = -3;
    n1.image = netImg2;
    }

    if(n1.overlapping(player)){
      if(canHurt == true){
      player.vel.y = n1.vel.y; 
      }
    }

    if (n2.x < 1300) 
    {
        n2.vel.x = 3;
        n2.image = netImg1;
      } else if (n2.x > 1500) {
        n2.vel.x = -3;
      }

      if(n2.overlapping(player)){
        if(canHurt == true){
        player.vel.y = n2.vel.y; 
        }
      }

      if(player.x > 1300 && player.x < 1500){
        if(!(kb.pressing("shift"))){
        n2.vel.x = 0;
        n2.vel.y = 7; 
        n2.image = netImg2; 
        n2.moveTo(player);
         netCount1 = 1; 
        }
      }
     if((n2.y > 360 && (!player.overlapping(n2))) || (kb.pressing("shift")) && (n2.y > 150)){
      net2(); 
     } 
    

   

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

      player.y = 350;
      player.x = 20; 
      screen = 50;
      playLvl3();
  }
    
  }

  if (screen == 50){//lvl 3:sunken ship //plastic enemy
    background(16,14,54);
    playerSetUp();

    player.debug = mouse.pressing(); 

    if (player.overlapping(invis5))
    {
      i2 = true;
      canMove = false;
      txt5 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
      txt5.text = "... Make sure to use your \nflashlight. This maze has \nall these things \naround the corners.\nPress E to Continue";

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

    if(kb.pressing('left') || kb.pressing('a')){
          light.x = player.x - 90;
          light.mirror.x = false; 
        Lcounter = 1; 
        }else if (kb.pressing('right') || kb.pressing('d')) {
          light.x = player.x + 90; 
          light.mirror.x = true; 
        Lcounter = 0; 
        }
    if (Lcounter == 1){
      light.mirror.x = false;
      light.x = player.x - 90;

    } else if(Lcounter == 0) {
      light.mirror.x = true;

      light.x = player.x + 90; 

    }

    hider1(); 
    if(light.overlapping(h1)){
      h1.moveTo(player);
    }
    



    
    if(player.collides(lvl3End)){
        lvl3End.remove();
      platforms.remove(); 
      enemies.remove();
      lamps.remove();
      light.remove();

      player.y = 350;
      player.x = 20; 
      playLvl4();
      screen = 60;
  }
  }

  if (screen == 60){ //lvl 4: whale fall // falling marine snow 
    background(backImg4);
    playerSetUp();

    if (player.overlapping(invis6))
      {
        i2 = true;
        canMove = false;
        txt6 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
        txt6.text = "bzzt... A dead whale is falling above you.\n Don't get hit by the whale bits!\n They'll hurt!\n Press E to Continue.";
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

    
    if (d1.y >= 500 || d1.collides(player)) {
      d1.y = 0;
    d1.x = random(player.x - 750, player.x + 750);
    d1.vel.y = random(1, 5);
    } 

    if (d2.y >= 500 || d2.collides(player)) {
      d2.y = 0;
    d2.x = random(player.x - 750, player.x + 750);
    d2.vel.y = random(1, 5);

    } 
    if (d3.y >= 500||  d3.collides(player)) {
      d3.y = 0;
    d3.x = random(player.x - 750, player.x + 750);
    d3.vel.y = random(1, 5);

    } 

 


    
    if(player.collides(lvl4End)){
      lvl4End.remove();
      platforms.remove(); 
      enemies.remove();
      lamps.remove();

      player.y = 350;
      player.x = 20; 
      playLvl5();
      screen = 70;
  }
  }

  if (screen == 70){ //lvl 5: underwater volcano 
    background(backImg5);

    playerSetUp();

    if (player.overlapping(invis7))
      {
        i2 = true;
        canMove = false;
        txt7 = new textBubbles.Sprite(textBubbleImg, 420, 200, "n");
        txt7.text = "EVERYTHING IS FUCKING FALLING \n Press E to Continue";
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
        } 
       else
          canMove = false;
        }

   

    
    if(player.collides(lvl5End)){
      lvl5End.remove();
      platforms.remove(); 
      enemies.remove();
      lamps.remove();

      player.y = 350;
      player.x = 20; 
      screen = 80;
  }
  }

  if(screen == 80){ //END SCREEN
    background(132, 141, 217);
    player.remove(); 
    enemies.remove();
    platforms.remove();
    light.remove(); 
    
    fill(255);
    textSize(40);
    textAlign(CENTER, TOP);
    text("thank for playing", width / 2, height / 2 - 150);
  }

  if(screen == 100){
   
    deathCard1(); 


  }


}//end of DRAW

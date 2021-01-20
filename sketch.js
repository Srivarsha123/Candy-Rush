var bgImg;
var form;
var gameState = 1;
var cookieTrackImg, cookieTrack;
var runner;
var girlA, boyA, icecreamManA, gingerbreadmanA; 
var girl, boy, icecreamMan, gingerbreadman;
var girlImg, boyImg, icecreamManImg, gingerbreadmanImg;  
var three, four, five;
var threeImg, fourImg, fiveImg;
var obstaclesGroup, obstacle;
var obstacle1, obstacle2, obstacle3, obstacle4;
var a, b, c, d;

function preload(){
bgImg = loadImage("Img/final display.png")
cookieTrackImg = loadImage("Img/Tracks/Cookie Track.png")
girlA = loadAnimation("Img/Girl Animation/girl running 1.png", "Img/Girl Animation/girl running 2.png", 
"Img/Girl Animation/girl running 3.png", "Img/Girl Animation/girl running 4.png", 
"Img/Girl Animation/girl running 5.png", "Img/Girl Animation/girl running 6.png", 
"Img/Girl Animation/girl running 7.png", "Img/Girl Animation/girl running 8.png",)
girlImg = loadImage("Img/Characters/girl.png")
boyImg = loadImage("Img/Characters/boy.png")
gingerbreadmanImg = loadImage("Img/Characters/ginger.png")
icecreamManImg = loadImage("Img/Characters/ice.png")
obstacle1 = loadImage("Obstacles/obstacle1.png");
obstacle2 = loadImage("Obstacles/obstacle2.png");
obstacle3 = loadImage("Obstacles/obstacle3.png");
obstacle4 = loadImage("Obstacles/obstacle4.png");
}

function setup() {
  createCanvas(1600, 900);
  form = new Form();
  form.display();

  cookieTrack = createSprite(width/2, height/2, width, height);
  cookieTrack.addImage(cookieTrackImg);
  cookieTrack.visible = false;
  cookieTrack.scale = 1.8;
  cookieTrack.velocityY = 5;

  runner = createSprite(width/2, 720, 100, 100);
  runner.addAnimation("hello",girlA);
  runner.scale = 0.2;
  runner.visible = false;

  girl = createSprite(250, height/2, 100, 100);
  girl.addImage(girlImg);
  girl.scale = 0.8;
  girl.visible = false;

  boy = createSprite(600, height/2, 100, 100);
  boy.addImage(boyImg);
  boy.scale = 1.8;
  boy.visible = false;

  gingerbreadman = createSprite(950, height/2, 100, 100);
  gingerbreadman.addImage(gingerbreadmanImg);
  gingerbreadman.scale = 1.2;
  gingerbreadman.visible = false;
  
  icecreamMan = createSprite(1300, height/2, 100, 100);
  icecreamMan.addImage(icecreamManImg);
  icecreamMan.scale = 1.8;
  icecreamMan.visible = false;

  a = createSprite(250, height/2, 100, 100);
  a.addImage(obstacle1);
  a.visible = false;

  b = createSprite(600, height/2, 100, 100);
  b.addImage(obstacle2);
  b.visible = false;

  c = createSprite(950, height/2, 100, 100);
  c.addImage(obstacle3);
  c.visible = false;
  
  d = createSprite(1300, height/2, 100, 100);
  d.addImage(obstacle4);
  d.visible = false;

  obstaclesGroup = new Group();

}

function draw() {
  if(gameState!=3){
  background(bgImg); 
  }
  else{
    background("black")
    cookieTrack.visible = true;
    runner.visible = true;
    if (keyIsDown(RIGHT_ARROW)&&runner.x != 1305) {
      runner.x = runner.x+505;
    }
    else if (keyIsDown(LEFT_ARROW)&&runner.x != 295) {
      runner.x = runner.x-505;
      console.log(runner.x)
    }
    if (cookieTrack.y < 0){
    cookieTrack.y = 450;
    }
  }
  if(gameState === 5){
    icecreamMan.visible = true;
    gingerbreadman.visible = true;
    boy.visible = true;
    girl.visible = true;
    textSize(30);
    fill("black")
    stroke(25)
    textFont("Bahnschrift")
    text("GINGER BREAD MAN", 825, 650);
    text("500000 CHOCOLATES", 825, 700);
    text("CANDY GIRL", 200, 650);
    //if(form.dropdown.selected === "Female"){
      text("MY CHARACTER", 170, 700);
      text("300000 CHOCOLATES", 450, 700);
    //}
    //else if(form.dropdown.selected === "Male"){
      //text("MY CHARACTER", 450, 700);
      //text("300000 CHOCOLATES", 170, 700);
    //}
    text("CANDY BOY", 525, 655);
    text("ICECREAM PRINCESS", 1170, 650);
    text("1000000 SCORE", 1210, 700);
    textSize(50);
    text("MY CHARACTERS", 650, 205);
  }

  if(gameState === 4){
    a.visible = true;
    b.visible = true;
    c.visible = true;
    d.visible = true;

    textSize(30);
    fill("black")
    stroke(25)
    textFont("Bahnschrift")
    text("RISKY RAINBOW", 825, 650);
    text("BEND TO CROSS", 825, 700);
    text("WALL", 200, 650);
    text("MOVE ASIDE TO CROSS", 70, 700);
    text("JUMP TO CROSS", 500, 700);
    text("CHOCO EATER", 525, 655);
    text("HOT CHOCOLATE PUDDLE", 1170, 650);
    text("JUMP TO CROSS", 1210, 700);
    textSize(50);
    text("OBSTACLES", 650, 205);
  }

  //if(gameState === 0){
    //form.title.hide();
    //form.dropdown.hide();
    //form.button.hide();
    //for (var i=0; i<=360; i++) {
      //noFill();
      //stroke(15)
      //arc(750, height/2,50,50,0, i);
      //if(i === 360){
        //gameState = 1;
      //}
    //}
  //}
  //console.log(form.dropdown.selected()) 
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(gameState === 3){
  if(frameCount % 400 === 0 || frameCount === 200) {
    var obstacle = createSprite(200,-2,10,40);
    obstacle.velocityY = 5;

    var numbers = [295, 1305, 800];
    var x = random(numbers);

    obstacle.x = x;
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      default: break;
    }          
    obstacle.scale = 1.5;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}
}
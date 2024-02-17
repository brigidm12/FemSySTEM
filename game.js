/* 
global createCanvas, textFont, textSize, remove, loadFont, drawSprite, rect, frameRate, frameCount, keyIsDown, keyIsPressed, key, overlap, keyCode, drawSprites, erase, loadImage,createSprite, text, colorMode, background, HSB, height, random, width, noStroke, fill, ellipse
*/
var bg;
var points;
var myFont;
var counter1;
var counter2;
var counter3;
var counter4;
var counter5;


function preload() {
  myFont = loadFont("pics/IBMPlexMono-Medium.ttf");
}


function setup() {
  createCanvas(948, 483);
  colorMode(HSB, 100);
  // Fact sprites
  factSprite1 = createSprite(240, 380); 
  factSprite2 = createSprite(730, 320);
  factSprite3 = createSprite(250, 230); 
  factSprite4 = createSprite(380, 100); 
  factSprite5 = createSprite(780, 160); 
  loadFacts();

  // Initialize dots
  dots = [];
  for (let i=0; i<100; i++) {
    dots.push(new BouncyDot());
  }

  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  counter4 = 0;
  counter5 = 0;
  points = 0;

  // Pokeball sprites
  pokeballSprite1 = createSprite(170, 460);
  pokeballSprite2 = createSprite(450, 180);
  pokeballSprite3 = createSprite(675, 380);
  pokeballSprite4 = createSprite(160, 280);
  pokeballSprite5 = createSprite(835, 225);
  loadPokeball();

  // Main player sprite
  imageSpriteGirl = createSprite(300, 380);
  girlPlayer();
  bg = loadImage("pics/background_house.png");
  frameRate(50);
}


function girlPlayer() {
  // Loads the animation pictures
  girl1 = loadImage("pics/gs/girlwalk.png");
  girl2 = loadImage("pics/gs/girlwalk2.png");
  girl3 = loadImage("pics/gs/girlwalk3.png");
  girl4 = loadImage("pics/gs/girlwalk4.png");

  girl5 = loadImage("pics/gs/girlwalk5.png");
  girl6 = loadImage("pics/gs/girlwalk6.png");
  girl7 = loadImage("pics/gs/girlwalk7.png");
  girl8 = loadImage("pics/gs/girlwalk8.png");

  girl9 = loadImage("pics/gs/girlwalk9.png");
  girl10 = loadImage("pics/gs/girlwalk10.png");
  girl11= loadImage("pics/gs/girlwalk11.png");
  girl12= loadImage("pics/gs/girlwalk12.png");

  girl13 = loadImage("pics/gs/girlwalk13.png");
  girl14 = loadImage("pics/gs/girlwalk14.png");
  girl15 = loadImage("pics/gs/girlwalk15.png");
  girl16 = loadImage("pics/gs/girlwalk16.png");

  // Creates the animations
  imageSpriteGirl.addAnimation("walkdown", girl1, girl2, girl3, girl4);
  imageSpriteGirl.addAnimation("walkleft", girl5, girl6, girl7, girl8);
  imageSpriteGirl.addAnimation("walkright", girl9, girl10, girl11, girl12);
  imageSpriteGirl.addAnimation("walkup", girl13, girl14, girl15, girl16);
  imageSpriteGirl.addAnimation("standing", girl1, girl3, girl1);
}

function loadPokeball() {
  laptop1 = loadImage("pics/laptop/laptop1.png");
  laptop2 = loadImage("pics/laptop/laptop2.png");
  laptop3 = loadImage("pics/laptop/laptop3.png");
  laptop4 = loadImage("pics/laptop/laptop4.png");
  laptop5 = loadImage("pics/laptop/laptop5.png");

  pokeballSprite1.addImage(laptop1);
  pokeballSprite2.addImage(laptop2);
  pokeballSprite3.addImage(laptop3);
  pokeballSprite4.addImage(laptop4);
  pokeballSprite5.addImage(laptop5);

}

function loadFacts() {
  fact1 = loadImage("pics/facts/fact1.png");
  fact2 = loadImage("pics/facts/fact2.png");
  fact3 = loadImage("pics/facts/fact3.png");
  fact4 = loadImage("pics/facts/fact4.png");
  fact5 = loadImage("pics/facts/fact5.png");

  factSprite1.addImage(fact1);
  factSprite2.addImage(fact2);
  factSprite3.addImage(fact3);
  factSprite4.addImage(fact4);
  factSprite5.addImage(fact5);

  factSprite1.visible = false;
  factSprite2.visible = false;
  factSprite3.visible = false;
  factSprite4.visible = false;
  factSprite5.visible = false;
}

function draw() {
  background(bg);
  drawSprites();
  moveSprite();
  checkOverlap();
  displayScores();
  gameOver();
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].float();
    dots[i].display();
  }
}

function moveSprite() {
  if (keyIsDown(65)) {
    imageSpriteGirl.changeAnimation("walkleft");
    imageSpriteGirl.position.x--;
    imageSpriteGirl.velocity.x = -1;
    imageSpriteGirl.velocity.y = 0;
  }
  if (keyIsDown(68)) {
    imageSpriteGirl.changeAnimation("walkright");
    imageSpriteGirl.position.x++;
    imageSpriteGirl.velocity.y = 0;
    imageSpriteGirl.velocity.x = 1;
  }
  if (keyIsDown(87)) {
    imageSpriteGirl.changeAnimation("walkup");
    imageSpriteGirl.position.y--;
    imageSpriteGirl.velocity.y = -1;
    imageSpriteGirl.velocity.x = 0;
  }
  if (keyIsDown(83)) {
    imageSpriteGirl.changeAnimation("walkdown");
    imageSpriteGirl.position.y++;
    imageSpriteGirl.velocity.y = 1;
    imageSpriteGirl.velocity.x = 0;
  }
  if (!keyIsPressed) {
    imageSpriteGirl.stop;
    //imageSpriteGirl.changeImage("standing");
    imageSpriteGirl.setVelocity(0,0);
  }
}

// Checks if the player and pokeball are touching
function checkOverlap() {
  if (imageSpriteGirl.overlap(pokeballSprite1) && counter1 == 0) {
    factSprite1.visible = true;
    if (frameCount % 300 === 0){
      pokeballSprite1.visible = false;
      factSprite1.visible = false;
      points++;
      counter1++;
    }
  } else {
    factSprite1.visible = false;
  }
  if (imageSpriteGirl.overlap(pokeballSprite2) && counter2 == 0) {
    factSprite4.visible = true;
    if (frameCount % 300 === 0){
      pokeballSprite2.visible = false;
      factSprite4.visible = false;
      points++;
      counter2++;
    }
  } else {
    factSprite4.visible = false;
  }
  if (imageSpriteGirl.overlap(pokeballSprite3) && counter3 == 0) {
    factSprite2.visible = true;
    if (frameCount % 200 === 0){
      pokeballSprite3.visible = false;
      factSprite2.visible = false;
      points++;
      counter3++;
    }
  } else {
    factSprite2.visible = false;
  }
  if (imageSpriteGirl.overlap(pokeballSprite4) && counter4 == 0) {
    factSprite3.visible = true;
    if (frameCount % 300 === 0){
      pokeballSprite4.visible = false;
      factSprite3.visible = false;
      points++;
      counter4++;
    }
  } else {
    factSprite3.visible = false;
  }
  if (imageSpriteGirl.overlap(pokeballSprite5) && counter5 == 0) {
    factSprite5.visible = true;
    if (frameCount % 300 === 0){
      pokeballSprite5.visible = false;
      factSprite5.visible = false;
      points++;
      counter5++;
    }
  } else {
    factSprite5.visible = false;
  }
  if (imageSpriteGirl.overlapPixel(700, 100)) {
    points--;
    displayText();
  }

}

// Creates randomly-colored balls
class BouncyDot {
  constructor() {
    // Randomly generate position
    this.x = random(width);
    this.y = random(height);
    // Randomly generate radius
    this.r = random(5, 12);
    // Randomly generate color
    this.color = random(360);
    // Randomly generate a master velocity (broken into components)...
    this.masterXvelocity = random(0.5, 3);
    this.masterYvelocity = random(0.5, 3);
    // ...and use those as starting velocities.
    this.xVelocity = this.masterXvelocity;
    this.yVelocity = this.masterYvelocity;
  }

  float() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    // Standard bounce code - like the DVD logo, but for spheres.
    if (this.x + this.r > width) {
      this.xVelocity = -1 * this.masterXvelocity;
    }
    if (this.x - this.r < 0) {
      this.xVelocity = this.masterXvelocity;
    }
    if (this.y + this.r > height) {
      this.yVelocity = -1 * this.masterYvelocity;
    }
    if (this.y - this.r < 0) {
      this.yVelocity = this.masterYvelocity;
    }
  }

  display() {
    fill(this.color, 80, 70, 20);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}

// Displays the current score
function displayScores() {
  textSize(20);
  fill(0);
  textFont(myFont);
  text(`score: ${points}`, 10, 40);
}

// Sets game over when all facts have been found
function gameOver() {
  if (points == 5) {
    textSize(30);
    fill(0);
    textFont(myFont);
    text(`GAME OVER. Congrats, you win!`, 250, 320);
  } else if (counter1==1 && counter2 ==1 && counter3 == 1 && counter4 == 1 && counter5 ==1) {
    textSize(30);
    fill(0);
    textFont(myFont);
    text(`GAME OVER. You lost - stay safe!`, 250, 320);
  }
}

function displayText() {
  textSize(20);
  fill(0);
  textFont(myFont);
  text(`COVID OUTSIDE, MUST STAY INDOORS.`, 360, 34);
}
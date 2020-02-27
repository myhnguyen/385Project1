//Project 1 by My Nguyen
var state;
var stateLeadwort = 1;
var stateDaisy = 2;
var statePoppy = 3;
var stateRose = 4;
var stateOrchid = 5;
var stateLily = 6;
var imageList = [];
/*
  Clicked in Rect Example
  by Scott Kildall
  
  Draw 3 rectangles and see if user clicked in them

  Somewhat hard-coded, ie no arrays
*/
rwidth = 40;
rheight = 40;
var rectLeft = 20;
// Rect 1

rect1Top = 20;

// Rect 2
rect2Top = 80;

// Rect 3
rect3Top = 140;

// Rect 4
rect4Top = 200;

// Rect 5
rect5Top = 260;


msgString = "try clicking on an icon!"; // tell us what's going on
name = "";

function preload() { //setting up the images in the list
  imageList[0] = loadImage('assets/Leadwort.png');
  imageList[1] = loadImage('assets/Daisy.png');
  imageList[2] = loadImage('assets/Poppy.png');
  imageList[3] = loadImage('assets/Rose.png');
  imageList[4] = loadImage('assets/Orchid.png');
  imageList[5] = loadImage('assets/Lily.png');
}


function setup() {
  createCanvas(1000, 750);
  imageMode(CENTER);
  rectMode(CORNER);

  sun1 = loadImage('assets/sun1.png'); // Load the image
  sun2 = loadImage('assets/sun2.png');
  soil1 = loadImage('assets/soil1.png'); // Load the image
  soil2 = loadImage('assets/soil2.png');
  temp1 = loadImage('assets/temp1.png'); // Load the image
  temp2 = loadImage('assets/temp2.png');
  cursor = loadImage('assets/cursor.png');
  spark = loadImage('assets/spark.gif');
  song = loadSound('assets/Old_Bossa.mp3');
noCursor();
  state = stateLeadwort;
}

function draw() {
  

  if (state == stateLeadwort)
    Leadwort();
  if (state == stateDaisy)
    Daisy();
  if (state == statePoppy)
    Poppy();
  if (state == stateRose)
    Rose();
  if (state == stateOrchid)
    Orchid();
  if (state == stateLily)
    Lily();

  drawRects();

  // draw message text
  drawDebugMsg();
  image(cursor,mouseX, mouseY);
  passSpark();

}

function keyPressed() { //set up changing states
  if (key == '1') {
    state = stateLeadwort;
    print("changing to image1");
  } else if (key == '2') {
    state = stateDaisy;
    print("changing to image2");
  } else if (key == '3') {
    state = statePoppy;
    print("changing to image3");
  } else if (key == '4') {
    state = stateRose;
    print("changing to image4");
  } else if (key == '5') {
    state = stateOrchid;
    print("changing to image5");
  } else if (key == '6') {
    state = stateLily;
    print("changing to Lily");
  }

}


function Leadwort() {
   background(237, 212, 247);
  image(imageList[0], width / 2, height / 2);

  Icons();
  drawRects();
  // draw message text
  drawDebugMsg();
  name = "Leadwort";

}


function Daisy() {
  background(201, 174, 182);
  image(imageList[1], width / 2, height / 2);
  Icons();
  drawRects();
  // draw message text
  drawDebugMsg();
  name = "Daisy";


}


function Poppy() {
  background(201, 235, 247);
  image(imageList[2], width / 2, height / 2);
  Icons();
  drawRects();
  // draw message text
  drawDebugMsg();
  name = "Poppy";
}


function Rose() {

   background(255, 247, 163);
  image(imageList[3], width / 2, height / 2);
  Icons();
  drawRects();
  // draw message text
  drawDebugMsg();
  name = "Rose";
}


function Orchid() {
  background(177, 212, 173);
  image(imageList[4], width / 2, height / 2);
  Icons();
  drawRects();
  // draw message text
  drawDebugMsg();
  name = "Orchid";

}


function Lily() {
  background(255, 207, 173);
  image(imageList[5], width / 2, height / 2);
  Icons();
  drawRects();
  // draw message text
  drawDebugMsg();
  name = "Lily";


}


function Icons() {

  if (mouseX >= 10 && mouseX <= 70 && mouseY >= 10 && mouseY <= 70) {
    image(sun1, 40, 40);
    image(sun2, 40, 40);
  } else
    image(sun1, 40, 40);

  if (mouseX >= 10 && mouseX <= 70 && mouseY >= 70 && mouseY <= 140) {
    image(soil1, 40, 100);
  } else
    image(soil2, 40, 100);

  if (mouseX >= 10 && mouseX <= 70 && mouseY >= 130 && mouseY <= 180) {
    image(temp1, 40, 160);
  } else
    image(temp2, 40, 160);

  if (mouseX >= 10 && mouseX <= 70 && mouseY >= 200 && mouseY <= 250) {
    translate(40, 220);
    noStroke();
    fill(214, 137, 166);
    for (let i = 0; i < 10; i++) {
      ellipse(0, 10, 8, 20);
      rotate(PI / 5);
    }
    fill(237, 255, 166)
    ellipse(0, 0, 10, 10);
  } else {
    translate(40, 220);
    noStroke();
    fill(130, 165, 162);
    for (let i = 0; i < 10; i++) {
      ellipse(0, 10, 8, 20);
      rotate(PI / 5);
    }

    fill(130, 227, 162);
    ellipse(0, 0, 10, 10);
  }
  if (mouseX >= 10 && mouseX <= 70 && mouseY >= 270 && mouseY <= 330) {
    fill(242, 117, 31);
    textSize(35);
    text('!!!!!!!!', -15, 70);
  } else {
    fill(242, 117, 31);
    textSize(35);
    text('!!!', -15, 70);
  }

  translate(-40, -220);
}




function drawDebugMsg() {
  textFont('Homemade Apple');

  textSize(25);
  fill(0);
  noStroke();
  text(name, width * 3 / 7, height * 1 / 9);
  text(msgString, width * 2 / 3, height * 1 / 8, 300, 600);
}

function drawRects() {
  // draw an red at center
  noFill(255, 0, 0);
  noStroke();

  rect(rectLeft, rect1Top, rwidth, rheight);
  rect(rectLeft, rect2Top, rwidth, rheight);
  rect(rectLeft, rect3Top, rwidth, rheight);
  rect(rectLeft, rect4Top, rwidth, rheight);
  rect(rectLeft, rect5Top, rwidth, rheight);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    if (mouseX>=380 && mouseX<=590 && mouseY>=430 && mouseY<=580 )
      song.stop();

  } else if (mouseX>=380 && mouseX<=590 && mouseY>=430 && mouseY<=580 ) {
    song.play();
  }
  if (state == stateLeadwort) {
    print("state Leadwort");
    if (isMouseInRect(rectLeft, rect1Top, rwidth, rheight)) {
     // name = "Leadwort";
      msgString = "Starting in the late summer, but lasting until early fall, Leadwort features dainty, dark blue flowers.";
    } else if (isMouseInRect(rectLeft, rect2Top, rwidth, rheight))
      msgString = "This flower likes well-drained soil!";
    else if (isMouseInRect(rectLeft, rect3Top, rwidth, rheight))
      msgString = "Leadworts are fine when left with morning sun and afternoon shade.";
    else if (isMouseInRect(rectLeft, rect4Top, rwidth, rheight))
      msgString = "Blooms in late summer to early fall.";
    else if (isMouseInRect(rectLeft, rect5Top, rwidth, rheight))
      msgString = "Fun Fact: Leadworts are a non-invasive species!";
    else
      msgString = "try clicking on an icon!";
  } else if (state == stateDaisy) {
    print("state Daisy");
    if (isMouseInRect(rectLeft, rect1Top, rwidth, rheight)) {
      //name = "Daisy";
      msgString = "The iconic, playful daisy is most recognized for its bright yellow center and white petals.";
    } else if (isMouseInRect(rectLeft, rect2Top, rwidth, rheight))
      msgString = "Daisies are easy to grow and not fussy when it comes to soil types";
    else if (isMouseInRect(rectLeft, rect3Top, rwidth, rheight))
      msgString = "Daisies thrive in full sun.";
    else if (isMouseInRect(rectLeft, rect4Top, rwidth, rheight))
      msgString = "Blooms in mid summer to early fall.";
    else if (isMouseInRect(rectLeft, rect5Top, rwidth, rheight))
      msgString = "Fun Fact: Daisies belong to one of the largest families of plants in the world.";
    else
      msgString = "try clicking on an icon!";

  } else if (state == statePoppy) {
    print("state Poppy");
    if (isMouseInRect(rectLeft, rect1Top, rwidth, rheight)) {
      name = "Poppy";
      msgString = "The California poppy is ideal for gardens in dry, sandy areas with full sun.";
    } else if (isMouseInRect(rectLeft, rect2Top, rwidth, rheight))
      msgString = "Poppies need water! Lots of water!";
    else if (isMouseInRect(rectLeft, rect3Top, rwidth, rheight))
      msgString = "Poppies love Cali sun!";
    else if (isMouseInRect(rectLeft, rect4Top, rwidth, rheight))
      msgString = "Blooms in mid summer to mid fall.";
    else if (isMouseInRect(rectLeft, rect5Top, rwidth, rheight))
      msgString = "Fun Fact: Coming in a variety of colors including red, orange, yellow, white and pink, be sure to cut this wildflower to display inside.";
    else
      msgString = "try clicking on an icon!";


  } else if (state == stateRose) {
    print("state Rose");
    if (isMouseInRect(rectLeft, rect1Top, rwidth, rheight)) {
      name = "Rose";
      msgString = "With more than 100 species, the Rose is most commonly categorized for its trailing stems with sharp prickles.Roses also vary in size and shape, but are vibrant in colors ranging from red, yellow, orange, blue, white and pink. ";
    } else if (isMouseInRect(rectLeft, rect2Top, rwidth, rheight))
      msgString = "Roses drink sometimes.";
    else if (isMouseInRect(rectLeft, rect3Top, rwidth, rheight))
      msgString = "Sun in moderation for roses, please!";
    else if (isMouseInRect(rectLeft, rect4Top, rwidth, rheight))
      msgString = "Blooms in late spring to early fall.";
    else if (isMouseInRect(rectLeft, rect5Top, rwidth, rheight))
      msgString = "Fun Fact: Given the many species, Roses also hybirdize easily, allowing you to explore the many varieties.";
    else
      msgString = "try clicking on an icon!";

  } else if (state == stateOrchid) {
    print("state Orchid");
    if (isMouseInRect(rectLeft, rect1Top, rwidth, rheight)) {
      name = "Orchid";
      msgString = "As one of the top two largest flower plant families, the Orchid consists of about 27,800 accepted species. They come in a vareity of tropical colors, including violet, pink, orange, red and white.";
    } else if (isMouseInRect(rectLeft, rect2Top, rwidth, rheight))
      msgString = "Well-drained soil is best for orchids!";
    else if (isMouseInRect(rectLeft, rect3Top, rwidth, rheight))
      msgString = "Full sun with some shade is preferable!";
    else if (isMouseInRect(rectLeft, rect4Top, rwidth, rheight))
      msgString = "Blooms in early spring to early fall.";
    else if (isMouseInRect(rectLeft, rect5Top, rwidth, rheight))
      msgString = "Fun Fact: The smallest orchid is the size of a dime.";
    else
      msgString = "try clicking on an icon!";

  } else if (state == stateLily) {
    print("state Lily");
    if (isMouseInRect(rectLeft, rect1Top, rwidth, rheight)) {
      name = "Lily";
      msgString = "These fragrant flowers come in a range of colors including white, yellow, orange, pink, red and purple and some include markings such as spots or brush strokes. These beauties shine indoors, just be sure to cut their filaments to avoid pollen stains!";
    } else if (isMouseInRect(rectLeft, rect2Top, rwidth, rheight))
      msgString = "Well-drained soil is best for lilies!";
    else if (isMouseInRect(rectLeft, rect3Top, rwidth, rheight))
      msgString = "Full sun is preferable!";
    else if (isMouseInRect(rectLeft, rect4Top, rwidth, rheight))
      msgString = "Blooms in spring to early fall.";
    else if (isMouseInRect(rectLeft, rect5Top, rwidth, rheight))
      msgString = "Fun Fact: The lily has a diversity of symbolism throughout the world.";
    else
      msgString = "try clicking on an icon!";


  }


}

// rectL = left edge
// rectW = width
// right edge = left edge + width
function isMouseInRect(rectL, rectT, rectW, rectH) {
  // check X first
  if (mouseX >= rectL && mouseX <= rectL + rectW) {
    if (mouseY >= rectT && mouseY <= rectT + rectH) {
      // must satisfy *both* conditions
      return true;
    }
  }

  return false;
}

function passSpark(){
  if (mouseX>=380 && mouseX<=590 && mouseY>=430 && mouseY<=580)
  {
    image(spark, width/2, height/2);

  }
}





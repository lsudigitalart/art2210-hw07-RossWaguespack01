let c 
let redValue
let sound;
let soundPlayed = false;
let startTime;

function preload() {
    sound = loadSound('Heartbeat.mp3');
}
function setup() {
    createCanvas(180, 600);
  background(20, 20, 40);
  startTime = millis();
  userStartAudio();
//   c = color(0)
  fill(234, 51, 102); 
  noStroke();
}
function mousePressed(){
    if (!soundFile.isPlaying()) {
        soundFile.play();
    }
}

function draw(){
    if (!soundPlayed) {
        sound.play();
        soundPlayed = true;
}

if (millis() - startTime > 1000 &&millis ()- startTime < 3500) {
     //square
    //  background(0);


     push()
     rotate(QUARTER_PI);
     square(120, -20, 50); 
     //circle one
     circle(120, 5, 50);
     //circle two
     circle(145, -17, 50);
     pop()
}

if (millis() - startTime > 3000 && millis()- startTime < 4500) {
    //square
    // background(255);


    push();
    push()
    rotate(QUARTER_PI);
    translate(70, 70)

    square(120, -20, 50); 
    //circle one
    circle(120, 5, 50);
    //circle two
    circle(145, -17, 50);
    pop()
}

if (millis() - startTime > 4000 && millis()- startTime < 5500) {
    //square
    // background(0);


    push()
    rotate(QUARTER_PI);
    translate(140, 140)

    square(120, -20, 50); 
    //circle one
    circle(120, 5, 50);
    //circle two
    circle(145, -17, 50);
    pop()
}

if (millis() - startTime > 5000 && millis()- startTime < 6500) {
    //square
    // background(0);


    push()
    rotate(QUARTER_PI);
    translate(210, 210)

    square(120, -20, 50); 
    //circle one
    circle(120, 5, 50);
    //circle two
    circle(145, -17, 50);
    pop()
}

if (millis() - startTime > 6000 && millis()- startTime < 7500) {
    //square
    // background(0);


    push()
    rotate(QUARTER_PI);
    translate(280, 280)

    square(120, -20, 50); 
    //circle one
    circle(120, 5, 50);
    //circle two
    circle(145, -17, 50);
    pop()
}

if (millis() - startTime > 7000 && millis()- startTime < 8500) {
    //square
    // background(0);


    push()
    rotate(QUARTER_PI);
    translate(90, -90)

    square(120, -20, 50); 
    //circle one
    circle(120, 5, 50);
    //circle two
    circle(145, -17, 50);
    pop()
}

if (millis() - startTime > 8000 && millis()- startTime < 9500) {
    //square
    // background(0);


    push()
    rotate(QUARTER_PI);
    translate(120, -120)

    square(120, -20, 50); 
    //circle one
    circle(120, 5, 50);
    //circle two
    circle(145, -17, 50);
    pop()
}
}

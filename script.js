let white = "#f1f1f1";
let black = 0;

let bg, fg, fg_re;
let moving, moving_speed;
bg = 100;
fg = white;
fg_re = black;
let tileX = 2;
let tileY, tileW, tileH;
let switchDir = 1;

function setup() {
  createCanvas(600, 600);
  // angleMode(DEGREES);
}

function draw() {  
  background(bg);
  strokeCap(ROUND);
  strokeWeight(0.75);
  
  tileY = tileX;
  tileW = width/tileX;
  tileH = height/tileY;
  
  moving_speed = sin(frameCount * 0.08);
  moving = map(moving_speed, -1, 0, 0.8, 0);
  moving_re = map(moving_speed, 0, 1, 0, 0.8);
  
  if(frameCount % 120 == 0) {
    tileX = int(random(1,4)) * 2;
  }
  // console.log(tileX);
  
  translate(tileW/2, tileH/2);
  for(let y = 0; y < tileY; y++) {
    for(let x = 0; x < tileX; x++) {
      if(x % 1 == 0) {
        switchDir *= -1;
      }
      push();
      translate(tileW * x, tileH * y);
        ball(0, 0, 32 * (x+1) * (y+1), switchDir);
      pop();
    }    
  }
  
  // ball(width/2, height/2, 30, 1);
}


function ball(x, y, rot, dir) {
  noStroke();

  push();
  translate(x, y);
  rotate(radians(frameCount + rot) * dir);
  
  if(moving_speed < 0) {
    
    stroke(fg_re);
    fill(fg_re);
    arc(0, 0, tileW, tileH, PI, 0, CHORD);
    //
    fill(fg);
    stroke(fg);
    arc(0, 0, tileW, tileH, 0, PI, CHORD);
    arc(0, 0, tileW, tileH * moving_re, PI, 0);
    
  } else {
    
    stroke(fg);
    fill(fg);
    arc(0, 0, tileW, tileH, 0, PI, CHORD);  
    //
    stroke(fg_re);
    fill(fg_re);
    arc(0, 0, tileW, tileH, PI, 0, CHORD);
    arc(0, 0, tileW, tileH * moving, 0, PI);
  
  }
  pop();  
}
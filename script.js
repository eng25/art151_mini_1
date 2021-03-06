function setup() {
  let w = windowWidth;
  let h = windowHeight;
  createCanvas(w, h);
}

function draw() {  
  let w = windowWidth;
  let h = windowHeight;
  let maxL = sqrt(pow(w, 2) + pow(h, 2));
  background(0);

  // top left
  drawLines(0,   0,   0,   90, 12);
  // top mid
  drawLines(w/2, 0,   0,   180, 12);
  // top right
  drawLines(w,   0,   90,  180, 12);
  // center left
  drawLines(0,   h/2, -90, 90, 12);
  // center right
  drawLines(w,   h/2, 90,  270, 12);
  // bottom left
  drawLines(0,   h,   270, 360, 12);
  // bottom mid
  drawLines(w/2, h,   180, 360, 12);
  // bottom right
  drawLines(w,   h,   270, 360, 12);
  // center
  drawLines(w/2, h/2, 0,   360, 24);
  NoLoop();
}

function drawLines(originX, originY, minAngle, maxAngle, numLines)
{
  let w = windowWidth;
  let h = windowHeight;
  let maxL = sqrt(pow(w, 2) + pow(h, 2));
  for (let i = 0; i < numLines; i++)
  {
    let d = random(minAngle, maxAngle);
    let rl = random(windowWidth/2, maxL);
    let v = p5.Vector.fromAngle(radians(d), rl);
    let rc = random(50, 255);
    stroke(rc);
    let rw = random(.25, .5);
    strokeWeight(rw);
    line(originX, originY, v.x, v.y);
  }
}

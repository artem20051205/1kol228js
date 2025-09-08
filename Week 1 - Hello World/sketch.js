let img;
function setup() {
  createCanvas(800, 800);
    console.log("Hallo!");
}

function draw() {
  background("#1b3c52");
//1
  text("Artem Oliinyk", 50, 50);
  textSize(42);
//2
  fill ("red")
  rect(100, 100, 200, 33)
  fill ("white")
  rect(100, 133, 200, 33)
  fill ("blue")
  rect(100, 166, 200, 33)
//3
fill ("white")
rect(100, 220, 150, 150)
fill("black")
rect(100, 220, 50, 50)
rect(100, 320, 50, 50)
rect(200, 320, 50, 50)
rect(200, 220, 50, 50)
rect(150, 270, 50, 50)
//4
stroke("black")
fill("#1b3c52")
triangle(155, 420, 100, 520, 220, 520)
rect(100, 520, 120, 120)
//5
fill("grey")
rect(400, 100, 50, 150)
rect(412.5, 250, 25, 70)
fill("red")
circle(425, 130, 25)
fill("yellow")
circle(425, 170, 25)
fill("green")
circle(425, 210, 25)
//6
  fill(255)
  rect(350, 350, 100, 100, 10);
  fill(0)
  strokeWeight(2);     
  circle(375,375,25);
  fill(0)
  circle(400,400,25);
  fill(0)
  circle(425,425,25);
//7
fill("red")
strokeWeight(0)
rect(620, 100, 90,20)
rect(600, 120, 150,20)
fill("#fedd99ff")
rect(600, 140, 150,100)
fill("#1b3c52")
rect(710, 140, 150,20)
fill("#1b3c52")
rect(710, 220, 150,20)
fill("#1b3c52")
rect(730, 200, 150,20)
fill("#000000ff")
rect(660, 200, 70,20)
fill("#000000ff")
rect(680, 180, 20,20)
fill("#000000ff")
rect(660, 140, 20,40)
}
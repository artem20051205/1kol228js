
function setup() {
  createCanvas(1600, 1200);
    console.log("Hallo!");
}
let img;
let c = 1;
function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/F-15C_%D0%BD%D0%B0%D0%B4_%D0%A2%D0%B8%D1%85%D0%B8%D0%BC_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%BE%D0%BC.jpg/800px-F-15C_%D0%BD%D0%B0%D0%B4_%D0%A2%D0%B8%D1%85%D0%B8%D0%BC_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%BE%D0%BC.jpg');
}

function draw() {
  background("#1b3c52");
//1
strokeWeight(5)
fill(0)
  text("Artem Oliinyk", 50, 50);
  textSize(42);
//2
strokeWeight(0)
  fill ("red")
  rect(100, 100, 200, 33)
  fill ("white")
  rect(100, 133, 200, 33)
  fill ("blue")
  rect(100, 166, 200, 33)
//3
strokeWeight(5)
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
strokeWeight(0)
text("Mario", 600, 50);
fill("red")
rect(620, 100, 220,40)
fill("#ffc387ff")
rect(620, 140 ,120 ,100)
rect(720, 160 ,100 ,40)
rect(740, 220 ,20 ,20)
rect(600, 160 ,20 ,40)
rect(760, 220 ,20 ,20)
rect(560,260,240,100)
fill(0)
rect(720, 140, 20,40)
rect(740, 180, 20,20)
rect(720, 200, 80,20)
fill("#915544ff")
rect(620, 140, 60, 20)
rect(640, 140, 20, 60)
rect(600, 160, 20, 60)
rect(600, 200, 40, 20)
rect(660, 180, 20, 20)
fill("red")
rect(600,240,140,60)
rect(560,260,40,40)
rect(740,260,60,40)
rect(600,260,160,60)
fill ("blue")
rect(640,240,20,60)
rect(700,260,20,40)
rect(660,280,40,20)
rect(640,300,80,0)
rect(620,300,120,60)
rect(600,340,160,40)
fill("#915544ff")
rect(580,380,200,40)
rect(560,400,240,20)
fill("yellow")
rect(640,300,20,20)
rect(700,300,20,20)
fill("#1b3c52")
rect(620, 100, 20,20)
rect(740, 100, 100,20)
rect(800, 160, 20,20)
rect(560,260,20,20)
rect(780,260,20,20)
rect(660,360,40,60)
rect(640,380,80,40)
rect(620, 220, 20, 20)
//8
strokeWeight(2)
fill(0)
  text("link", 450, 550);
  textSize(42);
image(img, 450, 600, 300, 250)
fill (0+c,0+c,255+c)
rect (random(800,1000),random(1000,800),random(100,10))
rect(frameCount*10,50,50,50)
rect(frameCount%(width-50),100,50,50)
c++
}
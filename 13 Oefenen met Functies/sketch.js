function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  tekenHuis(100,100)
  tekenHuis(200,100)
  tekenHuis(300,100)
  tekenHuis(300,200)
  tekenHuis(300,300)
  tekenHuis(200,200)
  tekenHuis(100,200)
  tekenHuis(100,300)
  tekenHuis(200,300)
}

function tekenHuis(x, y, grootte) {
  fill('#ba0000ff')
  rect(x,y,50)
  fill("#a1a1a1ff")
  triangle(x,y,x+50,y,x+25,y-25)
  fill('#b9f0ffff')
  rect(x+5,y+15,20)
  fill('#bb6700ff')
  rect(x+30,y+25,15,25)
}
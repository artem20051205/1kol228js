function setup() {
  createCanvas(1200, 1200);

}
let red = ("#ff0000ff")
let orange = ("#ffb300ff")
let green = ("#00ff1aff")
let darkred = ("#6b0000ff")
let darkorange = ("#725000ff")
let darkgreen = ("#004a07ff")
let i = 1
let sunp = 100
let sd = 1
let c

cp = 1300
function draw() {
  background("#00b7ffff");
  fill("#272727ff")
  triangle(400,1000,650,350,900,1000)
  fill("#3a3a3aff")
  triangle(300,1000,500,600,700,1000)
  fill("#323232ff")
  triangle(800,1000,1000,700,1200,1000)
  fill("#272c3bff")
  rect(0,1000,2000,12000)
  fill("green")
  rect(0,1000,1200,40)
  fill("#0f4100ff")
  rect(0,990,1200,10)
  fill("grey")
  rect (10, 1130, 100, 10, 10)
  rect (160, 1130, 100, 10, 10)
  rect (310, 1130, 100, 10, 10)
  rect (460, 1130, 100, 10, 10)
  rect (610, 1130, 100, 10, 10)
  rect (760, 1130, 100, 10, 10)
  rect (910, 1130, 100, 10, 10)
  rect (1060, 1130, 100, 10, 10)
  fill ("#501100ff")
  rect(50,820,20,200)
  rect(150,820,20,200)
  rect(320,820,20,200)
  rect(600,820,20,200)
  rect(442,1100,20,200)
  fill("#257400ff")
  circle(50,820,150)
  circle(150,820,150)
  circle(320,820,150)
  circle(600,820,150)
  circle(442,1100,150)
  fill("#161616ff")
  rect(1000,800,50,150)
  rect(1020,950,10,90)


if (i > 0 && i < 100){
  fill(red)
  circle(1025,835,30)
  fill(darkorange)
  circle(1025,875,30)
  fill(darkgreen)
  circle(1025,915,30)
}else if (i> 200 && i<300){
  fill(darkred)
  circle(1025,835,30)
  fill(orange)
  circle(1025,875,30)
  fill(darkgreen)
  circle(1025,915,30)

}else if (i > 100&& i <200){
  fill(darkred)
  circle(1025,835,30)
  fill(darkorange)
  circle(1025,875,30)
  fill(green)
  circle(1025,915,30)
}
if (i === 300){
  i = 0
}
else{
  i++
}
fill ("yellow")
circle(sunp,100,80)
if (sd === 1 && sunp < 1150) {
  sunp++
} else if (sd === 1 && sunp >= 1150) {
  sd = 2
  sunp--
} else if (sd === 2 && sunp > 100) {
  sunp--
} else if (sd === 2 && sunp <= 100) {
  sd = 1
  sunp++
}
strokeWeight(0)
fill (155)
circle (cp,180, 100)
circle (cp+50,190, 100)
circle (cp+100,180, 100)
fill (255)
circle (cp,200, 100)
circle (cp+50,210, 80)
circle (cp+100,200, 100)

cp--
if (cp < -600){
  cp = 1300
}
fill (155)
circle (cp+200,280, 100)
circle (cp+250,290, 100)
circle (cp+300,280, 100)
fill (255)
circle (cp+200,300, 100)
circle (cp+250,310, 80)
circle (cp+300,300, 100)

fill (155)
circle (cp+400,480, 100)
circle (cp+450,490, 100)
circle (cp+500,480, 100)
fill (255)
circle (cp+400,500, 100)
circle (cp+450,510, 80)
circle (cp+500,500, 100)

fill ("green")
rect(frameCount*2 % (1400) -200,950,140)
fill("blue")
rect(frameCount*2 % (1400)-100,950,40,80)
fill(0)
circle(frameCount*2%(1400) -200,1100,50)
circle(frameCount*2%(1400)-50,1100,50)
fill ("red")
rect(frameCount % (1400) -200 ,1050,140)
fill("blue")
rect(frameCount%(1400)-100,1050,40,80)
fill(0)
circle(frameCount%(1400)-200 ,1180,40)
circle(frameCount%(1400)-60 ,1180,40)
strokeWeight(1)
frameRate(1000)
}
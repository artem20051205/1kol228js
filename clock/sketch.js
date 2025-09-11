function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  fill(255);
}
let miliseconds = 0
let secnod = 0
let minangle = 0 
let hours = 0
let hoursangle = 1
function draw() {
  console.log(miliseconds)
  background(0);
  fill(200)
  rect(0,400,1000,200)
  fill(230)
  circle(500,500,370)
  fill(255)
  circle(500,500,350)
  textSize(40)
  fill(50)
  text("3",640,510)
  text("6",500,660)
  text("9",340,510)
  text("12",480,370)

  translate(500, 500); 

  if (miliseconds >= 60){
  miliseconds = 0
  secnod++
  minangle ++
  }

  if (second >= 60){
    second = 0
    hours++
    hoursangle++
  }
  if (hours >= 24){
    hours = 0
  }
  push()
  rotate(frameCount*0.1);
  stroke(0);
  strokeWeight(5);
  line(0, 0, 150, 0);
  circle(150, 0, 10);
  pop()

  push()
  rotate(minangle)
  stroke(0, 255, 0);
  strokeWeight(8);
  line(0, 0, 100, 0);
  pop()

  push()
  rotate(hoursangle);
  stroke(100);
  strokeWeight(10);
  line(0, 0, 50, 0);
  pop()
  miliseconds++
  frameRate(100)

}
let x = 100
let greeting = "Hello World!"
let a  = 20
let b  = 10
let optellen = a + b
function setup() {
  createCanvas(1100, 1100);
}

function draw() {
  background(220);
 text(x, 20,20)
 text(greeting,20,60)
 text(optellen, 20, 100)
 text(greeting+a,20,140)
 text(b,20,180)
}
function mouseClicked(){
  b = b+random(0,1000)
}
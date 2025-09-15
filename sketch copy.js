
let num1 = 1
let num2 = 1
function setup() {
  createCanvas(1000, 1000);
  num1 = random(10,100)
  num2 = random(10,100)

  describe("A vertical black line moves left and right following the mouse's x-position.");
}
function draw() {
  if (num1 > num2){
    answ = num1
  }
  else if (num1<num2){
    answ = num2
  }
  background(200);
  text(`${answ} is het grootste`,150,150)
  text(round(num1),100,100);
  text(round(num2),100,120);
  strokeWeight(10)
  line(mouseX, 0, mouseX, 1000);
  line(0, mouseY, 1000, mouseY)
  circle (mouseX, mouseY,100)
  text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
}




let num1 = 42
let red = "#ff0000ff";
let orange = "#ffb300ff";
let green = "#00ff1aff";
let darkred = "#6b0000ff";
let darkorange = "#725000ff";
let darkgreen = "#004a07ff";  
let stopl = 1 
let balX = 400
let balY = 400
let mouse_p = 0
let size = 20
let circlex = -10
let circley = -10
let color1 = 0
let color2 = 0
let color3 = 0
function setup() {
  createCanvas(1000, 1000);

}
function draw() {
  fill(255)
  background(200);
  textSize(42)
  text("A",200,200)
  text(num1,200,400)
  if (keyIsDown(66)){
  }else{
  rect(190,160,50)
  }
  fill(0)
  rect(200,600,80,240)
  fill(red)
  circle(240,640,60)
  fill(darkorange)
  circle(240,720,60)
  fill(darkgreen)
  circle(240,800,60)
if (stopl == 2){
    fill(darkred)
  circle(240,640,60)
  fill(orange)
  circle(240,720,60)
  fill(darkgreen)
  circle(240,800,60)
}else if (stopl == 1){
    fill(red)
  circle(240,640,60)
  fill(darkorange)
  circle(240,720,60)
  fill(darkgreen)
  circle(240,800,60)
}
else if (stopl == 0){
    fill(darkred)
  circle(240,640,60)
  fill(darkorange)
  circle(240,720,60)
  fill(green)
  circle(240,800,60)
}
circle(balX,balY,100)
  if(keyIsDown(87)){
    balY-=2;
  }
  if(keyIsDown(68)){
    balX+=2;
  }
  if(keyIsDown(65)){
    balX-=2;
  }
  if(keyIsDown(83)){
    balY+=2;
  }
if (balX>=1050){
  balX = -49;
  console.log("vyuvvyuu");
} if (balX<=-50){
  balX = 1050;
}
if (balY>=1050){
  balY = -49;
  console.log("vyuvvyuu");
} if (balY<=-50){
  balY = 1050;
}
fill (color1,color2,color3)
if (mouse_p == 1){

  circlex =mouseX
  circley = mouseY
  circle(mouseX,mouseY,size)
  if (size<= 600)
    size+=2
}else {
  circle(circlex, circley, size)
  if (circley<=height-size/2)
    circley+=6
  else{
    circley = circley+0.05
  }
}


}
function keyPressed() {
  if (key === " ") {
    num1 = 0;
  } else if (key == "Enter"){
    if  (stopl == 2){
      stopl = 0
    }
    else if (stopl == 0){
      stopl = 1

    }
    else if (stopl ==1){
      stopl =2 
    }
  }

}

function mousePressed(){
  size = 0
  mouse_p = 1
  color1 = round(random(1,255))
  color2 = round(random(1,255))
  color3 = round(random(1,255))
}
function mouseReleased(){
  mouse_p = 0
}
function setup() {
  createCanvas(1000, 1000);
}
let alp = 0
let draw_r = 0
function draw() {
  if (keyIsDown(32)) {
    draw_r = 1
    alp++ 
  }
if (draw_r==1){
  fill(alp,alp,alp,alp)
  rect(100,100,100)
}
}


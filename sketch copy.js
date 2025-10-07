let color = 1;
//let colorboard = [
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//];
//
let colorboard = []
let cellSize = 20;

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  background(220);

  for (let y = 0; y < colorboard.length; y++) {
    for (let x = 0; x < colorboard[y].length; x++) {
      if (colorboard[y][x] == 0) fill(255);
      else if (colorboard[y][x] == 1) fill(0);
      rect(x * cellSize + 50, y * cellSize + 50, cellSize, cellSize);
    }
  }

  fill(0);
  circle(700, 550, 100);
  let d = dist(mouseX, mouseY, 700, 550);
  if (d < 50) {
    strokeWeight(5);
    stroke('red');
    noFill();
    circle(700, 550, 100);
    noStroke();
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text('color', 700, 550);
  }
}

function mouseClicked(){
for (let y = 0;y<=2;y++){
  for (let x =0;x<=2;x++){
    
  }
}


}





//function mouseClicked() {
//  let d = dist(mouseX, mouseY, 700, 550);
//  if (d < 50) {
//    if (color === 1) {
//      color = 0;
//    } else {
//      color = 1;
//    }
//  } else {
//    let gridX = floor((mouseX - 50) / cellSize);
//    let gridY = floor((mouseY - 50) / cellSize);
//    if (
//      gridX >= 0 && gridX < colorboard[0].length &&
//      gridY >= 0 && gridY < colorboard.length
//    ) {
//      colorboard[gridY][gridX] = color;
//    }
//  }
//}

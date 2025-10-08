let board = [];
let adwise = [];
let gridSize = 30;
let cellSize = 18;
let paintmode = 0;
let currentColor = 'red';
let palette = ['Blue','Red','Green','Black','White','Gray','Yellow','Purple','Orange','Pink','Brown','Silver'];
let mode = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  boarding();
}

function draw() {
  background(220);
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      fill(board[y][x]);
      rect(x * cellSize, y * cellSize, cellSize);
      if (board[y][x]=='white'){
      fill(0)
      text(adwise[y][x],(x*cellSize)+cellSize/5,(y*cellSize)+cellSize/2)
    }
  }
  }

  for (let i = 0; i < palette.length; i++) {
    fill(palette[i]);
    let x = 25 + i * (cellSize + 10);
    let y = gridSize * cellSize + 20;
    rect(x, y, cellSize, cellSize);
  }
  fill(70)
  rect(25,gridSize*cellSize+(cellSize*2)+15,cellSize*0.5,cellSize*0.8)

}

function mouseDragged() {
  let x = Math.floor(mouseX / cellSize);
  let y = Math.floor(mouseY / cellSize);
  
  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize && paintmode == 0) {
    board[y][x] = currentColor;
  }
if (x >= 0 && x < gridSize && y >= 0 && y < gridSize && paintmode == 1) {
  let adwiseNumber = adwise[y][x]
  let adwiseColor = palette[adwiseNumber - 1];
  if (adwiseColor == currentColor) {
    board[y][x] = currentColor;
  }
  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize&& mode != 0 && paintmode == 0){
    board[y][x] = currentColor;
    board[y][x+mode] = currentColor;
    board[y][x-mode] = currentColor;
    board[y-mode][x] = currentColor;
    board[y+mode][x] = currentColor;
  }
}
}
function mouseClicked() {
  let startY = gridSize * cellSize + 20;
  
  for (let i = 0; i < palette.length; i++) {
    let x = 25 + i * (cellSize + 10);
    if (
      mouseX > x && mouseX < x + cellSize &&
      mouseY > startY && mouseY < startY + cellSize
    ) {
      currentColor = palette[i];
    }
  }
  if (mouseX>25&&mouseX<25+cellSize*0.5&&mouseY>gridSize*cellSize+(cellSize*2)+10&&mouseY<gridSize*cellSize+(cellSize*2)+10+cellSize*0.5){
  boarding()
  }
}
function keyPressed() {
  if (key == 'r') currentColor = 'red';
  if (key == 'b') currentColor = 'blue';
  if (key == 'g') currentColor = 'green';
  if (key == 'g') currentColor = 'green';
  if (key == 'm'&& mode == 0) {
    mode = 1
  }else if (key == 'm'&& mode == 1){
    mode = 0
  }
  if (key == 't'){
    paintmode = 1
    gridSize = 20
    cellSize = 20
    boarding()
    adwise = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],]
  }
  if (key == 'y'){
    paintmode = 1
    gridSize = 20
    cellSize = 20
    boarding()
    adwise = [
    [5,5,5,5,5,5,5,5,7,7,7,7,7,7,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,7,7,7,6,6,7,7,7,5,5,5,5,5],
    [5,5,5,5,5,5,5,4,4,6,6,6,6,4,4,5,5,5,5,5],
    [5,5,5,5,5,5,5,4,4,6,12,12,6,4,4,5,5,5,5,5],
    [5,5,5,5,5,5,5,4,4,6,12,12,6,4,4,5,5,5,5,5],
    [5,5,5,5,5,5,5,4,4,6,6,6,6,4,4,5,5,5,5,5],
    [5,5,5,5,5,5,5,7,7,7,6,6,7,7,7,5,5,5,5,5],
    [5,5,5,5,5,5,5,7,7,7,7,7,7,7,7,5,5,5,5,5],
    [5,5,5,5,5,5,5,7,7,7,7,7,7,7,7,5,5,5,5,5],
    [5,5,5,5,5,5,5,7,7,7,7,7,7,7,7,5,5,5,5,5],
    [5,5,5,4,5,5,5,1,7,7,7,7,7,7,1,5,5,5,4,5],
    [5,5,4,4,7,7,7,7,1,7,7,7,7,1,7,7,7,7,4,4],
    [5,5,5,4,5,5,5,1,1,1,1,1,1,1,1,5,5,5,4,5],
    [5,5,5,5,5,5,5,1,1,1,1,1,1,1,1,5,5,5,5,5],
    [5,5,5,5,5,5,5,1,1,1,1,1,1,1,1,5,5,5,5,5],
    [5,5,5,5,5,5,5,1,1,1,1,1,1,1,1,5,5,5,5,5],
    [5,5,5,5,5,5,5,1,1,1,1,1,1,1,1,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,1,1,1,1,1,1,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,4,5,5,5,5,4,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,4,4,5,5,5,5,4,4,5,5,5,5,5],]
  }
  if (key == 'u'){
    paintmode = 1
    gridSize = 20
    cellSize = 20
    boarding()
    adwise = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,3,3,3,3,3,1,1,1,1,1,1,6,6,1,1,6,6,1],
    [1,1,3,3,3,3,3,1,1,1,1,1,1,6,6,1,1,6,6,1],
    [1,1,1,1,11,1,1,1,1,1,1,6,6,6,6,6,6,6,6,6],
    [1,1,1,1,11,1,1,1,1,1,1,6,6,6,6,6,6,6,6,6],
    [1,1,1,1,11,1,1,1,1,1,1,6,6,6,6,6,6,6,6,6],
    [1,1,1,1,11,1,1,1,1,1,1,6,6,6,6,6,6,6,6,6],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],]
  }
}
function boarding(){
  board = [];  
  for (let y = 0; y < gridSize; y++) {
    board.push([]);
    adwise.push([])
    for (let x = 0; x < gridSize; x++) {
      board[y].push('white');
    }
  }
}
let board = [];
let gridSize = 50;
let cellSize = 20;
let currentColor = 'red';
let palette = ['white', 'black', 'grey', 'cyan', 'lime','yellow','orange','purple','pink','indigo','magenta','teal',];
let mode = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let y = 0; y < gridSize; y++) {
    board.push([]);
    for (let x = 0; x < gridSize; x++) {
      board[y].push('white');
    }
  }
}

function draw() {
  background(220);
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      fill(board[y][x]);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }

  for (let i = 0; i < palette.length; i++) {
    fill(palette[i]);
    let x = 25 + i * (cellSize + 10);
    let y = gridSize * cellSize + 20;
    rect(x, y, cellSize, cellSize);
  }
}

function mouseDragged() {
  let x = Math.floor(mouseX / cellSize);
  let y = Math.floor(mouseY / cellSize);
  
  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
    board[y][x] = currentColor;
  }
 if (x >= 0 && x < gridSize && y >= 0 && y < gridSize&& mode != 0){
  board[y][x] = currentColor;
  board[y][x+mode] = currentColor;
  board[y][x-mode] = currentColor;
  board[y-mode][x] = currentColor;
  board[y+mode][x] = currentColor;
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
}
function keyPressed() {
  if (key == 'r') currentColor = 'red';
  if (key == 'b') currentColor = 'blue';
  if (key == 'g') currentColor = 'green';
  if (key == 'g') currentColor = 'green';
  if (key == 'm'&& mode == 0) {
    mode = 1
  }else if (key == 'm'&& mode == 1){
    mode = 2
  }else if (key == 'm'&& mode == 2){
    mode = 0
  }
}
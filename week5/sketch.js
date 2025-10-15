board = [];
adwise = [];
gridSize = 42 ;
cellSize = 18;
paintmode = 0;
let mode = 0;
let currentColor = 'red';
let palette = ['Blue','Red','Green','Black','White','Gray','Yellow','Purple','Orange','Pink','Brown','Silver'];
let buttons = ['flag','minion','castle','free'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  boarding();
}
// Draw function to render the grid and UI elements
function draw() {
  background(220)
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      fill(board[y][x])
      rect(x * cellSize, y * cellSize, cellSize)
      if (board[y][x]=='white'){
        fill(0)
        text(adwise[y][x],(x*cellSize)+cellSize/5,(y*cellSize)+cellSize/1.3)
      }
    }
  }
  // Draw color palette
  for (let i = 0; i < palette.length; i++) {
    fill(palette[i]);
    let x = 25 + i * (cellSize + 10);
    let y = gridSize * cellSize + 20;
    rect(x, y, cellSize, cellSize);
  }
// Draw UI elements
  textSize(15);
  fill(70);
  text('clear:',25,cellSize*gridSize+(cellSize*3.5));
  rect(65,gridSize*cellSize+(cellSize*2)+15,cellSize*0.5,cellSize*0.8);
  fill(0);
  text('Current Color:',(cellSize*gridSize)/3.5,cellSize*gridSize+(cellSize*3.5));
  fill(currentColor);
  rect(((cellSize*gridSize)/3.5)+100,cellSize*gridSize+(cellSize*3.5)-15,cellSize,cellSize);
  fill(0)
  text('Brush:',(cellSize*gridSize)/1.5,cellSize*gridSize+(cellSize*3.5))
  text(mode+1,((cellSize*gridSize)/1.5)+45,cellSize*gridSize+(cellSize*3.5))
  // Draw brush size
  for (let i = 0; i < buttons.length; i++) {
    fill(buttons[i]);
    let x = gridSize*cellSize+cellSize;
    let y = (i  * (cellSize*2+cellSize))+cellSize;
    fill(255)
    rect(x, y, cellSize*2, cellSize*2);
    fill(0)
    text(1+i,x+cellSize-3,y+cellSize)
  }
}
function mouseDragged() {
  // Determine which cell is clicked
  let x = Math.floor(mouseX / cellSize);
  let y = Math.floor(mouseY / cellSize);
if (x >= 0 && x < gridSize && y >= 0 && y < gridSize && paintmode == 0) {
  board[y][x] = currentColor;
  if (mode !=0) {
    // Paint surrounding cells based on brush size
    for (let dy = -mode; dy <= mode; dy++) {
      for (let dx = -mode; dx <= mode; dx++) {
        let nx = x + dx;
        let ny = y + dy;
        if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize) {
          board[ny][nx] = currentColor;
        }
      }
    }
  }
}
// Paint by numbers mode
  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize && paintmode == 1) {
    let adwiseNumber = adwise[y][x];
    let adwiseColor = palette[adwiseNumber - 1];
    if (adwiseColor == currentColor) {
      board[y][x] = currentColor;
    }
  }
}
function mouseClicked() {
  let startY = gridSize * cellSize + 20;
  let startX = gridSize* cellSize +cellSize
  for (let i = 0; i < palette.length; i++) {
    let x = 25 + i * (cellSize + 10);
    if (mouseX > x && mouseX < x + cellSize &&mouseY > startY && mouseY < startY + cellSize){
      currentColor = palette[i];
    }
  }
  // Clear button
  if (mouseX > 65 &&mouseX < 65 + cellSize * 0.5 &&mouseY > gridSize * cellSize + (cellSize * 2) + 15 &&mouseY < gridSize * cellSize + (cellSize * 2) + 15 + cellSize * 0.8) {
    boarding();
  }
  // Select painting mode
for (let i = 0; i < buttons.length; i++) {
  let x = gridSize * cellSize + cellSize;
  let y = (i * (cellSize * 2 + cellSize)) + cellSize;
  if (mouseX > x && mouseX < x + cellSize * 2 &&mouseY > y && mouseY < y + cellSize * 2) {
    if (i === 0) painting1();
    if (i === 1) painting2();
    if (i === 2) painting3();
    if (i === 3) paintMath()
  }
}

}
function keyPressed() {
  if (key == 'r') currentColor = 'Red';
  if (key == 'b') currentColor = 'Blue';
  if (key == 'g') currentColor = 'Green';
// Clear the board or fill with current color
  if (key == 't' && paintmode == 0){
      board = [];  
  for (let y = 0; y < gridSize; y++) {
    board.push([]);
    adwise.push([]);
    for (let x = 0; x < gridSize; x++) {
      board[y].push(currentColor);
    }
  }
  }
  // Change brush size
  if (key == 'y'){
    if(mode == 0){
      mode = 1;
    }else if (mode == 1){
      mode = 2;
    }else if (mode == 2){
      mode = 3;
    }else if (mode == 3){
      mode = 4;
    }else if (mode == 4){
      mode = 0;
    }
  }
  // Random color
  if (key == 'u'){
    currentColor= [random(0,255),random(0,255),random(0,255)]
  }
}
// Initialize or clear the board
function boarding(){
  board = [];  
  for (let y = 0; y < gridSize; y++) {
    board.push([]);
    adwise.push([]);
    for (let x = 0; x < gridSize; x++) {
      board[y].push('white');
    }
  }
}
//flag
function painting1(){
    paintmode = 1;
    gridSize = 20;
    cellSize = 20;
    boarding();
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
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],];
}
//house 
function painting2(){
    paintmode = 1;
    gridSize = 20;
    cellSize = 20;
    boarding();
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
    [5,5,5,5,5,5,5,4,4,5,5,5,5,4,4,5,5,5,5,5],];
}
//castle
function painting3(){
    paintmode = 1;
    gridSize = 20;
    cellSize = 20;
    boarding();
    adwise = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,7,7,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,7,7,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,7,7,1,1,1],
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
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],];
}
function paintMath() {
  paintmode = 1;
  gridSize = 20;
  cellSize = 20;
  boarding(); 
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (cos(x) * 10 + y > 10) {
        adwise[y][x] = 1;
      } else {
        adwise[y][x] = 5;
      }
    }
  }
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
    if (adwise[y][x]==1&&adwise[y][x-1]==1&& adwise[y][x+1]==1&& adwise[y-1][x]== 1&& adwise[y+1][x]==1){
      adwise[y][x]= 7
    }
    if (adwise[y][x]==5&&adwise[y][x-1]==5&& adwise[y][x+1]==5&& adwise[y-1][x]== 5&& adwise[y+1][x]==5){
      adwise[y][x]= 2
    }
    }
  }
}

//free draw
function freeDraw(){
board = [];
adwise = [];
gridSize = 42;
cellSize = 18;
paintmode = 0;
boarding()
}
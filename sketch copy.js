
// --- Game State ---
let turn = 1;
let board = [
  [50, 50, 50], // Row 0: a0, a1, a2
  [50, 50, 50], // Row 1: b0, b1, b2
  [50, 50, 50]  // Row 2: c0, c1, c2
];
let block = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];
let b_color = 'blue';

function setup() {
  createCanvas(1000, 1000);
}
function draw() {
  // Set background color based on turn
  b_color = (turn % 2 !== 0) ? 'blue' : 'red';
  background(b_color);
  strokeWeight(2);
  stroke(0);
  fill(200);
  rect(50, 50, 900, 900, 10);

  // Draw board cells
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = 75 + col * 300;
      let y = 75 + row * 300;
      fill(board[row][col]);
      rect(x, y, 250, 250, 50);
    }
  }

  // Display turn
  fill(255);
  textSize(42);
  if (b_color === 'blue') {
    text("Blue's turn", 42, 42);
  } else {
    text("Red's turn", 42, 42);
  }

  // Check win/draw conditions
  checkWin();

  // Show win/draw UI
  if (turn === 21) {
    setAllBlocks(0);
    showEndScreen('Blue Win', '#0099ff');
  } else if (turn === 22) {
    setAllBlocks(0);
    showEndScreen('Red Win', '#e60000');
  } else if (turn === 10) {
    setAllBlocks(0);
    fill(42);
    textSize(140);
    text('Draw', 330, 500);
    strokeWeight(10);
    fill(255);
    if (turn >= 10 && mouseX >= 260 && mouseX <= 710 && mouseY >= 510 && mouseY <= 670) {
      stroke('red');
      strokeWeight(10);
    }
    text('Restart', 260, 650);
    strokeWeight(0);
  }
}

function setAllBlocks(val) {
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) block[r][c] = val;
}

function showEndScreen(msg, color) {
  fill(255);
  textSize(140);
  strokeWeight(10);
  stroke(0);
  fill(color);
  text(msg, 210, 500);
  fill(255);
  if (turn >= 10 && mouseX >= 260 && mouseX <= 710 && mouseY >= 510 && mouseY <= 670) {
    stroke('red');
    strokeWeight(10);
  }
  text('Restart', 260, 650);
  strokeWeight(2);
}

function checkWin() {
  // Helper to get cell value
  const cell = (r, c) => board[r][c];
  // All win lines
  const lines = [
    // Rows
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    // Columns
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    // Diagonals
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]]
  ];
  for (let line of lines) {
    let vals = line.map(([r,c]) => cell(r,c));
    if (vals.every(v => v === 'blue')) turn = 21;
    if (vals.every(v => v === 'red')) turn = 22;
  }
  // Draw check
  let filled = 0;
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    if (board[r][c] === 'blue' || board[r][c] === 'red') filled++;
  }
  if (turn < 10 && filled === 9) turn = 10;
}
function mousePressed() {
  // Board cell click detection
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let x = 75 + col * 300;
      let y = 75 + row * 300;
      if (
        mouseX >= x && mouseX <= x + 250 &&
        mouseY >= y && mouseY <= y + 250 &&
        block[row][col] === 1 && turn < 10
      ) {
        board[row][col] = (turn % 2 !== 0) ? 'blue' : 'red';
        turn++;
        block[row][col] = 0;
      }
    }
  }
  // Restart button
  if (turn >= 10 && mouseX >= 240 && mouseX <= 760 && mouseY >= 510 && mouseY <= 670) {
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      block[r][c] = 1;
      board[r][c] = 50;
    }
    turn = 1;
  }
}
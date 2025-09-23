
function setup() {
  createCanvas(1000, 1000)
}
let turn = 1
let a0 = 50;let b0 = 50;let c0 = 50
let a1 = 50;let b1 = 50;let c1 = 50
let a2 = 50;let b2 = 50;let c2 = 50
let a0_block = 1;let b0_block = 1;let c0_block = 1;
let a1_block = 1;let b1_block = 1;let c1_block = 1;
let a2_block = 1;let b2_block = 1;let c2_block = 1;
let b_color = turn
function draw() {
  if (turn % 2 != 0) {
      b_color = 'blue'
    }else{
      b_color = 'red'
    }
  background(b_color)
  strokeWeight(2)
  stroke(0)
  fill(200)
  rect(50,50,900,900,10)
  fill(a0)
  rect(75,75,250,250,50)
  fill(a1)
  rect(375,75,250,250,50)
  fill(a2)
  rect(675,75,250,250,50)
  fill(b0)
  rect(75,375,250,250,50)
  fill(b1)
  rect(375,375,250,250,50)
  fill(b2)
  rect(675,375,250,250,50)
  fill(c0)
  rect(75,675,250,250,50)
  fill(c1)
  rect(375,675,250,250,50)
  fill(c2)
  rect(675,675,250,250,50)
  fill(255)
  if (b_color == 'blue'){
    textSize(42)
  text("Blue's trun",42,42,)
}else{
    textSize(42)
  text("Red's trun",42,42,)
  }
  if (a1=='blue'&& a2=='blue'&& a0=='blue'){
    turn = 21
  }if (b1=='blue'&& b2=='blue'&& b0=='blue'){
    turn = 21
  }if (c1=='blue'&& c2=='blue'&& c0=='blue'){
    turn = 21
  }if (a1=='blue'&& b1=='blue'&& c1=='blue'){
    turn = 21
  }if (a2=='blue'&& b2=='blue'&& c2=='blue'){
    turn = 21
  }if (a0=='blue'&& b0=='blue'&& c0=='blue'){
    turn = 21
  }if (a1=='red'&& a2=='red'&& a0=='red'){
    turn = 22
  }if (b1=='red'&& b2=='red'&& b0=='red'){
    turn = 22
  }if (c1=='red'&& c2=='red'&& c0=='red'){
    turn = 22
  }if (a1=='red'&& b1=='red'&& c1=='red'){
    turn = 22
  }if (a2=='red'&& b2=='red'&& c2=='red'){
    turn = 22
  }if (a0=='red'&& b0=='red'&& c0=='red'){
    turn = 22
  }if (a0=='red'&& b1=='red'&& c2=='red'){
    turn = 22
  }if (a2=='red'&& b1=='red'&& c0=='red'){
    turn = 22
  }if (a0=='blue'&& b1=='blue'&& c2=='blue'){
    turn = 21
  }if (a2=='blue'&& b1=='blue'&& c0=='blue'){
    turn = 21
  }if (turn == 21){
a0_block=0;b0_block=0;c0_block=0;
a1_block=0;b1_block=0;c1_block=0;
a2_block=0;b2_block=0;c2_block=0;
fill(255)
textSize(140)
strokeWeight(5)
stroke(0)
fill('#0099ffff')
text('Blue Win',210,500)
fill(255)
if (turn >= 10 && mouseX >= 260 && mouseX <= 710 && mouseY >= 510 && mouseY <= 670){
stroke('red')
  strokeWeight(10)
}
text('Restart',260,650)
strokeWeight(2)
}
  if (turn == 22){
a0_block=0;b0_block=0;c0_block=0;
a1_block=0;b1_block=0;c1_block=0;
a2_block=0;b2_block=0;c2_block=0;
fill(255)
textSize(140)
strokeWeight(10)
stroke(0)
fill('#e60000ff')
text('Red Win',210,500)
fill(255)
if (turn >= 10 && mouseX >= 260 && mouseX <= 710 && mouseY >= 510 && mouseY <= 670){
stroke('red')
  strokeWeight(10)
}
text('Restart',260,650)
strokeWeight(2)
}
  if (turn == 10){
a0_block=0;b0_block=0;c0_block=0;
a1_block=0;b1_block=0;c1_block=0;
a2_block=0;b2_block=0;c2_block=0;
fill(42)
textSize(140)
text('Draw',330,500)
strokeWeight(10)
fill(255)
if (turn >= 10 && mouseX >= 260 && mouseX <= 710 && mouseY >= 510 && mouseY <= 670){
stroke('red')
  strokeWeight(10)
}
text('Restart',260,650)
strokeWeight(0)
}
}
function mousePressed() {
  if (mouseX >= 75 && mouseX <= 325 && mouseY >= 75 && mouseY <= 325 && a0_block == 1) {
    if (turn % 2 != 0) {
      a0 = 'blue'
    } else {
      a0 = 'red'
    }
    turn++
    a0_block = 0
  }
  if (mouseX >= 375 && mouseX <= 625 && mouseY >= 75 && mouseY <= 325 && a1_block == 1) {
    if (turn % 2 != 0) {
      a1 = 'blue'
    } else {
      a1 = 'red'
    }
    turn++
    a1_block = 0
  }
  if (mouseX >= 675 && mouseX <= 925 && mouseY >= 75 && mouseY <= 325 && a2_block == 1) {
    if (turn % 2 != 0) {
      a2 = 'blue'
    } else {
      a2 = 'red'
    }
    turn++
    a2_block = 0
  }
  if (mouseX >= 75 && mouseX <= 325 && mouseY >= 375 && mouseY <= 625 && b0_block == 1) {
    if (turn % 2 != 0) {
      b0 = 'blue'
    } else {
      b0 = 'red'
    }
    turn++
    b0_block = 0
  }
  if (mouseX >= 375 && mouseX <= 625 && mouseY >= 375 && mouseY <= 625 && b1_block == 1) {
    if (turn % 2 != 0) {
      b1 = 'blue'
    } else {
      b1 = 'red'
    }
    turn++
    b1_block = 0
  }
  if (mouseX >= 675 && mouseX <= 925 && mouseY >= 375 && mouseY <= 625 && b2_block == 1) {
    if (turn % 2 != 0) {
      b2 = 'blue'
    } else {
      b2 = 'red'
    }
    turn++
    b2_block = 0
  }
  if (mouseX >= 75 && mouseX <= 325 && mouseY >= 675 && mouseY <= 925 && c0_block == 1) {
    if (turn % 2 != 0) {
      c0 = 'blue'
    } else {
      c0 = 'red'
    }
    turn++
    c0_block = 0
  }
  if (mouseX >= 375 && mouseX <= 625 && mouseY >= 675 && mouseY <= 925 && c1_block == 1) {
    if (turn % 2 != 0) {
      c1 = 'blue'
    } else {
      c1 = 'red'
    }
    turn++
    c1_block = 0
  }
  if (mouseX >= 675 && mouseX <= 925 && mouseY >= 675 && mouseY <= 925 && c2_block == 1) {
    if (turn % 2 != 0) {
      c2 = 'blue'
    } else {
      c2 = 'red'
    }
    turn++
    c2_block = 0
  }
  if (turn >= 10 && mouseX >= 240 && mouseX <= 760 && mouseY >= 510 && mouseY <= 670) {
    a0_block = 1; b0_block = 1; c0_block = 1;
    a1_block = 1; b1_block = 1; c1_block = 1;
    a2_block = 1; b2_block = 1; c2_block = 1;
    a0 = 50;b0 = 50;c0 = 50;
    a1 = 50;b1 = 50;c1 = 50;
    a2 = 50;b2 = 50;c2 = 50;
    turn = 1
  }
}
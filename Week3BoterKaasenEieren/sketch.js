
function setup() {
  createCanvas(800, 800)
}
let turn = 1 
let board = [
  [50,50,50],
  [50,50,50],
  [50,50,50]]
let turn_color = 'blue'
let b_color = 'red'
let check = 0
let end_Game = 0
function draw(){
  if (turn%2 !== 0){
    b_color = 'blue'
    turn_color = 'blue'
  }else{
    b_color = 'red'
    turn_color = 'red'
  }
  background(b_color)
  fill(200)
  rect(100,100,540,540,5)
  for (row = 0; row<=2;row++){//vierkanten maken
    for(col = 0; col<=2;col++){
      fill(board[row][col])
      let x =  120 + col * 190;
      let y =  120 + row * 190;
      rect(x,y,120,120,20)
    }
  }checkWin()
}
function mouseClicked() {
  for (row = 0; row<=2;row++){ //klikbare vierkanten maken
    for(col = 0; col<=2;col++){
      fill(board[row][col])
      let x =  120 + col * 190;
      let y =  120 + row * 190;
      if (mouseX >= x && mouseX <= x + 120 &&
        mouseY >= y && mouseY <= y +120 &&
        board[row][col] == 50 ){
        board[row][col] = turn_color
        fill(color(board[row][col]))
        turn++
        console.log(board)    
      }
    }
  }
  console.log(turn)
  if(end_Game = 1 && mouseX >= 300 && mouseX <= 450 && mouseY >= 450 && mouseY <= 480){
    board = board.map(row =>
    row.map(() => 50))  //reset all
    turn = 1
  }
}
function end_Screen(win_Color){//end screen 
  textSize(42)
  text(win_Color,290,280)
  if (end_Game = 1 && mouseX >= 300 && mouseX <= 450 && mouseY >= 450 && mouseY <= 480){
    stroke('red')
    strokeWeight(10)
  }
  text('Restart',300,480)
  strokeWeight(2)
  stroke(0)
}
function checkWin(){
  if (board[0][0] == board[0][1]&& board[0][0] != 50&&// all win lines 
      board[0][1] == board[0][2]||
      board[1][0] == board[1][1]&& board[1][0] != 50&&
      board[1][1] == board[1][2]||
      board[2][0] == board[2][1]&& board[2][0] != 50&&
      board[2][1] == board[2][2]||
      board[0][0] == board[1][0]&& board[0][0] != 50&&
      board[1][0] == board[2][0]||
      board[0][1] == board[1][1]&& board[0][1] != 50&&
      board[1][1] == board[2][1]||
      board[0][2] == board[1][2]&& board[0][2] != 50&&
      board[1][2] == board[2][2]||
      board[0][0] == board[1][1]&& board[0][0] != 50&&
      board[1][1] == board[2][2]||
      board[0][2] == board[1][1]&& board[0][2] != 50&&
      board[1][1] == board[2][0]){//stop game
    board = board.map(row =>
    row.map(cell => cell === 50 ? 51 : cell));
    if (turn%2 == 0){
      fill('#255bffff')
      end_Screen('Blue Win')
    end_Game = 1
    }else{
      fill('#ff3b3bff')
      end_Screen('Red Win')
      end_Game = 1
    }
  }else if (turn == 10){
    end_Game = 1
    end_Screen('Draw')
  }
}
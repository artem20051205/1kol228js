
function setup() {
  createCanvas(800, 800)
}
let turn = 1;
let board = [
  [50,50,50],
  [50,50,50],
  [50,50,50]];
let turn_color = 'blue';
let b_color = 'red';
let check = 0;
let end_Game = 0;
let b_rectX = 600;
let b_rectX_move = 1;
let triangle_y = 0;
let triangle_y_move = 0;
function draw(){
  strokeWeight(0);//wie moet gaan 
  if (turn%2 != 0){
    b_color = 'blue';
    turn_color = 'blue';
  }else{
    b_color = 'red'
    turn_color = 'red'
  }
  background('blue')//background animation
  if (b_rectX_move == 1&& end_Game!=1){
    if (b_rectX <=600){
      b_rectX+=15
    }
  }else if (b_rectX_move == 0&& end_Game!= 1 ){
    if (b_rectX>=140){
      b_rectX-=15
    }
  }else if (end_Game == 1){
    b_rectX = 400
  }
  fill('red')
  rect(b_rectX,0,800)
  triangle_y_move+=2
  fill('blue')
  for(triangle_y = -8; triangle_y<=16; triangle_y++){
    triangle(b_rectX-25,triangle_y_move+triangle_y*100-50,b_rectX+25,triangle_y_move+triangle_y*100,b_rectX-25,triangle_y_move+triangle_y*100+50)}
    fill('red')
  for(triangle_y = -8; triangle_y<=16; triangle_y++){
    triangle(b_rectX+25,triangle_y_move+triangle_y*100,b_rectX-25,triangle_y_move+triangle_y*100+50,b_rectX+25,triangle_y_move+triangle_y*100+100)}
    strokeWeight(2)
    fill(200)
    if (triangle_y_move == 850){
      triangle_y_move = -850
    }
  rect(100,100,540,540,5)
  for (row = 0; row<=2;row++){//vierkanten maken
    for(col = 0; col<=2;col++){
      fill(board[row][col])
      let x =  120 + col * 190;
      let y =  120 + row * 190;
      rect(x,y,120,120,20)
    }
  }
  textFont('fantasy')
if (b_color == 'blue'&& end_Game!=1){
  textSize(42)
  fill('red')
  text("Blue's Turn",380,50)
}else if (b_color =='red' && end_Game!=1){
  fill('blue')
  text("Red's Turn",230,50)
}
  checkWin()
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
        if (b_rectX_move == 1){
          b_rectX_move = 0
        } else if (b_rectX_move == 0){
          b_rectX_move = 1
        }  
      }
    }
  }
  console.log(turn)
  if(end_Game == 1 && mouseX >= 300 && mouseX <= 450 && mouseY >= 450 && mouseY <= 480){
    board = board.map(row =>
    row.map(() => 50))  //reset all
    turn = 1
    b_rectX = 600
    b_rectX_move = 1
    end_Game = 0
  }
}
function end_Screen(win_Color){//end sherm
  textSize(42)
  text(win_Color,290,280)
  if (end_Game == 1 && mouseX >= 300 && mouseX <= 450 && mouseY >= 450 && mouseY <= 480){
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
    row.map(cell => cell === 50 ? 51 : cell));//block all
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
    fill('#474747ff')
    end_Screen('  Draw')
  }
}

function setup() {
  createCanvas(800, 800)
}
let turn = 1 
let board = [
  [50,50,50],
  [50,50,50],
  [50,50,50]
]
let turn_color = 'blue'
let b_color = 'red'
let check = 0
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
for (row = 0; row<=2;row++){
  for(col = 0; col<=2;col++){
  fill(board[row][col])
  let x =  120 + col * 190;
  let y =  120 + row * 190;
  rect(x,y,120,120,20)
  }
 }
checkWin('blue')
checkWin('red')

}
function mouseClicked() {
  for (row = 0; row<=2;row++){
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
}
function checkWin(color){
if (board[0][0]== color&&
    board[0][1]== color&&
    board[0][2]== color||
    board[1][0]== color&&
    board[1][1]== color&&
    board[1][2]== color||
    board[2][0]== color&&
    board[2][1]== color&&
    board[2][2]== color

){
  console.log('win '+color)
  while (check < 9){
    if(board[check][check]){
      board[check][check]= 255
    }
  }
}
}
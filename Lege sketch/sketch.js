//
//function setup() {
//  createCanvas(380, 350);
//}
//let array = []
//let a = 0
//let text_x = 20
//let text_y = 20
//function draw() {
//  for (let i = 0; i<20; i++ ){
//  nummer = round(random(0, 100))
//  array.push(nummer)
//}
//if (array[a]<50){
//  text(array[a],text_x,text_y)
//  a++
//  text_y +=20
//  text_x +=3
//}else{
//      a++
//    }
//}
//
function setup() {
  createCanvas(380, 350);
}

function draw() {
  let colors = ["red", "green", "blue", "purple", "yellow"]
  let nums = [ 400, 240, 10, 490, 30, 60, 244, 500, 301, 30]
  let text_y = 15
  let nums_y = 15
  fill(0) 
  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 15);
  //1
  for (let i = 0; i < colors.length ;i++){
    fill(colors[i])
    text(colors[i],35,text_y);
    text_y+=20
  }
  colors.shift()
  colors.push('red')
  //2
  for (let i = 0; i < colors.length ;i++){
    fill(colors[i])
    text(colors[i],35,text_y);
    text_y+=20
  }
  //3
  colors.splice(1,2)
  for (let i = 0; i < colors.length ;i++){
    fill(colors[i])
    text(colors[i],35,text_y);
    text_y+=20
  }
  //4
  for (let i = 0;i<nums.length;i++){
    if (nums[i]<300){
    text(nums[i],140,nums_y)
      nums_y+=20
  }}
//5
let getallen = [ 3,55,93,20,102,6 ]
let andereGetall = [14, 22, 80, 5.]
let nuums = 0
let nuuums = 0
for (let i = 0; i<getallen.length;i++){
  nuums +=getallen[i]
}
for (let i = 0; i<andereGetall.length;i++){
  nuums +=andereGetall[i]
}
text(nuums,140,140)
let woord = Overheidsfinancieringstekort
}


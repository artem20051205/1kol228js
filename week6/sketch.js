let gameminisec = 0;
let gamemin = 0;
let gamesec = 0;
let gamehour = 0
let day = 0;
let honger = 100
let energie = 50
let geluk = 50
let gezondheid = 100
let statusen = [honger, energie, geluk, gezondheid]
let sleeping = false
let gamemode = false
let norm, sad, hungry, tired, dirt, mousee, sleeping_img, coin, playing
let mouseeX = 0
let mouseeY = 0
let money = 0
let live = true
function preload() {
  norm = loadImage("norm.png");
  sad = loadImage("sad.png")
  hungry = loadImage("hungry.png")
  tired = loadImage("tired.png")
  dirt = loadImage("dirt.png")
  mousee = loadImage("mous.png")
  sleeping_img = loadImage("sleeping.png")
  coin = loadImage("coin.png")
  playing = loadImage("playing.png")
}
function setup() {
  createCanvas(500, 500)
  frameRate(100);
  now_img = norm;

  buttonr = createButton('Restart');
  buttonr.position(200, 400);
  buttonr.size(100, 30);
  buttonr.mousePressed(restart);
  buttonr.style('background-color', '#a1a1a1ff');
  buttonr.style('font-size', '16px');
  buttonr.hide()


  button = createButton('Feed');
  button.position(20, 450);
  button.size(100, 30);
  button.mousePressed(feed);
  button.style('background-color', '#9d2b11ff');
  button.style('font-size', '16px');

  button = createButton('Sleep');
  button.position(140, 450);
  button.size(100, 30);
  button.mousePressed(sleep);
  button.style('background-color', '#0198fcff');
  button.style('font-size', '16px');

  button = createButton('Play');
  button.position(260, 450);
  button.size(100, 30);
  button.mousePressed(play);
  button.style('background-color', '#fbff00ff');
  button.style('font-size', '16px');

  button = createButton('Clean');
  button.position(380, 450);
  button.size(100, 30);
  button.mousePressed(clean);
  button.style('background-color', '#0025b8ff');
  button.style('font-size', '16px');
}
function draw() {
  console.log(gamesec,live)
  strokeWeight(0.5)
  background(220)
  if (checkstatus() == 5) {
    updateGameTime()
  } else if (checkstatus() == 4) {
    text('clean me', 100, 100)
    live = false
  } else if (checkstatus() == 3) {
    text('i am sad', 100, 100)
    live = false
  } else if (checkstatus() == 2) {
    text('i am tierd', 100, 100)
    live = false
  } else if (checkstatus() == 1) {
    text('i am hungry', 100, 100)
    live = false
  }
  if (!live){
    restartbutton()
  }
  function updateGameTime() {
    if (live) {
      gameminisec++
    }
    if (gameminisec >= 100) {
      gameminisec = 0;
      gamesec++;
      if (gamesec % 5 == 0 && gamesec != 0) {
        statusen[0]--
      }
      if (gamesec % 20 == 0 && gamesec != 0 && !sleeping) {
        statusen[1]--
      }
      if (gamesec % 25 == 0 && gamesec != 0) {
        statusen[2]--
      }
      if (gamesec % 20 == 0 && gamesec != 0) {
        statusen[3]--
      }
      if (sleeping) {
        statusen[1] = min(100, statusen[1] + 1);
        statusen[2]--
        now_img = sleeping_img
      }
      if (gamemode) {
        now_img = playing
      }
    }
  }
  fill('#ffd000ff')
  rect(200,20,100,35,5)
  fill(0)
  textSize(12)
  text(`Day: ${day}  ${nf(gamehour,2)}:${nf(gamemin,2)}:${nf(gamesec,2)}`,width/2-45,40)
  image(coin, height - 80, 20, 50, 50)
  text(money, height - 90, 50)
  textSize(8)
  for (let i = 0; i < statusen.length; i++) {
    let labelNames = ["Hunger", "Energy", "Happiness", "Health"];
    let y = 20
    fill(0)
    text(`${labelNames[i]}: ${statusen[i]}`, 20, y + i * 30)
    y += 5
    fill(180)
    rect(20, y + i * 30, 100, 10)
    fill(255)
    rect(20, y + i * 30, statusen[i], 10)
  }
  fill(0)
  image(now_img, width / 2 - 75, height / 2 - 75, 150, 150);
  if (statusen[0] == 20) {
    now_img = hungry
  }
  if (statusen[1] == 40) {
    now_img = tired
  }
  if (statusen[2] == 25) {
    now_img = sad
  }
  if (statusen[3] == 20) {
    now_img = dirt
  }
  if (statusen[0] > 20 && statusen[1] > 40 && statusen[2] > 25 && statusen[3] > 20 && !sleeping && !gamemode) {
    now_img = norm
  }
  if (gamesec >= 60) {
    gamesec = 0;
    gamemin++;
  }
  if (gamemin >= 60) {
    gamemin = 0;
    gamehour++;
  }
  if (gamehour >= 24) {
    gamehour = 0;
    day++;
  }
  if (gamemode) {
    if (statusen[1] != 0) {
      image(mousee, mouseeX, mouseeY, 100, 100);
      let d = dist(mouseX, mouseY, mouseeX + 50, mouseeY + 50);
      if (d < 50) {
        statusen[2] = min(100, statusen[2] + 5);
        statusen[1]--
        mouseeX = random(80, width - 100);
        mouseeY = random(80, height - 100);
        money++
      }
    }
  }
}
function checkstatus() {
  if (!statusen[0]) {
    return 1
  } else if (!statusen[1]) {
    return 2
  } else if (!statusen[2]) {
    return 3
  } else if (!statusen[3]) {
    return 4
  } else {
    return 5
  }
}
function feed() {
  sleeping = false
  gamemode = false
  if (money >= 10 && statusen[0] != 100&& live) {
    money -= 10
    statusen[0] = min(100, statusen[0] + 10);
  }
}
function sleep() {
  gamemode = false
  sleeping = !sleeping
}
function play() {
  sleeping = false
  gamemode = !gamemode
  mouseeX = random(80, width - 100);
  mouseeY = random(80, height - 100);
}
function clean() {
  if (live){
    sleeping = false
    gamemode = false
    statusen[3] = min(100, statusen[3] = 100);
  }
}
function restart(){
gameminisec = 0;
gamemin = 0;
gamesec = 0;
gamehour = 0
day = 0;
honger = 100
energie = 50
geluk = 50
gezondheid = 100
statusen = [honger, energie, geluk, gezondheid]
sleeping = false
gamemode = false
norm, sad, hungry, tired, dirt, mousee, sleeping_img, coin, playing
money = 0
live = true
buttonr.hide()
}
function keyPressed(){
  if (keyCode == 32){
    storeItem('hunger',statusen[0])
  }
}
function restartbutton(){
  buttonr.show()
}
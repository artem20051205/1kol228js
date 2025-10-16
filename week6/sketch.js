let gameminisec = 0;
let gamemin = 0;
let gamesec = 0;
let gamehour = 0;
let day = 0;

let statusen = [100, 100, 100, 100]; // Hunger, Energy, Happiness, Health
let Home = true;
let Shopping = false;
let Working =false
let sleeping = false;
let gamemode = false;
let cleaning = false;
let live = true;

let now_img;
let norm, sad, hungry, tired, dirt, mousee, sleeping_img, coin, playing, cleaning_img, soap;

let mouseeX = 0;
let mouseeY = 0;
let soapX = 100;
let soapY = 200;

let money = 0;
//ui buttons
let buttonFeed, buttonSleep, buttonPlay, buttonClean, buttonRestart, buttonShop, buttonWork, buttonHome;

function preload() {
  norm = loadImage("norm.png");
  sad = loadImage("sad.png");
  hungry = loadImage("hungry.png");
  tired = loadImage("tired.png");
  dirt = loadImage("dirt.png");
  mousee = loadImage("mous.png");
  sleeping_img = loadImage("sleeping.png");
  coin = loadImage("coin.png");
  playing = loadImage("playing.png");
  cleaning_img = loadImage("cleaning.png");
  soap = loadImage("soap.png");
  shop_img = loadImage("shop.png")
}

function setup() {
  createCanvas(500, 500);
  frameRate(100);
  now_img = norm;

  buttonFeed = createButton('Feed');
  setupButton(buttonFeed, 20, 450, '#FF7043', feed);

  buttonSleep = createButton('Sleep');
  setupButton(buttonSleep, 140, 450, '#42A5F5', sleep);

  buttonPlay = createButton('Play');
  setupButton(buttonPlay, 260, 450, '#FFD600', play);

  buttonClean = createButton('Clean');
  setupButton(buttonClean, 380, 450, '#26C6DA', clean);
  
  buttonRestart = createButton('Restart');
  setupButton(buttonRestart, 200, 400, '#9E9E9E', restart);
  buttonRestart.hide();

  buttonHome = createButton('Home');
  setupButton(buttonHome,220,70,'#fff',home)
  buttonHome.size(60, 60);
  buttonHome.style('border-radius', '50%');
  buttonHome.hide()

  buttonShop = createButton('Shop');
  setupButton(buttonShop,440,225,'#66BB6A',shop)
  buttonShop.size(50, 50);
  buttonShop.style('border-radius', '50%');

  buttonWork = createButton('Work');
  setupButton(buttonWork,10,225,'#aaaaaaff',work)
  buttonWork.size(50, 50);
  buttonWork.style('border-radius', '50%');

  // Initialiseer statuswaarden vanuit localStorage of standaard op 100 of 0
  statusen[0] = getItem('honger') ?? 100;
  statusen[1] = getItem('energie') ?? 100;
  statusen[2] = getItem('geluk') ?? 100;
  statusen[3] = getItem('gezondheid') ?? 100;

  gameminisec = getItem('minisec') ?? 0;
  gamesec = getItem('sec') ?? 0;
  gamemin = getItem('min') ?? 0;
  gamehour = getItem('hour') ?? 0;
  day = getItem('day') ?? 0;
}

function draw() {
  background(220);
  strokeWeight(0.5);
  // Controleer de status van het huisdier
  if (checkStatus() === "ok") {
    updateGameTime();
  } else {
    drawDeath();
    live = false;
    restartButton();
  }
  // UI elementen tekenen
  drawHUD();
  drawStatsBars();
  if(Home) drawPet();
  if(Shopping) drawShop();

  if (gamemode) handlePlayMode();
  if (cleaning) handleCleaning();

  updateTimeCounters();
}

// ================== GAME LOGIC ==================

function updateGameTime() {
  if (!live) return;

  gameminisec++;
  if (gameminisec >= 100) {
    gameminisec = 0;
    gamesec++;
    // Verlaag de statuswaarden op basis van de tijd
    statusen[0]-=0.1;
    statusen[1]-=0.05;
    statusen[2]-=0.02;
    statusen[3]-=0.01;
    // Verhoog energie en verlaag geluk als het huisdier slaapt
    if (sleeping) {
      statusen[1] = min(100, statusen[1] + 0.5);
      statusen[2]-=0.1;
      now_img = sleeping_img;
    }

    if (gamemode && now_img === norm) now_img = playing;
    if (cleaning) now_img = cleaning_img;
  }
  // Sla de statuswaarden en tijd op in localStorage
  storeItem('honger', statusen[0]);
  storeItem('energie', statusen[1]);
  storeItem('geluk', statusen[2]);
  storeItem('gezondheid', statusen[3]);
  storeItem('minisec', gameminisec);
  storeItem('sec', gamesec);
  storeItem('min', gamemin);
  storeItem('hour', gamehour);
  storeItem('day', day);
}

function checkStatus() {
  // Controleer of een van de statuswaarden 0 of lager is
  const names = ["hunger", "energy", "happiness", "health"];
  for (let i = 0; i < statusen.length; i++) {
    if (statusen[i] <= 0) return names[i];
  }
  return "ok";
}

function drawDeath() {
  fill(0);
  textSize(16);
  switch (checkStatus()) {
    case "hunger":
      text("I'm hungry!", 100, 100);
      break;
    case "energy":
      text("I'm tired!", 100, 100);
      break;
    case "happiness":
      text("I'm sad!", 100, 100);
      break;
    case "health":
      text("Clean me!", 100, 100);
      break;
  }
}

function drawHUD() {
  fill('#ffd000ff');
  rect(200, 20, 100, 35, 5);
  fill(0);
  textSize(12);
  text(`Day: ${day}  ${nf(gamehour, 2)}:${nf(gamemin, 2)}:${nf(gamesec, 2)}`, width / 2 - 45, 40);
  image(coin, height - 80, 20, 50, 50);
  text(money, height - 90, 50);

}

function drawStatsBars() {
  // Statusbalken tekenen
  let labels = ["Hunger", "Energy", "Happiness", "Health"];
  textSize(10);
  for (let i = 0; i < statusen.length; i++) {
    let y = 20 + i * 30;
    fill(0);
    text(`${labels[i]}: ${round(statusen[i])}`, 20, y);
    fill(180);
    rect(20, y + 5, 100, 10);
    fill(255);
    rect(20, y + 5, statusen[i], 10);
  }
}

function drawPet() {
  // Teken het huisdier
  image(now_img, width / 2 - 75, height / 2 - 75, 150, 150);
  if (!sleeping && !gamemode && !cleaning) updatePetMood();
}
function drawShop(){
  image(shop_img, width / 2 - 125, height / 2 - 125, 250, 250);
}
function handlePlayMode() {
  // Teken de muis en controleer op klikken
  if (statusen[1] > 0) {
    image(mousee, mouseeX, mouseeY, 100, 100);
    let d = dist(mouseX, mouseY, mouseeX + 50, mouseeY + 50);
    if (d < 50) {
      statusen[2] = min(100, statusen[2] + 1);
      statusen[1]-=0.5;
      mouseeX = random(80, width - 100);
      mouseeY = random(80, height - 100);
      money++;
    }
  }
}


function handleCleaning() {
  // Teken de zeep en beweeg deze
  image(soap, soapX, soapY, 120, 120);
  if (soapX < 290) {
    soapX++;
  } else {
    cleaning = false;
    statusen[3] = min(100, statusen[3] + 20);
  }
}

function updateTimeCounters() {
  // Update tijdsvariabelen
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
}

// ================== ACTIONS ==================

function feed() {
  // Voed het huisdier als er genoeg geld is en de honger niet vol is
  if (live && money >= 10 && statusen[0] < 100) {
    sleeping = gamemode = cleaning = false;
    money -= 10;
    statusen[0] = min(100, statusen[0] + 10);
  }
}

function sleep() {
  // Zet het huisdier in slaapstand
  if (live) {
    gamemode = cleaning = false;
    sleeping = !sleeping;
    now_img = sleeping ? sleeping_img : norm;
  }
}

function play() {
  // Zet het huisdier in speelmodus
  if (live) {
    sleeping = cleaning = false;
    gamemode = !gamemode;
    mouseeX = random(80, width - 100);
    mouseeY = random(80, height - 100);
    now_img = gamemode ? playing : norm;
  }
}

function clean() {
  // Zet het huisdier in schoonmaakmodus 
  if (live) {
    sleeping = gamemode = false;
    cleaning = !cleaning;
    soapX = 100;
    now_img = cleaning ? cleaning_img : norm;
  }
}
function shop(){
Shopping =!Shopping
Home = false
buttonWork.hide();
buttonShop.hide();
buttonHome.show();
}
function work(){
Working =!Working
Home = false
buttonWork.hide();
buttonShop.hide();
buttonHome.show();
}
function home(){
Home =!Home
Working = false
Shopping = false
buttonWork.show();
buttonShop.show();
buttonHome.hide();
}
function updatePetMood() {
  // Update de afbeelding van het huisdier op basis van de laagste status
  if (statusen[0] > 20 && statusen[1] > 40 && statusen[2] > 25 && statusen[3] > 20) {
    now_img = norm;
  } else {
    let minVal = Math.min(...statusen);
    let index = statusen.indexOf(minVal);
    switch (index) {
      case 0: now_img = hungry; break;
      case 1: now_img = tired; break;
      case 2: now_img = sad; break;
      case 3: now_img = dirt; break;
    }
  }
}

function restart() {
  // Herstel alle waarden naar de beginstatus
  gameminisec = gamemin = gamesec = gamehour = day = 0;
  statusen = [100, 100, 100, 100];
  sleeping = gamemode = cleaning = false;
  money = 0;
  live = true;
  now_img = norm;
  buttonRestart.hide();
}

function keyPressed() {
  if (keyCode === 8) restart();
}

function restartButton() {
  buttonRestart.show();
}

// ================== HELPERS ==================

function setupButton(btn, x, y, color, action) {
  btn.position(x, y);
  btn.size(100, 30);
  btn.style('background-color', color);
  btn.style('font-size', '16px');
  btn.mousePressed(action);
}

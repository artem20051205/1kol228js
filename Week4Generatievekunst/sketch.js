function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  generate()
}
  let x = []
  let y = []
  let dx = []
  let dy = []
  let alp = []
  let color_r = []
  let color_g = []
  let color_b = []
  let size  = []
function draw() {
  background(20, 20, 30);
  for (let i = 0; i<x.length; i++){
    let coin = round(random(1,2))
    fill(color_r[i],color_g[i],color_b[i],alp[i])
    circle(x[i],y[i],size[i])
    x[i]+=dx[i]
    y[i]+=dy[i]
    if (x[i] < 0 || x[i]+size[i] > width) {
      dx[i] *= -1
    }
    if (y[i] < 0 || y[i]+size[i] > height) {
      dy[i] *= -1
    }
    if (alp[i] < 200){
      alp[i]++
    } else{
      alp[i] = -100
      let r = round(random(1,2))
      if (r==1){
        dx[i]*=-1
      }else{
        dy[i]*=-1
      }
    }
  }
}
function generate(){
  count = round(random(500,1000))
  for (let i = 0; i<count;i++){
    x.push(random(width))
    y.push(random(height))
    dx.push(random(-5,5))
    dy.push(random(-5,5))
    alp.push(random(0,200))
    color_r.push(random(0,255))
    color_g.push(random(0,255))
    color_b.push(random(0,255))
    size.push(random(5,100))
  }
}
function keyPressed() {
  if (keyCode === BACKSPACE) {
    generate()
  }
}
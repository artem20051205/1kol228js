let mid = 0
let g = 0
let l = 100
let namen = []
function setup() {
  createCanvas(1000, 1000);
    for(let i =0; i<people.length;i++){
  mid += round(people[i][1]/people.length)
  namen.push(people[i][0]);

  if (people[i][1]>g){
    g = people[i][1]
  }
  if (people[i][1]<l){
    l = people[i][1]
  }
  }
  namen.sort()
}

let people = [
["John Doe", 35, "New York", "john@example.com"],
["Jane Smith", 28, "Los Angeles", "jane@example.com"],
["Michael Johnson", 42, "Chicago", "michael@example.com"],
["Emily Davis", 22, "San Francisco", "emily@example.com"],
["David Wilson", 40, "Houston", "david@example.com"],
["Sarah Brown", 30, "Miami", "sarah@example.com"],
["Jessica Lee", 25, "Denver", "jessica@example.com"],
["Brian Miller", 37, "Seattle", "brian@example.com"],
["Olivia Clark", 29, "Boston", "olivia@example.com"],
["Daniel Anderson", 33, "Dallas", "daniel@example.com"],
]
function draw() {
  background(220)
  for (let y = 0; y < 8; y++) {  // Loop voor rijen
    for (let x = 0; x < 8; x++) {  // Loop voor vakjes in een rij
      if ((x+y)%2==0){
        fill('black')
      }else{
        fill(255)
      }
      rect(y*50+25,x*50+25,40)
    }
  }

fill(255,0,0)
textSize(42)
text(mid,500,100)
text(g,500,200)
text(l,500,300)
textSize(15)
text(namen,25,500)
}
let gridX = 10;
let gridY = 10;
let margin = 20;
let canvasWidth = 450;
let canvasHeight = canvasWidth;
let myPoems = ['01.txt', '02.txt', '03.txt', '04.txt','05.txt','06.txt','07.txt','08.txt','09.txt','10.txt'];
let myPoem;
let myLetter;
let poemLines = 0;
let charInLine = 0;
let charBehind = 0;
let frameProgress = 0;

/*$.ajax({
  type: "GET",
  url: "text/01.txt",
  success: function(data){
    console.log(data);
  }
});*/

/*$(document).ready(function() {
  let myArray = [];
  console.log('text/01.txt');
  console.log(myArray);
});*/

function preload() {
  myPoem = loadStrings(random(myPoems));
  //customFont = loadFont('Metodo-Medium.ttf');
}

function mousePressed() {
  myPoem = loadStrings(random(myPoems));
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(5);
  textFont(customFont);
  
  button = createButton('Next Poem');
  button.position(10, canvasHeight + 10);
  button.mousePressed = loadStrings(random(myPoems));
}


function draw() {
  background(0, 0, 0);
  createGrid(frameProgress);
  
  frameProgress++;
  if (frameProgress > myPoem[poemLines].length) {
    frameProgress = 0;
  
}
  }

function createGrid(frameProgress) {
  push()
  translate(margin,margin);
  poemLines = 0;
  for (let y = 0; y <= (canvasWidth/10)*9; y += canvasHeight/gridY) {
    charInLine = 0;
    charBehind = 0;
	for (let x = 0; x <= 2000; x += canvasWidth/gridX) {
      
      
      if ((charInLine-frameProgress)>=0){
        myLetter = split(myPoem[poemLines],"")[charInLine-frameProgress];
      } else {
        myLetter = split(myPoem[poemLines],"").slice(split(myPoem[poemLines],"").length - frameProgress)[0+charBehind];
        charBehind++;
      }
      
      
      //text(myLetter,x,y);
      //text(charInLine-frameProgress,x,y);
      //text(frameProgress, x, y);
      
      if (random() < 0.6) { //accendi spegni lettere
        fill(255); //colore delle lettere su bianco
        text(myLetter, x, y);
      } else {
        fill(0); 
        text(" ", x, y);
      }
    
  
      charInLine++;
	}
    
    if (poemLines < myPoem.length-1) {
      poemLines++;
    } else {
      return poemLines = 0;
    }
  }
  pop();
}
  


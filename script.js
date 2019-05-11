var sliderA;
var sliderS;
var sliderC;
var sliderM;

function setup() {
  pixelDensity(1);
  Canvas = createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1, 1, 1);
  sliderS = createSlider(1, 2000, 600, 0.01);
  sliderS.parent('inputs');
  sliderA = createSlider(1, 2000, 400, 0.01);
  sliderA.parent('inputs');
  sliderC = createSlider(0, 2000, 0, 0.01);
  sliderC.parent('inputs');
  sliderM = createSlider(1, 100, 3, 0.01);
  sliderM.parent('inputs');

  saveButton = createButton('SAVE IMAGE');
  saveButton.mousePressed(saveImg);
  saveButton.parent('but');
}

function saveImg() {
  save('melted.jpg');
}

function draw() {
  var s = sliderS.value();
  var amp = sliderA.value();
  var c = sliderC.value();
  var m = sliderM.value();

  for (let i = 0; i < width; i++) {
      let n = noise(i / s, frameCount * m / s);
      stroke(0);       point(i, c + n * amp);
      stroke(n, 1, 1); point(i, 2 + n * amp);
    }

}

function mousePressed (){
  windowResized();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

$(document).ready(function() {
  $("button").click(function() {
    $("span").toggle();
  })
})

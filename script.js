var sliderA;
var sliderS;
var sliderC;
var sliderM;

function setup() {
  pixelDensity(1);
  Canvas = createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1, 1, 1);
//  windowResized();
  sliderS = createSlider(1, 2000, 600, 0.01);
  sliderA = createSlider(1, 2000, 400, 0.01);
  sliderC = createSlider(0, 30, 0, 0.01);
  sliderM = createSlider(1, 100, 3, 0.01);
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
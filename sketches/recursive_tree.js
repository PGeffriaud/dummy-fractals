var width = 1100;
var height = 900;
var angleR = 0.5;
var angleL = 0.5;
var angleSlider;
var minLength = 20;

function setup() {
  createCanvas(1100, 900);
  angleSlider = createSlider(0,PI/2,0.5,0.01);
}

function draw() {
  angleR = angleSlider.value();
  angleL = angleSlider.value();
  background(51);
  stroke(255);
  translate(width/2,height);
  branch(200);

  //translate(-200,0);
  //branch(200);
}

function branch(len) {
  line(0,0,0,-len);

  push();
  translate(0,-len);
  //angleL = angleL
  rotate(angleL);
  if(len > minLength) {
    branch(len*0.8);
  }
  pop();

  push();
  translate(0,-len);
  //angleR = angleR + (Math.random()*Math.PI/180 /50);
  rotate(-angleR);
  if(len > minLength) {
    branch(len*0.8);
  }
  pop();

}

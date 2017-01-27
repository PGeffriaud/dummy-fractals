/* L-System definition
Alpabet: A,B
Initial state: A
Rules:
  A -> AB
  B -> A
*/
var button;
var angle;
var len = 5;
var slider;


var state = "X";
var rules = [
  {
    "old": "X",
    "new": "F-[[X]+X]+F[+FX]-X)"
  },
  {
    "old": "F",
    "new": "FF"
  }
];


function setup() {
  createCanvas(1500,1500);
  slider = createSlider(-PI/2,PI/2,PI/4,PI/100);
  button = createButton("Generate");
  button.mousePressed(generate);
}

function draw() {
  angle = slider.value();
  translate(750,1500);
  background(51);
  stroke(255);
  for(var i=0; i<state.length; i++) {
    switch (state.charAt(i)) {
      case "F":
        line(0,0,0,-len);
        translate(0,-len)
        break;
      case "G":
        line(0,0,0,-len);
        translate(0,-len)
        break;
      case "+":
        rotate(angle);
        break
      case "-":
        rotate(-angle);
        break;
      case "[":
        push();
        break;
      case "]":
        pop();
        break;
      default:
        break;
    }
  }

}

function generate() {
//  resetMatrix()
  var newState = "";
  for(var i=0; i<state.length; i++) {
    var actual = state.charAt(i);

    var rule = rules.find(function(r) {
      return r.old === actual
    });

    if(rule) {
      newState += rule.new;
    } else {
      newState += actual;
    }

  }
  state = newState;
}

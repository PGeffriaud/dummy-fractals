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


var state = "0";
var rules = [
  {
    "old": "1",
    "new": "11"
  },
  {
    "old": "0",
    "new": "1[0]0"
  }
];


function setup() {
  angle = PI/4;
  createCanvas(800,800);
  button = createButton("Generate");
  button.mousePressed(generate);
  createP(state);
}

function draw() {
  translate(400,800);
  background(51);
  stroke(255);
  for(var i=0; i<state.length; i++) {
    switch (state.charAt(i)) {
      case "1":
        line(0,0,0,-len);
        translate(0,-len)
        break;
      case "0":
        line(0,0,0,-len);
        translate(0,-len)
        break;
      case "[":
        push();
        rotate(angle);
        break
      case "]":
        pop();
        rotate(-angle);
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
  createP(state);
}

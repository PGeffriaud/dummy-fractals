/* L-System definition
Alpabet: A,B
Initial state: A
Rules:
  A -> AB
  B -> A
*/
var button;
var angle;
var len = 10;


var state = "F-G-G";
var rules = [
  {
    "old": "F",
    "new": "F-G+F+G-F"
  },
  {
    "old": "G",
    "new": "GG"
  }
];


function setup() {
  createCanvas(1500,1500);
  angle = 2 * (PI/3);
  button = createButton("Generate");
  button.mousePressed(generate);
}

function draw() {
  translate(0,1500);
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
        rotate(-angle);
        break
      case "-":
        rotate(angle);
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

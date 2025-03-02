/* 

Gamelet: a starting point for writing games
Autor: Domagoj Mihelcic
Version: 1.0
Instructions:
Include Gamelet.js in an HTML document containing an element with an id of 'ball'.
The script will detect when the left arrow or rigth arrow key pressed and will move the ball element accordingly.

*/

const ball = document.getElementById("ball"); //get the ball
document.addEventListener("keydown", handelKeyPress); //listen for keys
let position = 0; // set initial position

/*
handleKeyPress
responde to certain key presses by updaiting position.
*/
function handelKeyPress(e) {
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}

/*
refresh
changes the position of the ball
*/
function refresh() {
  ball.style.left = position + "px";
}

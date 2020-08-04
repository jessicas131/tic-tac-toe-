/*--------------------Constants--------------------*/

const MAXGUESS = 9;

//possible winning combinations
const WINARR = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*--------------------State Variables--------------------*/
//squares are undefined to start game then defined later by button click... either x or o
let playerChoices; //player one = 1  player 2= -1
let turn; //determined by positive or negative to switch back and forth
/*--------------------Cached Element Refrences--------------------*/
let gameBoardEl = document.querySelector(".gameBoard");

/*--------------------Event Listeners--------------------*/
//need to be able to click whole game board
document.querySelector(".gameBoard").addEventListener("click", handleClick);
//when the restart button is hit it goes back to initialize function
document.querySelector("button").addEventListener("click", init);
/*--------------------Functions--------------------*/

//event handler function
//the event parameter is refering to the event listener
//let index we made a variable for the target()
//playerChoices[0] = turn % 2 ? "O" : "X";   changing the value in the array
//then call the render function to "mark" x or o
//once a winner is found invoke the renderMessage function
//if we reach max guesses without a winner then disable the clicks and display message
function handleClick(evt) {
  let index = evt.target.id;
  if (playerChoices[index] || checkWin()) return;
  playerChoices[index] = turn % 2 ? "O" : "X";
  render(evt.target);
  if (checkWin()) {
    renderMessage();
  } else if (turn + 1 === MAXGUESS) {
    gameBoardEl.removeEventListener("click", handleClick);
    document.getElementById("msg").textContent = "Nobody Wins";
  }
  turn++;
}

//this sets all of the state variables
//and sets the message to null
//the init starts the game and RESTARTS the game
//playerChoices starts at null so we can click and fill it
function init() {
  //initialize all state variables
  playerChoices = [null, null, null, null, null, null, null, null, null];
  //for when it restarts
  turn = 0;
  document.querySelectorAll(".box").forEach(function (el) {
    //this is fixing my weird css
    el.textContent = "x";
    el.style.color = "#101357";
  });
  document.querySelector(".gameBoard").addEventListener("click", handleClick);
  document.getElementById("msg").textContent = null;
}

init();

//compairing the winning combos array to the values that have been entered into the player choices array
//array some checks to see if a match is immediately true
//the fourth is to make sure the three indexes that equal eachother arent null
function checkWin() {
  //check if there is a winner
  return WINARR.some(function (arr) {
    return (
      playerChoices[arr[0]] === playerChoices[arr[1]] &&
      playerChoices[arr[0]] === playerChoices[arr[2]] &&
      playerChoices[arr[2]]
    );
  });
}

//this is what is putting my x's and o's on the board
function render(element) {
  element.textContent = turn % 2 ? "O" : "X";
  element.style.color = "white";
}

//when this message is called
function renderMessage() {
  document.getElementById("msg").textContent = `Play ${
    turn % 2 ? "O" : "X"
  } Wins!`;
}

// when use clicks on board, determine if user is 'x' or 'o'
// turn counter even or odd
// click on something, render board, update array of player choices
// did that click generate win?
// check winning combos and see if any of those match (array.sum method)
// remove event listener
// return board? make board not function and invoke reset button
// check if user generated tie
// see if turn counter +1 = max number of moves (start at turn 0 and fo to 8)
// check to see if turn incrementor is same as max numbers of turns
// if not, out of turns? or who's turn?
// render an updated board after each turn
// no win?
// incrememnt turn counter

//code not used
/*
function init(){
    if(winArr.includes[undefined] === false){
      alert(`Game over! ${} has won!`)  
    }
}


function render(){
  
}

*/

/*--------------------Constants--------------------*/

const MAXGUESS = 9;

//winning combinations
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
//squares are undefined to start game then defined later by button click either x or o
let playerChoices; //player one = 1  player 2= -1
let turn;
/*--------------------Cached Element Refrences--------------------*/
//html "square" elements
//let squareEl = document.getElementsByClassName(".gameBoard");

//const button = document.getElementsByTagName(button);

/*--------------------Event Listeners--------------------*/
document.querySelector(".gameBoard").addEventListener("click", handleClick);

/*--------------------Functions--------------------*/

//event handler function

function handleClick(evt) {
  let index = evt.target.id;
  playerChoices[index] = turn % 2 ? "O" : "X";
  render(evt.target);
  turn++;
  console.log(playerChoices);
  if (checkWin()) {
    document
      .querySelector(".gameBoard")
      .removeEventListener("click", handleClick);
  }
}

function init() {
  //initialize all state variables
  playerChoices = [null, null, null, null, null, null, null, null, null];
  turn = 0;
}

init();

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

function render(element) {
  element.textContent = turn % 2 ? "O" : "X";
  element.style.color = "white";
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

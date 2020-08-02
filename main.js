/*--------------------Constants--------------------*/
const COLORS{
 empty: undefined,
 player1: 'x',
 player2: 'o',
};

let TURN= true;
//winning combinations
const winArr = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const squareArr = [square0, square1, square2, square3, square4, square5, square6, square7, square8 ]

/*--------------------State Variables--------------------*/
//squares are undefined to start game then defined later by button click
let square0;
let square1;
let square2;
let square3;
let square4;
let square5;
let square6;
let square7;
let square8;




/*--------------------Cached Element Refrences--------------------*/
//html square elements
let square0 = document.getElementById('square-0');
let square1 = document.getElementById('square-1');
let square2 = document.getElementById('square-2');
let square3 = document.getElementById('square-3');
let square4 = document.getElementById('square-4');
let square5 = document.getElementById('square-5');
let square6 = document.getElementById('square-6');
let square7 = document.getElementById('square-7');
let square8 = document.getElementById('square-8');

const button = document.getElementsByTagName(button)

/*--------------------Event Listeners--------------------*/
document.querySelector('.box').addEventListener('click', play);


/*--------------------Functions--------------------*/
//TODO


function play(event){
  while(winArr.includes[undefined] === false){
    if(turn = true){
      COLORS.player1.handleBoxClick();
    }else {
      COLORS.player2.handleBoxClick();
    }
    turn = !turn;
    
    if(gameOver){
      break;
    }
  }
  
}





function gameOver(winArr.includes[undefined] !== true){
  alert('Game over! Start again!');
}









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
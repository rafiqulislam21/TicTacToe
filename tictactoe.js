var turn = true;
var gameOver = false;
var clicked = [false, false, false,
			   false, false, false,
			   false, false, false];

//all wining combinitions.....................
var endGame =[[0,1,2],
			 [3,4,5],
			 [6,7,8],
			 [0,4,8],
			 [2,4,6],
			 [1,4,7],
			 [0,3,6],
			 [2,5,8]];

var element;
function cellClicked(event){
	element = event.target;

	if ( clicked[element.id] === false && gameOver === false ) {
			
		clicked[element.id] = turn ? 1 : 0;
		console.log(clicked);
		console.log(event);
	
		element.innerHTML = turn ? "X" : "O";
		turn = !turn;

		var result = finishGame();

			if (result === 1) {
				//console.log("Player 1 wins!");
				//document.getElementById('status-d').innerHTML = "Player 1 won the game!";
				var temp = document.getElementById('p1_wins');
			    temp.innerText = Number(temp.innerText) + 1;
			    document.getElementById('status-d').innerHTML="Player 1 wins";

			    var temp = document.getElementById('p2_lost');
			    temp.innerText = Number(temp.innerText) + 1;
				gameOver = true;
			}
			if (result === 0) {
				//console.log("Player 2 wins!");
				//document.getElementById('status-d').innerHTML = "Player 2 won the game!";

				 var temp = document.getElementById('p2_wins');
				    temp.innerText = Number(temp.innerText) + 1;
				    document.getElementById("status-d").innerText="Player 2 wins";

				    var temp = document.getElementById('p1_lost');
				    temp.innerText = Number(temp.innerText) + 1;
					gameOver = true;
			}
			if (result === -1) {
				console.log("Tie");
				document.getElementById('status-d').innerHTML = "Match draw!";
				gameOver = true;
			}
			if (result === false) {
				document.getElementById('status-d').innerHTML = "Game is running";
				console.log("Game must go on!");
			}

			function clear(){
			  console.log("works")
			  for (var i=0; i<9; i++){
			    document.getElementById(i).innerText="";
			  }
			  document.getElementById("status-d").innerText="New Game";
			  gameOver = false;
 
			    turn = true;
				gameOver = false;
				clicked = [false, false, false,
						   false, false, false,
						   false, false, false];
				endGame =    [[0,1,2],
							 [3,4,5],
							 [6,7,8],
							 [0,4,8],
							 [2,4,6],
							 [1,4,7],
							 [0,3,6],
							 [2,5,8]];

			}


			document.getElementById("clc").addEventListener("click",function (event){
			  clear();
			});
	}
}


function finishGame() {
	for (var i = 0; i < endGame.length; i++) {
		if (
			clicked[endGame[i][0]] !== false &&
			clicked[endGame[i][1]] !== false &&
			clicked[endGame[i][2]] !== false
		) {
			if ( clicked[endGame[i][0]] === clicked[endGame[i][1]] && clicked[endGame[i][1]] === clicked[endGame[i][2]] ) {
				if ( clicked[endGame[i][0]] === 1) {
					//player 1 winner
					return 1;
				}
				if ( clicked[endGame[i][0]] === 0) {
					//player 2 winner
					return 0;
				}
			}
		}
	}







	var tie = true;
	for (var i = 0; i < clicked.length; i++) {
		if (clicked[i] === false) {
			tie = false;
			break;
		}
	}

	if (tie === true) {
		return -1;
	}
	
	return false;
}



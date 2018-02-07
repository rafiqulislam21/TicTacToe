//JS code goes here
var turn = false;
function play(event){
	console.log(event)
	event.target.innerText = turn? " 0":"X" ;
	turn = !turn;
}
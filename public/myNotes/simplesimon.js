//******** SIMPLE SIMON GAME JAVASCRIPT ************
//SET GLOBAL VARIABLES

buttons = document.getElementsByClassName("buttons");
var simonSequence = [];
var userSequence = [];
var round = 1;

var btn0 = document.getElementById("box0");
var btn1 = document.getElementById("box1");
var btn2 = document.getElementById("box2");
var btn3 = document.getElementById("box3"); 
var btnPlay = document.getElementById("play");


// USER SAYS LETS PLAY ***********************
//WORKS
var playSimon = function(){
	console.log("play is heard");
	getSimonSelection();
}
// GENERATES RANDOM VALUE FOR SIMON TO FOLLOW *******
//WORKS
var getSimonSelection = function (){
	var newNumber = Math.floor(Math.random() * 4);
	console.log(newNumber + " is Simons new number");
	simonSequence.push(newNumber);
	console.log(simonSequence + " is simons array");
	round = round + 1;
	console.log(round + " is round");
	roundUpdate(round);
	if (round == 1){
		console.log("round == 1")
		yourTurn();
		if (simonSelection == "0"){
		buttonFlash(btn0);
		} else if (simonSelection == "1"){
		buttonFlash(btn1);
		} else if (simonSelection == "2"){
			buttonFlash(btn2);
		} else if (simonSelection == "3"){
			buttonFlash(btn3);
		}
	} 
} 

function animateSimon(simonSequence){
	console.log("in animateSimon");
	disablePlayer();
	var i = 0;
	var simonsTurn = setInterval(function(){
	if (i < simonSequence.length){
		var buttonDance = setInterval(function(){
		if (simonSequence[i] == "0"){
		buttonFlash(btn0);
		} else if (simonSequence[i] == "1"){
		buttonFlash(btn1);
		} else if (simonSequence[i] == "2"){
			buttonFlash(btn2);
		} else if (simonSequence[i] == "3"){
			buttonFlash(btn3);
		} else {clearInterval(simonsTurn);
			usersTurn();
		}
		},1000);
	}
	i++;
	enablePlayer();
	}, 1000);
}

function buttonFlash (buttonToFlash){
	buttonToFlash.style.opacity = "1";
	var timeoutId = setTimeout (function(){
	buttonToFlash.style.opacity = "0.5"
	},800);
}


function usersTurn (){
	document.getElementById("talk").innerHTML = "Your turn!";
}
//ADD USER CHOICE TO USER ARRAY and MODIFIES BUTTON.
// WORKS
var userPlays = function(){
	console.log(this.value + " is users pick");
	if (this.value == "0"){
		buttonFlash(btn0);
		} else if (this.value == "1"){
		buttonFlash(btn1);
		} else if (this.value == "2"){
			buttonFlash(btn2);
		} else if (this.value == "3"){
			buttonFlash(btn3);
		}
	userSequence.push(this.value);
	console.log(userSequence + " is userSequence in userPlays")
	compareSequences(userSequence);	
}

function compareSequences(userSequence, simonSequence){
		console.log(userSequence + " is in compareSequences");
		console.log(simonSequence + " is in compareSequences");
	if (userSequence[i] == 0 || userSequence[i] !== simonSequence[i]){
		userSequence = [];
		simonSequence = [];
		gameOver();
	} else {
		continueGame(simonSequence);
	}	
}

function gameOver(){
	document.getElementById("talk") = "Game Over";
	var timeoutId = setTimeout(function () {
    confirm("Game over. Play again?");
	}, 5000);
}

function continueGame(simonSequence){
	console.log(simonSequence + " is s.array in continueGame");
	getSimonSelection(simonSequence);
}

function enablePlayer(){
btn0.addEventListener("click", userPlays, false);
btn1.addEventListener("click", userPlays, false);
btn2.addEventListener("click", userPlays, false);
btn3.addEventListener("click", userPlays, false);
btnPlay.addEventListener("click", playSimon, false);
}
function disablePlayer(){
btn0.removeEventListener("click", userPlays, false);
btn1.removeEventListener("click", userPlays, false);
btn2.removeEventListener("click", userPlays, false);
btn3.removeEventListener("click", userPlays, false);
}
btnPlay.addEventListener("click", playSimon, false);


/**************************************/

/*TODO: RANDOMLY SELECT BUTTONS - THEY FADE IN, THEN OUT*/
//  and variable for the selection array
/*TODO: USER CAN CLICK THE BUTTON THAT WAS RANDOMIZED*/
/*TODO: RANDOM SELECT AND THEN USER SELECT AND ADD RANDOM AGAIN*/
/*TODO: CONTINUE PROCESS UNTIL USER MISSES A BUTTON*/
/*TODO: INSTALL A CLICK COUNTER FOR USER*/
// assign variables to hold html elements
//function to randomly get square
//listen for user input and decide if true or false
//count the round if true
//add to sequence if true
//recycle game
//if false, do not count, ask if want to play again
//timeout to reload page if no response
//if no response, time out the game


//EXERCISE 5.7 - JAVASCRIPT FOR WHACKAMOLE GAME
$(document).ready(function() {

	"use strict";
	var timer = 10;
	var interval = 1500;
	var score = 0;

	//game goes for 10 seconds regardless of user activity
	var gameRound = function(interval) {
	var overallTimer = setInterval (function(){	
		if (timer > 0){
			getRandomCell();
			timer--;

		} else {
			clearInterval(overallTimer);
		}
		}, interval);
	}


	//generate and change the appearance of a random "mole"	
	var getRandomCell = function() {

		var random = Math.floor(Math.random() * 9);
		var cells = $(".box");
		
		$(cells[random]).addClass("mole");
		
		var timeoutId = setTimeout (function(){
		$(cells[random]).removeClass("mole");
		},interval);
	}



	//user click is verified valid or not, score is posted on display
	$(".box").click(function(){
		if (timer == 0) {
			console.log("user can't play, timed out");
		} else if (timer !=0) {
			if($(this).hasClass('mole')) {
				$(".box").removeClass("mole");
				score += 1;
				$("#score").html(score);
			} 
		}
	});


	// clicking start always restarts the game
	$("#start").click(function() {
		// var start = true;
		if (timer = 10) {
			gameRound(interval);
			
		} else if (timer < 10) {
			location.reload();
			var timeoutId = setTimeout (function(){
				gameRound(interval);
			},2500);
		}
	});

	

	// allow user to click only while timer runs. timer ending calls start.
	


	// refactor: timer ending is end of round, max 3 rounds.
	// add function that makes moles appear more often after each round.
});

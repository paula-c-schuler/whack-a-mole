//EXERCISE 5.7 - JAVASCRIPT FOR WHACKAMOLE GAME
$(document).ready(function() {

	"use strict";
	var timer = 30;
	var interval = 1500;
	var score = 0;

	//  Console says below is not a function???
	// var audio = document.getElementbyId("sound");

	// Game goes for 10 seconds regardless of user activity
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


	// Generate and change the appearance of a random "mole"	
	var getRandomCell = function() {

		var random = Math.floor(Math.random() * 9);
		var cells = $(".box");
		
		$(cells[random]).addClass("mole");
		
		var timeoutId = setTimeout (function(){
		$(cells[random]).removeClass("mole");
		},interval);
	}



	// User click is verified valid or not, score is posted on display
	// Allows user to click only while timer runs.
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

	// Adds sound when mole is hit
	// Not working. Getting "not a function errors"
	// $(".box").click(function() {
	// 	audio.play(audio);
	// });


	// Clicking start always restarts the game
	// Page reload is not working
	$("#start").click(function() {
		// var start = true;
		if (timer = 30) {
			gameRound(interval);
			
		} else if (timer < 30) {
			location.reload();
			var timeoutId = setTimeout (function(){
				gameRound(interval);
			},2500);
		}
	});

	
	$("#start").hover(function(){
    	$(this).css("color", "navy");
    }, function(){
    	$(this).css("color", "white");
	});

	
	


	// refactor: timer ending is end of round, max 3 rounds.
	// add function that makes moles appear more often after each round.
});

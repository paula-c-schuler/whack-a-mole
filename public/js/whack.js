//EXERCISE 5.7 - JAVASCRIPT FOR WHACKAMOLE GAME
$(document).ready(function() {

	"use strict";
	var timer = 30;
	var interval = 1500;
	var score = 0;
	var level = 1;

	// Adds sound when mole is hit
	// Validates user click, if valid then increases score
	var audio = document.getElementById("sound");
	$(".grid").on('click', '.mole', function() {
		audio.play();

		if (timer == 0) {
			console.log("user can't play, timed out");

		} else if (timer !=0) {
			$(".box").removeClass("mole");
			score += 1;
			$("#score").html(score);
		}
	});

	// Game goes for time period regardless of user activity
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
		
		var timeoutId = setTimeout (function() {
		$(cells[random]).removeClass("mole");
		},interval);
	}

	// Clicking start always starts or restarts the game
	$("#start").click(function() {
		if (timer == 30) {
			gameRound(interval);
			
		} else if (timer < 30) {
			location.reload();
			timer = 30;
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

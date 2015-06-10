//EXERCISE 5.7 - JAVASCRIPT FOR WHACKAMOLE GAME
$(document).ready(function() {

	"use strict";
	var timer = 20;
	var interval = 1500;
	var score = 0;
	var level = 1;
	var high;
	var highNew;
	var round1;
	var round2;
	var round3;


	// set high score
	function initiateHighScore() {	
		high = localStorage.getItem("high");
		if (high == undefined && high == null) {
			localStorage.setItem("high", 0);
			console.log(localStorage.getItem('high'));
		} else {
			$("#highscore").text("High Score: " + high);
		}
	}
	initiateHighScore();

	
	// Adds sound when mole is hit
	// Validates user click, if valid then increases score
	var audio = document.getElementById("sound");
	$(".grid").on('click', '.mole', function() {
		audio.play();
		$(".box").removeClass("mole");
		score += 1;
		$("#score").html(score);
		if (level == 3) {
			if (timer == 0) {
				console.log("user can't play, timed out");
			}
		}
	});


	// Tracks the timer and calls for a random mole to appear
	// When timer hits 0, calls for another round, max 3 rounds.
	function gameTimer() {	
		if (timer > 0) {
			getRandomCell();
			timer--;
			console.log(timer);

		} else { 
			clearInterval(round1);
			clearInterval(round2);
			clearInterval(round3);
			if (level === 1) {
				level += 1;
				anotherRound(level);

			} else if (level === 2) {
				level += 1;
				anotherRound(level);
				
			} else if (level === 3) {
				determineHighScore(score);
			}
		}
	}


	// Generate and change the appearance of a random "mole"	
	var getRandomCell = function() {
		var random = Math.floor(Math.random() * 9);
		var cells = $(".box");

		$(cells[random]).addClass("mole");
		
		var timeoutId = setTimeout (function() {
			$(cells[random]).removeClass("mole");
		},900);
	}


	// Updates display, refreshes timer, shortens interval and calls another round of the game
	function anotherRound() {
		if (level === 2) {
			$("#level1").text("Level 2!");
			timer = 20;
			round2 = setInterval(gameTimer, 1200);

		} else if (level === 3) {
			$("#level1").text("Last Level!");
			timer = 20;
			round3 = setInterval(gameTimer, 1000);
		}
	}


	// Compares score to high score, updates, displays
	function determineHighScore() {
		high = localStorage.getItem("high");
		if (score > high) {
			var highNew = score;
			localStorage.setItem("high", highNew);
			$("#highscore").text("High Score: " + highNew);
		}
	}


	// Clicking start always starts or restarts the game
	$("#start").click(function() {
		if (timer == 20) {
			round1 = setInterval(gameTimer, 1200);
			
		} else if (timer < 20) {
			location.reload();
			timer = 20;
			var timeoutId = setTimeout (function(){
				gameRound(interval);
			},2500);
		}
	});


	// Responds to user hovering over start button
	$("#start").hover(function(){
    	$(this).css("color", "navy");
    }, function(){
    	$(this).css("color", "white");
	});
});

//EXERCISE 5.7 - JAVASCRIPT FOR WHACKAMOLE GAME
$(document).ready(function() {

	"use strict";
	var timer = 10;
	var interval = 1200;
	var score = 0;
	var level = 1;
	var round1;
	var round2;
	var round3;

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

	// Game goes for time period regardless of user activity
	// var gameRound = function(interval) {
	// var overallTimer = setInterval (function(){	
	// 	console.log(level);
	// 	console.log("is level");
	// 	if (level < 4) {
	// 		if (timer > 0){
	// 		getRandomCell();
	// 		timer--;
	// 		}
	// 	} else { 
	// 		level += 1;
	// 		console.log(level);
	// 		console.log("is level after else");
	// 		clearInterval(overallTimer);
	// 	}
	// 	}, interval);
	// }

	// Testing refactoring timers to speed up the game
	// Start button succeeds calling this with setInterval
	// clearInterval succeeds stopping this round1 call
	function gameTimer() {	
		console.log(level);
		console.log("is level");
		if (timer > 0) {
			getRandomCell();
			timer--;
			console.log(timer);
		} else if (timer == 0) { 
			clearInterval(round1);
			clearInterval(round2);
			clearInterval(round3);
			if (level === 1) {
				console.log(level);
				console.log("is level === 1");
				level += 1;
				$("#level1").text("Next Level!");
				anotherRound(level);
			} else if (level === 2) {
				console.log(level);
				console.log("is level === 2");
				level += 1;
				anotherRound(level);
				
			} else if (level === 3) {
				console.log(level);
				console.log("is level === 3");
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
		},interval);
	}

	// Updates display, shortens interval and calls another round of the game
	function anotherRound() {
		if (level === 2) {
			console.log(level);
			console.log("is level === 2");
			$("#level1").text("Level 2!");
		round2 = setInterval(gameTimer, 900);
		} else if (level === 3) {
			console.log(level);
			console.log("is level === 3");
			$("#level1").text("Last Level!");
		// round3 = setInterval(gameTimer, 700);
		}
	}

	// Clicking start always starts or restarts the game
	$("#start").click(function() {
		if (timer == 10) {
			round1 = setInterval(gameTimer, 1200);
			
		} else if (timer < 30) {
			location.reload();
			timer = 10;
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

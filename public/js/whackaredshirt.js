//******** JAVASCRIPT FOR WHACKAMOLE GAME *********

var timer = 15;
interval = 1300;
score = 0;
 

// Generate and change appearance of random "mole."
var getRandomCell = function() {
	var random = Math.floor(Math.random() * 10);
	var cells = $(".box");
	
	$(cells[random]).addClass("mole");
	
	var timeoutId = setTimeout (function(){
	$(cells[random]).removeClass("mole");
	},1300);
}

// Game lasts 15 seconds regardless of user activity.
var overallTimer = setInterval (function(){	
	if (timer > 0){
		getRandomCell();

		timer--;
		$("#timer").html(timer);
		
	} else {
		clearInterval(overallTimer);
		$("#start").removeClass("start");

		alert("Game Over.");
		}
	}, interval);

// User click is verified valid, scores posted.
$(".box").click(function(){

	//play tos_phaser audio*************** HOW DO I PLAY AUDIO? **********
	if($(this).hasClass('mole')) {
		$(".box").removeClass("mole");
		score += 1;
		$("#score").html(score);
	}
});
//button appears after game over and offers opportunity to play again, 
//upon button click, it resets the score and calls game function.
var start = function(){
$("#start").click(function() {	
	$("#score").html(score);
	delayRestart();
	});
};

// Call function immediately for immediate listening to start button.
start();

// Upon listener hearing start click, this function delays restart.
// Player has time to watch for first mole.
var delayRestart = function () {
	var timeoutId = setTimeout (function(){
	timer = 15;
	},2500);
	location.reload();
	getRandomCell();
}

		





//******** JAVASCRIPT FOR WHACKAMOLE GAME *********

var timer = 15;
interval = 1500;
score = 0;
 

//generate and change the appearance of a random "mole"
var getRandomCell = function() {
	var random = Math.floor(Math.random() * 9);
	var cells = $(".box");
	
	$(cells[random]).addClass("mole");
	
	var timeoutId = setTimeout (function(){
	$(cells[random]).removeClass("mole");
	},1000);
}

//game goes for 15 seconds regardless of user activity
var overallTimer = setInterval (function(){	
	if (timer > 0){
		getRandomCell();

		timer--;
		$("#timer").html(timer);
		
	} else {
		clearInterval(overallTimer);
		$("#start").removeClass("start");
		alert("Game Over");
		}
	}, interval);

//user click is verified valid or not, score is posted on display
$(".box").click(function(){
	//play tos_phaser audio*************** HOW DO I PLAY AUDIO? **********
	if($(this).hasClass('mole')) {
		$(".box").removeClass("mole");
		score += 1;
		$("#score").html(score);
	}
});
//button appears after game over and offers opportunity to play again, 
//upon button click, it resets the score and calls game function
var start = function(){
$("#start").click(function() {
	
	score = 0;
	// $("#score").html(score);
	$("#scorecount").html(score);

	getRandomCell();
	});
};

		





//******** JAVASCRIPT FOR WHACKAMOLE GAME *********

//Change the red background to use an image. 
//This could be a mole, or any other image you'd like to use.


//Update the code to remove the mole when it is clicked.

//Add score. Each time the mole is successfully clicked, increase the displayed score by 1.
var timer = 15;
interval = 1500;
score = 0;

var getRandomCell = function() {
	var random = Math.floor(Math.random() * 9);
	var cells = $(".col-md-3");
	console.log(cells);
	
	$(cells[random]).addClass("mole");
	
	var timeoutId = setTimeout (function(){
	$(cells[random]).removeClass("mole");
	},1200);
	
	var userTarget = cells[random];
}

//game goes for 15 seconds and regardless of user activity
var overallTimer = setInterval (function(){	
	if (timer > 0){
		getRandomCell();

		timer--;
		$("#timer").html(timer);
	} else {
		clearInterval(overallTimer);
		alert("Game Over");
		}
	}, interval);

$(".col-md-3").click(function(){
	console.log("heard");
	if($(".col-md-3").hasClass('mole')) {
		$(".col-md-3").removeClass("mole");
		getPoint();
		score += 1;
	$("#score").html(score);
	}
});
		
var getPoint = function(score){
	console.log("in getPoint");
	// score +=
	// $("#score").html(score);
}




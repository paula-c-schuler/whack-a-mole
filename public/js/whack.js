//******** JAVASCRIPT FOR WHACKAMOLE GAME *********

//Change the red background to use an image. 
//This could be a mole, or any other image you'd like to use.


//Update the code to remove the mole when it is clicked.

//Add score. Each time the mole is successfully clicked, increase the displayed score by 1.
var score = 0;


var getRandomCell = function() {
	var random = Math.floor(Math.random() * 9);
	var cells = $(".col-md-3");
	console.log(cells);
	$(cells[random]).addClass("mole");
	var timeoutId = setTimeout (function(){
	$(cells[random]).removeClass("mole");
	},1500);
	var userTarget = cells[random];
}
getRandomCell();

// var compareWhack = function(event){
// 	console.log("listening working");
// 	if($(e.target).hasClass('mole')) {
//     score += 1;
//     $("#score").html(score);
// 	}
// }

$(".col-md-3").click(function(){
	console.log("listening working");
	if($(".col-md-3").hasClass('mole')) {
    score += 1;
    $("#score").html(score);
	}
});







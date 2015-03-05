//******** JAVASCRIPT FOR WHACKAMOLE GAME *********
//Create your HTML markup and CSS to position your holes. 
//These will be element that your mole will pop in and out of.

//Randomly select a hole on page load and change its background color to red. 
//You may want to nest another element, and use an animated method like .fadeIn().

//Change the red background to use an image. 
//This could be a mole, or any other image you'd like to use.


//Update the code to remove the mole when it is clicked.

//Add score. Each time the mole is successfully clicked, increase the displayed score by 1.
//
// $(document).ready(function() {
    // alert( 'The DOM has finished loading!' );


var getRandomCell = function() {
	var random = Math.floor(Math.random() * 9);
	var cells = $(".col-md-3");
	console.log(cells);
	$(cells[random]).addClass("mole");
}



	

// });




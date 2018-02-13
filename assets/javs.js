$(document).ready(function(){
});
	
var wins = 0;
var loses = 0;
var targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
var score = 0;
$("#scoreDiv").text(score);
var targetNumberHere;
var updateScore;

var clickGreen = Math.floor((Math.random() * 12) + 1);
var clickPink = Math.floor((Math.random() * 12) + 1);
var clickPurple = Math.floor((Math.random() * 12) + 1);
var clickBlue = Math.floor((Math.random() * 12) + 1);


// pushes crystal images to page
var imageCrystalGreen = $("<img src=assets/images/green.png>");
$("#imageCrystalGreen").append(imageCrystalGreen);

var imageCrystalPink = $("<img src=assets/images/pink.png>");
$("#imageCrystalPink").append(imageCrystalPink);

var imageCrystalBlue = $("<img src=assets/images/blue.png>");
$("#imageCrystalBlue").append(imageCrystalBlue);

var imageCrystalPurple = $("<img src=assets/images/purple.png>");
$("#imageCrystalPurple").append(imageCrystalPurple);


// click functions for images
$("#imageCrystalGreen").on("click", function(){
	score += clickGreen
	$("#scoreDiv").text(score);
	console.log(clickGreen);
	checkGuess()
});

$("#imageCrystalPink").on("click", function(){
	score += clickPink
	$("#scoreDiv").text(score);
	console.log(clickPink);
	checkGuess()
});

$("#imageCrystalBlue").on("click", function(){
	score += clickBlue
	$("#scoreDiv").text(score);
	console.log(clickBlue);
	checkGuess()
});

$("#imageCrystalPurple").on("click", function(){
	score += clickPurple
	$("#scoreDiv").text(score);
	console.log(clickPurple);
	checkGuess()
});

//Checks Guess
var checkGuess = function() {
	if (score === targetNumber) {
		wins++;
		reset()
		alert("You Win!");
		$("#wins").html(wins);
	} else if (score > targetNumber) {
		loses++;
		reset()
		alert ("You lose!");
		$("#loses").html(loses);
	};

};

// pushes target number to page
 $("#targetNumberHere").text(targetNumber);
 $("#wins").html(wins);
 $("#loses").html(loses);
 $("#score").html(score);


var reset = function() {
	targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
	$("#targetNumberHere").text(targetNumber);
	clickGreen = Math.floor((Math.random() * 12) + 1);
	clickPink = Math.floor((Math.random() * 12) + 1);
	clickPurple = Math.floor((Math.random() * 12) + 1);
	clickBlue = Math.floor((Math.random() * 12) + 1);
	score = 0;
	$("#scoreDiv").text(score);
};
checkGuess()


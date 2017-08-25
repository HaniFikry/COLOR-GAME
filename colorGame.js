var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor =pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var stateDisplay = document.querySelector("#stateDisplay");
var newColorButton = document.querySelector("#newColor");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");


easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	for (var i = 0 ; i < squares.length ; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

})

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	for (var i = 0 ; i < squares.length ; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
	}
})


newColorButton.addEventListener("click", function(){
	colors =generateRandomColors(numSquares);
	stateDisplay.textContent = "";
	newColorButton.textContent = "New colors";
	h1.style.backgroundColor = "steelblue";
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < colors.length; i++){
	squares[i].style.backgroundColor = colors[i];

}
})
for (var i = 0; i < colors.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor){
			colorChange(clickedColor);
			stateDisplay.textContent = "Correct!"
			h1.style.backgroundColor = clickedColor;
			newColorButton.textContent = "Play again?"

		} else {
			this.style.backgroundColor = "#232323";
			stateDisplay.textContent = "Try again"

		}
	});
}

function colorChange(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generateRandomColors(num){
	arr = [];
	for (var i = 0 ; i < num ; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
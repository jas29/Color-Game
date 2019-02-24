var numSquares = 6;
var colors = RandomColorGenerator(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colorpicker();
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var rgbDis = document.querySelector("#colorDisplay");
rgbDis.textContent = pickedColor.toUpperCase();
var resetButton = document.querySelector("#Reset");
var mode = document.getElementsByClassName("mode");
var score = document.querySelector(".score");
var numScore = 0;

for(var i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		// The following logic is as follows . If the this.textContent = easy then numsq = 3 else they are 6;
		 this.textContent ==="EASY" ? numSquares = 3 : numSquares = 6;
		 Reset();
	});

}

function Reset(){
	// reset the array of colors
	colors = RandomColorGenerator(numSquares);
	// reset the the correct color.
	pickedColor = colorpicker();
	// reset the display to show the change in choice of colors.
	rgbDis.textContent = pickedColor.toUpperCase();
	// change the actual color displayed in the squares
	resetButton.textContent = "NEW COLORS";

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	// reset the h1 color background
	h1.style.backgroundColor = "steelblue";

	message.textContent = "";
}


resetButton.addEventListener("click",function(){
	Reset();
});


for(var i=0;i<squares.length;i++){
	// to add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];

	// to add event listeners to the squares
	squares[i].addEventListener("click",function(){
		var clicked = this.style.backgroundColor;
		if(clicked === pickedColor){
			for(var j=0;j<squares.length;j++){
				squares[j].style.backgroundColor = pickedColor;
			}
			resetButton.textContent = "PLAY AGAIN!";
			h1.style.backgroundColor = pickedColor;
			message.textContent = "Correct !!";
			numScore++;
			score.textContent = numScore;
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again !!";
		}
	});

}


function colorpicker(){
	// math.random creates a random number but in decimals therefore the math.floor(). math.random() only gives random 
	// number b/w 0 and 1. therefore we must multiply it it by for ex 6 to get number b/w 0 and 6.
	var num = Math.floor(Math.random()*colors.length);  
	console.log(num);	
	return colors[num];
}

function RandomColorGenerator(num){
	var array = [];
	for(var i=0;i<num;i++){
		// generating random numbers b/w 0 and 255 for the values of red blue and green.
		array[i] = "rgb("+(Math.floor(Math.random() *256))+", "+(Math.floor(Math.random() *256))+", "+(Math.floor(Math.random() *256))+")";
		console.log(array[i]);
	}
	// the array containing random colors is then returned and then stored in the colors array.
	return array;
}













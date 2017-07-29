var boardWidth = document.getElementById("mainboard").offsetWidth;
var boardHeight = document.getElementById("mainboard").offsetHeight;
var boardX = 16;
var boardY = 16;
var cellWidth;
var cellHeight;
var random = false;
var opacity = false;
var rainbow = false;

createElements(boardX, boardY, boardWidth, boardHeight); //creating grid

function createElements(boardX, boardY){
	cellWidth = (boardWidth-2)/boardX;
	cellHeight = boardHeight/boardY;
	for(var i=0; i<boardX*boardY; i++){
		var innerDiv = document.createElement("div");
		innerDiv.className = "cell";
		innerDiv.style.width = cellWidth +"px";
		innerDiv.style.display = "inline-block";
		innerDiv.style.height = cellHeight + "px";
		document.getElementById("mainboard").appendChild(innerDiv); 
		innerDiv.addEventListener("mouseover", changeColor);
	}
}


var backColor;

function getColor(color){
	random = false;
	rainbow = false;
	opacity = false
	style = window.getComputedStyle(color);
	backColor = style.getPropertyValue("background-color");
	return backColor;
}

function randomOn(){
	random=true;
	rainbow = false;
	opacity = false
}

function randomColor(){
var r = Math.floor(Math.random()*255)
var g = Math.floor(Math.random()*255)
var b = Math.floor(Math.random()*255)
return "rgb("+ r + ", " + g + ", " + b + ")";
}

function opacityColorON(){
	random = false;
	rainbow = false;
	opacity = true;
	
}
function rainbowOn(){
	rainbow = true;
	random = false;
	opacity = false;
}
var rainbowArray;
function rainbowColors(curnumber){
	 rainbowArray = ["red", "orange", "yellow", "green", "blue", "darkblue",  "purple"];
	return rainbowArray[curnumber];
}

rainbowNumber = 0;
var curOpacity;
function changeColor(){
	if(random == true){
		this.style.backgroundColor = randomColor();
		this.style.opacity = 1;
	}
/*else if(opacity == true){
this.style.backgroundColor = "black";
this.style.opacity = 0.5;

}
*/
	else if(rainbow == true){
		
			if(rainbowNumber == 7){
			rainbowNumber = 0;
			}
		this.style.backgroundColor = rainbowColors(rainbowNumber);
		rainbowNumber++;
	}

	else
		this.style.backgroundColor = backColor;
		this.style.opacity = 1;
}

var elements;
function resetToDefault(){
	var elements = document.querySelectorAll(".cell");
	for(var i=0; i<boardX*boardY; i++){
		elements[i].remove();
		/*elements[i].style.backgroundColor = "white";
		elements[0].parentNode.removeChild(elements[0]);*/
	}
	boardX = Number(prompt("Podaj liczbę  kratek X (mniej niż 90):", "16"));
	boardY = Number(prompt("Podaj liczbę  kratek Y (mniej niż 90):", "16"));
	
	boardX = Math.floor(boardX);
	boardY = Math.floor(boardY);
	if((boardX>90)||(boardY) > 90){
		boardX=0;
		boardY=0;
		alert("Za duży zakres!");
	}

	else if((boardX <= 0)||(boardY <= 0)){
		alert("X i Y nie mogą być mniejsze od 1");
		document.getElementById("reset").innerHTML="Ustaw parametry"
	}
	else
		document.getElementById("reset").innerHTML="Reset"

	createElements(boardX, boardY, boardWidth, boardHeight);
}

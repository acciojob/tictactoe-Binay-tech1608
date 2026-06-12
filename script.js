//your JS code here. If required.


const mybtn = document.getElementById("btn");

mybtn.addEventListener("click" , function(){
	const element = document.createElement("h1");
	element.innerHTML = "TIC TAC TOE";
	element.style.fontStyle = "italic";
	element.style.fontFamily = "cursive";

	const boardcontainer = document.getElementById("game-board");
	boardcontainer.innerHTML = '';

	for(let i=0; i<9; i++){
		const cell = document.createElement('div');
		cell.classList.add('cell');
		boardcontainer.appendChild(cell);
	}
});
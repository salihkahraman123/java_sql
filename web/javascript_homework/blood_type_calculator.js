let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let mother = document.getElementById("input1");
let father = document.getElementById("input2");
context.fillStyle = "Red";

function calculate(){
	let x = mother.value.slice(0, Number(mother.value.length)-1);
	let y = father.value.slice(0, Number(father.value.length)-1);
	let answer = "Type valid information";
	
	if (y == "AB"){
		y = mother.value.slice(0, Number(mother.value.length)-1);
		x = "AB"
	}
	if(x == "AB"){
		if (y == "0"){
				answer = "A, B";
			}else if (y = "A"){
				answer = "A, B, AB";
			}else if (y = "B"){
				answer = "A, B, AB";
			}else answer = "A, B, AB";
	} else {
		if (y == "A"){
		y = mother.value.slice(0, Number(mother.value.length)-1);
		x = "A";
		}
		if (x == "A"){
			if (y == "B"){
				answer = "A, B, 0, AB";
			}else if(y == "0"){
				answer = "A, 0";
			}else answer = "A, 0";
		} else if(x == "0" && y == "0"){
			answer = "0";
		}else answer = "B, 0";
	}
	document.getElementById("answer").innerHTML = answer;
}

document.onkeydown = function (e){
	if(e.key == "Enter"){
		calculate();
	}
}

function drawTable(){
	let a = "111 84 39 21 21 15 6 3";
	let b = a.split(" ");
	for(let i=0; i<8; i++){
		context.fillRect(0+i*50, 300 - b[i], 50, b[i]);
		context.strokeRect(0+i*50, 300 - b[i], 50, b[i]);
	}
}

drawTable();
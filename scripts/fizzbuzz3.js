"use strict";

function greetChange() {
	let firstName = document.getElementById('fName').value;
	let midInitial = document.getElementById('mName').value;
	let lastName = document.getElementById('lName').value;
	let newGreet = `Welcome, ${firstName} ${midInitial} ${lastName}!`
	document.getElementById('greeting').innerHTML = newGreet;
	
	let result = '';	
	
	const firstDiv = 3;
	const secondDiv = 5;
	const thirdDiv = 7;
	
	for (var i = 1; i <= 140; i++) {
		result += i.toString();
		if (!evenDiv(i, firstDiv) && !evenDiv(i, secondDiv) && !evenDiv(i, thirdDiv)) {
			result += " One";
		}
		else {
			if (evenDiv(i, firstDiv)) {
				result += " More";
			}
			if (evenDiv(i, secondDiv)) {
				result += " Try";
			}
			if (evenDiv(i, thirdDiv)) {
				result += " One more";
			}
		}
		result += "<br>";
	}
	
	document.getElementById('output').innerHTML = result;
}

function evenDiv(num1, num2) {
	return (num1 % num2 == 0 ? true : false);
}

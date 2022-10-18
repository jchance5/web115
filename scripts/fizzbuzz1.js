"use strict";



function fizzBuzz() {
	const first = document.getElementById('firstName').value;
	const mid = document.getElementById('middleInitial').value;
	const last = document.getElementById('lastName').value;
	document.getElementById('greeting').innerHTML = newGreeting;
	let outputText = "";
	for (var i = 1; i <= 140; i++) {
        if (i % 3 != 0 && i % 5 != 0) {
            outputText += i + " one";
        }
        else {
            outputText += i.toString();
            if (i % 3 == 0) {
                outputText += " more";
            }
            if (i % 5 == 0) {
                outputText += " try";
            }
            outputText += "<br>";
        }
    } 
	document.getElementById('output').innerHTML = outputText;
}

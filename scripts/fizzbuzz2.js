"use strict";

window.onload = function() {
  
  document.forms[0].onsubmit = function() {
    var first_name=document.getElementById("fName").value;
    var middle_name=document.getElementById("mName").value;
    var last_name=document.getElementById("lName").value;
    alert("Hello! " + fName + " " +  mName + ". " + lName + ".");
    var firstNum = parseInt(prompt("Please enter the first number? "));
    var secondNum = parseInt(prompt("Please enter the second number? "));
    var words = 140;
    var expect = "";
    for (var i = 1; i <= words; i++) {
	    if (displayWords(i,firstNum) && displayWords(i,secondNum)) {
				values += i +". "+ "One<br>";
		}
			else if (displayWords(i,firstNum) && ! displayWords(i,secondNum)) {
				values += i +". "+ "More<br>";
		}
			else if (! displayWords(i,firstNum) && displayWords(i,secondNum)) {
				values += i +". "+ "Try<br>";
		}
			else {
				values += i +". "+ "One more<br>";
      }
    }
    
    document.getElementById("displayR").innerHTML = expect;     
    return false;
  }
  function displayWords (firstNum, secondNum) {
    if (firstNum % secondNum === 0) {
      return true;
      }
      else {
        return false;
        }
    }

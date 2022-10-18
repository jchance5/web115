"use strict";

window.onload = function() {
  
  document.forms[0].onsubmit = function() {
    var first_name=document.getElementById("fName").value;
    var middle_name=document.getElementById("mName").value;
    var last_name=document.getElementById("lName").value;
    var welcome=document.getElementById("greeting").textContent;
    document.getElementById("greeting").innerHTML = welcome +" "+ first_name +" "+ middle_name + ". " + last_name;
    var words = 140;
    var expect = "";
    for (var i = 1; i <= words; i++) {
	    if (i % 3 === 0 && i % 5 != 0) {
				expect += i +".) "+ "One<br>";
		}
			else if (i % 5 === 0 && i % 3 != 0) {
				expect +=  i +".) "+ "More<br>";
		}
			else if (i % 5 === 0 && i % 3 === 0) {
				expect +=  i +".) "+ "Try<br>";
		}
			else {
				expect +=  i +".) "+ "One more<br>";
      }
    }
    
    document.getElementById("displayR").innerHTML = expect;     
    return false;
  };
};

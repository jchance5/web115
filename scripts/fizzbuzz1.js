"use strict";

window.onload = function() {
  
  document.forms[0].onsubmit = function() {
    var first_name=document.getElementById("fName").value;
    var middle_name=document.getElementById("mName").value;
    var last_name=document.getElementById("lName").value;
    var welcome=document.getElementById("greeting").textContent;
    document.getElementById("greeting").innerHTML = welcome +" "+ first_name +" "+ middle_name + ". " + last_name;   
    let result = '';		
	for (var i = 1; i <= 140; i++) {
		        result += i.toString();
		        if (i % 3 != 0 && i % 5 != 0) {
			              result += " one";
		        }
		        else {
			              if (i % 3 == 0) {
				                    result += " more";
			              }
			              if (i % 5 == 0) {
				                    result += " try";
			              }
		        }
		        result += "<br>";
	  }
	
	  document.getElementById('output').innerHTML = result;
}

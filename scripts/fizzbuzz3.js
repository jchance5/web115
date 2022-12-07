"use strict";

    
function greetChange() {
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    document.getElementById("display").innerHTML = "Welcome to GiveAntherChance Est Fizz Buzz," +fName+" "+mName+" "+lName;

    
    var ptag = document.getElementById("nums");
    let valueNum = "";	
 for (var i = 1; i <= 140; i++) {
    
    var listparagraph = document.createElement('p');
    
      if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        
        valueNum = i.toString() + ". " + " One";
        listparagraph.innerText = valueNum;
        listparagraph.style.color ="white";
        ptag.appendChild(listparagraph);
        }
     else if (i % 3 === 0 && i % 5 === 0) {
            
            valueNum = i.toString() + ". " + " More";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
     else if (i % 3 === 0 && i % 7 === 0) {

            valueNum = i.toString() + ". " + " Try";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
    else if (i % 5 === 0 && i % 7 === 0) {
           
            valueNum = i.toString() + ". " + " Give";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
    else if (i % 3 === 0 ) {
            
            valueNum = i.toString() + ". " + "  Another";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
    else if (i % 5 === 0 ) {
            
            valueNum = i.toString() + ". " + " Chance";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
    else if (i % 7 === 0) {
        
        valueNum = i.toString() + ". " + " One more";
        listparagraph.innerText = valueNum;
        listparagraph.style.color ="white";
        ptag.appendChild(listparagraph);
        
        }
    else {
       
        valueNum = i.toString() + ". " + " Give another";
        listparagraph.innerText = valueNum;
        
        ptag.appendChild(listparagraph); 
         
    }

 
}    
    
}      

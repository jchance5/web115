function greeting() {   
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    alert("Hello! " + fName + " " +  mName + ". " + lName + ".");
    var firstNum = parseInt(prompt("Please enter the first number? "));
    var secondNum = parseInt(prompt("Please enter the second number? "));
    var values = "";
    var numLists = 140;

 for (var i = 1; i <= numLists; i++) { 

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
    document.getElementById("mycounter").innerHTML = values;     
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
function changehead() {
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    document.getElementById("display").innerHTML = "Welcome to Shebba Mineral Fizz Buzz," +fName+" "+mName+" "+lName;
}
